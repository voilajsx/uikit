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
  Info
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
    sidebar: 'oklch(0.97 0.01 85)',
    sidebarForeground: 'oklch(0.15 0.02 85)',
    sidebarPrimary: 'oklch(0.5 0.2 220)',
    sidebarPrimaryForeground: 'oklch(0.98 0.02 85)',
    sidebarAccent: 'oklch(0.94 0.02 85)',
    sidebarAccentForeground: 'oklch(0.25 0.05 85)',
    sidebarBorder: 'oklch(0.88 0.03 85)',
    sidebarRing: 'oklch(0.5 0.2 220)',
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
    sidebar: 'oklch(0.1 0.025 85)',
    sidebarForeground: 'oklch(0.95 0.02 85)',
    sidebarPrimary: 'oklch(0.65 0.25 220)',
    sidebarPrimaryForeground: 'oklch(0.08 0.02 85)',
    sidebarAccent: 'oklch(0.15 0.03 85)',
    sidebarAccentForeground: 'oklch(0.95 0.02 85)',
    sidebarBorder: 'oklch(0.22 0.04 85)',
    sidebarRing: 'oklch(0.65 0.25 220)',
  },
};

// Method 1: Register via Provider (Recommended)
<ThemeProvider theme="brand" customThemes={[brandTheme]}>
  <App />
</ThemeProvider>

// Method 2: Runtime Registration
const { registerTheme, setTheme } = useTheme();
useEffect(() => {
  registerTheme(brandTheme);
  setTheme('brand');
}, []);`;

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

// Fixed theme colors based on actual CSS values
const builtInThemes = [
  {
    id: 'default',
    name: 'Default',
    description: 'Clean oceanic blues',
    colors: { 
      primary: 'bg-[oklch(0.42_0.26_230)]', // Ocean blue
      accent: 'bg-[oklch(0.6_0.2_200)]',    // Ocean cyan
      secondary: 'bg-[oklch(0.86_0.035_210)]' // Light blue-gray
    },
    bestFor: 'Business apps, dashboards, professional tools'
  },
  {
    id: 'metro',
    name: 'Metro',
    description: 'Clean transit-inspired systematic design',
    colors: { 
      primary: 'bg-[oklch(0.35_0.08_240)]',  // Metro blue
      accent: 'bg-[oklch(0.45_0.12_200)]',   // Transit teal
      secondary: 'bg-[oklch(0.94_0.008_240)]' // Light gray-blue
    },
    bestFor: 'Admin panels, data applications, systematic UIs'
  },
  {
    id: 'studio',
    name: 'Studio',
    description: 'Sophisticated designer grays with amber accents',
    colors: { 
      primary: 'bg-[oklch(0.32_0.02_270)]',  // Studio charcoal
      accent: 'bg-[oklch(0.55_0.15_45)]',    // Creative amber
      secondary: 'bg-[oklch(0.95_0.003_270)]' // Light studio gray
    },
    bestFor: 'Design tools, portfolios, creative applications'
  },
  {
    id: 'ruby',
    name: 'Ruby',
    description: 'Premium ruby red with rose accents',
    colors: { 
      primary: 'bg-[oklch(0.48_0.18_20)]',   // Ruby red
      accent: 'bg-[oklch(0.46_0.01_240)]',   // Accent gray
      secondary: 'bg-[oklch(0.9_0.005_0)]'   // Light gray
    },
    bestFor: 'Finance, luxury brands, premium products'
  },
  {
    id: 'neon',
    name: 'Neon',
    description: 'Electric cyberpunk with glowing highlights',
    colors: { 
      primary: 'bg-[oklch(0.45_0.28_320)]',  // Electric magenta
      accent: 'bg-[oklch(0.55_0.25_180)]',   // Electric cyan
      secondary: 'bg-[oklch(0.92_0.015_280)]' // Light purple-gray
    },
    bestFor: 'Gaming, tech startups, creative tools'
  },
  {
    id: 'aurora',
    name: 'Aurora',
    description: 'Northern lights with purple-green magic',
    colors: { 
      primary: 'bg-[oklch(0.48_0.2_290)]',   // Aurora purple
      accent: 'bg-[oklch(0.52_0.18_150)]',   // Aurora green
      secondary: 'bg-[oklch(0.91_0.012_300)]' // Soft lavender
    },
    bestFor: 'Creative apps, elegant brands, portfolios'
  }
];

function Themes() {
  const { theme: currentTheme, setTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('overview');

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

    const sections = ['overview', 'theme-benefits', 'built-in-themes', 'basic-usage', 'theme-switching', 'custom-themes', 'dynamic-themes', 'oklch-colors'];
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
      key: 'basic-usage',
      label: 'Basic Usage',
      icon: Eye,
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

  // Sidebar content component
  const SidebarContent = () => (
    <nav className="space-y-2">
      <div className="px-3 py-2">
        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
          On This Page
        </h3>
      </div>
      {sidebarNavigation.map((item) => {
        const Icon = item.icon;
        return (
          <button
            key={item.key}
            onClick={item.onClick}
            className={`w-full flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-colors text-left ${
              item.isActive
                ? 'bg-primary/10 text-primary font-medium'
                : 'text-muted-foreground hover:text-foreground hover:bg-muted'
            }`}
          >
            <Icon className="h-4 w-4 flex-shrink-0" />
            <span className="truncate">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );

  return (
    <Layout>
      <Container
        sidebar="right"
        sidebarContent={<SidebarContent />}
        sidebarSize="default"
        sidebarSticky={true}
        width="xl"
        padding="md"
      >
        <div className="space-y-16">
          {/* Header */}
          <section id="overview" className="space-y-6">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
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
                        <p className="text-sm text-muted-foreground">{themeInfo.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-2 mb-4">
                      <div className={`w-8 h-8 rounded-full ${themeInfo.colors.primary} shadow-sm border border-border/20`} />
                      <div className={`w-8 h-8 rounded-full ${themeInfo.colors.accent} shadow-sm border border-border/20`} />
                      <div className={`w-8 h-8 rounded-full ${themeInfo.colors.secondary} shadow-sm border border-border/20`} />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      <strong>Perfect for:</strong> {themeInfo.bestFor}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
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