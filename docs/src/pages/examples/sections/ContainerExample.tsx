/**
 * Interactive Container component demo
 * @module @voilajsx/uikit
 * @file src/pages/examples/sections/ContainerExample.tsx
 */

import React, { useState } from 'react';
import { Header } from '@voilajsx/uikit/header';
import { Container } from '@voilajsx/uikit/container';
import { Button } from '@voilajsx/uikit/button';
import { Card, CardHeader, CardTitle, CardContent } from '@voilajsx/uikit/card';
import { Badge } from '@voilajsx/uikit/badge';
import { useTheme } from '@voilajsx/uikit/theme-provider';
import { 
  Sparkles,
  Clock,
  CheckCircle,
  Layout,
  ArrowLeft,
  ArrowRight,
  Minimize,
  Settings,
  BarChart3,
  Users,
  Home,
  FileText,
  Globe,
  Database,
  ShoppingCart,
  MessageCircle,
  Bell,
  Search,
  Zap,
  Box,
  Code2,
  TrendingUp,
  Star,
  Calendar,
  Mail,
  Pin,
  PinOff,
  Shield,
  HelpCircle,
  UserPlus,
  UserCheck,
  Activity,
  Eye,
  Palette
} from 'lucide-react';
import ThemeSwitcher from '../../../components/ThemeSwitcher';
import CodeBlock from '../../../components/CodeBlock';

