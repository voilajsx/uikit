import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../../src/components/ui/button.jsx';
import { Card, CardHeader, CardTitle, CardContent } from '../../../src/components/ui/card.jsx';
import { Badge } from '../../../src/components/ui/badge.jsx';
import { ArrowRight, Palette, Smartphone, Layout, Zap, Code2, Star } from 'lucide-react';
import CodeBlock from '../components/CodeBlock';

const installCode = `npm install @voilajsx/uikit`;

const quickStartCode = `import { Button } from '@voilajsx/uikit/button';
import { ThemeProvider } from '@voilajsx/uikit/theme-provider';
import '@voilajsx/uikit/styles';

function App() {
  return (
    <ThemeProvider theme="ruby" variant="light">
      <div className="p-8">
        <Button size="lg">Beautiful Button</Button>
      </div>
    </ThemeProvider>
  );
}`;

const templateExample = `import { AdminTemplate } from '@voilajsx/uikit/templates/admin';

function Dashboard() {
  return (
    <AdminTemplate
      title="My Dashboard"
      sidebarContent={<Navigation />}
      headerActions={<ThemeSwitcher />}
    >
      <h1>Dashboard Content</h1>
    </AdminTemplate>
  );
}`;

const themeExample = `// Switch themes instantly
const { setTheme } = useTheme();

<Button onClick={() => setTheme('neon')}>
  Neon Theme
</Button>`;

function Home() {
  return (
    <div className="space-y-16 sm:space-y-20 w-full max-w-none">
      {/* Hero Section - Redesigned */}
      <section className="text-center space-y-6 sm:space-y-8 w-full py-8 sm:py-12">
        <Badge variant="secondary" className="mb-4 text-xs sm:text-sm bg-primary/10 text-primary border-primary/20">
          Open Source • MIT License
        </Badge>
        
        <div className="space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight px-2">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              @voilajsx/uikit
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto px-4 leading-relaxed">
            <span className="font-medium text-foreground">shadcn/ui</span> + 
            <span className="font-medium text-foreground"> Beautiful Themes</span> + 
            <span className="font-medium text-foreground"> Cross-Platform</span>
          </p>
          
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
            Same components you love, with professional themes, page templates, and universal platform support.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 max-w-md sm:max-w-none mx-auto pt-4">
          <Button size="lg" className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg" asChild>
            <Link to="/start">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto border-border text-foreground hover:bg-accent hover:text-accent-foreground" asChild>
            <Link to="/components">Explore Components</Link>
          </Button>
        </div>
      </section>

      {/* Key Features - Enhanced grid */}
      <section className="w-full">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-foreground">
          Everything You Need, Out of the Box
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="border-border bg-card text-card-foreground hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Palette className="h-5 w-5 text-primary" />
                </div>
                <Badge variant="secondary" className="text-xs">6 Themes</Badge>
              </div>
              <CardTitle className="text-lg text-card-foreground">Beautiful Themes</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Professional themes with OKLCH color science. Default, Metro, Studio, Ruby, Neon, and Aurora. Custom themes supported.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border bg-card text-card-foreground hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Smartphone className="h-5 w-5 text-primary" />
                </div>
                <Badge variant="secondary" className="text-xs">Universal</Badge>
              </div>
              <CardTitle className="text-lg text-card-foreground">Cross-Platform</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Web, React Native, Expo, and Tauri support. Write once, run everywhere with adaptive components.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border bg-card text-card-foreground hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Layout className="h-5 w-5 text-primary" />
                </div>
                <Badge variant="secondary" className="text-xs">5 Templates</Badge>
              </div>
              <CardTitle className="text-lg text-card-foreground">Page Templates</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Complete layouts for auth, admin dashboards, forms, data tables, and documentation.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border bg-card text-card-foreground hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Zap className="h-5 w-5 text-primary" />
                </div>
                <Badge variant="secondary" className="text-xs">Zero Config</Badge>
              </div>
              <CardTitle className="text-lg text-card-foreground">Drop-in Replacement</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-sm text-muted-foreground leading-relaxed">
                100% compatible with shadcn/ui. Just change imports and get themes, templates, and more.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border bg-card text-card-foreground hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Code2 className="h-5 w-5 text-primary" />
                </div>
                <Badge variant="secondary" className="text-xs">35+ Components</Badge>
              </div>
              <CardTitle className="text-lg text-card-foreground">Complete Library</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-sm text-muted-foreground leading-relaxed">
                All shadcn/ui components plus advanced data tables, layouts, and cross-platform adapters.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border bg-card text-card-foreground hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Star className="h-5 w-5 text-primary" />
                </div>
                <Badge variant="secondary" className="text-xs">TypeScript</Badge>
              </div>
              <CardTitle className="text-lg text-card-foreground">Developer Experience</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Full TypeScript support, excellent tree-shaking, and comprehensive documentation.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Quick Start - Redesigned as tabs/steps */}
      <section className="space-y-8 w-full">
        <div className="text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Get Started in Minutes</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Follow these simple steps to add beautiful, themed components to your project
          </p>
        </div>
        
        <div className="space-y-8">
          {/* Step 1 */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-foreground">Install the Package</h3>
            </div>
            <CodeBlock 
              code={installCode} 
              language="bash" 
              title="Terminal"
            />
          </div>

          {/* Step 2 */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-foreground">Import and Use Components</h3>
            </div>
            <CodeBlock 
              code={quickStartCode} 
              language="tsx" 
              title="App.tsx"
            />
          </div>

          {/* Step 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                  3a
                </div>
                <h3 className="text-lg font-semibold text-foreground">Use Templates (Optional)</h3>
              </div>
              <CodeBlock 
                code={templateExample} 
                language="tsx" 
                title="Dashboard.tsx"
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                  3b
                </div>
                <h3 className="text-lg font-semibold text-foreground">Switch Themes</h3>
              </div>
              <CodeBlock 
                code={themeExample} 
                language="tsx" 
                title="ThemeSwitch.tsx"
              />
            </div>
          </div>
        </div>

        <div className="text-center space-y-4 pt-8">
          <p className="text-muted-foreground">
            That's it! You now have beautiful, themed components with page templates.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
              <Link to="/start">Complete Setup Guide</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/examples">View Live Examples</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;