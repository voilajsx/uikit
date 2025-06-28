/**
 * Enhanced Header demo with comprehensive features and best practices
 * @module @voilajsx/uikit
 * @file examples/src/pages/sections/HeaderDemo.tsx
 */

import { Header, HeaderLogo, HeaderNav } from '../../../../src/components/sections/header';
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
  Sun,
  Moon,
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

function HeaderDemo() {
  const [currentPath, setCurrentPath] = useState('/');
  const [currentTone, setCurrentTone] = useState<'clean' | 'subtle' | 'brand' | 'contrast'>('clean');
  const [currentSize, setCurrentSize] = useState<'sm' | 'md' | 'lg' | 'xl' | 'full'>('xl');
  const [currentPosition, setCurrentPosition] = useState<'sticky' | 'fixed' | 'relative'>('sticky');
  const [currentTheme, setCurrentTheme] = useState('default');
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

  // Enhanced navigation with nested items and badges
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
      key: 'analytics', 
      label: 'Analytics', 
      icon: BarChart3,
      items: [
        { key: 'dashboard', label: 'Dashboard', href: '/analytics', icon: BarChart3 },
        { key: 'reports', label: 'Reports', href: '/analytics/reports', icon: FileText },
        { key: 'insights', label: 'Insights', href: '/analytics/insights', badge: '3' },
      ]
    },
    { 
      key: 'about', 
      label: 'About', 
      href: '/about',
      isActive: currentPath === '/about'
    },
    { 
      key: 'contact', 
      label: 'Contact', 
      href: '/contact',
      isActive: currentPath === '/contact'
    },
  ];

  // Navigation handler
  const handleNavigate = (href: string, item: NavigationItem) => {
    console.log('Navigate to:', href, 'Item:', item);
    setCurrentPath(href);
  };

  // Action handlers
  const handleSearch = () => console.log('Search clicked');
  const handleNotifications = () => console.log('Notifications clicked');
  const handleProfile = () => console.log('Profile clicked');
  const handleSignIn = () => console.log('Sign in clicked');

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header with current settings */}
      <Header tone={currentTone} size={currentSize} position={currentPosition}>
        <HeaderLogo>
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 bg-accent text-accent-foreground rounded-lg flex items-center justify-center">
            <Package className="h-5 w-5" />
          </div>
            <div className="hidden sm:block">
              <div className="font-bold text-current">UIKit Demo</div>
            </div>
          </div>
        </HeaderLogo>
        
        <HeaderNav 
          navigation={navigation}
          currentPath={currentPath}
          onNavigate={handleNavigate}
        />
        
        {/* Header actions */}
        <div className="flex items-center gap-2">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={handleSearch}
            className="hidden md:flex"
          >
            <Search className="h-4 w-4" />
          </Button>
          
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={handleNotifications}
            className="relative"
          >
            <Bell className="h-4 w-4" />
            <Badge 
              variant="destructive" 
              className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center text-xs p-0"
            >
              3
            </Badge>
          </Button>
          
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={handleProfile}
            className="hidden sm:flex"
          >
            <User className="h-4 w-4" />
          </Button>
          
          <Button 
            variant="outline" 
            size="sm"
            onClick={handleSignIn}
          >
            Sign In
          </Button>
        </div>
      </Header>

      {/* Demo content */}
      <div className="container mx-auto p-6 space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-foreground">Header Component Demo</h1>
          <p className="text-lg text-muted-foreground">
            Interactive demonstration with fixed hover colors and comprehensive controls.
          </p>
        </div>

        {/* Current State Display */}
        <Card className="bg-card text-card-foreground border-border">
          <CardHeader>
            <CardTitle className="text-foreground">Current Configuration</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 text-sm">
              <div>
                <strong className="text-foreground">Path:</strong> 
                <code className="ml-2 bg-muted px-2 py-1 rounded text-foreground">{currentPath}</code>
              </div>
              <div>
                <strong className="text-foreground">Theme:</strong> 
                <code className="ml-2 bg-muted px-2 py-1 rounded text-foreground">{currentTheme}</code>
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
                    Themes automatically adapt to light/dark mode with semantic color variables
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
                  {currentTone === 'clean' && ' Pure white background, minimal styling'}
                  {currentTone === 'subtle' && ' Muted gray background - professional look'}
                  {currentTone === 'brand' && ' Primary colored background - branded header'}
                  {currentTone === 'contrast' && ' Dark background - high contrast theme'}
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
                    {currentSize === 'sm' && ' Compact header (h-12)'}
                    {currentSize === 'md' && ' Medium header (h-14)'}
                    {currentSize === 'lg' && ' Large header (h-16) - recommended'}
                    {currentSize === 'xl' && ' Extra large header (h-16) with max width'}
                    {currentSize === 'full' && ' Full width header (h-16)'}
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
                    {currentPosition === 'sticky' && ' Sticks to top when scrolling'}
                    {currentPosition === 'fixed' && ' Always fixed at top of screen'}
                    {currentPosition === 'relative' && ' Scrolls with content'}
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
                <div>• <strong className="text-foreground">Fixed Hover Colors:</strong> Hover over navigation items to see consistent hover colors that match active states</div>
                <div>• <strong className="text-foreground">Navigation:</strong> Click navigation items to see active state changes</div>
                <div>• <strong className="text-foreground">Dropdowns:</strong> Try the "Products" and "Analytics" menus for dropdown functionality</div>
                <div>• <strong className="text-foreground">Themes:</strong> Test different themes to see color variations</div>
                <div>• <strong className="text-foreground">Responsive:</strong> Resize window to see responsive mobile menu</div>
                <div>• <strong className="text-foreground">Position:</strong> Scroll down to test different position behaviors</div>
                <div>• <strong className="text-foreground">Console:</strong> Check browser console for navigation events</div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Add scrollable content to test position behavior */}
        <div className="space-y-6 pt-8">
          <h2 className="text-2xl font-bold text-foreground">Scroll Test Content</h2>
          <p className="text-muted-foreground">
            This content demonstrates scrolling behavior with different header positions.
            Try changing the position setting above and scroll to see the difference.
          </p>
          
          {Array.from({ length: 8 }, (_, i) => (
            <Card key={i} className="bg-card text-card-foreground border-border">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Test Section {i + 1}</h3>
                <p className="text-muted-foreground">
                  This content helps test the header position behavior. When position is set to "sticky", 
                  the header will stick to the top. When set to "fixed", it stays fixed. When "relative", 
                  it scrolls with the content.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HeaderDemo;