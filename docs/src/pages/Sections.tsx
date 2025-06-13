/**
 * Sections documentation for @voilajsx/uikit - Clean and focused
 * @module @voilajsx/uikit
 * @file docs/pages/Sections.tsx
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
  Navigation,
  FileText,
  Grid3X3,
  Settings,
  Eye,
  Zap,
  Palette,
  Smartphone,
  Building,
  ExternalLink,
  HelpCircle,
  Rocket,
  Layers
} from 'lucide-react';
import CodeBlock from '../components/CodeBlock';
import Layout from '../components/Layout';

const quickStartCode = `import { Header } from '@voilajsx/uikit/header';
import { Container } from '@voilajsx/uikit/container';
import { Footer } from '@voilajsx/uikit/footer';

function CustomPage() {
  return (
    <>
      <Header size="lg" sticky={true}>
        <Header.Logo>
          <img src="/logo.png" alt="Brand" className="h-8" />
        </Header.Logo>
        <Header.Nav items={navigationItems} />
      </Header>
      
      <Container 
        sidebar="left" 
        sidebarContent={sidebarNav}
        sidebarSticky={true}
        size="xl"
      >
        <h1>Custom Layout</h1>
        <p>Build exactly what you need with flexible sections.</p>
      </Container>
      
      <Footer variant="default" size="xl">
        <Footer.Basic 
          links={footerLinks}
          copyright="© 2024 Your Company"
        />
      </Footer>
    </>
  );
}`;

function Sections() {
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

    const sections = ['overview', 'why-sections', 'quick-example', 'available-sections', 'composition-guide', 'next-steps'];
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
      key: 'why-sections',
      label: 'Why Use Sections?',
      icon: Zap,
      onClick: () => scrollToSection('why-sections'),
      isActive: activeSection === 'why-sections'
    },
    {
      key: 'quick-example',
      label: 'Quick Example',
      icon: Eye,
      onClick: () => scrollToSection('quick-example'),
      isActive: activeSection === 'quick-example'
    },
    {
      key: 'available-sections',
      label: 'Available Sections',
      icon: Layers,
      onClick: () => scrollToSection('available-sections'),
      isActive: activeSection === 'available-sections'
    },
    {
      key: 'composition-guide',
      label: 'Composition Guide',
      icon: HelpCircle,
      onClick: () => scrollToSection('composition-guide'),
      isActive: activeSection === 'composition-guide'
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
          {/* Header */}
          <section id="overview" className="space-y-6">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
              components / sections
            </Badge>
            <h1 className="text-5xl font-bold tracking-tight">Section Components</h1>
            <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
              Mix and match reusable page sections to build custom layouts. Perfect for unique designs 
              that need more flexibility than pre-built templates.
            </p>
          </section>

          {/* Why Sections */}
          <section id="why-sections" className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Why Use Sections?</h2>
              <p className="text-muted-foreground text-lg">
                Page sections give you the building blocks for custom layouts while maintaining consistency and quality.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Zap className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">Maximum Flexibility</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Build exactly what you need by combining sections. No constraints of pre-built templates.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Palette className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">Consistent Quality</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Each section is professionally designed with built-in responsiveness and accessibility.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Smartphone className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">Gradual Migration</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Perfect for migrating existing layouts piece by piece without breaking changes.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Quick Example */}
          <section id="quick-example" className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-4">Quick Example</h2>
              <p className="text-muted-foreground text-lg">
                Here's how to build a custom layout by composing sections:
              </p>
            </div>
            
            <CodeBlock code={quickStartCode} title="Custom Layout with Sections" />
            
            <Alert>
              <CheckCircle className="h-4 w-4" />
              <AlertDescription className="pt-1">
                <strong>Total control!</strong> Mix Header, Container, and Footer sections with your own 
                components to create exactly the layout you need.
              </AlertDescription>
            </Alert>
          </section>

          {/* Available Sections */}
          <section id="available-sections" className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Three Essential Page Sections</h2>
              <p className="text-muted-foreground text-lg">
                Each section handles a specific part of your page layout with professional quality and flexibility.
              </p>
            </div>

            <div className="space-y-8">
              {/* Header Section */}
              <Card className="border-2 border-primary/20">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Navigation className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">Header Section</CardTitle>
                      <Badge variant="secondary" className="mt-1">3 Variants • Sticky Support</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Responsive header with logo, navigation, and actions. Supports dropdown menus, 
                    mobile hamburger menu, and sticky positioning.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Key Features:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Compound components (Header.Logo, Header.Nav)</li>
                        <li>• Responsive mobile menu</li>
                        <li>• Dropdown navigation support</li>
                        <li>• Sticky positioning option</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Variants:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• <strong>Default</strong> - Clean background with blur</li>
                        <li>• <strong>Primary</strong> - Primary color background</li>
                        <li>• <strong>Black</strong> - Dark background</li>
                      </ul>
                    </div>
                  </div>

                  <Button variant="outline" size="sm" asChild>
                    <Link to="/examples/sections/header">
                      View Header Examples <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Container Section */}
              <Card className="border-2 border-primary/20">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Grid3X3 className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">Container Section</CardTitle>
                      <Badge variant="secondary" className="mt-1">Sidebar Support • Smart Navigation</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Flexible content container with optional sidebar. Handles responsive layout, 
                    sticky sidebar, and automatic navigation rendering.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Key Features:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Left or right sidebar placement</li>
                        <li>• Automatic navigation from arrays</li>
                        <li>• Sticky sidebar with proper sizing</li>
                        <li>• Responsive behavior</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Size Options:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• <strong>sm, md, lg, xl, full</strong> - Content width</li>
                        <li>• Responsive padding and spacing</li>
                        <li>• Consistent sizing across sections</li>
                      </ul>
                    </div>
                  </div>

                  <Button variant="outline" size="sm" asChild>
                    <Link to="/examples/sections/container">
                      View Container Examples <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Footer Section */}
              <Card className="border-2 border-primary/20">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <FileText className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">Footer Section</CardTitle>
                      <Badge variant="secondary" className="mt-1">Basic & Advanced Layouts</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Professional footer with basic and advanced layouts. Supports multi-column content, 
                    social links, and newsletter signups.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Layout Options:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• <strong>Footer.Basic</strong> - Simple horizontal layout</li>
                        <li>• <strong>Footer.Advanced</strong> - Multi-column layout</li>
                        <li>• <strong>Footer.Brand</strong> - Brand section component</li>
                        <li>• <strong>Footer.Social</strong> - Social media links</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Features:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Up to 5-column responsive layout</li>
                        <li>• Newsletter signup integration</li>
                        <li>• Brand description and contact info</li>
                        <li>• Legal links and copyright</li>
                      </ul>
                    </div>
                  </div>

                  <Button variant="outline" size="sm" asChild>
                    <Link to="/examples/sections/footer">
                      View Footer Examples <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Composition Guide */}
          <section id="composition-guide" className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">When to Use Sections vs Templates?</h2>
              <p className="text-muted-foreground text-lg">
                Understanding when to compose with sections versus using pre-built templates.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-primary/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-primary">
                    Use Sections When
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-foreground">
                    You need <strong>custom layouts</strong> that don't fit standard patterns.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>✓ Building unique page designs</li>
                    <li>✓ Need fine-grained layout control</li>
                    <li>✓ Migrating existing layouts gradually</li>
                    <li>✓ Learning how layouts work</li>
                    <li>✓ Complex multi-section pages</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-primary/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-primary">
                    Use Templates When
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-foreground">
                    You need <strong>proven patterns</strong> for common use cases.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>✓ Building standard pages quickly</li>
                    <li>✓ Admin dashboards & auth flows</li>
                    <li>✓ Consistent experience across pages</li>
                    <li>✓ Less maintenance overhead</li>
                    <li>✓ Rapid prototyping</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

