/**
 * @fileoverview Enhanced layout wrapper with prop drilling and theme control
 * @description Provides environment-based layout wrapping with deep prop injection
 * @package @voilajsx/uikit
 * @file /src/lib/layout-wrapper.js
 */

import React from 'react';
import { ThemeProvider } from '../themes/theme-provider.jsx';
import { AdminLayout } from '../components/layouts/admin.jsx';
import { PageLayout, PageHeader, PageContent, PageFooter } from '../components/layouts/page.jsx';
import { AuthLayout } from '../components/layouts/auth.jsx';
import { BlankLayout } from '../components/layouts/blank.jsx';

/**
 * Reads layout configuration from environment variables with prop drilling support
 * @returns {Object} Complete layout configuration
 */
function getLayoutConfig() {
  // Use import.meta.env for Vite (browser-compatible) instead of process.env
  const env = typeof import !== 'undefined' && import.meta?.env ? import.meta.env : {};
  
  const config = {
    // Theme configuration
    theme: env.VOILA_THEME || 'default',
    variant: env.VOILA_VARIANT || 'light',
    detectSystem: env.VOILA_DETECT_SYSTEM === 'true',
    
    // Layout configuration
    layout: env.VOILA_LAYOUT || 'admin',
    layoutVariant: env.VOILA_LAYOUT_VARIANT || 'default',
    layoutSize: env.VOILA_LAYOUT_SIZE || 'default',
    
    // Content configuration
    title: env.VOILA_TITLE || 'Platform',
    logo: env.VOILA_LOGO,
    
    // Navigation configuration
    navigation: env.VOILA_NAV ? JSON.parse(env.VOILA_NAV) : [],
    
    // Admin layout specific props
    adminLayout: {
      variant: env.VOILA_ADMIN_VARIANT || 'default',
      size: env.VOILA_ADMIN_SIZE || 'default',
      collapsible: env.VOILA_ADMIN_COLLAPSIBLE !== 'false',
      defaultSidebarOpen: env.VOILA_ADMIN_SIDEBAR_OPEN !== 'false',
    },
    
    // Page layout specific props
    pageLayout: {
      variant: env.VOILA_PAGE_VARIANT || 'default',
      size: env.VOILA_PAGE_SIZE || 'xl',
    },
    
    // Header specific props
    header: {
      variant: env.VOILA_HEADER_VARIANT || 'default',
      sticky: env.VOILA_HEADER_STICKY !== 'false',
      size: env.VOILA_HEADER_SIZE || 'md',
    },
    
    // Footer specific props
    footer: {
      variant: env.VOILA_FOOTER_VARIANT || 'default',
      size: env.VOILA_FOOTER_SIZE || 'md',
    },
    
    // Auth layout specific props
    authLayout: {
      variant: env.VOILA_AUTH_VARIANT || 'card',
      imageUrl: env.VOILA_AUTH_IMAGE_URL,
      imageOverlay: env.VOILA_AUTH_IMAGE_OVERLAY || 'dark',
    },
    
    // Blank layout specific props
    blankLayout: {
      variant: env.VOILA_BLANK_VARIANT || 'default',
    },
    
    // Additional custom props (JSON format)
    customProps: env.VOILA_CUSTOM_PROPS ? 
      JSON.parse(env.VOILA_CUSTOM_PROPS) : {},
  };
  
  if (typeof window !== 'undefined' && window.console) {
    console.log('🔧 Layout configuration loaded:', {
      theme: config.theme,
      variant: config.variant,
      layout: config.layout,
      title: config.title,
      navItems: config.navigation.length,
      customProps: Object.keys(config.customProps).length
    });
  }
  
  return config;
}

/**
 * Enhanced layout wrapper component with full prop drilling
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - App content
 * @param {Object} [props.overrides] - Manual overrides for env config
 * @returns {JSX.Element} Wrapped app with layout theme and layout
 */
export function LayoutWrapper({ children, overrides = {} }) {
  const config = { ...getLayoutConfig(), ...overrides };
  
  return (
    <ThemeProvider 
      theme={config.theme} 
      variant={config.variant}
      detectSystem={config.detectSystem}
    >
      {renderLayoutFromConfig(children, config)}
    </ThemeProvider>
  );
}

/**
 * Renders appropriate layout with full prop drilling based on configuration
 * @param {React.ReactNode} children - App content
 * @param {Object} config - Complete layout configuration
 * @returns {JSX.Element} Layout-wrapped content with all props
 */
