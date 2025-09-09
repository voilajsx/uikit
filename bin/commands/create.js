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
async function generateSinglePageTemplate(srcPath, theme = 'default') {
  // Main App component
  const appContent = `import React, { useState } from 'react';
import { ThemeProvider } from '@voilajsx/uikit';
import { Button } from '@voilajsx/uikit/button';
import { Card, CardContent, CardHeader, CardTitle } from '@voilajsx/uikit/card';
import { Badge } from '@voilajsx/uikit/badge';
import { Sun, Moon, Palette } from 'lucide-react';
import '@voilajsx/uikit/styles';
import './styles/globals.css';

const themes = [
  { id: 'default', name: 'Default', color: 'bg-blue-500' },
  { id: 'aurora', name: 'Aurora', color: 'bg-purple-500' },
  { id: 'neon', name: 'Neon', color: 'bg-pink-500' },
  { id: 'ruby', name: 'Ruby', color: 'bg-red-500' },
  { id: 'studio', name: 'Studio', color: 'bg-gray-500' }
];

function ThemeShowcase() {
  const [currentTheme, setCurrentTheme] = useState('${theme}');
  const [mode, setMode] = useState('light');

  return (
    <ThemeProvider theme={currentTheme} mode={mode}>
      <div className="min-h-screen bg-background transition-colors">
        {/* Header */}
        <header className="border-b bg-card">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-foreground">🎨 UIKit Theme Showcase</h1>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
                >
                  {mode === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
                </Button>
              </div>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          {/* Current Theme Display */}
          <div className="mb-8">
            <Badge className="mb-2">Current Theme: {themes.find(t => t.id === currentTheme)?.name}</Badge>
            <h2 className="text-4xl font-bold text-primary mb-4">Same Code, Different Personalities</h2>
            <p className="text-muted-foreground text-lg">
              Watch how the same components transform with different themes. 
              Zero code changes, complete visual transformation.
            </p>
          </div>

          {/* Theme Switcher */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="h-5 w-5" />
                Theme Switcher
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                {themes.map((theme) => (
                  <Button
                    key={theme.id}
                    variant={currentTheme === theme.id ? "default" : "outline"}
                    onClick={() => setCurrentTheme(theme.id)}
                    className="w-full"
                  >
                    {theme.name}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Component Examples */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Buttons</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button className="w-full bg-primary">Primary Button</Button>
                <Button variant="secondary" className="w-full">Secondary</Button>
                <Button variant="outline" className="w-full">Outline</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Colors & Typography</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="p-3 bg-primary text-primary-foreground rounded">Primary Background</div>
                <div className="p-3 bg-secondary text-secondary-foreground rounded">Secondary Background</div>
                <div className="p-3 bg-accent text-accent-foreground rounded">Accent Background</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Enhanced Features</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm text-muted-foreground">
                  ✨ Automatic gradients<br/>
                  🎨 Custom typography<br/>
                  📐 Enhanced spacing<br/>
                  🌟 Theme-specific shadows
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Footer */}
          <footer className="mt-12 text-center">
            <p className="text-muted-foreground">
              Built with <span className="text-primary font-semibold">@voilajsx/uikit</span>
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Run <code className="bg-muted px-2 py-1 rounded">npx uikit --help</code> for more commands
            </p>
          </footer>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default ThemeShowcase;`;

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
async function generateSPATemplate(srcPath, theme = 'default') {
  // TODO: Implement SPA template
  console.log('📝 SPA template generation - Coming soon!');
  // For now, generate single-page template
  await generateSinglePageTemplate(srcPath, theme);
}

/**
 * Generate multi-page template
 */
async function generateMultiPageTemplate(srcPath, theme = 'default') {
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