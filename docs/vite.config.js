import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/uikit/',
  resolve: {
    alias: {
      // UI Components (from components/ui/)
      '@voilajsx/uikit/button': path.resolve(
        __dirname,
        '../src/components/ui/button.jsx'
      ),
      '@voilajsx/uikit/sheet': path.resolve(
        __dirname,
        '../src/components/ui/sheet.jsx'
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
      '@voilajsx/uikit/tabs': path.resolve(
        __dirname,
        '../src/components/ui/tabs.jsx'
      ),
      '@voilajsx/uikit/label': path.resolve(
        __dirname,
        '../src/components/ui/label.jsx'
      ),
      '@voilajsx/uikit/separator': path.resolve(
        __dirname,
        '../src/components/ui/separator.jsx'
      ),

      // Sections (3 components)
      '@voilajsx/uikit/header': path.resolve(
        __dirname,
        '../src/components/sections/header.jsx'
      ),
      '@voilajsx/uikit/footer': path.resolve(
        __dirname,
        '../src/components/sections/footer.jsx'
      ),
      '@voilajsx/uikit/container': path.resolve(
        __dirname,
        '../src/components/sections/container.jsx'
      ),

      // Layouts (4 layouts)
      '@voilajsx/uikit/admin': path.resolve(
        __dirname,
        '../src/components/layouts/admin.jsx'
      ),
      '@voilajsx/uikit/page': path.resolve(
        __dirname,
        '../src/components/layouts/page.jsx'
      ),
      '@voilajsx/uikit/blank': path.resolve(
        __dirname,
        '../src/components/layouts/blank.jsx'
      ),
      '@voilajsx/uikit/auth': path.resolve(
        __dirname,
        '../src/components/layouts/auth.jsx'
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
