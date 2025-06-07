/**
 * @fileoverview Tree-shaking optimized Vite configuration with CSS extraction
 * @description Builds individual components as separate files for optimal tree-shaking
 * @package @voilajsx/uikit
 * @file /vite.config.js
 */

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import { glob } from 'glob';

// Get all component files dynamically
const componentFiles = glob.sync('src/components/**/*.jsx');
const themeFiles = glob.sync('src/themes/**/*.jsx');
const libFiles = glob.sync('src/lib/**/*.js');
const adapterFiles = glob.sync('src/adapters/**/*.js');

// Create entry points object
const createEntryPoints = () => {
  const entries = {};

  // Add CSS entry point
  entries['style'] = path.resolve(__dirname, 'src/style.js');

  // Add each component as separate entry
  [...componentFiles, ...themeFiles, ...libFiles, ...adapterFiles].forEach(
    (file) => {
      const relativePath = path.relative('src', file);
      const key = relativePath.replace(/\.(jsx?|tsx?)$/, '');
      entries[key] = path.resolve(__dirname, file);
    }
  );

  return entries;
};

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    lib: {
      entry: createEntryPoints(),
      formats: ['es'], // Only ESM for better tree-shaking
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        // External all Radix UI packages
        '@radix-ui/react-accordion',
        '@radix-ui/react-avatar',
        '@radix-ui/react-checkbox',
        '@radix-ui/react-dialog',
        '@radix-ui/react-dropdown-menu',
        '@radix-ui/react-label',
        '@radix-ui/react-popover',
        '@radix-ui/react-progress',
        '@radix-ui/react-radio-group',
        '@radix-ui/react-select',
        '@radix-ui/react-separator',
        '@radix-ui/react-slider',
        '@radix-ui/react-slot',
        '@radix-ui/react-switch',
        '@radix-ui/react-tabs',
        '@radix-ui/react-toast',
        '@radix-ui/react-toggle',
        '@radix-ui/react-tooltip',
        // External utilities
        'class-variance-authority',
        'clsx',
        'tailwind-merge',
        'lucide-react',
        'react-hook-form',
        '@hookform/resolvers',
        'zod',
      ],
      output: {
        // Preserve directory structure
        entryFileNames: '[name].js',
        // Handle CSS files properly
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith('.css')) {
            return 'style.css';
          }
          return 'assets/[name].[ext]';
        },
        // Keep modules separate for tree-shaking
        preserveModules: true,
        preserveModulesRoot: 'src',
      },
    },
    // Optimize for tree-shaking
    minify: false, // Don't minify in lib mode - let consumers do it
    sourcemap: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    devSourcemap: false,
  },
});
