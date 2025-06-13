/**
 * Getting Started guide for @voilajsx/uikit
 * Developer-friendly documentation with clear concepts and practical examples
 * @module @voilajsx/uikit
 * @file docs/pages/Start.tsx
 */

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@voilajsx/uikit/button';
import { Card, CardHeader, CardTitle, CardContent } from '@voilajsx/uikit/card';
import { Badge } from '@voilajsx/uikit/badge';
import { Alert, AlertDescription } from '@voilajsx/uikit/alert';
import { Container } from '@voilajsx/uikit/container';
import { 
  ArrowRight, 
  CheckCircle,
  FileText,
  Zap,
  Code,
  Package,
  Grid3X3,
  Building,
  Palette,
  Rocket,
  Layers
} from 'lucide-react';
import Layout from '../components/Layout';
import CodeBlock from '../components/CodeBlock';

const installCode = `npm install @voilajsx/uikit`;

const setupCode = `import { ThemeProvider } from '@voilajsx/uikit/theme-provider';
import '@voilajsx/uikit/styles';
import App from './App';

function Root() {
  return (
    <ThemeProvider theme="default" variant="light" detectSystem={true}>
      <App />
    </ThemeProvider>
  );
}`;

const basicUsageCode = `import { Button } from '@voilajsx/uikit/button';
import { Card, CardHeader, CardTitle, CardContent } from '@voilajsx/uikit/card';

function App() {
  return (
    <div className="min-h-screen bg-background p-8">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Hello UIKit!</CardTitle>
        </CardHeader>
        <CardContent>
          <Button size="lg">Beautiful Button</Button>
        </CardContent>
      </Card>
    </div>
  );
}`;

const uiComponentsExample = `import { Button } from '@voilajsx/uikit/button';
import { Card, CardHeader, CardTitle, CardContent } from '@voilajsx/uikit/card';
import { Input } from '@voilajsx/uikit/input';
import { Badge } from '@voilajsx/uikit/badge';

function ComponentsExample() {
  return (
    <Card className="max-w-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          Dashboard
          <Badge variant="secondary">New</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input placeholder="Search..." />
        <div className="flex gap-2">
          <Button variant="default">Save</Button>
          <Button variant="outline">Cancel</Button>
        </div>
      </CardContent>
    </Card>
  );
}`;

const sectionsExample = `import { Header } from '@voilajsx/uikit/header';
import { Container } from '@voilajsx/uikit/container';
import { Footer } from '@voilajsx/uikit/footer';
import { Button } from '@voilajsx/uikit/button';

function CustomPage() {
  const navigation = (
    <nav className="p-6 space-y-2">
      <Button variant="ghost" className="w-full justify-start">
        📊 Dashboard
      </Button>
      <Button variant="ghost" className="w-full justify-start">
        👥 Users
      </Button>
    </nav>
  );

  return (
    <>
      <Header>
        <div className="flex items-center justify-between w-full">
          <h1>My App</h1>
          <Button variant="outline">Profile</Button>
        </div>
      </Header>
      
      <Container 
        sidebar="left" 
        sidebarContent={navigation}
        sidebarSticky={true}
      >
        <h2>Main Content</h2>
        <p>Your page content goes here</p>
      </Container>
      
      <Footer>
        <p>© 2024 Your Company</p>
      </Footer>
    </>
  );
}`;

const layoutsExample = `import { Page } from '@voilajsx/uikit/page';
import { Admin } from '@voilajsx/uikit/admin';
import { Auth } from '@voilajsx/uikit/auth';
import { Blank } from '@voilajsx/uikit/blank';

// Complete page layout with compound components
function MainApp() {
  return (
    <Page>
      <Page.Header>
        <h1>My Application</h1>
      </Page.Header>
      <Page.Main>
        <h2>Welcome to your app</h2>
      </Page.Main>
      <Page.Footer>
        <p>© 2024 Company</p>
      </Page.Footer>
    </Page>
  );
}

// Admin dashboard layout
function Dashboard() {
  return (
    <Admin 
      sidebarContent={<AdminNavigation />}
      headerActions={<UserMenu />}
    >
      <DashboardContent />
    </Admin>
  );
}

// Authentication page
function LoginPage() {
  return (
    <Auth title="Welcome Back" subtitle="Sign in to continue">
      <LoginForm />
    </Auth>
  );
}

// Simple content page
function AboutPage() {
  return (
    <Blank>
      <div className="max-w-4xl mx-auto p-8">
        <h1>About Us</h1>
        <p>Simple content page</p>
      </div>
    </Blank>
  );
}`;

