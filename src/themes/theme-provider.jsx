/**
 * @fileoverview Enhanced theme provider with dynamic CSS injection and default fallbacks
 * @description Theme context provider that can handle themes without CSS bundling
 * @package @voilajsx/uikit
 * @file /src/themes/theme-provider.jsx
 */

import { createContext, useContext, useEffect, useState } from 'react';

// Available themes registry - now stores full theme objects
let AVAILABLE_THEMES = [
  { id: 'default', name: 'Default' },
  { id: 'aurora', name: 'Aurora' },
  { id: 'metro', name: 'Metro' },
  { id: 'neon', name: 'Neon' },
  { id: 'ruby', name: 'Ruby' },
  { id: 'studio', name: 'Studio' }
];

// Store full theme definitions for dynamic injection
let THEME_DEFINITIONS = new Map();

// Default theme colors from globals.css - used for fallbacks
const DEFAULT_COLOR_SCHEMA = {
  light: {
    // Base colors - from @theme in globals.css
    background: 'oklch(0.99 0.002 240)',
    foreground: 'oklch(0.08 0.015 240)',
    card: 'oklch(0.995 0.001 240)',
    cardForeground: 'oklch(0.08 0.015 240)',
    popover: 'oklch(0.985 0.003 240)',
    popoverForeground: 'oklch(0.08 0.015 240)',
    
    // Interactive colors
    primary: 'oklch(0.48 0.18 240)', // True sky blue
    primaryForeground: 'oklch(0.98 0.005 240)',
    secondary: 'oklch(0.88 0.03 220)', // Grayish blue
    secondaryForeground: 'oklch(0.25 0.05 220)',
    muted: 'oklch(0.95 0.01 240)',
    mutedForeground: 'oklch(0.38 0.04 240)',
    accent: 'oklch(0.52 0.12 200)', // Sea green tinted blue
    accentForeground: 'oklch(0.98 0.005 200)',
    
    // State colors
    destructive: 'oklch(0.55 0.18 20)',
    destructiveForeground: 'oklch(0.98 0.002 20)',
    
    // Border colors
    border: 'oklch(0.90 0.008 220)',
    input: 'oklch(0.90 0.008 220)',
    ring: 'oklch(0.48 0.18 240)',
    
    // Chart colors
    chart1: 'oklch(0.48 0.18 240)',
    chart2: 'oklch(0.52 0.12 200)',
    chart3: 'oklch(0.42 0.16 235)',
    chart4: 'oklch(0.60 0.12 250)',
    chart5: 'oklch(0.88 0.03 220)',
    
    // Sidebar colors
    sidebar: 'oklch(0.985 0.003 240)',
    sidebarForeground: 'oklch(0.08 0.015 240)',
    sidebarPrimary: 'oklch(0.48 0.18 240)',
    sidebarPrimaryForeground: 'oklch(0.98 0.005 240)',
    sidebarAccent: 'oklch(0.95 0.01 240)',
    sidebarAccentForeground: 'oklch(0.20 0.08 240)',
    sidebarBorder: 'oklch(0.90 0.008 220)',
    sidebarRing: 'oklch(0.48 0.18 240)',
  },
  
  dark: {
    // Base colors - from .dark in globals.css
    background: 'oklch(0.12 0.015 240)',
    foreground: 'oklch(0.92 0.008 240)',
    card: 'oklch(0.18 0.025 240)',
    cardForeground: 'oklch(0.92 0.008 240)',
    popover: 'oklch(0.18 0.025 240)',
    popoverForeground: 'oklch(0.92 0.008 240)',
    
    // Interactive colors
    primary: 'oklch(0.58 0.14 240)', // Softer sky blue for dark mode
    primaryForeground: 'oklch(0.95 0.005 240)',
    secondary: 'oklch(0.25 0.03 220)', // Dark grayish blue
    secondaryForeground: 'oklch(0.82 0.02 220)',
    muted: 'oklch(0.18 0.02 240)',
    mutedForeground: 'oklch(0.68 0.025 240)',
    accent: 'oklch(0.68 0.10 75)', // Soft golden yellow for dark mode
    accentForeground: 'oklch(0.12 0.015 75)',
    
    // State colors
    destructive: 'oklch(0.52 0.16 20)',
    destructiveForeground: 'oklch(0.92 0.008 240)',
    
    // Border colors
    border: 'oklch(0.30 0.008 220)',
    input: 'oklch(0.30 0.008 220)',
    ring: 'oklch(0.58 0.14 240)',
    
    // Chart colors
    chart1: 'oklch(0.58 0.14 240)',
    chart2: 'oklch(0.68 0.10 75)',
    chart3: 'oklch(0.55 0.12 235)',
    chart4: 'oklch(0.62 0.11 250)',
    chart5: 'oklch(0.25 0.03 220)',
    
    // Sidebar colors
    sidebar: 'oklch(0.18 0.025 240)',
    sidebarForeground: 'oklch(0.92 0.008 240)',
    sidebarPrimary: 'oklch(0.58 0.14 240)',
    sidebarPrimaryForeground: 'oklch(0.95 0.005 240)',
    sidebarAccent: 'oklch(0.18 0.02 240)',
    sidebarAccentForeground: 'oklch(0.82 0.02 240)',
    sidebarBorder: 'oklch(0.30 0.008 220)',
    sidebarRing: 'oklch(0.58 0.14 240)',
  }
};

