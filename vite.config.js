/**
 * @fileoverview Vite configuration for @voilajsx/uikit
 * @description Configures Vite with Tailwind CSS v4 and React
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
      entry: path.resolve(__dirname, 'src/index.js'),
      name: 'VoilaJSXUIKit',
      fileName: (format) => `uikit.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    devSourcemap: false, // Disable source maps in dev to avoid error
  },
});
