/**
 * Enhanced Container demo with comprehensive features and best practices
 * @module @voilajsx/uikit
 * @file examples/src/pages/sections/ContainerDemo.tsx
 */

import { Container, ContainerSidebar, ContainerMain } from '../../../../src/components/sections/container';
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
  Folder,
  Database,
  Code,
  Layers,
  Monitor,
  Smartphone,
  Palette,
  Zap
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
  className?: string;
}

function ContainerDemo() {
  const [currentPath, setCurrentPath] = useState('/docs');
  const [currentTone, setCurrentTone] = useState<'clean' | 'subtle' | 'brand' | 'contrast'>('clean');
  const [currentSize, setCurrentSize] = useState<'sm' | 'md' | 'lg' | 'xl' | 'full'>('xl');
  const [currentPosition, setCurrentPosition] = useState<'sticky' | 'fixed' | 'relative'>('relative');
  const [currentTheme, setCurrentTheme] = useState('default');
  const [sidebarPosition, setSidebarPosition] = useState<'none' | 'left' | 'right'>('left');
  const [sidebarStickyPosition, setSidebarStickyPosition] = useState<'sticky' | 'fixed' | 'relative'>('relative');

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

  // Sidebar navigation for documentation
  const sidebarNavigation: NavigationItem[] = [
    {
      key: 'getting-started',
      label: 'Getting Started',
      icon: Zap,
      items: [
        { key: 'installation', label: 'Installation', href: '/docs/installation', isActive: currentPath === '/docs/installation' },
        { key: 'quick-start', label: 'Quick Start', href: '/docs/quick-start', isActive: currentPath === '/docs/quick-start' },
        { key: 'configuration', label: 'Configuration', href: '/docs/configuration', isActive: currentPath === '/docs/configuration' }
      ]
    },
    {
      key: 'components',
      label: 'Components',
      icon: Layers,
      items: [
        { key: 'buttons', label: 'Buttons', href: '/docs/components/buttons', isActive: currentPath === '/docs/components/buttons' },
        { key: 'cards', label: 'Cards', href: '/docs/components/cards', isActive: currentPath === '/docs/components/cards' },
        { key: 'forms', label: 'Forms', href: '/docs/components/forms', isActive: currentPath === '/docs/components/forms', badge: 'New' },
        { key: 'tables', label: 'Tables', href: '/docs/components/tables', isActive: currentPath === '/docs/components/tables' }
      ]
    },
    {
      key: 'layouts',
      label: 'Layouts',
      icon: Monitor,
      items: [
        { key: 'admin', label: 'Admin Layout', href: '/docs/layouts/admin', isActive: currentPath === '/docs/layouts/admin' },
        { key: 'page', label: 'Page Layout', href: '/docs/layouts/page', isActive: currentPath === '/docs/layouts/page' },
        { key: 'auth', label: 'Auth Layout', href: '/docs/layouts/auth', isActive: currentPath === '/docs/layouts/auth' }
      ]
    },
    {
      key: 'themes',
      label: 'Themes',
      icon: Palette,
      items: [
        { key: 'theme-system', label: 'Theme System', href: '/docs/themes/system', isActive: currentPath === '/docs/themes/system' },
        { key: 'custom-themes', label: 'Custom Themes', href: '/docs/themes/custom', isActive: currentPath === '/docs/themes/custom' },
        { key: 'dark-mode', label: 'Dark Mode', href: '/docs/themes/dark-mode', isActive: currentPath === '/docs/themes/dark-mode' }
      ]
    },
    {
      key: 'examples',
      label: 'Examples',
      icon: Code,
      items: [
        { key: 'dashboard', label: 'Dashboard', href: '/docs/examples/dashboard', isActive: currentPath === '/docs/examples/dashboard' },
        { key: 'e-commerce', label: 'E-commerce', href: '/docs/examples/ecommerce', isActive: currentPath === '/docs/examples/ecommerce' },
        { key: 'blog', label: 'Blog', href: '/docs/examples/blog', isActive: currentPath === '/docs/examples/blog' }
      ]
    },
    {
      key: 'api',
      label: 'API Reference',
      icon: Database,
      href: '/docs/api',
      isActive: currentPath === '/docs/api',
      badge: '2.1'
    }
  ];

  // Alternative sidebar content (JSX)
  const customSidebarContent = (
    <div className="p-4 space-y-6">
      <div className="space-y-4">
        <h3 className="font-semibold text-foreground flex items-center gap-2">
          <Folder className="h-4 w-4" />
          Project Files
        </h3>
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2 p-2 rounded-md hover:bg-muted cursor-pointer">
            <FileText className="h-4 w-4 text-muted-foreground" />
            <span className="text-foreground">README.md</span>
          </div>
          <div className="flex items-center gap-2 p-2 rounded-md hover:bg-muted cursor-pointer">
            <Code className="h-4 w-4 text-muted-foreground" />
            <span className="text-foreground">package.json</span>
          </div>
          <div className="flex items-center gap-2 p-2 rounded-md hover:bg-muted cursor-pointer">
            <Folder className="h-4 w-4 text-muted-foreground" />
            <span className="text-foreground">src/</span>
          </div>
          <div className="flex items-center gap-2 p-2 rounded-md hover:bg-muted cursor-pointer ml-4">
            <Code className="h-4 w-4 text-muted-foreground" />
            <span className="text-foreground">index.tsx</span>
          </div>
          <div className="flex items-center gap-2 p-2 rounded-md hover:bg-muted cursor-pointer ml-4">
            <Layers className="h-4 w-4 text-muted-foreground" />
            <span className="text-foreground">components/</span>
          </div>
        </div>
      </div>
      
      <div className="space-y-4">
        <h3 className="font-semibold text-foreground flex items-center gap-2">
          <Monitor className="h-4 w-4" />
          Quick Actions
        </h3>
        <div className="space-y-2">
          <Button variant="outline" size="sm" className="w-full justify-start">
            <Search className="h-4 w-4 mr-2" />
            Search Files
          </Button>
          <Button variant="outline" size="sm" className="w-full justify-start">
            <Settings className="h-4 w-4 mr-2" />
            Project Settings
          </Button>
          <Button variant="outline" size="sm" className="w-full justify-start">
            <Package className="h-4 w-4 mr-2" />
            Build Project
          </Button>
        </div>
      </div>
      
      <div className="space-y-4">
        <h3 className="font-semibold text-foreground">Recent Activity</h3>
        <div className="space-y-2 text-sm">
          <div className="p-2 rounded-md bg-muted/50">
            <div className="font-medium text-foreground">Updated components</div>
            <div className="text-muted-foreground">2 hours ago</div>
          </div>
          <div className="p-2 rounded-md bg-muted/50">
            <div className="font-medium text-foreground">Fixed layout issues</div>
            <div className="text-muted-foreground">5 hours ago</div>
          </div>
        </div>
      </div>
    </div>
  );

  // Navigation handler
  const handleNavigate = (href: string, item: NavigationItem) => {
    console.log('Navigate to:', href, 'Item:', item);
    setCurrentPath(href);
  };

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
            <div className="text-sm text-muted-foreground">Container Component Demo</div>
          </div>
        </div>
      </div>

      {/* Demo Controls */}
      <div className="border-b border-border bg-muted/20">
        <div className="container mx-auto p-6">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-foreground">Container Component Demo</h1>
            <p className="text-lg text-muted-foreground">
              Interactive demonstration of Container components with sidebar layouts and configurations.
            </p>

            {/* Current State Display */}
            <Card className="bg-card text-card-foreground border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Current Configuration</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4 text-sm">
                  <div>
                    <strong className="text-foreground">Path:</strong> 
                    <code className="ml-2 bg-muted px-2 py-1 rounded text-foreground">{currentPath}</code>
                  </div>
                  <div>
                    <strong className="text-foreground">Theme:</strong> 
                    <code className="ml-2 bg-muted px-2 py-1 rounded text-foreground">{currentTheme}</code>
                  </div>
                  <div>
                    <strong className="text-foreground">Sidebar:</strong> 
                    <code className="ml-2 bg-muted px-2 py-1 rounded text-foreground">{sidebarPosition}</code>
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
                  <div>
                    <strong className="text-foreground">Sticky:</strong> 
                    <code className="ml-2 bg-muted px-2 py-1 rounded text-foreground">{sidebarStickyPosition}</code>
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
                {/* Sidebar Configuration */}
                <Card className="bg-card text-card-foreground border-border">
                  <CardHeader>
                    <CardTitle className="text-foreground">Sidebar Configuration</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      {(['none', 'left', 'right'] as const).map((position) => (
                        <Button
                          key={position}
                          variant={sidebarPosition === position ? 'default' : 'outline'}
                          size="sm"
                          onClick={() => setSidebarPosition(position)}
                          className="capitalize"
                        >
                          {position === 'none' ? 'No Sidebar' : `${position} Sidebar`}
                        </Button>
                      ))}
                    </div>
                    {sidebarPosition !== 'none' && (
                      <div className="grid grid-cols-3 gap-3">
                        {(['sticky', 'fixed', 'relative'] as const).map((sticky) => (
                          <Button
                            key={sticky}
                            variant={sidebarStickyPosition === sticky ? 'default' : 'outline'}
                            size="sm"
                            onClick={() => setSidebarStickyPosition(sticky)}
                            className="capitalize"
                          >
                            {sticky}
                          </Button>
                        ))}
                      </div>
                    )}
                    <div className="mt-4 text-sm text-muted-foreground">
                      <strong className="text-foreground">Current sidebar:</strong> 
                      {sidebarPosition === 'none' && ' No sidebar - full width content'}
                      {sidebarPosition === 'left' && ' Left sidebar with navigation'}
                      {sidebarPosition === 'right' && ' Right sidebar with navigation'}
                      {sidebarPosition !== 'none' && (
                        <span> - {sidebarStickyPosition} positioning</span>
                      )}
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
                        <strong className="text-foreground">Current tone:</strong> {currentTone}
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
                      <div className="mt-4 text-sm text-muted-foreground">
                        <strong className="text-foreground">Current size:</strong> {currentSize}
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
                    <div>• <strong className="text-foreground">Sidebar Layouts:</strong> Switch between no sidebar, left sidebar, and right sidebar</div>
                    <div>• <strong className="text-foreground">Navigation:</strong> Click sidebar navigation items to see active state changes</div>
                    <div>• <strong className="text-foreground">Sticky Behavior:</strong> Test sticky/fixed sidebar positioning when scrolling</div>
                    <div>• <strong className="text-foreground">Themes:</strong> Try different themes to see container styling variations</div>
                    <div>• <strong className="text-foreground">Responsive:</strong> Resize window to see responsive behavior</div>
                    <div>• <strong className="text-foreground">Content Types:</strong> Notice how content adapts to different sidebar configurations</div>
                    <div>• <strong className="text-foreground">Console:</strong> Check browser console for navigation events</div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      {/* Container Demo */}
      <Container
        tone={currentTone}
        position={currentPosition}
        sidebar={sidebarPosition}
        navigation={sidebarPosition !== 'none' ? sidebarNavigation : undefined}
        sidebarContent={sidebarPosition !== 'none' ? undefined : customSidebarContent}
        currentPath={currentPath}
        onNavigate={handleNavigate}
        sidebarPosition={sidebarStickyPosition}
        size={currentSize}
      >
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Container Content Area</h2>
            <p className="text-muted-foreground">
              This content area demonstrates how the Container component works with different configurations.
              The sidebar can be positioned on the left, right, or hidden entirely.
            </p>
          </div>

          {/* Content Cards */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-card text-card-foreground border-border">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center gap-2">
                  <Monitor className="h-5 w-5" />
                  Responsive Layout
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  The container automatically adapts to different screen sizes, providing 
                  optimal layouts for desktop, tablet, and mobile devices.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card text-card-foreground border-border">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center gap-2">
                  <Layers className="h-5 w-5" />
                  Flexible Sidebars
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Sidebars can be positioned on either side and support both navigation 
                  items and custom JSX content for maximum flexibility.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card text-card-foreground border-border">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  Customizable
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Full control over styling with tone, size, and position options. 
                  Integrates seamlessly with the theme system.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Documentation Content */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground">Documentation Example</h3>
            
            <Card className="bg-card text-card-foreground border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Container Component</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  The Container component provides a flexible layout system with optional sidebars 
                  for building documentation sites, admin panels, and complex application layouts.
                </p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">Key Features:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                    <li>• Left or right sidebar positioning</li>
                    <li>• Navigation items with nested structure</li>
                    <li>• Custom JSX content support</li>
                    <li>• Sticky, fixed, or relative positioning</li>
                    <li>• Responsive design with mobile adaptation</li>
                    <li>• Theme system integration</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">Use Cases:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                    <li>• Documentation websites</li>
                    <li>• Admin dashboards with secondary navigation</li>
                    <li>• Application layouts with contextual sidebars</li>
                    <li>• Blog layouts with category navigation</li>
                    <li>• E-commerce product catalogs</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* More content for scrolling */}
            {Array.from({ length: 6 }, (_, i) => (
              <Card key={i} className="bg-card text-card-foreground border-border">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-foreground mb-2">Content Section {i + 1}</h4>
                  <p className="text-muted-foreground">
                    This additional content demonstrates how the container handles longer pages and provides 
                    scrolling behavior with different sidebar positioning options. The sidebar can remain 
                    sticky, fixed, or scroll with the content based on your configuration.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ContainerDemo;