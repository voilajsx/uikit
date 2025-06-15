/**
 * Getting Started guide for @voilajsx/uikit - Part 1
 * Essential documentation with clear flow and important concepts
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
  Package,
  Code,
  Palette,
  AlertTriangle,
  Rocket,
  Building,
  Grid3X3,
  Zap,
  Eye,
  FileText,
  Home,
  Users
} from 'lucide-react';
import Layout from '../components/Layout';
import CodeBlock from '../components/CodeBlock';

const installCode = `npm install @voilajsx/uikit`;

const setupCode = `/**
 * Main application entry point with theme provider setup
 * @module @voilajsx/uikit
 * @file main.tsx
 */

import { ThemeProvider } from '@voilajsx/uikit/theme-provider';
import '@voilajsx/uikit/styles';
import App from './App';

function Root() {
  return (
    <ThemeProvider theme="default" variant="light" detectSystem={true}>
      <App />
    </ThemeProvider>
  );
}`;

const basicUsageCode = `/**
 * Basic app component demonstrating themed components
 * @module @voilajsx/uikit
 * @file App.tsx
 */

import { Button } from '@voilajsx/uikit/button';
import { Card, CardHeader, CardTitle, CardContent } from '@voilajsx/uikit/card';

function App() {
  return (
    <div className="min-h-screen bg-background p-8">
      <Card className="max-w-md mx-auto bg-card text-card-foreground border-border">
        <CardHeader>
          <CardTitle className="text-foreground">Hello UIKit!</CardTitle>
        </CardHeader>
        <CardContent>
          <Button size="lg">Beautiful Button</Button>
        </CardContent>
      </Card>
    </div>
  );
}`;

const layoutExampleCode = `/**
 * Complete page using AdminLayout
 * @module @voilajsx/uikit
 * @file examples/Dashboard.tsx
 */

import { AdminLayout } from '@voilajsx/uikit/admin';
import { Card, CardHeader, CardTitle, CardContent } from '@voilajsx/uikit/card';
import { Home, Users, Settings } from 'lucide-react';