/**
 * Convert theme object colors to CSS variables
 * @param {Object} colors - Theme color object
 * @returns {string} CSS variables string
 */
function generateCSSVariables(colors) {
  return Object.entries(colors)
    .map(([key, value]) => {
      const cssKey = `--color-${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`;
      return `  ${cssKey}: ${value};`;
    })
    .join('\n');
}

/**
 * Merge theme colors with default fallbacks for missing properties
 * @param {Object} themeColors - Partial theme colors
 * @param {Object} defaults - Default color schema
 * @returns {Object} Complete color object with fallbacks
 */
function mergeWithDefaults(themeColors, defaults) {
  return {
    ...defaults,  // Start with complete defaults
    ...themeColors  // Override with theme-specific colors
  };
}

/**
 * Validate and warn about missing colors
 * @param {Object} theme - Theme object to validate
 */
function validateTheme(theme) {
  if (!theme.light || !theme.dark) return;
  
  const requiredColors = Object.keys(DEFAULT_COLOR_SCHEMA.light);
  const lightMissing = requiredColors.filter(color => !theme.light[color]);
  const darkMissing = requiredColors.filter(color => !theme.dark[color]);
  
  if (lightMissing.length > 0) {
    console.warn(`⚠️ Theme ${theme.id} missing ${lightMissing.length} light colors:`, lightMissing);
    console.info(`💡 These will fallback to default theme values`);
  }
  
  if (darkMissing.length > 0) {
    console.warn(`⚠️ Theme ${theme.id} missing ${darkMissing.length} dark colors:`, darkMissing);
    console.info(`💡 These will fallback to default theme values`);
  }
  
  return {
    isComplete: lightMissing.length === 0 && darkMissing.length === 0,
    lightMissing,
    darkMissing
  };
}

/**
 * Inject CSS for a theme into the document with default fallbacks
 * @param {Object} theme - Theme object with light/dark colors
 */
function injectThemeCSS(theme) {
  if (!theme.light || !theme.dark) {
    console.warn(`Theme ${theme.id} missing light/dark definitions`);
    return;
  }

  // Validate theme and warn about missing colors
  const validation = validateTheme(theme);
  
  // Merge theme colors with defaults for complete coverage
  const completeLight = mergeWithDefaults(theme.light, DEFAULT_COLOR_SCHEMA.light);
  const completeDark = mergeWithDefaults(theme.dark, DEFAULT_COLOR_SCHEMA.dark);
  
  if (!validation.isComplete) {
    const totalMissing = validation.lightMissing.length + validation.darkMissing.length;
    console.log(`🔧 Theme ${theme.id}: Added ${totalMissing} fallback colors from default theme`);
  }

  const styleId = `theme-${theme.id}-dynamic`;
  
  // Remove existing style for this theme
  const existingStyle = document.getElementById(styleId);
  if (existingStyle) {
    existingStyle.remove();
  }

  // Generate CSS with complete color sets
  const lightVariables = generateCSSVariables(completeLight);
  const darkVariables = generateCSSVariables(completeDark);

  const css = `
/* ${theme.name} Theme - With Default Fallbacks */
.theme-${theme.id} {
${lightVariables}
}

.theme-${theme.id}.dark {
${darkVariables}
}
`;

  // Create and inject style element
  const styleElement = document.createElement('style');
  styleElement.id = styleId;
  styleElement.textContent = css;
  document.head.appendChild(styleElement);

  console.log(`✅ Injected complete CSS for theme: ${theme.name} (${theme.id})`);
}

