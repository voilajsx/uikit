/**
 * @fileoverview UIKit Bundle Command - Direct theme bundling functionality
 * @description Core theme bundling with watch mode and verbose logging
 * @package @voilajsx/uikit
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create require function for loading CommonJS modules
const require = createRequire(import.meta.url);

// Consumer project theme directories to search
const webAssetsPath = path.resolve(process.cwd(), 'src/web/assets');
const useWebAssets = fs.existsSync(webAssetsPath);

const THEME_SEARCH_PATHS = useWebAssets
  ? [
      'src/web/assets/themes/presets',
      'src/web/assets/themes',
      'themes/presets',
      'themes',
    ]
  : [
      'src/themes/presets',
      'src/themes',
      'themes/presets',
      'themes',
      'src/styles/themes',
      'styles/themes',
    ];

/**
 * Log with optional verbose mode
 */
function log(message, isVerbose = false, verbose = false) {
  if (!isVerbose || verbose) {
    console.log(message);
  }
}

/**
 * Generate unified @theme directive for all themes
 */
function generateUnifiedThemeCSS(themes) {
  if (!themes || themes.length === 0) {
    return '';
  }

  // Collect all design tokens from all themes
  const allDesignTokens = new Set();
  const allColorVars = new Set();
  
  themes.forEach(theme => {
    if (theme.design) {
      Object.entries(theme.design).forEach(([key, value]) => {
        const cssKey = `--voila-${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`;
        allDesignTokens.add(`  ${cssKey}: ${value};`);
      });
    }
    
    // Collect all unique color variable names
    Object.keys(theme.light || {}).forEach(key => {
      const cssKey = `--color-${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`;
      allColorVars.add(cssKey);
    });
  });

  // Use the first theme as the base for light mode colors
  const baseTheme = themes[0];
  const lightVariables = Object.entries(baseTheme.light)
    .map(([key, value]) => {
      const cssKey = `--color-${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`;
      return `  ${cssKey}: ${value};`;
    })
    .join('\n');

  // Generate enhanced design tokens section
  let enhancedTokens = '';
  if (allDesignTokens.size > 0) {
    enhancedTokens = `\n  /* 🚀 Enhanced Design Tokens from all themes */\n${Array.from(allDesignTokens).join('\n')}\n`;
  }

  return `/* Define all theme colors in @theme - this creates the Tailwind utilities */
@theme {
  --color-radius: 0.75rem;${enhancedTokens}
  
  /* Base Colors (using ${baseTheme.name} as default) */
${lightVariables}
}`;
}

/**
 * Generate theme-specific light mode color overrides
 */
function generateThemeLightModes(themes) {
  return themes.map(theme => {
    // Skip base theme since its colors are already in @theme
    if (theme.id === 'base') return '';
    
    const lightVariables = Object.entries(theme.light)
      .map(([key, value]) => {
        const cssKey = `--color-${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`;
        return `  ${cssKey}: ${value};`;
      })
      .join('\n');

    return `/* Light mode colors for ${theme.name} theme */
.theme-${theme.id} {
${lightVariables}
}`;
  }).filter(Boolean).join('\n\n');
}

/**
 * Generate theme-specific dark mode overrides
 */
function generateThemeDarkModes(themes) {
  return themes.map(theme => {
    const darkVariables = Object.entries(theme.dark)
      .map(([key, value]) => {
        const cssKey = `--color-${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`;
        return `  ${cssKey}: ${value};`;
      })
      .join('\n');

    let customStyles = '';
    if (theme.customStyles) {
      const stylesWithoutImports = removeFontImports(theme.customStyles);
      if (stylesWithoutImports) {
        customStyles = `\n${stylesWithoutImports}`;
      }
    }

    return `/* Dark mode overrides for ${theme.name} theme */
.theme-${theme.id}.dark {
${darkVariables}
}${customStyles}`;
  }).join('\n\n');
}

/**
 * Remove font imports from customStyles to avoid duplication
 */
function removeFontImports(customStyles) {
  if (!customStyles) return '';
  return customStyles.replace(/@import\s+url\([^)]+\);\s*/g, '').trim();
}

/**
 * Load a single theme file with both ESM and CommonJS support
 */
async function loadThemeFile(themePath, fileName) {
  try {
    // Clear any cached version first
    delete require.cache[themePath];

    let theme = null;

    // Try ES modules first
    try {
      const themeUrl = `file://${themePath.replace(
        /\\/g,
        '/'
      )}?timestamp=${Date.now()}`;
      const themeModule = await import(themeUrl);
      theme = themeModule.default || themeModule;

      // Handle named exports (studioTheme, auroraTheme, etc.)
      if (!theme && themeModule) {
        const namedExports = Object.keys(themeModule).filter(
          (key) =>
            key !== 'default' &&
            typeof themeModule[key] === 'object' &&
            themeModule[key].id &&
            themeModule[key].name
        );
        if (namedExports.length > 0) {
          theme = themeModule[namedExports[0]];
        }
      }
    } catch (esmError) {
      // Fall back to CommonJS
      try {
        theme = require(themePath);
        // Handle both module.exports = theme and module.exports.default = theme
        if (theme.default) {
          theme = theme.default;
        }
      } catch (cjsError) {
        throw new Error(
          `Both ESM and CJS import failed. ESM: ${esmError.message}, CJS: ${cjsError.message}`
        );
      }
    }

    return theme;
  } catch (err) {
    throw new Error(`Failed to load ${fileName}: ${err.message}`);
  }
}

