#!/usr/bin/env node

/**
 * @fileoverview voila-bundle CLI - Theme bundling tool for @voilajsx/uikit
 * @description Bundles theme presets into globals.css for consumer projects
 * @package @voilajsx/uikit
 * @file /bin/theme-bundler.js
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
const THEME_SEARCH_PATHS = [
  'src/themes/presets',
  'src/themes',
  'themes/presets',
  'themes',
  'src/styles/themes',
  'styles/themes',
];

// CLI Arguments
const args = process.argv.slice(2);
const outputFile =
  args.find((arg) => arg.startsWith('--output='))?.split('=')[1] ||
  'src/styles/globals.css';
const watch = args.includes('--watch');
const verbose = args.includes('--verbose') || args.includes('-v');
const help = args.includes('--help') || args.includes('-h');
const append = args.includes('--append') || true; // Default to append mode for globals.css

/**
 * Show CLI help
 */
function showHelp() {
  console.log(`
🎨 voila-bundle - Theme Bundler for @voilajsx/uikit

USAGE:
  npx voila-bundle [options]

OPTIONS:
  --output=<path>     Output file path (default: src/styles/globals.css)
  --append            Append to existing globals.css (default: true)
  --watch             Watch for changes and rebuild automatically
  --verbose, -v       Verbose logging
  --help, -h          Show this help

EXAMPLES:
  npx voila-bundle
  npx voila-bundle --output=src/styles/themes.css
  npx voila-bundle --watch --verbose

THEME STRUCTURE:
  Your theme files should export a default object with this structure:
  
  export const myTheme: ThemePreset = {
    id: 'my-theme',
    name: 'My Theme',
    description: 'Theme description',
    light: {
      background: 'oklch(1 0 0)',
      foreground: 'oklch(0.2 0.1 250)',
      // ... more colors
    },
    dark: {
      background: 'oklch(0.1 0.1 250)',
      foreground: 'oklch(0.9 0.1 250)',
      // ... more colors  
    }
  };
  export default myTheme;

SEARCH PATHS:
  voila-bundle will search these directories for theme files:
  ${THEME_SEARCH_PATHS.map((p) => `  - ${p}/`).join('\n')}

OUTPUT:
  By default, themes are appended to globals.css with a marker comment.
  The bundler preserves existing CSS and only updates the theme section.
`);
}

/**
 * Log with optional verbose mode
 */
function log(message, isVerbose = false) {
  if (!isVerbose || verbose) {
    console.log(message);
  }
}

/**
 * Generate CSS for a single theme
 */