/**
 * Register a custom theme with optional CSS injection and default fallbacks
 * @param {Object} theme - Theme object with id, name, light, and dark
 * @param {boolean} injectCSS - Whether to inject CSS (default: true)
 */
export function registerTheme(theme, injectCSS = true) {
  if (!theme || !theme.id || !theme.name) {
    console.warn('registerTheme: Theme must have id and name properties');
    return;
  }
  
  // Store full theme definition
  THEME_DEFINITIONS.set(theme.id, theme);
  
  // Add to available themes if not already there
  if (!AVAILABLE_THEMES.find(t => t.id === theme.id)) {
    AVAILABLE_THEMES.push({ id: theme.id, name: theme.name });
  }

  // Inject CSS if theme has color definitions and we're in browser
  if (injectCSS && typeof window !== 'undefined' && theme.light && theme.dark) {
    injectThemeCSS(theme);
  }

  console.log(`📝 Registered theme: ${theme.name} (${theme.id})`);
}

/**
 * Register multiple themes at once
 * @param {Array} themes - Array of theme objects
 * @param {boolean} injectCSS - Whether to inject CSS for all themes
 */
export function registerThemes(themes, injectCSS = true) {
  themes.forEach(theme => registerTheme(theme, injectCSS));
}

/**
 * Get all available themes (built-in + custom)
 * @returns {Array} All registered themes
 */
export function getAvailableThemes() {
  return [...AVAILABLE_THEMES];
}

/**
 * Get theme definition by ID
 * @param {string} themeId - Theme ID
 * @returns {Object|null} Theme definition or null
 */
export function getThemeDefinition(themeId) {
  return THEME_DEFINITIONS.get(themeId) || null;
}

/**
 * Remove a custom theme and its CSS
 * @param {string} themeId - Theme ID to remove
 */
export function unregisterTheme(themeId) {
  const builtInThemes = ['default', 'aurora', 'metro', 'neon', 'ruby', 'studio'];
  if (builtInThemes.includes(themeId)) {
    console.warn(`Cannot remove built-in theme: ${themeId}`);
    return;
  }
  
  // Remove from registry
  AVAILABLE_THEMES = AVAILABLE_THEMES.filter(t => t.id !== themeId);
  THEME_DEFINITIONS.delete(themeId);
  
  // Remove injected CSS
  if (typeof window !== 'undefined') {
    const styleElement = document.getElementById(`theme-${themeId}-dynamic`);
    if (styleElement) {
      styleElement.remove();
    }
  }
  
  console.log(`🗑️ Unregistered theme: ${themeId}`);
}

/**
 * Re-inject CSS for all registered dynamic themes
 * Useful for SSR or when styles get cleared
 */
export function reinjectedAllThemeCSS() {
  if (typeof window === 'undefined') return;
  
  THEME_DEFINITIONS.forEach((theme) => {
    if (theme.light && theme.dark) {
      injectThemeCSS(theme);
    }
  });
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
  getAvailableThemes: getAvailableThemes,
  getThemeDefinition: getThemeDefinition,
  unregisterTheme: unregisterTheme,
  reinjectedAllThemeCSS: reinjectedAllThemeCSS
});

/**
 * Enhanced theme provider component with dynamic CSS injection and default fallbacks
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components
 * @param {string} [props.theme='default'] - Initial theme
 * @param {'light'|'dark'} [props.variant='light'] - Initial variant
 * @param {boolean} [props.detectSystem=true] - Detect system preference
 * @param {Array} [props.customThemes=[]] - Custom themes to register on mount
 * @param {boolean} [props.autoInjectCSS=true] - Auto-inject CSS for custom themes
 * @returns {JSX.Element} Theme provider component
 */
