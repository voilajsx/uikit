/**
 * Enhanced Getting Started guide for @voilajsx/uikit
 * Comprehensive developer documentation with critical concepts and best practices
 * @module @voilajsx/uikit
 * @file docs/pages/Start.tsx
 */

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@voilajsx/uikit/button';
import { Card, CardHeader, CardTitle, CardContent } from '@voilajsx/uikit/card';
import { Badge } from '@voilajsx/uikit/badge';
import { Alert, AlertDescription, AlertTitle } from '@voilajsx/uikit/alert';
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
  Layers,
  AlertTriangle,
  Info,
  Star,
  Eye,
  Smartphone,
  Monitor,
  Tablet
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

// NEW: Critical theming example with semantic colors
const semanticColorsExample = `// ✅ CORRECT - Always use semantic color variables
function ThemedCard() {
  return (
    <Card className="bg-card text-card-foreground border-border">
      <CardHeader className="border-b border-border">
        <CardTitle className="text-foreground">Themed Content</CardTitle>
        <p className="text-muted-foreground">Automatically adapts to themes</p>
      </CardHeader>
      <CardContent className="text-foreground">
        <Button variant="default" className="bg-primary text-primary-foreground">
          Themed Button
        </Button>
      </CardContent>
    </Card>
  );
}

// ❌ WRONG - Never use hardcoded colors (breaks themes)
function BrokenCard() {
  return (
    <Card className="bg-white text-black border-gray-200">
      {/* This will break in dark themes! */}
    </Card>
  );
}`;

// Add this variable with the other code examples at the top of the file

const themingExample = `import { useTheme } from '@voilajsx/uikit/theme-provider';
import { Button } from '@voilajsx/uikit/button';
import { Card, CardHeader, CardTitle, CardContent } from '@voilajsx/uikit/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@voilajsx/uikit/select';
import { Switch } from '@voilajsx/uikit/switch';
import { Label } from '@voilajsx/uikit/label';

function ThemeSwitcher() {
  const { theme, variant, setTheme, setVariant, toggleVariant } = useTheme();

  return (
    <Card className="max-w-md mx-auto bg-card text-card-foreground border-border">
      <CardHeader>
        <CardTitle className="text-foreground">Theme Controls</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Theme Selection */}
        <div className="space-y-2">
          <Label className="text-foreground">Choose Theme</Label>
          <Select value={theme} onValueChange={setTheme}>
            <SelectTrigger className="bg-background text-foreground border-input">
              <SelectValue placeholder="Select theme" />
            </SelectTrigger>
            <SelectContent className="bg-background border-border">
              <SelectItem value="default">Default (Ocean Blue)</SelectItem>
              <SelectItem value="aurora">Aurora (Purple-Green)</SelectItem>
              <SelectItem value="metro">Metro (Gray-Blue)</SelectItem>
              <SelectItem value="neon">Neon (Cyberpunk)</SelectItem>
              <SelectItem value="ruby">Ruby (Red-Gold)</SelectItem>
              <SelectItem value="studio">Studio (Designer Gray)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Light/Dark Toggle */}
        <div className="flex items-center justify-between">
          <Label className="text-foreground">Dark Mode</Label>
          <Switch
            checked={variant === 'dark'}
            onCheckedChange={(checked) => setVariant(checked ? 'dark' : 'light')}
          />
        </div>

        {/* Quick Toggle Button */}
        <Button 
          onClick={toggleVariant} 
          variant="outline" 
          className="w-full"
        >
          {variant === 'light' ? '🌙 Switch to Dark' : '☀️ Switch to Light'}
        </Button>
        
        {/* Theme Preview */}
        <div className="p-4 bg-muted rounded-lg border border-border">
          <p className="text-muted-foreground text-sm mb-2">Preview:</p>
          <div className="flex gap-2">
            <Button variant="default" size="sm">Primary</Button>
            <Button variant="secondary" size="sm">Secondary</Button>
            <Button variant="outline" size="sm">Outline</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}`;

const migrationCode = `// Before (shadcn/ui)
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

// After (@voilajsx/uikit) - Just change imports!
import { Button } from "@voilajsx/uikit/button"
import { Card, CardHeader, CardTitle, CardContent } from "@voilajsx/uikit/card"
import { Input } from "@voilajsx/uikit/input"

// Everything else stays exactly the same
// Same props, same variants, same behavior
<Button variant="default" size="lg">
  Exactly the same API
</Button>

<Card className="bg-card text-card-foreground border-border">
  <CardHeader>
    <CardTitle className="text-foreground">Same Components</CardTitle>
  </CardHeader>
  <CardContent>
    <Input 
      placeholder="Same props" 
      className="bg-background text-foreground border-input"
    />
  </CardContent>
</Card>`;
// NEW: Template selection guide
const templateSelectionCode = `// Choose the right template for your use case:

// 1. Page Template - Full website with header/footer
import { Page, PageHeader, PageContent, PageFooter } from '@voilajsx/uikit/page';

function MarketingPage() {
  return (
    <Page variant="default" size="xl">
      <PageHeader variant="default" sticky={true}>
        <HeaderLogo>Brand</HeaderLogo>
        <HeaderNav items={navItems} />
      </PageHeader>
      <PageContent>
        <h1>Marketing Content</h1>
      </PageContent>
      <PageFooter variant="default">
        <FooterBasic />
      </PageFooter>
    </Page>
  );
}

// 2. AdminTemplate - Dashboard with sidebar
import { AdminTemplate } from '@voilajsx/uikit/admin';

function Dashboard() {
  const navigationItems = [
    {
      key: 'dashboard',
      title: 'Dashboard',  // Note: use 'title' for AdminTemplate
      icon: Home,
      path: '/admin',
      isActive: true,
      section: 'main',
    }
  ];

  return (
    <AdminTemplate
      variant="default"
      navigationItems={navigationItems}
      currentPath="/admin"
      onNavigate={(path) => navigate(path)}
    >
      <DashboardContent />
    </AdminTemplate>
  );
}

// 3. AuthTemplate - Login/signup pages
import { AuthTemplate } from '@voilajsx/uikit/auth';

function LoginPage() {
  return (
    <AuthTemplate
      variant="card"
      title="Welcome back"
      subtitle="Sign in to your account"
    >
      <LoginForm />
    </AuthTemplate>
  );
}

// 4. Container - Content with optional sidebar
import { Container } from '@voilajsx/uikit/container';

function ContentPage() {
  const sidebarNav = [
    {
      key: 'overview',
      label: 'Overview',  // Note: use 'label' for Container sidebar
      icon: Home,
      isActive: true,
    }
  ];

  return (
    <Container
      sidebar="left"
      sidebarContent={sidebarNav}
      sidebarSticky={true}
      size="xl"
    >
      <MainContent />
    </Container>
  );
}`;

