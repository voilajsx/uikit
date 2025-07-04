/**
 * Ultra-simple theme provider with pre-bundled themes - NO FLASH VERSION
 * @module @voilajsx/uikit
 * @file src/themes/theme-provider.tsx
 */

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

/**
 * @llm-rule Pre-bundled themes - CSS included in package
 * Simple selection from 6 built-in themes
 */
export type Theme = 'default' | 'aurora' | 'metro' | 'neon' | 'ruby' | 'studio';

/**
 * @llm-rule System color scheme preference
 * light: Light system theme
 * dark: Dark system theme
 */
export type Mode = 'light' | 'dark';

/**
 * @llm-rule Component visual emphasis system
 * clean → Pure, minimal, white/light backgrounds
 * subtle → Muted, supporting, gray areas
 * brand → Primary colored, branded elements
 * contrast → High emphasis, dark/bold areas
 */
export type Tone = 'clean' | 'subtle' | 'brand' | 'contrast';

/**
 * @llm-props ThemeProvider context - Zero complexity
 * REQUIRED: children
 * RECOMMENDED: theme, mode
 * OPTIONAL: detectSystem
 */
export interface ThemeContextValue {
  /** Current theme from pre-bundled options */
  theme: Theme;
  /** System color mode */
  mode: Mode;
  /** Available themes */
  availableThemes: Theme[];
  
  /** Set theme from pre-bundled options */
  setTheme: (theme: Theme) => void;
  /** Set system color mode */
  setMode: (mode: Mode) => void;
  /** Toggle between light and dark modes */
  toggleMode: () => void;
  
  /** Get CSS classes for tone */
  getToneClasses: (tone: Tone) => string;
  /** Get default tone for component */
  getDefaultTone: (component: string) => Tone;
}

/**
 * @llm-props ThemeProvider props
 * REQUIRED: children
 * RECOMMENDED: theme="default", mode="light"
 * OPTIONAL: detectSystem
 * @llm-defaults theme="default", mode="light", detectSystem=true
 */
export interface ThemeProviderProps {
  /** REQUIRED: Child components */
  children: ReactNode;
  /** RECOMMENDED: Theme from pre-bundled options (default: "default") */
  theme?: Theme;
  /** RECOMMENDED: System color mode (default: "light") */
  mode?: Mode;
  /** OPTIONAL: Auto-detect system preference (default: true) */
  detectSystem?: boolean;
}

/**
 * @llm-defaults Tone defaults by component type
 * Smart contextual defaults for LLM predictability
 */
const TONE_DEFAULTS: Record<string, Tone> = {
  AdminLayout: 'subtle',       // Professional admin interfaces
  PageLayout: 'clean',         // Clean public websites
  AuthLayout: 'clean',         // Focused authentication
  PopupLayout: 'clean',        // Clean extensions
  BlankLayout: 'clean',        // Simple pages
  Header: 'clean',             // Clean headers
  Footer: 'contrast',          // Bold footers
  AdminSidebar: 'subtle',      // Subtle sidebars
  AdminHeader: 'clean',        // Clean admin headers
  PopupHeader: 'brand',        // Branded popup headers
};

/**
 * @llm-rule Tone CSS class mapping
 * CSS variables automatically handle light/dark mode switching
 */
const TONE_CLASSES: Record<Tone, string> = {
  clean: 'bg-background text-foreground border-border',
  subtle: 'bg-muted/30 text-foreground border-border/50',
  brand: 'bg-primary text-primary-foreground border-primary/20',
  contrast: 'bg-foreground text-background border-foreground/20'  // Automatically flips with mode
};

/**
 * @llm-rule Available pre-bundled themes
 * All themes ship as CSS with the package
 */
export const AVAILABLE_THEMES: Theme[] = [
  'default',   // Professional blue - business apps
  'aurora',    // Purple/green - creative apps  
  'metro',     // Transit blue - admin dashboards
  'neon',      // Electric colors - gaming/tech
  'ruby',      // Red/gold - luxury brands
  'studio'     // Designer grays - creative tools
];

// Theme context
const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

/**
 * ✅ FIX: Get initial theme state synchronously (no flash)
 */
function getInitialThemeState(
  defaultTheme: Theme, 
  defaultMode: Mode, 
  detectSystem: boolean
): { theme: Theme; mode: Mode } {
  // Server-side rendering - use props
  if (typeof window === 'undefined') {
    return { theme: defaultTheme, mode: defaultMode };
  }

  try {
    // Try to load saved preferences first
    const saved = localStorage.getItem('uikit-theme');
    if (saved) {
      const parsed = JSON.parse(saved);
      
      // Validate saved theme is still available
      if (AVAILABLE_THEMES.includes(parsed.theme) && 
          ['light', 'dark'].includes(parsed.mode)) {
        console.log(`🎨 Restored theme: ${parsed.theme} (${parsed.mode} mode)`);
        return parsed;
      }
    }
    
    // No saved preference - check system preference if enabled
    if (detectSystem) {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const systemMode = prefersDark ? 'dark' : 'light';
      console.log(`🎨 Using system preference: ${defaultTheme} (${systemMode} mode)`);
      return { theme: defaultTheme, mode: systemMode };
    }
    
    // Use props as fallback
    console.log(`🎨 Using default: ${defaultTheme} (${defaultMode} mode)`);
    return { theme: defaultTheme, mode: defaultMode };
    
  } catch (e) {
    console.warn('Failed to load theme preferences, using defaults:', e);
    return { theme: defaultTheme, mode: defaultMode };
  }
}