export function ThemeProvider({
  children,
  theme = 'default',
  variant = 'light',
  detectSystem = true,
  customThemes = [],
  autoInjectCSS = true
}) {
  const [themeState, setThemeState] = useState({
    theme: theme,
    variant: variant
  });

  // Register custom themes on mount
  useEffect(() => {
    if (customThemes.length > 0) {
      registerThemes(customThemes, autoInjectCSS);
    }
  }, [customThemes, autoInjectCSS]);

  // Re-inject CSS on mount (useful for SSR or hot reloads)
  useEffect(() => {
    if (autoInjectCSS && typeof window !== 'undefined') {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        reinjectedAllThemeCSS();
      }, 0);
    }
  }, [autoInjectCSS]);

  // Initialize theme from localStorage or props
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    try {
      const saved = localStorage.getItem('uikit-theme');
      if (saved) {
        const { theme, variant } = JSON.parse(saved);
        setThemeState({ theme, variant });
      } else if (detectSystem) {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (prefersDark) {
          setThemeState(prev => ({ ...prev, variant: 'dark' }));
        }
      }
    } catch (e) {
      console.warn('Failed to load theme from localStorage:', e);
    }
  }, [detectSystem]);
  
  // Apply theme classes when state changes
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const { theme, variant } = themeState;
    const root = document.documentElement;
    
    // Remove existing theme classes
    root.classList.remove('dark', 'light');
    // Remove all possible theme classes (including dynamically registered ones)
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
      console.warn('Failed to save theme to localStorage:', e);
    }
    
    console.log(`🎨 Applied theme: ${theme} (${variant})`);
  }, [themeState]);
  
  // Listen for system preference changes
  useEffect(() => {
    if (!detectSystem || typeof window === 'undefined') return;
    
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e) => {
      try {
        const saved = localStorage.getItem('uikit-theme');
        if (!saved) {
          setThemeState(prev => ({
            ...prev,
            variant: e.matches ? 'dark' : 'light'
          }));
        }
      } catch (e) {
        console.warn('Failed to handle system preference change:', e);
      }
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [detectSystem]);
  
  // Create context value
  const contextValue = {
    theme: themeState.theme,
    variant: themeState.variant,
    availableThemes: AVAILABLE_THEMES,
    
    setTheme: (newTheme) => {
      if (typeof newTheme === 'string') {
        // Check if theme exists in registry
        const themeExists = AVAILABLE_THEMES.find(t => t.id === newTheme);
        if (!themeExists) {
          console.warn(`Theme '${newTheme}' not found in registry. Available themes:`, 
            AVAILABLE_THEMES.map(t => t.id));
        }
        setThemeState(prev => ({ ...prev, theme: newTheme }));
      } else if (typeof newTheme === 'object' && newTheme.id) {
        // Auto-register theme object and set it
        registerTheme(newTheme, autoInjectCSS);
        setThemeState(prev => ({ ...prev, theme: newTheme.id }));
      } else {
        console.warn('setTheme: Invalid theme format. Expected string ID or theme object.');
      }
    },
    
    setVariant: (newVariant) => {
      if (newVariant === 'light' || newVariant === 'dark') {
        setThemeState(prev => ({ ...prev, variant: newVariant }));
      } else {
        console.warn('setVariant: Invalid variant. Expected "light" or "dark".');
      }
    },
    
    toggleVariant: () => {
      setThemeState(prev => ({
        ...prev,
        variant: prev.variant === 'light' ? 'dark' : 'light'
      }));
    },

    // Expose theme management functions
    registerTheme: (theme) => registerTheme(theme, autoInjectCSS),
    registerThemes: (themes) => registerThemes(themes, autoInjectCSS),
    getAvailableThemes,
    getThemeDefinition,
    unregisterTheme,
    reinjectedAllThemeCSS
  };
  
  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

/**
 * Hook to access enhanced theme context
 * @returns {Object} Theme context value with dynamic theme support and default fallbacks
 */
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}