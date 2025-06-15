/**
 * Interactive Page Layout component demo with prop drilling - CORRECTED
 * @module @voilajsx/uikit
 * @file src/pages/examples/PageLayoutExample.jsx
 */

import React, { useState } from 'react';
import { PageLayout as Page } from '@voilajsx/uikit/page';
import { Footer } from '@voilajsx/uikit/footer';
import { Button } from '@voilajsx/uikit/button';
import { Input } from '@voilajsx/uikit/input';
import { Card, CardHeader, CardTitle, CardContent } from '@voilajsx/uikit/card';
import { Badge } from '@voilajsx/uikit/badge';
import { useTheme } from '@voilajsx/uikit/theme-provider';
import ThemeSwitcher from '../../../components/ThemeSwitcher';
import CodeBlock from '../../../components/CodeBlock';
import { 
  Sparkles,
  Settings,
  Code2,
  Eye,
  Palette,
  Github,
  Twitter,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Grid3x3,
  Layers,
  Home,
  Users,
  FileText,
  BarChart3,
  Shield,
  HelpCircle,
  Zap,
  Bell,
  Search,
  User,
  Layout,
  Globe,
  Smartphone,
  Monitor,
  Facebook,
  Instagram,
  Youtube,
  MessageCircle,
  Star,
  TrendingUp,
  Package,
  ShoppingCart,
  Calendar,
  Activity
} from 'lucide-react';

