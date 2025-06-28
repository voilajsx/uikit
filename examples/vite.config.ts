/**
 * Vite configuration for @voilajsx/uikit examples
 * @description Development setup with relative imports from parent src/
 * @module @voilajsx/uikit
 * @file examples/vite.config.ts
 */

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(),tailwindcss()],
  
  resolve: {
    alias: {
      // Relative imports to parent src/ directory
      '@voilajsx/uikit/themes': resolve(__dirname, '../src/themes'),
      '@voilajsx/uikit/admin': resolve(__dirname, '../src/components/layouts/admin'),
      '@voilajsx/uikit/page': resolve(__dirname, '../src/components/layouts/page'),
      '@voilajsx/uikit/auth': resolve(__dirname, '../src/components/layouts/auth'),
      '@voilajsx/uikit/blank': resolve(__dirname, '../src/components/layouts/blank'),
      '@voilajsx/uikit/popup': resolve(__dirname, '../src/components/layouts/popup'),
      '@voilajsx/uikit/header': resolve(__dirname, '../src/components/sections/header'),
      '@voilajsx/uikit/footer': resolve(__dirname, '../src/components/sections/footer'),
      '@voilajsx/uikit/container': resolve(__dirname, '../src/components/sections/container'),
      '@voilajsx/uikit/button': resolve(__dirname, '../src/components/ui/button'),
      '@voilajsx/uikit/badge': resolve(__dirname, '../src/components/ui/badge'),
      '@voilajsx/uikit/card': resolve(__dirname, '../src/components/ui/card'),
      '@voilajsx/uikit/input': resolve(__dirname, '../src/components/ui/input'),
      '@voilajsx/uikit/form': resolve(__dirname, '../src/components/ui/form'),
      '@voilajsx/uikit/data-table': resolve(__dirname, '../src/components/ui/data-table'),
      '@voilajsx/uikit/dialog': resolve(__dirname, '../src/components/ui/dialog'),
      '@voilajsx/uikit/tabs': resolve(__dirname, '../src/components/ui/tabs'),
      '@voilajsx/uikit/select': resolve(__dirname, '../src/components/ui/select'),
      '@voilajsx/uikit/textarea': resolve(__dirname, '../src/components/ui/textarea'),
      '@voilajsx/uikit/checkbox': resolve(__dirname, '../src/components/ui/checkbox'),
      '@voilajsx/uikit/switch': resolve(__dirname, '../src/components/ui/switch'),
      '@voilajsx/uikit/utils': resolve(__dirname, '../src/lib/utils'),
      '@voilajsx/uikit/styles': resolve(__dirname, '../src/styles/globals.css'),
      '@voilajsx/uikit/motion' : resolve(__dirname,'../src/components/ui/motion'),
      
      // Internal aliases for UIKit components to resolve @/* paths
      '@/lib/utils': resolve(__dirname, '../src/lib/utils'),
      '@/lib/platform': resolve(__dirname, '../src/lib/platform'),
      '@/types': resolve(__dirname, '../src/types'),
      '@/components/ui': resolve(__dirname, '../src/components/ui'),
      '@/components/layouts': resolve(__dirname, '../src/components/layouts'),
      '@/components/sections': resolve(__dirname, '../src/components/sections'),
      '@/themes': resolve(__dirname, '../src/themes'),

      // Internal aliases for examples
      '@': resolve(__dirname, './src'),
    },
  },
  
  // Development server config
  server: {
    port: 3001,
    host: true,
    open: true
  },
  
  // Build config
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
  
  // Base path for GitHub Pages deployment
  base: '/examples/',
});