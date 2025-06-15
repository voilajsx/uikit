/**
 * Themes documentation for @voilajsx/uikit - Beautiful themes with OKLCH color science
 * @module @voilajsx/uikit
 * @file docs/pages/Themes.tsx
 */

import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@voilajsx/uikit/card';
import { Container } from '@voilajsx/uikit/container';
import Layout from '../components/Layout';
import { Button } from '@voilajsx/uikit/button';
import { Badge } from '@voilajsx/uikit/badge';
import { Alert, AlertDescription } from '@voilajsx/uikit/alert';
import { useTheme } from '@voilajsx/uikit/theme-provider';
import { 
  Palette, 
  Zap, 
  Globe, 
  Brush, 
  FileText, 
  Eye, 
  Settings, 
  Code2, 
  Sparkles,
  Info,
  AlertTriangle,
  Copy,
  CheckCircle,
   Check,  Building, Gamepad2, Gem,  Waves 
} from 'lucide-react';

import CodeBlock from '../components/CodeBlock';

const basicThemeCode = `import { ThemeProvider } from '@voilajsx/uikit/theme-provider';

function App() {
  return (
    <ThemeProvider theme="ruby" variant="dark" detectSystem={true}>
      <YourApp />
    </ThemeProvider>
  );
}`;

const themeSwitchingCode = `import { useTheme } from '@voilajsx/uikit/theme-provider';
import { Button } from '@voilajsx/uikit/button';

function ThemeSwitcher() {
  const { theme, variant, setTheme, toggleVariant } = useTheme();

  return (
    <div className="flex gap-2">
      <Button onClick={() => setTheme('ruby')}>Ruby</Button>
      <Button onClick={() => setTheme('neon')}>Neon</Button>
      <Button onClick={toggleVariant}>
        {variant === 'light' ? '🌙' : '☀️'}
      </Button>
    </div>
  );
}`;

const customThemeCode = `// Define your custom theme with complete OKLCH colors
const brandTheme = {
  name: 'Brand Theme',
  id: 'brand',
  
  light: {
    background: 'oklch(0.99 0.005 85)',
    foreground: 'oklch(0.15 0.02 85)',
    card: 'oklch(1 0 0)',
    cardForeground: 'oklch(0.15 0.02 85)',
    popover: 'oklch(0.97 0.01 85)',
    popoverForeground: 'oklch(0.15 0.02 85)',
    primary: 'oklch(0.5 0.2 220)',
    primaryForeground: 'oklch(0.98 0.02 85)',
    secondary: 'oklch(0.92 0.04 85)',
    secondaryForeground: 'oklch(0.25 0.05 85)',
    muted: 'oklch(0.94 0.02 85)',
    mutedForeground: 'oklch(0.45 0.03 85)',
    accent: 'oklch(0.55 0.15 200)',
    accentForeground: 'oklch(0.98 0.02 85)',
    destructive: 'oklch(0.6 0.25 30)',
    destructiveForeground: 'oklch(0.98 0.02 85)',
    border: 'oklch(0.88 0.03 85)',
    input: 'oklch(0.88 0.03 85)',
    ring: 'oklch(0.5 0.2 220)',
    chart1: 'oklch(0.5 0.2 220)',
    chart2: 'oklch(0.55 0.15 200)',
    chart3: 'oklch(0.45 0.18 240)',
    chart4: 'oklch(0.65 0.2 190)',
    chart5: 'oklch(0.6 0.24 210)',
  },
  
  dark: {
    background: 'oklch(0.08 0.02 85)',
    foreground: 'oklch(0.95 0.02 85)',
    card: 'oklch(0.1 0.025 85)',
    cardForeground: 'oklch(0.95 0.02 85)',
    popover: 'oklch(0.1 0.025 85)',
    popoverForeground: 'oklch(0.95 0.02 85)',
    primary: 'oklch(0.65 0.25 220)',
    primaryForeground: 'oklch(0.08 0.02 85)',
    secondary: 'oklch(0.18 0.05 85)',
    secondaryForeground: 'oklch(0.95 0.02 85)',
    muted: 'oklch(0.15 0.03 85)',
    mutedForeground: 'oklch(0.7 0.03 85)',
    accent: 'oklch(0.6 0.18 200)',
    accentForeground: 'oklch(0.95 0.02 85)',
    destructive: 'oklch(0.5 0.2 30)',
    destructiveForeground: 'oklch(0.95 0.02 85)',
    border: 'oklch(0.22 0.04 85)',
    input: 'oklch(0.22 0.04 85)',
    ring: 'oklch(0.65 0.25 220)',
    chart1: 'oklch(0.65 0.25 220)',
    chart2: 'oklch(0.6 0.18 200)',
    chart3: 'oklch(0.55 0.22 240)',
    chart4: 'oklch(0.7 0.24 190)',
    chart5: 'oklch(0.65 0.27 210)',
  },
};

// Register via Provider
<ThemeProvider theme="brand" customThemes={[brandTheme]}>
  <App />
</ThemeProvider>`;



