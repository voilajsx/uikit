// Updated ThemeProvider.jsx to work with your variables.css approach

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

  // Effect to apply dark mode to root element
  useEffect(() => {
    // Set data-mode attribute on document root
    document.documentElement.setAttribute('data-mode', isDarkMode ? 'dark' : 'light');
    
    // Log for debugging
    console.log("Dark mode changed:", isDarkMode);
    console.log("data-mode attribute:", document.documentElement.getAttribute('data-mode'));
    
    return () => {
      // Cleanup if needed
    };
  }, [isDarkMode]);

  // Apply global styles from theme if provided
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

  // Function to get component-specific styles
  const getComponentStyles = (componentName, variant = null) => {
    if (!currentTheme?.components || !currentTheme.components[componentName]) {
      return {};
    }
    
    const componentStyles = currentTheme.components[componentName];
    
    // If variant is provided and variant styles exist, merge with base styles
    if (variant && componentStyles.variants && componentStyles.variants[variant]) {
      return {
        ...componentStyles,
        style: {
          ...(componentStyles.style || {}),
          ...(componentStyles.variants[variant].style || {})
        },
        className: `${componentStyles.className || ''} ${componentStyles.variants[variant].className || ''}`
      };
    }
    
    return componentStyles;
  };

  // Get theme name to use as a class
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
        getComponentStyles,
      }}
    >
      <div
        className={themeClassName}
        data-theme={currentTheme?.meta?.name || 'default'}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;