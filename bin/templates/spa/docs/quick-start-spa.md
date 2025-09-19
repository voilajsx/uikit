# Quick Start: SPA (Single Page Application)

**Build modern single-page applications with all components in one file - perfect for demos, prototypes, and small applications.**

## 🎯 What is SPA Template?

The SPA template provides a **single-file architecture** where all page components are defined in one `App.tsx` file with React Router navigation. This approach is ideal for quickly building functional applications without complex file organization.

**Perfect for:**
- Component showcases and demos
- Rapid prototyping
- Small marketing sites
- Learning React Router
- Applications that prioritize simplicity over scalability

## ⚡ 30-Second Setup

### Step 1: Create SPA Project
```bash
npx uikit create my-spa-app --spa --theme studio
cd my-spa-app && npm run dev
```

This creates a complete SPA with:
- ✅ Single-file architecture (everything in App.tsx)
- ✅ React Router with ScrollToTop functionality
- ✅ UIKit PageLayout with navigation
- ✅ Multiple demo pages (Home, Components, Themes, Docs)
- ✅ Theme switching and responsive design

### Step 2: Project Structure
```
src/
├── App.tsx                 # ALL components and pages in one file
├── main.tsx               # Entry point with CSS import
├── index.css              # Tailwind CSS v4+ and UIKit styles
└── (generated files)
```

## 🧭 Single-File Architecture

### Complete App.tsx Structure
The SPA template puts everything in one file for simplicity:

```jsx
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@voilajsx/uikit/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@voilajsx/uikit/card';
import { ThemeProvider, useTheme } from '@voilajsx/uikit/theme-provider';
import { PageLayout } from '@voilajsx/uikit/page';
import type { NavigationItem } from '@voilajsx/uikit';
import { Home, Layout, Palette, BookOpen } from 'lucide-react';

// ScrollToTop component - automatically scrolls to top on route change
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Page Components - all defined in same file
const HomePage: React.FC = () => {
  const { theme } = useTheme();
  // ... page content
};

const ComponentsPage: React.FC = () => {
  // ... component showcase
};

const ThemesPage: React.FC = () => {
  // ... theme switching demo
};

const DocsPage: React.FC = () => {
  // ... documentation content
};

// Main App function
function App() {
  return (
    <ThemeProvider theme="studio" mode="light">
      <Router>
        <SPAContent />
      </Router>
    </ThemeProvider>
  );
}
```

### Navigation & Layout with PageLayout
The SPA template uses UIKit's PageLayout component for consistent navigation:

```jsx
// Navigation configuration
const navigationItems: NavigationItem[] = [
  { key: 'home', label: 'Home', href: '/', icon: Home },
  { key: 'components', label: 'Components', href: '/components', icon: Layout },
  { key: 'themes', label: 'Themes', href: '/themes', icon: Palette },
  { key: 'docs', label: 'Docs', href: '/docs', icon: BookOpen },
];

// Theme switching component
const ThemeActions: React.FC = () => {
  const { theme, mode, setTheme, availableThemes, toggleMode } = useTheme();

  return (
    <div className="flex items-center gap-3">
      <select
        value={theme}
        onChange={(e) => setTheme(e.target.value as any)}
        className="bg-background border border-input rounded px-3 py-2 text-sm"
      >
        {availableThemes.map(themeId => (
          <option key={themeId} value={themeId}>
            {themeId.charAt(0).toUpperCase() + themeId.slice(1)}
          </option>
        ))}
      </select>

      <Button onClick={toggleMode} variant="outline" size="sm">
        {mode === 'dark' ? '☀️' : '🌙'}
      </Button>
    </div>
  );
};

// Main content wrapper
const SPAContent: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (href: string, item: NavigationItem) => {
    navigate(href);
  };

  return (
    <PageLayout scheme="default" tone="subtle" size="xl">
      <ScrollToTop />
      <PageLayout.Header
        navigation={navigationItems}
        currentPath={location.pathname}
        onNavigate={handleNavigation}
        logo={<Logo />}
        actions={<ThemeActions />}
        position="sticky"
      />

      <PageLayout.Content>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/components" element={<ComponentsPage />} />
          <Route path="/themes" element={<ThemesPage />} />
          <Route path="/docs" element={<DocsPage />} />
        </Routes>
      </PageLayout.Content>

      <PageLayout.Footer
        copyright="@voilajsx/uikit SPA Template • React Router Navigation"
      />
    </PageLayout>
  );
};
```

## 📄 Single-File Page Examples

