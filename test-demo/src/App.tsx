import { useState, useLayoutEffect } from 'react';
import { Button } from '@voilajsx/uikit/button';
import { Card, CardContent, CardHeader, CardTitle } from '@voilajsx/uikit/card';
import { Badge } from '@voilajsx/uikit/badge';
import { Sun, Moon, Palette } from 'lucide-react';

import '../../dist/styles.css';

/**
 * Apply theme immediately to prevent flash
 */
function applyThemeImmediately(theme: string, mode: 'light' | 'dark') {
  const root = document.documentElement;
  const themes = ['sky', 'aurora', 'metro', 'neon', 'ruby', 'studio'];
  
  // Remove all existing theme classes
  themes.forEach(t => {
    root.classList.remove(`theme-${t}`);
  });
  root.classList.remove('light', 'dark');
  
  // Apply new theme and mode immediately
  root.classList.add(`theme-${theme}`);
  root.classList.add(mode);
  
  console.log(`🎨 Applied theme immediately: ${theme} (${mode}) - Classes: ${root.className}`);
}

const themes = [
  { id: 'sky', name: 'Sky', color: 'bg-blue-500' },
  { id: 'aurora', name: 'Aurora', color: 'bg-purple-500' },
  { id: 'neon', name: 'Neon', color: 'bg-pink-500' },
  { id: 'ruby', name: 'Ruby', color: 'bg-red-500' },
  { id: 'metro', name: 'Metro', color: 'bg-gray-500' },
  { id: 'studio', name: 'Studio', color: 'bg-slate-500' }
];

function ThemeShowcase() {
  // Initialize with immediate theme application
  const [currentTheme, setCurrentTheme] = useState(() => {
    const initialTheme = 'sky';
    const initialMode = 'light';
    applyThemeImmediately(initialTheme, initialMode);
    return initialTheme;
  });
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  // Debug: Log theme changes
  console.log('Current theme state:', currentTheme, mode);

  // Use useLayoutEffect for synchronous theme application
  useLayoutEffect(() => {
    applyThemeImmediately(currentTheme, mode);
  }, [currentTheme, mode]);

  // Updated theme setter with immediate application
  const handleThemeChange = (newTheme: string) => {
    applyThemeImmediately(newTheme, mode);
    setCurrentTheme(newTheme);
  };

  // Updated mode setter with immediate application
  const handleModeChange = (newMode: 'light' | 'dark') => {
    console.log('Mode change clicked:', newMode);
    applyThemeImmediately(currentTheme, newMode);
    setMode(newMode);
  };

  return (
      <div className="min-h-screen bg-background transition-colors">
        {/* Header */}
        <header className="border-b bg-card">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-foreground">🎨 UIKit Theme Showcase</h1>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleModeChange(mode === 'light' ? 'dark' : 'light')}
                >
                  {mode === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
                </Button>
              </div>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          {/* Current Theme Display */}
          <div className="mb-8">
            <Badge className="mb-2">Current Theme: {themes.find(t => t.id === currentTheme)?.name}</Badge>
            <h2 className="text-4xl font-bold text-primary mb-4">Same Code, Different Personalities</h2>
            <p className="text-muted-foreground text-lg">
              Watch how the same components transform with different themes. 
              Zero code changes, complete visual transformation.
            </p>
          </div>

          {/* Theme Switcher */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="h-5 w-5" />
                Theme Switcher
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                {themes.map((theme) => (
                  <Button
                    key={theme.id}
                    variant={currentTheme === theme.id ? "default" : "outline"}
                    onClick={() => {
                      console.log('Theme button clicked:', theme.id);
                      handleThemeChange(theme.id);
                    }}
                    className="w-full"
                  >
                    {theme.name}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Component Examples */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Buttons</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button className="w-full bg-primary">Primary Button</Button>
                <Button variant="secondary" className="w-full">Secondary</Button>
                <Button variant="outline" className="w-full">Outline</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Colors & Typography</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="p-3 bg-primary text-primary-foreground rounded">Primary Background</div>
                <div className="p-3 bg-secondary text-secondary-foreground rounded">Secondary Background</div>
                <div className="p-3 bg-accent text-accent-foreground rounded">Accent Background</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Enhanced Features</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm text-muted-foreground">
                  ✨ Automatic gradients<br/>
                  🎨 Custom typography<br/>
                  📐 Enhanced spacing<br/>
                  🌟 Theme-specific shadows
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Footer */}
          <footer className="mt-12 text-center">
            <p className="text-muted-foreground">
              Built with <span className="text-primary font-semibold">@voilajsx/uikit</span>
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Run <code className="bg-muted px-2 py-1 rounded">npx uikit --help</code> for more commands
            </p>
          </footer>
        </main>
      </div>
  );
}

export default ThemeShowcase;