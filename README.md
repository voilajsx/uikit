@voilajsx/uikit
A comprehensive React UI component library with a powerful theming system, featuring zero-touch CSS hijacking, automatic gradients, design tokens, and professional theme presets. Built on Tailwind CSS and Radix UI, @voilajsx/uikit leverages OKLCH color science for vibrant, accessible designs across web, React Native, Tauri, Expo, and Chrome extensions.
Why @voilajsx/uikit?
@voilajsx/uikit is designed to streamline UI development with a focus on flexibility, accessibility, and developer experience. Key benefits include:

Cross-Platform Support: Build consistent UIs for web, mobile (React Native, Expo), desktop (Tauri), and Chrome extensions using a single library.
Enhanced Theming System: Five professional themes (base, elegant, metro, studio, vivid) with semantic colors, automatic gradients, and design tokens for effortless customization.
OKLCH Color Science: Modern, perceptually uniform colors ensure vibrant, accessible designs with optimal contrast in light and dark modes.
CLI-Driven Workflow: Powerful CLI tools (create, bundle, serve, build, deploy) simplify project setup, theme management, development, and deployment.
Accessible Components: Built on Radix UI primitives, components like Button, Card, and Dialog are accessible and customizable.
Tailwind CSS Integration: Leverages Tailwind’s utility-first approach for rapid styling with minimal CSS overhead.
Developer-Friendly: TypeScript support, hot-reloading, and bundle analysis ensure a smooth development experience.

Whether you’re building a single-page app, a multi-page site, or a cross-platform application, @voilajsx/uikit provides the tools and flexibility to deliver professional, themeable UIs with minimal effort.
Installation
For the best experience, install @voilajsx/uikit globally to access the uikit CLI from anywhere:
npm install -g @voilajsx/uikit

For project-specific usage, install locally:
npm install @voilajsx/uikit

Install required peer dependencies:
npm install react react-dom @fontsource/libre-baskerville @fontsource/montserrat @fontsource/dm-serif-display @fontsource/caveat

Optional font dependencies (depending on custom themes):
npm install @fontsource/jetbrains-mono @fontsource/orbitron @fontsource/poppins @fontsource/rajdhani @fontsource/source-code-pro @fontsource/merriweather @fontsource/crimson-text @fontsource/amatic-sc

Note: Global installation enables direct uikit <command> usage (e.g., uikit create myapp). Without global installation, use npx uikit <command>.
Getting Started
Create a new project with a single command. The CLI scaffolds different boilerplates based on your needs:
# Create a single-page theme showcase (default)
npx uikit create myapp

# Create a Single-Page Application (SPA) with React Router
npx uikit create myapp --spa

# Create a Multi-Page Application (MPA) with routing and pages
npx uikit create myapp --multi

# Specify a default theme (e.g., elegant)
npx uikit create myapp --spa --theme elegant

This creates a project directory with all necessary dependencies, a development environment, and themeable components.
CLI Commands
The @voilajsx/uikit CLI streamlines your development workflow with the following commands. Use uikit <command> if installed globally, or npx uikit <command> otherwise.



Command
Description
Options



uikit create <name>
Scaffolds a new project with a chosen boilerplate.
--spa: Single-page app with routing.--multi: Multi-page app with routing and pages.--single: Single-page theme showcase (default).--theme <theme>: Default theme (base, elegant, metro, studio, vivid; default: base).


uikit bundle
Bundles theme presets into a single, optimized CSS file (src/styles/globals.css).
--output <path>: Output file path.--watch: Watch for theme changes.--verbose: Enable detailed logging.


uikit serve
Starts a development server with hot-reloading.
--port <number>: Port (default: 5173).--restart: Kill existing processes on port.--open: Open browser automatically.


uikit build
Creates a production-ready build.
--outDir <dir>: Output directory (default: dist).--analyze: Analyze bundle size.


uikit deploy
Generates a static site for deployment.
--base <path>: Base path (default: /).--github: Optimize for GitHub Pages.


Examples:
# Create an SPA with the vivid theme
npx uikit create myapp --spa --theme vivid

# Bundle themes with verbose logging
npx uikit bundle --verbose --watch

# Start a development server on port 3000
npx uikit serve --port 3000 --open

# Build for production with bundle analysis
npx uikit build --analyze

# Deploy for GitHub Pages
npx uikit deploy --github

Note: The legacy npx voila-bundle command is deprecated. Use npx uikit bundle instead.
Theming
@voilajsx/uikit offers a flexible theming system with five professional presets and support for custom themes.
Available Themes

