import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  css: {
    postcss: false, // Disable PostCSS processing
  },
  server: {
    port: 5173,
    open: true,
    fs: {
      // Allow serving files from one level up
      allow: ['..'],
    },
  },
  resolve: {
    alias: {
      '@': '/src',
      // Add an alias for the dist directory
      '@dist': resolve(__dirname, '../dist'),
    },
  },
});
