import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/uikit/',
  resolve: {
    alias: {
      '@dist': resolve(__dirname, '../dist'),
    },
  },
});