const runtimeThemeCode = `import { useTheme } from '@voilajsx/uikit/theme-provider';

function DynamicThemes() {
  const { setTheme, registerTheme } = useTheme();

  const createUserTheme = (primaryColor, accentColor) => ({
    id: 'user-theme',
    name: 'User Theme',
    light: { 
      background: 'oklch(0.99 0.005 0)',
      foreground: 'oklch(0.15 0.02 0)',
      primary: primaryColor,
      primaryForeground: 'oklch(0.98 0.01 0)',
      accent: accentColor,
      accentForeground: 'oklch(0.98 0.01 0)',
      // ... other required colors
    },
    dark: { 
      background: 'oklch(0.08 0.02 0)',
      foreground: 'oklch(0.95 0.02 0)',
      primary: primaryColor,
      primaryForeground: 'oklch(0.08 0.02 0)',
      accent: accentColor,
      accentForeground: 'oklch(0.08 0.02 0)',
      // ... other required colors
    }
  });

  const handleColorChange = (primary, accent) => {
    const newTheme = createUserTheme(primary, accent);
    registerTheme(newTheme);
    setTheme('user-theme');
  };

  return (
    <div className="flex gap-2">
      <Button onClick={() => handleColorChange('oklch(0.6 0.3 350)', 'oklch(0.5 0.2 200)')}>
        Create Pink & Blue Theme
      </Button>
      <Button onClick={() => handleColorChange('oklch(0.5 0.25 120)', 'oklch(0.6 0.2 60)')}>
        Create Green & Yellow Theme
      </Button>
    </div>
  );
}`;

// Color palette data - all semantic colors used in UIKit


// Built-in themes display data - using semantic colors only
const builtInThemes = [
  {
    id: 'default',
    name: 'Default',
    description: 'Ocean blue professional colors with clean design',
    bestFor: 'Business applications, documentation, company websites',
    icon: Waves,
    colors: {
      primary: 'oklch(0.48 0.18 240)',
      secondary: 'oklch(0.88 0.03 220)', 
      accent: 'oklch(0.52 0.12 200)'
    },
    category: 'Professional',
    mood: 'Trustworthy & Clean'
  },
  {
    id: 'aurora',
    name: 'Aurora',
    description: 'Northern lights purple-green gradients for magical experiences',
    bestFor: 'Creative applications, portfolios, artistic platforms',
    icon: Sparkles,
    colors: {
      primary: 'oklch(0.48 0.2 290)',
      secondary: 'oklch(0.81 0.012 300)',
      accent: 'oklch(0.62 0.18 150)'
    },
    category: 'Creative',
    mood: 'Magical & Elegant'
  },
  {
    id: 'metro',
    name: 'Metro',
    description: 'Clean transit-inspired gray-blue for systematic design',
    bestFor: 'Admin panels, dashboards, analytics platforms',
    icon: Building,
    colors: {
      primary: 'oklch(0.35 0.08 240)',
      secondary: 'oklch(0.84 0.008 240)',
      accent: 'oklch(0.55 0.12 200)'
    },
    category: 'Professional',
    mood: 'Systematic & Modern'
  },
  {
    id: 'neon',
    name: 'Neon',
    description: 'Electric cyberpunk magenta-cyan for high-tech vibes',
    bestFor: 'Gaming applications, tech platforms, modern interfaces',
    icon: Gamepad2,
    colors: {
      primary: 'oklch(0.45 0.28 320)',
      secondary: 'oklch(0.82 0.015 280)',
      accent: 'oklch(0.65 0.25 180)'
    },
    category: 'Tech',
    mood: 'Electric & Futuristic'
  },
  {
    id: 'ruby',
    name: 'Ruby',
    description: 'Sophisticated red with gold accents for premium brands',
    bestFor: 'Luxury brands, premium products, high-end services',
    icon: Gem,
    colors: {
      primary: 'oklch(0.48 0.18 20)',
      secondary: 'oklch(0.8 0.005 0)',
      accent: 'oklch(0.56 0.01 240)'
    },
    category: 'Premium',
    mood: 'Luxurious & Bold'
  },
  {
    id: 'studio',
    name: 'Studio',
    description: 'Designer grays with amber accent for creative tools',
    bestFor: 'Design tools, creative platforms, professional portfolios',
    icon: Brush,
    colors: {
      primary: 'oklch(0.32 0.02 270)',
      secondary: 'oklch(0.85 0.003 270)',
      accent: 'oklch(0.65 0.15 45)'
    },
    category: 'Creative',
    mood: 'Sophisticated & Minimal'
  }
];

