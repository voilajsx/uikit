// src/ThemeProvider.jsx - Add theme processing capabilities

import React, { createContext, useContext, useState, useEffect } from 'react';

// Create context for theme
const ThemeContext = createContext({
  theme: null,
  darkMode: false,
  setTheme: () => {},
  toggleDarkMode: () => {},
  getComponentStyles: () => ({}),
});

export const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({ 
  theme,
  darkMode = false,
  children 
}) => {
  const [currentTheme, setCurrentTheme] = useState(theme);
  const [isDarkMode, setIsDarkMode] = useState(darkMode);

  // Effect to update theme when props change
  useEffect(() => {
    if (theme) {
      setCurrentTheme(theme);
    }
  }, [theme]);

  // Effect to update dark mode when props change
  useEffect(() => {
    setIsDarkMode(darkMode);
  }, [darkMode]);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };

  // ADDED: Apply global styles from theme if provided
  useEffect(() => {
    if (currentTheme?.globalStyles) {
      // Create style element for global styles
      const styleElement = document.createElement('style');
      styleElement.setAttribute('data-theme-styles', currentTheme?.meta?.name || 'theme');
      styleElement.textContent = currentTheme.globalStyles;
      document.head.appendChild(styleElement);
      
      // Clean up when theme changes or component unmounts
      return () => {
        const element = document.querySelector(`style[data-theme-styles="${currentTheme?.meta?.name || 'theme'}"]`);
        if (element) {
          document.head.removeChild(element);
        }
      };
    }
  }, [currentTheme]);

  // ADDED: Function to get component-specific styles
  const getComponentStyles = (componentName) => {
    if (!currentTheme?.components || !currentTheme.components[componentName]) {
      return {};
    }
    return currentTheme.components[componentName];
  };

  // Get effective CSS variables based on theme and dark mode
  const getThemeVariables = () => {
    // Default variables if no theme is provided
    const defaultVariables = {
       // Base color palette
       '--purple-50': '#faf5ff',
       '--purple-100': '#f3e8ff',
       '--purple-200': '#e9d5ff',
       '--purple-300': '#d8b4fe',
       '--purple-400': '#c084fc',
       '--purple-500': '#a855f7',
       '--purple-600': '#9333ea',
       '--purple-700': '#7e22ce',
       '--purple-800': '#6b21a8',
       '--purple-900': '#581c87',
 
       // Semantic colors - using base palette variables
       '--primary-color': '#9333ea', // Same as purple-600
       '--primary-light': '#c084fc', // Same as purple-400
       '--primary-dark': '#7e22ce',  // Same as purple-700
       '--secondary-color': '#d946ef',
       '--success-color': '#10b981',
       '--error-color': '#ef4444',
       '--warning-color': '#f59e0b',
       '--info-color': '#3b82f6',
       
       // Text colors
       '--text-primary': '#111827',
       '--text-secondary': '#4b5563',
       '--text-muted': '#9ca3af',
       '--text-light': '#f9fafb',
       
       // Background colors
       '--bg-light': '#ffffff',
       '--bg-dark': '#111827',
       '--bg-subtle': '#f9fafb',
       '--bg-muted': '#f3f4f6',
       
       // Border colors
       '--border-color-default': '#e5e7eb',
       '--border-color-light': '#f3f4f6',
       '--border-color-dark': '#d1d5db',
       
       // Focus ring color
       '--ring-color': 'rgba(147, 51, 234, 0.5)',
       
       // Font families
       '--font-base': 'system-ui, -apple-system, sans-serif',
       '--font-heading': 'system-ui, -apple-system, sans-serif',
       '--font-mono': 'ui-monospace, monospace',
       
       // Font sizes
       '--text-xs': '0.75rem',
       '--text-sm': '0.875rem',
       '--text-base': '1rem',
       '--text-lg': '1.125rem',
       '--text-xl': '1.25rem',
       '--text-2xl': '1.5rem',
       '--text-3xl': '1.875rem',
       '--text-4xl': '2.25rem',
       '--text-5xl': '3rem',
       '--text-6xl': '3.75rem',
       
       // Font weights
       '--font-light': '300',
       '--font-normal': '400',
       '--font-medium': '500',
       '--font-semibold': '600',
       '--font-bold': '700',
       
       // Line heights
       '--line-height-tight': '1.2',
       '--line-height-normal': '1.5',
       '--line-height-relaxed': '1.75',
       
       // Letter spacing
       '--letter-spacing-tight': '-0.025em',
       '--letter-spacing-normal': '0',
       '--letter-spacing-wide': '0.025em',
       
       // Spacing scale
       '--spacing-0': '0',
       '--spacing-1': '0.25rem',
       '--spacing-2': '0.5rem',
       '--spacing-3': '0.75rem',
       '--spacing-4': '1rem',
       '--spacing-5': '1.25rem',
       '--spacing-6': '1.5rem',
       '--spacing-8': '2rem',
       '--spacing-10': '2.5rem',
       '--spacing-12': '3rem',
       '--spacing-16': '4rem',
       '--spacing-20': '5rem',
       '--spacing-24': '6rem',
       '--spacing-32': '8rem',
       '--spacing-40': '10rem',
       '--spacing-48': '12rem',
       '--spacing-56': '14rem',
       '--spacing-64': '16rem',
       
       // Component-specific spacing
       '--button-padding-x': '1rem',
       '--button-padding-y': '0.5rem',
       '--card-padding': '1.5rem',
       '--input-padding-x': '0.75rem',
       '--input-padding-y': '0.5rem',
       
       // Border radius
       '--radius-none': '0',
       '--radius-sm': '0.125rem',
       '--radius-default': '0.25rem',
       '--radius-md': '0.375rem',
       '--radius-lg': '0.5rem',
       '--radius-xl': '0.75rem',
       '--radius-2xl': '1rem',
       '--radius-full': '9999px',
       
       // Shadows
       '--shadow-none': 'none',
       '--shadow-sm': '0 1px 2px 0 rgba(0,0,0,0.05)',
       '--shadow-default': '0 4px 6px -1px rgba(0,0,0,0.1)',
       '--shadow-md': '0 10px 15px -3px rgba(0,0,0,0.1)',
       '--shadow-lg': '0 20px 25px -5px rgba(0,0,0,0.1)',
       '--shadow-xl': '0 25px 50px -12px rgba(0,0,0,0.25)',
       
       // Borders
       '--border-width-none': '0',
       '--border-width-thin': '1px',
       '--border-width-default': '1px',
       '--border-width-thick': '2px',
       
       // Z-index
       '--z-index-dropdown': '1000',
       '--z-index-sticky': '1020',
       '--z-index-fixed': '1030',
       '--z-index-modal-backdrop': '1040',
       '--z-index-modal': '1050',
       '--z-index-popover': '1060',
       '--z-index-tooltip': '1070',
       '--z-index-toast': '1080',
       
       // Transition durations
       '--duration-fast': '100ms',
       '--duration-normal': '200ms',
       '--duration-slow': '300ms',
       
       // Transition timing functions
       '--timing-ease': 'cubic-bezier(0.4, 0, 0.2, 1)',
       '--timing-ease-in': 'cubic-bezier(0.4, 0, 1, 1)',
       '--timing-ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
       '--timing-ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
       
       // Layout
       '--sidebar-width': '18rem',
       '--sidebar-collapsed-width': '4rem',
       '--header-height': '4rem',
       '--footer-height': '4rem',
       '--content-width-sm': '40rem',
       '--content-width-md': '48rem',
       '--content-width-lg': '64rem',
       '--content-width-xl': '80rem',
       '--content-width-full': '100%',
       '--container-padding': '2rem',
       
       // Dark mode variants
       '--primary-color-dark-mode': '#b794f4',
       '--primary-light-dark-mode': '#d8b4fe',
       '--primary-dark-dark-mode': '#a78bfa',
       '--secondary-color-dark-mode': '#e879f9',
       '--bg-light-dark-mode': '#1f2937',
       '--text-primary-dark-mode': '#f9fafb',
       '--text-secondary-dark-mode': '#e5e7eb',
       '--border-color-dark-mode': '#374151'
    };

    // Start with default variables
    const variables = { ...defaultVariables };

    // Apply theme variables if available
    if (currentTheme?.styles) {
      Object.assign(variables, currentTheme.styles);
    }

    // Apply dark mode overrides if dark mode is enabled
    if (isDarkMode && currentTheme?.darkModeStyles) {
      Object.assign(variables, currentTheme.darkModeStyles);
    }

    return variables;
  };

  // ADDED: Get theme name to use as a class
  const themeClassName = currentTheme?.meta?.name 
    ? `${currentTheme.meta.name}-theme` 
    : '';

  return (
    <ThemeContext.Provider
      value={{
        theme: currentTheme,
        darkMode: isDarkMode,
        setTheme: setCurrentTheme,
        toggleDarkMode,
        getComponentStyles, // Expose the new function
      }}
    >
      <div
        className={`${isDarkMode ? 'dark-mode' : ''} ${themeClassName}`}
        style={getThemeVariables()}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;