Base: Metallic black with System UI fonts, professional styling, and gradients.
Elegant: Professional blue with Montserrat and DM Serif Display fonts, solid colors with hover effects.
Metro: Nice green with clean typography, sharp edges, and gradients.
Studio: Black and orange with artistic fonts, bold styling, and gradients.
Vivid: Luxurious purple with slight orange, using Libre Baskerville, Playfair Display, and Caveat fonts, with enhanced shadows and gradients.

ThemeProvider
Wrap your application in the ThemeProvider to apply a global theme and mode:
import { ThemeProvider, useTheme } from '@voilajsx/uikit/theme-provider';
import '@voilajsx/uikit/styles';

function App() {
  return (
    <ThemeProvider theme="elegant" mode="light" forceConfig={true}>
      <MyComponent />
    </ThemeProvider>
  );
}

function MyComponent() {
  const { theme, mode, setTheme, toggleMode, availableThemes } = useTheme();
  return (
    <div className="bg-background text-foreground">
      <p>Current theme: {theme} ({mode} mode)</p>
      <select onChange={(e) => setTheme(e.target.value)} value={theme}>
        {availableThemes.map((t) => (
          <option key={t} value={t}>{t.charAt(0).toUpperCase() + t.slice(1)}</option>
        ))}
      </select>
      <button onClick={toggleMode}>{mode === 'dark' ? '☀️ Light' : '🌙 Dark'}</button>
    </div>
  );
}

Custom Themes
Create custom themes in src/themes/presets/:

Define a Theme:// src/themes/presets/my-theme.js
export default {
  id: 'my-theme',
  name: 'My Custom Theme',
  light: {
    background: '#FFFFFF',
    foreground: '#111111',
    primary: '#3B82F6',
    primaryForeground: '#FFFFFF',
    secondary: '#6B7280',
    secondaryForeground: '#FFFFFF',
    accent: '#10B981',
    accentForeground: '#FFFFFF',
    muted: '#E5E7EB',
    mutedForeground: '#6B7280'
  },
  dark: {
    background: '#111111',
    foreground: '#FFFFFF',
    primary: '#60A5FA',
    primaryForeground: '#FFFFFF',
    secondary: '#9CA3AF',
    secondaryForeground: '#FFFFFF',
    accent: '#34D399',
    accentForeground: '#FFFFFF',
    muted: '#374151',
    mutedForeground: '#9CA3AF'
  },
  design: {
    fontPrimary: 'Inter',
    radiusEnhance: '1rem',
    shadowEnhance: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
  },
  customStyles: `
    .theme-my-theme {
      font-family: Inter, sans-serif;
      --radius: 1rem;
    }
    .theme-my-theme .bg-primary {
      background: linear-gradient(135deg, var(--color-primary), #1E40AF);
    }
  `
};


Bundle the Theme:npx uikit bundle


Use the Theme:setTheme('my-theme');



Font Loading
Fonts are not bundled in the CSS to avoid duplication. Include theme-specific fonts via src/styles/fonts.css:
/* src/styles/fonts.css */
@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville&family=Playfair+Display&family=Caveat&family=Montserrat&family=DM+Serif+Display&display=swap');

Import in your application:
/* src/styles/globals.css */
@import './fonts.css';
/* Theme declarations bundled here */

Supported fonts:

Libre Baskerville, Playfair Display, Caveat (vivid theme)
Montserrat, DM Serif Display (elegant theme)
System UI (base theme)
Optional: JetBrains Mono, Orbitron, Poppins, Rajdhani, Source Code Pro, Merriweather, Crimson Text, Amatic SC

Core Concepts

Semantic Colors: Use classes like bg-primary, text-foreground, bg-background to ensure compatibility with all themes. Avoid hardcoded colors.
Layouts: Use components like AdminLayout, AuthLayout, PageLayout, PopupLayout, and BlankLayout for consistent page structures.
Components: Leverage Radix UI-based components (e.g., Button, Card, Dialog, Accordion) for accessible, customizable UI elements.
Cross-Platform: Adapt components for web, React Native, Tauri, or Expo using the platform and adapters exports.

Migration from Old Themes
Deprecated themes (aurora, default, ruby, neon) are no longer supported. The CLI may emit warnings if detected. Update to base, elegant, metro, studio, or vivid.
License
This project is licensed under the MIT License. See LICENSE for details.
Resources

Documentation
GitHub Repository
Issue Tracker
Quick Start Guide
LLM Usage Guide

Built with @voilajsx/uikit ✨