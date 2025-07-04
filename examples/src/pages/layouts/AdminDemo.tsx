/**
 * Admin Layout demo - FIXED NO FLASH VERSION
 * @module @voilajsx/uikit
 * @file examples/src/pages/layouts/AdminDemo.tsx
 */

import React from 'react';
import { AdminLayout } from '../../../../src/components/layouts/admin';
import { Button } from '../../../../src/components/ui/button';
import { Badge } from '../../../../src/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '../../../../src/components/ui/card';
import { Avatar, AvatarFallback } from '../../../../src/components/ui/avatar';
import { 
  Home, 
  Users, 
  BarChart3, 
  Settings, 
  Bell, 
  Search,
  Package,
  FileText,
  DollarSign,
  Activity,
  Plus,
  Shield,
  Palette,
  Layout
} from 'lucide-react';
import { useState, useLayoutEffect } from 'react';

// Type definition
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

/**
 * ✅ FIX: Apply theme immediately to prevent flash
 */
function applyThemeImmediately(theme: string, mode: 'light' | 'dark') {
  const root = document.documentElement;
  const themes = ['default', 'aurora', 'metro', 'neon', 'ruby', 'studio'];
  
  // Remove all existing themes and modes
  themes.forEach(t => {
    if (t !== 'default') {
      root.classList.remove(`theme-${t}`);
    }
  });
  root.classList.remove('light', 'dark');
  
  // Apply new theme and mode immediately
  if (theme !== 'default') {
    root.classList.add(`theme-${theme}`);
  }
  root.classList.add(mode);
  
  console.log(`🎨 Applied theme immediately: ${theme} (${mode})`);
}

