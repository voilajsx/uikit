// src/index.ts (or .jsx)
// Only export key foundational components or types that might be needed globally.
// Everything else should be imported via subpaths as intended.

export { ThemeProvider } from './themes/theme-provider.jsx';
export { cn } from './lib/utils.js'; // Assuming 'cn' is a common utility function
// Add other widely-used, non-component exports here if needed
