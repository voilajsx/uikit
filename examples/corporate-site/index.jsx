/**
 * Corporate Site Example Entry Point
 * 
 * This file serves as the entry point for the corporate website example application.
 * It sets up the React application with the ThemeProvider from @voilajsx/uikit.
 * 
 * @module examples/corporate-site/index
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@voilajsx/uikit';
import App from './App';

/**
 * Corporate site theme configuration
 * Customizes the appearance of UI components for a corporate website
 */
const theme = {
  name: 'corporate-theme',
  styles: {
    // Primary and secondary colors - using blue for corporate identity
    '--primary-color': '#3b82f6',
    '--primary-light': '#60a5fa',
    '--primary-dark': '#2563eb',
    '--secondary-color': '#8b5cf6',
    
    // Additional theme customizations
    '--radius-default': '0.375rem',
    '--radius-lg': '0.5rem',
    '--shadow-default': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    '--font-base': 'Inter, system-ui, sans-serif',
    '--font-heading': 'Inter, system-ui, sans-serif'
  }
};

/**
 * Render the application wrapped in ThemeProvider for consistent styling
 */
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);