function renderLayoutFromConfig(children, config) {
  switch (config.layout) {
    case 'admin':
      return (
        <AdminLayout
          variant={config.adminLayout.variant}
          size={config.adminLayout.size}
          title={config.title}
          logo={config.logo ? <img src={config.logo} alt="Logo" className="h-8 w-auto" /> : undefined}
          navigationItems={config.navigation}
          currentPath={typeof window !== 'undefined' ? window.location.pathname : '/'}
          onNavigate={handleLayoutNavigation}
          collapsible={config.adminLayout.collapsible}
          defaultSidebarOpen={config.adminLayout.defaultSidebarOpen}
          headerActions={renderHeaderActions(config)}
          {...config.customProps}
        >
          {children}
        </AdminLayout>
      );
      
    case 'page':
      return (
        <PageLayout 
          variant={config.pageLayout.variant} 
          size={config.pageLayout.size}
          {...config.customProps}
        >
          <PageHeader 
            variant={config.header.variant} 
            sticky={config.header.sticky}
            size={config.header.size}
          >
            {config.logo ? (
              <img src={config.logo} alt="Logo" className="h-8 w-auto mr-3" />
            ) : (
              <span className="text-xl font-bold">{config.title}</span>
            )}
            {config.navigation.length > 0 && (
              <nav className="ml-auto">
                {config.navigation.map(item => (
                  <button
                    key={item.key}
                    onClick={() => handleLayoutNavigation(item.path, item)}
                    className="ml-4 text-foreground hover:text-primary"
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            )}
          </PageHeader>
          <PageContent>{children}</PageContent>
          <PageFooter 
            variant={config.footer.variant}
            size={config.footer.size}
          >
            <div className="text-center text-sm text-muted-foreground">
              © 2024 {config.title}. All rights reserved.
            </div>
          </PageFooter>
        </PageLayout>
      );
      
    case 'auth':
      return (
        <AuthLayout 
          variant={config.authLayout.variant}
          title={config.title}
          logo={config.logo ? <img src={config.logo} alt="Logo" className="h-16 w-auto" /> : undefined}
          imageUrl={config.authLayout.imageUrl}
          imageOverlay={config.authLayout.imageOverlay}
          {...config.customProps}
        >
          {children}
        </AuthLayout>
      );
      
    case 'blank':
      return (
        <BlankLayout 
          variant={config.blankLayout.variant}
          title={config.title}
          logo={config.logo ? <img src={config.logo} alt="Logo" className="h-12 w-auto" /> : undefined}
          {...config.customProps}
        >
          {children}
        </BlankLayout>
      );
      
    default:
      // No layout wrapper - just theme provider
      return children;
  }
}

/**
 * Render header actions (theme toggle, user menu, etc.)
 * @param {Object} config - Layout configuration
 * @returns {React.ReactNode} Header actions component
 */
function renderHeaderActions(config) {
  // You can expand this to include theme toggles, user menus, etc.
  return null;
}

/**
 * Handle layout navigation events with enhanced logic
 * @param {string} path - Navigation path
 * @param {Object} item - Navigation item with enhanced properties
 */
function handleLayoutNavigation(path, item) {
  if (typeof window === 'undefined') return;
  
  // Handle special actions
  switch (item.onClick) {
    case 'handleLogout':
      // Platform logout logic
      localStorage.removeItem('auth_token');
      localStorage.removeItem('auth_user');
      // Dispatch logout event for apps to listen to
      window.dispatchEvent(new CustomEvent('layout-logout'));
      window.location.href = '/login';
      return;
      
    case 'toggleTheme':
      // Toggle theme variant
      const currentVariant = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
      const newVariant = currentVariant === 'dark' ? 'light' : 'dark';
      document.documentElement.classList.toggle('dark', newVariant === 'dark');
      localStorage.setItem('uikit-theme', JSON.stringify({ 
        theme: process.env.VOILA_THEME || 'default',
        variant: newVariant 
      }));
      return;
      
    default:
      // Custom onClick handlers
      if (typeof item.onClick === 'function') {
        item.onClick();
        return;
      }
  }
  
  // Standard navigation
  if (path) {
    // Check if external link
    if (path.startsWith('http') || path.startsWith('//')) {
      window.open(path, item.target || '_blank');
    } else {
      window.location.href = path;
    }
  }
}

/**
 * Hook to access layout configuration in components
 * @returns {Object} Current layout configuration
 */
export function useLayoutConfig() {
  return getLayoutConfig();
}

/**
 * Utility to merge layout config with component props
 * @param {Object} componentProps - Component props
 * @param {string} configKey - Key in layout config (e.g., 'adminLayout')
 * @returns {Object} Merged props
 */
export function withLayoutConfig(componentProps, configKey) {
  const config = getLayoutConfig();
  const layoutProps = config[configKey] || {};
  
  return {
    ...layoutProps,
    ...componentProps, // Component props override layout config
  };
}