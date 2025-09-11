/**
 * @fileoverview UIKit Build Command - Production build
 * @description Build project for production with theme bundling
 * @package @voilajsx/uikit
 */

import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';

/**
 * Build project for production
 */
export async function buildProject(options) {
  console.log('📦 Building UIKit project...\n');

  try {
    // Validate project
    await validateProject();

    // Bundle themes first
    console.log('🎨 Processing themes...');
    await bundleThemesForBuild();

    // Run TypeScript compilation if tsconfig exists
    if (fs.existsSync('tsconfig.json')) {
      console.log('⚡ Compiling TypeScript...');
      await runCommand('npx', ['tsc'], 'TypeScript compilation failed');
    }

    // Run Vite build
    console.log('📦 Building with Vite...');
    const viteArgs = ['vite', 'build'];
    
    if (options.outDir) {
      viteArgs.push('--outDir', options.outDir);
    }

    await runCommand('npx', viteArgs, 'Vite build failed');

    // Apply SEO optimizations by default for better discoverability
    console.log('🔍 Applying SEO optimizations...');
    await applySEOOptimizations(options.outDir || 'dist');

    // Bundle analysis if requested
    if (options.analyze) {
      console.log('📊 Analyzing bundle...');
      await runCommand('npx', ['vite-bundle-analyzer', options.outDir || 'dist'], 'Bundle analysis failed');
    }

    // Get build info
    const distPath = path.resolve(options.outDir || 'dist');
    const buildSize = await getBuildSize(distPath);

    console.log('✅ Build complete!');
    console.log(`📁 Output: ${distPath}`);
    console.log(`📄 Size: ${buildSize}`);
    
    console.log('\n💡 Next steps:');
    console.log('  npx uikit deploy    # Generate static site');
    console.log('  npx serve dist      # Preview build locally');

  } catch (error) {
    console.error('❌ Build failed:', error.message);
    process.exit(1);
  }
}

/**
 * Validate project structure
 */
async function validateProject() {
  if (!fs.existsSync('package.json')) {
    throw new Error('No package.json found. Run this command in a project directory.');
  }

  if (!fs.existsSync('index.html')) {
    throw new Error('No index.html found. This doesn\'t appear to be a Vite project.');
  }
}

/**
 * Bundle themes for production build
 */
async function bundleThemesForBuild() {
  const themeDirs = [
    'src/themes/presets',
    'src/web/assets/themes/presets',
    'themes/presets'
  ];

  let hasThemes = false;
  for (const dir of themeDirs) {
    if (fs.existsSync(dir)) {
      const files = fs.readdirSync(dir).filter(f => 
        f.endsWith('.js') || f.endsWith('.ts')
      );
      if (files.length > 0) {
        hasThemes = true;
        break;
      }
    }
  }

  if (hasThemes) {
    try {
      const { bundleThemes } = await import('./bundle.js');
      await bundleThemes({ 
        output: 'src/styles/globals.css',
        verbose: false
      });
      console.log('✅ Themes processed');
    } catch (error) {
      console.log('⚠️  Theme processing failed:', error.message);
    }
  }
}

/**
 * Run a command and return a promise
 */
function runCommand(command, args, errorMessage) {
  return new Promise((resolve, reject) => {
    const childProcess = spawn(command, args, {
      stdio: 'inherit',
      cwd: process.cwd()
    });

    childProcess.on('close', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`${errorMessage} (exit code ${code})`));
      }
    });

    childProcess.on('error', (error) => {
      reject(new Error(`${errorMessage}: ${error.message}`));
    });
  });
}

/**
 * Calculate build size
 */
async function getBuildSize(distPath) {
  try {
    const stats = fs.statSync(distPath);
    if (stats.isDirectory()) {
      let totalSize = 0;
      const files = fs.readdirSync(distPath);
      
      for (const file of files) {
        const filePath = path.join(distPath, file);
        const stat = fs.statSync(filePath);
        if (stat.isFile()) {
          totalSize += stat.size;
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

/**
 * Apply SEO optimizations to built files
 */
async function applySEOOptimizations(distPath) {
  const fs = await import('fs/promises');
  
  try {
    // Read index.html
    const indexPath = path.join(distPath, 'index.html');
    let html = await fs.readFile(indexPath, 'utf8');

    // Enhanced meta tags for UIKit projects
    const seoMeta = `
    <!-- SEO Optimizations -->
    <meta name="description" content="Professional React UI components with beautiful themes and OKLCH color science. Built with @voilajsx/uikit.">
    <meta name="keywords" content="react, ui components, themes, design system, tailwind css, typescript">
    <meta name="author" content="@voilajsx/uikit">
    
    <!-- Open Graph -->
    <meta property="og:type" content="website">
    <meta property="og:title" content="UIKit Component Showcase">
    <meta property="og:description" content="Professional React UI components with beautiful themes">
    <meta property="og:site_name" content="@voilajsx/uikit">
    
    <!-- Twitter Cards -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="UIKit Component Showcase">
    <meta name="twitter:description" content="Professional React UI components with beautiful themes">
    
    <!-- Performance -->
    <meta name="robots" content="index,follow">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="dns-prefetch" href="https://fonts.gstatic.com">
    
    <!-- Theme color -->
    <meta name="theme-color" content="#000000">`;

    // Insert SEO meta tags after existing head content
    if (!html.includes('<!-- SEO Optimizations -->')) {
      html = html.replace('</head>', `${seoMeta}\n  </head>`);
    }

    // Add structured data for better SEO
    const structuredData = `
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "UIKit Component Showcase",
      "description": "Professional React UI components with beautiful themes",
      "url": window.location.origin,
      "applicationCategory": "DesignApplication",
      "operatingSystem": "Web",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "author": {
        "@type": "Organization",
        "name": "@voilajsx/uikit"
      }
    }
    </script>`;

    // Add structured data before closing body tag
    if (!html.includes('"@type": "WebApplication"')) {
      html = html.replace('</body>', `  ${structuredData}\n  </body>`);
    }

    // Write optimized HTML
    await fs.writeFile(indexPath, html);

    // Try to determine base URL for sitemap/robots
    let baseUrl = 'https://example.com'; // Default fallback
    try {
      const packagePath = path.resolve('package.json');
      const packageJson = JSON.parse(await fs.readFile(packagePath, 'utf8'));
      if (packageJson.homepage) {
        baseUrl = packageJson.homepage.replace(/\/$/, ''); // Remove trailing slash
      }
    } catch {
      // Use default
    }

    // Create sitemap.xml for better crawling
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`;

    await fs.writeFile(path.join(distPath, 'sitemap.xml'), sitemap);

    // Create robots.txt
    const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml`;

    await fs.writeFile(path.join(distPath, 'robots.txt'), robotsTxt);

    console.log('✅ Applied SEO optimizations:');
    console.log('  • Enhanced meta tags for social sharing');
    console.log('  • Structured data for rich snippets');  
    console.log('  • Generated sitemap.xml');
    console.log('  • Created robots.txt');
    console.log('  • Added performance hints');

  } catch (error) {
    console.log('⚠️  SEO optimization failed:', error.message);
  }
}