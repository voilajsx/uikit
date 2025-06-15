/**
 * Components overview for @voilajsx/uikit - Building blocks documentation
 * @module @voilajsx/uikit
 * @file docs/pages/Components.tsx
 */

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '@voilajsx/uikit/card';
import { Container } from '@voilajsx/uikit/container';
import Layout from '../components/Layout';
import { Button } from '@voilajsx/uikit/button';
import { Badge } from '@voilajsx/uikit/badge';
import { 
  FileText,
  Eye,
  Rocket,
  ArrowRight,
  ExternalLink,
  Puzzle,
  Layers,
  Layout as LayoutIcon,
  Sparkles
} from 'lucide-react';

function Components() {
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

    const sections = ['overview', 'component-types', 'getting-started'];
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // Sidebar navigation items
  const sidebarNavigation = [
    {
      key: 'overview',
      label: 'Overview',
      icon: FileText,
      onClick: () => scrollToSection('overview'),
      isActive: activeSection === 'overview'
    },
    {
      key: 'component-types',
      label: 'Component Types',
      icon: Eye,
      onClick: () => scrollToSection('component-types'),
      isActive: activeSection === 'component-types'
    },
    {
      key: 'getting-started',
      label: 'Getting Started',
      icon: Rocket,
      onClick: () => scrollToSection('getting-started'),
      isActive: activeSection === 'getting-started'
    }
  ];

  // Sidebar content component
  const SidebarContent = () => (
    <nav className="space-y-2">
      <div className="px-3 py-2">
        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
          On This Page
        </h3>
      </div>
      {sidebarNavigation.map((item) => {
        const Icon = item.icon;
        return (
          <button
            key={item.key}
            onClick={item.onClick}
            className={`w-full flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-colors text-left ${
              item.isActive
                ? 'bg-primary/10 text-primary font-medium'
                : 'text-muted-foreground hover:text-foreground hover:bg-muted'
            }`}
          >
            <Icon className="h-4 w-4 flex-shrink-0" />
            <span className="truncate">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );

  return (
    <Layout>
      <Container
        sidebar="right"
        sidebarContent={<SidebarContent />}
        sidebarSticky={true}
        width="xl"
        padding="md"
      >
        <div className="space-y-16">
          {/* Header */}
          <section id="overview" className="space-y-6">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
              <Sparkles className="h-3 w-3 mr-1" />
              UIKit Building Blocks
            </Badge>
            <h1 className="text-5xl font-bold tracking-tight">Components</h1>
            <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
              Three types of components that work together to build modern applications. 
              From individual UI elements to complete page layouts.
            </p>
          </section>

          {/* Component Types */}
          <section id="component-types" className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Three Component Types</h2>
              <p className="text-muted-foreground text-lg">
                Progressive building blocks from granular to complete page solutions.
              </p>
            </div>
            
            <div className="space-y-6">
              {/* UI Components */}
              <Card className="border-2 border-primary/20">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Puzzle className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <CardTitle className="text-2xl">UI Components</CardTitle>
                        <Badge variant="secondary">35 Components</Badge>
                      </div>
                      <p className="text-muted-foreground">Individual interface elements and controls</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    shadcn/ui compatible components like Button, Card, Input, and Form elements. 
                    Enhanced with automatic theming and perfect tree-shaking.
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">Button</Badge>
                    <Badge variant="outline" className="text-xs">Card</Badge>
                    <Badge variant="outline" className="text-xs">Input</Badge>
                    <Badge variant="outline" className="text-xs">Form</Badge>
                    <Badge variant="outline" className="text-xs">Dialog</Badge>
                    <Badge variant="outline" className="text-xs">Table</Badge>
                    <span className="text-xs text-muted-foreground">+29 more</span>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link to="/components/ui">
                        View UI Components <ArrowRight className="ml-2 h-3 w-3" />
                      </Link>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <a href="https://ui.shadcn.com/docs/components" target="_blank" rel="noopener noreferrer">
                        shadcn/ui Docs <ExternalLink className="ml-2 h-3 w-3" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Sections */}
              <Card className="border-2 border-primary/20">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Layers className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <CardTitle className="text-2xl">Sections</CardTitle>
                        <Badge variant="secondary">3 Building Blocks</Badge>
                      </div>
                      <p className="text-muted-foreground">Page building blocks for custom layouts</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Mix and match Header, Container, and Footer sections to build exactly the layout you need. 
                    Perfect for unique designs that require flexibility.
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">Header</Badge>
                    <Badge variant="outline" className="text-xs">Container</Badge>
                    <Badge variant="outline" className="text-xs">Footer</Badge>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link to="/components/sections">
                        View Sections <ArrowRight className="ml-2 h-3 w-3" />
                      </Link>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <Link to="/examples/sections/container">
                        Live Examples <ExternalLink className="ml-2 h-3 w-3" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Layouts */}
              <Card className="border-2 border-primary/20">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <LayoutIcon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <CardTitle className="text-2xl">Layouts</CardTitle>
                        <Badge variant="secondary">4 Layouts</Badge>
                      </div>
                      <p className="text-muted-foreground">Complete page Layouts and wrappers</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Ready-to-use page layouts for common patterns. Just add your content and get 
                    professional layouts with navigation, responsive design, and theming.
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">Page Template</Badge>
                    <Badge variant="outline" className="text-xs">Admin Template</Badge>
                    <Badge variant="outline" className="text-xs">Auth Template</Badge>
                    <Badge variant="outline" className="text-xs">Blank Template</Badge>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link to="/components/layouts">
                        View Layouts <ArrowRight className="ml-2 h-3 w-3" />
                      </Link>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <Link to="/examples/layouts/admin">
                        Live Examples <ExternalLink className="ml-2 h-3 w-3" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Getting Started */}
          <section id="getting-started" className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-4">Choose Your Starting Point</h2>
              <p className="text-muted-foreground text-lg">
                Pick the right level of abstraction for your project needs.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="group hover:shadow-lg transition-shadow cursor-pointer" asChild>
                <Link to="/components/layouts">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>Start with Layouts</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      Fastest way to build. Complete page Layouts ready to use.
                    </p>
                    <div className="mt-3">
                      <Badge variant="secondary" className="text-xs">Recommended</Badge>
                    </div>
                  </CardContent>
                </Link>
              </Card>

              <Card className="group hover:shadow-lg transition-shadow cursor-pointer" asChild>
                <Link to="/components/sections">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>Build with Sections</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      Custom layouts with building blocks. Maximum flexibility.
                    </p>
                    <div className="mt-3">
                      <Badge variant="outline" className="text-xs">Advanced</Badge>
                    </div>
                  </CardContent>
                </Link>
              </Card>

              <Card className="group hover:shadow-lg transition-shadow cursor-pointer" asChild>
                <Link to="/components/ui">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>Use UI Components</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      Individual components for existing layouts. Total control.
                    </p>
                    <div className="mt-3">
                      <Badge variant="outline" className="text-xs">Granular</Badge>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            </div>

            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-lg">Progressive Approach</h4>
                    <p className="text-sm text-muted-foreground">
                      Start with Layouts for speed, customize with Sections as needed, 
                      then use individual UI Components for fine-tuned control.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-lg">All Work Together</h4>
                    <p className="text-sm text-muted-foreground">
                      Mix layouts, sections, and UI components in the same project. 
                      They're designed to complement each other perfectly.
                    </p>
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

export default Components;