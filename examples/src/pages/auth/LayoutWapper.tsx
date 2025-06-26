/**
 * LayoutWrapper Basic Demo - Swap between Auth and Page layouts
 * @module @voilajsx/uikit
 * @file examples/src/pages/wrapper/LayoutWrapperBasicDemo.tsx
 */

import React, { useState } from 'react';
import { LayoutWrapper } from '@voilajsx/uikit/wrapper';
import { Button } from '@voilajsx/uikit/button';
import { Input } from '@voilajsx/uikit/input';
import { Label } from '@voilajsx/uikit/label';
import { Card, CardHeader, CardTitle, CardContent } from '@voilajsx/uikit/card';
import { Badge } from '@voilajsx/uikit/badge';
import { 
  Home, 
  Users, 
  Settings, 
  BarChart3,
  User,
  Eye,
  EyeOff,
  LogOut,
  Menu
} from 'lucide-react';

function LayoutWrapperBasicDemo() {
  // Layout state
  const [currentLayout, setCurrentLayout] = useState('auth');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  // Auth form state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Navigation for PageLayout
  const navigation = [
    {
      key: 'home',
      label: 'Home',
      href: '/',
      icon: Home,
      isActive: true,
    },
    {
      key: 'users',
      label: 'Users',
      href: '/users',
      icon: Users,
      badge: '12',
    },
    {
      key: 'analytics',
      label: 'Analytics',
      icon: BarChart3,
      items: [
        { key: 'overview', label: 'Overview', href: '/analytics' },
        { key: 'reports', label: 'Reports', href: '/analytics/reports' },
      ],
    },
    {
      key: 'settings',
      label: 'Settings',
      href: '/settings',
      icon: Settings,
    },
  ];

  // Handle login
  const handleLogin = () => {
    console.log('Login:', { email, password });
    setIsLoggedIn(true);
    setCurrentLayout('page');
  };

  // Handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentLayout('auth');
    setEmail('');
    setPassword('');
  };

  // Handle navigation
  const handleNavigation = (href, item) => {
    console.log('Navigate to:', href, item);
    if (item.onClick) {
      item.onClick();
    }
  };

  // Auth layout content
  const authContent = (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-foreground">Welcome back</h1>
        <p className="text-muted-foreground">Sign in to your account to continue</p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-foreground">Email address</Label>
          <Input
            id="email"
            type="email"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-background text-foreground border-input"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="password" className="text-foreground">Password</Label>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-background text-foreground border-input pr-10"
            />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 p-0 text-muted-foreground hover:text-foreground"
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        <Button 
          onClick={handleLogin} 
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
        >
          Sign in
        </Button>

        <div className="text-center text-sm">
          <span className="text-muted-foreground">Don't have an account? </span>
          <Button variant="link" className="px-0 text-sm text-primary hover:text-primary/80">
            Sign up
          </Button>
        </div>
      </div>
    </div>
  );

  // Page layout content
  const pageContent = (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back! Here's what's happening with your platform.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-card text-card-foreground border-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-foreground">
              Total Users
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">1,234</div>
            <div className="flex items-center pt-1">
              <Badge variant="default" className="text-xs">
                +12%
              </Badge>
              <span className="text-xs text-muted-foreground ml-2">
                from last month
              </span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card text-card-foreground border-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-foreground">
              Revenue
            </CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">$45,231</div>
            <div className="flex items-center pt-1">
              <Badge variant="default" className="text-xs">
                +5%
              </Badge>
              <span className="text-xs text-muted-foreground ml-2">
                from last month
              </span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card text-card-foreground border-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-foreground">
              Active Sessions
            </CardTitle>
            <User className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">892</div>
            <div className="flex items-center pt-1">
              <Badge variant="secondary" className="text-xs">
                +2%
              </Badge>
              <span className="text-xs text-muted-foreground ml-2">
                from yesterday
              </span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card text-card-foreground border-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-foreground">
              Conversion Rate
            </CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">12.3%</div>
            <div className="flex items-center pt-1">
              <Badge variant="default" className="text-xs">
                +0.5%
              </Badge>
              <span className="text-xs text-muted-foreground ml-2">
                from last week
              </span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-card text-card-foreground border-border">
        <CardHeader>
          <CardTitle className="text-foreground">Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm text-foreground">New user registered</p>
                <p className="text-xs text-muted-foreground">2 minutes ago</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm text-foreground">Payment processed</p>
                <p className="text-xs text-muted-foreground">5 minutes ago</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm text-foreground">Report generated</p>
                <p className="text-xs text-muted-foreground">10 minutes ago</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Controls Panel */}
      <div className="fixed top-4 right-4 z-50 space-y-3">
        <div className="bg-card border border-border rounded-lg p-4 shadow-lg">
          <div className="text-sm font-medium text-foreground mb-3">Layout Controls</div>
          <div className="space-y-2">
            <div className="flex gap-2">
              <Button
                variant={currentLayout === 'auth' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setCurrentLayout('auth')}
                className="text-xs"
              >
                Auth Layout
              </Button>
              <Button
                variant={currentLayout === 'page' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setCurrentLayout('page')}
                className="text-xs"
              >
                Page Layout
              </Button>
            </div>
            {isLoggedIn && (
              <Button
                variant="outline"
                size="sm"
                onClick={handleLogout}
                className="w-full text-xs text-destructive hover:text-destructive"
              >
                <LogOut className="h-3 w-3 mr-1" />
                Logout
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* LayoutWrapper automatically switches between layouts */}
      <LayoutWrapper 
        layout={currentLayout}
        navigation={currentLayout === 'page' ? navigation : undefined}
        overrides={{
          title: currentLayout === 'auth' ? 'Welcome' : 'Dashboard',
          theme: 'default',
          mode: 'light',
          detectSystem: true,
          
          // Auth layout specific
          authLayout: {
            scheme: 'card',
            tone: 'clean',
            size: 'md',
          },
          
          // Page layout specific  
          pageLayout: {
            scheme: 'default',
            tone: 'clean',
            size: 'xl',
            position: 'sticky',
          },
        }}
      >
        {currentLayout === 'auth' ? authContent : pageContent}
      </LayoutWrapper>
    </div>
  );
}

export default LayoutWrapperBasicDemo;