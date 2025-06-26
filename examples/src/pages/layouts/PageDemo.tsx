/**
 * Enhanced Page Layout demo with comprehensive features and best practices
 * @module @voilajsx/uikit
 * @file examples/src/pages/layouts/PageDemo.tsx
 */

import { PageLayout, PageHeader, PageContent, PageFooter } from '../../../../src/components/layouts/page';
import { Header, HeaderLogo, HeaderNav } from '../../../../src/components/sections/header';
import { Footer } from '../../../../src/components/sections/footer';
import { Button } from '../../../../src/components/ui/button';
import { Badge } from '../../../../src/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '../../../../src/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../../src/components/ui/tabs';
import { 
  Home, 
  ShoppingCart, 
  User, 
  Settings, 
  Bell, 
  Search,
  Package,
  BarChart3,
  FileText,
  HelpCircle,
  Globe,
  Smartphone,
  Monitor,
  Palette,
  Zap,
  Star,
  Heart,
  Share2,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github
} from 'lucide-react';
import { useState, useEffect } from 'react';

// Type definition for better TypeScript support
interface NavigationItem {
  key: string;
  label: string;
  href?: string;
  icon?: React.ComponentType<{ className?: string }>;
  items?: NavigationItem[];
  badge?: string;
  isActive?: boolean;
  onClick?: () => void;
}

