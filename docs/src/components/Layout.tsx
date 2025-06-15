/**
 * Main layout component using Page compound pattern
 * @module @voilajsx/uikit
 * @file src/components/Layout.tsx
 */

import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { PageLayout as Page } from '@voilajsx/uikit/page';
import { Container } from '@voilajsx/uikit/container';
import { Button } from '@voilajsx/uikit/button';
import { Badge } from '@voilajsx/uikit/badge';
import { useTheme } from '@voilajsx/uikit/theme-provider';
import { 
  Home, 
  Puzzle, 
  Layout as LayoutIcon, 
  Palette, 
  BookOpen,
  Zap,
  SquareMousePointer,
  Shapes,
  Rows,
  Github,
  Sparkles,
  Sun,
  Grid2X2,
  Moon,
  Bell,
  Settings
} from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

/**
 * Main layout component using Page compound pattern
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Page content
 * @returns {JSX.Element} Layout component
 */
function Layout({ children }: LayoutProps): JSX.Element {
  const location = useLocation();
  const navigate = useNavigate();
  const { theme, variant, setTheme, toggleVariant } = useTheme();

  // Navigation items with proper structure
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
      icon: SquareMousePointer,
      isActive: location.pathname.startsWith('/components'),
      items: [
        {
          label: 'Overview',
          key: 'Components',
          icon: Grid2X2,
          onClick: () => navigate('/components')
        },
        {
          label: 'UI',
          key: 'ui-components',
          icon: Shapes,
          onClick: () => navigate('/components/ui')
        },
        {
          label: 'Sections',
          key: 'sections',
          icon: Rows,
          onClick: () => navigate('/components/sections')
        },
        {
          label: 'Layouts',
          key: 'layouts',
          icon: LayoutIcon,
          onClick: () => navigate('/components/layouts')
        }
      ]
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

  // Available themes for selector
  const themes = [
    { id: 'default', name: 'Default' },
    { id: 'metro', name: 'Metro' },
    { id: 'studio', name: 'Studio' },
    { id: 'ruby', name: 'Ruby' },
    { id: 'neon', name: 'Neon' },
    { id: 'aurora', name: 'Aurora' },
  ];

  return (
    <Page variant="default" >
      {/* Header */}
      <Page.Header variant="primary" sticky={true}>
        {/* Logo */}
        <Page.Logo>
          <div 
            onClick={() => navigate('/')} 
            className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer"
          >
            <div className="w-8 h-8 bg-primary-foreground/20 rounded-lg flex items-center justify-center">
              <Sparkles className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="text-xl font-semibold text-primary-foreground">voilajsx</span>
            <Badge variant="secondary" className="text-xs bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30">
              UI
            </Badge>
          </div>
        </Page.Logo>

        {/* Navigation + Actions */}
        <div className="flex items-center space-x-4">
          {/* Main Navigation */}
          <Page.Nav items={navigationItems} />
          
          {/* Header Actions */}
          <div className="flex items-center space-x-2">
            {/* Theme Selector */}
            <select
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              className="bg-primary-foreground/10 border border-primary-foreground/30 rounded px-3 py-1.5 text-sm text-primary-foreground hidden md:block focus:outline-none focus:ring-2 focus:ring-primary-foreground/50"
            >
              {themes.map((t) => (
                <option key={t.id} value={t.id} className="bg-background text-foreground">
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
              className="text-primary-foreground hover:bg-primary-foreground/10"
            >
              {variant === 'light' ? (
                <Moon className="h-4 w-4" />
              ) : (
                <Sun className="h-4 w-4" />
              )}
            </Button>

            
          </div>
        </div>
      </Page.Header>

      {/* Main Content */}
      <Page.Content >
          <div className="py-6">
            {children}
          </div>
      </Page.Content>

      {/* Footer */}
      <Page.Footer className="bg-card border-border">
        <div className="pt-10 pb-20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Left side - Enhanced Brand */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center shadow-sm">
                <Sparkles className="h-4 w-4 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-semibold">@voilajsx/uikit</span>
                <span className="text-xs text-muted-foreground">Cross-platform components</span>
              </div>
            </div>

            {/* Center - Enhanced Links */}
            <div className="flex items-center flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-muted-foreground">
              <button 
                onClick={() => navigate('/components')}
                className="hover:text-foreground transition-colors font-medium"
              >
                Components
              </button>
              <button 
                onClick={() => navigate('/themes')}
                className="hover:text-foreground transition-colors font-medium"
              >
                Themes
              </button>
              <button 
                onClick={() => navigate('/examples')}
                className="hover:text-foreground transition-colors font-medium"
              >
                Examples
              </button>
              <a 
                href="https://github.com/voilajsx/uikit" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors font-medium flex items-center gap-1"
              >
                <Github className="h-3 w-3" />
                GitHub
              </a>
            </div>

            {/* Right side - Enhanced Copyright with Version */}
            <div className="flex flex-col items-center md:items-end gap-1">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-xs">v1.0.0</Badge>
                <span className="text-xs text-muted-foreground">MIT</span>
              </div>
              <div className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} VoilaJSX Team
              </div>
            </div>
          </div>

          {/* Bottom section - Enhanced */}
          <div className="mt-8 pt-6 border-t border-border">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-xs text-muted-foreground text-center sm:text-left">
                Built with ❤️ in India • Powered by React & Tailwind CSS
              </p>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <a href="https://github.com/voilajsx/uikit" ><button 
                
                  className="hover:text-foreground transition-colors"
                >
                  Changelog
                </button></a>
                
                <span>•</span>
                <a href="https://github.com/voilajsx/uikit/blob/main/LICENSE">
      <button 
                  className="hover:text-foreground transition-colors"
                >
                  Licence
                </button>
                </a>
                
              </div>
            </div>
          </div>
        </div>
      </Page.Footer>
    </Page>
  );
}

export default Layout;