/**
 * @fileoverview UIKit Create Command - Project scaffolding
 * @description Creates new UIKit projects from templates
 * @package @voilajsx/uikit
 */

import fs from 'fs/promises';
import path from 'path';
import { spawn } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Create a new UIKit project
 */
export async function createProject(name, options) {
  console.log(`🎨 Creating UIKit project "${name}"...\n`);

  try {
    // Determine template type
    const templateType = options.spa ? 'spa' : options.multi ? 'multi' : options.fbca ? 'fbca' : 'single';
    
    // Validate project name
    if (!name || !/^[a-zA-Z0-9-_]+$/.test(name)) {
      console.error('❌ Invalid project name. Use only letters, numbers, hyphens, and underscores.');
      process.exit(1);
    }

    // Check if directory exists
    const projectPath = path.resolve(process.cwd(), name);
    try {
      await fs.access(projectPath);
      console.error(`❌ Directory "${name}" already exists.`);
      process.exit(1);
    } catch {
      // Directory doesn't exist, good to proceed
    }

    // Create project directory
    await fs.mkdir(projectPath, { recursive: true });
    console.log(`✅ Created ${name}/`);

    // Generate project files based on template
    await generateTemplate(projectPath, templateType, options);

    // Generate config files (skip for FBCA as it has its own config templates)
    if (templateType !== 'fbca') {
      await generateConfigFiles(projectPath);
    }
    
    // Generate package.json (skip for FBCA as it has its own template)
    if (templateType !== 'fbca') {
      await generatePackageJson(projectPath, name, templateType);
    }
    
    // Create README
    await generateReadme(projectPath, name, templateType);

    console.log('✅ Generated project files');

    // Install dependencies
    console.log('\n📦 Installing dependencies...');
    await installDependencies(projectPath);
    console.log('✅ Installed dependencies');

    // Success message
    console.log(`\n🎉 Successfully created "${name}"!`);
    console.log('\n🚀 Next steps:');
    console.log(`  cd ${name}`);
    console.log('  npx uikit serve');
    console.log('\n💡 Or run individual commands:');
    console.log('  npx uikit bundle    # Bundle themes');
    console.log('  npx uikit serve     # Start dev server');
    console.log('  npx uikit build     # Production build');

  } catch (error) {
    console.error('❌ Failed to create project:', error.message);
    process.exit(1);
  }
}

/**
 * Generate template files based on type
 */
async function generateTemplate(projectPath, templateType, options) {
  const srcPath = path.join(projectPath, 'src');
  await fs.mkdir(srcPath, { recursive: true });

  switch (templateType) {
    case 'single':
      await generateSinglePageTemplate(srcPath, options.theme);
      break;
    case 'spa':
      await generateSPATemplate(srcPath, options.theme);
      break;
    case 'multi':
      await generateMultiPageTemplate(srcPath, options.theme);
      break;
    case 'fbca':
      await generateFBCATemplate(srcPath, options.theme);
      break;
  }
}

/**
 * Generate single-page theme showcase template
 */
