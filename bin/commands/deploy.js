/**
 * @fileoverview UIKit Deploy Command - Static site generation
 * @description Generate optimized static site for deployment (GitHub Pages ready)
 * @package @voilajsx/uikit
 */

import { spawn } from 'child_process';
import fs from 'fs/promises';
import path from 'path';

/**
 * Generate static site for deployment
 */
export async function deployProject(options) {
  console.log('📄 Generating static site...\n');

  try {
    // Validate project
    await validateProject();

    // Build first with deployment optimizations
    console.log('🎨 Pre-rendering with themes...');
    await bundleThemesForDeploy();

    console.log('⚡ Building optimized static site...');
    await buildForDeploy(options);

    // Post-process for static deployment
    console.log('🔗 Optimizing for static hosting...');
    await optimizeForStatic(options);

    const distPath = path.resolve('dist');
    const buildSize = await getBuildSize(distPath);

    console.log('✅ Static site ready!');
    console.log(`📁 Output: ${distPath} (${buildSize})`);
    
    if (options.github) {
      console.log('\n🚀 GitHub Pages deployment:');
      console.log('  1. Push your code to GitHub');
      console.log('  2. Enable Pages in repository settings');
      console.log('  3. Set source to "GitHub Actions" or upload dist/ manually');
    } else {
      console.log('\n🚀 Deploy to any static host:');
    }
    
    console.log('  • Netlify: Drag dist/ folder to netlify.com/drop');
    console.log('  • Vercel: npx vercel --prod');
    console.log('  • Surge: npx surge dist/');
    console.log('  • GitHub Pages: Upload dist/ contents');

  } catch (error) {
    console.error('❌ Deploy generation failed:', error.message);
    process.exit(1);
  }
}

/**
 * Validate project structure
 */
async function validateProject() {
  try {
    await fs.access('package.json');
    await fs.access('index.html');
  } catch (error) {
    throw new Error('Invalid project structure. Ensure package.json and index.html exist.');
  }
}

/**
 * Bundle themes for deployment
 */
async function bundleThemesForDeploy() {
  const themeDirs = [
    'src/themes/presets',
    'src/web/assets/themes/presets', 
    'themes/presets'
  ];

  let hasThemes = false;
  for (const dir of themeDirs) {
    try {
      const stat = await fs.stat(dir);
      if (stat.isDirectory()) {
        const files = await fs.readdir(dir);
        if (files.some(f => f.endsWith('.js') || f.endsWith('.ts'))) {
          hasThemes = true;
          break;
        }
      }
    } catch {
      // Directory doesn't exist
    }
  }

  if (hasThemes) {
    try {
      const { bundleThemes } = await import('./bundle.js');
      await bundleThemes({ 
        output: 'src/styles/globals.css',
        verbose: false
      });
      console.log('✅ Themes bundled for deployment');
    } catch (error) {
      console.log('⚠️  Theme bundling failed:', error.message);
    }
  }
}

/**
 * Build with deployment optimizations
 */
async function buildForDeploy(options) {
  const viteArgs = ['vite', 'build'];
  
  // Set base path for deployment
  if (options.base && options.base !== '/') {
    viteArgs.push('--base', options.base);
  }

  // GitHub Pages specific optimizations
  if (options.github) {
    // GitHub Pages typically serves from repository name path
    const packageJson = JSON.parse(await fs.readFile('package.json', 'utf8'));
    const repoName = packageJson.name || 'uikit-site';
    viteArgs.push('--base', `/${repoName}/`);
  }

  return new Promise((resolve, reject) => {
    const build = spawn('npx', viteArgs, {
      stdio: 'inherit',
      cwd: process.cwd()
    });

    build.on('close', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`Build failed with code ${code}`));
      }
    });

    build.on('error', (error) => {
      reject(new Error(`Build failed: ${error.message}`));
    });
  });
}

/**
 * Optimize build for static hosting
 */
async function optimizeForStatic(options) {
  const distPath = 'dist';
  
  try {
    // Ensure dist directory exists
    await fs.access(distPath);

    // Create .nojekyll for GitHub Pages (prevents Jekyll processing)
    if (options.github) {
      await fs.writeFile(path.join(distPath, '.nojekyll'), '');
      console.log('✅ Created .nojekyll for GitHub Pages');
    }

    // Create 404.html for SPA routing support
    const indexHtml = await fs.readFile(path.join(distPath, 'index.html'), 'utf8');
    await fs.writeFile(path.join(distPath, '404.html'), indexHtml);
    console.log('✅ Created 404.html for SPA routing');

    // Add meta tags for better static hosting support
    await addMetaTags(distPath);

  } catch (error) {
    console.log('⚠️  Static optimization partially failed:', error.message);
  }
}

/**
 * Add helpful meta tags to index.html
 */
async function addMetaTags(distPath) {
  try {
    const indexPath = path.join(distPath, 'index.html');
    let html = await fs.readFile(indexPath, 'utf8');

    // Add cache-busting and performance meta tags if not present
    const metaTags = [
      '<meta name="robots" content="index,follow">',
      '<meta name="generator" content="UIKit Static Site Generator">',
      '<meta http-equiv="X-UA-Compatible" content="IE=edge">'
    ];

    for (const tag of metaTags) {
      if (!html.includes(tag.split('"')[1])) {
        html = html.replace('<head>', `<head>\\n    ${tag}`);
      }
    }

    await fs.writeFile(indexPath, html);
    console.log('✅ Enhanced meta tags for deployment');
    
  } catch (error) {
    // Non-critical error
  }
}

/**
 * Calculate build size
 */
async function getBuildSize(distPath) {
  try {
    const stats = await fs.stat(distPath);
    if (stats.isDirectory()) {
      let totalSize = 0;
      const files = await fs.readdir(distPath);
      
      for (const file of files) {
        const filePath = path.join(distPath, file);
        try {
          const stat = await fs.stat(filePath);
          if (stat.isFile()) {
            totalSize += stat.size;
          }
        } catch {
          // Skip files that can't be accessed
        }
      }
      
      return formatBytes(totalSize);
    }
  } catch (error) {
    return 'Unknown';
  }
  
  return 'Unknown';
}

/**
 * Format bytes to human readable string
 */
function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
}