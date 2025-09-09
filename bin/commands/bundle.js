/**
 * @fileoverview UIKit Bundle Command - Theme bundling functionality
 * @description Wraps existing theme-bundler.js with enhanced CLI interface
 * @package @voilajsx/uikit
 */

import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * Bundle themes using existing theme-bundler
 */
export async function bundleThemes(options) {
  console.log('🎨 UIKit Theme Bundler\n');

  try {
    // Path to existing theme-bundler.js
    const bundlerPath = join(__dirname, '../theme-bundler.js');
    
    // Build arguments for theme-bundler
    const args = [];
    
    if (options.output) {
      args.push(`--output=${options.output}`);
    }
    
    if (options.watch) {
      args.push('--watch');
    }
    
    if (options.verbose) {
      args.push('--verbose');
    }

    // Check if theme-bundler exists
    if (!fs.existsSync(bundlerPath)) {
      console.error('❌ Theme bundler not found. Please ensure @voilajsx/uikit is properly installed.');
      process.exit(1);
    }

    // Run theme-bundler
    const bundler = spawn('node', [bundlerPath, ...args], {
      stdio: 'inherit',
      cwd: process.cwd()
    });

    return new Promise((resolve, reject) => {
      bundler.on('close', (code) => {
        if (code === 0) {
          if (!options.watch) {
            console.log('\n💡 Next steps:');
            console.log('  - Import the generated CSS in your app');
            console.log('  - Use theme classes like .theme-aurora, .theme-neon');
            console.log('  - Run "npx uikit serve" to start development server');
          }
          resolve();
        } else {
          reject(new Error(`Theme bundling failed with code ${code}`));
        }
      });

      bundler.on('error', (error) => {
        console.error('❌ Failed to start theme bundler:', error.message);
        reject(error);
      });
    });

  } catch (error) {
    console.error('❌ Bundle command failed:', error.message);
    process.exit(1);
  }
}