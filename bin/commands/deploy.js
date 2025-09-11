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
      console.log('\n🚀 Deploying to GitHub Pages...');
      await deployToGitHubPages(distPath, options);
    } else {
      console.log('\n🚀 Deploy to any static host:');
      console.log('  • Netlify: Drag dist/ folder to netlify.com/drop');
      console.log('  • Vercel: npx vercel --prod');
      console.log('  • Surge: npx surge dist/');
      console.log('  • GitHub Pages: Upload dist/ contents');
    }

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

/**
 * Deploy to GitHub Pages using gh-pages package
 */
async function deployToGitHubPages(distPath, options) {
  try {
    // Validate git repository setup
    await validateGitRepository();
    
    // gh-pages is now bundled with UIKit
    
    console.log('📤 Publishing to gh-pages branch...');
    
    // Use gh-pages to deploy
    let ghPages;
    try {
      ghPages = await import('gh-pages');
    } catch (error) {
      throw new Error(`gh-pages module not available. This can happen when:

📋 Solutions:
  1. Use local UIKit: npx uikit deploy --github (recommended)
  2. Install locally: npm install gh-pages
  3. Install globally: npm install -g gh-pages

💡 Note: Running 'npx uikit' ensures gh-pages is available from UIKit dependencies.`);
    }
    
    const deployOptions = {
      dotfiles: true, // Include .nojekyll
      message: `Deploy UIKit site - ${new Date().toISOString()}`,
      user: {
        name: 'UIKit Deploy',
        email: 'deploy@voilajsx.com'
      }
    };

    // Add custom domain support if CNAME exists
    try {
      await fs.access('CNAME');
      await fs.copyFile('CNAME', path.join(distPath, 'CNAME'));
      console.log('✅ Added CNAME for custom domain');
    } catch {
      // No CNAME file, that's fine
    }

    await new Promise((resolve, reject) => {
      ghPages.publish(distPath, deployOptions, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });

    console.log('✅ Successfully deployed to GitHub Pages!');
    console.log('\n📋 GitHub Pages Setup:');
    console.log('  1. Go to your repository settings');
    console.log('  2. Navigate to Pages section');  
    console.log('  3. Set source to "Deploy from a branch"');
    console.log('  4. Select "gh-pages" branch and "/ (root)" folder');
    console.log('  5. Your site will be available shortly');
    
    // Try to determine the GitHub Pages URL
    try {
      const packageJson = JSON.parse(await fs.readFile('package.json', 'utf8'));
      const repoUrl = packageJson.repository?.url;
      if (repoUrl) {
        const match = repoUrl.match(/github\.com[/:](.*?)\.git/);
        if (match) {
          const [, repoPath] = match;
          const siteName = packageJson.name || repoPath.split('/')[1];
          console.log(`\n🌐 Site URL: https://${repoPath.split('/')[0]}.github.io/${siteName}/`);
        }
      }
    } catch {
      // Could not determine URL
    }
    
  } catch (error) {
    console.error('❌ GitHub Pages deployment failed:', error.message);
    console.log('\n📋 Manual deployment options:');
    console.log('  1. Run: npx gh-pages -d dist --dotfiles');
    console.log('  2. Or upload dist/ contents manually to gh-pages branch');
    throw error;
  }
}

/**
 * Validate git repository setup for GitHub Pages deployment
 */
async function validateGitRepository() {
  try {
    // Check if git is initialized
    await fs.access('.git');
  } catch (error) {
    throw new Error(`Git repository not initialized. Run these commands first:

📋 Setup Steps:
  1. git init
  2. git add .
  3. git commit -m "Initial commit"  
  4. Create repository on GitHub
  5. git remote add origin https://github.com/username/repository.git
  6. git push -u origin main
  7. npx uikit deploy --github

🔗 Need help? Visit: https://docs.github.com/en/get-started/quickstart/create-a-repo`);
  }

  // Check if remote origin exists
  try {
    const result = await new Promise((resolve, reject) => {
      const gitRemote = spawn('git', ['remote', 'get-url', 'origin'], {
        stdio: ['ignore', 'pipe', 'pipe'],
        cwd: process.cwd()
      });

      let stdout = '';
      let stderr = '';
      
      gitRemote.stdout?.on('data', (data) => {
        stdout += data.toString();
      });
      
      gitRemote.stderr?.on('data', (data) => {
        stderr += data.toString();
      });

      gitRemote.on('close', (code) => {
        if (code === 0 && stdout.trim()) {
          resolve(stdout.trim());
        } else {
          reject(new Error(stderr || 'No remote origin'));
        }
      });

      gitRemote.on('error', (error) => {
        reject(error);
      });
    });

    // Validate it's a GitHub URL
    if (!result.includes('github.com')) {
      console.log('⚠️  Warning: Remote origin is not a GitHub repository');
      console.log(`   Current origin: ${result}`);
      console.log('   GitHub Pages deployment requires a GitHub repository');
    } else {
      console.log(`✅ Git repository validated: ${result}`);
    }

  } catch (error) {
    throw new Error(`Git remote origin not configured. Run these commands:

📋 Setup Steps:
  1. Create repository on GitHub
  2. git remote add origin https://github.com/username/repository.git
  3. git push -u origin main
  4. npx uikit deploy --github

🔗 Current remotes: Run 'git remote -v' to see configured remotes`);
  }

  // Check if there are committed changes
  try {
    await new Promise((resolve, reject) => {
      const gitLog = spawn('git', ['log', '--oneline', '-1'], {
        stdio: ['ignore', 'pipe', 'pipe'],
        cwd: process.cwd()
      });

      gitLog.on('close', (code) => {
        if (code === 0) {
          resolve();
        } else {
          reject(new Error('No commits found'));
        }
      });

      gitLog.on('error', (error) => {
        reject(error);
      });
    });
  } catch (error) {
    throw new Error(`No commits found in repository. Run these commands:

📋 Setup Steps:
  1. git add .
  2. git commit -m "Initial commit"
  3. git push -u origin main
  4. npx uikit deploy --github

💡 Tip: Ensure your project files are committed before deploying`);
  }
}