function Dashboard() {
  const navigation = [
    { key: 'dashboard', label: 'Dashboard', icon: Home, isActive: true },
    { key: 'users', label: 'Users', icon: Users, badge: '24' },
    { key: 'settings', label: 'Settings', icon: Settings }
  ];

  return (
    <AdminLayout 
      variant="default"
      title="Admin Dashboard"
      navigationItems={navigation}
    >
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <Card>
          <CardHeader>
            <CardTitle>Welcome Back</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Your dashboard is ready to use with automatic theming.
            </p>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}`;

const colorExampleCode = `/**
 * Correct color usage for theme compatibility
 * @module @voilajsx/uikit
 * @file examples/ColorSystem.tsx
 */

// ✅ CORRECT - Use semantic color variables (theme-aware)
<Card className="bg-card text-card-foreground border-border">
  <CardHeader className="border-b border-border">
    <CardTitle className="text-foreground">Title</CardTitle>
    <p className="text-muted-foreground">Subtitle</p>
  </CardHeader>
  <CardContent className="text-foreground">
    Content adapts to theme automatically
  </CardContent>
</Card>

// ❌ WRONG - Never use hardcoded colors (breaks themes)
<Card className="bg-white text-black border-gray-200">
  <CardHeader className="border-b border-gray-200">
    <CardTitle className="text-gray-900">Title</CardTitle>
    <p className="text-gray-600">Subtitle</p>
  </CardHeader>
</Card>`;

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

    const sections = ['overview', 'concepts', 'installation', 'architecture', 'colors', 'examples', 'migration', 'next-steps'];
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
      icon: Eye,
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
      key: 'architecture',
      label: 'Architecture',
      icon: Building,
      onClick: () => scrollToSection('architecture'),
      isActive: activeSection === 'architecture'
    },
    {
      key: 'colors',
      label: 'Color System',
      icon: Palette,
      onClick: () => scrollToSection('colors'),
      isActive: activeSection === 'colors'
    },
    {
      key: 'examples',
      label: 'Examples',
      icon: Code,
      onClick: () => scrollToSection('examples'),
      isActive: activeSection === 'examples'
    },
    {
      key: 'migration',
      label: 'Migration',
      icon: Zap,
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
        sidebarSticky={true}
        size="xl"
      >
        <div className="space-y-16">
          {/* Overview */}
          <section id="overview" className="space-y-6">
            <Badge variant="secondary">
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
            
            <div className="space-y-6">
              {/* UI Components */}
              <Card className="border-2 border-primary/20 bg-primary/5">
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-6 items-center">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center flex-shrink-0">
                        <Package className="h-8 w-8 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">UI Components</h3>
                        <Badge variant="secondary" className="mt-2">Building Blocks</Badge>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <p className="text-muted-foreground">
                        All shadcn/ui components enhanced with automatic theming and perfect tree-shaking.
                      </p>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <div className="font-medium mb-2">Components:</div>
                          <div className="space-y-1 text-muted-foreground">
                            <div>• Button, Card, Input</div>
                            <div>• Form, Table, Dialog</div>
                            <div>• 35+ total components</div>
                          </div>
                        </div>
                        <div>
                          <div className="font-medium mb-2">Features:</div>
                          <div className="space-y-1 text-muted-foreground">
                            <div>• Same API as shadcn/ui</div>
                            <div>• Auto theme integration</div>
                            <div>• Perfect tree-shaking</div>
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" asChild>
                        <Link to="/components/ui">Browse Components</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Sections */}
              <Card className="border-2 border-secondary/20 bg-secondary/5">
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-6 items-center">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center flex-shrink-0">
                        <Grid3X3 className="h-8 w-8 text-secondary-foreground" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">Sections</h3>
                        <Badge variant="secondary" className="mt-2">Page Parts</Badge>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <p className="text-muted-foreground">
                        Reusable page sections that you can mix and match to create custom layouts.
                      </p>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <div className="font-medium mb-2">Available:</div>
                          <div className="space-y-1 text-muted-foreground">
                            <div>• Header - Navigation</div>
                            <div>• Container - Content</div>
                            <div>• Footer - Site footer</div>
                          </div>
                        </div>
                        <div>
                          <div className="font-medium mb-2">Benefits:</div>
                          <div className="space-y-1 text-muted-foreground">
                            <div>• Mix and match</div>
                            <div>• Custom layouts</div>
                            <div>• Reusable parts</div>
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" asChild>
                        <Link to="/components/sections">View Sections</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Layouts */}
              <Card className="border-2 border-accent/20 bg-accent/5">
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-6 items-center">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center flex-shrink-0">
                        <Building className="h-8 w-8 text-accent-foreground" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">Layouts</h3>
                        <Badge variant="secondary" className="mt-2">Complete Pages</Badge>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <p className="text-muted-foreground">
                        Complete page structures ready to use with your content for rapid development.
                      </p>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <div className="font-medium mb-2">Ready Layouts:</div>
                          <div className="space-y-1 text-muted-foreground">
                            <div>• PageLayout - Main app</div>
                            <div>• AdminLayout - Dashboard</div>
                            <div>• AuthLayout - Login pages</div>
                            <div>• BlankLayout - Simple pages</div>
                          </div>
                        </div>
                        <div>
                          <div className="font-medium mb-2">Perfect for:</div>
                          <div className="space-y-1 text-muted-foreground">
                            <div>• New projects</div>
                            <div>• Standard patterns</div>
                            <div>• Rapid prototyping</div>
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" asChild>
                        <Link to="/components/layouts">View Layouts</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Alert>
              <Zap className="h-4 w-4" />
              <AlertDescription>
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
            
            {/* Quick Start */}
            <div className="p-6 bg-muted/50 border rounded-lg">
              <h3 className="text-xl font-semibold mb-3">🚀 Quick Start (Recommended)</h3>
              <p className="text-muted-foreground mb-4">
                Create a new UIKit project with everything pre-configured:
              </p>
              <CodeBlock code={`# Create new project with UIKit
npm create uikit my-app
cd my-app
npm run dev`} language="bash" title="Terminal" />
              
              <Alert className="mt-4">
                <CheckCircle className="h-4 w-4" />
                <AlertDescription>
                  <strong>What you'll see:</strong> A beautiful landing page with theme switcher showcasing all 6 UIKit themes. 
                  Try switching between themes and light/dark mode to see UIKit in action!
                </AlertDescription>
              </Alert>
            </div>

            {/* Manual Installation */}
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-semibold">Manual Installation</h3>
                <Badge variant="secondary" className="text-xs">Existing Projects</Badge>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3">1. Install UIKit</h4>
                  <CodeBlock code={installCode} language="bash" title="Terminal" />
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-3">2. Setup ThemeProvider</h4>
                  <CodeBlock code={setupCode} title="main.tsx" />
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-3">3. Start using components</h4>
                  <CodeBlock code={basicUsageCode} title="App.tsx" />
                </div>
              </div>
            </div>

            <Alert>
              <CheckCircle className="h-4 w-4" />
              <AlertDescription className="pt-1">
                <strong>That's it!</strong> You now have themed components that automatically 
                adapt to your chosen color scheme. ✨
              </AlertDescription>
            </Alert>
          </section>

          {/* Architecture Guide */}
          <section id="architecture" className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">How to Build with UIKit</h2>
              <p className="text-muted-foreground text-lg">
                Two simple paths: Use ready-made layouts or build custom layouts with sections.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Path 1: Start with Layouts */}
              <Card className="border-2 border-primary/20 bg-primary/5">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <Building className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">Path 1: Use Ready Layouts</CardTitle>
                  <Badge variant="secondary" className="mt-2">Fastest Start</Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-center">
                    Pick a complete page template, then customize with UI components
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-background rounded-lg border">
                      <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-sm">1</div>
                      <div>
                        <div className="font-medium">Choose a Layout</div>
                        <div className="text-sm text-muted-foreground">PageLayout, AdminLayout, AuthLayout, or BlankLayout</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 bg-background rounded-lg border">
                      <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center text-secondary-foreground font-bold text-sm">2</div>
                      <div>
                        <div className="font-medium">Add UI Components</div>
                        <div className="text-sm text-muted-foreground">Button, Card, Input, Form, etc.</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <div className="text-sm font-medium mb-2">Best for:</div>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <div>• New projects</div>
                      <div>• Standard patterns</div>
                      <div>• Rapid prototyping</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Path 2: Build with Sections */}
              <Card className="border-2 border-accent/20 bg-accent/5">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-accent rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <Grid3X3 className="h-8 w-8 text-accent-foreground" />
                  </div>
                  <CardTitle className="text-xl">Path 2: Build Custom Layout</CardTitle>
                  <Badge variant="secondary" className="mt-2">More Flexible</Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-center">
                    Compose page sections, then add UI components to each section
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-background rounded-lg border">
                      <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-accent-foreground font-bold text-sm">1</div>
                      <div>
                        <div className="font-medium">Combine Sections</div>
                        <div className="text-sm text-muted-foreground">Header + Container + Footer</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 bg-background rounded-lg border">
                      <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center text-secondary-foreground font-bold text-sm">2</div>
                      <div>
                        <div className="font-medium">Add UI Components</div>
                        <div className="text-sm text-muted-foreground">Button, Card, Input, Form, etc.</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <div className="text-sm font-medium mb-2">Best for:</div>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <div>• Custom designs</div>
                      <div>• Unique layouts</div>
                      <div>• Maximum control</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Layout Selection Guide */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Layout Selection Guide</h3>
              <div className="overflow-x-auto">
                <div className="min-w-full border rounded-lg">
                  <div className="bg-muted/50 px-4 py-3 border-b">
                    <div className="grid grid-cols-3 gap-4 font-medium text-sm">
                      <div>What do you need?</div>
                      <div>Use Layout</div>
                      <div>When to choose</div>
                    </div>
                  </div>
                  <div className="divide-y">
                    <div className="px-4 py-3 grid grid-cols-3 gap-4 text-sm">
                      <div>Full website with header/footer navigation</div>
                      <div><Badge variant="secondary">PageLayout</Badge></div>
                      <div className="text-muted-foreground">Marketing sites, documentation, company websites</div>
                    </div>
                    <div className="px-4 py-3 grid grid-cols-3 gap-4 text-sm bg-muted/20">
                      <div>Admin dashboard with persistent sidebar</div>
                      <div><Badge variant="secondary">AdminLayout</Badge></div>
                      <div className="text-muted-foreground">CRM systems, analytics dashboards, admin panels</div>
                    </div>
                    <div className="px-4 py-3 grid grid-cols-3 gap-4 text-sm">
                      <div>Authentication flows</div>
                      <div><Badge variant="secondary">AuthLayout</Badge></div>
                      <div className="text-muted-foreground">Login, signup, password reset, onboarding</div>
                    </div>
                    <div className="px-4 py-3 grid grid-cols-3 gap-4 text-sm bg-muted/20">
                      <div>Simple content or error pages</div>
                      <div><Badge variant="secondary">BlankLayout</Badge></div>
                      <div className="text-muted-foreground">404 pages, maintenance, about us, terms</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Color System - Critical */}
          <section id="colors" className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Color System (Critical)</h2>
              <p className="text-muted-foreground text-lg">
                Understanding the color system is essential for theme compatibility. <strong>This is the #1 mistake developers make.</strong>
              </p>
            </div>

            <Alert variant="destructive">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                <strong>Never use hardcoded colors</strong> like bg-white, text-black, or bg-gray-100. 
                They break themes. Always use semantic color variables.
              </AlertDescription>
            </Alert>

            <div className="grid md:grid-cols-2 gap-8">
 <Card className="border-border bg-card">
   <CardHeader>
     <CardTitle className="text-foreground flex items-center gap-2">
       <CheckCircle className="h-5 w-5 text-green-600" />
       ✅ Correct
     </CardTitle>
   </CardHeader>
   <CardContent className="space-y-2 text-sm font-mono">
     <div>bg-background</div>
     <div>text-foreground</div>
     <div>bg-card border-border</div>
     <div>text-muted-foreground</div>
     <div>bg-primary text-primary-foreground</div>
   </CardContent>
 </Card>

 <Card className="border-border bg-muted">
   <CardHeader>
     <CardTitle className="text-foreground flex items-center gap-2">
       <AlertTriangle className="h-5 w-5 text-red-600" />
       ❌ Wrong
     </CardTitle>
   </CardHeader>
   <CardContent className="space-y-2 text-sm font-mono text-muted-foreground line-through">
     <div>bg-white text-black</div>
     <div>bg-gray-100</div>
     <div>bg-blue-500 text-white</div>
     <div>text-gray-600</div>
     <div>border-gray-200</div>
   </CardContent>
 </Card>
</div>

            <CodeBlock code={colorExampleCode} title="Color System Example" />

            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-semibold mb-2">Essential Color Variables</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm font-mono">
                <code className="bg-background px-2 py-1 rounded border">bg-background</code>
                <code className="bg-background px-2 py-1 rounded border">text-foreground</code>
                <code className="bg-background px-2 py-1 rounded border">bg-card</code>
                <code className="bg-background px-2 py-1 rounded border">border-border</code>
                <code className="bg-background px-2 py-1 rounded border">text-muted-foreground</code>
                <code className="bg-background px-2 py-1 rounded border">bg-primary</code>
                <code className="bg-background px-2 py-1 rounded border">bg-secondary</code>
                <code className="bg-background px-2 py-1 rounded border">bg-accent</code>
              </div>
            </div>
          </section>

          {/* Examples */}
          <section id="examples" className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">Complete Examples</h2>
              <p className="text-muted-foreground text-lg">
                See UIKit in action with real-world examples.
              </p>
            </div>

            <CodeBlock code={layoutExampleCode} title="AdminLayout Example" />

           
          </section>

          {/* Migration */}
          <section id="migration" className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">Migration from shadcn/ui</h2>
              <p className="text-muted-foreground text-lg">
                Already using shadcn/ui? Migration is just changing import paths. Zero breaking changes.
              </p>
            </div>
            
            <Alert>
              <CheckCircle className="h-4 w-4" />
              <AlertDescription className="pt-1">
                <strong>100% backward compatible</strong> - All props, variants, and behaviors stay exactly the same.
              </AlertDescription>
            </Alert>
            
            <div className="grid md:grid-cols-1 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Before (shadcn/ui)</CardTitle>
                </CardHeader>
                <CardContent className="font-mono text-sm space-y-2">
                  <div>import &#123; Button &#125; from "@/components/ui/button"</div>
                  <div>import &#123; Card &#125; from "@/components/ui/card"</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>After (@voilajsx/uikit)</CardTitle>
                </CardHeader>
                <CardContent className="font-mono text-sm space-y-2">
                  <div>import &#123; Button &#125; from "@voilajsx/uikit/button"</div>
                  <div>import &#123; Card &#125; from "@voilajsx/uikit/card"</div>
                </CardContent>
              </Card>
            </div>

            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-semibold mb-2">What you get after migration:</h4>
              <ul className="space-y-2 text-sm">
                <li>✅ Instant access to 6 professional themes (12 with light/dark variants)</li>
                <li>✅ Pre-built page layouts and sections</li>
                <li>✅ Better tree-shaking with direct imports</li>
                <li>✅ Enhanced DataTable with search and sorting</li>
                <li>✅ Zero breaking changes to existing code</li>
              </ul>
            </div>
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

            <div className="text-center p-8 bg-muted rounded-xl">
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