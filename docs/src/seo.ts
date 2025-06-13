/**
 * @fileoverview SEO configuration for all routes
 * @description Centralized SEO meta data for @voilajsx/uikit documentation
 * @package @voilajsx/uikit
 * @file /src/seo.ts
 */

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string;
  type?: 'website' | 'article';
}

export const seoConfig: Record<string, SEOConfig> = {
  // Main pages
  '/': {
    title: 'Voilajsx/uikit - Cross Platform React Components with Beautiful Themes',
    description: 'Modern React component library with 6 professional themes, complete layouts, and universal platform support. Zero migration from shadcn/ui with OKLCH color science.',
    keywords: 'react, components, ui, tailwind, shadcn, cross-platform, typescript, design-system, oklch, themes',
    type: 'website'
  },
  
  '/start': {
    title: 'Getting Started',
    description: 'Quick start guide for @voilajsx/uikit. Install, configure, and build your first app with React components and themes in minutes.',
    keywords: 'getting started, installation, setup, quick start, react components',
    type: 'article'
  },
  
  '/themes': {
    title: 'Themes',
    description: '6 professional themes with OKLCH color science: Default, Aurora, Metro, Neon, Ruby, and Studio. Light/dark mode support included.',
    keywords: 'themes, oklch, colors, dark mode, light mode, aurora, metro, neon, ruby, studio',
    type: 'article'
  },
  
  '/examples': {
    title: 'Examples',
    description: 'Live examples and code snippets for @voilajsx/uikit components, layouts, and themes. Copy-paste ready implementations.',
    keywords: 'examples, code snippets, demos, templates, implementation',
    type: 'article'
  },
  
  '/testing': {
    title: 'Testing',
    description: 'Testing playground for @voilajsx/uikit components and features. Interactive testing environment for development.',
    keywords: 'testing, playground, development, interactive, demo',
    type: 'article'
  },

  // Component documentation
  '/components': {
    title: 'Components',
    description: '35+ React components with 100% shadcn/ui compatibility. Form controls, navigation, data display, overlays, and interactive elements.',
    keywords: 'components, react, shadcn, ui, form, navigation, data display, overlays',
    type: 'article'
  },
  
  '/components/ui': {
    title: 'UI Components',
    description: 'Complete UI component library: Button, Input, Select, Card, Dialog, and 30+ more components with TypeScript support.',
    keywords: 'ui components, button, input, select, card, dialog, typescript',
    type: 'article'
  },
  
  '/components/sections': {
    title: 'Section Components',
    description: '3 essential section components: Container with sidebar support, responsive Header with navigation, and Footer with advanced layouts.',
    keywords: 'sections, container, header, footer, navigation, sidebar, responsive',
    type: 'article'
  },
  
  '/components/layouts': {
    title: 'Layout Components',
    description: '4 complete page layouts: Admin dashboard, Authentication pages, Blank templates, and general Page layout with compound components.',
    keywords: 'layouts, admin, authentication, page templates, dashboard, responsive',
    type: 'article'
  },

  // Auth examples
  '/examples/layouts/auth/simple': {
    title: 'Auth Simple Template',
    description: 'Simple authentication template example with centered layout. Clean and minimal design for login and signup forms.',
    keywords: 'auth, authentication, login, signup, simple, template, form',
    type: 'article'
  },
  
  '/examples/layouts/auth/card': {
    title: 'Auth Card Template',
    description: 'Card-based authentication template with elevated design. Perfect for modern login and registration interfaces.',
    keywords: 'auth, authentication, card, elevated, modern, login, registration',
    type: 'article'
  },
  
  '/examples/layouts/auth/split-gradient': {
    title: 'Auth Split Gradient Template',
    description: 'Split-screen authentication layout with beautiful gradient background. Eye-catching design for premium applications.',
    keywords: 'auth, split screen, gradient, premium, background, modern',
    type: 'article'
  },
  
  '/examples/layouts/auth/split-image': {
    title: 'Auth Split Image Template',
    description: 'Split-screen authentication with custom background image. Professional layout for branded login experiences.',
    keywords: 'auth, split screen, image, background, branded, professional',
    type: 'article'
  },
  
  '/examples/layouts/auth/card-gradient': {
    title: 'Auth Card Gradient Template',
    description: 'Authentication card with gradient header design. Beautiful vertical layout with animated background patterns.',
    keywords: 'auth, card, gradient, header, animated, vertical, patterns',
    type: 'article'
  },
  
  '/examples/layouts/auth/card-image': {
    title: 'Auth Card Image Template',
    description: 'Authentication card overlay on background image. Stunning visual design with glassmorphism effects.',
    keywords: 'auth, card, image, overlay, glassmorphism, visual, stunning',
    type: 'article'
  },

  // Layout examples
  '/examples/layouts/page': {
    title: 'Page Layout Example',
    description: 'General page layout example with Header, Content, and Footer components. Responsive design with multiple size options.',
    keywords: 'page layout, header, content, footer, responsive, compound components',
    type: 'article'
  },
  
  '/examples/layouts/admin': {
    title: 'Admin Layout Example',
    description: 'Admin dashboard layout with responsive sidebar navigation. Perfect for management interfaces and dashboards.',
    keywords: 'admin, dashboard, sidebar, navigation, management, interface',
    type: 'article'
  },
  
  '/examples/layouts/blank': {
    title: 'Blank Layout Example',
    description: 'Blank page template examples for error pages, maintenance, and custom content. Multiple variants available.',
    keywords: 'blank, template, error, maintenance, custom, variants',
    type: 'article'
  },

  // Section examples
  '/examples/sections/container': {
    title: 'Container Section Example',
    description: 'Container component example with sidebar support and responsive design. Perfect for main content areas.',
    keywords: 'container, sidebar, responsive, main content, section',
    type: 'article'
  },
  
  '/examples/sections/header': {
    title: 'Header Section Example',
    description: 'Header component example with navigation menu and responsive mobile design. Multiple variants and styles.',
    keywords: 'header, navigation, menu, responsive, mobile, variants',
    type: 'article'
  },
  
  '/examples/sections/footer': {
    title: 'Footer Section Example',
    description: 'Footer component examples with basic and advanced layouts. Links, social media, and multi-column designs.',
    keywords: 'footer, links, social media, multi-column, advanced, layouts',
    type: 'article'
  }
};

// Default SEO for unknown routes
export const defaultSEO: SEOConfig = {
  title: '@voilajsx/uikit Documentation',
  description: 'Cross-platform React component library with beautiful themes and universal platform support.',
  keywords: 'react, components, ui, cross-platform, themes, documentation',
  type: 'website'
};