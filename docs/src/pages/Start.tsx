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
  Layers,
  AlertTriangle,
  Eye,
  ArrowDown
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

const colorSystemExample = `/**
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

const navigationStructureExample = `/**
 * Unified navigation structure used across all components
 * @module @voilajsx/uikit
 * @file examples/Navigation.tsx
 */

// ✅ This SAME structure works for all navigation components
const navigationItems = [
  {
    key: 'dashboard',     // REQUIRED: Unique identifier
    label: 'Dashboard',   // REQUIRED: Display text
    icon: Home,          // Optional: Lucide icon
    path: '/admin',      // Optional: URL path
    isActive: true,      // Optional: Active state
    section: 'main',     // Optional: For AdminTemplate grouping
    items: [             // Optional: Nested navigation
      { key: 'overview', label: 'Overview', path: '/admin/overview' },
      { key: 'analytics', label: 'Analytics', path: '/admin/analytics' }
    ]
  },
  {
    key: 'users',
    label: 'Users',
    icon: Users,
    badge: '24',         // Optional: Notification badge
    path: '/admin/users'
  }
];

// ✅ Works with AdminTemplate
<AdminTemplate navigationItems={navigationItems} />

// ✅ Works with Container sidebar
<Container sidebarContent={navigationItems} />

// ✅ Works with HeaderNav
<HeaderNav items={navigationItems} />`;

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

    const sections = ['overview', 'hierarchy', 'concepts', 'installation', 'color-system', 'navigation-structure', 'template-selection', 'ui-components', 'sections', 'layouts', 'theming', 'migration', 'quick-reference', 'next-steps'];
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
      key: 'hierarchy',
      label: 'Component Hierarchy',
      icon: Eye,
      onClick: () => scrollToSection('hierarchy'),
      isActive: activeSection === 'hierarchy'
    },
    {
      key: 'color-system',
      label: 'Color System',
      icon: Palette,
      onClick: () => scrollToSection('color-system'),
      isActive: activeSection === 'color-system'
    },
    {
      key: 'navigation-structure',
      label: 'Navigation Structure',
      icon: Grid3X3,
      onClick: () => scrollToSection('navigation-structure'),
      isActive: activeSection === 'navigation-structure'
    },
    {
      key: 'template-selection',
      label: 'Template Selection',
      icon: Building,
      onClick: () => scrollToSection('template-selection'),
      isActive: activeSection === 'template-selection'
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
      key: 'quick-reference',
      label: 'Quick Reference',
      icon: Zap,
      onClick: () => scrollToSection('quick-reference'),
      isActive: activeSection === 'quick-reference'
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

          

          {/* Core Concepts - Improved */}
          <section id="concepts" className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Core Concepts</h2>
              <p className="text-muted-foreground text-lg">
                @voilajsx/uikit is built on three simple concepts that work together seamlessly.
              </p>
            </div>
            
            <div className="space-y-6">
              
              {/* UI Components Row */}
              <Card className="border-2 border-primary/20 bg-primary/5">
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-6 items-center">
                    {/* Left Column - Icon and Title */}
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center flex-shrink-0">
                        <Package className="h-8 w-8 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground">UI Components</h3>
                        <Badge variant="secondary" className="mt-2">Building Blocks</Badge>
                      </div>
                    </div>
                    
                    {/* Right Column - Description and Details */}
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

              {/* Sections Row */}
              <Card className="border-2 border-primary/20 bg-primary/5">
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-6 items-center">
                    {/* Left Column - Icon and Title */}
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center flex-shrink-0">
                        <Grid3X3 className="h-8 w-8 text-secondary-foreground" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground">Sections</h3>
                        <Badge variant="secondary" className="mt-2">Page Parts</Badge>
                      </div>
                    </div>
                    
                    {/* Right Column - Description and Details */}
                    <div className="space-y-4">
                      <p className="text-muted-foreground">
                        Reusable page sections that you can mix and match to create custom layouts.
                      </p>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <div className="font-medium mb-2">Available Sections:</div>
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

              {/* Layouts Row */}
              <Card className="border-2 border-primary/20 bg-primary/5">
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-6 items-center">
                    {/* Left Column - Icon and Title */}
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center flex-shrink-0">
                        <Building className="h-8 w-8 text-accent-foreground" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground">Layouts</h3>
                        <Badge variant="secondary" className="mt-2">Complete Pages</Badge>
                      </div>
                    </div>
                    
                    {/* Right Column - Description and Details */}
                    <div className="space-y-4">
                      <p className="text-muted-foreground">
                        Complete page structures ready to use with your content for rapid development.
                      </p>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <div className="font-medium mb-2">Ready Layouts:</div>
                          <div className="space-y-1 text-muted-foreground">
                            <div>• Page - Main app</div>
                            <div>• Admin - Dashboard</div>
                            <div>• Auth - Login pages</div>
                            <div>• Blank - Simple pages</div>
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

            <Alert className="bg-muted/50 border-border">
              <Zap className="h-4 w-4 text-foreground" />
              <AlertDescription className="text-muted-foreground">
                <strong className="text-foreground">Think of it this way:</strong> UI Components are your building blocks, 
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

          {/* Component Hierarchy Visual - Simplified */}
          <section id="hierarchy" className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">How to Build with UIKit</h2>
              <p className="text-muted-foreground text-lg">
                Two simple paths: Use ready-made layouts or build custom layouts with sections.
              </p>
            </div>
            
            {/* Two Development Paths */}
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
                    <div className="flex items-center gap-3 p-3 bg-background rounded-lg border border-border">
                      <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-sm">1</div>
                      <div>
                        <div className="font-medium">Choose a Layout</div>
                        <div className="text-sm text-muted-foreground">Page, Admin, Auth, or Blank</div>
                      </div>
                    </div>
                    
                    <div className="flex justify-center">
                      <ArrowDown className="h-5 w-5 text-muted-foreground" />
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 bg-background rounded-lg border border-border">
                      <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center text-secondary-foreground font-bold text-sm">2</div>
                      <div>
                        <div className="font-medium">Add UI Components</div>
                        <div className="text-sm text-muted-foreground">Button, Card, Input, Form, etc.</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-border">
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
                    <div className="flex items-center gap-3 p-3 bg-background rounded-lg border border-border">
                      <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-accent-foreground font-bold text-sm">1</div>
                      <div>
                        <div className="font-medium">Combine Sections</div>
                        <div className="text-sm text-muted-foreground">Header + Container + Footer</div>
                      </div>
                    </div>
                    
                    <div className="flex justify-center">
                      <ArrowDown className="h-5 w-5 text-muted-foreground" />
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 bg-background rounded-lg border border-border">
                      <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center text-secondary-foreground font-bold text-sm">2</div>
                      <div>
                        <div className="font-medium">Add UI Components</div>
                        <div className="text-sm text-muted-foreground">Button, Card, Input, Form, etc.</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-border">
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

            {/* UI Components - The Building Blocks */}
            <div className="text-center p-6 bg-muted/50 rounded-xl border border-border">
              <div className="w-12 h-12 bg-secondary rounded-xl mx-auto mb-4 flex items-center justify-center">
                <Package className="h-6 w-6 text-secondary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">UI Components</h3>
              <p className="text-muted-foreground mb-4">
                The building blocks you use in both paths - Button, Card, Input, Form, Table, Dialog, and 35+ more
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge variant="outline">Same API as shadcn/ui</Badge>
                <Badge variant="outline">Auto-themed</Badge>
                <Badge variant="outline">Tree-shakable</Badge>
              </div>
            </div>

            <Alert className="bg-muted/50 border-border">
              <Eye className="h-4 w-4 text-foreground" />
              <AlertDescription className="text-muted-foreground">
                <strong className="text-foreground">Simple decision:</strong> Need a standard page quickly? Use Path 1 (Layouts). 
                Need a custom design? Use Path 2 (Sections). Both paths use the same UI Components as building blocks.
              </AlertDescription>
            </Alert>
          </section>

          {/* Color System - CRITICAL SECTION */}
          <section id="color-system" className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Color System (Critical)</h2>
              <p className="text-muted-foreground text-lg">
                Understanding the color system is essential for theme compatibility. <strong>This is the #1 mistake developers make.</strong>
              </p>
            </div>

            <Alert className="border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950">
              <AlertTriangle className="h-4 w-4 text-red-600" />
              <AlertDescription className="text-red-800 dark:text-red-200">
                <strong>Never use hardcoded colors like `bg-white`, `text-black`, or `bg-gray-100`</strong> - 
                they break themes. Always use semantic color variables.
              </AlertDescription>
            </Alert>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950">
                <CardHeader>
                  <CardTitle className="text-green-800 dark:text-green-200 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5" />
                    ✅ CORRECT - Semantic Colors
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-green-700 dark:text-green-300 space-y-2 text-sm font-mono">
                    <div>bg-background</div>
                    <div>text-foreground</div>
                    <div>bg-card text-card-foreground</div>
                    <div>border-border</div>
                    <div>text-muted-foreground</div>
                    <div>bg-primary text-primary-foreground</div>
                  </div>
                  <p className="text-green-700 dark:text-green-300 text-sm">
                    These automatically adapt to any theme
                  </p>
                </CardContent>
              </Card>

              <Card className="border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950">
                <CardHeader>
                  <CardTitle className="text-red-800 dark:text-red-200 flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5" />
                    ❌ WRONG - Hardcoded Colors
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-red-700 dark:text-red-300 space-y-2 text-sm font-mono line-through">
                    <div>bg-white text-black</div>
                    <div>bg-gray-100 text-gray-900</div>
                    <div>bg-blue-500 text-white</div>
                    <div>border-gray-200</div>
                    <div>text-gray-600</div>
                    <div>bg-slate-50</div>
                  </div>
                  <p className="text-red-700 dark:text-red-300 text-sm">
                    These break when themes change
                  </p>
                </CardContent>
              </Card>
            </div>

            <CodeBlock code={colorSystemExample} title="Color System Example" />

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 dark:bg-amber-950 dark:border-amber-800">
              <h4 className="font-semibold text-amber-800 dark:text-amber-200 mb-3">Essential Color Variables</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <div className="font-medium text-amber-800 dark:text-amber-200">Backgrounds:</div>
                  <div className="text-amber-700 dark:text-amber-300 font-mono space-y-1">
                    <div>bg-background</div>
                    <div>bg-card</div>
                    <div>bg-muted</div>
                    <div>bg-primary</div>
                    <div>bg-secondary</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="font-medium text-amber-800 dark:text-amber-200">Text & Borders:</div>
                  <div className="text-amber-700 dark:text-amber-300 font-mono space-y-1">
                    <div>text-foreground</div>
                    <div>text-muted-foreground</div>
                    <div>border-border</div>
                    <div>border-input</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Navigation Structure */}
          <section id="navigation-structure" className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">Navigation Structure</h2>
              <p className="text-muted-foreground text-lg">
                All navigation components use the same unified structure. Learn it once, use it everywhere.
              </p>
            </div>

            <Alert className="bg-green-50 border-green-200 dark:bg-green-950 dark:border-green-800">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <AlertDescription className="text-green-800 dark:text-green-200">
                <strong>Unified Navigation:</strong> The same navigation structure works for AdminTemplate, 
                Container sidebar, HeaderNav, and all other navigation components.
              </AlertDescription>
            </Alert>

            <CodeBlock code={navigationStructureExample} title="Unified Navigation Structure" />

            <div className="grid md:grid-cols-3 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Required Props</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <div><code className="bg-muted px-2 py-1 rounded">key</code> - Unique identifier</div>
                  <div><code className="bg-muted px-2 py-1 rounded">label</code> - Display text</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Optional Props</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <div><code className="bg-muted px-2 py-1 rounded">icon</code> - Lucide icon</div>
                  <div><code className="bg-muted px-2 py-1 rounded">path</code> - URL path</div>
                  <div><code className="bg-muted px-2 py-1 rounded">badge</code> - Notification</div>
                  <div><code className="bg-muted px-2 py-1 rounded">isActive</code> - Active state</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Advanced Props</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <div><code className="bg-muted px-2 py-1 rounded">items</code> - Nested navigation</div>
                  <div><code className="bg-muted px-2 py-1 rounded">section</code> - AdminTemplate groups</div>
                  <div><code className="bg-muted px-2 py-1 rounded">onClick</code> - Click handler</div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Template Selection Decision Tree */}
          <section id="template-selection" className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">Template Selection Guide</h2>
              <p className="text-muted-foreground text-lg">
                Choose the right template for your use case with this simple decision tree.
              </p>
            </div>

            <div className="overflow-x-auto">
              <div className="min-w-full border border-border rounded-lg">
                <div className="bg-muted/50 px-4 py-3 border-b border-border">
                  <div className="grid grid-cols-3 gap-4 font-medium text-sm">
                    <div>What do you need?</div>
                    <div>Use Template</div>
                    <div>When to choose</div>
                  </div>
                </div>
                <div className="divide-y divide-border">
                  <div className="px-4 py-3 grid grid-cols-3 gap-4 text-sm">
                    <div>Full website with header/footer navigation</div>
                    <div><Badge variant="secondary">Page</Badge></div>
                    <div className="text-muted-foreground">Marketing sites, documentation, company websites</div>
                  </div>
                  <div className="px-4 py-3 grid grid-cols-3 gap-4 text-sm bg-muted/20">
                    <div>Admin dashboard with persistent sidebar</div>
                    <div><Badge variant="secondary">AdminTemplate</Badge></div>
                    <div className="text-muted-foreground">CRM systems, analytics dashboards, admin panels</div>
                  </div>
                  <div className="px-4 py-3 grid grid-cols-3 gap-4 text-sm">
                    <div>Authentication flows</div>
                    <div><Badge variant="secondary">AuthTemplate</Badge></div>
                    <div className="text-muted-foreground">Login, signup, password reset, onboarding</div>
                  </div>
                  <div className="px-4 py-3 grid grid-cols-3 gap-4 text-sm bg-muted/20">
                    <div>Simple content or error pages</div>
                    <div><Badge variant="secondary">BlankTemplate</Badge></div>
                    <div className="text-muted-foreground">404 pages, maintenance, about us, terms</div>
                  </div>
                  <div className="px-4 py-3 grid grid-cols-3 gap-4 text-sm">
                    <div>Content section with optional sidebar</div>
                    <div><Badge variant="secondary">Container</Badge></div>
                    <div className="text-muted-foreground">Documentation sections, settings pages, content areas</div>
                  </div>
                </div>
              </div>
            </div>

            <Alert className="bg-blue-50 border-blue-200 dark:bg-blue-950 dark:border-blue-800">
              <Eye className="h-4 w-4 text-blue-600" />
              <AlertDescription className="text-blue-800 dark:text-blue-200">
                <strong>Pro tip:</strong> Start with a Layout template for complete pages, 
                or use Sections to build custom layouts piece by piece.
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
            
            <CodeBlock code={`/**
 * UI Components showcase with proper theming
 * @module @voilajsx/uikit
 * @file examples/UIComponents.tsx
 */