/**
 * Find and load themes from consumer project
 */
async function loadThemes(verbose = false) {
  const themes = [];
  const cwd = process.cwd();
  const foundFiles = [];

  log('🔍 Searching for theme files...', true, verbose);

  for (const themesDir of THEME_SEARCH_PATHS) {
    try {
      const fullPath = path.resolve(cwd, themesDir);

      if (!fs.existsSync(fullPath)) {
        log(`   ❌ ${themesDir}/ - not found`, true, verbose);
        continue;
      }

      const files = fs.readdirSync(fullPath).filter(
        (file) =>
          (file.endsWith('.js') || file.endsWith('.ts')) &&
          !file.startsWith('index.') &&
          !file.includes('theme-bundler') && // Skip build scripts
          !file.includes('.d.ts') && // Skip TypeScript declarations
          !file.includes('.test.') && // Skip test files
          !file.includes('.spec.') // Skip spec files
      );

      if (files.length === 0) {
        log(`   📁 ${themesDir}/ - no theme files`, true, verbose);
        continue;
      }

      log(
        `   📁 ${themesDir}/ - found ${files.length} files: ${files.join(
          ', '
        )}`,
        true,
        verbose
      );

      for (const file of files) {
        try {
          const themePath = path.resolve(fullPath, file);
          log(`      🔄 Loading ${file}...`, true, verbose);

          const theme = await loadThemeFile(themePath, file);

          if (theme && theme.id && theme.name && theme.light && theme.dark) {
            themes.push(theme);
            foundFiles.push(`${themesDir}/${file}`);
            log(`      ✅ ${theme.name} (${theme.id})`, true, verbose);
          } else {
            console.warn(`      ⚠️  ${file} - invalid theme structure`);
            log(`         Expected: { id, name, light: {}, dark: {} }`, true, verbose);
          }
        } catch (err) {
          console.warn(`      ❌ ${file} - ${err.message}`);
        }
      }
    } catch (err) {
      log(`   ❌ ${themesDir}/ - error: ${err.message}`, true, verbose);
    }
  }

  return { themes, foundFiles };
}

/**
 * Read existing globals.css and preserve non-theme content
 */
function readExistingGlobals(outputPath, verbose = false) {
  if (!fs.existsSync(outputPath)) {
    log(`📄 Creating new globals.css file`, true, verbose);
    return { beforeThemes: '', afterThemes: '' };
  }

  const content = fs.readFileSync(outputPath, 'utf8');

  // Look for theme markers
  const startMarker = '/* THEME_DECLARATIONS_PLACEHOLDER */';
  const endMarker = '/* END_THEME_DECLARATIONS */';

  const startIndex = content.indexOf(startMarker);

  if (startIndex === -1) {
    // No existing themes - append to end
    log(`📄 No theme marker found, will append themes to end`, true, verbose);
    return {
      beforeThemes: content.trim() + '\n\n',
      afterThemes: '',
    };
  }

  const endIndex = content.indexOf(endMarker);
  const actualEndIndex =
    endIndex === -1
      ? startIndex + startMarker.length
      : endIndex + endMarker.length;

  return {
    beforeThemes: content.substring(0, startIndex + startMarker.length),
    afterThemes: content.substring(actualEndIndex),
  };
}

/**
 * Core bundle themes functionality
 */