// NEW: Import patterns showcase
const importPatternsCode = `// ✅ CORRECT - Use direct component imports for tree-shaking
import { Button } from '@voilajsx/uikit/button';
import { Card, CardHeader, CardTitle, CardContent } from '@voilajsx/uikit/card';
import { Input } from '@voilajsx/uikit/input';
import { ThemeProvider } from '@voilajsx/uikit/theme-provider';
import '@voilajsx/uikit/styles';  // Always import styles

// ❌ WRONG - Barrel imports hurt performance
import { Button, Card, Input } from '@voilajsx/uikit';  // Don't do this!

// Component-specific imports for better bundling
import { Page, PageHeader, PageContent } from '@voilajsx/uikit/page';
import { AdminTemplate } from '@voilajsx/uikit/admin';
import { AuthTemplate } from '@voilajsx/uikit/auth';
import { Container } from '@voilajsx/uikit/container';
import { Header, HeaderLogo, HeaderNav } from '@voilajsx/uikit/header';
import { Footer, FooterBasic } from '@voilajsx/uikit/footer';`;

const uiComponentsExample = `import { Button } from '@voilajsx/uikit/button';
import { Card, CardHeader, CardTitle, CardContent } from '@voilajsx/uikit/card';
import { Input } from '@voilajsx/uikit/input';
import { Badge } from '@voilajsx/uikit/badge';

function ComponentsExample() {
  return (
    <Card className="max-w-md bg-card text-card-foreground border-border">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-foreground">
          Dashboard
          <Badge variant="secondary">New</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input 
          placeholder="Search..." 
          className="bg-background text-foreground border-input"
        />
        <div className="flex gap-2">
          <Button variant="default">Save</Button>
          <Button variant="outline">Cancel</Button>
        </div>
      </CardContent>
    </Card>
  );
}`;

