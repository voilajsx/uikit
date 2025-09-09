/**
 * Demo-specific theme provider with additional Mango theme
 * @file demo/src/themes/theme-provider.tsx
 */

import React, { createContext, useContext, useEffect, useState } from 'react';
import mangoTheme from './mango.js';

type Theme = 'default' | 'aurora' | 'metro' | 'neon' | 'ruby' | 'studio' | 'mango';
type Mode = 'light' | 'dark';
type Tone = 'default' | 'warm' | 'cool';

interface ThemeContextValue {
  theme: Theme;
  mode: Mode;
  tone: Tone;
  setTheme: (theme: Theme) => void;
  setMode: (mode: Mode) => void;
  setTone: (tone: Tone) => void;
  getToneClasses: () => string;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

interface ThemeProviderProps {
  children: React.ReactNode;
  theme?: Theme;
  mode?: Mode;
  tone?: Tone;
}

/**
 * Generate CSS for the mango theme and inject it into the page
 */
function injectMangoThemeCSS() {
  // Remove existing mango theme styles
  const existingStyle = document.getElementById('mango-theme-css');
  if (existingStyle) {
    existingStyle.remove();
  }

  // Generate CSS for mango theme
  const generateThemeCSS = (theme: any) => {
    let enhancedTokens = '';
    if (theme.design) {
      const designTokens = Object.entries(theme.design)
        .map(([key, value]) => {
          const cssKey = `--voila-${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`;
          return `  ${cssKey}: ${value};`;
        })
        .join('\n');
      
      if (designTokens) {
        enhancedTokens = `\n  /* 🚀 Enhanced Design Tokens */\n${designTokens}`;
      }
    }

    const lightVariables = Object.entries(theme.light)
      .map(([key, value]) => {
        const cssKey = `--color-${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`;
        return `  ${cssKey}: ${value};`;
      })
      .join('\n');

    const darkVariables = Object.entries(theme.dark)
      .map(([key, value]) => {
        const cssKey = `--color-${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`;
        return `  ${cssKey}: ${value};`;
      })
      .join('\n');

    return `/* ${theme.name} Theme */
.theme-${theme.id} {${enhancedTokens}
  /* Color Variables */
${lightVariables}
}

.theme-${theme.id}.dark {
  /* Color Variables */
${darkVariables}
}`;
  };

  // Create and inject the CSS
  const css = generateThemeCSS(mangoTheme);
  const style = document.createElement('style');
  style.id = 'mango-theme-css';
  style.textContent = css;
  document.head.appendChild(style);
}

export function ThemeProvider({ children, theme: defaultTheme = 'default', mode: defaultMode = 'light', tone: defaultTone = 'default' }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  const [mode, setMode] = useState<Mode>(defaultMode);
  const [tone, setTone] = useState<Tone>(defaultTone);

  // Inject mango theme CSS on mount
  useEffect(() => {
    injectMangoThemeCSS();
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    
    // Remove all theme classes
    root.classList.remove('theme-aurora', 'theme-metro', 'theme-neon', 'theme-ruby', 'theme-studio', 'theme-mango');
    
    // Add the current theme class (if not default)
    if (theme !== 'default') {
      root.classList.add(`theme-${theme}`);
    }
    
    // Handle dark mode
    root.classList.remove('dark');
    if (mode === 'dark') {
      root.classList.add('dark');
    }
    
    // Handle tone classes
    root.classList.remove('tone-warm', 'tone-cool');
    if (tone !== 'default') {
      root.classList.add(`tone-${tone}`);
    }
  }, [theme, mode, tone]);

  const getToneClasses = () => {
    if (tone === 'warm') return 'warm-tone';
    if (tone === 'cool') return 'cool-tone';
    return '';
  };

  const value: ThemeContextValue = {
    theme,
    mode,
    tone,
    setTheme,
    setMode,
    setTone,
    getToneClasses,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}