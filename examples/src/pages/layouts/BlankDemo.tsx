/**
 * Blank Layout demo - Interactive examples
 * @module @voilajsx/uikit
 * @file examples/src/pages/layouts/BlankDemo.tsx
 */

import React from 'react';
import { BlankLayout } from '../../../../src/components/layouts/blank';
import { Button } from '../../../../src/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../../../src/components/ui/card';
import { 
  Home, 
  AlertTriangle, 
  Wrench, 
  Heart,
  RefreshCw,
  ArrowLeft,
  Palette,
  Layout
} from 'lucide-react';
import { useState } from 'react';

function BlankDemo() {
  const [currentExample, setCurrentExample] = useState('404');
  const [currentScheme, setCurrentScheme] = useState<'simple' | 'card' | 'empty'>('empty');
  const [currentTone, setCurrentTone] = useState<'clean' | 'subtle' | 'brand' | 'contrast'>('clean');
  const [currentSize, setCurrentSize] = useState<'sm' | 'md' | 'lg' | 'xl' | 'full'>('lg');
  const [currentTheme, setCurrentTheme] = useState('default');
  const [currentMode, setCurrentMode] = useState<'light' | 'dark'>('light');

  // Available options
  const themes = ['default', 'aurora', 'metro', 'neon', 'ruby', 'studio'];
  const modes = ['light', 'dark'];
  const sizes = ['sm', 'md', 'lg', 'xl', 'full'] as const;
  const schemes = ['simple', 'card'] as const;
  const tones = ['clean', 'subtle', 'brand', 'contrast'] as const;

  // Apply theme and mode to document root
  React.useEffect(() => {
    const root = document.documentElement;
    
    // Remove existing themes and modes
    themes.forEach(theme => {
      if (theme !== 'default') {
        root.classList.remove(`theme-${theme}`);
      }
    });
    root.classList.remove('light', 'dark');
    
    // Apply current theme and mode
    if (currentTheme !== 'default') {
      root.classList.add(`theme-${currentTheme}`);
    }
    root.classList.add(currentMode);
  }, [currentTheme, currentMode]);

  // Example content based on current selection
  const getExampleContent = () => {
    switch (currentExample) {
      case '404':
        return (
          <>
          <section class="bg-amber-100">
 <AlertTriangle className="h-16 w-16 mx-auto mb-6 text-destructive" />
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-center">404</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-md mx-auto">
              The page you're looking for doesn't exist.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => setCurrentExample('home')}>
                <Home className="h-4 w-4 mr-2" />
                Go Home
              </Button>
              <Button variant="outline" onClick={() => window.history.back()}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Go Back
              </Button>
            </div>
          </section>
           
          </>
        );
      
      case 'maintenance':
        return (
          <>
            <Wrench className="h-16 w-16 mx-auto mb-6 text-primary" />
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Under Maintenance</h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto">
              We're making some improvements. We'll be back soon!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button>
                <RefreshCw className="h-4 w-4 mr-2" />
                Try Again
              </Button>
              <Button variant="outline">Notify Me</Button>
            </div>
          </>
        );
      
      case 'about':
        return (
          <>
            <div className="h-16 w-16 mx-auto mb-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
              <Heart className="h-8 w-8" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">About Us</h1>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              We're passionate about creating beautiful, functional user interfaces that help teams build amazing products.
            </p>
            <div className="space-y-4 text-muted-foreground max-w-xl mx-auto">
              <p>Founded in 2024, our mission is to simplify UI development with thoughtful design systems.</p>
              <p>We believe in minimal but essential components that developers actually want to use.</p>
            </div>
            <div className="mt-8">
              <Button>Learn More</Button>
            </div>
          </>
        );
      
      case 'coming-soon':
        return (
          <>
            <div className="h-16 w-16 mx-auto mb-6 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
              <Layout className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Coming Soon</h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto">
              Something amazing is in the works. Stay tuned for updates!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button>Get Notified</Button>
              <Button variant="outline">Follow Progress</Button>
            </div>
          </>
        );
      
      default:
        return (
          <>
            <Home className="h-16 w-16 mx-auto mb-6 text-primary" />
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Welcome Home</h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto">
              You're back at the homepage. Everything is working perfectly!
            </p>
            <Button onClick={() => setCurrentExample('404')}>
              Explore Demo
            </Button>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Demo Controls Header */}
      <div className="border-b border-border bg-muted/20">
        <div className="container mx-auto p-6">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-foreground">BlankLayout Demo</h1>
            <p className="text-lg text-muted-foreground">
              Interactive demonstration of BlankLayout - minimal but essential.
            </p>

            {/* Example Selection */}
            <Card className="bg-card text-card-foreground border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Example Selection</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {['404', 'maintenance', 'about', 'coming-soon', 'home'].map((example) => (
                    <Button
                      key={example}
                      variant={currentExample === example ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setCurrentExample(example)}
                      className="capitalize"
                    >
                      {example.replace('-', ' ')}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Interactive Controls */}
            <div className="grid lg:grid-cols-4 gap-6">
              {/* Layout Controls */}
              <Card className="bg-card text-card-foreground border-border">
                <CardHeader>
                  <CardTitle className="text-foreground flex items-center gap-2">
                    <Layout className="h-4 w-4" />
                    Layout
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Scheme: {currentScheme}
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {schemes.map((scheme) => (
                        <Button
                          key={scheme}
                          variant={currentScheme === scheme ? 'default' : 'outline'}
                          size="sm"
                          onClick={() => setCurrentScheme(scheme)}
                          className="capitalize"
                        >
                          {scheme}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Tone: {currentTone}
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {tones.map((tone) => (
                        <Button
                          key={tone}
                          variant={currentTone === tone ? 'default' : 'outline'}
                          size="sm"
                          onClick={() => setCurrentTone(tone)}
                          className="capitalize"
                        >
                          {tone}
                        </Button>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Size Controls */}
              <Card className="bg-card text-card-foreground border-border">
                <CardHeader>
                  <CardTitle className="text-foreground">Size</CardTitle>
                </CardHeader>
                <CardContent>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Size: {currentSize}
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {sizes.map((size) => (
                        <Button
                          key={size}
                          variant={currentSize === size ? 'default' : 'outline'}
                          size="sm"
                          onClick={() => setCurrentSize(size)}
                          className="capitalize"
                        >
                          {size}
                        </Button>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Theme Controls */}
              <Card className="bg-card text-card-foreground border-border">
                <CardHeader>
                  <CardTitle className="text-foreground flex items-center gap-2">
                    <Palette className="h-4 w-4" />
                    Theme
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Theme: {currentTheme}
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {themes.slice(0, 4).map((theme) => (
                        <Button
                          key={theme}
                          variant={currentTheme === theme ? 'default' : 'outline'}
                          size="sm"
                          onClick={() => setCurrentTheme(theme)}
                          className="capitalize"
                        >
                          {theme}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Mode: {currentMode}
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {modes.map((mode) => (
                        <Button
                          key={mode}
                          variant={currentMode === mode ? 'default' : 'outline'}
                          size="sm"
                          onClick={() => setCurrentMode(mode as 'light' | 'dark')}
                          className="capitalize"
                        >
                          {mode}
                        </Button>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Current State */}
              <Card className="bg-card text-card-foreground border-border">
                <CardHeader>
                  <CardTitle className="text-foreground">Current State</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted/30 p-3 rounded-lg space-y-1 text-xs">
                    <div><strong>Example:</strong> {currentExample}</div>
                    <div><strong>Scheme:</strong> {currentScheme}</div>
                    <div><strong>Tone:</strong> {currentTone}</div>
                    <div><strong>Size:</strong> {currentSize}</div>
                    <div><strong>Theme:</strong> {currentTheme}</div>
                    <div><strong>Mode:</strong> {currentMode}</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* BlankLayout Demo */}
      <BlankLayout 
        scheme={currentScheme} 
        tone={currentTone} 
        size={currentSize}
        className="min-h-[calc(100vh-200px)]"
      >
        {getExampleContent()}
      </BlankLayout>
    </div>
  );
}

export default BlankDemo;