// NEW: Navigation structure guide
const navigationStructureCode = `// CRITICAL: Different navigation prop naming for different components

// 1. AdminTemplate uses 'title' in navigation items
const adminNavigation = [
  {
    key: 'dashboard',
    title: 'Dashboard',        // ✅ Use 'title' for AdminTemplate
    icon: Home,
    path: '/admin',
    isActive: true,
    section: 'main',
    submenu: [                 // Optional nested navigation
      {
        key: 'overview',
        title: 'Overview',     // ✅ Also 'title' in submenu
        path: '/admin/overview'
      }
    ]
  }
];

// 2. Container sidebar uses 'label' in navigation items  
const containerSidebar = [
  {
    key: 'overview',
    label: 'Overview',         // ✅ Use 'label' for Container sidebar
    icon: Home,
    isActive: true,
    items: [                   // Optional nested items
      {
        key: 'details',
        label: 'Details',      // ✅ Also 'label' in nested items
        onClick: () => {}
      }
    ]
  }
];

// 3. HeaderNav uses 'label' in navigation items
const headerNavigation = [
  {
    key: 'home',
    label: 'Home',             // ✅ Use 'label' for HeaderNav
    isActive: true,
    onClick: () => {},
    items: [                   // Optional dropdown items
      {
        key: 'about',
        label: 'About Us',     // ✅ Also 'label' in dropdown
        onClick: () => {}
      }
    ]
  }
];`;

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

    const sections = [
      'overview', 'concepts', 'installation', 'critical-concepts', 
      'template-selection', 'navigation-patterns', 'semantic-colors',
      'ui-components', 'sections', 'layouts', 'theming', 'migration', 
      'responsive-design', 'next-steps'
    ];
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
      key: 'critical-concepts',
      label: 'Critical Concepts',
      icon: AlertTriangle,
      onClick: () => scrollToSection('critical-concepts'),
      isActive: activeSection === 'critical-concepts'
    },
    {
      key: 'template-selection',
      label: 'Template Selection',
      icon: Building,
      onClick: () => scrollToSection('template-selection'),
      isActive: activeSection === 'template-selection'
    },
    {
      key: 'navigation-patterns',
      label: 'Navigation Patterns',
      icon: Grid3X3,
      onClick: () => scrollToSection('navigation-patterns'),
      isActive: activeSection === 'navigation-patterns'
    },
    {
      key: 'semantic-colors',
      label: 'Semantic Colors',
      icon: Palette,
      onClick: () => scrollToSection('semantic-colors'),
      isActive: activeSection === 'semantic-colors'
    },
    {
      key: 'ui-components',
      label: 'UI Components',
      icon: Package,
      onClick: () => scrollToSection('ui-components'),
      isActive: activeSection === 'ui-components'
    }
  ];

  return (
    <Layout>
      <Container 
        sidebar="right" 
        sidebarContent={navigationItems}
        sidebarSticky={true}
        size="xl"
      >
        <div className="space-y-16">
          {/* Overview */}
          <section id="overview" className="space-y-6">
            <div className="flex items-center gap-3">
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                Developer-First Experience
              </Badge>
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                100% shadcn/ui Compatible
              </Badge>
            </div>
            <h1 className="text-5xl font-bold tracking-tight">Getting Started</h1>
            <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
              @voilajsx/uikit enhances shadcn/ui with professional themes, smart layouts, and a developer-first approach. 
              Same components you love, elevated experience with zero migration effort.
            </p>
            
            <Alert className="bg-blue-50 border-blue-200 dark:bg-blue-950 dark:border-blue-800">
              <Info className="h-4 w-4 text-blue-600" />
              <AlertTitle className="text-blue-800 dark:text-blue-200">Zero Migration Required</AlertTitle>
              <AlertDescription className="text-blue-700 dark:text-blue-300">
                Drop-in replacement for shadcn/ui. Just change import paths - everything else stays the same.
              </AlertDescription>
            </Alert>

            <div className="flex gap-4">
              <Button size="lg" onClick={() => scrollToSection('installation')}>
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/examples">View Examples</Link>
              </Button>
            </div>
          </section>

          {/* Core Concepts - Enhanced */}
          <section id="concepts" className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Core Concepts</h2>
              <p className="text-muted-foreground text-lg">
                @voilajsx/uikit is built on three layers that work together seamlessly.
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
                    All 35+ shadcn/ui components enhanced with automatic theming and perfect tree-shaking.
                  </p>
                  <div className="space-y-2">
                    <p className="font-medium">What you get:</p>
                    <ul className="space-y-1 text-muted-foreground text-sm">
                      <li>• Button, Card, Input, Form, Table, etc.</li>
                      <li>• Same API as shadcn/ui</li>
                      <li>• Automatic theme integration</li>
                      <li>• Direct imports for tree-shaking</li>
                      <li>• Cross-platform compatibility</li>
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
                    <ul className="space-y-1 text-muted-foreground text-sm">
                      <li>• Header - Navigation & branding</li>
                      <li>• Container - Content + sidebar</li>
                      <li>• Footer - Site footer layouts</li>
                      <li>• Touch-optimized for all devices</li>
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
                    <CardTitle className="text-xl">Templates</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Complete page structures ready to use with your content.
                  </p>
                  <div className="space-y-2">
                    <p className="font-medium">Ready-made templates:</p>
                    <ul className="space-y-1 text-muted-foreground text-sm">
                      <li>• Page - Full website layout</li>
                      <li>• AdminTemplate - Dashboard</li>
                      <li>• AuthTemplate - Login/signup</li>
                      <li>• BlankTemplate - Minimal pages</li>
                    </ul>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/components/layouts">View Templates</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <Alert className="bg-blue-50 border-blue-200 dark:bg-blue-950 dark:border-blue-800">
              <Zap className="h-4 w-4 text-blue-600" />
              <AlertDescription className="text-blue-800 dark:text-blue-200">
                <strong>Think layers:</strong> UI Components are your building blocks, 
                Sections are reusable page parts, and Templates are complete page structures.
              </AlertDescription>
            </Alert>
          </section>

          {/* Installation - Enhanced */}
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
                adapt to your chosen color scheme and work across all devices.
              </AlertDescription>
            </Alert>
          </section>

          {/* NEW: Critical Concepts Section */}
          <section id="critical-concepts" className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-red-600 dark:text-red-400">
                🚨 Critical Concepts
              </h2>
              <p className="text-muted-foreground text-lg">
                Essential patterns you must understand to use @voilajsx/uikit effectively.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Import Patterns */}
              <Card className="border-2 border-orange-200 dark:border-orange-800">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-orange-700 dark:text-orange-300">
                    <Package className="h-5 w-5" />
                    Import Patterns
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Always use direct imports for optimal tree-shaking and performance.
                  </p>
                  <div className="space-y-2">
                    <div className="p-3 bg-green-50 dark:bg-green-950 rounded-md border border-green-200 dark:border-green-800">
                      <p className="text-sm font-mono text-green-800 dark:text-green-200">
                        ✅ import {`{ Button }`} from '@voilajsx/uikit/button'
                      </p>
                    </div>
                    <div className="p-3 bg-red-50 dark:bg-red-950 rounded-md border border-red-200 dark:border-red-800">
                      <p className="text-sm font-mono text-red-800 dark:text-red-200">
                        ❌ import {`{ Button }`} from '@voilajsx/uikit'
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* ThemeProvider Requirement */}
              <Card className="border-2 border-red-200 dark:border-red-800">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-red-700 dark:text-red-300">
                    <AlertTriangle className="h-5 w-5" />
                    ThemeProvider Required
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    MUST wrap your entire app or components will break.
                  </p>
                  <div className="space-y-2">
                    <div className="p-3 bg-green-50 dark:bg-green-950 rounded-md border border-green-200 dark:border-green-800">
                      <p className="text-sm font-mono text-green-800 dark:text-green-200">
                        ✅ Always include styles import
                      </p>
                    </div>
                    <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded-md border border-blue-200 dark:border-blue-800">
                      <p className="text-sm font-mono text-blue-800 dark:text-blue-200">
                        import '@voilajsx/uikit/styles'
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Alert className="border-red-200 bg-red-50 dark:bg-red-950 dark:border-red-800">
              <AlertTriangle className="h-4 w-4 text-red-600" />
              <AlertTitle className="text-red-800 dark:text-red-200">Performance Warning</AlertTitle>
              <AlertDescription className="text-red-700 dark:text-red-300">
                Barrel imports (importing multiple components from one path) hurt bundle size. 
                Always use direct component imports for optimal performance.
              </AlertDescription>
            </Alert>

            <CodeBlock code={importPatternsCode} title="Import Patterns - Critical for Performance" />

          </section>
          {/* NEW: Template Selection Guide */}
          <section id="template-selection" className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Template Selection Guide</h2>
              <p className="text-muted-foreground text-lg">
                Choose the right template for your use case with this decision tree.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Decision Tree */}
              <Card className="border-2 border-blue-200 dark:border-blue-800">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building className="h-5 w-5" />
                    When to Use Each Template
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded-md border border-blue-200 dark:border-blue-800">
                      <h4 className="font-semibold text-blue-800 dark:text-blue-200">Page Template</h4>
                      <p className="text-sm text-blue-700 dark:text-blue-300">
                        Full website with header/footer navigation
                      </p>
                      <p className="text-xs text-blue-600 dark:text-blue-400 mt-1">
                        Use for: Marketing sites, documentation, company websites
                      </p>
                    </div>
                    
                    <div className="p-3 bg-green-50 dark:bg-green-950 rounded-md border border-green-200 dark:border-green-800">
                      <h4 className="font-semibold text-green-800 dark:text-green-200">AdminTemplate</h4>
                      <p className="text-sm text-green-700 dark:text-green-300">
                        Dashboard with persistent sidebar navigation
                      </p>
                      <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                        Use for: CRM systems, analytics dashboards, admin panels
                      </p>
                    </div>
                    
                    <div className="p-3 bg-purple-50 dark:bg-purple-950 rounded-md border border-purple-200 dark:border-purple-800">
                      <h4 className="font-semibold text-purple-800 dark:text-purple-200">AuthTemplate</h4>
                      <p className="text-sm text-purple-700 dark:text-purple-300">
                        Authentication flows with 6 visual variants
                      </p>
                      <p className="text-xs text-purple-600 dark:text-purple-400 mt-1">
                        Use for: Login, signup, password reset, onboarding
                      </p>
                    </div>
                    
                    <div className="p-3 bg-gray-50 dark:bg-gray-950 rounded-md border border-gray-200 dark:border-gray-800">
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200">Container</h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        Content section with optional sidebar
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                        Use for: Documentation sections, settings pages, content areas
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Responsive Behavior */}
              <Card className="border-2 border-amber-200 dark:border-amber-800">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="flex gap-1">
                      <Smartphone className="h-4 w-4" />
                      <Tablet className="h-4 w-4" />
                      <Monitor className="h-4 w-4" />
                    </div>
                    Cross-Device Optimization
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold mb-2">Mobile (less than 768px)</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Sidebars collapse to hamburger menu</li>
                        <li>• Header dropdowns use native touch</li>
                        <li>• Single-column content layout</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Tablet/iPad (768px - 1024px)</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Optimized sidebar widths for content ratio</li>
                        <li>• Touch-friendly dropdown interactions</li>
                        <li>• Balanced two-column layouts</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Desktop (greater than 1024px)</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Full sidebar widths for comfortable navigation</li>
                        <li>• Click/hover dropdown interactions</li>
                        <li>• Maximum content area utilization</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <CodeBlock code={templateSelectionCode} title="Template Selection Examples" />
          </section>

          {/* NEW: Navigation Patterns */}
          <section id="navigation-patterns" className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Navigation Patterns</h2>
              <p className="text-muted-foreground text-lg">
                Critical differences in navigation prop naming between components.
              </p>
            </div>

            <Alert className="border-red-200 bg-red-50 dark:bg-red-950 dark:border-red-800">
              <AlertTriangle className="h-4 w-4 text-red-600" />
              <AlertTitle className="text-red-800 dark:text-red-200">Prop Naming Differences</AlertTitle>
              <AlertDescription className="text-red-700 dark:text-red-300">
                <strong>AdminTemplate</strong> uses <code className="bg-red-100 px-1 rounded">title</code> in navigation items, 
                while <strong>Container sidebar</strong> and <strong>HeaderNav</strong> use <code className="bg-red-100 px-1 rounded">label</code>.
              </AlertDescription>
            </Alert>

            <div className="grid lg:grid-cols-3 gap-6">
              <Card className="border-2 border-green-200 dark:border-green-800">
                <CardHeader>
                  <CardTitle className="text-green-700 dark:text-green-300">AdminTemplate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm font-mono bg-green-50 dark:bg-green-950 p-2 rounded border">
                      title: 'Dashboard'
                    </p>
                    <p className="text-sm font-mono bg-green-50 dark:bg-green-950 p-2 rounded border">
                      submenu: [...]
                    </p>
                    <p className="text-xs text-muted-foreground">
                      For admin dashboard navigation
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-200 dark:border-blue-800">
                <CardHeader>
                  <CardTitle className="text-blue-700 dark:text-blue-300">Container Sidebar</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm font-mono bg-blue-50 dark:bg-blue-950 p-2 rounded border">
                      label: 'Overview'
                    </p>
                    <p className="text-sm font-mono bg-blue-50 dark:bg-blue-950 p-2 rounded border">
                      items: [...]
                    </p>
                    <p className="text-xs text-muted-foreground">
                      For content page sidebar
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-purple-200 dark:border-purple-800">
                <CardHeader>
                  <CardTitle className="text-purple-700 dark:text-purple-300">HeaderNav</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm font-mono bg-purple-50 dark:bg-purple-950 p-2 rounded border">
                      label: 'Services'
                    </p>
                    <p className="text-sm font-mono bg-purple-50 dark:bg-purple-950 p-2 rounded border">
                      items: [...]
                    </p>
                    <p className="text-xs text-muted-foreground">
                      For header dropdown menu
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <CodeBlock code={navigationStructureCode} title="Navigation Structure Differences" />
          </section>

          {/* NEW: Semantic Colors Guide */}
          <section id="semantic-colors" className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">🎨 Semantic Colors (Critical)</h2>
              <p className="text-muted-foreground text-lg">
                The #1 rule for theme compatibility: Always use semantic color variables.
              </p>
            </div>

            <Alert className="border-red-200 bg-red-50 dark:bg-red-950 dark:border-red-800">
              <AlertTriangle className="h-4 w-4 text-red-600" />
              <AlertTitle className="text-red-800 dark:text-red-200">Golden Rule</AlertTitle>
              <AlertDescription className="text-red-700 dark:text-red-300">
                <strong>If it uses a hardcoded color, it will break themes.</strong> Always use semantic 
                color variables that automatically adapt to the current theme.
              </AlertDescription>
            </Alert>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Correct Examples */}
              <Card className="border-2 border-green-200 dark:border-green-800">
                <CardHeader>
                  <CardTitle className="text-green-700 dark:text-green-300 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5" />
                    ✅ Correct - Semantic Colors
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <div className="p-2 bg-green-50 dark:bg-green-950 rounded border border-green-200 dark:border-green-800">
                      <p className="text-sm font-mono text-green-800 dark:text-green-200">
                        bg-background text-foreground
                      </p>
                    </div>
                    <div className="p-2 bg-green-50 dark:bg-green-950 rounded border border-green-200 dark:border-green-800">
                      <p className="text-sm font-mono text-green-800 dark:text-green-200">
                        bg-card text-card-foreground
                      </p>
                    </div>
                    <div className="p-2 bg-green-50 dark:bg-green-950 rounded border border-green-200 dark:border-green-800">
                      <p className="text-sm font-mono text-green-800 dark:text-green-200">
                        bg-primary text-primary-foreground
                      </p>
                    </div>
                    <div className="p-2 bg-green-50 dark:bg-green-950 rounded border border-green-200 dark:border-green-800">
                      <p className="text-sm font-mono text-green-800 dark:text-green-200">
                        border-border text-muted-foreground
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-green-600 dark:text-green-400">
                    These automatically adapt to all themes and variants
                  </p>
                </CardContent>
              </Card>

              {/* Wrong Examples */}
              <Card className="border-2 border-red-200 dark:border-red-800">
                <CardHeader>
                  <CardTitle className="text-red-700 dark:text-red-300 flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5" />
                    ❌ Wrong - Hardcoded Colors
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <div className="p-2 bg-red-50 dark:bg-red-950 rounded border border-red-200 dark:border-red-800">
                      <p className="text-sm font-mono text-red-800 dark:text-red-200">
                        bg-white text-black
                      </p>
                    </div>
                    <div className="p-2 bg-red-50 dark:bg-red-950 rounded border border-red-200 dark:border-red-800">
                      <p className="text-sm font-mono text-red-800 dark:text-red-200">
                        bg-gray-100 text-gray-900
                      </p>
                    </div>
                    <div className="p-2 bg-red-50 dark:bg-red-950 rounded border border-red-200 dark:border-red-800">
                      <p className="text-sm font-mono text-red-800 dark:text-red-200">
                        bg-blue-500 text-white
                      </p>
                    </div>
                    <div className="p-2 bg-red-50 dark:bg-red-950 rounded border border-red-200 dark:border-red-800">
                      <p className="text-sm font-mono text-red-800 dark:text-red-200">
                        border-gray-200 text-slate-600
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-red-600 dark:text-red-400">
                    These will break in dark themes and different color schemes
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { category: 'Background', colors: ['bg-background', 'bg-card', 'bg-popover', 'bg-muted'] },
                { category: 'Text', colors: ['text-foreground', 'text-muted-foreground', 'text-card-foreground'] },
                { category: 'Interactive', colors: ['bg-primary', 'bg-secondary', 'bg-accent', 'bg-destructive'] },
                { category: 'Borders', colors: ['border-border', 'border-input', 'ring-ring'] }
              ].map((group) => (
                <Card key={group.category}>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm">{group.category}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {group.colors.map((color) => (
                      <div key={color} className="text-xs font-mono p-1 bg-muted rounded">
                        {color}
                      </div>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>

            <CodeBlock code={semanticColorsExample} title="Semantic Colors - Correct vs Wrong" />
          </section>

          {/* Enhanced UI Components */}
          <section id="ui-components" className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">UI Components</h2>
              <p className="text-muted-foreground text-lg">
                All your favorite shadcn/ui components, enhanced with automatic theming.
              </p>
            </div>
            
            <CodeBlock code={uiComponentsExample} title="Using UI Components with Semantic Colors" />

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>35+ Components Available</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Button, Card, Input, Form, Table, Dialog, DataTable and many more.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                    <li>• Enhanced DataTable with search & sort</li>
                    <li>• Form components with React Hook Form</li>
                    <li>• All shadcn/ui components included</li>
                  </ul>
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
                  <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                    <li>• Zero learning curve if you know shadcn/ui</li>
                    <li>• Same component variants and props</li>
                    <li>• Enhanced with automatic theming</li>
                  </ul>
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
            
            <CodeBlock code={`import { Header, HeaderLogo, HeaderNav } from '@voilajsx/uikit/header';
import { Container } from '@voilajsx/uikit/container';
import { Footer, FooterBasic } from '@voilajsx/uikit/footer';
import { Button } from '@voilajsx/uikit/button';

function CustomPage() {
  const navigation = [
    { key: 'dashboard', label: 'Dashboard', icon: Home, isActive: true },
    { key: 'users', label: 'Users', icon: Users, badge: '12' }
  ];

  return (
    <>
      <Header variant="default" sticky={true}>
        <HeaderLogo>
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Brand" className="h-8 w-8" />
            <span className="text-xl font-bold">My App</span>
          </div>
        </HeaderLogo>
        <HeaderNav items={[
          { key: 'home', label: 'Home', isActive: true },
          { key: 'about', label: 'About' }
        ]} />
      </Header>
      
      <Container 
        sidebar="left" 
        sidebarContent={navigation}
        sidebarSticky={true}
        size="xl"
      >
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Main Content</h2>
          <p className="text-muted-foreground">Your page content goes here</p>
        </div>
      </Container>
      
      <Footer variant="default">
        <FooterBasic 
          logo={<span className="font-bold">Brand</span>}
          copyright="© 2024 Your Company"
        />
      </Footer>
    </>
  );
}`} title="Building with Sections" />

            <div className="grid md:grid-cols-3 gap-4">
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <Grid3X3 className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold mb-2">Header</h4>
                  <p className="text-sm text-muted-foreground">Touch-optimized navigation and branding</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <Package className="h-6 w-6 text-green-600" />
                  </div>
                  <h4 className="font-semibold mb-2">Container</h4>
                  <p className="text-sm text-muted-foreground">Content with iPad-optimized sidebar</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <Building className="h-6 w-6 text-purple-600" />
                  </div>
                  <h4 className="font-semibold mb-2">Footer</h4>
                  <p className="text-sm text-muted-foreground">Flexible footer layouts</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Enhanced Layouts */}
          <section id="layouts" className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">Templates</h2>
              <p className="text-muted-foreground text-lg">
                Complete page templates for common use cases. Perfect for rapid prototyping.
              </p>
            </div>
            
            <CodeBlock code={`import { Page, PageHeader, PageContent, PageFooter } from '@voilajsx/uikit/page';
import { AdminTemplate } from '@voilajsx/uikit/admin';
import { AuthTemplate } from '@voilajsx/uikit/auth';
import { BlankTemplate } from '@voilajsx/uikit/blank';

// Complete page layout with compound components
function MainApp() {
  return (
    <Page variant="default" size="xl">
      <PageHeader variant="default" sticky={true}>
        <HeaderLogo>My Application</HeaderLogo>
        <HeaderNav items={navItems} />
      </PageHeader>
      <PageContent>
        <h2 className="text-2xl font-bold mb-4">Welcome to your app</h2>
        <Card className="bg-card text-card-foreground border-border">
          <CardContent className="p-6">
            Your content here
          </CardContent>
        </Card>
      </PageContent>
      <PageFooter variant="default">
        <FooterBasic copyright="© 2024 Company" />
      </PageFooter>
    </Page>
  );
}

// Admin dashboard layout
function Dashboard() {
  const navigationItems = [
    {
      key: 'dashboard',
      title: 'Dashboard',  // Note: 'title' for AdminTemplate
      icon: Home,
      path: '/admin',
      isActive: true,
      section: 'main'
    }
  ];

  return (
    <AdminTemplate 
      variant="default"
      size="default"
      title="Admin Dashboard"
      navigationItems={navigationItems}
      currentPath="/admin"
      onNavigate={(path) => navigate(path)}
    >
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="bg-card text-card-foreground border-border">
            <CardHeader>
              <CardTitle className="text-foreground">Total Users</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">1,234</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminTemplate>
  );
}

// Authentication page
function LoginPage() {
  return (
    <AuthTemplate 
      variant="card" 
      title="Welcome Back" 
      subtitle="Sign in to continue"
    >
      <div className="space-y-4">
        <Input 
          placeholder="Email" 
          className="bg-background text-foreground border-input"
        />
        <Input 
          type="password" 
          placeholder="Password"
          className="bg-background text-foreground border-input"
        />
        <Button className="w-full">Sign In</Button>
      </div>
    </AuthTemplate>
  );
}

// Simple content page
function AboutPage() {
  return (
    <BlankTemplate variant="default" title="About Us">
      <div className="max-w-4xl mx-auto p-8 space-y-6">
        <h1 className="text-4xl font-bold text-foreground">About Us</h1>
        <Card className="bg-card text-card-foreground border-border">
          <CardContent className="p-6">
            <p className="text-muted-foreground">Simple content page</p>
          </CardContent>
        </Card>
      </div>
    </BlankTemplate>
  );
}`} title="Using Templates with Semantic Colors" />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { name: 'Page', desc: 'Main app layout with compound components', color: 'bg-blue-500', use: 'Marketing sites, documentation' },
                { name: 'AdminTemplate', desc: 'Dashboard with sidebar navigation', color: 'bg-green-500', use: 'Admin panels, CRM systems' },
                { name: 'AuthTemplate', desc: 'Login and signup pages', color: 'bg-purple-500', use: 'Authentication flows' },
                { name: 'BlankTemplate', desc: 'Minimal content pages', color: 'bg-gray-500', use: '404 pages, simple content' },
              ].map((layout) => (
                <Card key={layout.name}>
                  <CardContent className="pt-6 text-center">
                    <div className={`w-12 h-12 ${layout.color} rounded-lg mx-auto mb-3`}></div>
                    <h4 className="font-semibold mb-2">{layout.name}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{layout.desc}</p>
                    <p className="text-xs text-muted-foreground">{layout.use}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Enhanced Theming */}
          <section id="theming" className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">Theming</h2>
              <p className="text-muted-foreground text-lg">
                Switch between 6 professional themes instantly with automatic light/dark variants.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: 'Default', color: 'bg-blue-500', desc: 'Ocean blue professional colors', use: 'Business applications' },
                { name: 'Metro', color: 'bg-slate-500', desc: 'Clean transit-inspired gray-blue', use: 'Admin panels, dashboards' },
                { name: 'Studio', color: 'bg-amber-500', desc: 'Designer grays with amber accent', use: 'Design tools, creative platforms' },
                { name: 'Ruby', color: 'bg-red-500', desc: 'Sophisticated red with gold accents', use: 'Premium brands' },
                { name: 'Neon', color: 'bg-fuchsia-500', desc: 'Electric cyberpunk magenta-cyan', use: 'Gaming, tech applications' },
                { name: 'Aurora', color: 'bg-purple-500', desc: 'Northern lights purple-green gradients', use: 'Creative applications' },
              ].map((theme) => (
                <Card key={theme.name}>
                  <CardContent className="pt-6 text-center">
                    <div className={`w-12 h-12 ${theme.color} rounded-lg mx-auto mb-3`}></div>
                    <h4 className="font-semibold">{theme.name}</h4>
                    <p className="text-sm text-muted-foreground mb-1">{theme.desc}</p>
                    <p className="text-xs text-muted-foreground">{theme.use}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <CodeBlock code={themingExample} title="Theme switching" />
          </section>

          {/* Enhanced Migration */}
          <section id="migration" className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">Migration from shadcn/ui</h2>
              <p className="text-muted-foreground text-lg">
                Already using shadcn/ui? Migration is just changing import paths - zero breaking changes.
              </p>
            </div>
            
            <Alert>
              <CheckCircle className="h-4 w-4" />
              <AlertDescription>
                <strong>100% backward compatible</strong> - All props, variants, and behaviors stay exactly the same.
              </AlertDescription>
            </Alert>
            
            <CodeBlock code={migrationCode} title="Only imports change" />
            
            <div className="grid md:grid-cols-2 gap-6">
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
                    <li>✅ Cross-platform compatibility (iPad optimized)</li>
                    <li>✅ Enhanced DataTable with search/sort</li>
                    <li>✅ Touch-friendly navigation components</li>
                    <li>✅ Zero breaking changes to existing code</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-blue-50 border-blue-200 dark:bg-blue-950 dark:border-blue-800">
                <CardHeader>
                  <CardTitle className="text-blue-800 dark:text-blue-200">
                    Migration checklist:
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-blue-700 dark:text-blue-300">
                    <li>🔄 Replace import paths</li>
                    <li>🎨 Add ThemeProvider wrapper</li>
                    <li>📦 Import @voilajsx/uikit/styles</li>
                    <li>🎯 Use semantic color variables</li>
                    <li>🧪 Test in light/dark themes</li>
                    <li>📱 Verify touch device compatibility</li>
                    <li>🚀 Enjoy enhanced components!</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* NEW: Responsive Design & Best Practices */}
          <section id="responsive-design" className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Responsive Design & Best Practices</h2>
              <p className="text-muted-foreground text-lg">
                Key patterns for building applications that work beautifully across all devices.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Device Optimization */}
              <Card className="border-2 border-blue-200 dark:border-blue-800">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="flex gap-1">
                      <Smartphone className="h-4 w-4" />
                      <Tablet className="h-4 w-4" />
                      <Monitor className="h-4 w-4" />
                    </div>
                    Device Optimization
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded-md border border-blue-200 dark:border-blue-800">
                      <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">iPad (768px-1024px)</h4>
                      <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                        <li>• Sidebar widths optimized for content ratio</li>
                        <li>• Touch-friendly dropdown interactions</li>
                        <li>• Click-based navigation (no hover conflicts)</li>
                        <li>• Responsive breakpoint progression</li>
                      </ul>
                    </div>
                    
                    <div className="p-3 bg-green-50 dark:bg-green-950 rounded-md border border-green-200 dark:border-green-800">
                      <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Desktop (greater than 1024px)</h4>
                      <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                        <li>• Full comfortable sidebar widths</li>
                        <li>• Click + hover interaction support</li>
                        <li>• Maximum content area utilization</li>
                        <li>• Keyboard navigation friendly</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Best Practices */}
              <Card className="border-2 border-amber-200 dark:border-amber-800">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="h-5 w-5" />
                    Development Best Practices
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="p-3 bg-amber-50 dark:bg-amber-950 rounded-md border border-amber-200 dark:border-amber-800">
                      <h4 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">Always Use:</h4>
                      <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-1">
                        <li>• Direct component imports</li>
                        <li>• Semantic color variables</li>
                        <li>• ThemeProvider wrapper</li>
                        <li>• Responsive breakpoints</li>
                      </ul>
                    </div>
                    
                    <div className="p-3 bg-red-50 dark:bg-red-950 rounded-md border border-red-200 dark:border-red-800">
                      <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">Never Use:</h4>
                      <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
                        <li>• Hardcoded colors (bg-white, text-black)</li>
                        <li>• Barrel imports from root package</li>
                        <li>• CSS color values (#ffffff, rgb())</li>
                        <li>• Hover-only interactions</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Alert className="bg-amber-50 border-amber-200 dark:bg-amber-950 dark:border-amber-800">
              <Eye className="h-4 w-4 text-amber-600" />
              <AlertTitle className="text-amber-800 dark:text-amber-200">Testing Checklist</AlertTitle>
              <AlertDescription className="text-amber-700 dark:text-amber-300">
                Always test your components in: <strong>light theme</strong>, <strong>dark theme</strong>, 
                <strong>different theme colors</strong>, <strong>mobile view</strong>, <strong>iPad view</strong>, 
                and <strong>desktop view</strong>.
              </AlertDescription>
            </Alert>
          </section>

          {/* Enhanced Next Steps */}
          <section id="next-steps" className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">What's Next?</h2>
              <p className="text-muted-foreground text-lg">
                Dive deeper into specific areas to master @voilajsx/uikit and build production-ready applications.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="group hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-primary/50" asChild>
                <Link to="/components/ui">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Package className="h-5 w-5 text-blue-600" />
                        <span>UI Components</span>
                      </div>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-3">
                      Explore all 35+ shadcn/ui components with enhanced theming.
                    </p>
                    <div className="flex gap-2">
                      <Badge variant="secondary" className="text-xs">DataTable</Badge>
                      <Badge variant="secondary" className="text-xs">Forms</Badge>
                      <Badge variant="secondary" className="text-xs">Charts</Badge>
                    </div>
                  </CardContent>
                </Link>
              </Card>

              <Card className="group hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-primary/50" asChild>
                <Link to="/components/sections">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Grid3X3 className="h-5 w-5 text-green-600" />
                        <span>Sections</span>
                      </div>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-3">
                      Master page sections and custom layout composition.
                    </p>
                    <div className="flex gap-2">
                      <Badge variant="secondary" className="text-xs">Header</Badge>
                      <Badge variant="secondary" className="text-xs">Container</Badge>
                      <Badge variant="secondary" className="text-xs">Footer</Badge>
                    </div>
                  </CardContent>
                </Link>
              </Card>

              <Card className="group hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-primary/50" asChild>
                <Link to="/components/layouts">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Building className="h-5 w-5 text-purple-600" />
                        <span>Templates</span>
                      </div>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-3">
                      Complete page layouts for rapid development.
                    </p>
                    <div className="flex gap-2">
                      <Badge variant="secondary" className="text-xs">Page</Badge>
                      <Badge variant="secondary" className="text-xs">Admin</Badge>
                      <Badge variant="secondary" className="text-xs">Auth</Badge>
                    </div>
                  </CardContent>
                </Link>
              </Card>

              <Card className="group hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-primary/50" asChild>
                <Link to="/themes">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Palette className="h-5 w-5 text-pink-600" />
                        <span>Advanced Theming</span>
                      </div>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-3">
                      Create custom themes and understand semantic colors.
                    </p>
                    <div className="flex gap-2">
                      <Badge variant="secondary" className="text-xs">6 Themes</Badge>
                      <Badge variant="secondary" className="text-xs">Custom</Badge>
                    </div>
                  </CardContent>
                </Link>
              </Card>

              <Card className="group hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-primary/50" asChild>
                <Link to="/examples">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Code className="h-5 w-5 text-orange-600" />
                        <span>Live Examples</span>
                      </div>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-3">
                      See complete applications and copy real-world patterns.
                    </p>
                    <div className="flex gap-2">
                      <Badge variant="secondary" className="text-xs">Dashboard</Badge>
                      <Badge variant="secondary" className="text-xs">E-commerce</Badge>
                    </div>
                  </CardContent>
                </Link>
              </Card>

              <Card className="group hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-primary/50" asChild>
                <Link to="/cookbook">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Rocket className="h-5 w-5 text-red-600" />
                        <span>Cookbook</span>
                      </div>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-3">
                      Common patterns and recipes for everyday development tasks.
                    </p>
                    <div className="flex gap-2">
                      <Badge variant="secondary" className="text-xs">Patterns</Badge>
                      <Badge variant="secondary" className="text-xs">Recipes</Badge>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            </div>

            {/* Call to Action */}
            <div className="text-center p-8 bg-gradient-to-r from-primary/10 via-accent/5 to-secondary/10 rounded-xl border border-primary/20">
              <div className="max-w-2xl mx-auto space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Ready to build something amazing?</h3>
                  <p className="text-muted-foreground">
                    Join thousands of developers building beautiful, responsive React applications with @voilajsx/uikit
                  </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center justify-center gap-2 p-3 bg-background/50 rounded-lg border">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>35+ Components</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 p-3 bg-background/50 rounded-lg border">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>6 Professional Themes</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 p-3 bg-background/50 rounded-lg border">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Touch Optimized</span>
                  </div>
                </div>
                
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
                  <Button variant="ghost" size="lg" asChild>
                    <Link to="/migration">
                      Migrate from shadcn/ui
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Quick Start Summary */}
            <Card className="bg-muted/30 border-dashed border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-yellow-600" />
                  Quick Start Summary
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Essential Steps:</h4>
                    <ol className="space-y-2 text-sm">
                      <li>1. <code className="bg-muted px-1 rounded">npm install @voilajsx/uikit</code></li>
                      <li>2. Wrap app with <code className="bg-muted px-1 rounded">ThemeProvider</code></li>
                      <li>3. Import <code className="bg-muted px-1 rounded">@voilajsx/uikit/styles</code></li>
                      <li>4. Use direct component imports</li>
                      <li>5. Use semantic color variables</li>
                    </ol>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Remember:</h4>
                    <ul className="space-y-2 text-sm">
                      <li>✅ Always use <code className="bg-muted px-1 rounded">bg-background</code> not <code className="bg-muted px-1 rounded">bg-white</code></li>
                      <li>✅ Test in light and dark themes</li>
                      <li>✅ AdminTemplate uses <code className="bg-muted px-1 rounded">title</code>, Container uses <code className="bg-muted px-1 rounded">label</code></li>
                      <li>✅ Components work across all devices</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </Container>
    </Layout>
  );
}

export default Start;