/**
 * @fileoverview Vite configuration for @voilajsx/uikit library
 * @description Builds components with flat import structure for clean DX
 * @package @voilajsx/uikit
 * @file /vite.config.js
 */

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    lib: {
      entry: {
        // CSS entry
        styles: path.resolve(__dirname, 'src/style.js'),

        // UI Components - Flat structure
        accordion: path.resolve(__dirname, 'src/components/ui/accordion.jsx'),
        alert: path.resolve(__dirname, 'src/components/ui/alert.jsx'),
        avatar: path.resolve(__dirname, 'src/components/ui/avatar.jsx'),
        badge: path.resolve(__dirname, 'src/components/ui/badge.jsx'),
        breadcrumb: path.resolve(__dirname, 'src/components/ui/breadcrumb.jsx'),
        button: path.resolve(__dirname, 'src/components/ui/button.jsx'),
        calendar: path.resolve(__dirname, 'src/components/ui/calendar.jsx'),
        card: path.resolve(__dirname, 'src/components/ui/card.jsx'),
        checkbox: path.resolve(__dirname, 'src/components/ui/checkbox.jsx'),
        collapsible: path.resolve(
          __dirname,
          'src/components/ui/collapsible.jsx'
        ),
        command: path.resolve(__dirname, 'src/components/ui/command.jsx'),
        'data-table': path.resolve(
          __dirname,
          'src/components/ui/data-table.jsx'
        ),
        dialog: path.resolve(__dirname, 'src/components/ui/dialog.jsx'),
        'dropdown-menu': path.resolve(
          __dirname,
          'src/components/ui/dropdown-menu.jsx'
        ),
        form: path.resolve(__dirname, 'src/components/ui/form.jsx'),
        'hover-card': path.resolve(
          __dirname,
          'src/components/ui/hover-card.jsx'
        ),
        input: path.resolve(__dirname, 'src/components/ui/input.jsx'),
        label: path.resolve(__dirname, 'src/components/ui/label.jsx'),
        menubar: path.resolve(__dirname, 'src/components/ui/menubar.jsx'),
        pagination: path.resolve(__dirname, 'src/components/ui/pagination.jsx'),
        popover: path.resolve(__dirname, 'src/components/ui/popover.jsx'),
        progress: path.resolve(__dirname, 'src/components/ui/progress.jsx'),
        'radio-group': path.resolve(
          __dirname,
          'src/components/ui/radio-group.jsx'
        ),
        select: path.resolve(__dirname, 'src/components/ui/select.jsx'),
        separator: path.resolve(__dirname, 'src/components/ui/separator.jsx'),
        sheet: path.resolve(__dirname, 'src/components/ui/sheet.jsx'),
        skeleton: path.resolve(__dirname, 'src/components/ui/skeleton.jsx'),
        slider: path.resolve(__dirname, 'src/components/ui/slider.jsx'),
        switch: path.resolve(__dirname, 'src/components/ui/switch.jsx'),
        table: path.resolve(__dirname, 'src/components/ui/table.jsx'),
        tabs: path.resolve(__dirname, 'src/components/ui/tabs.jsx'),
        textarea: path.resolve(__dirname, 'src/components/ui/textarea.jsx'),
        toast: path.resolve(__dirname, 'src/components/ui/toast.jsx'),
        toggle: path.resolve(__dirname, 'src/components/ui/toggle.jsx'),
        tooltip: path.resolve(__dirname, 'src/components/ui/tooltip.jsx'),

        // Layout Components - Flat structure
        admin: path.resolve(__dirname, 'src/components/layouts/admin.jsx'),
        auth: path.resolve(__dirname, 'src/components/layouts/auth.jsx'),
        blank: path.resolve(__dirname, 'src/components/layouts/blank.jsx'),
        page: path.resolve(__dirname, 'src/components/layouts/page.jsx'),
        popup: path.resolve(__dirname, 'src/components/layouts/popup.jsx'), // ✅ NEW

        // Section Components - Flat structure
        container: path.resolve(
          __dirname,
          'src/components/sections/container.jsx'
        ),
        header: path.resolve(__dirname, 'src/components/sections/header.jsx'),
        footer: path.resolve(__dirname, 'src/components/sections/footer.jsx'),

        // Theme System - Flat structure
        'theme-provider': path.resolve(
          __dirname,
          'src/themes/theme-provider.jsx'
        ),
        themes: path.resolve(__dirname, 'src/themes/index.js'),

        // Utilities - Flat structure
        utils: path.resolve(__dirname, 'src/lib/utils.js'),
        platform: path.resolve(__dirname, 'src/lib/platform.js'),

        // Layout System - NEW entries for VoilaJS integration
        wrapper: path.resolve(__dirname, 'src/lib/layout-wrapper.jsx'),
        plugin: path.resolve(__dirname, 'src/lib/layout-plugin.jsx'),

        // Cross-Platform Adapters - Flat structure
        adapters: path.resolve(__dirname, 'src/adapters/index.js'),
      },
      formats: ['es'], // Only ES modules for modern bundlers
    },
    rollupOptions: {
      // Externalize all peer dependencies
      external: [
        // React ecosystem
        'react',
        'react-dom',
        'react/jsx-runtime',
        'react/jsx-dev-runtime',

        // Radix UI primitives
        '@radix-ui/react-accordion',
        '@radix-ui/react-avatar',
        '@radix-ui/react-checkbox',
        '@radix-ui/react-collapsible',
        '@radix-ui/react-dialog',
        '@radix-ui/react-dropdown-menu',
        '@radix-ui/react-hover-card',
        '@radix-ui/react-label',
        '@radix-ui/react-menubar',
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

        // Form handling
        'react-hook-form',
        '@hookform/resolvers',
        '@hookform/resolvers/zod',
        'zod',

        // Styling utilities
        'class-variance-authority',
        'clsx',
        'tailwind-merge',

        // Icons
        'lucide-react',

        // React Native (when available)
        'react-native',

        // Build tools (for Vite plugin)
        'vite',

        // Node.js built-ins (for Vite plugin)
        'node:fs',
        'node:path',
        'fs',
        'path',
      ],
      output: {
        // Proper asset handling
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith('.css')) {
            return 'styles.css'; // Match the entry name
          }
          return 'assets/[name].[hash][extname]';
        },
        // ES module format
        format: 'es',
        // Clean file names for flat structure
        entryFileNames: '[name].js',
        chunkFileNames: 'chunks/[name].[hash].js',
      },
    },
    // Don't minify - let consumers handle optimization
    minify: false,
    // Generate source maps for debugging
    sourcemap: true,
    // Target modern environments
    target: 'es2020',
    // Clean dist before build
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      // Map internal imports to relative paths during build
      '@voilajsx/uikit/utils': path.resolve(__dirname, './src/lib/utils.js'),
      '@voilajsx/uikit/button': path.resolve(
        __dirname,
        './src/components/ui/button.jsx'
      ),
      '@voilajsx/uikit/badge': path.resolve(
        __dirname,
        './src/components/ui/badge.jsx'
      ),
      '@voilajsx/uikit/separator': path.resolve(
        __dirname,
        './src/components/ui/separator.jsx'
      ),
      '@voilajsx/uikit/header': path.resolve(
        __dirname,
        './src/components/sections/header.jsx'
      ),
      '@voilajsx/uikit/footer': path.resolve(
        __dirname,
        './src/components/sections/footer.jsx'
      ),
      '@voilajsx/uikit/container': path.resolve(
        __dirname,
        './src/components/sections/container.jsx'
      ),
      '@voilajsx/uikit/popup': path.resolve(
        __dirname,
        './src/components/layouts/popup.jsx'
      ), // ✅ NEW
    },
  },
  css: {
    devSourcemap: false,
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify(
      process.env.NODE_ENV || 'production'
    ),
  },
});