### HomePage Component (inside App.tsx)
```jsx
const HomePage: React.FC = () => {
  const { theme } = useTheme();

  const themeDescriptions = {
    base: 'Clean default configuration showcasing the base system',
    elegant: 'Fresh sky blue theme with clean design',
    metro: 'Dark teal theme with bright yellow accents',
    studio: 'Sophisticated neutral theme with golden accents',
    vivid: 'Premium cursive theme with sophisticated typography'
  };

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-b from-background to-muted/20 rounded-lg">
        <div className="space-y-6">
          <h1 className="voila-heading text-4xl md:text-6xl mb-6 text-accent">
            Beautiful UI Components
          </h1>
          <p className="voila-subheading text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Professional React components with stunning themes, powered by OKLCH color science
          </p>
          <div className="inline-flex items-center gap-3 text-sm text-muted-foreground bg-muted/50 backdrop-blur px-6 py-3 rounded-full border">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            {themeDescriptions[theme as keyof typeof themeDescriptions]}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button size="lg" asChild>
              <Link to="/components">Explore Components</Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link to="/themes">Browse Themes</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features showcase */}
      <section className="space-y-6">
        <div className="text-center">
          <h2 className="voila-heading text-3xl mb-4">What's Included</h2>
          <p className="text-lg text-muted-foreground">Everything you need for modern React development</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Feature cards showcasing UIKit capabilities */}
        </div>
      </section>
    </div>
  );
};
```

### ComponentsPage Component (inside App.tsx)
```jsx
const ComponentsPage: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="voila-heading text-4xl">Component Library</h1>
        <p className="voila-subheading text-muted-foreground max-w-3xl mx-auto">
          Explore our comprehensive collection of production-ready React components
        </p>
      </div>

      {/* Component showcase with live examples */}
      <div className="space-y-8">
        {/* Buttons Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary/10 rounded flex items-center justify-center">
                🔘
              </div>
              Buttons
            </CardTitle>
            <CardDescription>Interactive elements with multiple variants and sizes</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-wrap gap-3">
              <Button size="lg">Primary</Button>
              <Button variant="secondary" size="lg">Secondary</Button>
              <Button variant="outline" size="lg">Outline</Button>
              <Button variant="ghost" size="lg">Ghost</Button>
            </div>
          </CardContent>
        </Card>

        {/* Additional component demos */}
      </div>
    </div>
  );
};
```

## 🔧 Key Features of SPA Template

### 1. **ScrollToTop Functionality**
Automatically scrolls to top when navigating between pages:

```jsx
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
```

### 2. **Tailwind CSS v4+ Integration**
The `main.tsx` imports a modern CSS setup:

```jsx
// main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // ← Tailwind v4+ and UIKit styles
import App from './App';
```

### 3. **Theme Switching Built-in**
Live theme switching with all 5 UIKit themes:

```jsx
const ThemeActions: React.FC = () => {
  const { theme, mode, setTheme, toggleMode } = useTheme();
  // Theme selector dropdown and light/dark toggle
};
```

### 4. **Responsive Navigation**
Uses UIKit's PageLayout for consistent navigation across all screen sizes with sticky header positioning.

## 🎨 Customizing Your SPA

### Adding New Pages
To add new pages to your SPA, simply:

1. **Define a new component** in App.tsx:
```jsx
const ServicesPage: React.FC = () => {
  return (
    <div className="space-y-8">
      <h1 className="voila-heading text-4xl">Our Services</h1>
      {/* Your page content */}
    </div>
  );
};
```

2. **Add to navigation items**:
```jsx
const navigationItems: NavigationItem[] = [
  // ... existing items
  { key: 'services', label: 'Services', href: '/services', icon: Briefcase },
];
```

3. **Add to Routes**:
```jsx
<Routes>
  {/* ... existing routes */}
  <Route path="/services" element={<ServicesPage />} />
</Routes>
```

### Modifying Themes
Switch themes by changing the ThemeProvider:

```jsx
// Change from 'studio' to any available theme
<ThemeProvider theme="elegant" mode="light">
```

Available themes: `base` | `elegant` | `metro` | `studio` | `vivid`

## ✅ SPA Best Practices

### Single-File Organization
- ✅ **Keep components together** - Easy to see entire app structure
- ✅ **Use clear component names** - HomePage, ComponentsPage, etc.
- ✅ **Group related functionality** - Theme switching, navigation config
- ✅ **Add comments** - Separate sections with clear comments

### When to Use SPA Template
- ✅ **Component demos** - Showcasing UIKit components
- ✅ **Rapid prototyping** - Quick proof of concepts
- ✅ **Small websites** - Marketing sites, portfolios
- ✅ **Learning projects** - Understanding React Router basics

### When to Move to Multi Template
- ❌ **Team development** - Multiple developers working on pages
- ❌ **Large applications** - More than 5-6 pages
- ❌ **Complex features** - User authentication, data management
- ❌ **Scalability needs** - App expected to grow significantly

## 🚀 Next Steps

When your SPA outgrows the single-file approach:

1. **Multi Template** - Organized page structure with separate files
2. **FBCA Template** - Feature-based architecture for complex apps
3. **Add state management** - Context API, Zustand, or Redux
4. **Implement authentication** - Protected routes and user management

## 📚 Resources

- [React Router Documentation](https://reactrouter.com/) - Official routing guide
- [Multi Template Guide](quick-start-multi.md) - When you need organized files
- [FBCA Template Guide](../fbca/docs/quick-start-fbca.md) - Advanced architecture
- [UIKit Components](../uikit-dev-guide.md) - Complete component reference

---

**Built with @voilajsx/uikit** ✨