const themingExample = `import { useTheme } from '@voilajsx/uikit/theme-provider';
import { Button } from '@voilajsx/uikit/button';

function ThemeSwitcher() {
  const { theme, variant, setTheme, toggleVariant } = useTheme();

  return (
    <div className="flex gap-2">
      {/* Switch between built-in themes */}
      <Button onClick={() => setTheme('default')}>Default</Button>
      <Button onClick={() => setTheme('ruby')}>Ruby</Button>
      <Button onClick={() => setTheme('neon')}>Neon</Button>
      <Button onClick={() => setTheme('aurora')}>Aurora</Button>
      
      {/* Toggle light/dark mode */}
      <Button onClick={toggleVariant}>
        {variant === 'light' ? '🌙' : '☀️'}
      </Button>
    </div>
  );
}`;

const migrationCode = `// Before (shadcn/ui)
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

// After (@voilajsx/uikit) - Just change imports!
import { Button } from "@voilajsx/uikit/button"
import { Card } from "@voilajsx/uikit/card"

// Everything else stays exactly the same
// Same props, same variants, same behavior`;

function Start() {
  const [activeSection, setActiveSection] = useState('overview');

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - 100;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { 
        rootMargin: '-20% 0px -80% 0px',
        threshold: 0 
      }
    );

    const sections = ['overview', 'concepts', 'installation', 'ui-components', 'sections', 'layouts', 'theming', 'migration', 'next-steps'];
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const navigationItems = [
    {
      key: 'overview',
      label: 'Overview',
      icon: FileText,
      onClick: () => scrollToSection('overview'),
      isActive: activeSection === 'overview'
    },
    {
      key: 'concepts',
      label: 'Core Concepts',
      icon: Layers,
      onClick: () => scrollToSection('concepts'),
      isActive: activeSection === 'concepts'
    },
    {
      key: 'installation',
      label: 'Installation',
      icon: Package,
      onClick: () => scrollToSection('installation'),
      isActive: activeSection === 'installation'
    },
    {
      key: 'ui-components',
      label: 'UI Components',
      icon: Package,
      onClick: () => scrollToSection('ui-components'),
      isActive: activeSection === 'ui-components'
    },
    {
      key: 'sections',
      label: 'Sections',
      icon: Grid3X3,
      onClick: () => scrollToSection('sections'),
      isActive: activeSection === 'sections'
    },
    {
      key: 'layouts',
      label: 'Layouts',
      icon: Building,
      onClick: () => scrollToSection('layouts'),
      isActive: activeSection === 'layouts'
    },
    {
      key: 'theming',
      label: 'Theming',
      icon: Palette,
      onClick: () => scrollToSection('theming'),
      isActive: activeSection === 'theming'
    },
    {
      key: 'migration',
      label: 'Migration',
      icon: Code,
      onClick: () => scrollToSection('migration'),
      isActive: activeSection === 'migration'
    },
    {
      key: 'next-steps',
      label: 'Next Steps',
      icon: Rocket,
      onClick: () => scrollToSection('next-steps'),
      isActive: activeSection === 'next-steps'
    }
  ];

  return (
    <Layout>
      <Container 
        sidebar="right" 
        sidebarContent={navigationItems}
        sidebarSize="default"
        sidebarSticky={true}
        width="xl"
        padding="md"
      >
        <div className="space-y-16">
          {/* Overview */}
          <section id="overview" className="space-y-6">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
              Developer-First Experience
            </Badge>
            <h1 className="text-5xl font-bold tracking-tight">Getting Started</h1>
            <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
              @voilajsx/uikit enhances shadcn/ui with professional themes, smart layouts, and a developer-first approach. 
              Same components you love, elevated experience you'll appreciate.
            </p>
            <div className="flex gap-4">
              <Button size="lg" onClick={() => scrollToSection('installation')}>
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/examples">View Examples</Link>
              </Button>
            </div>
          </section>

          {/* Core Concepts */}
          <section id="concepts" className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Core Concepts</h2>
              <p className="text-muted-foreground text-lg">
                @voilajsx/uikit is built on three simple concepts that work together seamlessly.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="relative overflow-hidden border-2 border-blue-200 dark:border-blue-800">
                <div className="absolute top-0 left-0 w-full h-1 bg-blue-600"></div>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                      <Package className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">UI Components</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    All shadcn/ui components enhanced with automatic theming and perfect tree-shaking.
                  </p>
                  <div className="space-y-2">
                    <p className="font-medium">What you get:</p>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Button, Card, Input, Form, etc.</li>
                      <li>• Same API as shadcn/ui</li>
                      <li>• Automatic theme integration</li>
                      <li>• Perfect tree-shaking</li>
                    </ul>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/components/ui">Browse Components</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden border-2 border-green-200 dark:border-green-800">
                <div className="absolute top-0 left-0 w-full h-1 bg-green-600"></div>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900">
                      <Grid3X3 className="h-6 w-6 text-green-600" />
                    </div>
                    <CardTitle className="text-xl">Sections</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Reusable page sections that you can mix and match to create custom layouts.
                  </p>
                  <div className="space-y-2">
                    <p className="font-medium">Available sections:</p>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Header - Navigation & branding</li>
                      <li>• Container - Content + sidebar</li>
                      <li>• Footer - Site footer</li>
                    </ul>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/components/sections">View Sections</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden border-2 border-purple-200 dark:border-purple-800">
                <div className="absolute top-0 left-0 w-full h-1 bg-purple-600"></div>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900">
                      <Building className="h-6 w-6 text-purple-600" />
                    </div>
                    <CardTitle className="text-xl">Layouts</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Complete page structures ready to use with your content.
                  </p>
                  <div className="space-y-2">
                    <p className="font-medium">Ready-made layouts:</p>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Page - Main app layout</li>
                      <li>• Admin - Dashboard layout</li>
                      <li>• Auth - Login/signup pages</li>
                      <li>• Blank - Minimal pages</li>
                    </ul>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/components/layouts">View Layouts</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <Alert className="bg-blue-50 border-blue-200 dark:bg-blue-950 dark:border-blue-800">
              <Zap className="h-4 w-4 text-blue-600" />
              <AlertDescription className="text-blue-800 dark:text-blue-200">
                <strong>Think of it this way:</strong> UI Components are your building blocks, 
                Sections are reusable page parts, and Layouts are complete page templates.
              </AlertDescription>
            </Alert>
          </section>

          {/* Installation */}
          <section id="installation" className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">Installation</h2>
              <p className="text-muted-foreground text-lg">
                Get @voilajsx/uikit running in your project in under 2 minutes.
              </p>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">1. Install the package</h3>
                <CodeBlock code={installCode} language="bash" title="Terminal" />
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">2. Setup your app</h3>
                <p className="text-muted-foreground mb-4">
                  Wrap your app with ThemeProvider and import the base styles:
                </p>
                <CodeBlock code={setupCode} title="main.tsx" />
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">3. Start using components</h3>
                <CodeBlock code={basicUsageCode} title="App.tsx" />
              </div>
            </div>

            <Alert>

  <CheckCircle className="h-4 w-4" />
  <AlertDescription className="pt-1">
    <strong>That's it!</strong> You now have themed components that automatically 
    adapt to your chosen color scheme.
  </AlertDescription>
</Alert>
          </section>

          {/* UI Components */}
          <section id="ui-components" className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">UI Components</h2>
              <p className="text-muted-foreground text-lg">
                All your favorite shadcn/ui components, enhanced with automatic theming.
              </p>
            </div>
            
            <CodeBlock code={uiComponentsExample} title="Using UI Components" />

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>35+ Components Available</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Button, Card, Input, Form, Table, Dialog, and many more.
                  </p>
                  <Button variant="outline" asChild>
                    <Link to="/components/ui">Browse All Components</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>100% API Compatible</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Same props, variants, and behaviors as shadcn/ui.
                  </p>
                  <Button variant="outline" asChild>
                    <Link to="/migration">Migration Guide</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Sections */}
          <section id="sections" className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">Sections</h2>
              <p className="text-muted-foreground text-lg">
                Compose custom layouts using reusable page sections.
              </p>
            </div>
            
            <CodeBlock code={sectionsExample} title="Building with Sections" />

            <div className="grid md:grid-cols-3 gap-4">
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <Grid3X3 className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold mb-2">Header</h4>
                  <p className="text-sm text-muted-foreground">Navigation and branding</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <Package className="h-6 w-6 text-green-600" />
                  </div>
                  <h4 className="font-semibold mb-2">Container</h4>
                  <p className="text-sm text-muted-foreground">Content with optional sidebar</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <Building className="h-6 w-6 text-purple-600" />
                  </div>
                  <h4 className="font-semibold mb-2">Footer</h4>
                  <p className="text-sm text-muted-foreground">Site footer content</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Layouts */}
          <section id="layouts" className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">Layouts</h2>
              <p className="text-muted-foreground text-lg">
                Complete page templates for common use cases. Perfect for rapid prototyping.
              </p>
            </div>
            
            <CodeBlock code={layoutsExample} title="Using Layouts" />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { name: 'Page', desc: 'Main app layout with compound components', color: 'bg-blue-500' },
                { name: 'Admin', desc: 'Dashboard with sidebar navigation', color: 'bg-green-500' },
                { name: 'Auth', desc: 'Login and signup pages', color: 'bg-purple-500' },
                { name: 'Blank', desc: 'Minimal content pages', color: 'bg-gray-500' },
              ].map((layout) => (
                <Card key={layout.name}>
                  <CardContent className="pt-6 text-center">
                    <div className={`w-12 h-12 ${layout.color} rounded-lg mx-auto mb-3`}></div>
                    <h4 className="font-semibold mb-2">{layout.name}</h4>
                    <p className="text-sm text-muted-foreground">{layout.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Theming */}
          <section id="theming" className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">Theming</h2>
              <p className="text-muted-foreground text-lg">
                Switch between 6 professional themes instantly, or create custom themes.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: 'Default', color: 'bg-blue-500', desc: 'Clean ocean blues' },
                { name: 'Metro', color: 'bg-slate-500', desc: 'Systematic grays' },
                { name: 'Studio', color: 'bg-amber-500', desc: 'Designer amber' },
                { name: 'Ruby', color: 'bg-red-500', desc: 'Premium reds' },
                { name: 'Neon', color: 'bg-fuchsia-500', desc: 'Electric cyberpunk' },
                { name: 'Aurora', color: 'bg-purple-500', desc: 'Northern lights' },
              ].map((theme) => (
                <Card key={theme.name}>
                  <CardContent className="pt-6 text-center">
                    <div className={`w-12 h-12 ${theme.color} rounded-lg mx-auto mb-3`}></div>
                    <h4 className="font-semibold">{theme.name}</h4>
                    <p className="text-sm text-muted-foreground">{theme.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <CodeBlock code={themingExample} title="Theme switching" />
          </section>

          {/* Migration */}
          <section id="migration" className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">Migration from shadcn/ui</h2>
              <p className="text-muted-foreground text-lg">
                Already using shadcn/ui? Migration is just changing import paths.
              </p>
            </div>
            
            <Alert>
              <CheckCircle className="h-4 w-4" />
              <AlertDescription>
                <strong>100% backward compatible</strong> - All props, variants, and behaviors stay exactly the same.
              </AlertDescription>
            </Alert>
            
            <CodeBlock code={migrationCode} title="Only imports change" />
            
            <Card className="bg-green-50 border-green-200 dark:bg-green-950 dark:border-green-800">
              <CardHeader>
                <CardTitle className="text-green-800 dark:text-green-200">
                  What you get after migration:
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-green-700 dark:text-green-300">
                  <li>✅ Instant access to 6 professional themes</li>
                  <li>✅ Pre-built page layouts and sections</li>
                  <li>✅ Better tree-shaking with direct imports</li>
                  <li>✅ Cross-platform compatibility</li>
                  <li>✅ Zero breaking changes to existing code</li>
                </ul>
              </CardContent>
            </Card>
          </section>

          {/* Next Steps */}
          <section id="next-steps" className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">What's Next?</h2>
              <p className="text-muted-foreground text-lg">
                Dive deeper into specific areas to master @voilajsx/uikit.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="group hover:shadow-lg transition-shadow cursor-pointer" asChild>
                <Link to="/components/ui">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>UI Components</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Explore all 35+ shadcn/ui components with enhanced theming.
                    </p>
                  </CardContent>
                </Link>
              </Card>

              <Card className="group hover:shadow-lg transition-shadow cursor-pointer" asChild>
                <Link to="/components/sections">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>Sections</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Master page sections and custom layout composition.
                    </p>
                  </CardContent>
                </Link>
              </Card>

              <Card className="group hover:shadow-lg transition-shadow cursor-pointer" asChild>
                <Link to="/components/layouts">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>Layouts</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Complete page layouts for rapid development.
                    </p>
                  </CardContent>
                </Link>
              </Card>

              <Card className="group hover:shadow-lg transition-shadow cursor-pointer" asChild>
                <Link to="/themes">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>Advanced Theming</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Create custom themes and understand OKLCH colors.
                    </p>
                  </CardContent>
                </Link>
              </Card>

              <Card className="group hover:shadow-lg transition-shadow cursor-pointer" asChild>
                <Link to="/examples">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>Live Examples</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      See complete applications and copy real-world patterns.
                    </p>
                  </CardContent>
                </Link>
              </Card>

              <Card className="group hover:shadow-lg transition-shadow cursor-pointer" asChild>
                <Link to="/cookbook">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>Cookbook</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Common patterns and recipes for everyday development tasks.
                    </p>
                  </CardContent>
                </Link>
              </Card>
            </div>

            <div className="text-center p-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl">
              <h3 className="text-xl font-semibold mb-2">Ready to build something amazing?</h3>
              <p className="text-muted-foreground mb-6">
                Join thousands of developers building beautiful React applications with @voilajsx/uikit
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button size="lg" asChild>
                  <Link to="/examples">
                    Start Building <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="https://github.com/voilajsx/uikit" target="_blank" rel="noopener noreferrer">
                    Star on GitHub
                  </a>
                </Button>
              </div>
            </div>
          </section>
        </div>
      </Container>
    </Layout>
  );
}

export default Start;