/**
 * Interactive testing layout for simplified Header component
 * @module @voilajsx/uikit
 * @file src/components/TestingLayout.jsx
 */

import React, { useState } from 'react';
import { Header } from '@voilajsx/uikit/header';
import { Button } from '@voilajsx/uikit/button';
import { Card, CardHeader, CardTitle, CardContent } from '@voilajsx/uikit/card';
import { Badge } from '@voilajsx/uikit/badge';
import { useTheme } from '@voilajsx/uikit/theme-provider';
import ThemeSwitcher from '../components/ThemeSwitcher';
import CodeBlock from '../components/CodeBlock';
import { 
  Home, 
  Puzzle, 
  BookOpen,
  Sparkles,
  Settings,
  Code2,
  Eye,
  Package,
  Layers,
  FileText,
  Users,
  Globe,
  Smartphone,
  Monitor,
  Palette
} from 'lucide-react';

function TestingLayout() {
  const { theme, variant, setTheme, toggleVariant } = useTheme();

  // Header configuration state
  const [headerConfig, setHeaderConfig] = useState({
    variant: 'primary',
    width: 'xl',
    height: 'default',
    sticky: true,
    navType: 'basic'
  });

  // Navigation items configurations
  const basicNavItems = [
    { 
      key: 'home',
      label: 'Home', 
      icon: Home,
      isActive: true,
      onClick: () => console.log('Home clicked') 
    },
    { 
      key: 'components',
      label: 'Components', 
      icon: Puzzle, 
      onClick: () => console.log('Components clicked') 
    },
    { 
      key: 'docs',
      label: 'Docs', 
      icon: BookOpen, 
      onClick: () => console.log('Docs clicked') 
    }
  ];

  const multilevelNavItems = [
    { 
      key: 'home',
      label: 'Home', 
      icon: Home,
      isActive: true,
      onClick: () => console.log('Home clicked') 
    },
    { 
      key: 'products',
      label: 'Products',
      icon: Package,
      items: [
        { 
          key: 'web-apps',
          label: 'Web Apps', 
          icon: Globe, 
          onClick: () => console.log('Web Apps clicked') 
        },
        { 
          key: 'mobile-apps',
          label: 'Mobile Apps', 
          icon: Smartphone, 
          onClick: () => console.log('Mobile Apps clicked') 
        },
        { 
          key: 'desktop-apps',
          label: 'Desktop Apps', 
          icon: Monitor, 
          onClick: () => console.log('Desktop Apps clicked') 
        }
      ]
    },
    {
      key: 'services',
      label: 'Services',
      icon: Layers,
      items: [
        { 
          key: 'consulting',
          label: 'Consulting', 
          icon: Users, 
          onClick: () => console.log('Consulting clicked') 
        },
        { 
          key: 'development',
          label: 'Development', 
          icon: Code2, 
          onClick: () => console.log('Development clicked') 
        },
        { 
          key: 'support',
          label: 'Support', 
          icon: Users, 
          onClick: () => console.log('Support clicked') 
        }
      ]
    },
    { 
      key: 'docs',
      label: 'Docs', 
      icon: FileText, 
      onClick: () => console.log('Docs clicked') 
    }
  ];

  // Get current navigation items
  const getCurrentNavItems = () => {
    return headerConfig.navType === 'basic' ? basicNavItems : multilevelNavItems;
  };

  // Generate code example
  const generateCodeExample = () => {
    const navItems = headerConfig.navType === 'basic' ? 'basicNavItems' : 'multilevelNavItems';
    
    return `import { Header } from '@voilajsx/uikit/header';
import { Badge } from '@voilajsx/uikit/badge';
import { Sparkles, Home, Package, /* other icons */ } from 'lucide-react';

// Navigation items
const ${navItems} = ${JSON.stringify(getCurrentNavItems(), null, 2).replace(/"icon":\s*"[^"]*"/g, '"icon": IconName')};

function MyHeader() {
  return (
    <Header 
      variant="${headerConfig.variant}" 
      width="${headerConfig.width}" 
      height="${headerConfig.height}" 
      sticky={${headerConfig.sticky}}
    >
      <Header.Logo>
        <div className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer">
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center">
            <Sparkles className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="text-xl font-semibold">voilajsx</span>
          <Badge variant="secondary" className="text-xs">UI</Badge>
        </div>
      </Header.Logo>
      
      <Header.Nav items={${navItems}} />
    </Header>
  );
}`;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Actual Header Component */}
      <Header 
        variant={headerConfig.variant}
        width={headerConfig.width}
        height={headerConfig.height}
        sticky={headerConfig.sticky}
      >
        <Header.Logo>
          <div className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center">
              <Sparkles className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="text-xl font-semibold">voilajsx</span>
            <Badge variant="secondary" className="text-xs">UI</Badge>
          </div>
        </Header.Logo>
        
        <Header.Nav items={getCurrentNavItems()} />
      </Header>

      {/* Main Content */}
      <div className="p-8 max-w-6xl mx-auto space-y-8">
        {/* Title */}
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Eye className="h-6 w-6 text-primary" />
            <h1 className="text-3xl font-bold">Header Component Playground</h1>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Test the simplified Header component with Logo (left) and Navigation (right).
          </p>
        </div>

        {/* Theme Selector Card */}
        <Card  className="border-0 shadow-sm ">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Palette className="h-5 w-5" />
              Theme Selector
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-2">
                  Test how the header looks across different themes and variants
                </p>
                <p className="text-xs text-muted-foreground">
                  Current theme: <Badge variant="secondary" className="ml-1">{theme}</Badge>
                </p>
              </div>
              <ThemeSwitcher variant="primary"/>
            </div>
          </CardContent>
        </Card>

        {/* Configuration Panel */}
        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              Header Configuration
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Variant Control */}
              <div className="space-y-3">
                <label className="text-sm font-semibold">Header Variant</label>
                <select
                  value={headerConfig.variant}
                  onChange={(e) => setHeaderConfig(prev => ({ ...prev, variant: e.target.value }))}
                  className="w-full border rounded px-3 py-2 text-sm bg-background"
                >
                  <option value="default">Default</option>
                  <option value="primary">Primary</option>
                  <option value="black">Black</option>
                </select>
              </div>

              {/* Width Control */}
              <div className="space-y-3">
                <label className="text-sm font-semibold">Header Width</label>
                <select
                  value={headerConfig.width}
                  onChange={(e) => setHeaderConfig(prev => ({ ...prev, width: e.target.value }))}
                  className="w-full border rounded px-3 py-2 text-sm bg-background"
                >
                  <option value="sm">Small</option>
                  <option value="md">Medium</option>
                  <option value="lg">Large</option>
                  <option value="xl">X-Large</option>
                  <option value="full">Full Width</option>
                </select>
              </div>

              {/* Height Control */}
              <div className="space-y-3">
                <label className="text-sm font-semibold">Header Height</label>
                <select
                  value={headerConfig.height}
                  onChange={(e) => setHeaderConfig(prev => ({ ...prev, height: e.target.value }))}
                  className="w-full border rounded px-3 py-2 text-sm bg-background"
                >
                  <option value="sm">Small</option>
                  <option value="default">Default</option>
                  <option value="lg">Large</option>
                </select>
              </div>

              {/* Sticky Control */}
              <div className="space-y-3">
                <label className="text-sm font-semibold">Position</label>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="sticky"
                    checked={headerConfig.sticky}
                    onChange={(e) => setHeaderConfig(prev => ({ ...prev, sticky: e.target.checked }))}
                  />
                  <label htmlFor="sticky" className="text-sm">Sticky Header</label>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation Type Selection */}
        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Layers className="h-5 w-5" />
              Navigation Type
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    id="basic"
                    name="navType"
                    value="basic"
                    checked={headerConfig.navType === 'basic'}
                    onChange={(e) => setHeaderConfig(prev => ({ ...prev, navType: e.target.value }))}
                  />
                  <label htmlFor="basic" className="text-sm font-semibold">Basic Navigation</label>
                  <Badge variant="secondary" className="text-xs">Simple Items</Badge>
                </div>
                <p className="text-xs text-muted-foreground pl-6">
                  Simple navigation with flat menu items
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    id="multilevel"
                    name="navType"
                    value="multilevel"
                    checked={headerConfig.navType === 'multilevel'}
                    onChange={(e) => setHeaderConfig(prev => ({ ...prev, navType: e.target.value }))}
                  />
                  <label htmlFor="multilevel" className="text-sm font-semibold">Multilevel Navigation</label>
                  <Badge variant="secondary" className="text-xs">Dropdown Menus</Badge>
                </div>
                <p className="text-xs text-muted-foreground pl-6">
                  Navigation with dropdown submenu items
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Generated Code */}
        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code2 className="h-5 w-5" />
              Generated Code
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CodeBlock 
              code={generateCodeExample()} 
              title="Simplified Header Component Usage"
              language="tsx"
            />
          </CardContent>
        </Card>

        {/* Features Overview */}
        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle>Simplified Header Features</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">✅ What's Included</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Logo section (always left)</li>
                  <li>• Navigation (always right)</li>
                  <li>• Responsive mobile menu</li>
                  <li>• Dropdown submenus</li>
                  <li>• Theme variants</li>
                  <li>• Sticky positioning</li>
                  <li>• Active states</li>
                  <li>• Icon support</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">🗑️ What's Removed</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Search section</li>
                  <li>• Actions section</li>
                  <li>• Center section</li>
                  <li>• Left/Right sections</li>
                  <li>• Complex layout decisions</li>
                  <li>• Multiple positioning options</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Sample Content for Scrolling */}
        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle>Sample Content</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              This content demonstrates header behavior. Scroll to test sticky positioning.
            </p>
            
            <div className="space-y-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="p-6 border rounded">
                  <h4 className="font-semibold mb-2">Content Block {i}</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Sample content for testing header behavior during scrolling. The header should remain at the top when sticky is enabled.
                  </p>
                  <div className="flex gap-2">
                    <Badge variant="outline">Block {i}</Badge>
                    <Badge variant="secondary">Test Content</Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default TestingLayout;