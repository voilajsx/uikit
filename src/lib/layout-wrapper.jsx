/**
 * @fileoverview Enhanced layout wrapper with VITE__ environment variables and debugging
 * @description Uses VoilaJS dot notation convention with VITE__ prefix for browser compatibility
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
 * Parses navigation configuration from JSON string
 * @param {string} navConfig - Navigation configuration as JSON string
 * @returns {Array} Parsed navigation items
 */
function parseNavigationConfig(navConfig) {
  if (!navConfig) return [];
  
  try {
    return JSON.parse(navConfig);
  } catch (error) {
    console.warn('Failed to parse navigation JSON:', navConfig);
    return [];
  }
}

/**
 * Reads layout configuration from VITE__ environment variables with debugging
 * @returns {Object} Complete layout configuration
 */
function getLayoutConfig() {
  // Use import.meta.env for Vite environment variables
  const env = import.meta.env || {};
  
  // Debug: Show raw environment variables
  console.log('🔍 DEBUG getLayoutConfig: Raw environment variables:', {
    VITE__LAYOUT__THEME: env.VITE__LAYOUT__THEME,
    VITE__LAYOUT__VARIANT: env.VITE__LAYOUT__VARIANT,
    VITE__LAYOUT__TYPE: env.VITE__LAYOUT__TYPE,
    VITE__LAYOUT__TITLE: env.VITE__LAYOUT__TITLE,
    VITE__LAYOUT__ADMIN__VARIANT: env.VITE__LAYOUT__ADMIN__VARIANT,
    VITE__LAYOUT__ADMIN__SIZE: env.VITE__LAYOUT__ADMIN__SIZE,
  });
  
  const config = {
    // Theme configuration
    theme: env.VITE__LAYOUT__THEME || 'default',
    variant: env.VITE__LAYOUT__VARIANT || 'light',
    detectSystem: env.VITE__LAYOUT__DETECT_SYSTEM === 'true',
    
    // Layout configuration
    layout: env.VITE__LAYOUT__TYPE || 'admin',
    title: env.VITE__LAYOUT__TITLE || env.VITE__APP__NAME || 'Platform',
    logo: env.VITE__LAYOUT__LOGO,
    
    // Navigation configuration (JSON string)
    navigation: parseNavigationConfig(env.VITE__LAYOUT__NAVIGATION),
    
    // Admin layout specific props
    adminLayout: {
      variant: env.VITE__LAYOUT__ADMIN__VARIANT || 'default',
      size: env.VITE__LAYOUT__ADMIN__SIZE || 'default',
      collapsible: env.VITE__LAYOUT__ADMIN__COLLAPSIBLE !== 'false',
      defaultSidebarOpen: env.VITE__LAYOUT__ADMIN__SIDEBAR_OPEN !== 'false',
    },
    
    // Page layout specific props
    pageLayout: {
      variant: env.VITE__LAYOUT__PAGE__VARIANT || 'default',
      size: env.VITE__LAYOUT__PAGE__SIZE || 'xl',
    },
    
    // Header specific props
    header: {
      variant: env.VITE__LAYOUT__HEADER__VARIANT || 'default',
      sticky: env.VITE__LAYOUT__HEADER__STICKY !== 'false',
      size: env.VITE__LAYOUT__HEADER__SIZE || 'md',
    },
    
    // Footer specific props
    footer: {
      variant: env.VITE__LAYOUT__FOOTER__VARIANT || 'default',
      size: env.VITE__LAYOUT__FOOTER__SIZE || 'md',
    },
    
    // Auth layout specific props
    authLayout: {
      variant: env.VITE__LAYOUT__AUTH__VARIANT || 'card',
      imageUrl: env.VITE__LAYOUT__AUTH__IMAGE_URL,
      imageOverlay: env.VITE__LAYOUT__AUTH__IMAGE_OVERLAY || 'dark',
    },
    
    // Blank layout specific props
    blankLayout: {
      variant: env.VITE__LAYOUT__BLANK__VARIANT || 'default',
    },
    
    // Additional custom props (JSON format)
    customProps: parseNavigationConfig(env.VITE__LAYOUT__CUSTOM_PROPS) || {},
  };
  
  // Debug: Show final configuration
  console.log('🔧 DEBUG getLayoutConfig: Final config:', {
    theme: config.theme,
    variant: config.variant,
    layout: config.layout,
    title: config.title,
    navItems: config.navigation.length,
    adminVariant: config.adminLayout.variant,
    adminSize: config.adminLayout.size,
  });
  
  if (typeof window !== 'undefined' && window.console) {
    console.log('🔧 Layout configuration loaded:', {
      theme: config.theme,
      variant: config.variant,
      layout: config.layout,
      title: config.title,
      navItems: config.navigation.length,
      customProps: Object.keys(config.customProps).length,
      source: 'VITE__ environment variables'
    });
  }
  
  return config;
}

/**
 * Enhanced layout wrapper component with VITE__ environment variables and debugging
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - App content
 * @param {string} [props.layout] - Override layout type
 * @param {Array} [props.navigation] - Override navigation items
 * @param {Object} [props.overrides] - Manual overrides for env config
 * @returns {JSX.Element} Wrapped app with theme and layout
 */
export function LayoutWrapper({ children, layout, navigation, overrides = {} }) {
  const config = { ...getLayoutConfig(), ...overrides };
  
  // Allow prop overrides
  const finalLayout = layout || config.layout;
  const finalNavigation = navigation || config.navigation;
  
  // Debug: Show what's being passed to ThemeProvider
  console.log('🎨 DEBUG LayoutWrapper: Passing to ThemeProvider:', {
    theme: config.theme,
    variant: config.variant,
    detectSystem: config.detectSystem,
    finalLayout: finalLayout,
    overrides: overrides
  });
  
  return (
    <ThemeProvider 
      theme={config.theme} 
      variant={config.variant}
      detectSystem={config.detectSystem}
    >
      {renderLayoutFromConfig(children, finalLayout, finalNavigation, config)}
    </ThemeProvider>
  );
}

/**
 * Renders appropriate layout with full prop drilling based on configuration
 * @param {React.ReactNode} children - App content
 * @param {string} layout - Layout type
 * @param {Array} navigation - Navigation items
 * @param {Object} config - Complete layout configuration
 * @returns {JSX.Element} Layout-wrapped content with all props
 */
function renderLayoutFromConfig(children, layout, navigation, config) {
  console.log('🏗️ DEBUG renderLayoutFromConfig:', {
    layout: layout,
    navigationCount: navigation.length,
    theme: config.theme
  });

  switch (layout) {
    case 'admin':
      return (
        <AdminLayout
          variant={config.adminLayout.variant}
          size={config.adminLayout.size}
          title={config.title}
          logo={config.logo ? <img src={config.logo} alt="Logo" className="h-8 w-auto" /> : undefined}
          navigationItems={navigation}
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
            {navigation.length > 0 && (
              <nav className="ml-auto">
                {navigation.map(item => (
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
      
    case 'none':
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
        theme: import.meta.env.VITE__LAYOUT__THEME || 'default',
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