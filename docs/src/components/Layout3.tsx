/**
 * Main layout component using PageTemplate with proper navigation
 * @module @voilajsx/uikit
 * @file src/components/Layout.tsx
 */

import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@voilajsx/uikit/button';
import { Badge } from '@voilajsx/uikit/badge';
import { Input } from '@voilajsx/uikit/input';
import { useTheme } from '@voilajsx/uikit/theme-provider';
import { 
  Home, 
  Puzzle, 
  Layout as LayoutIcon, 
  Palette, 
  BookOpen,
  Zap,
  FileText,
  Monitor,
  Users,
  Globe,
  Bell,
  Settings,
  User,
  Search,
  Github,
  Package,
  Shield,
  Sparkles,
  Sun,
  Moon
} from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

/**
 * Main layout component with navigation and theme switching
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Page content
 * @returns {JSX.Element} Layout component
 */
function Layout({ children }: LayoutProps): JSX.Element {
  const location = useLocation();
  const navigate = useNavigate();
  const { theme, variant, setTheme, toggleVariant } = useTheme();

  // Navigation items
  const navigationItems = [
    {
      label: 'Home',
      key: 'home',
      icon: Home,
      onClick: () => navigate('/'),
      isActive: location.pathname === '/'
    },
    {
      label: 'Get Started',
      key: 'start',
      icon: Zap,
      onClick: () => navigate('/start'),
      isActive: location.pathname === '/start'
    },
    {
      label: 'Components',
      key: 'components',
      icon: Puzzle,
      onClick: () => navigate('/components'),
      isActive: location.pathname === '/components'
    },
    {
      label: 'Templates',
      key: 'templates',
      icon: LayoutIcon,
      onClick: () => navigate('/templates'),
      isActive: location.pathname.startsWith('/templates'),
      badge: '1' // Show we have 1 template available
    },
    {
      label: 'Themes',
      key: 'themes',
      icon: Palette,
      onClick: () => navigate('/themes'),
      isActive: location.pathname === '/themes'
    },
    {
      label: 'Examples',
      key: 'examples',
      icon: BookOpen,
      onClick: () => navigate('/examples'),
      isActive: location.pathname === '/examples'
    }
  ];

  // Theme switcher
  const themes = [
    { id: 'default', name: 'Default', color: 'bg-blue-500' },
    { id: 'metro', name: 'Metro', color: 'bg-slate-500' },
    { id: 'studio', name: 'Studio', color: 'bg-amber-500' },
    { id: 'ruby', name: 'Ruby', color: 'bg-red-500' },
    { id: 'neon', name: 'Neon', color: 'bg-fuchsia-500' },
    { id: 'aurora', name: 'Aurora', color: 'bg-purple-500' },
  ];

  return (
    <div className="min-h-screen bg-background ">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 max-w-screen-2xl items-center">
          {/* Logo */}
          <div 
            onClick={() => navigate('/')} 
            className="flex items-center gap-2 mr-6 hover:opacity-80 transition-opacity cursor-pointer"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center">
              <Sparkles className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="text-xl font-semibold text-foreground">voilajsx</span>
            <Badge variant="secondary" className="text-xs">UI</Badge>
          </div>

          {/* Navigation */}
          <nav className="flex items-center space-x-6 text-sm font-medium flex-1">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.key}
                  onClick={item.onClick}
                  className={`flex items-center gap-2 transition-colors hover:text-foreground/80 ${
                    item.isActive 
                      ? 'text-foreground' 
                      : 'text-foreground/60'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                  {item.badge && (
                    <Badge variant="secondary" className="text-xs ml-1">
                      {item.badge}
                    </Badge>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search..."
                className="pl-10 w-64 bg-muted/50 border-border/50 focus:bg-background focus:border-border"
              />
            </div>

            {/* Theme Selector */}
            <div className="flex items-center gap-2">
              <select
                value={theme}
                onChange={(e) => setTheme(e.target.value)}
                className="bg-background border border-border rounded px-3 py-1 text-sm"
              >
                {themes.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.name}
                  </option>
                ))}
              </select>

              {/* Dark/Light Toggle */}
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleVariant}
                title={`Switch to ${variant === 'light' ? 'dark' : 'light'} mode`}
              >
                {variant === 'light' ? (
                  <Moon className="h-4 w-4" />
                ) : (
                  <Sun className="h-4 w-4" />
                )}
              </Button>
            </div>

            {/* GitHub Link */}
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => window.open('https://github.com/voilajsx/uikit', '_blank')}
              title="View on GitHub"
            >
              <Github className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container max-w-screen-2xl py-6 lg:py-10">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row max-w-screen-2xl">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              Built with ❤️ in India by the{' '}
              <a
                href="https://github.com/orgs/voilajsx/people"
                target="_blank"
                rel="noreferrer"
                className="font-medium underline underline-offset-4"
              >
                VoilaJSX Team
              </a>
              . The source code is available on{' '}
              <a
                href="https://github.com/voilajsx/uikit"
                target="_blank"
                rel="noreferrer"
                className="font-medium underline underline-offset-4"
              >
                GitHub
              </a>
              .
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;