async function generateSinglePageTemplate(srcPath, theme = 'base') {
  // Main App component
  const appContent = `import React from 'react';
import { Button } from '@voilajsx/uikit/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@voilajsx/uikit/card';
import { useTheme } from '@voilajsx/uikit/theme-provider';

const UIKitShowcase: React.FC = () => {
  const { theme, mode, setTheme, setMode, availableThemes, toggleMode } = useTheme();

  const themeDescriptions = {
    base: 'Clean default configuration showcasing the base system with Inter typography (default)',
    elegant: 'Fresh sky blue theme with clean design',
    metro: 'Dark teal theme with bright yellow accents',
    studio: 'Sophisticated neutral theme with golden accents',
    vivid: 'Premium cursive theme with sophisticated typography for luxury brands'
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border p-6">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-primary-foreground font-bold text-sm">
              UI
            </div>
            <div>
              <h3 className="voila-brand-logo text-xl font-bold">@voilajsx/uikit</h3>
              <p className="text-xs text-muted-foreground">Professional React UI Components</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <select 
              value={theme}
              onChange={(e) => setTheme(e.target.value as any)}
              className="bg-background border border-input rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            >
              {availableThemes.map(themeId => (
                <option key={themeId} value={themeId}>
                  {themeId.charAt(0).toUpperCase() + themeId.slice(1)}
                </option>
              ))}
            </select>
            
            <Button onClick={toggleMode} variant="outline" size="sm">
              {mode === 'dark' ? '☀️' : '🌙'}
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-6 space-y-8">
        
        {/* Hero */}
        <section className="text-center py-8">
          <div className="space-y-4">
            <h1 className="voila-heading text-gradient-primary mb-3">
              Beautiful UI Components
            </h1>
            <p className="voila-subheading text-accent mb-6">
              {availableThemes.length} themes • {mode} mode • Professional React components
            </p>
            <div className="text-sm text-muted-foreground bg-muted px-4 py-2 rounded inline-block">
              {themeDescriptions[theme as keyof typeof themeDescriptions]}
            </div>
          </div>
        </section>

        {/* Colors */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-primary text-primary-foreground p-4 rounded-lg text-center">
            <div className="text-sm font-medium">Primary</div>
          </div>
          <div className="bg-secondary text-secondary-foreground p-4 rounded-lg text-center">
            <div className="text-sm font-medium">Secondary</div>
          </div>
          <div className="bg-accent text-accent-foreground p-4 rounded-lg text-center">
            <div className="text-sm font-medium">Accent</div>
          </div>
          <div className="bg-muted text-muted-foreground p-4 rounded-lg text-center">
            <div className="text-sm font-medium">Muted</div>
          </div>
        </div>

        {/* Components */}
        <div className="space-y-6">
          
          {/* Buttons */}
          <Card>
            <CardHeader>
              <CardTitle>Buttons</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                <Button size="lg">Primary</Button>
                <Button variant="secondary" size="lg">Secondary</Button>
                <Button variant="outline" size="lg">Outline</Button>
                <Button variant="ghost" size="lg">Ghost</Button>
                <Button variant="destructive" size="lg">Delete</Button>
              </div>
            </CardContent>
          </Card>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Feature Card</CardTitle>
                <CardDescription>Standard card component</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Perfect for content areas</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Interactive</CardTitle>
                <CardDescription>With actions</CardDescription>
              </CardHeader>
              <CardContent>
                <Button size="lg" className="w-full">Action</Button>
              </CardContent>
            </Card>
            
            <div className="bg-primary text-primary-foreground p-6 rounded-lg">
              <h4 className="font-semibold mb-2">Primary Card</h4>
              <p className="text-sm opacity-90">Custom background</p>
            </div>
          </div>

          {/* Form Elements */}
          <Card>
            <CardHeader>
              <CardTitle>Form Elements</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Text input"
                  className="p-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                />
                <select className="p-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring">
                  <option>Select option</option>
                  <option>Option 1</option>
                  <option>Option 2</option>
                </select>
              </div>
              
              <textarea 
                placeholder="Textarea"
                rows={3}
                className="w-full p-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring resize-none"
              />
            </CardContent>
          </Card>

          {/* Chart Colors */}
          <Card>
            <CardHeader>
              <CardTitle>Chart Colors</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-5 gap-3">
                <div className="text-center">
                  <div className="w-full h-12 rounded mb-2 bg-chart1" />
                  <div className="text-xs text-muted-foreground">chart1</div>
                </div>
                <div className="text-center">
                  <div className="w-full h-12 rounded mb-2 bg-chart2" />
                  <div className="text-xs text-muted-foreground">chart2</div>
                </div>
                <div className="text-center">
                  <div className="w-full h-12 rounded mb-2 bg-chart3" />
                  <div className="text-xs text-muted-foreground">chart3</div>
                </div>
                <div className="text-center">
                  <div className="w-full h-12 rounded mb-2 bg-chart4" />
                  <div className="text-xs text-muted-foreground">chart4</div>
                </div>
                <div className="text-center">
                  <div className="w-full h-12 rounded mb-2 bg-chart5" />
                  <div className="text-xs text-muted-foreground">chart5</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Typography Scale */}
        <Card>
          <CardHeader>
            <CardTitle>Typography</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <h1 className="text-3xl font-bold">Heading 1</h1>
            <h2 className="text-2xl font-bold">Heading 2</h2>
            <h3 className="text-xl font-bold">Heading 3</h3>
            <p className="text-base">Body text - Lorem ipsum dolor sit amet consectetur.</p>
            <p className="text-sm text-muted-foreground">Small text for captions and metadata.</p>
            <code className="text-sm bg-muted px-2 py-1 rounded">Code snippet</code>
          </CardContent>
        </Card>

      </main>

      {/* Footer */}
      <footer className="border-t border-border p-6 mt-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            @voilajsx/uikit • {theme.charAt(0).toUpperCase() + theme.slice(1)} theme • {mode.charAt(0).toUpperCase() + mode.slice(1)} mode
          </p>
        </div>
      </footer>
    </div>
  );
};

function App() {
  return (
    <UIKitShowcase />
  );
}

export default App;`;

  await fs.writeFile(path.join(srcPath, 'App.tsx'), appContent);

  // Main entry point
  const mainContent = `import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@voilajsx/uikit/theme-provider';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme="base" mode="light" forceConfig={true}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);`;

  await fs.writeFile(path.join(srcPath, 'main.tsx'), mainContent);

  // Create index.css with proper Tailwind v4+ setup
  const cssContent = `/**
 * Main Styles Entry Point
 * Tailwind CSS v4+ with UIKit integration
 */

/* Tailwind CSS v4+ - REQUIRED */
@import "tailwindcss";

/* UIKit base styles - REQUIRED */
@import '@voilajsx/uikit/styles';`;

  await fs.writeFile(path.join(srcPath, 'index.css'), cssContent);

  // Create styles directory and globals.css for theme bundling (consistent with SPA/Multi)
  const stylesPath = path.join(srcPath, 'styles');
  await fs.mkdir(stylesPath, { recursive: true });
  await fs.writeFile(path.join(stylesPath, 'globals.css'), '/* Themes will be bundled here */\n');

  // Create index.html with built-in SEO optimization
  const indexContent = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>🎨 UIKit Theme Showcase</title>
    
    <!-- SEO Optimizations -->
    <meta name="description" content="Professional React UI components with beautiful themes and OKLCH color science. Built with @voilajsx/uikit.">
    <meta name="keywords" content="react, ui components, themes, design system, tailwind css, typescript">
    <meta name="author" content="@voilajsx/uikit">
    
    <!-- Open Graph -->
    <meta property="og:type" content="website">
    <meta property="og:title" content="UIKit Theme Showcase">
    <meta property="og:description" content="Professional React UI components with beautiful themes">
    <meta property="og:site_name" content="@voilajsx/uikit">
    
    <!-- Twitter Cards -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="UIKit Theme Showcase">
    <meta name="twitter:description" content="Professional React UI components with beautiful themes">
    
    <!-- Performance -->
    <meta name="robots" content="index,follow">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="dns-prefetch" href="https://fonts.gstatic.com">
    
    <!-- Theme color -->
    <meta name="theme-color" content="#6366F1">
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
    
    <!-- Structured Data -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "UIKit Theme Showcase",
      "description": "Professional React UI components with beautiful themes",
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
    </script>
  </body>
</html>`;

  await fs.writeFile(path.join(srcPath, '../index.html'), indexContent);

  // Copy documentation
  const templatesPath = path.join(__dirname, '../templates');
  const docsSourcePath = path.join(templatesPath, 'docs');
  const docsTargetPath = path.join(srcPath, '../docs');
  try {
    await fs.access(docsSourcePath);
    await fs.mkdir(docsTargetPath, { recursive: true });
    const docsFiles = await fs.readdir(docsSourcePath);
    for (const file of docsFiles) {
      await fs.copyFile(path.join(docsSourcePath, file), path.join(docsTargetPath, file));
    }
  } catch (error) {
    // Docs directory doesn't exist, skip copying
  }

  // Copy public assets
  const publicSourcePath = path.join(templatesPath, 'favicon.svg');
  const publicTargetPath = path.join(srcPath, '../public');
  try {
    await fs.mkdir(publicTargetPath, { recursive: true });
    await fs.copyFile(publicSourcePath, path.join(publicTargetPath, 'favicon.svg'));
    const heroSourcePath = path.join(templatesPath, 'hero.svg');
    await fs.copyFile(heroSourcePath, path.join(publicTargetPath, 'hero.svg'));
  } catch (error) {
    // Assets don't exist, skip copying
  }
}

/**
 * Generate SPA template with routing
 */
async function generateSPATemplate(srcPath, theme = 'base') {
  const templatesPath = path.join(__dirname, '../templates/spa');

  // Read and process App.tsx template
  const appTemplate = await fs.readFile(path.join(templatesPath, 'App.tsx.template'), 'utf8');
  const appContent = appTemplate.replace(/{{THEME}}/g, theme);
  await fs.writeFile(path.join(srcPath, 'App.tsx'), appContent);

  // Read and copy main.tsx template
  const mainTemplate = await fs.readFile(path.join(templatesPath, 'main.tsx.template'), 'utf8');
  await fs.writeFile(path.join(srcPath, 'main.tsx'), mainTemplate);

  // Read and copy index.css template
  const cssTemplate = await fs.readFile(path.join(templatesPath, 'index.css.template'), 'utf8');
  await fs.writeFile(path.join(srcPath, 'index.css'), cssTemplate);

  // Read and copy index.html template
  const indexTemplate = await fs.readFile(path.join(templatesPath, 'index.html.template'), 'utf8');
  await fs.writeFile(path.join(srcPath, '../index.html'), indexTemplate);

  // Copy public assets
  const publicSourcePath = path.join(templatesPath, 'public');
  const publicTargetPath = path.join(srcPath, '../public');
  try {
    await fs.access(publicSourcePath);
    await fs.mkdir(publicTargetPath, { recursive: true });
    const publicFiles = await fs.readdir(publicSourcePath);
    for (const file of publicFiles) {
      await fs.copyFile(path.join(publicSourcePath, file), path.join(publicTargetPath, file));
    }
  } catch (error) {
    // Public directory doesn't exist, skip copying
  }

  // Copy documentation
  const docsSourcePath = path.join(templatesPath, 'docs');
  const docsTargetPath = path.join(srcPath, '../docs');
  try {
    await fs.access(docsSourcePath);
    await fs.mkdir(docsTargetPath, { recursive: true });
    const docsFiles = await fs.readdir(docsSourcePath);
    for (const file of docsFiles) {
      await fs.copyFile(path.join(docsSourcePath, file), path.join(docsTargetPath, file));
    }
  } catch (error) {
    // Docs directory doesn't exist, skip copying
  }

  // Copy hooks directory
  const hooksSourcePath = path.join(templatesPath, 'hooks');
  const hooksTargetPath = path.join(srcPath, 'hooks');
  try {
    await fs.access(hooksSourcePath);
    await fs.mkdir(hooksTargetPath, { recursive: true });
    const hookFiles = await fs.readdir(hooksSourcePath);
    for (const file of hookFiles) {
      const content = await fs.readFile(path.join(hooksSourcePath, file), 'utf8');
      const targetFile = file.replace('.template', '');
      await fs.writeFile(path.join(hooksTargetPath, targetFile), content);
    }
  } catch (error) {
    // Hooks directory doesn't exist, skip copying
  }

  // Copy components directory
  const componentsSourcePath = path.join(templatesPath, 'components');
  const componentsTargetPath = path.join(srcPath, 'components');
  try {
    await fs.access(componentsSourcePath);
    await fs.mkdir(componentsTargetPath, { recursive: true });
    const componentFiles = await fs.readdir(componentsSourcePath);
    for (const file of componentFiles) {
      const content = await fs.readFile(path.join(componentsSourcePath, file), 'utf8');
      const targetFile = file.replace('.template', '');
      await fs.writeFile(path.join(componentsTargetPath, targetFile), content);
    }
  } catch (error) {
    // Components directory doesn't exist, skip copying
  }

  console.log('✅ Generated SPA template with React Router navigation');
}

/**
 * Generate multi-page template
 */
async function generateMultiPageTemplate(srcPath, theme = 'elegant') {
  const templatesPath = path.join(__dirname, '../templates/multi');
  const projectName = path.basename(path.dirname(srcPath));
  
  // Read and process App.tsx template
  const appTemplate = await fs.readFile(path.join(templatesPath, 'App.tsx.template'), 'utf8');
  const appContent = appTemplate
    .replace(/{{DEFAULT_THEME}}/g, theme)
    .replace(/{{DEFAULT_MODE}}/g, 'light');
  await fs.writeFile(path.join(srcPath, 'App.tsx'), appContent);

  // Read and copy router.tsx template
  const routerTemplate = await fs.readFile(path.join(templatesPath, 'router.tsx.template'), 'utf8');
  await fs.writeFile(path.join(srcPath, 'router.tsx'), routerTemplate);

  // Read and copy main.tsx template
  const mainTemplate = await fs.readFile(path.join(templatesPath, 'main.tsx.template'), 'utf8');
  await fs.writeFile(path.join(srcPath, 'main.tsx'), mainTemplate);

  // Read and copy index.css template
  const cssTemplate = await fs.readFile(path.join(templatesPath, 'index.css.template'), 'utf8');
  await fs.writeFile(path.join(srcPath, 'index.css'), cssTemplate);

  // Read and copy index.html template
  const indexTemplate = await fs.readFile(path.join(templatesPath, 'index.html.template'), 'utf8');
  await fs.writeFile(path.join(srcPath, '../index.html'), indexTemplate);

  // Create pages directory and copy all page templates
  const pagesPath = path.join(srcPath, 'pages');
  await fs.mkdir(pagesPath, { recursive: true });

  const pageFiles = ['Home.tsx.template', 'Components.tsx.template', 'Themes.tsx.template', 'About.tsx.template', 'Contact.tsx.template', 'Login.tsx.template', 'Dashboard.tsx.template', 'ErrorPage.tsx.template'];
  
  for (const pageFile of pageFiles) {
    const pageTemplate = await fs.readFile(path.join(templatesPath, 'pages', pageFile), 'utf8');
    const pageContent = pageTemplate.replace(/{{THEME}}/g, theme);
    const outputFileName = pageFile.replace('.template', '');
    await fs.writeFile(path.join(pagesPath, outputFileName), pageContent);
  }

  // Create styles directory and placeholder
  const stylesPath = path.join(srcPath, 'styles');
  await fs.mkdir(stylesPath, { recursive: true });
  await fs.writeFile(path.join(stylesPath, 'globals.css'), '/* Themes will be bundled here */\n');

  // Create components directory and copy header/footer components
  const componentsPath = path.join(srcPath, 'components');
  await fs.mkdir(componentsPath, { recursive: true });

  const componentFiles = ['Header.tsx.template', 'Footer.tsx.template', 'SEO.tsx.template', 'index.ts.template'];
  
  for (const componentFile of componentFiles) {
    try {
      const componentTemplate = await fs.readFile(path.join(templatesPath, 'components', componentFile), 'utf8');
      const componentContent = componentTemplate
        .replace(/{{PROJECT_NAME}}/g, projectName)
        .replace(/{{CURRENT_YEAR}}/g, new Date().getFullYear().toString())
        .replace(/{{THEME}}/g, theme);
      const outputFileName = componentFile.replace('.template', '');
      await fs.writeFile(path.join(componentsPath, outputFileName), componentContent);
    } catch (error) {
      console.warn(`⚠️ Warning: Could not find component template ${componentFile}`);
    }
  }

  // Copy public assets
  const publicSourcePath = path.join(templatesPath, 'public');
  const publicTargetPath = path.join(srcPath, '../public');
  try {
    await fs.access(publicSourcePath);
    await fs.mkdir(publicTargetPath, { recursive: true });
    const publicFiles = await fs.readdir(publicSourcePath);
    for (const file of publicFiles) {
      await fs.copyFile(path.join(publicSourcePath, file), path.join(publicTargetPath, file));
    }
  } catch (error) {
    // Public directory doesn't exist, skip copying
  }

  // Copy documentation
  const docsSourcePath = path.join(templatesPath, 'docs');
  const docsTargetPath = path.join(srcPath, '../docs');
  try {
    await fs.access(docsSourcePath);
    await fs.mkdir(docsTargetPath, { recursive: true });
    const docsFiles = await fs.readdir(docsSourcePath);
    for (const file of docsFiles) {
      await fs.copyFile(path.join(docsSourcePath, file), path.join(docsTargetPath, file));
    }
  } catch (error) {
    // Docs directory doesn't exist, skip copying
  }

  // Copy hooks directory
  const hooksSourcePath = path.join(templatesPath, 'hooks');
  const hooksTargetPath = path.join(srcPath, 'hooks');
  try {
    await fs.access(hooksSourcePath);
    await fs.mkdir(hooksTargetPath, { recursive: true });
    const hookFiles = await fs.readdir(hooksSourcePath);
    for (const file of hookFiles) {
      const content = await fs.readFile(path.join(hooksSourcePath, file), 'utf8');
      const targetFile = file.replace('.template', '');
      await fs.writeFile(path.join(hooksTargetPath, targetFile), content);
    }
  } catch (error) {
    // Hooks directory doesn't exist, skip copying
  }

  console.log('✅ Generated multi-page template with ultra-simple App.tsx, routing, pages, and configurable components');
}

/**
 * Generate FBCA template with auto-discovery routing
 */
async function generateFBCATemplate(srcPath, theme = 'elegant') {
  const templatesPath = path.join(__dirname, '../templates/fbca');
  const projectPath = path.dirname(srcPath);  // Get project root instead of src
  const projectName = path.basename(projectPath);

  // Helper function to recursively copy directory structure
  async function copyDirectory(sourceDir, targetDir, excludeDirs = [], excludeFiles = []) {
    await fs.mkdir(targetDir, { recursive: true });
    const entries = await fs.readdir(sourceDir, { withFileTypes: true });

    for (const entry of entries) {
      // Skip excluded directories
      if (entry.isDirectory() && excludeDirs.includes(entry.name)) {
        continue;
      }

      // Skip excluded files
      if (entry.isFile() && excludeFiles.includes(entry.name)) {
        continue;
      }

      const sourcePath = path.join(sourceDir, entry.name);
      const targetPath = path.join(targetDir, entry.name);

      if (entry.isDirectory()) {
        await copyDirectory(sourcePath, targetPath, excludeDirs, excludeFiles);
      } else if (entry.name.endsWith('.template')) {
        // Process template file
        const template = await fs.readFile(sourcePath, 'utf8');
        const content = template
          .replace(/{{DEFAULT_THEME}}/g, theme)
          .replace(/{{DEFAULT_MODE}}/g, 'light')
          .replace(/{{PROJECT_NAME}}/g, projectName);

        const outputFileName = entry.name.replace('.template', '');
        await fs.writeFile(targetPath.replace('.template', ''), content);
      } else {
        // Copy non-template files as-is
        await fs.copyFile(sourcePath, targetPath);
      }
    }
  }

  // First, copy root-level config files directly to project root
  const rootConfigFiles = [
    'package.json.template',
    'tsconfig.json.template',
    'tsconfig.node.json.template',
    'vite.config.ts.template'
  ];

  for (const configFile of rootConfigFiles) {
    try {
      const sourcePath = path.join(templatesPath, configFile);
      const template = await fs.readFile(sourcePath, 'utf8');
      const content = template
        .replace(/{{DEFAULT_THEME}}/g, theme)
        .replace(/{{DEFAULT_MODE}}/g, 'light')
        .replace(/{{PROJECT_NAME}}/g, projectName);

      const outputFileName = configFile.replace('.template', '');
      await fs.writeFile(path.join(projectPath, outputFileName), content);
    } catch (error) {
      console.warn(`⚠️ Warning: Could not copy root config file ${configFile}`);
    }
  }

  // Copy the web directory contents to src/web, excluding root config files
  const webTemplatesPath = path.join(templatesPath, 'src', 'web');
  const webTargetPath = path.join(srcPath, 'web');
  try {
    await copyDirectory(webTemplatesPath, webTargetPath, ['docs'], rootConfigFiles);

    // index.html stays in src/web - it's handled by copyDirectory above
  } catch (error) {
    console.warn('⚠️ Warning: Could not copy web directory structure');
  }

  // Copy the api directory if it exists
  const apiTemplatesPath = path.join(templatesPath, 'src', 'api');
  const apiTargetPath = path.join(srcPath, 'api');
  try {
    await fs.access(apiTemplatesPath);
    await copyDirectory(apiTemplatesPath, apiTargetPath);
  } catch (error) {
    // API directory doesn't exist, skip copying
  }

  // Copy public directory if it exists
  const publicSourcePath = path.join(templatesPath, 'public');
  const publicTargetPath = path.join(projectPath, 'public');
  try {
    await fs.access(publicSourcePath);
    await copyDirectory(publicSourcePath, publicTargetPath);
  } catch (error) {
    // Public directory doesn't exist, skip copying
  }

  // Copy documentation to project root
  const docsSourcePath = path.join(templatesPath, 'docs');
  const docsTargetPath = path.join(projectPath, 'docs');
  try {
    await fs.access(docsSourcePath);
    await fs.mkdir(docsTargetPath, { recursive: true });
    const docsFiles = await fs.readdir(docsSourcePath);
    for (const file of docsFiles) {
      await fs.copyFile(path.join(docsSourcePath, file), path.join(docsTargetPath, file));
    }
  } catch (error) {
    // Docs directory doesn't exist, skip copying
  }

  console.log('✅ Generated FBCA template with auto-discovery routing, feature organization, and SEO support');
}

/**
 * Generate package.json
 */
async function generatePackageJson(projectPath, name, templateType) {
  const baseDependencies = {
    "react": "^19.1.0",
    "react-dom": "^19.1.0",
    "@voilajsx/uikit": "latest",
    "lucide-react": "latest"
  };

  // Add React Router for SPA, multi-page, and FBCA templates
  if (templateType === 'spa' || templateType === 'multi' || templateType === 'fbca') {
    baseDependencies["react-router-dom"] = "^7.8.2";
  }

  const baseDevDependencies = {
    "@types/react": "^19.1.8",
    "@types/react-dom": "^19.1.6",
    "@vitejs/plugin-react": "^4.2.1",
    "typescript": "^5.2.2",
    "vite": "^6.3.6",
    "tailwindcss": "^4.0.0-alpha.32"
  };

  // Add React Router types for SPA, multi-page, and FBCA templates
  if (templateType === 'spa' || templateType === 'multi' || templateType === 'fbca') {
    baseDevDependencies["@types/react-router-dom"] = "^5.3.3";
  }

  const packageJson = {
    name: name,
    private: true,
    version: "0.0.0",
    type: "module",
    scripts: {
      "dev": "vite",
      "build": "tsc && vite build",
      "preview": "vite preview",
      "bundle": "npx uikit bundle",
      "serve": "npx uikit serve",
      "deploy": "npx uikit deploy"
    },
    dependencies: baseDependencies,
    devDependencies: baseDevDependencies
  };

  await fs.writeFile(
    path.join(projectPath, 'package.json'),
    JSON.stringify(packageJson, null, 2)
  );
}

/**
 * Generate README.md
 */
async function generateReadme(projectPath, name, templateType) {
  const templatesPath = path.join(__dirname, '../templates');
  const readmeTemplatePath = path.join(templatesPath, 'README.md.template');

  try {
    // Read the README template
    const template = await fs.readFile(readmeTemplatePath, 'utf8');

    // Replace template variables
    const content = template
      .replace(/{{PROJECT_NAME}}/g, name)
      .replace(/{{TEMPLATE_TYPE}}/g, templateType);

    // Write README.md to project directory
    await fs.writeFile(path.join(projectPath, 'README.md'), content);
  } catch (error) {
    console.warn('⚠️ Failed to generate README from template, using fallback');

    // Fallback README if template is missing
    const fallbackReadme = `# ${name}

A modern React application built with @voilajsx/uikit

## 🚀 Quick Start

\`\`\`bash
npm install
npm run dev
\`\`\`

## 📚 Resources

- [UIKit Documentation](https://github.com/voilajsx/uikit)
- [LLM Usage Guide](https://github.com/voilajsx/uikit/blob/main/docs/UIKIT_LLM_GUIDE.md)

Built with **@voilajsx/uikit** ✨
`;

    await fs.writeFile(path.join(projectPath, 'README.md'), fallbackReadme);
  }
}

