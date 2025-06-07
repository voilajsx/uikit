/**
 * @fileoverview Enhanced theme provider with custom theme support
 * @description Theme context provider with class-based theme switching and custom theme registration
 * @package @voilajsx/uikit
 * @file /src/themes/theme-provider.jsx
 */

import { createContext, useContext, useEffect, useState } from 'react';

// Available themes registry - now extensible!
let AVAILABLE_THEMES = [
  { id: 'default', name: 'Default' },
  { id: 'ocean', name: 'Ocean' },
  { id: 'forest', name: 'Forest' },
  { id: 'sunset', name: 'Sunset' }
];

/**
 * Register a custom theme
 * @param {Object} theme - Theme object with id and name
 */
export function registerTheme(theme) {
  if (!theme || !theme.id || !theme.name) {
    console.warn('registerTheme: Theme must have id and name properties');
    return;
  }
  
  // Don't add duplicates
  if (!AVAILABLE_THEMES.find(t => t.id === theme.id)) {
    AVAILABLE_THEMES.push(theme);
    console.log(`Registered custom theme: ${theme.name} (${theme.id})`);
  }
}

/**
 * Register multiple themes at once
 * @param {Array} themes - Array of theme objects
 */
export function registerThemes(themes) {
  themes.forEach(registerTheme);
}

/**
 * Get all available themes (built-in + custom)
 * @returns {Array} All registered themes
 */
export function getAvailableThemes() {
  return [...AVAILABLE_THEMES];
}

/**
 * Remove a custom theme
 * @param {string} themeId - Theme ID to remove
 */
export function unregisterTheme(themeId) {
  const builtInThemes = ['default', 'ocean', 'forest', 'sunset'];
  if (builtInThemes.includes(themeId)) {
    console.warn(`Cannot remove built-in theme: ${themeId}`);
    return;
  }
  
  AVAILABLE_THEMES = AVAILABLE_THEMES.filter(t => t.id !== themeId);
}

// Theme context
const ThemeContext = createContext({
  theme: 'default',
  variant: 'light',
  setTheme: () => {},
  setVariant: () => {},
  toggleVariant: () => {},
  availableThemes: AVAILABLE_THEMES,
  registerTheme: registerTheme,
  getAvailableThemes: getAvailableThemes
});

/**
 * Enhanced theme provider component
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components
 * @param {string} [props.theme='default'] - Initial theme
 * @param {'light'|'dark'} [props.variant='light'] - Initial variant
 * @param {boolean} [props.detectSystem=true] - Detect system preference
 * @param {Array} [props.customThemes=[]] - Custom themes to register on mount
 * @returns {JSX.Element} Theme provider component
 */
export function ThemeProvider({
  children,
  theme = 'default',
  variant = 'light',
  detectSystem = true,
  customThemes = []
}) {
  const [themeState, setThemeState] = useState({
    theme: theme,
    variant: variant
  });

  // Register custom themes on mount
  useEffect(() => {
    if (customThemes.length > 0) {
      registerThemes(customThemes);
    }
  }, [customThemes]);

  // Initialize theme from localStorage or props
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    try {
      // Try to load saved preferences
      const saved = localStorage.getItem('uikit-theme');
      if (saved) {
        const { theme, variant } = JSON.parse(saved);
        setThemeState({ theme, variant });
      } else if (detectSystem) {
        // Check system preference
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (prefersDark) {
          setThemeState(prev => ({ ...prev, variant: 'dark' }));
        }
      }
    } catch (e) {
      // Ignore errors
    }
  }, [detectSystem]);
  
  // Apply theme classes when state changes
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const { theme, variant } = themeState;
    const root = document.documentElement;
    
    // Remove existing theme classes - now uses current AVAILABLE_THEMES
    root.classList.remove('dark', 'light');
    AVAILABLE_THEMES.forEach(t => {
      root.classList.remove(`theme-${t.id}`);
    });
    
    // Add new theme classes
    if (theme !== 'default') {
      root.classList.add(`theme-${theme}`);
    }
    root.classList.add(variant);
    
    // Save preferences
    try {
      localStorage.setItem('uikit-theme', JSON.stringify({ theme, variant }));
    } catch (e) {
      // Ignore storage errors
    }
  }, [themeState]);
  
  // Listen for system preference changes
  useEffect(() => {
    if (!detectSystem || typeof window === 'undefined') return;
    
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e) => {
      // Only update if user hasn't explicitly chosen a theme
      try {
        const saved = localStorage.getItem('uikit-theme');
        if (!saved) {
          setThemeState(prev => ({
            ...prev,
            variant: e.matches ? 'dark' : 'light'
          }));
        }
      } catch (e) {
        // Ignore storage errors
      }
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [detectSystem]);
  
  // Create context value
  const contextValue = {
    theme: themeState.theme,
    variant: themeState.variant,
    availableThemes: AVAILABLE_THEMES, // Dynamic list includes custom themes
    
    setTheme: (newTheme) => {
      if (typeof newTheme === 'string') {
        // Accept any string theme - no validation needed!
        setThemeState(prev => ({ ...prev, theme: newTheme }));
      } else if (typeof newTheme === 'object' && newTheme.id) {
        // Auto-register theme object and set it
        registerTheme(newTheme);
        setThemeState(prev => ({ ...prev, theme: newTheme.id, customTheme: newTheme }));
      }
    },
    
    setVariant: (newVariant) => {
      if (newVariant === 'light' || newVariant === 'dark') {
        setThemeState(prev => ({ ...prev, variant: newVariant }));
      }
    },
    
    toggleVariant: () => {
      setThemeState(prev => ({
        ...prev,
        variant: prev.variant === 'light' ? 'dark' : 'light'
      }));
    },

    // Expose theme management functions
    registerTheme,
    registerThemes,
    getAvailableThemes,
    unregisterTheme
  };
  
  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

/**
 * Hook to access enhanced theme context
 * @returns {Object} Theme context value with custom theme support
 */
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}