/**
 * ✅ FIX: Apply theme immediately on document (before React renders)
 */
function applyThemeImmediately(theme: Theme, mode: Mode) {
  if (typeof window === 'undefined') return;
  
  const root = document.documentElement;
  
  // Remove existing theme and mode classes
  root.classList.remove('light', 'dark');
  AVAILABLE_THEMES.forEach(t => {
    root.classList.remove(`theme-${t}`);
  });
  
  // Add new classes immediately
  root.classList.add(mode);
  if (theme !== 'default') {
    root.classList.add(`theme-${theme}`);
  }
}

/**
 * Ultra-simple theme provider with pre-bundled themes - NO FLASH VERSION
 * @llm-pattern Basic usage (recommended)
 * <ThemeProvider theme="aurora" mode="dark">
 *   <App />
 * </ThemeProvider>
 * 
 * @llm-pattern Auto-detect system preference
 * <ThemeProvider theme="default" detectSystem>
 *   <App />
 * </ThemeProvider>
 */
export function ThemeProvider({
  children,
  theme = 'default',
  mode = 'light',
  detectSystem = true
}: ThemeProviderProps): React.JSX.Element {
  
  // ✅ FIX: Initialize with correct theme from the start (no flash)
  const [themeState, setThemeState] = useState(() => {
    const initialState = getInitialThemeState(theme, mode, detectSystem);
    
    // ✅ CRITICAL: Apply theme immediately before React renders
    applyThemeImmediately(initialState.theme, initialState.mode);
    
    return initialState;
  });

  // ✅ FIX: Apply theme classes when state changes (but not on initial mount)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const { theme: currentTheme, mode: currentMode } = themeState;
    
    // Apply theme classes
    applyThemeImmediately(currentTheme, currentMode);
    
    // Save preferences
    try {
      localStorage.setItem('uikit-theme', JSON.stringify({ theme: currentTheme, mode: currentMode }));
    } catch (e) {
      console.warn('Failed to save theme preferences:', e);
    }
    
    console.log(`🎨 Applied theme: ${currentTheme} (${currentMode} mode)`);
  }, [themeState]);
  
  // ✅ FIX: Listen for system preference changes (but don't override saved preferences)
  useEffect(() => {
    if (!detectSystem || typeof window === 'undefined') return;
    
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e: MediaQueryListEvent) => {
      // Only auto-switch if no manual preference was saved
      try {
        const saved = localStorage.getItem('uikit-theme');
        if (!saved) {
          setThemeState(prev => ({
            ...prev,
            mode: e.matches ? 'dark' : 'light'
          }));
        }
      } catch (e) {
        console.warn('Failed to handle system preference change:', e);
      }
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [detectSystem]);

  /**
   * @llm-rule Set theme from pre-bundled options
   * Only accepts valid theme names
   */
  const setTheme = (newTheme: Theme) => {
    if (!AVAILABLE_THEMES.includes(newTheme)) {
      console.warn(`Invalid theme: ${newTheme}. Available themes:`, AVAILABLE_THEMES);
      return;
    }
    
    setThemeState(prev => ({ ...prev, theme: newTheme }));
  };

  /**
   * @llm-rule Set system color mode
   * Only accepts 'light' or 'dark'
   */
  const setMode = (newMode: Mode) => {
    if (newMode !== 'light' && newMode !== 'dark') {
      console.warn(`Invalid mode: ${newMode}. Expected 'light' or 'dark'.`);
      return;
    }
    
    setThemeState(prev => ({ ...prev, mode: newMode }));
  };

  /**
   * @llm-rule Toggle between light and dark modes
   */
  const toggleMode = () => {
    setThemeState(prev => ({
      ...prev,
      mode: prev.mode === 'light' ? 'dark' : 'light'
    }));
  };

  /**
   * @llm-rule Get CSS classes for tone styling
   * CSS variables automatically handle light/dark mode
   */
  const getToneClasses = (tone: Tone): string => {
    return TONE_CLASSES[tone];
  };

  /**
   * @llm-rule Get default tone for component type
   * Returns smart contextual defaults for LLM predictability
   */
  const getDefaultTone = (component: string): Tone => {
    return TONE_DEFAULTS[component] || 'clean';
  };
  
  // Create context value
  const contextValue: ThemeContextValue = {
    theme: themeState.theme,
    mode: themeState.mode,
    availableThemes: AVAILABLE_THEMES,
    setTheme,
    setMode,
    toggleMode,
    getToneClasses,
    getDefaultTone
  };
  
  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

/**
 * Hook to access theme context
 * @llm-pattern Basic theme usage
 * const { theme, mode, setTheme, setMode, toggleMode } = useTheme();
 * 
 * @llm-pattern Component styling
 * const { getToneClasses, getDefaultTone } = useTheme();
 * const tone = getDefaultTone('AdminLayout');
 * const classes = getToneClasses(tone); // Works automatically in both modes
 */
export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

/**
 * @llm-pattern Theme switcher component example
 * const ThemeSwitcher = () => {
 *   const { theme, availableThemes, setTheme } = useTheme();
 *   return (
 *     <select value={theme} onChange={e => setTheme(e.target.value as Theme)}>
 *       {availableThemes.map(t => <option key={t} value={t}>{t}</option>)}
 *     </select>
 *   );
 * };
 */