function PageLayoutExample() {
  const { theme } = useTheme();

  // Page configuration state
  const [pageConfig, setPageConfig] = useState({
    variant: 'default',
    size: 'xl',
    headerVariant: 'primary',
    headerSticky: true,
    footerVariant: 'default',
    footerLayout: 'advanced'
  });

  // Header navigation items
  const headerNavItems = [
    { 
      key: 'home',
      label: 'Home', 
      icon: Home,
      isActive: true,
      onClick: () => console.log('Home clicked') 
    },
    { 
      key: 'features',
      label: 'Features',
      icon: Zap,
      items: [
        { 
          key: 'components',
          label: 'Components', 
          icon: Package,
          onClick: () => console.log('Components clicked') 
        },
        { 
          key: 'templates',
          label: 'Templates', 
          icon: Layout,
          onClick: () => console.log('Templates clicked') 
        },
        { 
          key: 'themes',
          label: 'Themes', 
          icon: Palette,
          onClick: () => console.log('Themes clicked') 
        }
      ]
    },
    { 
      key: 'solutions',
      label: 'Solutions',
      icon: Grid3x3,
      items: [
        { 
          key: 'ecommerce',
          label: 'E-commerce', 
          icon: ShoppingCart,
          onClick: () => console.log('E-commerce clicked') 
        },
        { 
          key: 'analytics',
          label: 'Analytics', 
          icon: BarChart3,
          onClick: () => console.log('Analytics clicked') 
        },
        { 
          key: 'cms',
          label: 'Content Management', 
          icon: FileText,
          onClick: () => console.log('CMS clicked') 
        }
      ]
    },
    { 
      key: 'pricing',
      label: 'Pricing', 
      icon: Star,
      onClick: () => console.log('Pricing clicked') 
    },
    { 
      key: 'docs',
      label: 'Docs', 
      icon: FileText,
      onClick: () => console.log('Docs clicked') 
    }
  ];

  // Logo component
  const logo = (
    <div className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer">
      <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center">
        <Sparkles className="h-4 w-4 text-primary-foreground" />
      </div>
      <span className="text-xl font-semibold">voilajsx</span>
      <Badge variant="secondary" className="text-xs">UI</Badge>
    </div>
  );

  // Footer content configurations
  const footerColumns = [
    {
      title: 'Product',
      links: [
        { label: 'Features', onClick: () => console.log('Features') },
        { label: 'Components', onClick: () => console.log('Components') },
        { label: 'Templates', onClick: () => console.log('Templates') },
        { label: 'Pricing', onClick: () => console.log('Pricing') },
        { label: 'Documentation', onClick: () => console.log('Docs') }
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', onClick: () => console.log('About') },
        { label: 'Careers', onClick: () => console.log('Careers') },
        { label: 'Blog', onClick: () => console.log('Blog') },
        { label: 'Press Kit', onClick: () => console.log('Press') },
        { label: 'Contact', onClick: () => console.log('Contact') }
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Community', onClick: () => console.log('Community') },
        { label: 'Help Center', onClick: () => console.log('Help') },
        { label: 'API Reference', onClick: () => console.log('API') },
        { label: 'Status', onClick: () => console.log('Status') },
        { label: 'Changelog', onClick: () => console.log('Changelog') }
      ]
    },
    {
      title: 'Developers',
      links: [
        { label: 'API Docs', onClick: () => console.log('API') },
        { label: 'SDK', onClick: () => console.log('SDK') },
        { label: 'Webhooks', onClick: () => console.log('Webhooks') },
        { label: 'Open Source', onClick: () => console.log('OSS') }
      ]
    }
  ];

  const socialLinks = [
    { icon: Github, label: 'GitHub', onClick: () => console.log('GitHub') },
    { icon: Twitter, label: 'Twitter', onClick: () => console.log('Twitter') },
    { icon: Linkedin, label: 'LinkedIn', onClick: () => console.log('LinkedIn') },
    { icon: Facebook, label: 'Facebook', onClick: () => console.log('Facebook') }
  ];

  const footerBrand = (
    <Footer.Brand
      logo={logo}
      description="Building the future of web development with beautiful, accessible components that work everywhere."
      contact={
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            <span>hello@voilajsx.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <span>+1 (555) 123-4567</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>San Francisco, CA</span>
          </div>
        </div>
      }
    />
  );

  const newsletter = (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold">Stay Updated</h4>
      <p className="text-sm text-muted-foreground">
        Get the latest updates and news delivered to your inbox.
      </p>
      <div className="flex gap-2">
        <Input 
          placeholder="Enter your email" 
          className="text-sm"
        />
        <Button size="sm">Subscribe</Button>
      </div>
      <p className="text-xs text-muted-foreground">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </div>
  );

  const legalLinks = (
    <>
      <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">
        Privacy Policy
      </button>
      <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">
        Terms of Service
      </button>
      <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">
        Cookie Policy
      </button>
    </>
  );

  // Generate current footer content
  const getCurrentFooterContent = () => {
    switch (pageConfig.footerLayout) {
      case 'minimal':
        return (
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              © 2024 voilajsx. All rights reserved.
            </p>
          </div>
        );

      case 'basic':
        return (
          <Footer.Basic
            logo={logo}
            links={[
              { label: 'About', onClick: () => console.log('About') },
              { label: 'Features', onClick: () => console.log('Features') },
              { label: 'Pricing', onClick: () => console.log('Pricing') },
              { label: 'Contact', onClick: () => console.log('Contact') }
            ]}
            social={<Footer.Social links={socialLinks} />}
            copyright="© 2024 voilajsx. All rights reserved."
          />
        );

      case 'advanced':
        return (
          <Footer.Advanced
            brand={footerBrand}
            columns={footerColumns}
            newsletter={newsletter}
            social={<Footer.Social links={socialLinks} />}
            legal={legalLinks}
            copyright="© 2024 voilajsx. All rights reserved."
          />
        );

      default:
        return null;
    }
  };

  // Generate code example
  const generateCodeExample = () => {
    return `import { Page } from '@voilajsx/uikit/page';
import { Footer } from '@voilajsx/uikit/footer';
import { Sparkles, Home, Zap, Package } from 'lucide-react';

// Logo component
const logo = (
  <div className="flex items-center gap-2">
    <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center">
      <Sparkles className="h-4 w-4 text-primary-foreground" />
    </div>
    <span className="text-xl font-semibold">voilajsx</span>
  </div>
);

// Navigation items
const navigationItems = [
  { 
    key: 'home',
    label: 'Home', 
    icon: Home,
    isActive: true,
    onClick: () => navigate('/') 
  },
  { 
    key: 'features',
    label: 'Features',
    icon: Zap,
    items: [
      { key: 'components', label: 'Components', icon: Package, onClick: () => navigate('/components') },
      { key: 'templates', label: 'Templates', icon: Layout, onClick: () => navigate('/templates') }
    ]
  }
];

function MyPage() {
  return (
    <>
      <Page 
        variant="${pageConfig.variant}" 
        size="${pageConfig.size}"
      >
        <Page.Header 
          variant="${pageConfig.headerVariant}"
          sticky={${pageConfig.headerSticky}}
        >
          <Page.Logo>{logo}</Page.Logo>
          <Page.Nav items={navigationItems} />
        </Page.Header>

        <Page.Content>
          <div className="space-y-8">
            <h1 className="text-3xl font-bold">Welcome to Our Platform</h1>
            <p className="text-muted-foreground">
              Build amazing applications with our component library.
            </p>
            {/* Your main content here */}
          </div>
        </Page.Content>
      </Page>

      {/* Footer is separate component */}
      <Footer 
        variant="${pageConfig.footerVariant}"
        size="${pageConfig.size}"
      >
        ${pageConfig.footerLayout === 'minimal' ? `<div className="text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 voilajsx. All rights reserved.
          </p>
        </div>` : pageConfig.footerLayout === 'basic' ? `<Footer.Basic
          logo={logo}
          links={footerLinks}
          social={<Footer.Social links={socialLinks} />}
          copyright="© 2024 voilajsx. All rights reserved."
        />` : `<Footer.Advanced
          brand={<Footer.Brand logo={logo} description="..." />}
          columns={footerColumns}
          newsletter={newsletter}
          social={<Footer.Social links={socialLinks} />}
          legal={legalLinks}
          copyright="© 2024 voilajsx. All rights reserved."
        />`}
      </Footer>
    </>
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
          <h1 className="text-3xl font-bold">Page Layout Interactive Demo</h1>
        </div>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore the complete Page layout with Header, Content sections, plus a separate Footer component. 
          Experience prop drilling and compound component patterns in action.
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
                Test how the entire page layout adapts to different themes
              </p>
              <p className="text-xs text-muted-foreground">
                Current theme: <Badge variant="secondary" className="ml-1">{theme}</Badge>
              </p>
            </div>
            <ThemeSwitcher />
          </div>
        </CardContent>
      </Card>

      {/* Page Configuration */}
      <Card className="border-0 shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5" />
            Page Configuration
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Page Variant */}
            <div className="space-y-3">
              <label className="text-sm font-semibold">Page Variant</label>
              <select
                value={pageConfig.variant}
                onChange={(e) => setPageConfig(prev => ({ ...prev, variant: e.target.value }))}
                className="w-full border rounded px-3 py-2 text-sm bg-background"
              >
                <option value="default">Default</option>
                <option value="minimal">Minimal</option>
                <option value="contained">Contained</option>
              </select>
              <p className="text-xs text-muted-foreground">
                Controls the overall page background and styling
              </p>
            </div>

            {/* Page Size */}
            <div className="space-y-3">
              <label className="text-sm font-semibold">Page Size</label>
              <select
                value={pageConfig.size}
                onChange={(e) => setPageConfig(prev => ({ ...prev, size: e.target.value }))}
                className="w-full border rounded px-3 py-2 text-sm bg-background"
              >
                <option value="sm">Small</option>
                <option value="md">Medium</option>
                <option value="lg">Large</option>
                <option value="xl">X-Large</option>
                <option value="full">Full Width</option>
              </select>
              <p className="text-xs text-muted-foreground">
                Inherited by Header and Content (Footer is separate)
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Header Configuration */}
      <Card className="border-0 shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Layout className="h-5 w-5" />
            Header Configuration
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Header Variant */}
            <div className="space-y-3">
              <label className="text-sm font-semibold">Header Variant</label>
              <select
                value={pageConfig.headerVariant}
                onChange={(e) => setPageConfig(prev => ({ ...prev, headerVariant: e.target.value }))}
                className="w-full border rounded px-3 py-2 text-sm bg-background"
              >
                <option value="default">Default</option>
                <option value="primary">Primary</option>
                <option value="black">Black</option>
              </select>
              <p className="text-xs text-muted-foreground">
                Can override inherited size or use its own variant
              </p>
            </div>

            {/* Header Sticky */}
            <div className="space-y-3">
              <label className="text-sm font-semibold">Header Position</label>
              <div className="flex items-center space-x-3 p-3 border rounded">
                <input
                  type="checkbox"
                  id="headerSticky"
                  checked={pageConfig.headerSticky}
                  onChange={(e) => setPageConfig(prev => ({ ...prev, headerSticky: e.target.checked }))}
                  className="w-4 h-4"
                />
                <label htmlFor="headerSticky" className="text-sm">Sticky Header</label>
              </div>
              <p className="text-xs text-muted-foreground">
                Header stays fixed while scrolling content
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Footer Configuration */}
      <Card className="border-0 shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Layers className="h-5 w-5" />
            Footer Configuration
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Footer Variant */}
            <div className="space-y-3">
              <label className="text-sm font-semibold">Footer Variant</label>
              <select
                value={pageConfig.footerVariant}
                onChange={(e) => setPageConfig(prev => ({ ...prev, footerVariant: e.target.value }))}
                className="w-full border rounded px-3 py-2 text-sm bg-background"
              >
                <option value="default">Default</option>
                <option value="muted">Muted</option>
                <option value="dark">Dark</option>
              </select>
              <p className="text-xs text-muted-foreground">
                Independent component with its own configuration
              </p>
            </div>

            {/* Footer Layout */}
            <div className="space-y-3">
              <label className="text-sm font-semibold">Footer Layout</label>
              <select
                value={pageConfig.footerLayout}
                onChange={(e) => setPageConfig(prev => ({ ...prev, footerLayout: e.target.value }))}
                className="w-full border rounded px-3 py-2 text-sm bg-background"
              >
                <option value="minimal">Minimal</option>
                <option value="basic">Basic</option>
                <option value="advanced">Advanced</option>
              </select>
              <p className="text-xs text-muted-foreground">
                Different footer layouts with varying complexity
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Architecture Explanation */}
      <Card className="border-0 bg-blue-50 border-blue-200 dark:bg-blue-950 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="text-blue-800 dark:text-blue-200 flex items-center gap-2">
            🏗️ Component Architecture
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-sm text-blue-700 dark:text-blue-300">
              <strong>Clean Separation:</strong> The Page component handles Header and Content, 
              while Footer is a separate component for maximum flexibility.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Page Component</h4>
                <div className="space-y-1 text-xs text-blue-600 dark:text-blue-300">
                  <div>✅ Contains: Header + Content</div>
                  <div>✅ Prop drilling via context</div>
                  <div>✅ Compound components: Page.Header, Page.Content</div>
                  <div>✅ Size inheritance: {pageConfig.size}</div>
                </div>
              </div>
              
              <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Footer Component</h4>
                <div className="space-y-1 text-xs text-blue-600 dark:text-blue-300">
                  <div>🔄 Independent component</div>
                  <div>🔄 Own configuration: {pageConfig.footerVariant}</div>
                  <div>🔄 Compound components: Footer.Basic, Footer.Advanced</div>
                  <div>🔄 Separate size control</div>
                </div>
              </div>
            </div>
            
            <div className="text-xs text-blue-600 dark:text-blue-400 bg-blue-200 dark:bg-blue-800 p-3 rounded">
              <strong>Why separate?</strong> This allows the Footer to be used independently in any layout, 
              not just with the Page component. Maximum flexibility and reusability.
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
            title="Complete Page Layout Implementation"
            language="tsx"
          />
        </CardContent>
      </Card>

      {/* Features */}
      <Card className="border-0 shadow-sm">
        <CardHeader>
          <CardTitle>Page Layout Features</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">🏗️ Architecture</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                  Page compound components (Page.Header, Page.Content)
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                  Smart prop drilling via context (size, variant)
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                  Independent Footer component
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                  Override capability for child components
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                  Theme integration throughout
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">⚙️ Configuration</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                  Page-level variants and sizing
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                  Header sticky positioning
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                  Multiple footer layouts (Basic, Advanced)
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                  Responsive design system
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                  Cross-platform compatibility
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Sample Content */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Sample Page Content</h3>
          <div className="flex gap-2">
            {pageConfig.headerSticky && (
              <Badge variant="default" className="text-xs">📌 Sticky Header</Badge>
            )}
            <Badge variant="outline" className="text-xs">
              Page: {pageConfig.variant} / {pageConfig.size}
            </Badge>
            <Badge variant="secondary" className="text-xs">
              Footer: {pageConfig.footerVariant}
            </Badge>
          </div>
        </div>
        
        <p className="text-muted-foreground text-sm">
          This content demonstrates the Page layout with current configuration. 
          The Page component uses <strong>{pageConfig.variant}</strong> variant with <strong>{pageConfig.size}</strong> size, 
          which is inherited by Header and Content. The Footer is independent with <strong>{pageConfig.footerVariant}</strong> variant.
          {pageConfig.headerSticky && ' The header will stay fixed at the top while scrolling.'}
        </p>
        
        {[1, 2, 3, 4].map((i) => (
          <Card key={i} className="border-0 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <h4 className="font-semibold mb-2">Content Section {i}</h4>
              <p className="text-sm text-muted-foreground mb-4">
                This demonstrates the main content area within the Page component. 
                The Header uses <strong>{pageConfig.headerVariant}</strong> variant {pageConfig.headerSticky ? 'with sticky positioning' : 'without sticky positioning'}.
                The Footer (rendered separately) uses <strong>{pageConfig.footerVariant}</strong> variant with <strong>{pageConfig.footerLayout}</strong> layout.
                The Page component's <strong>{pageConfig.size}</strong> size is inherited by Header and Content but not Footer.
                This clean separation provides maximum flexibility for different layout needs.
              </p>
              <div className="flex gap-2 flex-wrap">
                <Badge variant="outline">Section {i}</Badge>
                <Badge variant="secondary">Page: {pageConfig.variant}</Badge>
                <Badge variant="secondary">Header: {pageConfig.headerVariant}</Badge>
                <Badge variant="secondary">Footer: {pageConfig.footerVariant}</Badge>
                <Badge variant="outline">Size: {pageConfig.size}</Badge>
                {pageConfig.headerSticky && (
                  <Badge variant="default" className="text-xs">Sticky</Badge>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <Page 
        variant={pageConfig.variant} 
        size={pageConfig.size}
      >
        <Page.Header 
          variant={pageConfig.headerVariant}
          sticky={pageConfig.headerSticky}
        >
          <Page.Logo>{logo}</Page.Logo>
          <Page.Nav items={headerNavItems} />
        </Page.Header>

        <Page.Content>
          <DemoContent />
        </Page.Content>
      </Page>

      {/* Footer is rendered separately */}
      <Footer 
        variant={pageConfig.footerVariant}
        size={pageConfig.size}
      >
        {getCurrentFooterContent()}
      </Footer>
    </>
  );
}

export default PageLayoutExample;