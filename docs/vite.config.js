import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/uikit/',
  resolve: {
    alias: {
      // More specific aliases for each component
      '@voilajsx/uikit/button': path.resolve(
        __dirname,
        '../src/components/ui/button.jsx'
      ),
      '@voilajsx/uikit/card': path.resolve(
        __dirname,
        '../src/components/ui/card.jsx'
      ),
      '@voilajsx/uikit/input': path.resolve(
        __dirname,
        '../src/components/ui/input.jsx'
      ),
      '@voilajsx/uikit/badge': path.resolve(
        __dirname,
        '../src/components/ui/badge.jsx'
      ),
      '@voilajsx/uikit/avatar': path.resolve(
        __dirname,
        '../src/components/ui/avatar.jsx'
      ),
      '@voilajsx/uikit/alert': path.resolve(
        __dirname,
        '../src/components/ui/alert.jsx'
      ),
      '@voilajsx/uikit/select': path.resolve(
        __dirname,
        '../src/components/ui/select.jsx'
      ),
      '@voilajsx/uikit/switch': path.resolve(
        __dirname,
        '../src/components/ui/switch.jsx'
      ),
      '@voilajsx/uikit/table': path.resolve(
        __dirname,
        '../src/components/ui/table.jsx'
      ),
      '@voilajsx/uikit/label': path.resolve(
        __dirname,
        '../src/components/ui/label.jsx'
      ),

      // Templates
      '@voilajsx/uikit/templates/auth': path.resolve(
        __dirname,
        '../src/templates/auth.jsx'
      ),
      '@voilajsx/uikit/templates/default': path.resolve(
        __dirname,
        '../src/templates/default.jsx'
      ),
      '@voilajsx/uikit/templates/form': path.resolve(
        __dirname,
        '../src/templates/form.jsx'
      ),
      '@voilajsx/uikit/templates/table': path.resolve(
        __dirname,
        '../src/templates/table.jsx'
      ),
      '@voilajsx/uikit/templates/blank': path.resolve(
        __dirname,
        '../src/templates/blank.jsx'
      ),

      // Layout components
      '@voilajsx/uikit/header': path.resolve(
        __dirname,
        '../src/components/layouts/header.jsx'
      ),
      '@voilajsx/uikit/sidebar': path.resolve(
        __dirname,
        '../src/components/layouts/sidebar.jsx'
      ),
      '@voilajsx/uikit/container': path.resolve(
        __dirname,
        '../src/components/layouts/container.jsx'
      ),
      '@voilajsx/uikit/footer': path.resolve(
        __dirname,
        '../src/components/layouts/footer.jsx'
      ),

      // Theme system
      '@voilajsx/uikit/theme-provider': path.resolve(
        __dirname,
        '../src/themes/theme-provider.jsx'
      ),
      '@voilajsx/uikit/styles': path.resolve(
        __dirname,
        '../src/themes/globals.css'
      ),

      // Utils
      '@voilajsx/uikit/utils': path.resolve(__dirname, '../src/lib/utils.js'),

      // Fallback
      '@voilajsx/uikit': path.resolve(__dirname, '../src'),
      '@': path.resolve(__dirname, './src'),
    },
  },
});
