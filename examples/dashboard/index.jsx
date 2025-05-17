/**
 * Dashboard Example Entry Point
 * 
 * This file serves as the entry point for the dashboard example application.
 * It sets up the React application with the ThemeProvider from @voilajsx/uikit.
 * 
 * @module examples/dashboard/index
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@voilajsx/uikit';
import App from './App';

/**
 * Dashboard theme configuration
 * Customizes the appearance of UI components for the dashboard
 */
const theme = {
  name: 'dashboard-theme',
  styles: {
    // Primary and secondary colors
    '--primary-color': '#9333ea',
    '--secondary-color': '#d946ef',
    
    // Additional theme customizations can be added here
    '--radius-lg': '0.5rem',
    '--shadow-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
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