import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'; // Add this
import path from 'path';

export default defineConfig({
  plugins: [react(), tailwindcss()], // Add tailwindcss plugin
  base: '/uikit/', // Your GitHub repo name
  resolve: {
    alias: {
      '@voilajsx/uikit': path.resolve(__dirname, '../src'),
      '@': path.resolve(__dirname, '../src'),
    },
  },
});
