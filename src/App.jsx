/**
 * @fileoverview Minimalist UIKit hero with elegant positioning
 * @description Clean, elegant hero section with perfect spacing and layout
 * @package @voilajsx/uikit
 * @file /src/App.jsx
 */

import { useState } from 'react';
import { ThemeProvider, useTheme } from './themes';

// Import components
import { Button } from './components/ui/button';
import { Badge } from './components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/ui/select';
import { Switch } from './components/ui/switch';

// Minimalist theme selector for actions area
function ThemeSelector() {
  const { theme, variant, setTheme, setVariant } = useTheme();
  
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <div className="flex items-center gap-3">
        <Select value={theme} onValueChange={setTheme}>
          <SelectTrigger className="w-32 h-10 border-0 bg-muted/50">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="default">Default</SelectItem>
            <SelectItem value="ruby">Ruby</SelectItem>
            <SelectItem value="aurora">Aurora</SelectItem>
            <SelectItem value="neon">Neon</SelectItem>
            <SelectItem value="studio">Studio</SelectItem>
            <SelectItem value="metro">Metro</SelectItem>
          </SelectContent>
        </Select>
        
        <Switch 
          checked={variant === 'dark'} 
          onCheckedChange={(checked) => setVariant(checked ? 'dark' : 'light')}
        />
      </div>
    </div>
  );
}

// Elegant hero section with perfect spacing
function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-8 text-center">
        
        {/* Status badge */}
        <Badge 
          variant="secondary" 
          className="mb-8 text-xs px-3 py-1 bg-muted border-0"
        >
          @voilajsx/uikit
        </Badge>
        
        {/* Main heading */}
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            UI
          </span>
          <span className="text-foreground">Kit</span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          Cross-platform React component library with builtin themes for modern development
        </p>
        
        {/* Theme Controls */}
        <div className="mb-16">
          <ThemeSelector />
        </div>
        
        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="text-center">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="font-semibold mb-2">Built-in Themes</h3>
            <p className="text-sm text-muted-foreground">
              Extensible theming with light/dark mode support
            </p>
          </div>
          
          <div className="text-center">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="font-semibold mb-2">Cross-Platform</h3>
            <p className="text-sm text-muted-foreground">
              Web, Desktop (Tauri), Mobile (Expo) ready
            </p>
          </div>
          
          <div className="text-center">
            <div className="text-4xl mb-4">🏗️</div>
            <h3 className="font-semibold mb-2">Complete Library</h3>
            <p className="text-sm text-muted-foreground">
              Components, layouts, and templates included
            </p>
          </div>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-md mx-auto text-center">
          <div className="group cursor-pointer">
            <div className="text-2xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">
              Easy
            </div>
            <div className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
              Adoption
            </div>
          </div>
          <div className="group cursor-pointer">
            <div className="text-2xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">
              Plug & Play
            </div>
            <div className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
              Ready
            </div>
          </div>
          <div className="group cursor-pointer">
            <div className="text-2xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">
              Simple
            </div>
            <div className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
              Setup
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}

// Main content
function AppContent() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection />
    </div>
  );
}

// Main app
export default function App() {
  return (
    <ThemeProvider theme="default" variant="light" detectSystem={true}>
      <AppContent />
    </ThemeProvider>
  );
}