import { Button } from '@voilajsx/uikit/button';
import { Card, CardHeader, CardTitle, CardContent } from '@voilajsx/uikit/card';
import { Input } from '@voilajsx/uikit/input';
import { Badge } from '@voilajsx/uikit/badge';

function ComponentsExample() {
  return (
    <Card className="max-w-md bg-card text-card-foreground border-border">
      <CardHeader className="border-b border-border">
        <CardTitle className="flex items-center gap-2 text-foreground">
          Dashboard
          <Badge variant="secondary">New</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 pt-6">
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
}`} title="Using UI Components" />

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>35+ Components Available</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Button, Card, Input, Form, Table, Dialog, DataTable, and many more.
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
                    Same props, variants, and behaviors as shadcn/ui. Zero breaking changes.
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
            
            <CodeBlock code={`/**
 * Building with Sections for custom layouts
 * @module @voilajsx/uikit
 * @file examples/CustomLayout.tsx
 */

import { Header, HeaderLogo, HeaderNav } from '@voilajsx/uikit/header';
import { Container } from '@voilajsx/uikit/container';
import { Footer, FooterBasic } from '@voilajsx/uikit/footer';
import { Button } from '@voilajsx/uikit/button';
import { Home, Users, Settings } from 'lucide-react';

function CustomPage() {
  const headerNavigation = [
    { key: 'home', label: 'Home', icon: Home, isActive: true },
    { key: 'about', label: 'About' },
    { key: 'contact', label: 'Contact' }
  ];

  const sidebarNavigation = [
    { key: 'dashboard', label: 'Dashboard', icon: Home, isActive: true },
    { key: 'users', label: 'Users', icon: Users, badge: '24' },
    { key: 'settings', label: 'Settings', icon: Settings }
  ];

  return (
    <>
      <Header variant="default" sticky={true}>
        <HeaderLogo>
          <span className="text-xl font-bold">My App</span>
        </HeaderLogo>
        <HeaderNav items={headerNavigation} />
      </Header>
      
      <Container 
        sidebar="left" 
        sidebarContent={sidebarNavigation}
        sidebarSticky={true}
        size="xl"
      >
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-foreground">Main Content</h1>
          <p className="text-muted-foreground">Your page content goes here</p>
        </div>
      </Container>
      
      <Footer variant="default">
        <FooterBasic
          copyright="© 2024 Your Company"
          links={[
            { key: 'privacy', label: 'Privacy', onClick: () => {} },
            { key: 'terms', label: 'Terms', onClick: () => {} }
          ]}
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
                  <p className="text-sm text-muted-foreground">Navigation and branding with sticky support</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <Package className="h-6 w-6 text-green-600" />
                  </div>
                  <h4 className="font-semibold mb-2">Container</h4>
                  <p className="text-sm text-muted-foreground">Content with optional sidebar and navigation</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <Building className="h-6 w-6 text-purple-600" />
                  </div>
                  <h4 className="font-semibold mb-2">Footer</h4>
                  <p className="text-sm text-muted-foreground">Site footer with basic and advanced layouts</p>
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
            
            <CodeBlock code={`/**
 * Using complete Layout templates
 * @module @voilajsx/uikit
 * @file examples/Layouts.tsx
 */

import { Page, PageHeader, PageContent, PageFooter } from '@voilajsx/uikit/page';
import { AdminTemplate } from '@voilajsx/uikit/admin';
import { AuthTemplate } from '@voilajsx/uikit/auth';
import { BlankTemplate } from '@voilajsx/uikit/blank';
import { Home, Users } from 'lucide-react';

// Complete page layout
function MainApp() {
  return (
    <Page variant="default" size="xl">
      <PageHeader variant="default" sticky={true}>
        <h1 className="text-xl font-bold">My Application</h1>
      </PageHeader>
      <PageContent>
        <h2 className="text-2xl font-bold text-foreground">Welcome to your app</h2>
        <p className="text-muted-foreground">Start building something amazing</p>
      </PageContent>
      <PageFooter variant="default">
        <p className="text-muted-foreground">© 2024 Company</p>
      </PageFooter>
    </Page>
  );
}

// Admin dashboard layout
function Dashboard() {
  const navigation = [
    { key: 'dashboard', label: 'Dashboard', icon: Home, isActive: true },
    { key: 'users', label: 'Users', icon: Users, badge: '12' }
  ];

  return (
    <AdminTemplate 
      variant="default"
      title="Admin Dashboard"
      navigationItems={navigation}
      headerActions={<Button variant="outline">Profile</Button>}
    >
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back!</p>
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
        <input className="w-full p-3 border border-input rounded-md bg-background text-foreground" placeholder="Email" />
        <input className="w-full p-3 border border-input rounded-md bg-background text-foreground" placeholder="Password" type="password" />
        <Button className="w-full">Sign In</Button>
      </div>
    </AuthTemplate>
  );
}

// Simple content page
function AboutPage() {
  return (
    <BlankTemplate variant="default">
      <div className="max-w-4xl mx-auto p-8 space-y-6">
        <h1 className="text-4xl font-bold text-foreground">About Us</h1>
        <p className="text-lg text-muted-foreground">Simple content page with minimal styling</p>
      </div>
    </BlankTemplate>
  );
}`} title="Using Layout Templates" />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { name: 'Page', desc: 'Main app layout with header/content/footer', color: 'bg-blue-500' },
                { name: 'Admin', desc: 'Dashboard with sidebar navigation', color: 'bg-green-500' },
                { name: 'Auth', desc: 'Login and signup pages with 6 variants', color: 'bg-purple-500' },
                { name: 'Blank', desc: 'Minimal content and error pages', color: 'bg-gray-500' },
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
                Switch between 6 professional themes instantly, with light/dark variants for each.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: 'Default', color: 'bg-blue-500', desc: 'Ocean blue professional colors' },
                { name: 'Metro', color: 'bg-slate-500', desc: 'Clean transit-inspired gray-blue' },
                { name: 'Studio', color: 'bg-amber-500', desc: 'Designer grays with amber accent' },
                { name: 'Ruby', color: 'bg-red-500', desc: 'Sophisticated red with gold accents' },
                { name: 'Neon', color: 'bg-fuchsia-500', desc: 'Electric cyberpunk magenta-cyan' },
                { name: 'Aurora', color: 'bg-purple-500', desc: 'Northern lights purple-green gradients' },
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

            <CodeBlock code={`/**
 * Theme switching and customization
 * @module @voilajsx/uikit
 * @file examples/ThemeSwitcher.tsx
 */

import { useTheme } from '@voilajsx/uikit/theme-provider';
import { Button } from '@voilajsx/uikit/button';
import { Card, CardContent } from '@voilajsx/uikit/card';

function ThemeSwitcher() {
  const { theme, variant, setTheme, toggleVariant } = useTheme();

  return (
    <Card className="p-6 bg-card text-card-foreground border-border">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-foreground">Theme Controls</h3>
        
        {/* Switch between built-in themes */}
        <div className="flex flex-wrap gap-2">
          <Button 
            variant={theme === 'default' ? 'default' : 'outline'} 
            size="sm"
            onClick={() => setTheme('default')}
          >
            Default
          </Button>
          <Button 
            variant={theme === 'ruby' ? 'default' : 'outline'} 
            size="sm"
            onClick={() => setTheme('ruby')}
          >
            Ruby
          </Button>
          <Button 
            variant={theme === 'neon' ? 'default' : 'outline'} 
            size="sm"
            onClick={() => setTheme('neon')}
          >
            Neon
          </Button>
          <Button 
            variant={theme === 'aurora' ? 'default' : 'outline'} 
            size="sm"
            onClick={() => setTheme('aurora')}
          >
            Aurora
          </Button>
        </div>
        
        {/* Toggle light/dark mode */}
        <Button variant="outline" onClick={toggleVariant}>
          {variant === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </Button>
        
        <p className="text-sm text-muted-foreground">
          Current: {theme} ({variant})
        </p>
      </div>
    </Card>
  );
}`} title="Theme Switching Example" />
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
              <AlertDescription>
                <strong>100% backward compatible</strong> - All props, variants, and behaviors stay exactly the same.
              </AlertDescription>
            </Alert>
            
            <CodeBlock code={`/**
 * Migration from shadcn/ui is just changing imports
 * @module @voilajsx/uikit
 * @file examples/Migration.tsx
 */

// Before (shadcn/ui)
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

// After (@voilajsx/uikit) - Just change imports!
import { Button } from "@voilajsx/uikit/button"
import { Card, CardHeader, CardTitle, CardContent } from "@voilajsx/uikit/card"

// Everything else stays exactly the same
// Same props, same variants, same behavior
function MyComponent() {
  return (
    <Card className="max-w-md bg-card text-card-foreground border-border">
      <CardHeader>
        <CardTitle className="text-foreground">Migrated Component</CardTitle>
      </CardHeader>
      <CardContent>
        <Button variant="default" size="lg">
          Same API, Enhanced Theming
        </Button>
      </CardContent>
    </Card>
  );
}`} title="Migration Example" />
            
            <Card className="bg-green-50 border-green-200 dark:bg-green-950 dark:border-green-800">
              <CardHeader>
                <CardTitle className="text-green-800 dark:text-green-200">
                  What you get after migration:
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-green-700 dark:text-green-300">
                  <li>✅ Instant access to 6 professional themes (12 with light/dark variants)</li>
                  <li>✅ Pre-built page layouts and sections</li>
                  <li>✅ Better tree-shaking with direct imports</li>
                  <li>✅ Enhanced DataTable with search and sorting</li>
                  <li>✅ Cross-platform compatibility</li>
                  <li>✅ Zero breaking changes to existing code</li>
                </ul>
              </CardContent>
            </Card>
          </section>

          {/* Quick Reference Cheat Sheet */}
          <section id="quick-reference" className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">Quick Reference</h2>
              <p className="text-muted-foreground text-lg">
                Essential patterns and imports for everyday development.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Package className="h-5 w-5" />
                    Required Setup
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <div className="text-sm font-medium">1. Install:</div>
                    <code className="block bg-muted p-2 rounded text-sm">npm install @voilajsx/uikit</code>
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm font-medium">2. Wrap app:</div>
                    <code className="block bg-muted p-2 rounded text-sm">&lt;ThemeProvider&gt;&lt;App /&gt;&lt;/ThemeProvider&gt;</code>
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm font-medium">3. Import styles:</div>
                    <code className="block bg-muted p-2 rounded text-sm">import '@voilajsx/uikit/styles'</code>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className="h-5 w-5" />
                    Import Patterns
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <div className="text-sm font-medium">UI Components:</div>
                    <code className="block bg-muted p-2 rounded text-sm">import &#123; Button &#125; from '@voilajsx/uikit/button'</code>
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm font-medium">Sections:</div>
                    <code className="block bg-muted p-2 rounded text-sm">import &#123; Header &#125; from '@voilajsx/uikit/header'</code>
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm font-medium">Layouts:</div>
                    <code className="block bg-muted p-2 rounded text-sm">import &#123; Page &#125; from '@voilajsx/uikit/page'</code>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Palette className="h-5 w-5" />
                    Color System
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <code className="bg-muted px-2 py-1 rounded">bg-background</code>
                    <code className="bg-muted px-2 py-1 rounded">text-foreground</code>
                    <code className="bg-muted px-2 py-1 rounded">bg-card</code>
                    <code className="bg-muted px-2 py-1 rounded">text-muted-foreground</code>
                    <code className="bg-muted px-2 py-1 rounded">border-border</code>
                    <code className="bg-muted px-2 py-1 rounded">bg-primary</code>
                  </div>
                  <Alert className="mt-3">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertDescription className="text-xs">
                      Never use hardcoded colors like bg-white or text-gray-600
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Grid3X3 className="h-5 w-5" />
                    Navigation Structure
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="bg-muted p-3 rounded text-sm font-mono">
                    <div>&#123;</div>
                    <div>&nbsp;&nbsp;key: 'unique-id',</div>
                    <div>&nbsp;&nbsp;label: 'Display Name',</div>
                    <div>&nbsp;&nbsp;icon: LucideIcon,</div>
                    <div>&nbsp;&nbsp;isActive: boolean,</div>
                    <div>&nbsp;&nbsp;items: [nested...]</div>
                    <div>&#125;</div>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Works with AdminTemplate, Container, HeaderNav
                  </p>
                </CardContent>
              </Card>
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