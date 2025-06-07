/**
 * @fileoverview Theme generator script
 * @description Generates globals.css from theme presets
 * @package @voilajsx/uikit
 * @file /src/themes/theme-generator.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Paths
const PRESETS_DIR = path.join(__dirname, 'presets');
const BASE_STYLES_PATH = path.join(__dirname, 'base-styles.css');
const OUTPUT_PATH = path.join(__dirname, 'globals.css');

/**
 * Generate CSS for a theme
 * @param {Object} theme - Theme object
 * @returns {string} CSS rules
 */
function generateThemeCSS(theme) {
  if (!theme || !theme.id || !theme.light || !theme.dark) {
    console.warn(`Invalid theme structure for ${theme?.id || 'unknown'}`);
    return '';
  }

  // Generate light theme CSS
  const lightVariables = Object.entries(theme.light)
    .map(([key, value]) => {
      // Convert camelCase to kebab-case and add --color- prefix
      const cssKey = `--color-${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`;
      return `  ${cssKey}: ${value};`;
    })
    .join('\n');

  // Generate dark theme CSS
  const darkVariables = Object.entries(theme.dark)
    .map(([key, value]) => {
      // Convert camelCase to kebab-case and add --color- prefix
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
 * Load all theme presets from the presets directory
 * @returns {Promise<Array<Object>>} Array of theme objects
 */
async function loadThemePresets() {
  try {
    // Get all JS files in the presets directory
    const files = fs
      .readdirSync(PRESETS_DIR)
      .filter((file) => file.endsWith('.js'))
      // Skip index.js and special files
      .filter((file) => file !== 'index.js' && file !== 'default.js');

    console.log(`Found theme files: ${files.join(', ')}`);

    const themes = [];

    for (const file of files) {
      try {
        // Use dynamic import for ES modules with file URL format
        const themePath = path.resolve(PRESETS_DIR, file);
        const themeUrl = `file://${themePath.replace(/\\/g, '/')}`;

        console.log(`Loading theme from: ${themeUrl}`);

        // Dynamic import returns a module with a default export
        const themeModule = await import(themeUrl);
        const theme = themeModule.default;

        if (theme && theme.id && theme.light && theme.dark) {
          themes.push(theme);
          console.log(`✓ Loaded theme: ${theme.name} (${theme.id})`);
        } else {
          console.warn(`✗ Invalid theme structure in ${file} - skipping`);
        }
      } catch (err) {
        console.warn(`✗ Skipping ${file}: ${err.message}`);
        console.error(err);
      }
    }

    return themes;
  } catch (err) {
    console.error('Error reading presets directory:', err);
    return [];
  }
}

/**
 * Build globals.css from themes and base styles
 */
async function buildGlobalCSS() {
  try {
    // Read base styles template
    const baseStyles = fs.readFileSync(BASE_STYLES_PATH, 'utf8');

    // Load themes from the presets directory
    const themes = await loadThemePresets();

    console.log(
      `Building CSS with ${themes.length} themes:`,
      themes.map((t) => t.name).join(', ')
    );

    // Generate CSS for each theme
    const themeCSS = themes.map(generateThemeCSS).join('\n\n');

    // Replace placeholder with theme CSS
    const globalCSS = baseStyles.replace(
      '/* THEME_DECLARATIONS_PLACEHOLDER */',
      themeCSS
    );

    // Write to output file
    fs.writeFileSync(OUTPUT_PATH, globalCSS);

    console.log(`✅ Generated globals.css with ${themes.length} themes`);
  } catch (err) {
    console.error('Error building globals.css:', err);
    console.error(err.stack);
    process.exit(1);
  }
}

// Run the build
buildGlobalCSS();
