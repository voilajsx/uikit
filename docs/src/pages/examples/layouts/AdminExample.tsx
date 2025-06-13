/**
 * Admin Template Example
 * @module @voilajsx/uikit
 * @file docs/src/pages/examples/layouts/AdminExample.tsx
 */

import React, { useState } from 'react';
import { AdminTemplate } from '@voilajsx/uikit/admin';
import { ThemeProvider, useTheme } from '@voilajsx/uikit/theme-provider';
import { Button } from '@voilajsx/uikit/button';
import { Card, CardHeader, CardTitle, CardContent } from '@voilajsx/uikit/card';
import { Badge } from '@voilajsx/uikit/badge';
import { Switch } from '@voilajsx/uikit/switch';
import { Label } from '@voilajsx/uikit/label';
import { cn } from '@voilajsx/uikit/utils';
import { 
  Home,
  Users,
  Settings,
  BarChart3,
  FileText,
  Package,
  Shield,
  Sparkles,
  User,
  LogOut,
  Eye,
  Layers,
  Smartphone,
  Monitor,
  Tablet,
  Bell,
  Search,
  Sun,
  Moon,
  Maximize2,
  Minimize2,
  Layout,
  Palette,
  ToggleLeft,
  ToggleRight
} from 'lucide-react';

/**
 * Logo Component
 */
function LogoComponent({ headerVariant }) {
  const logoTextColor = {
    default: "text-foreground",
    primary: "text-primary-foreground", 
    black: "text-zinc-100"
  };

  return (
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center">
        <Sparkles className="h-4 w-4 text-primary-foreground" />
      </div>
      <span className={cn("text-lg font-semibold", logoTextColor[headerVariant])}>
        VoilaJS
      </span>
    </div>
  );
}

/**
 * Header Actions Component
 */