const categoryColors = {
  'Professional': 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
  'Creative': 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400',
  'Tech': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
  'Premium': 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
};

function Themes() {
  const { theme: currentTheme, setTheme, variant, toggleVariant } = useTheme();
  const [activeSection, setActiveSection] = useState('overview');
  const [hoveredTheme, setHoveredTheme] = useState(null);

  const [copiedColor, setCopiedColor] = useState('');

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - 100;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedColor(text);
    setTimeout(() => setCopiedColor(''), 2000);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { 
        rootMargin: '-20% 0px -80% 0px',
        threshold: 0 
      }
    );

    const sections = ['overview', 'theme-benefits', 'built-in-themes', 'color-palette', 'basic-usage', 'theme-switching', 'custom-themes', 'dynamic-themes', 'oklch-colors'];
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // Sidebar navigation items
  const sidebarNavigation = [
    {
      key: 'overview',
      label: 'Overview',
      icon: FileText,
      onClick: () => scrollToSection('overview'),
      isActive: activeSection === 'overview'
    },
    {
      key: 'theme-benefits',
      label: 'Why Our Theming?',
      icon: Zap,
      onClick: () => scrollToSection('theme-benefits'),
      isActive: activeSection === 'theme-benefits'
    },
    {
      key: 'built-in-themes',
      label: 'Built-in Themes',
      icon: Palette,
      onClick: () => scrollToSection('built-in-themes'),
      isActive: activeSection === 'built-in-themes'
    },
    {
      key: 'color-palette',
      label: 'Color Palette',
      icon: Eye,
      onClick: () => scrollToSection('color-palette'),
      isActive: activeSection === 'color-palette'
    },
    {
      key: 'basic-usage',
      label: 'Basic Usage',
      icon: Settings,
      onClick: () => scrollToSection('basic-usage'),
      isActive: activeSection === 'basic-usage'
    },
    {
      key: 'theme-switching',
      label: 'Theme Switching',
      icon: Settings,
      onClick: () => scrollToSection('theme-switching'),
      isActive: activeSection === 'theme-switching'
    },
    {
      key: 'custom-themes',
      label: 'Custom Themes',
      icon: Brush,
      onClick: () => scrollToSection('custom-themes'),
      isActive: activeSection === 'custom-themes'
    },
    {
      key: 'dynamic-themes',
      label: 'Dynamic Themes',
      icon: Code2,
      onClick: () => scrollToSection('dynamic-themes'),
      isActive: activeSection === 'dynamic-themes'
    },
    {
      key: 'oklch-colors',
      label: 'OKLCH Colors',
      icon: Info,
      onClick: () => scrollToSection('oklch-colors'),
      isActive: activeSection === 'oklch-colors'
    }
  ];

  return (
    <Layout>
      <Container
        sidebar="right"
        sidebarContent={sidebarNavigation}
        sidebarSticky={true}
        size="xl"
      >
        <div className="space-y-16">
          {/* Header */}
          <section id="overview" className="space-y-6">
            <Badge variant="secondary">
              <Sparkles className="h-3 w-3 mr-1" />
              6 Beautiful Themes + Custom Support
            </Badge>
            <h1 className="text-5xl font-bold tracking-tight">Themes</h1>
            <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
              Beautiful themes with OKLCH color science. Switch themes instantly, create custom ones, 
              or build dynamic theming experiences for your users.
            </p>
          </section>

          {/* Theme Benefits */}
          <section id="theme-benefits" className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Why Our Theming System?</h2>
              <p className="text-muted-foreground text-lg">
                Built with modern color science and developer experience in mind.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Palette className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">OKLCH Colors</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Perceptually uniform colors that look consistent across all devices and displays.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Zap className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Runtime Switching</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Change themes instantly without page reloads, rebuilds, or CSS downloads.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Globe className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Multi-Tenant Ready</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Perfect for white-label applications with client-specific brand themes.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Brush className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Unlimited Custom</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Create unlimited custom themes with your exact brand colors and preferences.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Built-in Themes */}
          {/* Built-in Themes */}
<section id="built-in-themes" className="space-y-8">
  <div>
    <h2 className="text-3xl font-bold mb-4">6 Professional Built-in Themes</h2>
    <p className="text-muted-foreground text-lg">
      Click any theme to switch instantly and see all components adapt automatically.
    </p>
  </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    {builtInThemes.map((themeInfo) => (
      <Card
        key={themeInfo.id}
        className={`cursor-pointer transition-all hover:shadow-lg group border ${
          currentTheme === themeInfo.id
            ? 'ring-2 ring-primary shadow-lg border-primary/50'
            : 'hover:shadow-md border-border hover:border-primary/30'
        }`}
        onClick={() => setTheme(themeInfo.id)}
      >
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <CardTitle className="text-xl">{themeInfo.name}</CardTitle>
                {currentTheme === themeInfo.id && (
                  <Badge variant="default" className="text-xs">
                    Active
                  </Badge>
                )}
              </div>
              <p className="text-sm text-muted-foreground mb-3">{themeInfo.description}</p>
            </div>
          </div>
        </CardHeader>
        
        <CardContent>
          <div className="flex gap-2 mb-4">
            <div 
              className="w-8 h-8 rounded-full shadow-sm border"
              style={{ backgroundColor: themeInfo.colors.primary }}
            />
            <div 
              className="w-8 h-8 rounded-full shadow-sm border"
              style={{ backgroundColor: themeInfo.colors.accent }}
            />
            <div 
              className="w-8 h-8 rounded-full shadow-sm border"
              style={{ backgroundColor: themeInfo.colors.secondary }}
            />
          </div>
          <p className="text-xs text-muted-foreground">
            <strong>Perfect for:</strong> {themeInfo.bestFor}
          </p>
        </CardContent>
      </Card>
    ))}
  </div>
</section>

          {/* Color Palette Section - Interactive Live Preview */}
          <section id="color-palette" className="space-y-8">
  <div>
    <h2 className="text-3xl font-bold mb-4">Live Color Palette</h2>
    <p className="text-muted-foreground text-lg">
      See all semantic colors in action. Switch themes above to see colors adapt automatically.
    </p>
  </div>

  <Alert>
    <AlertTriangle className="h-4 w-4" />
    <AlertDescription>
      <strong>Important:</strong> Always use these semantic colors instead of hardcoded colors for theme compatibility.
    </AlertDescription>
  </Alert>

  {/* Background Colors Table */}
  <div className="space-y-4">
    <h3 className="text-xl font-semibold">Background Colors</h3>
    <div className="bg-card rounded-lg overflow-hidden shadow-sm">
      <div className="bg-muted px-6 py-4">
        <div className="grid grid-cols-4 gap-6 font-medium text-sm">
          <div>Color Name</div>
          <div>Preview</div>
          <div>Class Name</div>
          <div>Usage</div>
        </div>
      </div>
      <div className="divide-y divide-border">
        {[
          { name: 'background', usage: 'Main page background' },
          { name: 'card', usage: 'Card and panel backgrounds' },
          { name: 'popover', usage: 'Dropdown/modal backgrounds' },
          { name: 'muted', usage: 'Subtle background areas' },
          { name: 'primary', usage: 'Primary button backgrounds' },
          { name: 'secondary', usage: 'Secondary button backgrounds' },
          { name: 'accent', usage: 'Accent element backgrounds' },
          { name: 'destructive', usage: 'Error/danger backgrounds' }
        ].map((color) => (
          <div key={color.name} className="px-6 py-4 grid grid-cols-4 gap-6 items-center text-sm hover:bg-muted/30 transition-colors">
            <div>
              <code className="font-mono font-semibold text-foreground">{color.name}</code>
            </div>
            <div>
              <div className={`w-20 h-10 rounded-md bg-${color.name} shadow-sm ring-1 ring-border`}></div>
            </div>
            <div>
              <code className="text-xs bg-muted text-muted-foreground px-3 py-1.5 rounded-md font-medium">bg-{color.name}</code>
            </div>
            <div className="text-muted-foreground">
              {color.usage}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>

  {/* Text Colors Table */}
  <div className="space-y-4">
    <h3 className="text-xl font-semibold">Text Colors</h3>
    <div className="bg-card rounded-lg overflow-hidden shadow-sm">
      <div className="bg-muted px-6 py-4">
        <div className="grid grid-cols-4 gap-6 font-medium text-sm">
          <div>Color Name</div>
          <div>Preview</div>
          <div>Class Name</div>
          <div>Usage</div>
        </div>
      </div>
      <div className="divide-y divide-border">
        {[
          { name: 'foreground', usage: 'Primary text color' },
          { name: 'muted-foreground', usage: 'Secondary/subtle text' },
          { name: 'card-foreground', usage: 'Text on card backgrounds' },
          { name: 'popover-foreground', usage: 'Text on popover backgrounds' },
          { name: 'primary-foreground', usage: 'Text on primary backgrounds' },
          { name: 'secondary-foreground', usage: 'Text on secondary backgrounds' },
          { name: 'accent-foreground', usage: 'Text on accent backgrounds' },
          { name: 'destructive-foreground', usage: 'Text on destructive backgrounds' }
        ].map((color) => (
          <div key={color.name} className="px-6 py-4 grid grid-cols-4 gap-6 items-center text-sm hover:bg-muted/30 transition-colors">
            <div>
              <code className="font-mono font-semibold text-foreground">{color.name}</code>
            </div>
            <div>
              <span className={`text-${color.name} font-semibold text-base`}>Sample Text</span>
            </div>
            <div>
              <code className="text-xs bg-muted text-muted-foreground px-3 py-1.5 rounded-md font-medium">text-{color.name}</code>
            </div>
            <div className="text-muted-foreground">
              {color.usage}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>

  {/* Border Colors Table */}
  <div className="space-y-4">
    <h3 className="text-xl font-semibold">Border Colors</h3>
    <div className="bg-card rounded-lg overflow-hidden shadow-sm">
      <div className="bg-muted px-6 py-4">
        <div className="grid grid-cols-4 gap-6 font-medium text-sm">
          <div>Color Name</div>
          <div>Preview</div>
          <div>Class Name</div>
          <div>Usage</div>
        </div>
      </div>
      <div className="divide-y divide-border">
        {[
          { name: 'border', usage: 'Standard borders and dividers' },
          { name: 'input', usage: 'Input field borders' },
          { name: 'ring', usage: 'Focus ring colors' }
        ].map((color) => (
          <div key={color.name} className="px-6 py-4 grid grid-cols-4 gap-6 items-center text-sm hover:bg-muted/30 transition-colors">
            <div>
              <code className="font-mono font-semibold text-foreground">{color.name}</code>
            </div>
            <div>
              <div className={`w-20 h-10 rounded-md bg-background border-2 border-${color.name}`}></div>
            </div>
            <div>
              <code className="text-xs bg-muted text-muted-foreground px-3 py-1.5 rounded-md font-medium">border-{color.name}</code>
            </div>
            <div className="text-muted-foreground">
              {color.usage}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>

  {/* Usage Guidelines */}
  <Card>
    <CardHeader>
      <CardTitle className="flex items-center gap-2">
        <Sparkles className="h-5 w-5" />
        Color Usage Guidelines
      </CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-3">
          <h4 className="font-semibold text-green-600 mb-3">✅ Always Use These</h4>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <code className="bg-muted px-3 py-1.5 rounded-md text-xs font-medium">bg-background</code>
              <span className="text-sm">for page backgrounds</span>
            </div>
            <div className="flex items-center gap-3">
              <code className="bg-muted px-3 py-1.5 rounded-md text-xs font-medium">text-foreground</code>
              <span className="text-sm">for primary text</span>
            </div>
            <div className="flex items-center gap-3">
              <code className="bg-muted px-3 py-1.5 rounded-md text-xs font-medium">bg-card</code>
              <span className="text-sm">for card backgrounds</span>
            </div>
            <div className="flex items-center gap-3">
              <code className="bg-muted px-3 py-1.5 rounded-md text-xs font-medium">border-border</code>
              <span className="text-sm">for all borders</span>
            </div>
          </div>
        </div>
        <div className="space-y-3">
          <h4 className="font-semibold text-red-600 mb-3">❌ Never Use These</h4>
          <div className="space-y-2 text-sm text-muted-foreground line-through">
            <div>bg-white, bg-black</div>
            <div>text-gray-600, text-slate-800</div>
            <div>bg-blue-500, bg-red-600</div>
            <div>border-gray-200, border-slate-300</div>
            <div>Any hardcoded color values</div>
          </div>
        </div>
      </div>
      <Alert>
        <Info className="h-4 w-4" />
        <AlertDescription className="text-sm">
          <strong>Pro tip:</strong> Using semantic colors ensures your components work with all 6 themes and their light/dark variants (12 total combinations).
        </AlertDescription>
      </Alert>
    </CardContent>
  </Card>
</section>

          {/* Basic Usage */}
          <section id="basic-usage" className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-4">Basic Theme Setup</h2>
              <p className="text-muted-foreground text-lg">
                Wrap your app with ThemeProvider to enable theming across all components.
              </p>
            </div>
            
            <CodeBlock code={basicThemeCode} title="Theme Provider Setup" />
          </section>

          {/* Theme Switching */}
          <section id="theme-switching" className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-4">Runtime Theme Switching</h2>
              <p className="text-muted-foreground text-lg">
                Give users control with theme switchers that work instantly.
              </p>
            </div>
            
            <CodeBlock code={themeSwitchingCode} title="Interactive Theme Switcher" />
          </section>

          {/* Custom Themes */}
          <section id="custom-themes" className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-4">Custom Brand Themes</h2>
              <p className="text-muted-foreground text-lg">
                Create custom themes using OKLCH color format for perfect brand consistency.
              </p>
            </div>
            
            <CodeBlock code={customThemeCode} title="Complete Custom Theme Definition" />
          </section>

          {/* Dynamic Theme Creation */}
          <section id="dynamic-themes" className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-4">Dynamic Theme Generation</h2>
              <p className="text-muted-foreground text-lg">
                Register and apply new themes at runtime for user-generated themes or A/B testing.
              </p>
            </div>
            
            <CodeBlock code={runtimeThemeCode} title="Runtime Theme Registration" />
          </section>

          {/* OKLCH Explanation */}
          <section id="oklch-colors" className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-4">About OKLCH Color Science</h2>
              <p className="text-muted-foreground text-lg">
                Understanding the modern color format that powers UIKit's theming system.
              </p>
            </div>
            
            <Card>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg">Why OKLCH?</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>Perceptual uniformity</strong> - Colors maintain consistent lightness</li>
                      <li>• <strong>Better gradients</strong> - Smoother color transitions and mixing</li>
                      <li>• <strong>Future-proof</strong> - CSS Color Module Level 4 standard</li>
                      <li>• <strong>Predictable contrast</strong> - More reliable accessibility compliance</li>
                      <li>• <strong>Device consistency</strong> - Colors look the same across displays</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg">OKLCH Format</h4>
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <code className="text-sm block font-mono">
                        oklch(0.5 0.2 220)<br />
                        <span className="text-muted-foreground">
                          ↑ Lightness (0-1)<br />
                          &nbsp;&nbsp;&nbsp;&nbsp;↑ Chroma (0-0.4)<br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↑ Hue (0-360)
                        </span>
                      </code>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Example: <code>oklch(0.7 0.15 250)</code> creates a light, moderately saturated blue
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </Container>
    </Layout>
  );
}

export default Themes;