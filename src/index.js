// src/index.js

/**
 * Main entry point for the @voilajsx/uikit library
 * Exports all components, layouts, utilities, and context providers
 */

// Re-export all components
export * from './components';

// Re-export all layouts
export * from './layouts';

// Re-export utilities
export * from './utils';

// Re-export contexts and hooks
export * from './contexts';

// Export ThemeProvider
export { default as ThemeProvider } from './ThemeProvider.jsx';