async function bundleThemesCore(options = {}) {
  const startTime = Date.now();
  const { output, verbose = false } = options;

  try {
    const { themes } = await loadThemes(verbose);

    if (themes.length === 0) {
      console.log('❌ No valid themes found!');
      console.log(
        '\n📁 Make sure your theme files are in one of these directories:'
      );
      THEME_SEARCH_PATHS.forEach((dir) => console.log(`   - ${dir}/`));
      console.log('\n🔧 Run with --verbose to see detailed loading attempts');
      return false;
    }

    // Generate unified @theme directive
    const unifiedThemeCSS = generateUnifiedThemeCSS(themes);
    
    // Generate theme-specific light mode color overrides
    const lightModeCSS = generateThemeLightModes(themes);
    
    // Generate theme-specific dark mode overrides
    const darkModeCSS = generateThemeDarkModes(themes);

    if (!unifiedThemeCSS) {
      console.log('❌ No valid CSS generated from themes');
      return false;
    }

    // Determine output path
    const webAssetsPath = path.resolve(process.cwd(), 'src/web/assets');
    const useWebAssets = fs.existsSync(webAssetsPath);
    const outputFile = output || (useWebAssets ? 'src/web/assets/styles/globals.css' : 'src/styles/globals.css');
    const outputPath = path.resolve(process.cwd(), outputFile);
    const outputDir = path.dirname(outputPath);

    // Ensure output directory exists
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
      log(`📁 Created directory: ${outputDir}`, true, verbose);
    }

    let finalContent;

    if (outputPath.includes('globals.css')) {
      // Preserve existing globals.css content
      const { beforeThemes, afterThemes } = readExistingGlobals(outputPath, verbose);

      finalContent = `${beforeThemes}

/* 🎨 Bundled Themes for @voilajsx/uikit - Generated by voila-bundle */
/* Generated: ${new Date().toISOString()} */
/* Themes: ${themes.map((t) => t.name).join(', ')} */
/* DO NOT EDIT THIS SECTION MANUALLY - Run "npx uikit bundle" to regenerate */

${unifiedThemeCSS}

${lightModeCSS}

${darkModeCSS}

/* END_THEME_DECLARATIONS */
${afterThemes}`;
    } else {
      // Create standalone theme file
      finalContent = `/*
 * 🎨 Bundled Themes for @voilajsx/uikit
 * 
 * Auto-generated by uikit bundle  
 * Generated: ${new Date().toISOString()}
 * Themes: ${themes.length}
 * 
 * DO NOT EDIT THIS FILE DIRECTLY
 * Edit your theme source files and run "npx uikit bundle" to regenerate
 */

@import "tailwindcss";
@import "./fonts.css";

/* Modern @theme directive for Tailwind CSS v4+ */
${unifiedThemeCSS}

${lightModeCSS}

${darkModeCSS}

`;
    }

    // Write the file
    fs.writeFileSync(outputPath, finalContent);

    const duration = Date.now() - startTime;

    console.log(
      `\n✅ Successfully bundled ${themes.length} themes in ${duration}ms`
    );
    themes.forEach((theme) => console.log(`   🎨 ${theme.name} (${theme.id})`));
    console.log(`\n📦 Output: ${outputPath}`);
    console.log(`📄 Size: ${(finalContent.length / 1024).toFixed(1)}kb`);

    if (outputPath.includes('globals.css')) {
      console.log('\n💡 Themes added to globals.css - import in your app');
    } else {
      console.log('\n💡 Import in your app: import "./themes.css"');
    }

    return true;
  } catch (err) {
    console.error('❌ Bundle failed:', err.message);
    if (verbose) {
      console.error(err.stack);
    }
    return false;
  }
}

/**
 * Watch mode - rebuild on file changes
 */
async function watchMode(options) {
  console.log('👀 Watch mode enabled - monitoring theme files...\n');

  let timeout;
  const debounceMs = 300;

  const rebuild = () => {
    clearTimeout(timeout);
    timeout = setTimeout(async () => {
      console.log('\n🔄 Change detected, rebuilding...');
      await bundleThemesCore(options);
      console.log('👀 Watching for changes...\n');
    }, debounceMs);
  };

  // Initial build
  const success = await bundleThemesCore(options);
  if (!success) return;

  // Watch all theme directories
  const cwd = process.cwd();
  const watchers = [];

  for (const themesDir of THEME_SEARCH_PATHS) {
    const fullPath = path.resolve(cwd, themesDir);
    if (fs.existsSync(fullPath)) {
      try {
        const watcher = fs.watch(
          fullPath,
          { recursive: true },
          (eventType, filename) => {
            if (
              filename &&
              (filename.endsWith('.js') || filename.endsWith('.ts')) &&
              !filename.includes('theme-bundler') &&
              !filename.includes('.d.ts')
            ) {
              log(`📝 ${eventType}: ${themesDir}/${filename}`, true, options.verbose);
              rebuild();
            }
          }
        );
        watchers.push(watcher);
        log(`👀 Watching: ${themesDir}/`, true, options.verbose);
      } catch (err) {
        console.warn(`⚠️  Could not watch ${themesDir}/: ${err.message}`);
      }
    }
  }

  if (watchers.length === 0) {
    console.log('❌ No directories to watch');
    return;
  }

  console.log('👀 Watching for changes... (Press Ctrl+C to stop)\n');

  // Handle graceful shutdown
  process.on('SIGINT', () => {
    console.log('\n🛑 Stopping watch mode...');
    watchers.forEach((watcher) => watcher.close());
    process.exit(0);
  });
}

/**
 * Main bundle themes function - CLI entry point
 */
export async function bundleThemes(options) {
  console.log('🎨 UIKit Theme Bundler\n');

  try {
    if (options.watch) {
      await watchMode(options);
    } else {
      const success = await bundleThemesCore(options);
      if (!success) {
        process.exit(1);
      }
      
      if (!options.watch) {
        console.log('\n💡 Next steps:');
        console.log('  - Themes are now bundled in your globals.css');
        console.log('  - Use theme classes like .theme-base, .theme-elegant');
        console.log('  - Run "npx uikit serve" to start development server');
      }
    }
  } catch (error) {
    console.error('❌ Bundle command failed:', error.message);
    process.exit(1);
  }
}