function ContainerExample() {
  const { theme } = useTheme();

  // Container configuration state with simplified props
  const [containerConfig, setContainerConfig] = useState({
    variant: 'default',
    sidebar: 'left',
    sidebarSticky: false,
    size: 'xl',
    contentType: 'navigation'
  });

  // Enhanced navigation items with collapsible sections
  const navigationItems = [
    { 
      key: 'dashboard',
      label: 'Dashboard', 
      icon: Home,
      isActive: true,
      onClick: () => console.log('Dashboard clicked') 
    },
    { 
      key: 'analytics',
      label: 'Analytics & Reports', 
      icon: BarChart3,
      badge: 'New',
      onClick: () => console.log('Analytics clicked'),
      items: [
        { 
          key: 'reports', 
          label: 'Sales Reports', 
          icon: FileText,
          onClick: () => console.log('Reports clicked')
        },
        { 
          key: 'metrics', 
          label: 'Performance Metrics', 
          icon: TrendingUp,
          onClick: () => console.log('Metrics clicked')
        },
        { 
          key: 'insights', 
          label: 'Business Insights', 
          icon: Star,
          onClick: () => console.log('Insights clicked')
        },
        { 
          key: 'activity', 
          label: 'User Activity', 
          icon: Activity,
          onClick: () => console.log('Activity clicked')
        }
      ]
    },
    { 
      key: 'users',
      label: 'User Management', 
      icon: Users,
      badge: '1.2k',
      onClick: () => console.log('Users clicked'),
      items: [
        { 
          key: 'all-users', 
          label: 'All Users', 
          icon: Users,
          onClick: () => console.log('All users clicked')
        },
        { 
          key: 'add-user', 
          label: 'Add New User', 
          icon: UserPlus,
          onClick: () => console.log('Add user clicked')
        },
        { 
          key: 'user-roles', 
          label: 'User Roles', 
          icon: Shield,
          onClick: () => console.log('User roles clicked')
        },
        { 
          key: 'permissions', 
          label: 'Permissions', 
          icon: UserCheck,
          onClick: () => console.log('Permissions clicked')
        }
      ]
    },
    { 
      key: 'orders',
      label: 'Orders', 
      icon: ShoppingCart,
      badge: '12',
      onClick: () => console.log('Orders clicked'),
      items: [
        { 
          key: 'pending-orders', 
          label: 'Pending Orders', 
          icon: Clock,
          onClick: () => console.log('Pending orders clicked')
        },
        { 
          key: 'completed-orders', 
          label: 'Completed Orders', 
          icon: CheckCircle,
          onClick: () => console.log('Completed orders clicked')
        }
      ]
    },
    { 
      key: 'content',
      label: 'Content Management', 
      icon: FileText,
      onClick: () => console.log('Content clicked'),
      items: [
        { 
          key: 'pages', 
          label: 'Pages', 
          icon: Globe,
          onClick: () => console.log('Pages clicked')
        },
        { 
          key: 'media', 
          label: 'Media Library', 
          icon: Database,
          onClick: () => console.log('Media clicked')
        },
        { 
          key: 'blog', 
          label: 'Blog Posts', 
          icon: FileText,
          onClick: () => console.log('Blog clicked')
        }
      ]
    },
    { 
      key: 'settings',
      label: 'Settings', 
      icon: Settings,
      onClick: () => console.log('Settings clicked'),
      items: [
        { 
          key: 'general', 
          label: 'General Settings', 
          icon: Settings,
          onClick: () => console.log('General settings clicked')
        },
        { 
          key: 'security', 
          label: 'Security', 
          icon: Shield,
          onClick: () => console.log('Security clicked')
        },
        { 
          key: 'integrations', 
          label: 'Integrations', 
          icon: Zap,
          onClick: () => console.log('Integrations clicked')
        }
      ]
    },
    { 
      key: 'help',
      label: 'Help & Support', 
      icon: HelpCircle,
      onClick: () => console.log('Help clicked'),
      items: [
        { 
          key: 'documentation', 
          label: 'Documentation', 
          icon: FileText,
          onClick: () => console.log('Documentation clicked')
        },
        { 
          key: 'contact', 
          label: 'Contact Support', 
          icon: MessageCircle,
          onClick: () => console.log('Contact clicked')
        }
      ]
    }
  ];

  // Custom sidebar content
  const customSidebarContent = (
    <div className="space-y-6">
      <div className="space-y-3">
        <h3 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">
          Quick Actions
        </h3>
        <div className="space-y-2">
          <Button variant="outline" className="w-full justify-start">
            <Bell className="h-4 w-4 mr-3" />
            Notifications
            <Badge variant="destructive" className="ml-auto text-xs">3</Badge>
          </Button>
          <Button variant="outline" className="w-full justify-start">
            <MessageCircle className="h-4 w-4 mr-3" />
            Messages
            <Badge variant="secondary" className="ml-auto text-xs">12</Badge>
          </Button>
          <Button variant="outline" className="w-full justify-start">
            <Search className="h-4 w-4 mr-3" />
            Quick Search
          </Button>
        </div>
      </div>
      
      <Card className="border-0 bg-primary/5 border-primary/20">
        <CardContent className="p-4">
          <div className="space-y-2">
            <h4 className="font-medium text-primary">System Status</h4>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span>Server</span>
                <Badge variant="default" className="text-xs">Online</Badge>
              </div>
              <div className="flex justify-between">
                <span>Database</span>
                <Badge variant="default" className="text-xs">Healthy</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-3">
        <h3 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">
          Recent Activity
        </h3>
        <div className="space-y-3 text-sm">
          <div className="flex items-start gap-3">
            <Calendar className="h-4 w-4 mt-0.5 text-muted-foreground" />
            <div>
              <p className="font-medium">Meeting scheduled</p>
              <p className="text-muted-foreground text-xs">2 minutes ago</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Mail className="h-4 w-4 mt-0.5 text-muted-foreground" />
            <div>
              <p className="font-medium">New email received</p>
              <p className="text-muted-foreground text-xs">5 minutes ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Get current sidebar content
  const getCurrentSidebarContent = () => {
    if (containerConfig.sidebar === 'none') return null;
    
    switch (containerConfig.contentType) {
      case 'navigation':
        return navigationItems;
      case 'custom':
        return customSidebarContent;
      default:
        return navigationItems;
    }
  };

  // Generate code example with simplified props
  const generateCodeExample = () => {
    return `import { Container } from '@voilajsx/uikit/container';
import { Home, Users, Settings } from 'lucide-react';

// Navigation items with collapsible subitems
const navigationItems = [
  { 
    key: 'dashboard',
    label: 'Dashboard', 
    icon: Home,
    isActive: true,
    onClick: () => navigate('/dashboard') 
  },
  { 
    key: 'users',
    label: 'User Management', 
    icon: Users,
    badge: '1.2k',
    onClick: () => navigate('/users'),
    items: [
      { 
        key: 'all-users', 
        label: 'All Users', 
        icon: Users,
        onClick: () => navigate('/users') 
      },
      { 
        key: 'add-user', 
        label: 'Add User', 
        icon: UserPlus,
        onClick: () => navigate('/users/add') 
      }
    ]
  },
  { 
    key: 'settings',
    label: 'Settings', 
    icon: Settings,
    onClick: () => navigate('/settings')
  }
];

function MyLayout() {
  return (
    <Container 
      variant="${containerConfig.variant}"
      sidebar="${containerConfig.sidebar}" 
      sidebarContent={${containerConfig.contentType === 'navigation' ? 'navigationItems' : 'customJSXContent'}}
      sidebarSticky={${containerConfig.sidebarSticky}}
      size="${containerConfig.size}"
    >
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Main Content</h1>
        <p>Your application content goes here...</p>
      </div>
    </Container>
  );
}`;
  };

  // Demo content component
  const DemoContent = () => (
    <div className="space-y-8">
      {/* Title */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Eye className="h-6 w-6 text-primary" />
          <h1 className="text-3xl font-bold">Container Component Interactive Demo</h1>
        </div>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore the Container component with sidebar layouts, sticky positioning, and collapsible navigation. 
          Configure different options and see real-time changes.
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
                Test how the container adapts to different themes and color schemes
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
            Container Configuration
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Variant Control */}
            <div className="space-y-3">
              <label className="text-sm font-semibold">Container Variant</label>
              <select
                value={containerConfig.variant}
                onChange={(e) => setContainerConfig(prev => ({ ...prev, variant: e.target.value }))}
                className="w-full border rounded px-3 py-2 text-sm bg-background"
              >
                <option value="default">Default</option>
                <option value="contained">Contained</option>
                <option value="minimal">Minimal</option>
              </select>
              <p className="text-xs text-muted-foreground">
                Controls the container's background and styling
              </p>
            </div>

            {/* Sidebar Control */}
            <div className="space-y-3">
              <label className="text-sm font-semibold">Sidebar Position</label>
              <select
                value={containerConfig.sidebar}
                onChange={(e) => setContainerConfig(prev => ({ ...prev, sidebar: e.target.value }))}
                className="w-full border rounded px-3 py-2 text-sm bg-background"
              >
                <option value="none">No Sidebar</option>
                <option value="left">Left Sidebar</option>
                <option value="right">Right Sidebar</option>
              </select>
              <p className="text-xs text-muted-foreground">
                Position of the sidebar relative to main content
              </p>
            </div>

            {/* Size Control */}
            <div className="space-y-3">
              <label className="text-sm font-semibold">Container Size</label>
              <select
                value={containerConfig.size}
                onChange={(e) => setContainerConfig(prev => ({ ...prev, size: e.target.value }))}
                className="w-full border rounded px-3 py-2 text-sm bg-background"
              >
                <option value="sm">Small</option>
                <option value="md">Medium</option>
                <option value="lg">Large</option>
                <option value="xl">X-Large</option>
                <option value="full">Full Width</option>
              </select>
              <p className="text-xs text-muted-foreground">
                Controls width, sidebar size, and padding together
              </p>
            </div>

            {/* Sticky Control */}
            <div className="space-y-3">
              <label className="text-sm font-semibold">Sidebar Behavior</label>
              <div className="flex items-center space-x-3 p-3 border rounded">
                <input
                  type="checkbox"
                  id="sidebarSticky"
                  checked={containerConfig.sidebarSticky}
                  onChange={(e) => setContainerConfig(prev => ({ ...prev, sidebarSticky: e.target.checked }))}
                  className="w-4 h-4"
                />
                <label htmlFor="sidebarSticky" className="text-sm">Sticky Sidebar</label>
              </div>
              <p className="text-xs text-muted-foreground">
                Sidebar stays fixed while scrolling main content
              </p>
            </div>

            {/* Content Type */}
            <div className="space-y-3">
              <label className="text-sm font-semibold">Sidebar Content</label>
              <select
                value={containerConfig.contentType}
                onChange={(e) => setContainerConfig(prev => ({ ...prev, contentType: e.target.value }))}
                className="w-full border rounded px-3 py-2 text-sm bg-background"
              >
                <option value="navigation">Navigation Array</option>
                <option value="custom">Custom JSX</option>
              </select>
              <p className="text-xs text-muted-foreground">
                Type of content to display in the sidebar
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Current Configuration Display */}
      <Card className="border-0 bg-primary/5 border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Box className="h-5 w-5 text-primary" />
            Current Configuration
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <div className="space-y-1">
              <p className="text-sm font-medium">Variant:</p>
              <Badge variant="default">{containerConfig.variant}</Badge>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium">Sidebar:</p>
              <Badge variant="secondary">{containerConfig.sidebar}</Badge>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium">Size:</p>
              <Badge variant="outline">{containerConfig.size}</Badge>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium">Sticky:</p>
              <Badge variant={containerConfig.sidebarSticky ? "default" : "outline"}>
                {containerConfig.sidebarSticky ? "Fixed" : "Normal"}
              </Badge>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium">Content:</p>
              <Badge variant="outline">{containerConfig.contentType}</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Features Highlight */}
      <Card className="border-0 shadow-sm">
        <CardHeader>
          <CardTitle>Container Features</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">🎯 Layout Options</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                  Flexible sidebar positioning (left, right, none)
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                  Collapsible navigation with smooth animations
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                  Sticky sidebar option for long content
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                  Responsive design (mobile stacking)
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                  Intelligent content rendering
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">⚙️ Configuration</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                  Single size prop (controls everything)
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                  Multiple variant styles
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                  Array or JSX content support
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                  Theme integration
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                  Compound component pattern
                </li>
              </ul>
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
            title="Container Component Implementation"
            language="tsx"
          />
        </CardContent>
      </Card>

      {/* Sample Content for Scroll Testing */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Sample Main Content</h3>
          {containerConfig.sidebarSticky && (
            <Badge variant="default" className="text-xs">
              📌 Sticky enabled - scroll to test!
            </Badge>
          )}
        </div>
        
        <p className="text-muted-foreground text-sm">
          {containerConfig.sidebarSticky 
            ? "🔒 Sticky sidebar is enabled - the sidebar will stay fixed while you scroll through this content on desktop."
            : "📜 Normal sidebar behavior - the sidebar will scroll along with this content."
          }
          {' '}The current configuration uses <strong>{containerConfig.size}</strong> size with <strong>{containerConfig.variant}</strong> variant.
          {containerConfig.contentType === 'navigation' && 
            ' Try expanding/collapsing navigation items in the sidebar!'
          }
        </p>
        
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <Card key={i} className="border-0 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <h4 className="font-semibold mb-2">Content Section {i}</h4>
              <p className="text-sm text-muted-foreground mb-4">
                This demonstrates the main content area with the current configuration. 
                The sidebar is positioned on the <strong>{containerConfig.sidebar}</strong> with <strong>{containerConfig.size}</strong> size
                and {containerConfig.sidebarSticky ? 'sticky' : 'normal'} behavior.
                The navigation features collapsible subitems with smooth animations and persistent state.
                On mobile devices, the sidebar will stack above this content for better usability.
                {containerConfig.sidebarSticky && ' Try scrolling to see the sticky sidebar in action on desktop!'}
              </p>
              <div className="flex gap-2 flex-wrap">
                <Badge variant="outline">Section {i}</Badge>
                <Badge variant="secondary">{containerConfig.sidebar}</Badge>
                <Badge variant="outline">{containerConfig.size}</Badge>
                <Badge variant={containerConfig.sidebarSticky ? "default" : "secondary"}>
                  {containerConfig.sidebarSticky ? 'Sticky' : 'Normal'}
                </Badge>
                <Badge variant="secondary">{containerConfig.contentType}</Badge>
                {containerConfig.contentType === 'navigation' && (
                  <Badge variant="default" className="text-xs">🔄 Collapsible</Badge>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Container with Simplified API */}
      <Container 
        variant={containerConfig.variant}
        sidebar={containerConfig.sidebar}
        sidebarContent={getCurrentSidebarContent()}
        sidebarSticky={containerConfig.sidebarSticky}
        size={containerConfig.size}
      >
        <div className="py-8">
          <DemoContent />
        </div>
      </Container>
    </div>
  );
}

export default ContainerExample;