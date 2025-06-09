/**
 * Main layout component using PageTemplate with proper navigation
 * @module @voilajsx/uikit
 * @file src/components/Layout.tsx
 */

import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { PageTemplate } from '@voilajsx/uikit/templates/page';
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
  Search,
  Github,
  Sparkles,
  Sun,
  Moon,
  Shield,
  Settings,
  Bell
} from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

/**
 * Main layout component using PageTemplate with proper props
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Page content
 * @returns {JSX.Element} Layout component
 */
function Layout({ children }: LayoutProps): JSX.Element {
  const location = useLocation();
  const navigate = useNavigate();
  const { theme, variant, setTheme, toggleVariant } = useTheme();

  // Navigation items with proper structure for PageTemplate
  const navigationItems = [
    {
      label: 'Home',
      key: 'home',
      icon: Home,
      onClick: () => navigate('/'),
      isActive: location.pathname === '/',
      className: location.pathname === '/' ? 'bg-secondary text-secondary-foreground' : ''
    },
    {
      label: 'Get Started',
      key: 'start',
      icon: Zap,
      onClick: () => navigate('/start'),
      isActive: location.pathname === '/start',
      className: location.pathname === '/start' ? 'bg-secondary text-secondary-foreground' : ''
    },
    {
      label: 'Components',
      key: 'components',
      icon: Puzzle,
      onClick: () => navigate('/components'),
      isActive: location.pathname === '/components',
      className: location.pathname === '/components' ? 'bg-secondary text-secondary-foreground' : ''
    },
    {
      label: 'Templates',
      key: 'templates',
      icon: LayoutIcon,
      isActive: location.pathname.startsWith('/templates'),
      className: location.pathname.startsWith('/templates') ? 'bg-secondary text-secondary-foreground' : '',
      items: [
        {
          label: 'Overview',
          key: 'templates-overview',
          icon: LayoutIcon,
          onClick: () => navigate('/templates')
        },
        {
          label: 'AuthTemplate',
          key: 'auth-template',
          icon: Shield,
          onClick: () => navigate('/templates/auth')
        }
      ]
    },
    {
      label: 'Themes',
      key: 'themes',
      icon: Palette,
      onClick: () => navigate('/themes'),
      isActive: location.pathname === '/themes',
      className: location.pathname === '/themes' ? 'bg-secondary text-secondary-foreground' : ''
    },
    {
      label: 'Examples',
      key: 'examples',
      icon: BookOpen,
      onClick: () => navigate('/examples'),
      isActive: location.pathname === '/examples',
      className: location.pathname === '/examples' ? 'bg-secondary text-secondary-foreground' : ''
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

  // Logo component
  const logo = (
    <div 
      onClick={() => navigate('/')} 
      className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer"
    >
      <div className="w-8 h-8 border border-secondary  rounded-lg flex items-center justify-center">
        <Sparkles className="h-4 w-4 text-primary-foreground" />
      </div>
      <span className="text-xl font-semibold text-secondary">voilajsx</span>
      <Badge variant="secondary" className="text-xs">UI</Badge>
    </div>
  );

  

  // Header actions (right side)
  const headerActions = (
    <>
      {/* Theme Selector */}
      <select
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
        className="bg-primary border border-border rounded px-3 py-1.5 text-sm text-secondary hidden md:block"
      >
        {themes.map((t) => (
          <option key={t.id} value={t.id}>
            {t.name}
          </option>
        ))}
      </select>

      {/* Dark/Light Toggle */}
      <Button
        variant="secondary"
        size="sm"
        onClick={toggleVariant}
        title={`Switch to ${variant === 'light' ? 'dark' : 'light'} mode`}
        className="text-foreground hover:text-foreground"
      >
        {variant === 'light' ? (
          <Moon className="h-4 w-4" />
        ) : (
          <Sun className="h-4 w-4" />
        )}
      </Button>

     
    </>
  );

  return (
    <PageTemplate
      variant="default"
      headerVariant="primary"
      logo={logo}
      navigationItems={navigationItems}
      headerActions={headerActions}
      sticky={true}
    >
      {children}
    </PageTemplate>
  );
}

export default Layout;