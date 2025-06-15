/**
 * UI Components documentation for @voilajsx/uikit - Clean and focused
 * @module @voilajsx/uikit
 * @file docs/pages/Components.tsx
 */

import React, { useState, useEffect } from 'react';
import { Button } from '@voilajsx/uikit/button';
import { Card, CardHeader, CardTitle, CardContent } from '@voilajsx/uikit/card';
import { Badge } from '@voilajsx/uikit/badge';
import { Alert, AlertDescription } from '@voilajsx/uikit/alert';
import { Container } from '@voilajsx/uikit/container';
import Layout from '../components/Layout';
import { 
  ArrowRight, 
  CheckCircle,
  Package,
  Zap,
  Palette,
  Smartphone,
  ExternalLink,
  HelpCircle,
  Rocket,
  Eye,
  FileText,
  Mouse,
  Layout as LayoutIcon,
  BarChart3,
  Navigation,
  FormInput
} from 'lucide-react';
import CodeBlock from '../components/CodeBlock';

const quickStartCode = `import { Button } from '@voilajsx/uikit/button';
import { Card, CardHeader, CardTitle, CardContent } from '@voilajsx/uikit/card';
import { Input } from '@voilajsx/uikit/input';
import { Badge } from '@voilajsx/uikit/badge';

function Dashboard() {
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

const componentsData = [
  {
    category: 'Form Components',
    icon: FormInput,
    description: 'Interactive form elements and inputs',
    components: [
      { name: 'Button', path: 'button', description: 'Clickable buttons with variants and sizes' },
      { name: 'Input', path: 'input', description: 'Text input fields with validation' },
      { name: 'Textarea', path: 'textarea', description: 'Multi-line text input areas' },
      { name: 'Checkbox', path: 'checkbox', description: 'Boolean selection checkboxes' },
      { name: 'Radio Group', path: 'radio-group', description: 'Single selection radio buttons' },
      { name: 'Select', path: 'select', description: 'Dropdown selection menus' },
      { name: 'Switch', path: 'switch', description: 'Toggle switch controls' },
      { name: 'Slider', path: 'slider', description: 'Range selection sliders' },
      { name: 'Form', path: 'form', description: 'Form wrapper with React Hook Form' },
      { name: 'Label', path: 'label', description: 'Accessible form labels' }
    ]
  },
  {
    category: 'Display Components',
    icon: Eye,
    description: 'Content display and information presentation',
    components: [
      { name: 'Card', path: 'card', description: 'Flexible content containers' },
      { name: 'Avatar', path: 'avatar', description: 'User profile images with fallbacks' },
      { name: 'Badge', path: 'badge', description: 'Status indicators and labels' },
      { name: 'Alert', path: 'alert', description: 'Important messages and notifications' },
      { name: 'Progress', path: 'progress', description: 'Progress indicators and loading bars' },
      { name: 'Skeleton', path: 'skeleton', description: 'Loading placeholder animations' },
      { name: 'Separator', path: 'separator', description: 'Visual content dividers' },
      { name: 'Calendar', path: 'calendar', description: 'Date selection calendars' }
    ]
  },
  {
    category: 'Navigation Components',
    icon: Navigation,
    description: 'Navigation menus and page controls',
    components: [
      { name: 'Tabs', path: 'tabs', description: 'Tabbed content interfaces' },
      { name: 'Breadcrumb', path: 'breadcrumb', description: 'Hierarchical navigation paths' },
      { name: 'Pagination', path: 'pagination', description: 'Page navigation controls' },
      { name: 'Menubar', path: 'menubar', description: 'Horizontal menu bars' },
      { name: 'Dropdown Menu', path: 'dropdown-menu', description: 'Contextual dropdown menus' },
      { name: 'Command', path: 'command', description: 'Command palette interfaces' }
    ]
  },
  {
    category: 'Overlay Components',
    icon: LayoutIcon,
    description: 'Modal dialogs and floating content',
    components: [
      { name: 'Dialog', path: 'dialog', description: 'Modal dialogs and confirmations' },
      { name: 'Sheet', path: 'sheet', description: 'Slide-out drawer panels' },
      { name: 'Popover', path: 'popover', description: 'Floating content containers' },
      { name: 'Tooltip', path: 'tooltip', description: 'Contextual hover information' },
      { name: 'Hover Card', path: 'hover-card', description: 'Rich hover interaction cards' },
      { name: 'Toast', path: 'toast', description: 'Temporary notification messages' }
    ]
  },
  {
    category: 'Data Components',
    icon: BarChart3,
    description: 'Data tables and complex interfaces',
    components: [
      { name: 'Table', path: 'table', description: 'Structured data tables' },
      { name: 'Data Table', path: 'data-table', description: 'Advanced tables with sorting/filtering' },
      { name: 'Accordion', path: 'accordion', description: 'Collapsible content sections' },
      { name: 'Collapsible', path: 'collapsible', description: 'Expandable content areas' },
      { name: 'Toggle', path: 'toggle', description: 'Pressed/unpressed toggle buttons' }
    ]
  }
];

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

    const sections = ['overview', 'why-components', 'quick-example', 'component-categories', 'api-compatibility', 'next-steps'];
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
      key: 'why-components',
      label: 'Why These Components?',
      icon: Zap,
      onClick: () => scrollToSection('why-components'),
      isActive: activeSection === 'why-components'
    },
    {
      key: 'quick-example',
      label: 'Quick Example',
      icon: Eye,
      onClick: () => scrollToSection('quick-example'),
      isActive: activeSection === 'quick-example'
    },
    {
      key: 'component-categories',
      label: 'Component Categories',
      icon: Package,
      onClick: () => scrollToSection('component-categories'),
      isActive: activeSection === 'component-categories'
    },
    {
      key: 'api-compatibility',
      label: 'API Compatibility',
      icon: HelpCircle,
      onClick: () => scrollToSection('api-compatibility'),
      isActive: activeSection === 'api-compatibility'
    },
    {
      key: 'next-steps',
      label: 'Next Steps',
      icon: Rocket,
      onClick: () => scrollToSection('next-steps'),
      isActive: activeSection === 'next-steps'
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
            35 Production-Ready Components
          </Badge>
          <h1 className="text-5xl font-bold tracking-tight">UI Components</h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Complete collection of shadcn/ui components enhanced with automatic theming, 
            perfect tree-shaking, and cross-platform compatibility.
          </p>
        </section>

        {/* Why Components */}
        <section id="why-components" className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">Why These Components?</h2>
            <p className="text-muted-foreground text-lg">
              Built on the beloved shadcn/ui foundation with key enhancements for modern development.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">100% API Compatible</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Same props, variants, and behaviors as shadcn/ui. Drop-in replacement with zero breaking changes.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Palette className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Automatic Theming</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  All components automatically adapt to your chosen theme with OKLCH color science.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Smartphone className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Perfect Tree-Shaking</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Direct imports ensure smallest possible bundle sizes. Import only what you use.
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
              Here's how easy it is to build interfaces with UIKit components:
            </p>
          </div>
          
          <CodeBlock code={quickStartCode} title="Building with UIKit Components" />
          
          <Alert className="bg-primary/5 border-primary/20">
            <CheckCircle className="h-4 w-4 text-primary" />
            <AlertDescription className="text-foreground">
              <strong>Same API, enhanced experience!</strong> Use exactly the same props and patterns 
              you know from shadcn/ui, but get automatic theming and better performance.
            </AlertDescription>
          </Alert>
        </section>
        {/* Component Categories */}
        <section id="component-categories" className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">35 Components Across 5 Categories</h2>
            <p className="text-muted-foreground text-lg">
              Every component you need for modern web applications, organized by use case.
            </p>
          </div>

          <div className="space-y-8">
            {componentsData.map((category, categoryIndex) => {
              const CategoryIcon = category.icon;
              return (
                <div key={category.category} className="space-y-4">
                  {/* Category Header */}
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <CategoryIcon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold">{category.category}</h3>
                      <p className="text-muted-foreground">{category.description}</p>
                    </div>
                    <Badge variant="secondary" className="ml-auto">
                      {category.components.length} Components
                    </Badge>
                  </div>

                  {/* Components Grid */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.components.map((component) => (
                      <Card key={component.name} className="hover:shadow-md transition-shadow group">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-base flex items-center justify-between">
                            {component.name}
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity"
                              asChild
                            >
                              <a 
                                href={`https://ui.shadcn.com/docs/components/${component.path}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                title="View shadcn/ui docs"
                              >
                                <ExternalLink className="h-3 w-3" />
                              </a>
                            </Button>
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <p className="text-sm text-muted-foreground mb-3">
                            {component.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <code className="text-xs bg-muted px-2 py-1 rounded font-mono">
                              @voilajsx/uikit/{component.path}
                            </code>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* API Compatibility */}
        <section id="api-compatibility" className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">100% shadcn/ui Compatibility</h2>
            <p className="text-muted-foreground text-lg">
              Use the same API you already know, with enhanced features under the hood.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="text-primary">
                  What Stays the Same
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-foreground">
                  Everything you expect from shadcn/ui components.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>✓ All props and variants</li>
                  <li>✓ Component behaviors</li>
                  <li>✓ Event handlers</li>
                  <li>✓ Accessibility features</li>
                  <li>✓ TypeScript definitions</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="text-primary">
                  What's Enhanced
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-foreground">
                  Improvements that make development better.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>✓ Automatic theme integration</li>
                  <li>✓ Perfect tree-shaking</li>
                  <li>✓ OKLCH color science</li>
                  <li>✓ Cross-platform support</li>
                  <li>✓ Better performance</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Alert className="bg-primary/5 border-primary/20">
            <Mouse className="h-4 w-4 text-primary" />
            <AlertDescription className="text-foreground">
              <strong>Migration tip:</strong> Click the external link icon on any component above 
              to view the complete shadcn/ui documentation. Our API is 100% identical!
            </AlertDescription>
          </Alert>
        </section>

        {/* Next Steps */}
        <section id="next-steps" className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">Start Building with Components</h2>
            <p className="text-muted-foreground text-lg">
              Choose your path to start using UIKit components in your project.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="group hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Setup Guide</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Install UIKit and start using components in minutes.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>shadcn/ui Docs</span>
                  <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Complete API documentation, examples, and usage patterns.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Live Examples</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  See components in action with real-world examples.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Layouts</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Combine ui components with layouts for faster development.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Theming</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Customize themes and see components adapt automatically.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Page Sections</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Build custom layouts using flexible page sections.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </Container>
    </Layout>
   
  );
}

export default Components;