function HeaderActionsComponent({ headerVariant }) {
  const { variant, toggleVariant } = useTheme();
  
  const getButtonStyles = () => {
    switch (headerVariant) {
      case "primary": return "text-primary-foreground hover:bg-primary-foreground/10";
      case "black": return "text-zinc-100 hover:bg-zinc-800";
      default: return "text-muted-foreground hover:text-foreground hover:bg-muted";
    }
  };

  return (
    <div className="flex items-center gap-2">
      <Button variant="ghost" size="icon" className={getButtonStyles()}>
        <Search className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="icon" className={getButtonStyles()}>
        <Bell className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="icon" onClick={toggleVariant} className={getButtonStyles()}>
        {variant === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
      </Button>
      <Button variant="ghost" size="icon" className={getButtonStyles()}>
        <User className="h-4 w-4" />
      </Button>
    </div>
  );
}

/**
 * Sidebar Footer Component
 */
function SidebarFooter() {
  return (
    <div className="p-6 space-y-3">
      <div className="flex items-center gap-3 px-3 py-2 rounded-lg">
        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
          <User className="h-4 w-4 text-primary-foreground" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium  truncate">John Doe</p>
          <p className="text-xs  truncate">admin@test.com</p>
        </div>
      </div>
      <Button variant="ghost" size="sm" className="w-full justify-start ">
        <LogOut className="h-4 w-4 mr-2" />
        Sign Out
      </Button>
    </div>
  );
}

/**
 * Enhanced Test Content Component with Interactive Controls
 */
function TestContent({ 
  currentPath, 
  headerVariant, 
  setHeaderVariant,
  size,
  setSize,
  sticky,
  setSticky,
  collapsible,
  setCollapsible,
  defaultSidebarOpen,
  setDefaultSidebarOpen
}) {
  const { theme, setTheme } = useTheme();

  const headerVariants = [
    { id: 'default', name: 'Default', icon: Layout },
    { id: 'primary', name: 'Primary', icon: Palette },
    { id: 'black', name: 'Black', icon: Monitor }
  ];

  const sizeVariants = [
    { id: 'compact', name: 'Compact', icon: Minimize2, description: '192px width' },
    { id: 'default', name: 'Default', icon: Monitor, description: '256px width' },
    { id: 'wide', name: 'Wide', icon: Maximize2, description: '320px width' }
  ];

  const themes = [
    { id: 'default', name: 'Default' },
    { id: 'metro', name: 'Metro' },
    { id: 'studio', name: 'Studio' },
    { id: 'ruby', name: 'Ruby' },
    { id: 'neon', name: 'Neon' },
    { id: 'aurora', name: 'Aurora' }
  ];

  return (
    <div className="space-y-8">
      {/* Current Status Display */}
      <div className="text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Eye className="h-6 w-6 text-primary" />
          <h1 className="text-3xl font-bold">AdminTemplate Interactive Demo</h1>
        </div>
        <p className="text-muted-foreground mb-4">
          Interactive testing environment for the AdminTemplate with all configuration options.
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {currentPath && (
            <Badge variant="secondary" className="text-sm">
              Current Path: {currentPath}
            </Badge>
          )}
          <Badge variant="outline" className="text-sm">
            Size: {size}
          </Badge>
          <Badge variant="outline" className="text-sm">
            Variant: {headerVariant}
          </Badge>
          <Badge variant="outline" className="text-sm">
            Theme: {theme}
          </Badge>
        </div>
      </div>

      {/* Template Configuration Controls */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Layers className="h-5 w-5" />
            Template Configuration
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Size Variants */}
          <div>
            <label className="text-sm font-semibold mb-3 block flex items-center gap-2">
              <Layout className="h-4 w-4" />
              Sidebar Size Variants
            </label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {sizeVariants.map((variant) => (
                <Button
                  key={variant.id}
                  variant={size === variant.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSize(variant.id)}
                  className="h-auto p-3 flex flex-col items-center gap-2"
                >
                  <variant.icon className="h-4 w-4" />
                  <div className="text-center">
                    <div className="font-medium">{variant.name}</div>
                    <div className="text-xs text-muted-foreground">{variant.description}</div>
                  </div>
                </Button>
              ))}
            </div>
          </div>

          {/* Header Variants */}
          <div>
            <label className="text-sm font-semibold mb-3 block flex items-center gap-2">
              <Palette className="h-4 w-4" />
              Header Variants
            </label>
            <div className="flex flex-wrap gap-2">
              {headerVariants.map((variant) => (
                <Button
                  key={variant.id}
                  variant={headerVariant === variant.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setHeaderVariant(variant.id)}
                  className="flex items-center gap-2"
                >
                  <variant.icon className="h-3 w-3" />
                  {variant.name}
                </Button>
              ))}
            </div>
          </div>
          
          {/* Theme Selection */}
          <div>
            <label className="text-sm font-semibold mb-3 block flex items-center gap-2">
              <Sun className="h-4 w-4" />
              Theme Selection
            </label>
            <div className="flex flex-wrap gap-2">
              {themes.map((t) => (
                <Button
                  key={t.id}
                  variant={theme === t.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setTheme(t.id)}
                >
                  {t.name}
                </Button>
              ))}
            </div>
          </div>

          {/* Template Options */}
          <div>
            <label className="text-sm font-semibold mb-3 block flex items-center gap-2">
              <Settings className="h-4 w-4" />
              Template Options
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-2">
                  <ToggleLeft className="h-4 w-4 text-muted-foreground" />
                  <Label htmlFor="sticky-header" className="text-sm font-medium">
                    Sticky Header
                  </Label>
                </div>
                <Switch
                  id="sticky-header"
                  checked={sticky}
                  onCheckedChange={setSticky}
                />
              </div>

              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-2">
                  <ToggleRight className="h-4 w-4 text-muted-foreground" />
                  <Label htmlFor="collapsible" className="text-sm font-medium">
                    Collapsible Sidebar
                  </Label>
                </div>
                <Switch
                  id="collapsible"
                  checked={collapsible}
                  onCheckedChange={setCollapsible}
                />
              </div>

              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-2">
                  <Layout className="h-4 w-4 text-muted-foreground" />
                  <Label htmlFor="default-open" className="text-sm font-medium">
                    Default Sidebar Open
                  </Label>
                </div>
                <Switch
                  id="default-open"
                  checked={defaultSidebarOpen}
                  onCheckedChange={setDefaultSidebarOpen}
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Navigation Testing Guide */}
      <Card>
        <CardHeader>
          <CardTitle>Interactive Testing Guide</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Eye className="h-4 w-4" />
                Navigation Features
              </h4>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Click "User Management" to expand submenu with smooth animations</li>
                <li>• Navigate to different pages to see active states and highlighting</li>
                <li>• Check badge indicators (23 users, 12 orders) - visible in default/wide sizes</li>
                <li>• Test "Products & Orders" submenu with nested navigation</li>
                <li>• Try different size variants to see layout adaptations</li>
                <li>• Notice how compact mode optimizes space usage</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Smartphone className="h-4 w-4" />
                Responsive Testing
              </h4>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Resize window to &lt; 1024px to trigger mobile mode</li>
                <li>• Use hamburger menu to toggle sidebar on mobile</li>
                <li>• Click overlay to close sidebar on small screens</li>
                <li>• Test touch interactions and swipe gestures</li>
                <li>• Verify smooth transitions and animations</li>
                <li>• Check auto-close behavior and scroll locking</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Size Comparison Demo */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Maximize2 className="h-5 w-5" />
            Size Variant Comparison
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {sizeVariants.map((variant) => (
              <div 
                key={variant.id}
                className={cn(
                  "p-4 border-2 rounded-lg transition-all cursor-pointer",
                  size === variant.id 
                    ? "border-primary bg-primary/5" 
                    : "border-border hover:border-primary/50"
                )}
                onClick={() => setSize(variant.id)}
              >
                <div className="flex items-center gap-2 mb-2">
                  <variant.icon className="h-4 w-4" />
                  <span className="font-medium">{variant.name}</span>
                  {size === variant.id && <Badge className="ml-auto">Active</Badge>}
                </div>
                <p className="text-xs text-muted-foreground mb-2">{variant.description}</p>
                <div className="text-xs space-y-1">
                  <div>Navigation spacing: {variant.id === 'compact' ? 'Tight' : variant.id === 'wide' ? 'Spacious' : 'Normal'}</div>
                  <div>Badge visibility: {variant.id === 'compact' ? 'Hidden' : 'Visible'}</div>
                  <div>Icon size: {variant.id === 'compact' ? '14px' : variant.id === 'wide' ? '20px' : '16px'}</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Sample Dashboard Content with Dynamic Sizing */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">
          {currentPath === '/dashboard' ? 'Dashboard Overview' : 
           currentPath === '/users' ? 'User Management' :
           currentPath === '/users/roles' ? 'User Roles' :
           currentPath === '/users/permissions' ? 'User Permissions' :
           currentPath === '/products' ? 'Products' :
           currentPath === '/products/categories' ? 'Product Categories' :
           currentPath === '/orders' ? 'Orders' :
           currentPath === '/analytics' ? 'Analytics Overview' :
           currentPath === '/analytics/reports' ? 'Analytics Reports' :
           currentPath === '/content' ? 'Content Management' :
           currentPath === '/security' ? 'Security Settings' :
           currentPath === '/settings' ? 'System Settings' :
           'Page Content'}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Total Users", value: "1,234", change: "+12%", color: "text-green-600", icon: Users },
            { title: "Revenue", value: "$12,345", change: "+8%", color: "text-green-600", icon: BarChart3 },
            { title: "Orders", value: "567", change: "-2%", color: "text-red-600", icon: Package }
          ].map((stat, i) => (
            <Card key={i}>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-2">
                  <stat.icon className="h-4 w-4 text-muted-foreground" />
                  <Badge variant="outline" className="text-xs">
                    {size}
                  </Badge>
                </div>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-sm text-muted-foreground">{stat.title}</p>
                <p className={cn("text-xs", stat.color)}>{stat.change} from last month</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

/**
 * Main App Component with Enhanced State Management
 */
function App() {
  const [headerVariant, setHeaderVariant] = useState("primary");
  const [currentPath, setCurrentPath] = useState('/dashboard');
  const [size, setSize] = useState("default");
  const [sticky, setSticky] = useState(true);
  const [collapsible, setCollapsible] = useState(true);
  const [defaultSidebarOpen, setDefaultSidebarOpen] = useState(true);

  // Navigation items configuration with enhanced structure
  const navigationItems = [
    {
      title: "Dashboard",
      icon: Home,
      path: "/dashboard",
      section: "main"
    },
    {
      title: "User Management",
      icon: Users,
      key: "users",
      section: "main",
      badge: "23",
      submenu: [
        { title: "All Users", path: "/users" },
        { title: "User Roles", path: "/users/roles" },
        { title: "Permissions", path: "/users/permissions" }
      ]
    },
    {
      title: "Products & Orders",
      icon: Package,
      key: "products",
      section: "main",
      submenu: [
        { title: "All Products", path: "/products" },
        { title: "Categories", path: "/products/categories" },
        { title: "Orders", path: "/orders", badge: "12" }
      ]
    },
    {
      title: "Analytics",
      icon: BarChart3,
      key: "analytics",
      section: "main",
      submenu: [
        { title: "Overview", path: "/analytics" },
        { title: "Reports", path: "/analytics/reports" }
      ]
    },
    {
      title: "Content",
      icon: FileText,
      path: "/content",
      section: "main"
    },
    {
      title: "Security",
      icon: Shield,
      path: "/security",
      section: "main"
    },
    {
      title: "Settings",
      icon: Settings,
      path: "/settings",
      section: "system"
    }
  ];

  // Handle navigation with logging
  const handleNavigate = (path, item) => {
    setCurrentPath(path);
    console.log('Navigate to:', path, 'Item:', item, 'Current size:', size);
  };

  return (
    <ThemeProvider theme="primary" variant="light" detectSystem={true}>
      <AdminTemplate
        title="Admin Dashboard"
        variant={headerVariant}
        size={size}
        logoComponent={(variant) => <LogoComponent headerVariant={variant} />}
        headerActionsComponent={(variant) => <HeaderActionsComponent headerVariant={variant} />}
        navigationItems={navigationItems}
        currentPath={currentPath}
        onNavigate={handleNavigate}
        sidebarFooter={<SidebarFooter />}
        sticky={sticky}
        collapsible={collapsible}
        defaultSidebarOpen={defaultSidebarOpen}
      >
        <TestContent 
          currentPath={currentPath}
          headerVariant={headerVariant}
          setHeaderVariant={setHeaderVariant}
          size={size}
          setSize={setSize}
          sticky={sticky}
          setSticky={setSticky}
          collapsible={collapsible}
          setCollapsible={setCollapsible}
          defaultSidebarOpen={defaultSidebarOpen}
          setDefaultSidebarOpen={setDefaultSidebarOpen}
        />
      </AdminTemplate>
    </ThemeProvider>
  );
}

export default App;