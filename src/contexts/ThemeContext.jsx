// src/contexts/ThemeContext.jsx
import React, { createContext, useContext } from 'react';

/**
 * Context for theme management across the application.
 * Provides theme object, dark mode state, and methods to update them.
 */
const ThemeContext = createContext({
  theme: null,           // Current theme object
  darkMode: false,       // Dark mode state
  setTheme: () => {},    // Function to update theme
  toggleDarkMode: () => {}, // Function to toggle dark mode
});

/**
 * Hook for consuming the ThemeContext.
 * Provides access to current theme, dark mode state, and update methods.
 * @returns {Object} Theme context value
 * @throws {Error} If used outside of ThemeProvider
 */
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export default ThemeContext;