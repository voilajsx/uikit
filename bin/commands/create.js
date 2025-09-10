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
    const templateType = options.spa ? 'spa' : options.multi ? 'multi' : 'single';
    
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
    
    // Generate config files
    await generateConfigFiles(projectPath);
    
    // Generate package.json
    await generatePackageJson(projectPath, name, templateType);
    
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
  }
}

/**
 * Generate single-page theme showcase template
 */
async function generateSinglePageTemplate(srcPath, theme = 'base') {
  // Main App component
  const appContent = `import React from 'react';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { ThemeProvider, useTheme } from './themes';

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
    <ThemeProvider theme="base" mode="light" forceConfig={true}>
      <UIKitShowcase />
    </ThemeProvider>
  );
}

export default App;`;

  await fs.writeFile(path.join(srcPath, 'App.tsx'), appContent);

  // Main entry point
  const mainContent = `import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);`;

  await fs.writeFile(path.join(srcPath, 'main.tsx'), mainContent);

  // Create styles directory and placeholder
  const stylesPath = path.join(srcPath, 'styles');
  await fs.mkdir(stylesPath, { recursive: true });
  await fs.writeFile(path.join(stylesPath, 'globals.css'), '/* Themes will be bundled here */\n');

  // Create index.html
  const indexContent = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>🎨 UIKit Theme Showcase</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>`;

  await fs.writeFile(path.join(srcPath, '../index.html'), indexContent);
}

/**
 * Generate SPA template
 */
async function generateSPATemplate(srcPath, theme = 'base') {
  // TODO: Implement SPA template
  console.log('📝 SPA template generation - Coming soon!');
  // For now, generate single-page template
  await generateSinglePageTemplate(srcPath, theme);
}

/**
 * Generate multi-page template
 */
async function generateMultiPageTemplate(srcPath, theme = 'base') {
  // TODO: Implement multi-page template with routing
  console.log('📝 Multi-page template generation - Coming soon!');
  // For now, generate single-page template
  await generateSinglePageTemplate(srcPath, theme);
}

/**
 * Generate package.json
 */
async function generatePackageJson(projectPath, name, templateType) {
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
    dependencies: {
      "react": "^18.2.0",
      "react-dom": "^18.2.0",
      "@voilajsx/uikit": "latest",
      "lucide-react": "latest"
    },
    devDependencies: {
      "@types/react": "^18.2.66",
      "@types/react-dom": "^18.2.22",
      "@vitejs/plugin-react": "^4.2.1",
      "typescript": "^5.2.2",
      "vite": "^5.2.0"
    }
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
  const readme = `# ${name}

A UIKit project showcasing the enhanced theming system.

## 🚀 Quick Start

\`\`\`bash
npm run dev
\`\`\`

## 🎨 UIKit Commands

\`\`\`bash
npm run bundle    # Bundle themes
npm run serve     # Start dev server  
npm run build     # Production build
npm run deploy    # Static site generation
\`\`\`

## 📚 Learn More

- [UIKit Documentation](https://github.com/voilajsx/uikit)
- [Quick Start Guide](https://github.com/voilajsx/uikit/blob/main/UIKIT_QUICK_START.md)
- [LLM Usage Guide](https://github.com/voilajsx/uikit/blob/main/UIKIT_LLM_GUIDE.md)

Built with **@voilajsx/uikit** ✨
`;

  await fs.writeFile(path.join(projectPath, 'README.md'), readme);
}

/**
 * Generate config files (Vite, TypeScript, etc.)
 */
async function generateConfigFiles(projectPath) {
  const templatesPath = path.join(path.dirname(__dirname), 'templates');
  
  // Copy Vite config
  const viteConfig = await fs.readFile(path.join(templatesPath, 'vite.config.ts'), 'utf8');
  await fs.writeFile(path.join(projectPath, 'vite.config.ts'), viteConfig);
  
  // Copy TypeScript configs
  const tsConfig = await fs.readFile(path.join(templatesPath, 'tsconfig.json'), 'utf8');
  await fs.writeFile(path.join(projectPath, 'tsconfig.json'), tsConfig);
  
  const tsNodeConfig = await fs.readFile(path.join(templatesPath, 'tsconfig.node.json'), 'utf8');
  await fs.writeFile(path.join(projectPath, 'tsconfig.node.json'), tsNodeConfig);
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