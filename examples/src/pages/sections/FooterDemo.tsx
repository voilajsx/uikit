/**
 * Enhanced Footer demo with comprehensive features and best practices
 * @module @voilajsx/uikit
 * @file examples/src/pages/sections/FooterDemo.tsx
 */

import { Footer, FooterBasic, FooterAdvanced, FooterSocial } from '../../../../src/components/sections/footer';
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
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Mail,
  Phone,
  MapPin,
  Sun,
  Moon
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

interface SocialLink {
  key: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  onClick: () => void;
  className?: string;
}

function FooterDemo() {
  const [currentPath, setCurrentPath] = useState('/');
  const [currentTone, setCurrentTone] = useState<'clean' | 'subtle' | 'brand' | 'contrast'>('contrast');
  const [currentSize, setCurrentSize] = useState<'sm' | 'md' | 'lg' | 'xl' | 'full'>('xl');
  const [currentPosition, setCurrentPosition] = useState<'sticky' | 'fixed' | 'relative'>('sticky');
  const [currentTheme, setCurrentTheme] = useState('default');
  const [footerType, setFooterType] = useState<'basic' | 'advanced'>('basic');
  const [currentMode, setCurrentMode] = useState<'light' | 'dark'>('light');

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

  // Basic footer navigation
  const navigation: NavigationItem[] = [
    { 
      key: 'home', 
      label: 'Home', 
      href: '/', 
      isActive: currentPath === '/' 
    },
    { 
      key: 'about', 
      label: 'About', 
      href: '/about',
      isActive: currentPath === '/about'
    },
    { 
      key: 'services', 
      label: 'Services', 
      href: '/services',
      isActive: currentPath === '/services'
    },
    { 
      key: 'contact', 
      label: 'Contact', 
      href: '/contact',
      isActive: currentPath === '/contact'
    },
    { 
      key: 'privacy', 
      label: 'Privacy Policy', 
      href: '/privacy',
      isActive: currentPath === '/privacy'
    },
    { 
      key: 'terms', 
      label: 'Terms of Service', 
      href: '/terms',
      isActive: currentPath === '/terms'
    }
  ];

  // Advanced footer columns
  const footerColumns = [
    {
      key: 'products',
      title: 'Products',
      items: [
        { key: 'web-apps', label: 'Web Applications', href: '/products/web' },
        { key: 'mobile-apps', label: 'Mobile Apps', href: '/products/mobile' },
        { key: 'desktop', label: 'Desktop Software', href: '/products/desktop' },
        { key: 'api', label: 'API Services', href: '/products/api' }
      ]
    },
    {
      key: 'resources',
      title: 'Resources',
      items: [
        { key: 'docs', label: 'Documentation', href: '/docs' },
        { key: 'guides', label: 'Guides', href: '/guides' },
        { key: 'blog', label: 'Blog', href: '/blog' },
        { key: 'changelog', label: 'Changelog', href: '/changelog', badge: 'New' }
      ]
    },
    {
      key: 'support',
      title: 'Support',
      items: [
        { key: 'help', label: 'Help Center', href: '/help' },
        { key: 'contact-support', label: 'Contact Support', href: '/support' },
        { key: 'status', label: 'System Status', href: '/status' },
        { key: 'community', label: 'Community', href: '/community' }
      ]
    }
  ];

  // Legal navigation for advanced footer
  const legalNavigation: NavigationItem[] = [
    { key: 'privacy', label: 'Privacy Policy', href: '/privacy' },
    { key: 'terms', label: 'Terms of Service', href: '/terms' },
    { key: 'cookies', label: 'Cookie Policy', href: '/cookies' },
    { key: 'gdpr', label: 'GDPR', href: '/gdpr' }
  ];

  // Social links
  const socialLinks: SocialLink[] = [
    {
      key: 'facebook',
      label: 'Facebook',
      icon: Facebook,
      onClick: () => console.log('Facebook clicked')
    },
    {
      key: 'twitter',
      label: 'Twitter',
      icon: Twitter,
      onClick: () => console.log('Twitter clicked')
    },
    {
      key: 'instagram',
      label: 'Instagram',
      icon: Instagram,
      onClick: () => console.log('Instagram clicked')
    },
    {
      key: 'linkedin',
      label: 'LinkedIn',
      icon: Linkedin,
      onClick: () => console.log('LinkedIn clicked')
    },
    {
      key: 'github',
      label: 'GitHub',
      icon: Github,
      onClick: () => console.log('GitHub clicked')
    }
  ];

  // Navigation handler
  const handleNavigate = (href: string, item: NavigationItem) => {
    console.log('Navigate to:', href, 'Item:', item);
    setCurrentPath(href);
  };

  // Brand content for advanced footer
  const brandContent = (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 bg-accent text-primary-foreground rounded-lg flex items-center justify-center">
          <Package className="h-6 w-6" />
        </div>
        <div>
          <div className="font-bold text-lg">UIKit Demo</div>
          <div className="text-sm text-content">Building better interfaces</div>
        </div>
      </div>
      <p className="text-sm text-content max-w-sm">
        A comprehensive UI kit for building modern web applications with React and TypeScript.
        Designed for developers who care about user experience.
      </p>
      <div className="flex items-center gap-4 text-sm text-content">
        <div className="flex items-center gap-2">
          <Mail className="h-4 w-4" />
          <span>hello@uikit.com</span>
        </div>
        <div className="flex items-center gap-2">
          <Phone className="h-4 w-4" />
          <span>+1 (555) 123-4567</span>
        </div>
      </div>
    </div>
  );

  // Newsletter signup for advanced footer
  const newsletterContent = (
    <div className="space-y-4">
      <h4 className="text-sm font-semibold">Stay Updated</h4>
      <p className="text-sm text-muted-foreground">
        Get the latest updates and news delivered to your inbox.
      </p>
      <div className="flex gap-2">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-3 py-2 text-sm bg-background border border-border rounded-md"
        />
        <Button size="sm" className="bg-primary text-primary-foreground">
          Subscribe
        </Button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header for context */}
      <div className="border-b border-border bg-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 bg-primary text-primary-foreground rounded-lg flex items-center justify-center">
                <Package className="h-5 w-5" />
              </div>

              <div className="font-bold text-foreground">UIKit Demo</div>
            </div>
            <div className="text-sm text-muted-foreground">Footer Component Demo</div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto p-6 space-y-8 min-h-[60vh]">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-foreground">Footer Component Demo</h1>
          <p className="text-lg text-muted-foreground">
            Interactive demonstration of Footer components with various configurations.
          </p>
        </div>

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
                <strong className="text-foreground">Type:</strong> 
                <code className="ml-2 bg-muted px-2 py-1 rounded text-foreground">{footerType}</code>
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
            {/* Footer Type Selection */}
            <Card className="bg-card text-card-foreground border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Footer Type</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  <Button
                    variant={footerType === 'basic' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setFooterType('basic')}
                  >
                    Basic Footer
                  </Button>
                  <Button
                    variant={footerType === 'advanced' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setFooterType('advanced')}
                  >
                    Advanced Footer
                  </Button>
                </div>
                <div className="mt-4 text-sm text-muted-foreground">
                  <strong className="text-foreground">Current type:</strong> 
                  {footerType === 'basic' && ' Simple row layout with navigation and social links'}
                  {footerType === 'advanced' && ' Multi-column layout with brand, columns, and newsletter'}
                </div>
              </CardContent>
            </Card>

            {/* Theme and Mode Selection */}
            <Card className="bg-card text-card-foreground border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Theme & Mode Selection</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Theme Selection */}
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-3">Theme</h4>
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
                </div>

                {/* Dark/Light Mode Toggle */}
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-3">Color Mode</h4>
                  <div className="flex gap-3">
                    <Button
                      variant={!document.documentElement.classList.contains('dark') ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => {
                        document.documentElement.classList.remove('dark');
                        setCurrentMode('light');
                      }}
                      className="flex items-center gap-2"
                    >
                      <Sun className="h-4 w-4" />
                      Light
                    </Button>
                    <Button
                      variant={document.documentElement.classList.contains('dark') ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => {
                        document.documentElement.classList.add('dark');
                        setCurrentMode('dark');
                      }}
                      className="flex items-center gap-2"
                    >
                      <Moon className="h-4 w-4" />
                      Dark
                    </Button>
                  </div>
                </div>

                {/* Status Display */}
                <div className="text-sm text-muted-foreground space-y-1">
                  <div>
                    <strong className="text-foreground">Current theme:</strong> {currentTheme} 
                  </div>
                  <div>
                    <strong className="text-foreground">Current mode:</strong> {document.documentElement.classList.contains('dark') ? 'dark' : 'light'}
                  </div>
                  <div className="text-xs">
                    Footer adapts automatically to light/dark mode with semantic color variables
                  </div>
                </div>
              </CardContent>
            </Card>
            {/* Tone Configuration */}
            <Card className="bg-card text-card-foreground border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Tone Configuration</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
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
                  <strong className="text-foreground">Current tone ({currentTone}):</strong> 
                  {currentTone === 'clean' && ' Clean background - minimal styling'}
                  {currentTone === 'subtle' && ' Subtle muted background'}
                  {currentTone === 'brand' && ' Primary colored background'}
                  {currentTone === 'contrast' && ' Dark background - recommended for footers'}
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
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
                  <div className="mt-4 text-sm text-muted-foreground">
                    <strong className="text-foreground">Current size ({currentSize}):</strong> 
                    {currentSize === 'sm' && ' Compact footer with minimal padding'}
                    {currentSize === 'md' && ' Medium footer with balanced spacing'}
                    {currentSize === 'lg' && ' Large footer with generous spacing'}
                    {currentSize === 'xl' && ' Extra large footer - recommended'}
                    {currentSize === 'full' && ' Full width footer with maximum space'}
                  </div>
                </CardContent>
              </Card>

              {/* Position Configuration */}
              <Card className="bg-card text-card-foreground border-border">
                <CardHeader>
                  <CardTitle className="text-foreground">Position Configuration</CardTitle>
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
                    <strong className="text-foreground">Current position ({currentPosition}):</strong> 
                    {currentPosition === 'sticky' && ' Sticks to bottom when scrolling'}
                    {currentPosition === 'fixed' && ' Always fixed at bottom of screen'}
                    {currentPosition === 'relative' && ' Normal document flow - recommended'}
                  </div>
                </CardContent>
              </Card>
            </div>
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
                <div>• <strong className="text-foreground">Footer Types:</strong> Switch between Basic and Advanced footer layouts</div>
                <div>• <strong className="text-foreground">Navigation:</strong> Click footer links to see active state changes</div>
                <div>• <strong className="text-foreground">Social Links:</strong> Try the social media buttons (check console)</div>
                <div>• <strong className="text-foreground">Themes:</strong> Test different themes to see footer color variations</div>
                <div>• <strong className="text-foreground">Tones:</strong> Contrast tone is recommended for footers</div>
                <div>• <strong className="text-foreground">Newsletter:</strong> Try the newsletter signup in advanced footer</div>
                <div>• <strong className="text-foreground">Position:</strong> Test sticky/fixed positions by scrolling</div>
                <div>• <strong className="text-foreground">Console:</strong> Check browser console for interaction events</div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Spacer content */}
        <div className="space-y-6 py-12">
          <h2 className="text-2xl font-bold text-foreground">Page Content</h2>
          <p className="text-muted-foreground">
            This content demonstrates how the footer appears in context with page content.
            Scroll down to see the footer and test different position behaviors.
          </p>
          
          {Array.from({ length: 3 }, (_, i) => (
            <Card key={i} className="bg-card text-card-foreground border-border">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Content Section {i + 1}</h3>
                <p className="text-muted-foreground">
                  This content helps demonstrate the footer position behavior. The footer appears at the 
                  bottom of the page content and responds to the position settings you configure above.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Footer with current settings */}
      {footerType === 'basic' ? (
        <Footer
          tone={currentTone}
          size={currentSize}
          position={currentPosition}
        >
          <FooterBasic
            navigation={navigation}
            currentPath={currentPath}
            onNavigate={handleNavigate}
            logo={
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 bg-accent text-primary-foreground rounded-lg flex items-center justify-center">
                  <Package className="h-5 w-5" />
                </div>
                <div className="font-bold">UIKit Demo</div>
              </div>
            }
            social={<FooterSocial links={socialLinks} />}
            copyright="© 2024 UIKit Demo. All rights reserved."
          />
        </Footer>
      ) : (
        <Footer
          tone={currentTone}
          size={currentSize}
          position={currentPosition}
        >
          <FooterAdvanced
            brand={brandContent}
            columns={footerColumns}
            newsletter={newsletterContent}
            social={<FooterSocial links={socialLinks} />}
            legal={legalNavigation}
            currentPath={currentPath}
            onNavigate={handleNavigate}
            copyright="© 2024 UIKit Demo. All rights reserved."
          />
        </Footer>
      )}
    </div>
  );
}

export default FooterDemo;