function PageDemo() {
  const [currentPath, setCurrentPath] = useState('/');
  const [currentTone, setCurrentTone] = useState<'clean' | 'subtle' | 'brand' | 'contrast'>('clean');
  const [currentSize, setCurrentSize] = useState<'sm' | 'md' | 'lg' | 'xl' | 'full'>('xl');
  const [currentPosition, setCurrentPosition] = useState<'sticky' | 'fixed' | 'relative'>('sticky');
  const [currentTheme, setCurrentTheme] = useState('default');
  const [currentScheme, setCurrentScheme] = useState<'default' | 'blog' | 'docs' | 'marketing'>('default');

  // Available themes
  const themes = ['default', 'aurora', 'metro', 'neon', 'ruby', 'studio'];

  // Apply theme to document root
  useEffect(() => {
    const root = document.documentElement;
    themes.forEach(theme => {
      if (theme !== 'default') {
        root.classList.remove(`theme-${theme}`);
      }
    });
    if (currentTheme !== 'default') {
      root.classList.add(`theme-${currentTheme}`);
    }
  }, [currentTheme]);

  // Main navigation
  const navigation: NavigationItem[] = [
    { 
      key: 'home', 
      label: 'Home', 
      href: '/', 
      icon: Home, 
      isActive: currentPath === '/' 
    },
    { 
      key: 'products', 
      label: 'Products', 
      href: '/products', 
      icon: ShoppingCart,
      isActive: currentPath === '/products',
      items: [
        { key: 'all-products', label: 'All Products', href: '/products' },
        { key: 'categories', label: 'Categories', href: '/products/categories' },
        { key: 'new-arrivals', label: 'New Arrivals', href: '/products/new', badge: 'New' },
      ]
    },
    { 
      key: 'services', 
      label: 'Services', 
      href: '/services',
      isActive: currentPath === '/services',
      items: [
        { key: 'web-design', label: 'Web Design', href: '/services/web-design' },
        { key: 'development', label: 'Development', href: '/services/development' },
        { key: 'consulting', label: 'Consulting', href: '/services/consulting' },
      ]
    },
    { 
      key: 'about', 
      label: 'About', 
      href: '/about',
      isActive: currentPath === '/about'
    },
    { 
      key: 'blog', 
      label: 'Blog', 
      href: '/blog',
      isActive: currentPath === '/blog',
      badge: 'New'
    },
    { 
      key: 'contact', 
      label: 'Contact', 
      href: '/contact',
      isActive: currentPath === '/contact'
    }
  ];

  // Footer navigation
  const footerNavigation: NavigationItem[] = [
    { key: 'privacy', label: 'Privacy Policy', href: '/privacy' },
    { key: 'terms', label: 'Terms of Service', href: '/terms' },
    { key: 'support', label: 'Support', href: '/support' },
    { key: 'docs', label: 'Documentation', href: '/docs' },
    { key: 'api', label: 'API', href: '/api' },
    { key: 'status', label: 'Status', href: '/status' }
  ];

  // Sidebar content for blog/docs schemes
  const sidebarContent = (
    <div className="space-y-6">
      {currentScheme === 'blog' && (
        <>
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Recent Posts</h3>
            <div className="space-y-3">
              {[
                { title: 'Getting Started with UIKit', date: '2024-01-15', category: 'Tutorial' },
                { title: 'Design System Best Practices', date: '2024-01-12', category: 'Design' },
                { title: 'Building Responsive Layouts', date: '2024-01-10', category: 'Development' }
              ].map((post, i) => (
                <div key={i} className="p-3 rounded-lg border border-border bg-card hover:bg-muted/50 cursor-pointer transition-colors">
                  <h4 className="font-medium text-sm text-foreground mb-1">{post.title}</h4>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{post.date}</span>
                    <Badge variant="secondary" className="text-xs">{post.category}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Categories</h3>
            <div className="space-y-2">
              {['Tutorial', 'Design', 'Development', 'News', 'Updates'].map((category) => (
                <div key={category} className="flex items-center justify-between p-2 rounded-md hover:bg-muted cursor-pointer">
                  <span className="text-sm text-foreground">{category}</span>
                  <span className="text-xs text-muted-foreground">{Math.floor(Math.random() * 20) + 1}</span>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
      
      {currentScheme === 'docs' && (
        <>
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Documentation</h3>
            <div className="space-y-2">
              {[
                { title: 'Quick Start', icon: Zap },
                { title: 'Components', icon: Package },
                { title: 'Layouts', icon: Monitor },
                { title: 'Themes', icon: Palette },
                { title: 'Examples', icon: FileText }
              ].map((item) => (
                <button
                  key={item.title}
                  className="w-full flex items-center gap-3 p-2 rounded-md text-left hover:bg-muted transition-colors"
                >
                  <item.icon className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-foreground">{item.title}</span>
                </button>
              ))}
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <div className="space-y-2">
              <Button variant="outline" size="sm" className="w-full justify-start">
                <Search className="h-4 w-4 mr-2" />
                Search Docs
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start">
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );

  // Navigation handler
  const handleNavigate = (href: string, item: NavigationItem) => {
    console.log('Navigate to:', href, 'Item:', item);
    setCurrentPath(href);
  };

  // Header actions
  const headerActions = (
    <div className="flex items-center gap-2">
      <Button variant="ghost" size="sm" className="hidden md:flex">
        <Search className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="sm" className="relative">
        <Bell className="h-4 w-4" />
        <Badge variant="destructive" className="absolute -top-1 -right-1 h-4 w-4 flex items-center justify-center text-xs p-0">
          2
        </Badge>
      </Button>
      <Button variant="ghost" size="sm" className="hidden sm:flex">
        <User className="h-4 w-4" />
      </Button>
      <Button variant="default" size="sm">
        Get Started
      </Button>
    </div>
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Demo Controls Header */}
      <div className="border-b border-border bg-muted/20">
        <div className="container mx-auto p-6">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-foreground">Page Layout Component Demo</h1>
            <p className="text-lg text-muted-foreground">
              Interactive demonstration of PageLayout with different schemes and configurations.
            </p>

            {/* Current State Display */}
            <Card className="bg-card text-card-foreground border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Current Configuration</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 text-sm">
                  <div>
                    <strong className="text-foreground">Path:</strong> 
                    <code className="ml-2 bg-muted px-2 py-1 rounded text-foreground">{currentPath}</code>
                  </div>
                  <div>
                    <strong className="text-foreground">Theme:</strong> 
                    <code className="ml-2 bg-muted px-2 py-1 rounded text-foreground">{currentTheme}</code>
                  </div>
                  <div>
                    <strong className="text-foreground">Scheme:</strong> 
                    <code className="ml-2 bg-muted px-2 py-1 rounded text-foreground">{currentScheme}</code>
                  </div>
                  <div>
                    <strong className="text-foreground">Tone:</strong> 
                    <code className="ml-2 bg-muted px-2 py-1 rounded text-foreground">{currentTone}</code>
                  </div>
                  <div>
                    <strong className="text-foreground">Size:</strong> 
                    <code className="ml-2 bg-muted px-2 py-1 rounded text-foreground">{currentSize}</code>
                  </div>
                  <div>
                    <strong className="text-foreground">Position:</strong> 
                    <code className="ml-2 bg-muted px-2 py-1 rounded text-foreground">{currentPosition}</code>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Interactive Controls */}
            <Tabs defaultValue="controls" className="w-full">
              <TabsList className="bg-muted">
                <TabsTrigger value="controls" className="text-foreground">Interactive Controls</TabsTrigger>
                <TabsTrigger value="demo" className="text-foreground">Demo Instructions</TabsTrigger>
              </TabsList>
              
              <TabsContent value="controls" className="space-y-6">
                {/* Scheme Configuration */}
                <Card className="bg-card text-card-foreground border-border">
                  <CardHeader>
                    <CardTitle className="text-foreground">Layout Scheme</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {(['default', 'blog', 'docs', 'marketing'] as const).map((scheme) => (
                        <Button
                          key={scheme}
                          variant={currentScheme === scheme ? 'default' : 'outline'}
                          size="sm"
                          onClick={() => setCurrentScheme(scheme)}
                          className="capitalize"
                        >
                          {scheme}
                        </Button>
                      ))}
                    </div>
                    <div className="mt-4 text-sm text-muted-foreground">
                      <strong className="text-foreground">Current scheme ({currentScheme}):</strong> 
                      {currentScheme === 'default' && ' Standard header + content + footer layout'}
                      {currentScheme === 'blog' && ' Main content + sidebar layout for blogs'}
                      {currentScheme === 'docs' && ' Sidebar + main content layout for documentation'}
                      {currentScheme === 'marketing' && ' Hero sections and marketing layout'}
                    </div>
                  </CardContent>
                </Card>

                {/* Theme Selection */}
                <Card className="bg-card text-card-foreground border-border">
                  <CardHeader>
                    <CardTitle className="text-foreground">Theme Selection</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                      {themes.map((theme) => (
                        <Button
                          key={theme}
                          variant={currentTheme === theme ? 'default' : 'outline'}
                          size="sm"
                          onClick={() => setCurrentTheme(theme)}
                          className="capitalize"
                        >
                          {theme}
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Tone Configuration */}
                  <Card className="bg-card text-card-foreground border-border">
                    <CardHeader>
                      <CardTitle className="text-foreground">Tone Configuration</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-3">
                        {(['clean', 'subtle', 'brand', 'contrast'] as const).map((tone) => (
                          <Button
                            key={tone}
                            variant={currentTone === tone ? 'default' : 'outline'}
                            size="sm"
                            onClick={() => setCurrentTone(tone)}
                            className="capitalize"
                          >
                            {tone}
                          </Button>
                        ))}
                      </div>
                      <div className="mt-4 text-sm text-muted-foreground">
                        <strong className="text-foreground">Current tone:</strong> {currentTone} - recommended for pages
                      </div>
                    </CardContent>
                  </Card>

                  {/* Size Configuration */}
                  <Card className="bg-card text-card-foreground border-border">
                    <CardHeader>
                      <CardTitle className="text-foreground">Size Configuration</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                        {(['sm', 'md', 'lg', 'xl', 'full'] as const).map((size) => (
                          <Button
                            key={size}
                            variant={currentSize === size ? 'default' : 'outline'}
                            size="sm"
                            onClick={() => setCurrentSize(size)}
                            className="uppercase"
                          >
                            {size}
                          </Button>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Position Configuration */}
                <Card className="bg-card text-card-foreground border-border">
                  <CardHeader>
                    <CardTitle className="text-foreground">Header Position</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-3 gap-3">
                      {(['sticky', 'fixed', 'relative'] as const).map((position) => (
                        <Button
                          key={position}
                          variant={currentPosition === position ? 'default' : 'outline'}
                          size="sm"
                          onClick={() => setCurrentPosition(position)}
                          className="capitalize"
                        >
                          {position}
                        </Button>
                      ))}
                    </div>
                    <div className="mt-4 text-sm text-muted-foreground">
                      <strong className="text-foreground">Current position:</strong> {currentPosition} header behavior
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="demo" className="space-y-6">
                <Card className="bg-card text-card-foreground border-border">
                  <CardHeader>
                    <CardTitle className="text-foreground flex items-center gap-2">
                      <HelpCircle className="h-5 w-5" />
                      Try It Out
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm text-muted-foreground">
                    <div>• <strong className="text-foreground">Layout Schemes:</strong> Try different schemes to see layout variations</div>
                    <div>• <strong className="text-foreground">Navigation:</strong> Click navigation items to see active state changes</div>
                    <div>• <strong className="text-foreground">Sidebar Content:</strong> Blog and docs schemes show contextual sidebars</div>
                    <div>• <strong className="text-foreground">Themes:</strong> Test different themes for color variations</div>
                    <div>• <strong className="text-foreground">Responsive:</strong> Resize window to see responsive behavior</div>
                    <div>• <strong className="text-foreground">Header Position:</strong> Test sticky/fixed/relative header behavior</div>
                    <div>• <strong className="text-foreground">Footer:</strong> Scroll down to see footer with navigation</div>
                    <div>• <strong className="text-foreground">Console:</strong> Check browser console for navigation events</div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      {/* Page Layout Demo */}
      <PageLayout
        scheme={currentScheme}
        tone={currentTone}
        size={currentSize}
        position={currentPosition}
        navigation={navigation}
        currentPath={currentPath}
        onNavigate={handleNavigate}
        title="UIKit Demo"
        logo={
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 bg-primary text-primary-foreground rounded-lg flex items-center justify-center">
              <Package className="h-5 w-5" />
            </div>
            <span className="font-bold text-foreground">UIKit</span>
          </div>
        }
        headerActions={headerActions}
        sidebarContent={currentScheme === 'blog' || currentScheme === 'docs' ? sidebarContent : undefined}
        footerNavigation={footerNavigation}
        copyright="© 2024 UIKit Demo. All rights reserved."
      >
        <div className="space-y-12">
          {/* Hero Section */}
          <section className="text-center py-16">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Build Beautiful Interfaces
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              A comprehensive UI kit for React applications with TypeScript support, 
              theme system, and responsive layouts designed for modern web development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary text-primary-foreground">
                <Zap className="h-5 w-5 mr-2" />
                Get Started
              </Button>
              <Button size="lg" variant="outline">
                <Github className="h-5 w-5 mr-2" />
                View on GitHub
              </Button>
            </div>
          </section>

          {/* Features Grid */}
          <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-card text-card-foreground border-border">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center gap-3">
                  <Monitor className="h-6 w-6 text-primary" />
                  Responsive Design
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Built with mobile-first responsive design principles. 
                  Works perfectly on desktop, tablet, and mobile devices.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card text-card-foreground border-border">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center gap-3">
                  <Palette className="h-6 w-6 text-primary" />
                  Theme System
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Comprehensive theming with 6 built-in themes, dark mode support, 
                  and easy customization for your brand.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card text-card-foreground border-border">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center gap-3">
                  <Package className="h-6 w-6 text-primary" />
                  Rich Components
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  35+ components including forms, tables, layouts, and navigation. 
                  All built with accessibility in mind.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card text-card-foreground border-border">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center gap-3">
                  <FileText className="h-6 w-6 text-primary" />
                  TypeScript Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Full TypeScript support with comprehensive type definitions 
                  for better developer experience and fewer bugs.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card text-card-foreground border-border">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center gap-3">
                  <Zap className="h-6 w-6 text-primary" />
                  Performance Focused
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Optimized for performance with tree shaking, minimal bundle size, 
                  and efficient rendering patterns.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card text-card-foreground border-border">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center gap-3">
                  <Settings className="h-6 w-6 text-primary" />
                  Easy Integration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Drop-in replacement for existing components with minimal setup. 
                  Works with any React project.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Stats Section */}
          <section className="bg-muted/20 rounded-2xl p-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Trusted by Developers
              </h2>
              <p className="text-lg text-muted-foreground">
                Join thousands of developers building amazing applications
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">50K+</div>
                <div className="text-sm text-muted-foreground">Downloads</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">1.2K</div>
                <div className="text-sm text-muted-foreground">GitHub Stars</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">35+</div>
                <div className="text-sm text-muted-foreground">Components</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">99%</div>
                <div className="text-sm text-muted-foreground">Satisfaction</div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center py-16 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Install UIKit today and start building beautiful, responsive interfaces 
              that your users will love.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary text-primary-foreground">
                Install Now
              </Button>
              <Button size="lg" variant="outline">
                View Documentation
              </Button>
            </div>
          </section>
        </div>
      </PageLayout>
    </div>
  );
}

export default PageDemo;