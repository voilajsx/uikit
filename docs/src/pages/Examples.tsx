/**
 * Examples documentation for @voilajsx/uikit - Real-world application examples
 * @module @voilajsx/uikit
 * @file docs/pages/Examples.tsx
 */

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '@voilajsx/uikit/card';
import { Container } from '@voilajsx/uikit/container';
import Layout from '../components/Layout';
import { Button } from '@voilajsx/uikit/button';
import { Badge } from '@voilajsx/uikit/badge';
import { 
  Shield,
  Layout as LayoutIcon,
  Package,
  FileText,
  Eye,
  Sparkles,
  ExternalLink,
  ArrowRight,
  Zap,
  Globe,
  Settings
} from 'lucide-react';

const authExamples = [
  {
    id: 'simple',
    name: 'Simple Auth',
    description: 'Minimal centered login form',
    path: '/examples/layouts/auth/simple',
    features: ['Centered layout', 'Clean typography', 'Minimal design']
  },
  {
    id: 'card',
    name: 'Card Auth',
    description: 'Elevated card with background',
    path: '/examples/layouts/auth/card',
    features: ['Card elevation', 'Background blur', 'Modern styling']
  },
  {
    id: 'split-gradient',
    name: 'Split Gradient',
    description: 'Half-page with gradient background',
    path: '/examples/layouts/auth/split-gradient',
    features: ['Split layout', 'Gradient background', 'Responsive design']
  },
  {
    id: 'split-image',
    name: 'Split Image',
    description: 'Half-page with hero image',
    path: '/examples/layouts/auth/split-image',
    features: ['Split layout', 'Hero image', 'Professional look']
  },
  {
    id: 'card-gradient',
    name: 'Card Gradient',
    description: 'Card with gradient background',
    path: '/examples/layouts/auth/card-gradient',
    features: ['Card design', 'Gradient backdrop', 'Modern aesthetic']
  },
  {
    id: 'card-image',
    name: 'Card Image',
    description: 'Card with background image',
    path: '/examples/layouts/auth/card-image',
    features: ['Card design', 'Background image', 'Visual appeal']
  }
];

const layoutExamples = [
  {
    id: 'page',
    name: 'Page Layout',
    description: 'Clean page layout with navigation',
    path: '/examples/layouts/page',
    features: ['Header navigation', 'Responsive layout', 'Clean structure']
  },
  {
    id: 'admin',
    name: 'Admin Layout',
    description: 'Dashboard with sidebar navigation',
    path: '/examples/layouts/admin',
    features: ['Sidebar navigation', 'Admin dashboard', 'Data overview']
  },
  {
    id: 'blank',
    name: 'Blank Layout',
    description: 'Minimal layout for custom content',
    path: '/examples/layouts/blank',
    features: ['Minimal design', 'Flexible content', 'Custom layouts']
  }
];

const sectionExamples = [
  {
    id: 'container',
    name: 'Container Examples',
    description: 'Responsive containers and layouts',
    path: '/examples/sections/container',
    features: ['Responsive grids', 'Container variants', 'Layout patterns']
  },
  {
    id: 'header',
    name: 'Header Examples',
    description: 'Navigation headers and topbars',
    path: '/examples/sections/header',
    features: ['Navigation menus', 'Header variants', 'Mobile responsive']
  },
  {
    id: 'footer',
    name: 'Footer Examples',
    description: 'Page footers and bottom sections',
    path: '/examples/sections/footer',
    features: ['Footer layouts', 'Link organization', 'Responsive design']
  }
];

