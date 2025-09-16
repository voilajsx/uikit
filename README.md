# @voilajsx/uikit

**React UI framework that gets out of your way.** Build beautiful applications with 37 components, 5 layouts, and 5 themes. Zero configuration, zero complexity.

```bash
npx uikit create myapp --spa --theme elegant
cd myapp && npm run dev
```

## What You Get

🎨 **5 Professional Themes** - From minimal to luxury, pick your style  
🏗️ **5 Layout Systems** - Admin, Auth, Page, Popup, Blank  
🧩 **37 UI Components** - Forms, tables, navigation, overlays  
⚡ **Instant Setup** - From idea to running app in 30 seconds  
🎯 **Developer First** - TypeScript, hot reload, minimal API

Built on Tailwind CSS + Radix UI with OKLCH color science for perfect accessibility.

## Quick Start

```bash
# Create your app (no installation needed)
npx uikit create myapp --multi --theme elegant
cd myapp && npm run dev
```

**Done.** Your app is running with routing, layouts, and the elegant theme.

## Framework Overview

**@voilajsx/uikit** is a complete React framework with three main parts:

### 1. Components (37 total)
```jsx
import { Button, Card, DataTable, AdminLayout } from '@voilajsx/uikit';

function Dashboard() {
  return (
    <AdminLayout>
      <Card>
        <Button>Click me</Button>
        <DataTable data={users} />
      </Card>
    </AdminLayout>
  );
}
```

### 2. Layouts (5 types)
```jsx
<AdminLayout>     {/* Sidebar + header for dashboards */}
<AuthLayout>      {/* Login/signup forms */}
<PageLayout>      {/* Marketing pages with header/footer */}
<PopupLayout>     {/* Browser extensions */}
<BlankLayout>     {/* Clean pages */}
```

### 3. Themes (5 presets)
```jsx
<ThemeProvider theme="elegant" mode="dark">
  <App />
</ThemeProvider>
```

**Themes:** `base` • `elegant` • `metro` • `studio` • `vivid`

## Project Types

Choose your app structure:

```bash
# Theme showcase (37 components demo)
npx uikit create myapp

# Single-page app with routing
npx uikit create myapp --spa --theme metro

# Multi-page app with layouts
npx uikit create myapp --multi --theme vivid

# Feature-based component architecture
npx uikit create myapp --fbca --theme elegant
```

## FBCA Architecture

**Feature-Based Component Architecture (FBCA)** organizes code by business features instead of technical layers, making large applications easier to maintain and scale.

### Key Features
- **Auto-discovery routing** - Routes are automatically generated from your file structure
- **Feature isolation** - Each feature has its own components, pages, and logic
- **Convention over configuration** - Minimal setup, maximum productivity
- **SEO-friendly** - Built-in SEO management with custom hooks
- **Modern React** - Uses React Router, lazy loading, and Suspense

### File Structure
```
src/
├── features/
│   ├── auth/
│   │   └── pages/
│   │       ├── login.tsx         # /auth/login
│   │       └── signup.tsx        # /auth/signup
│   ├── gallery/
│   │   └── pages/
│   │       ├── root.tsx          # /gallery
│   │       └── [animal].tsx      # /gallery/:animal
│   └── main/
│       └── pages/
│           └── root.tsx          # / (home page)
├── shared/
│   ├── components/               # Reusable components
│   └── hooks/                    # Custom hooks (SEO, etc.)
└── lib/
    └── page-router.tsx           # Auto-discovery router
```

### Routing Convention
- `root.tsx` → Root path of the feature
- `[param].tsx` → Dynamic parameter routes
- Nested folders → Nested routes
- Feature name → URL prefix (except `main` which maps to `/`)

## Development Commands

```bash
npx uikit serve     # Start dev server
npx uikit build     # Production build
npx uikit bundle    # Rebuild themes
npx uikit deploy    # Static site deploy
npx uikit deploy --github  # Deploy to GitHub Pages
```

## Code Generation

**Generate complete features** (recommended for FBCA projects):
```bash
npx uikit generate feature blog
# Creates: hooks/useBlog.ts + components/Blog.tsx + pages/root.tsx
```

