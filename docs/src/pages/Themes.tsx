import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@voilajsx/uikit/card';
import { Button } from '@voilajsx/uikit/button';
import { Badge } from '@voilajsx/uikit/badge';
import { useTheme } from '@voilajsx/uikit/theme-provider';
import { Palette, Zap, Globe, Brush } from 'lucide-react';
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

const customThemeCode = `// Define your custom theme
const brandTheme = {
  name: 'Brand Theme',
  id: 'brand',
  
  light: {
    background: 'oklch(0.99 0.005 85)',
    foreground: 'oklch(0.15 0.02 85)',
    primary: 'oklch(0.5 0.2 220)',
    primaryForeground: 'oklch(0.98 0.02 85)',
    secondary: 'oklch(0.92 0.04 85)',
    secondaryForeground: 'oklch(0.25 0.05 85)',
    // ... other colors
  },
  
  dark: {
    background: 'oklch(0.08 0.02 85)',
    foreground: 'oklch(0.95 0.02 85)',
    primary: 'oklch(0.65 0.25 220)',
    // ... other colors
  },
};

// Use in your app
<ThemeProvider theme="brand" customThemes={[brandTheme]}>
  <App />
</ThemeProvider>`;

const runtimeThemeCode = `import { useTheme } from '@voilajsx/uikit/theme-provider';

function DynamicThemes() {
  const { setTheme, registerTheme } = useTheme();

  const createUserTheme = (color) => ({
    id: 'user-theme',
    name: 'User Theme',
    light: { primary: color, /* ... */ },
    dark: { primary: color, /* ... */ }
  });

  const handleColorChange = (color) => {
    const newTheme = createUserTheme(color);
    registerTheme(newTheme);
    setTheme('user-theme');
  };

  return (
    <Button onClick={() => handleColorChange('oklch(0.6 0.3 350)')}>
      Create Pink Theme
    </Button>
  );
}`;

const builtInThemes = [
  {
    id: 'default',
    name: 'Default',
    description: 'Clean system colors',
    colors: { primary: 'bg-blue-600', accent: 'bg-blue-100' },
    bestFor: 'Business apps, professional tools'
  },
  {
    id: 'metro',
    name: 'Metro',
    description: 'Clean transit-inspired design',
    colors: { primary: 'bg-slate-600', accent: 'bg-slate-100' },
    bestFor: 'Admin panels, systematic UIs'
  },
  {
    id: 'studio',
    name: 'Studio',
    description: 'Sophisticated designer grays',
    colors: { primary: 'bg-amber-600', accent: 'bg-amber-100' },
    bestFor: 'Design tools, creative applications'
  },
  {
    id: 'ruby',
    name: 'Ruby',
    description: 'Premium ruby red',
    colors: { primary: 'bg-red-600', accent: 'bg-red-100' },
    bestFor: 'Finance, luxury brands'
  },
  {
    id: 'neon',
    name: 'Neon',
    description: 'Electric cyberpunk',
    colors: { primary: 'bg-fuchsia-600', accent: 'bg-fuchsia-100' },
    bestFor: 'Gaming, tech startups'
  },
  {
    id: 'aurora',
    name: 'Aurora',
    description: 'Northern lights magic',
    colors: { primary: 'bg-purple-600', accent: 'bg-purple-100' },
    bestFor: 'Creative apps, elegant brands'
  }
];

function Themes() {
  const { theme: currentTheme, setTheme } = useTheme();

  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold mb-4">Themes</h1>
        <p className="text-xl text-muted-foreground">
          Beautiful themes with OKLCH color science. Switch themes instantly or create custom ones.
        </p>
      </div>

      {/* Theme Benefits */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Why Our Theming?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="pb-3">
              <Palette className="h-8 w-8 mb-2 text-primary" />
              <CardTitle className="text-base">OKLCH Colors</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Perceptually uniform colors that look consistent across devices.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <Zap className="h-8 w-8 mb-2 text-primary" />
              <CardTitle className="text-base">Runtime Switching</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Change themes instantly without page reloads or rebuilds.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <Globe className="h-8 w-8 mb-2 text-primary" />
              <CardTitle className="text-base">Multi-Tenant</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Perfect for white-label apps with brand-specific themes.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <Brush className="h-8 w-8 mb-2 text-primary" />
              <CardTitle className="text-base">Custom Themes</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Create unlimited custom themes with your brand colors.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Built-in Themes */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Built-in Themes</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {builtInThemes.map((themeInfo) => (
            <Card 
              key={themeInfo.id} 
              className={`cursor-pointer transition-all hover:shadow-md ${
                currentTheme === themeInfo.id ? 'ring-2 ring-primary' : ''
              }`}
              onClick={() => setTheme(themeInfo.id)}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{themeInfo.name}</CardTitle>
                  {currentTheme === themeInfo.id && (
                    <Badge variant="default">Active</Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{themeInfo.description}</p>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2 mb-3">
                  <div className={`w-6 h-6 rounded-full ${themeInfo.colors.primary}`} />
                  <div className={`w-6 h-6 rounded-full ${themeInfo.colors.accent}`} />
                </div>
                <p className="text-xs text-muted-foreground">
                  <strong>Best for:</strong> {themeInfo.bestFor}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Basic Usage */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Basic Usage</h2>
        <CodeBlock code={basicThemeCode} title="Theme Provider Setup" />
      </section>

      {/* Theme Switching */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Theme Switching</h2>
        <CodeBlock code={themeSwitchingCode} title="Runtime Theme Switching" />
      </section>

      {/* Custom Themes */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Custom Themes</h2>
        <p className="text-muted-foreground mb-4">
          Create custom themes using OKLCH color format for better color consistency:
        </p>
        <CodeBlock code={customThemeCode} title="Custom Theme Definition" />
      </section>

      {/* Runtime Theme Creation */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Dynamic Theme Creation</h2>
        <p className="text-muted-foreground mb-4">
          Register and switch to themes at runtime:
        </p>
        <CodeBlock code={runtimeThemeCode} title="Runtime Theme Registration" />
      </section>

      {/* OKLCH Explanation */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">About OKLCH Colors</h2>
        <Card>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Why OKLCH?</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Perceptually uniform - consistent lightness</li>
                  <li>• Better gradients and color mixing</li>
                  <li>• Future-proof (CSS Color Module Level 4)</li>
                  <li>• More predictable contrast ratios</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">OKLCH Format</h4>
                <code className="text-sm block bg-muted p-2 rounded">
                  oklch(0.5 0.2 220)<br />
                  <span className="text-muted-foreground">
                    ↑ Lightness (0-1)<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;↑ Chroma (0-0.4)<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↑ Hue (0-360)
                  </span>
                </code>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}

export default Themes;