/**
 * Interactive layout for Footer component playground
 * @module @voilajsx/uikit
 * @file src/pages/examples/FooterExample.tsx
 */

import React, { useState } from 'react';
import { Footer } from '@voilajsx/uikit/footer';
import { Button } from '@voilajsx/uikit/button';
import { Input } from '@voilajsx/uikit/input';
import { Card, CardHeader, CardTitle, CardContent } from '@voilajsx/uikit/card';
import { Badge } from '@voilajsx/uikit/badge';
import { useTheme } from '@voilajsx/uikit/theme-provider';
import ThemeSwitcher from './ThemeSwitcher';
import CodeBlock from './CodeBlock';
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
  Minus,
  Facebook,
  Instagram,
  Youtube
} from 'lucide-react';

function FooterExample() {
  const { theme } = useTheme();

  // Footer configuration state
  const [footerConfig, setFooterConfig] = useState({
    variant: 'default',
    size: 'default',
    width: 'xl',
    padding: 'md',
    layout: 'basic'
  });

  // Footer content configurations
  const logo = (
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center">
        <Sparkles className="h-4 w-4 text-primary-foreground" />
      </div>
      <span className="text-lg font-semibold">voilajsx</span>
      <Badge variant="secondary" className="text-xs">UI</Badge>
    </div>
  );

  const basicNavLinks = [
    { label: 'About', onClick: () => console.log('About') },
    { label: 'Features', onClick: () => console.log('Features') },
    { label: 'Pricing', onClick: () => console.log('Pricing') },
    { label: 'Contact', onClick: () => console.log('Contact') },
    { label: 'Support', onClick: () => console.log('Support') }
  ];

  const socialLinks = [
    { icon: Github, label: 'GitHub', onClick: () => console.log('GitHub') },
    { icon: Twitter, label: 'Twitter', onClick: () => console.log('Twitter') },
    { icon: Linkedin, label: 'LinkedIn', onClick: () => console.log('LinkedIn') },
    { icon: Facebook, label: 'Facebook', onClick: () => console.log('Facebook') }
  ];

  const advancedColumns = [
    {
      title: 'Product',
      links: [
        { label: 'Features', onClick: () => console.log('Features') },
        { label: 'Pricing', onClick: () => console.log('Pricing') },
        { label: 'Documentation', onClick: () => console.log('Docs') },
        { label: 'API Reference', onClick: () => console.log('API') },
        { label: 'Changelog', onClick: () => console.log('Changelog') }
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
        { label: 'Status', onClick: () => console.log('Status') },
        { label: 'Security', onClick: () => console.log('Security') },
        { label: 'Terms', onClick: () => console.log('Terms') }
      ]
    }
  ];

  const brandContent = (
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
    switch (footerConfig.layout) {
      case 'default':
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
            links={basicNavLinks}
            social={<Footer.Social links={socialLinks} />}
            copyright="© 2024 voilajsx. All rights reserved."
          />
        );

      case 'advanced':
        return (
          <Footer.Advanced
            brand={brandContent}
            columns={advancedColumns}
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
    const layoutCode = {
      default: `<Footer variant="${footerConfig.variant}" size="${footerConfig.size}">
  <div className="text-center">
    <p className="text-sm text-muted-foreground">
      © 2024 voilajsx. All rights reserved.
    </p>
  </div>
</Footer>`,

      basic: `<Footer variant="${footerConfig.variant}" size="${footerConfig.size}">
  <Footer.Basic
    logo={logo}
    links={navigationLinks}
    social={<Footer.Social links={socialLinks} />}
    copyright="© 2024 voilajsx. All rights reserved."
  />
</Footer>`,

      advanced: `<Footer variant="${footerConfig.variant}" size="${footerConfig.size}">
  <Footer.Advanced
    brand={brandContent}
    columns={footerColumns}
    newsletter={newsletter}
    social={<Footer.Social links={socialLinks} />}
    legal={legalLinks}
    copyright="© 2024 voilajsx. All rights reserved."
  />
</Footer>`
    };

    return `import { Footer } from '@voilajsx/uikit/footer';
import { Input, Button } from '@voilajsx/uikit/button';
import { Sparkles, Github, Twitter, /* other icons */ } from 'lucide-react';

// Logo component
const logo = (
  <div className="flex items-center gap-2">
    <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center">
      <Sparkles className="h-4 w-4 text-primary-foreground" />
    </div>
    <span className="text-lg font-semibold">voilajsx</span>
  </div>
);

// Social links
const socialLinks = [
  { icon: Github, label: 'GitHub', onClick: () => {} },
  { icon: Twitter, label: 'Twitter', onClick: () => {} },
  // ... more social links
];

function MyFooter() {
  return (
    ${layoutCode[footerConfig.layout]}
  );
}`;
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Main Content */}
      <div className="flex-1 p-8 max-w-6xl mx-auto space-y-8">
        {/* Title */}
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Eye className="h-6 w-6 text-primary" />
            <h1 className="text-3xl font-bold">Footer Component Playground</h1>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Test the Footer component with different variants, layouts, and configurations.
          </p>
        </div>

        {/* Theme Selector Card */}
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
                  Test how the footer looks across different themes and variants
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
              Footer Configuration
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Variant Control */}
              <div className="space-y-3">
                <label className="text-sm font-semibold">Footer Variant</label>
                <select
                  value={footerConfig.variant}
                  onChange={(e) => setFooterConfig(prev => ({ ...prev, variant: e.target.value }))}
                  className="w-full border rounded px-3 py-2 text-sm bg-background"
                >
                  <option value="default">Default</option>
                  <option value="muted">Muted</option>
                  <option value="dark">Dark</option>
                </select>
              </div>

              {/* Size Control */}
              <div className="space-y-3">
                <label className="text-sm font-semibold">Footer Size</label>
                <select
                  value={footerConfig.size}
                  onChange={(e) => setFooterConfig(prev => ({ ...prev, size: e.target.value }))}
                  className="w-full border rounded px-3 py-2 text-sm bg-background"
                >
                  <option value="sm">Small</option>
                  <option value="default">Default</option>
                  <option value="lg">Large</option>
                </select>
              </div>

              {/* Width Control */}
              <div className="space-y-3">
                <label className="text-sm font-semibold">Footer Width</label>
                <select
                  value={footerConfig.width}
                  onChange={(e) => setFooterConfig(prev => ({ ...prev, width: e.target.value }))}
                  className="w-full border rounded px-3 py-2 text-sm bg-background"
                >
                  <option value="sm">Small</option>
                  <option value="md">Medium</option>
                  <option value="lg">Large</option>
                  <option value="xl">X-Large</option>
                  <option value="full">Full Width</option>
                </select>
              </div>

              {/* Padding Control */}
              <div className="space-y-3">
                <label className="text-sm font-semibold">Footer Padding</label>
                <select
                  value={footerConfig.padding}
                  onChange={(e) => setFooterConfig(prev => ({ ...prev, padding: e.target.value }))}
                  className="w-full border rounded px-3 py-2 text-sm bg-background"
                >
                  <option value="none">None</option>
                  <option value="sm">Small</option>
                  <option value="md">Medium</option>
                  <option value="lg">Large</option>
                </select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Layout Type Selection */}
        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Layers className="h-5 w-5" />
              Footer Layout
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    id="default"
                    name="layout"
                    value="default"
                    checked={footerConfig.layout === 'default'}
                    onChange={(e) => setFooterConfig(prev => ({ ...prev, layout: e.target.value }))}
                  />
                  <label htmlFor="default" className="text-sm font-semibold">Default Footer</label>
                  <Minus className="h-4 w-4 text-muted-foreground" />
                </div>
                <p className="text-xs text-muted-foreground pl-6">
                  Minimal footer with custom content
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    id="basic"
                    name="layout"
                    value="basic"
                    checked={footerConfig.layout === 'basic'}
                    onChange={(e) => setFooterConfig(prev => ({ ...prev, layout: e.target.value }))}
                  />
                  <label htmlFor="basic" className="text-sm font-semibold">Basic Footer</label>
                  <Badge variant="secondary" className="text-xs">Single Row</Badge>
                </div>
                <p className="text-xs text-muted-foreground pl-6">
                  Logo, navigation links, social icons in one row
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    id="advanced"
                    name="layout"
                    value="advanced"
                    checked={footerConfig.layout === 'advanced'}
                    onChange={(e) => setFooterConfig(prev => ({ ...prev, layout: e.target.value }))}
                  />
                  <label htmlFor="advanced" className="text-sm font-semibold">Advanced Footer</label>
                  <Grid3x3 className="h-4 w-4 text-muted-foreground" />
                </div>
                <p className="text-xs text-muted-foreground pl-6">
                  Multi-column layout with brand, links, newsletter
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
              title="Footer Component Usage"
              language="tsx"
            />
          </CardContent>
        </Card>

        {/* Features Overview */}
        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle>Footer Component Features</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Minus className="h-4 w-4" />
                  Default Layout
                </h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Simple container</li>
                  <li>• Custom content</li>
                  <li>• Minimal styling</li>
                  <li>• Full flexibility</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Badge variant="secondary" className="text-xs">Basic Layout</Badge>
                </h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Logo section</li>
                  <li>• Navigation links</li>
                  <li>• Social media icons</li>
                  <li>• Copyright text</li>
                  <li>• Single row design</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Grid3x3 className="h-4 w-4" />
                  Advanced Layout
                </h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Brand section</li>
                  <li>• Multiple columns</li>
                  <li>• Newsletter signup</li>
                  <li>• Legal links</li>
                  <li>• Social media</li>
                  <li>• Contact information</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Sample Content for Testing */}
        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle>Sample Page Content</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              This content demonstrates how the footer appears at the bottom of the page.
            </p>
            
            <div className="space-y-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="p-6 border rounded">
                  <h4 className="font-semibold mb-2">Content Section {i}</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Sample page content to show how the footer behaves with different amounts of content. 
                    The footer should always appear at the bottom regardless of content length.
                  </p>
                  <div className="flex gap-2">
                    <Badge variant="outline">Section {i}</Badge>
                    <Badge variant="secondary">Demo Content</Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Actual Footer Component */}
      <Footer 
        variant={footerConfig.variant}
        size={footerConfig.size}
        width={footerConfig.width}
        padding={footerConfig.padding}
      >
        {getCurrentFooterContent()}
      </Footer>
    </div>
  );
}

export default FooterExample;