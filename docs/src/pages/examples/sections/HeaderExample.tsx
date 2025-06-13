/**
 * Interactive Header component demo
 * @module @voilajsx/uikit
 * @file src/pages/examples/sections/HeaderExample.tsx
 */

import React, { useState } from 'react';
import { Header } from '@voilajsx/uikit/header';
import { Button } from '@voilajsx/uikit/button';
import { Card, CardHeader, CardTitle, CardContent } from '@voilajsx/uikit/card';
import { Badge } from '@voilajsx/uikit/badge';
import { useTheme } from '@voilajsx/uikit/theme-provider';
import ThemeSwitcher from '../../../components/ThemeSwitcher';
import CodeBlock from '../../../components/CodeBlock';
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
  Palette,
  Zap
} from 'lucide-react';

function HeaderExample() {
  const { theme } = useTheme();

  // Header configuration state
  const [headerConfig, setHeaderConfig] = useState({
    variant: 'primary',
    size: 'xl',
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
import { Sparkles, Home, Package } from 'lucide-react';

// Navigation items
const ${navItems} = [
  { 
    key: 'home',
    label: 'Home', 
    icon: Home,
    isActive: true,
    onClick: () => navigate('/') 
  },
  { 
    key: 'components',
    label: 'Components', 
    icon: Package,
    ${headerConfig.navType === 'multilevel' ? `items: [
      { key: 'buttons', label: 'Buttons', onClick: () => navigate('/components/buttons') },
      { key: 'forms', label: 'Forms', onClick: () => navigate('/components/forms') }
    ]` : 'onClick: () => navigate(\'/components\')'} 
  }
];

function MyHeader() {
  return (
    <Header 
      variant="${headerConfig.variant}" 
      size="${headerConfig.size}" 
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
      {/* Live Header Component */}
      <Header 
        variant={headerConfig.variant}
        size={headerConfig.size}
        sticky={headerConfig.sticky}
      >
        <Header.Logo>
          <a href="/">
            <div className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center">
                <Sparkles className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="text-xl font-semibold">voilajsx</span>
              <Badge variant="secondary" className="text-xs">UI</Badge>
            </div>
          </a>
        </Header.Logo>
        
        <Header.Nav items={getCurrentNavItems()} />
      </Header>

      {/* Main Content */}
      <div className="p-8 max-w-6xl mx-auto space-y-8">
        {/* Title */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Zap className="h-6 w-6 text-primary" />
            <h1 className="text-3xl text-foreground font-bold">Header Component Interactive Demo</h1>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore the Header component with Logo on the left and Navigation on the right. 
            Test different configurations and see real-time changes.
          </p>
        </div>

        {/* Theme Selector */}
        <Card className="border-0 shadow-sm">
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
                  Test how the header adapts to different themes and color schemes
                </p>
                <p className="text-xs text-muted-foreground">
                  Current theme: <Badge variant="secondary" className="ml-1">{theme}</Badge>
                </p>
              </div>
              <ThemeSwitcher />
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
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
                <p className="text-xs text-muted-foreground">
                  Controls the header's background color and styling
                </p>
              </div>

              {/* Size Control */}
              <div className="space-y-3">
                <label className="text-sm font-semibold">Header Size</label>
                <select
                  value={headerConfig.size}
                  onChange={(e) => setHeaderConfig(prev => ({ ...prev, size: e.target.value }))}
                  className="w-full border rounded px-3 py-2 text-sm bg-background"
                >
                  <option value="sm">Small</option>
                  <option value="md">Medium</option>
                  <option value="lg">Large</option>
                  <option value="xl">X-Large</option>
                  <option value="full">Full Width</option>
                </select>
                <p className="text-xs text-muted-foreground">
                  Controls width, height, and padding together
                </p>
              </div>

              {/* Sticky Control */}
              <div className="space-y-3">
                <label className="text-sm font-semibold">Position</label>
                <div className="flex items-center space-x-3 p-3 border rounded">
                  <input
                    type="checkbox"
                    id="sticky"
                    checked={headerConfig.sticky}
                    onChange={(e) => setHeaderConfig(prev => ({ ...prev, sticky: e.target.checked }))}
                    className="w-4 h-4"
                  />
                  <label htmlFor="sticky" className="text-sm">Sticky Header</label>
                </div>
                <p className="text-xs text-muted-foreground">
                  Header stays at top when scrolling
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation Type */}
        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Layers className="h-5 w-5" />
              Navigation Style
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
                  <Badge variant="secondary" className="text-xs">Simple</Badge>
                </div>
                <p className="text-xs text-muted-foreground pl-6">
                  Flat navigation menu with simple click actions
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
                  <label htmlFor="multilevel" className="text-sm font-semibold">Dropdown Navigation</label>
                  <Badge variant="secondary" className="text-xs">Advanced</Badge>
                </div>
                <p className="text-xs text-muted-foreground pl-6">
                  Multi-level navigation with hover dropdowns
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
              title="Header Component Implementation"
              language="tsx"
            />
          </CardContent>
        </Card>

        {/* Features */}
        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle>Header Features</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">🎯 Core Features</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                    Logo section (left aligned)
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                    Navigation menu (right aligned)
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                    Responsive mobile menu
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                    Dropdown submenus
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                    Theme variants
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                    Sticky positioning
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">⚙️ Configuration</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                    Multiple size options
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                    Color variants (default, primary, black)
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                    Flexible sticky behavior
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                    Icon support
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                    Active state handling
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                    Custom click handlers
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Sample Content */}
        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle>Sample Content</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6">
              Scroll through this content to test the sticky header behavior. 
              When sticky is enabled, the header will remain fixed at the top.
            </p>
            
            <div className="space-y-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="p-6 border rounded-lg">
                  <h4 className="font-semibold mb-3">Content Section {i}</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    This is sample content to demonstrate scrolling behavior. The header configuration above 
                    will affect how the header behaves when you scroll through this content. Try toggling 
                    the sticky option to see the difference.
                  </p>
                  <div className="flex gap-2">
                    <Badge variant="outline">Section {i}</Badge>
                    <Badge variant="secondary">Sample Content</Badge>
                    {headerConfig.sticky && <Badge variant="default">Sticky Active</Badge>}
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

export default HeaderExample;