/**
 * Generate config files (Vite, TypeScript, etc.)
 */
async function generateConfigFiles(projectPath) {
  const templatesPath = path.join(__dirname, '../templates');
  
  try {
    // Copy Vite config
    const viteConfig = await fs.readFile(path.join(templatesPath, 'vite.config.ts'), 'utf8');
    await fs.writeFile(path.join(projectPath, 'vite.config.ts'), viteConfig);
    
    // Copy TypeScript configs
    const tsConfig = await fs.readFile(path.join(templatesPath, 'tsconfig.json'), 'utf8');
    await fs.writeFile(path.join(projectPath, 'tsconfig.json'), tsConfig);
    
    const tsNodeConfig = await fs.readFile(path.join(templatesPath, 'tsconfig.node.json'), 'utf8');
    await fs.writeFile(path.join(projectPath, 'tsconfig.node.json'), tsNodeConfig);
  } catch (error) {
    console.warn('⚠️ Warning: Could not copy some config files:', error.message);
    
    // Generate minimal configs directly
    const minimalViteConfig = `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})`;

    const minimalTsConfig = `{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}`;

    const minimalTsNodeConfig = `{
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true
  },
  "include": ["vite.config.ts"]
}`;

    await fs.writeFile(path.join(projectPath, 'vite.config.ts'), minimalViteConfig);
    await fs.writeFile(path.join(projectPath, 'tsconfig.json'), minimalTsConfig);
    await fs.writeFile(path.join(projectPath, 'tsconfig.node.json'), minimalTsNodeConfig);
  }

  
  // Always generate .gitignore (moved outside try/catch to ensure it runs)
  console.log('🔧 Generating .gitignore...');
  const gitignoreContent = `# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Build outputs
build/
coverage/
.nyc_output

# OS generated files
Thumbs.db
ehthumbs.db

# Temporary files
.tmp/
.cache/
`;
  
  await fs.writeFile(path.join(projectPath, '.gitignore'), gitignoreContent);
}

/**
 * Install dependencies using npm
 */
async function installDependencies(projectPath) {
  return new Promise((resolve, reject) => {
    const npm = spawn('npm', ['install'], {
      cwd: projectPath,
      stdio: 'pipe'
    });

    npm.on('close', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`npm install failed with code ${code}`));
      }
    });

    npm.on('error', reject);
  });
}