function AdminDemo() {
  // ✅ FIX: Initialize with immediate theme application
  const [currentPath, setCurrentPath] = useState('/admin/dashboard');
  const [currentTone, setCurrentTone] = useState<'clean' | 'subtle' | 'brand' | 'contrast'>('brand');
  const [currentScheme, setCurrentScheme] = useState<'sidebar' | 'compact'>('sidebar');
  const [currentTheme, setCurrentTheme] = useState(() => {
    // Apply metro theme immediately on initialization
    const initialTheme = 'metro';
    const initialMode = 'light';
    applyThemeImmediately(initialTheme, initialMode);
    return initialTheme;
  });
  const [currentMode, setCurrentMode] = useState<'light' | 'dark'>('light');
  const [currentSize, setCurrentSize] = useState<'sm' | 'md' | 'lg' | 'xl' | 'full'>('lg');

  // Available options
  const themes = ['default', 'aurora', 'metro', 'neon', 'ruby', 'studio'];
  const modes = ['light', 'dark'] as const;
  const sizes = ['sm', 'md', 'lg', 'xl', 'full'] as const;

  // ✅ FIX: Use useLayoutEffect for synchronous theme application
  useLayoutEffect(() => {
    applyThemeImmediately(currentTheme, currentMode);
  }, [currentTheme, currentMode]);

  // ✅ FIX: Updated theme setter with immediate application
  const handleThemeChange = (newTheme: string) => {
    // Apply immediately, then update state
    applyThemeImmediately(newTheme, currentMode);
    setCurrentTheme(newTheme);
  };

  // ✅ FIX: Updated mode setter with immediate application  
  const handleModeChange = (newMode: 'light' | 'dark') => {
    // Apply immediately, then update state
    applyThemeImmediately(currentTheme, newMode);
    setCurrentMode(newMode);
  };

  // Simple navigation
  const navigation: NavigationItem[] = [
    { 
      key: 'dashboard', 
      label: 'Dashboard', 
      href: '/admin/dashboard', 
      icon: Home, 
      isActive: currentPath === '/admin/dashboard' 
    },
    { 
      key: 'users', 
      label: 'Users', 
      href: '/admin/users', 
      icon: Users,
      isActive: currentPath === '/admin/users',
      badge: '12'
    },
    { 
      key: 'analytics', 
      label: 'Analytics', 
      icon: BarChart3,
      items: [
        { key: 'overview', label: 'Overview', href: '/admin/analytics/overview', isActive: currentPath === '/admin/analytics/overview' },
        { key: 'reports', label: 'Reports', href: '/admin/analytics/reports', isActive: currentPath === '/admin/analytics/reports' },
      ]
    },
    { 
      key: 'content', 
      label: 'Content', 
      icon: FileText,
      items: [
        { key: 'posts', label: 'Posts', href: '/admin/content/posts', isActive: currentPath === '/admin/content/posts' },
        { key: 'media', label: 'Media', href: '/admin/content/media', isActive: currentPath === '/admin/content/media', badge: 'New' },
      ]
    },
    { 
      key: 'settings', 
      label: 'Settings', 
      href: '/admin/settings', 
      icon: Settings,
      isActive: currentPath === '/admin/settings'
    }
  ];

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
          3
        </Badge>
      </Button>
      <Button variant="ghost" size="sm">
        <Avatar className="h-7 w-7">
          <AvatarFallback className="bg-primary/10 text-primary font-medium text-xs">
            AD
          </AvatarFallback>
        </Avatar>
      </Button>
    </div>
  );

  // Logo component with text
  const logo = (
    <div className="flex items-center gap-3">
      <div className="h-8 w-8 bg-accent text-primary-foreground rounded-lg flex items-center justify-center">
        <Shield className="h-5 w-5" />
      </div>
      <span className="text-lg font-bold text-foreground">AdminPanel</span>
    </div>
  );

  // Breadcrumbs
  const breadcrumbs = [
    { label: 'Admin', href: '/admin' },
    { label: 'Dashboard' }
  ];

  // Stats data
  const stats = [
    {
      title: 'Total Users',
      value: '2,350',
      change: '+12%',
      icon: Users,
    },
    {
      title: 'Revenue',
      value: '$45,231',
      change: '+5.1%',
      icon: DollarSign,
    },
    {
      title: 'Orders',
      value: '1,234',
      change: '-2.4%',
      icon: Package,
    },
    {
      title: 'Active Sessions',
      value: '573',
      change: '+8.2%',
      icon: Activity,
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Simple Header */}
      <div className="border-b border-border bg-muted/20">
        <div className="container mx-auto p-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-foreground">Admin Layout Demo</h1>
            <p className="text-lg text-muted-foreground">
              Interactive demonstration of AdminLayout with compound components - NO FLASH VERSION.
            </p>
          </div>
        </div>
      </div>

      {/* COMPOUND-ONLY AdminLayout Demo */}
      <AdminLayout scheme={currentScheme} tone={currentTone} size={currentSize} position='sticky'>
        <AdminLayout.Sidebar 
          navigation={navigation}
          logo={logo}
          position='sticky'
          currentPath={currentPath}
          onNavigate={handleNavigate}
        />
        
        <AdminLayout.Header 
          title="Dashboard"
          breadcrumbs={breadcrumbs}
          actions={headerActions}
        />
        
        <AdminLayout.Content>
          <div className="space-y-8">
            {/* Dashboard Header */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
                <p className="text-muted-foreground">
                  Welcome back! Here's an overview of your admin panel.
                </p>
              </div>
              <Button size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Add New
              </Button>
            </div>

            {/* Interactive Controls */}
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Layout Controls */}
              <Card className="bg-card text-card-foreground border-border">
                <CardHeader>
                  <CardTitle className="text-foreground flex items-center gap-2">
                    <Layout className="h-5 w-5" />
                    Layout Controls
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Scheme Selection */}
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Scheme: {currentScheme}
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {(['sidebar', 'compact'] as const).map((scheme) => (
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
                    <p className="text-xs text-muted-foreground mt-1">
                      {currentScheme === 'sidebar' && 'Full navigation with icons + labels'}
                      {currentScheme === 'compact' && 'Icon-only, click to expand'}
                    </p>
                  </div>

                  {/* Tone Selection */}
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Tone: {currentTone}
                    </label>
                    <div className="grid grid-cols-2 gap-2">
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
                  </div>

                  {/* Size Selection */}
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Sidebar Size: {currentSize}
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {sizes.map((size) => (
                        <Button
                          key={size}
                          variant={currentSize === size ? 'default' : 'outline'}
                          size="sm"
                          onClick={() => setCurrentSize(size)}
                          className="capitalize"
                        >
                          {size}
                        </Button>
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Controls sidebar width and spacing
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Theme Controls */}
              <Card className="bg-card text-card-foreground border-border">
                <CardHeader>
                  <CardTitle className="text-foreground flex items-center gap-2">
                    <Palette className="h-5 w-5" />
                    Theme Controls
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Theme Selection */}
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Theme: {currentTheme}
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {themes.map((theme) => (
                        <Button
                          key={theme}
                          variant={currentTheme === theme ? 'default' : 'outline'}
                          size="sm"
                          onClick={() => handleThemeChange(theme)}
                          className="capitalize"
                        >
                          {theme}
                        </Button>
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Now switches instantly with no flash!
                    </p>
                  </div>

                  {/* Mode Selection */}
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Mode: {currentMode}
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {modes.map((mode) => (
                        <Button
                          key={mode}
                          variant={currentMode === mode ? 'default' : 'outline'}
                          size="sm"
                          onClick={() => handleModeChange(mode as 'light' | 'dark')}
                          className="capitalize"
                        >
                          {mode}
                        </Button>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Current State */}
              <Card className="bg-card text-card-foreground border-border">
                <CardHeader>
                  <CardTitle className="text-foreground flex items-center gap-2">
                    <Settings className="h-5 w-5" />
                    Current State
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="bg-muted/30 p-3 rounded-lg space-y-2">
                    <div className="text-xs text-muted-foreground">
                      <div><strong>Path:</strong> <code className="bg-muted px-1 rounded">{currentPath}</code></div>
                      <div><strong>Scheme:</strong> <code className="bg-muted px-1 rounded">{currentScheme}</code></div>
                      <div><strong>Tone:</strong> <code className="bg-muted px-1 rounded">{currentTone}</code></div>
                      <div><strong>Sidebar Size:</strong> <code className="bg-muted px-1 rounded">{currentSize}</code></div>
                      <div><strong>Theme:</strong> <code className="bg-muted px-1 rounded">{currentTheme}</code></div>
                      <div><strong>Mode:</strong> <code className="bg-muted px-1 rounded">{currentMode}</code></div>
                    </div>
                  </div>
                  
                  <div className="text-xs text-muted-foreground">
                    <p><strong>✅ Fixed:</strong> No more theme flash when switching!</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Stats Grid */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, index) => (
                <Card key={index} className="bg-card text-card-foreground border-border">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-foreground">
                      {stat.title}
                    </CardTitle>
                    <stat.icon className="h-4 w-4 text-primary" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                    <div className="flex items-center pt-1">
                      <Badge variant="default" className="text-xs">
                        {stat.change}
                      </Badge>
                      <span className="text-xs text-muted-foreground ml-2">
                        from last month
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Content Cards */}
            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="bg-card text-card-foreground border-border">
                <CardHeader>
                  <CardTitle className="text-foreground">Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      'John Doe created a new post',
                      'Jane Smith updated user profile',
                      'Bob Johnson published content',
                      'Alice Brown added new product'
                    ].map((activity, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm text-foreground">{activity}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card text-card-foreground border-border">
                <CardHeader>
                  <CardTitle className="text-foreground">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline" className="h-20 flex-col">
                      <Users className="h-6 w-6 mb-2" />
                      Manage Users
                    </Button>
                    <Button variant="outline" className="h-20 flex-col">
                      <FileText className="h-6 w-6 mb-2" />
                      Create Post
                    </Button>
                    <Button variant="outline" className="h-20 flex-col">
                      <BarChart3 className="h-6 w-6 mb-2" />
                      View Reports
                    </Button>
                    <Button variant="outline" className="h-20 flex-col">
                      <Settings className="h-6 w-6 mb-2" />
                      Settings
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* System Status */}
            <Card className="bg-card text-card-foreground border-border">
              <CardHeader>
                <CardTitle className="text-foreground">System Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { name: 'API Server', status: 'healthy', color: 'text-green-600' },
                    { name: 'Database', status: 'healthy', color: 'text-green-600' },
                    { name: 'Background Jobs', status: 'warning', color: 'text-yellow-600' }
                  ].map((service, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                      <span className="text-sm font-medium text-foreground">{service.name}</span>
                      <Badge 
                        variant={service.status === 'healthy' ? 'default' : 'secondary'}
                        className="text-xs"
                      >
                        {service.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </AdminLayout.Content>
      </AdminLayout>
    </div>
  );
}

export default AdminDemo;