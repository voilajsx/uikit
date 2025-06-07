/**
 * @fileoverview Vite configuration for @voilajsx/uikit library
 * @description Builds components as library with proper React externalization
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
        style: path.resolve(__dirname, 'src/style.js'),

        // Individual components - explicitly define each one
        'components/ui/button': path.resolve(
          __dirname,
          'src/components/ui/button.jsx'
        ),
        'components/ui/card': path.resolve(
          __dirname,
          'src/components/ui/card.jsx'
        ),
        'components/ui/input': path.resolve(
          __dirname,
          'src/components/ui/input.jsx'
        ),
        'components/ui/badge': path.resolve(
          __dirname,
          'src/components/ui/badge.jsx'
        ),
        'components/ui/avatar': path.resolve(
          __dirname,
          'src/components/ui/avatar.jsx'
        ),
        'components/ui/checkbox': path.resolve(
          __dirname,
          'src/components/ui/checkbox.jsx'
        ),
        'components/ui/dialog': path.resolve(
          __dirname,
          'src/components/ui/dialog.jsx'
        ),
        'components/ui/dropdown-menu': path.resolve(
          __dirname,
          'src/components/ui/dropdown-menu.jsx'
        ),
        'components/ui/form': path.resolve(
          __dirname,
          'src/components/ui/form.jsx'
        ),
        'components/ui/label': path.resolve(
          __dirname,
          'src/components/ui/label.jsx'
        ),
        'components/ui/menubar': path.resolve(
          __dirname,
          'src/components/ui/menubar.jsx'
        ),
        'components/ui/pagination': path.resolve(
          __dirname,
          'src/components/ui/pagination.jsx'
        ),
        'components/ui/popover': path.resolve(
          __dirname,
          'src/components/ui/popover.jsx'
        ),
        'components/ui/progress': path.resolve(
          __dirname,
          'src/components/ui/progress.jsx'
        ),
        'components/ui/radio-group': path.resolve(
          __dirname,
          'src/components/ui/radio-group.jsx'
        ),
        'components/ui/select': path.resolve(
          __dirname,
          'src/components/ui/select.jsx'
        ),
        'components/ui/separator': path.resolve(
          __dirname,
          'src/components/ui/separator.jsx'
        ),
        'components/ui/sheet': path.resolve(
          __dirname,
          'src/components/ui/sheet.jsx'
        ),
        'components/ui/skeleton': path.resolve(
          __dirname,
          'src/components/ui/skeleton.jsx'
        ),
        'components/ui/slider': path.resolve(
          __dirname,
          'src/components/ui/slider.jsx'
        ),
        'components/ui/switch': path.resolve(
          __dirname,
          'src/components/ui/switch.jsx'
        ),
        'components/ui/table': path.resolve(
          __dirname,
          'src/components/ui/table.jsx'
        ),
        'components/ui/tabs': path.resolve(
          __dirname,
          'src/components/ui/tabs.jsx'
        ),
        'components/ui/textarea': path.resolve(
          __dirname,
          'src/components/ui/textarea.jsx'
        ),
        'components/ui/toast': path.resolve(
          __dirname,
          'src/components/ui/toast.jsx'
        ),
        'components/ui/toggle': path.resolve(
          __dirname,
          'src/components/ui/toggle.jsx'
        ),
        'components/ui/tooltip': path.resolve(
          __dirname,
          'src/components/ui/tooltip.jsx'
        ),

        // Layout components
        'components/layouts/container': path.resolve(
          __dirname,
          'src/components/layouts/container.jsx'
        ),
        'components/layouts/header': path.resolve(
          __dirname,
          'src/components/layouts/header.jsx'
        ),
        'components/layouts/footer': path.resolve(
          __dirname,
          'src/components/layouts/footer.jsx'
        ),
        'components/layouts/sidebar': path.resolve(
          __dirname,
          'src/components/layouts/sidebar.jsx'
        ),

        // Theme provider
        'themes/theme-provider': path.resolve(
          __dirname,
          'src/themes/theme-provider.jsx'
        ),

        // Utils
        'lib/utils': path.resolve(__dirname, 'src/lib/utils.js'),
        'lib/platform': path.resolve(__dirname, 'src/lib/platform.js'),

        // Adapters
        'adapters/hooks': path.resolve(__dirname, 'src/adapters/hooks.js'),
        'adapters/web': path.resolve(__dirname, 'src/adapters/web.js'),
        'adapters/native': path.resolve(__dirname, 'src/adapters/native.js'),
      },
      formats: ['es'], // Only ES modules
    },
    rollupOptions: {
      // CRITICAL: Externalize everything that should be provided by the consumer
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        'react/jsx-dev-runtime',
        // Radix UI
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
        // Utilities
        'class-variance-authority',
        'clsx',
        'tailwind-merge',
        'lucide-react',
        'react-hook-form',
        '@hookform/resolvers',
        'zod',
      ],
      output: {
        // Handle CSS files
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith('.css')) {
            return 'style.css';
          }
          return 'assets/[name].[ext]';
        },
        // Ensure proper ES module output
        format: 'es',
        // Don't create globals (we're building ES modules)
        globals: undefined,
      },
    },
    minify: false, // Don't minify - let consumers handle this
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
