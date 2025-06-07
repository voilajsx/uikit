#!/usr/bin/env node

/**
 * @fileoverview voila-bundle CLI - Theme bundling tool
 * @description Bundles multiple theme presets into unified CSS for consumer projects
 * @package @voilajsx/uikit
 * @file /bin/theme-bundler.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Consumer project theme directories to search
const THEME_SEARCH_PATHS = [
  'src/themes',
  'src/themes/presets',
  'themes',
  'themes/presets',
  'src/styles/themes',
  'styles/themes',
];

// CLI Arguments
const args = process.argv.slice(2);
const outputFile =
  args.find((arg) => arg.startsWith('--output='))?.split('=')[1] ||
  'src/themes.css';
const watch = args.includes('--watch');
const verbose = args.includes('--verbose') || args.includes('-v');
const help = args.includes('--help') || args.includes('-h');

/**
 * Show CLI help
 */
function showHelp() {
  console.log(`
🎨 voila-bundle - Theme Bundler for @voilajsx/uikit

USAGE:
  npx voila-bundle [options]

OPTIONS:
  --output=<path>     Output file path (default: src/themes.css)
  --watch            Watch for changes and rebuild automatically
  --verbose, -v      Verbose logging
  --help, -h         Show this help

EXAMPLES:
  npx voila-bundle
  npx voila-bundle --output=public/themes.css
  npx voila-bundle --watch --verbose

THEME STRUCTURE:
  Your theme files should export a default object with this structure:
  
  export default {
    name: 'My Theme',
    id: 'my-theme',
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
  }

SEARCH PATHS:
  voila-bundle will search these directories for theme files:
  ${THEME_SEARCH_PATHS.map((p) => `  - ${p}/`).join('\n')}
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

      const files = fs
        .readdirSync(fullPath)
        .filter((file) => file.endsWith('.js') && !file.startsWith('index.'));

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
          const themeUrl = `file://${themePath.replace(
            /\\/g,
            '/'
          )}?timestamp=${Date.now()}`;

          // Clear cache to allow reloading in watch mode
          if (require.cache[themePath]) {
            delete require.cache[themePath];
          }

          const themeModule = await import(themeUrl);
          const theme = themeModule.default;

          if (theme && theme.id && theme.name && theme.light && theme.dark) {
            themes.push(theme);
            foundFiles.push(`${themesDir}/${file}`);
            log(`      ✅ ${theme.name} (${theme.id})`, true);
          } else {
            console.warn(`      ⚠️  ${file} - invalid theme structure`);
          }
        } catch (err) {
          console.warn(`      ❌ ${file} - ${err.message}`);
        }
      }
    } catch (err) {
      log(`   ❌ ${themesDir}/ - error: ${err.message}`, true);
    }
  }

  return { themes, foundFiles };
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
      console.log('\n💡 Run "npx voila-bundle --help" for more information');
      return false;
    }

    // Generate CSS
    const themeCSS = themes.map(generateThemeCSS).filter(Boolean).join('\n\n');

    if (!themeCSS) {
      console.log('❌ No valid CSS generated from themes');
      return false;
    }

    // Create output content
    const outputContent = `/*
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

    // Ensure output directory exists
    const outputPath = path.resolve(process.cwd(), outputFile);
    const outputDir = path.dirname(outputPath);

    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
      log(`📁 Created directory: ${outputDir}`, true);
    }

    // Write the file
    fs.writeFileSync(outputPath, outputContent);

    const duration = Date.now() - startTime;

    console.log(
      `\n✅ Successfully bundled ${themes.length} themes in ${duration}ms`
    );
    themes.forEach((theme) => console.log(`   🎨 ${theme.name} (${theme.id})`));
    console.log(`\n📦 Output: ${outputPath}`);
    console.log(`📄 Size: ${(outputContent.length / 1024).toFixed(1)}kb`);

    if (!watch) {
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
            if (filename && filename.endsWith('.js')) {
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
