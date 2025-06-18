/**
 * Layouts documentation for @voilajsx/uikit - Complete with PopupLayout
 * @module @voilajsx/uikit
 * @file docs/pages/Layouts.tsx
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
  Layout as LayoutIcon,
  Shield,
  FileText,
  Minus,
  Settings,
  Eye,
  Zap,
  Palette,
  Smartphone,
  Building,
  ExternalLink,
  HelpCircle,
  Rocket,
  Chrome,
  Monitor,
  TabletSmartphone
} from 'lucide-react';
import CodeBlock from '../components/CodeBlock';
import Layout from '../components/Layout';

const quickStartCode = `import { AdminLayout } from '@voilajsx/uikit/admin';

function Dashboard() {
  return (
    <AdminLayout
      title="Admin Dashboard"
      navigationItems={[
        { key: 'dashboard', label: 'Dashboard', icon: Home, path: '/dashboard' },
        { key: 'users', label: 'Users', icon: Users, path: '/users' }
      ]}
    >
      <h1>Dashboard Content</h1>
    </AdminLayout>
  );
}`;

const popupExampleCode = `import { PopupLayout } from '@voilajsx/uikit/popup';

function ChromeExtensionPopup() {
  return (
    <PopupLayout
      variant="default"
      size="md"
      logo={<ExtensionLogo />}
      headerActions={<EnableToggle />}
      footer={<LoginAndSettings />}
    >
      <SearchBox />
      <ExtensionControls />
    </PopupLayout>
  );
}`;

function Layouts() {
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

    const sections = ['overview', 'why-layouts', 'quick-example', 'available-layouts', 'choosing-guide', 'next-steps'];
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
      key: 'why-layouts',
      label: 'Why Use Layouts?',
      icon: Zap,
      onClick: () => scrollToSection('why-layouts'),
      isActive: activeSection === 'why-layouts'
    },
    {
      key: 'quick-example',
      label: 'Quick Example',
      icon: Eye,
      onClick: () => scrollToSection('quick-example'),
      isActive: activeSection === 'quick-example'
    },
    {
      key: 'available-layouts',
      label: 'Available Layouts',
      icon: LayoutIcon,
      onClick: () => scrollToSection('available-layouts'),
      isActive: activeSection === 'available-layouts'
    },
    {
      key: 'choosing-guide',
      label: 'Which to Choose?',
      icon: HelpCircle,
      onClick: () => scrollToSection('choosing-guide'),
      isActive: activeSection === 'choosing-guide'
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
        width="xl"
        padding="md"
      >
        <div className="space-y-16">
          {/* Header */}
          <section id="overview" className="space-y-6">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
              Complete Page Layouts
            </Badge>
            <h1 className="text-5xl font-bold tracking-tight">Layouts</h1>
            <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
              Ready-to-use page layouts that handle the complexity of modern web applications. 
              Build faster with pre-designed patterns for common use cases, from full websites to Chrome extensions.
            </p>
          </section>

          {/* Why Layouts */}
          <section id="why-layouts" className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Why Use Layouts?</h2>
              <p className="text-muted-foreground text-lg">
                Layouts solve common web development challenges and accelerate your development workflow across all platforms.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Zap className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Faster Development</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Skip the tedious layout setup and focus on your business logic. Get production-ready layouts in minutes.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Palette className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Consistent Design</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Professional layouts that maintain design consistency across your application and all 6 themes.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Smartphone className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Cross-Platform</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    From full websites to Chrome extensions and mobile overlays - layouts work everywhere.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Chrome className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Extension Ready</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Purpose-built layouts for Chrome extensions, popups, and compact interfaces.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Quick Example */}
          <section id="quick-example" className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-4">Quick Examples</h2>
              <p className="text-muted-foreground text-lg">
                Here's how easy it is to create complete layouts for different use cases:
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Admin Dashboard</h3>
                <CodeBlock code={quickStartCode} title="Complete Dashboard in Minutes" />
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Chrome Extension</h3>
                <CodeBlock code={popupExampleCode} title="Extension Popup with All Features" />
              </div>
            </div>
            
            <Alert>
              <CheckCircle className="h-4 w-4" />
              <AlertDescription className="pt-1">
                <strong>That's it!</strong> You get complete, production-ready layouts with navigation, 
                responsive design, theme integration, and platform-specific optimizations - all with just a few lines of code.
              </AlertDescription>
            </Alert>
          </section>

          {/* Available Layouts */}
          <section id="available-layouts" className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Five Powerful Layouts</h2>
              <p className="text-muted-foreground text-lg">
                Choose the right layout for your use case. Each layout is designed for specific scenarios and user flows.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {/* Page Layout */}
              <Card className="border-2 border-primary/20">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <LayoutIcon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">Page Layout</CardTitle>
                      <Badge variant="secondary" className="mt-1">3 Variants</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Flexible layout with compound components. Perfect for general web pages, documentation, and marketing sites.
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Perfect For:</h4>
                    <p className="text-sm text-muted-foreground">
                      Marketing sites, documentation, blogs, general web pages
                    </p>
                  </div>

                  <Button variant="outline" size="sm" asChild>
                    <Link to="/examples/layouts/page">
                      Live Demo <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Admin Layout */}
              <Card className="border-2 border-primary/20">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Settings className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">Admin Layout</CardTitle>
                      <Badge variant="secondary" className="mt-1">3 Variants</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Advanced dashboard with collapsible sidebar, multi-level navigation, and mobile responsiveness.
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Perfect For:</h4>
                    <p className="text-sm text-muted-foreground">
                      Admin dashboards, management interfaces, data applications, SaaS platforms
                    </p>
                  </div>

                  <Button variant="outline" size="sm" asChild>
                    <Link to="/examples/layouts/admin">
                      Live Demo <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Auth Layout */}
              <Card className="border-2 border-primary/20">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Shield className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">Auth Layout</CardTitle>
                      <Badge variant="secondary" className="mt-1">6 Variants</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Beautiful authentication layouts with 6 visual styles - from simple forms to split-screen designs.
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Perfect For:</h4>
                    <p className="text-sm text-muted-foreground">
                      Login & registration, password reset, account setup, security pages
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link to="/examples/layouts/auth/simple">
                        <span className="text-xs">Simple</span>
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link to="/examples/layouts/auth/card">
                        <span className="text-xs">Card</span>
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link to="/examples/layouts/auth/split-gradient">
                        <span className="text-xs">Split</span>
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Blank Layout */}
              <Card className="border-2 border-primary/20">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Minus className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">Blank Layout</CardTitle>
                      <Badge variant="secondary" className="mt-1">5 Variants</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Clean, minimal layout for simple content pages, error pages, and maintenance screens.
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Perfect For:</h4>
                    <p className="text-sm text-muted-foreground">
                      Landing pages, error pages (404, 500), maintenance screens, simple content
                    </p>
                  </div>

                  <Button variant="outline" size="sm" asChild>
                    <Link to="/examples/layouts/blank">
                      Live Demo <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Popup Layout - NEW */}
              <Card className="border-2 border-primary/20 lg:col-span-2">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <TabletSmartphone className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">Popup Layout</CardTitle>
                      <Badge variant="default" className="mt-1 bg-primary">New!</Badge>
                      <Badge variant="secondary" className="mt-1 ml-2">4 Sizes × 3 Variants</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Compact layout optimized for Chrome extensions, mobile overlays, and popup interfaces. 
                    Features 4 size options and 3 style variants for maximum flexibility.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Perfect For:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Chrome extension popups</li>
                        <li>• Mobile overlay panels</li>
                        <li>• Dropdown interfaces</li>
                        <li>• Mini widgets & notifications</li>
                      </ul>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Size Options:</h4>
                      <div className="grid grid-cols-2 gap-1 text-xs">
                        <Badge variant="outline">sm (288×320)</Badge>
                        <Badge variant="outline">md (320×384)</Badge>
                        <Badge variant="outline">lg (384×512)</Badge>
                        <Badge variant="outline">auto (responsive)</Badge>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2 flex-wrap">
                    <Button variant="outline" size="sm" asChild>
                      <Link to="/examples/layouts/popup">
                        Live Demo <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Choosing Guide */}
          <section id="choosing-guide" className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Which Layout Should You Choose?</h2>
              <p className="text-muted-foreground text-lg">
                Quick guide to help you pick the right layout for your project.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-primary/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-primary flex items-center gap-2">
                    <Monitor className="h-5 w-5" />
                    Building a Website?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-foreground">
                    Use <strong>Page Layout</strong> for flexible, content-focused pages.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>✓ Marketing sites & landing pages</li>
                    <li>✓ Documentation & help centers</li>
                    <li>✓ Blogs & content sites</li>
                    <li>✓ Company pages (about, contact)</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-primary/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-primary flex items-center gap-2">
                    <Settings className="h-5 w-5" />
                    Building an Admin Panel?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-foreground">
                    Use <strong>Admin Layout</strong> for complex dashboards with navigation.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>✓ Admin dashboards & analytics</li>
                    <li>✓ Management interfaces</li>
                    <li>✓ Data applications & CRM</li>
                    <li>✓ SaaS platform interfaces</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-primary/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-primary flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    Need Authentication?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-foreground">
                    Use <strong>Auth Layout</strong> for beautiful login and signup flows.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>✓ Login & registration forms</li>
                    <li>✓ Password reset pages</li>
                    <li>✓ Account verification</li>
                    <li>✓ Security & 2FA setup</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-primary/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-primary flex items-center gap-2">
                    <Minus className="h-5 w-5" />
                    Simple Content Pages?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-foreground">
                    Use <strong>Blank Layout</strong> for minimal, focused content.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>✓ Error pages (404, 500)</li>
                    <li>✓ Maintenance screens</li>
                    <li>✓ Coming soon pages</li>
                    <li>✓ Simple landing pages</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30 lg:col-span-2">
                <CardHeader>
                  <CardTitle className="text-primary flex items-center gap-2">
                    <Chrome className="h-5 w-5" />
                    Chrome Extensions & Compact Interfaces?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-foreground">
                    Use <strong>Popup Layout</strong> for extensions and mobile overlays.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>✓ Chrome extension popups</li>
                      <li>✓ Browser extension interfaces</li>
                      <li>✓ Mobile overlay panels</li>
                      <li>✓ Dropdown interfaces</li>
                    </ul>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>✓ Mini widgets & tools</li>
                      <li>✓ Notification panels</li>
                      <li>✓ Quick action menus</li>
                      <li>✓ Compact settings dialogs</li>
                    </ul>
                  </div>
                  <div className="pt-2">
                    <Badge variant="default" className="mr-2">4 Sizes Available</Badge>
                    <Badge variant="outline">Perfect for Extensions</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Next Steps */}
          <section id="next-steps" className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-muted-foreground text-lg">
                Choose your path and start building with UIKit layouts.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                      Install UIKit and set up your first layout in minutes.
                    </p>
                  </CardContent>
                </Link>
              </Card>

              <Card className="group hover:shadow-lg transition-shadow cursor-pointer" asChild>
                <Link to="/examples/layouts">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>Live Examples</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Explore interactive examples and see all layouts in action.
                    </p>
                  </CardContent>
                </Link>
              </Card>

             

              <Card className="group hover:shadow-lg transition-shadow cursor-pointer" asChild>
                <Link to="/themes">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>Theming</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Learn how to customize themes and create your own styles.
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

export default Layouts;