function generateThemeCSS(theme) {
  if (!theme || !theme.id || !theme.light || !theme.dark) {
    console.warn(
      `⚠️  Invalid theme structure for ${
        theme?.id || 'unknown'
      } - missing required properties`
    );
    return '';
  }

  const lightVariables = Object.entries(theme.light)
    .map(([key, value]) => {
      const cssKey = `--color-${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`;
      return `  ${cssKey}: ${value};`;
    })
    .join('\n');

  const darkVariables = Object.entries(theme.dark)
    .map(([key, value]) => {
      const cssKey = `--color-${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`;
      return `  ${cssKey}: ${value};`;
    })
    .join('\n');

  return `/* ${theme.name} Theme */
.theme-${theme.id} {
${lightVariables}
}

.theme-${theme.id}.dark {
${darkVariables}
}`;
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
      log(`      ESM failed for ${fileName}: ${esmError.message}`, true);

      // Fall back to CommonJS
      try {
        theme = require(themePath);
        // Handle both module.exports = theme and module.exports.default = theme
        if (theme.default) {
          theme = theme.default;
        }
      } catch (cjsError) {
        log(`      CJS failed for ${fileName}: ${cjsError.message}`, true);
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
async function loadThemes() {
  const themes = [];
  const cwd = process.cwd();
  const foundFiles = [];

  log('🔍 Searching for theme files...', true);

  for (const themesDir of THEME_SEARCH_PATHS) {
    try {
      const fullPath = path.resolve(cwd, themesDir);

      if (!fs.existsSync(fullPath)) {
        log(`   ❌ ${themesDir}/ - not found`, true);
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
        log(`   📁 ${themesDir}/ - no theme files`, true);
        continue;
      }

      log(
        `   📁 ${themesDir}/ - found ${files.length} files: ${files.join(
          ', '
        )}`,
        true
      );

      for (const file of files) {
        try {
          const themePath = path.resolve(fullPath, file);
          log(`      🔄 Loading ${file}...`, true);

          const theme = await loadThemeFile(themePath, file);

          if (theme && theme.id && theme.name && theme.light && theme.dark) {
            themes.push(theme);
            foundFiles.push(`${themesDir}/${file}`);
            log(`      ✅ ${theme.name} (${theme.id})`, true);
          } else {
            console.warn(`      ⚠️  ${file} - invalid theme structure`);
            log(`         Expected: { id, name, light: {}, dark: {} }`, true);
            log(
              `         Got: ${JSON.stringify(
                Object.keys(theme || {}),
                null,
                2
              )}`,
              true
            );
          }
        } catch (err) {
          console.warn(`      ❌ ${file} - ${err.message}`);
          log(`         Full error: ${err.stack}`, true);
        }
      }
    } catch (err) {
      log(`   ❌ ${themesDir}/ - error: ${err.message}`, true);
    }
  }

  return { themes, foundFiles };
}

/**
 * Read existing globals.css and preserve non-theme content
 */
function readExistingGlobals(outputPath) {
  if (!fs.existsSync(outputPath)) {
    log(`📄 Creating new globals.css file`, true);
    return { beforeThemes: '', afterThemes: '' };
  }

  const content = fs.readFileSync(outputPath, 'utf8');

  // Look for theme markers
  const startMarker = '/* THEME_DECLARATIONS_PLACEHOLDER */';
  const endMarker = '/* END_THEME_DECLARATIONS */';

  const startIndex = content.indexOf(startMarker);

  if (startIndex === -1) {
    // No existing themes - append to end
    log(`📄 No theme marker found, will append themes to end`, true);
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
 * Bundle themes into CSS
 */
async function bundleThemes() {
  const startTime = Date.now();

  try {
    const { themes, foundFiles } = await loadThemes();

    if (themes.length === 0) {
      console.log('❌ No valid themes found!');
      console.log(
        '\n📁 Make sure your theme files are in one of these directories:'
      );
      THEME_SEARCH_PATHS.forEach((dir) => console.log(`   - ${dir}/`));
      console.log(
        '\n💡 Theme files should export a default object or named export like:'
      );
      console.log(
        '   export const myTheme: ThemePreset = { id: "my-theme", name: "My Theme", light: {...}, dark: {...} }'
      );
      console.log('   export default myTheme;');
      console.log('\n🔧 Run with --verbose to see detailed loading attempts');
      return false;
    }

    // Generate CSS
    const themeCSS = themes.map(generateThemeCSS).filter(Boolean).join('\n\n');

    if (!themeCSS) {
      console.log('❌ No valid CSS generated from themes');
      return false;
    }

    // Handle output file
    const outputPath = path.resolve(process.cwd(), outputFile);
    const outputDir = path.dirname(outputPath);

    // Ensure output directory exists
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
      log(`📁 Created directory: ${outputDir}`, true);
    }

    let finalContent;

    if (append && outputPath.includes('globals.css')) {
      // Preserve existing globals.css content
      const { beforeThemes, afterThemes } = readExistingGlobals(outputPath);

      finalContent = `${beforeThemes}

  /* 🎨 Bundled Themes for @voilajsx/uikit - Generated by voila-bundle */
  /* Generated: ${new Date().toISOString()} */
  /* Themes: ${themes.map((t) => t.name).join(', ')} */
  /* DO NOT EDIT THIS SECTION MANUALLY - Run "npx voila-bundle" to regenerate */

${themeCSS}

  /* END_THEME_DECLARATIONS */${afterThemes}`;
    } else {
      // Create standalone theme file
      finalContent = `/*
 * 🎨 Bundled Themes for @voilajsx/uikit
 * 
 * Auto-generated by voila-bundle
 * Generated: ${new Date().toISOString()}
 * Themes: ${themes.length}
 * 
 * DO NOT EDIT THIS FILE DIRECTLY
 * Edit your theme source files and run "npx voila-bundle" to regenerate
 */

${themeCSS}
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

    if (!watch) {
      if (outputPath.includes('globals.css')) {
        console.log('\n💡 Themes added to globals.css - import in your app');
      } else {
        console.log('\n💡 Import in your app: import "./themes.css"');
      }
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
async function watchMode() {
  console.log('👀 Watch mode enabled - monitoring theme files...\n');

  let timeout;
  const debounceMs = 300;

  const rebuild = () => {
    clearTimeout(timeout);
    timeout = setTimeout(async () => {
      console.log('\n🔄 Change detected, rebuilding...');
      await bundleThemes();
      console.log('👀 Watching for changes...\n');
    }, debounceMs);
  };

  // Initial build
  const success = await bundleThemes();
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
              log(`📝 ${eventType}: ${themesDir}/${filename}`, true);
              rebuild();
            }
          }
        );
        watchers.push(watcher);
        log(`👀 Watching: ${themesDir}/`, true);
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
 * Main CLI function
 */
async function main() {
  if (help) {
    showHelp();
    return;
  }

  console.log('🎨 voila-bundle - Theme Bundler for @voilajsx/uikit\n');

  if (watch) {
    await watchMode();
  } else {
    const success = await bundleThemes();
    process.exit(success ? 0 : 1);
  }
}

// Run CLI
main().catch((err) => {
  console.error('💥 Unexpected error:', err);
  process.exit(1);
});