<Alert className="bg-primary/5 border-primary/20 dark:bg-primary/10 dark:border-primary/30">
  <Building className="h-4 w-4 text-primary dark:text-primary" />
  <AlertDescription className="text-foreground dark:text-foreground">
    <strong>Pro tip:</strong> Start with templates for speed, then extract and customize 
    with sections as your needs evolve. Templates are built using these same sections!
  </AlertDescription>
</Alert>
          </section>

          {/* Next Steps */}
          <section id="next-steps" className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Ready to Start Building?</h2>
              <p className="text-muted-foreground text-lg">
                Explore sections in detail and start composing your custom layouts.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="group hover:shadow-lg transition-shadow cursor-pointer" asChild>
                <Link to="/examples/sections/header">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>Header Examples</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Explore header variants, navigation patterns, and responsive behavior.
                    </p>
                  </CardContent>
                </Link>
              </Card>

              <Card className="group hover:shadow-lg transition-shadow cursor-pointer" asChild>
                <Link to="/examples/sections/container">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>Container Examples</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      See sidebar layouts, responsive behavior, and navigation rendering.
                    </p>
                  </CardContent>
                </Link>
              </Card>

              <Card className="group hover:shadow-lg transition-shadow cursor-pointer" asChild>
                <Link to="/examples/sections/footer">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>Footer Examples</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Browse footer layouts, from simple to complex multi-column designs.
                    </p>
                  </CardContent>
                </Link>
              </Card>

              <Card className="group hover:shadow-lg transition-shadow cursor-pointer" asChild>
                <Link to="/components/layouts">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>Layout Templates</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Compare with pre-built templates for common use cases.
                    </p>
                  </CardContent>
                </Link>
              </Card>

              <Card className="group hover:shadow-lg transition-shadow cursor-pointer" asChild>
                <Link to="/start">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>Setup Guide</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Get started with UIKit and set up your development environment.
                    </p>
                  </CardContent>
                </Link>
              </Card>

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
                      Discover all UI components to use within your section layouts.
                    </p>
                  </CardContent>
                </Link>
              </Card>
            </div>
          </section>
        </div>
      </Container>
    </Layout>
  );
}

export default Sections;