// src/contexts/index.js

/**
 * Context providers and hooks index file
 * Re-exports context providers and their associated hooks
 */

// Theme context for theme customization and dark mode
export { default as ThemeContext, useTheme } from './ThemeContext';

// Toast context for displaying notifications
export { default as ToastProvider, useToast } from './ToastContext';