**Generate individual elements:**
```bash
# Pages (auto-routed)
npx uikit generate page dashboard     # → /dashboard
npx uikit generate page blog/new      # → /blog/new

# Components (shared vs feature-specific)
npx uikit generate component button   # → shared/components/
npx uikit generate component blog/card # → blog/components/

# Hooks (shared vs feature-specific)
npx uikit generate hook auth          # → shared/hooks/
npx uikit generate hook blog/posts    # → blog/hooks/
```

## Theme System

**5 professional themes** that work in light and dark mode:

- **`base`** - Clean metallic black, System UI fonts
- **`elegant`** - Professional blue, Montserrat fonts  
- **`metro`** - Modern green, clean typography
- **`studio`** - Bold black/orange, artistic fonts
- **`vivid`** - Luxury purple/orange, serif fonts

### Basic Usage
```jsx
import { ThemeProvider, useTheme } from '@voilajsx/uikit';

function App() {
  return (
    <ThemeProvider theme="elegant" mode="dark">
      <MyApp />
    </ThemeProvider>
  );
}

function ThemeSwitcher() {
  const { theme, setTheme, toggleMode } = useTheme();
  return (
    <div>
      <select onChange={(e) => setTheme(e.target.value)}>
        <option value="base">Base</option>
        <option value="elegant">Elegant</option>
        <option value="metro">Metro</option>
        <option value="studio">Studio</option>
        <option value="vivid">Vivid</option>
      </select>
      <button onClick={toggleMode}>Toggle Dark Mode</button>
    </div>
  );
}
```

### Custom Themes
```javascript
// src/themes/presets/my-theme.js
export default {
  id: 'my-theme',
  name: 'My Custom Theme',
  light: {
    background: '#FFFFFF',
    foreground: '#111111',
    primary: '#3B82F6',
    // ... more colors
  },
  dark: {
    background: '#111111',
    foreground: '#FFFFFF',
    primary: '#60A5FA',
    // ... more colors
  }
};
```

```bash
npx uikit bundle  # Rebuild CSS
```

## Component Examples

### Forms & Inputs
```jsx
import { Button, Input, Label, Card, Form } from '@voilajsx/uikit';

function LoginForm() {
  return (
    <Card>
      <Form>
        <Label>Email</Label>
        <Input type="email" />
        <Button>Sign In</Button>
      </Form>
    </Card>
  );
}
```

### Data Tables
```jsx
import { DataTable } from '@voilajsx/uikit';

function UserList() {
  return (
    <DataTable 
      data={users}
      columns={[
        { key: 'name', label: 'Name' },
        { key: 'email', label: 'Email' },
        { key: 'role', label: 'Role' }
      ]}
    />
  );
}
```

### Layout Examples
```jsx
// Admin dashboard
<AdminLayout>
  <AdminLayout.Sidebar navigation={nav} />
  <AdminLayout.Header title="Dashboard" />
  <AdminLayout.Content>
    <DataTable data={users} />
  </AdminLayout.Content>
</AdminLayout>

// Auth pages  
<AuthLayout scheme="hero" imageUrl="/hero.jpg">
  <LoginForm />
</AuthLayout>

// Marketing pages
<PageLayout>
  <PageLayout.Header logo="MyApp" navigation={nav} />
  <PageLayout.Content>
    <Hero />
  </PageLayout.Content>
  <PageLayout.Footer />
</PageLayout>
```

## Key Concepts

**Semantic Colors** - Use `bg-primary`, `text-foreground`, `bg-background` for theme compatibility  
**TypeScript First** - Full type safety with IntelliSense  
**Zero Config** - Works out of the box, customize when needed  
**Accessible** - Built on Radix UI primitives

## Installation

Only when using in existing projects:

```bash
npm install @voilajsx/uikit react react-dom
```

## Resources

- [Documentation](https://voilajsx.github.io/uikit)
- [GitHub Repository](https://github.com/voilajsx/uikit)
- [LLM Usage Guide](https://github.com/voilajsx/uikit/blob/main/docs/UIKIT_LLM_GUIDE.md)

---

**Built with @voilajsx/uikit** ✨