function Examples() {
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

    const sections = ['overview', 'auth-examples', 'layout-examples', 'section-examples', 'getting-started'];
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
      key: 'auth-examples',
      label: 'Auth Examples',
      icon: Shield,
      onClick: () => scrollToSection('auth-examples'),
      isActive: activeSection === 'auth-examples'
    },
    {
      key: 'layout-examples',
      label: 'Layout Examples',
      icon: LayoutIcon,
      onClick: () => scrollToSection('layout-examples'),
      isActive: activeSection === 'layout-examples'
    },
    {
      key: 'section-examples',
      label: 'Section Examples',
      icon: Package,
      onClick: () => scrollToSection('section-examples'),
      isActive: activeSection === 'section-examples'
    },
    {
      key: 'getting-started',
      label: 'Getting Started',
      icon: Settings,
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
              15+ Real-World Examples
            </Badge>
            <h1 className="text-5xl font-bold tracking-tight">Examples</h1>
            <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
              Complete application examples showcasing authentication flows, layout patterns, 
              and component compositions. Ready to use and customize.
            </p>
          </section>

          {/* Auth Examples */}
          <section id="auth-examples" className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Authentication Examples</h2>
              <p className="text-muted-foreground text-lg">
                Complete authentication flows with different visual styles and layouts.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {authExamples.map((example) => (
                <Card key={example.id} className="group hover:shadow-lg transition-shadow cursor-pointer border border-border hover:border-primary/30">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Shield className="h-5 w-5 text-primary" />
                          <CardTitle className="text-lg">{example.name}</CardTitle>
                        </div>
                        <p className="text-sm text-muted-foreground">{example.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {example.features.map((feature) => (
                        <Badge key={feature} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    <Button variant="outline" size="sm" className="w-full" asChild>
                      <Link to={example.path}>
                        View Example <ExternalLink className="ml-2 h-3 w-3" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Layout Examples */}
          <section id="layout-examples" className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Layout Examples</h2>
              <p className="text-muted-foreground text-lg">
                Complete page layouts for different application types and use cases.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {layoutExamples.map((example) => (
                <Card key={example.id} className="group hover:shadow-lg transition-shadow cursor-pointer border border-border hover:border-primary/30">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <LayoutIcon className="h-5 w-5 text-primary" />
                          <CardTitle className="text-lg">{example.name}</CardTitle>
                        </div>
                        <p className="text-sm text-muted-foreground">{example.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {example.features.map((feature) => (
                        <Badge key={feature} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    <Button variant="outline" size="sm" className="w-full" asChild>
                      <Link to={example.path}>
                        View Example <ExternalLink className="ml-2 h-3 w-3" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Section Examples */}
          <section id="section-examples" className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Section Examples</h2>
              <p className="text-muted-foreground text-lg">
                Individual component sections and layout building blocks.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sectionExamples.map((example) => (
                <Card key={example.id} className="group hover:shadow-lg transition-shadow cursor-pointer border border-border hover:border-primary/30">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Package className="h-5 w-5 text-primary" />
                          <CardTitle className="text-lg">{example.name}</CardTitle>
                        </div>
                        <p className="text-sm text-muted-foreground">{example.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {example.features.map((feature) => (
                        <Badge key={feature} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    <Button variant="outline" size="sm" className="w-full" asChild>
                      <Link to={example.path}>
                        View Example <ExternalLink className="ml-2 h-3 w-3" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Getting Started */}
          <section id="getting-started" className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-4">Getting Started with Examples</h2>
              <p className="text-muted-foreground text-lg">
                How to use these examples in your own projects.
              </p>
            </div>
            
            <Card>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg">How to Use Examples</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>Browse examples</strong> - Click any example to see it in action</li>
                      <li>• <strong>Inspect the code</strong> - View source and understand the patterns</li>
                      <li>• <strong>Copy and customize</strong> - Use as starting points for your projects</li>
                      <li>• <strong>Mix and match</strong> - Combine elements from different examples</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg">Example Categories</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Shield className="h-4 w-4 text-primary" />
                        <span><strong>Auth Examples</strong> - Login, register, password reset flows</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <LayoutIcon className="h-4 w-4 text-primary" />
                        <span><strong>Layout Examples</strong> - Complete page layouts and structures</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Package className="h-4 w-4 text-primary" />
                        <span><strong>Section Examples</strong> - Individual components and sections</span>
                      </div>
                    </div>
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

export default Examples;