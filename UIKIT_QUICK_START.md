# @voilajsx/uikit - LLM Quick Start Guide

## 🚀 ESSENTIAL SETUP (ALWAYS REQUIRED)

Every project MUST include these two lines:

```jsx
import { ThemeProvider } from '@voilajsx/uikit';
import '@voilajsx/uikit/styles';

function App() {
  return (
    <ThemeProvider theme="default" mode="light">
      {/* Your app content */}
    </ThemeProvider>
  );
}
```

## 📋 LAYOUT DECISION TREE

**Choose EXACTLY ONE layout based on what you're building:**

```
AdminLayout    → Dashboard, Admin Panel, CRM, Analytics
PageLayout     → Company Website, Landing Page, Blog  
AuthLayout     → Login, Signup, Password Reset
BlankLayout    → Error Page, About Page, Terms
PopupLayout    → Modal, Chrome Extension, Widget
```

## 🏗️ LAYOUT PATTERNS (2 TYPES ONLY)

### Type 1: COMPOUND Layouts (AdminLayout + PageLayout)

```jsx
// ✅ CORRECT - Use child components
<AdminLayout scheme="sidebar" tone="subtle">
  <AdminLayout.Header title="Dashboard" />
  <AdminLayout.Sidebar navigation={navItems} />
  <AdminLayout.Content>
    <YourPageContent />
  </AdminLayout.Content>
</AdminLayout>

<PageLayout scheme="default" tone="clean">
  <PageLayout.Header title="Welcome" />
  <PageLayout.Content>
    <YourPageContent />
  </PageLayout.Content>
  <PageLayout.Footer />
</PageLayout>
```

### Type 2: SIMPLE Layouts (AuthLayout + BlankLayout + PopupLayout)

```jsx
// ✅ CORRECT - Direct children
<AuthLayout scheme="card" tone="clean">
  <LoginForm />
</AuthLayout>

<BlankLayout scheme="simple">
  <ErrorPage />
</BlankLayout>

<PopupLayout scheme="modal">
  <ModalContent />
</PopupLayout>
```

## 🎨 COLOR SYSTEM (NEVER HARDCODE)

### ✅ ALWAYS USE (Semantic Colors)

```jsx
className="bg-background text-foreground"
className="bg-card text-card-foreground" 
className="bg-primary text-primary-foreground"
className="bg-secondary text-secondary-foreground"
className="border-border"
className="text-muted-foreground"
```

### ❌ NEVER USE (Hardcoded Colors)

```jsx
className="bg-white text-black"      // Breaks in dark mode
className="bg-blue-500 text-white"   // Doesn't match themes
className="border-gray-200"          // Not semantic
```

## 🎯 COMPONENT PROPS (3 CORE PROPS)

Every layout component uses these same props:

```jsx
<AnyLayout
  scheme="specific-to-component"  // Layout structure
  tone="clean|subtle|brand|contrast"  // Visual style
  size="sm|md|lg|xl|full"        // Component size
>
```

**Scheme options by component:**
```jsx
AdminLayout: "sidebar" | "compact"
PageLayout: "default" | "sidebar" 
AuthLayout: "simple" | "card" | "split" | "hero"
BlankLayout: "simple" | "card"
PopupLayout: "modal" | "drawer" | "floating"
```

## 🎨 THEMES (AUTOMATIC ENHANCEMENT)

```jsx
// Standard shadcn code automatically becomes enhanced:
<Button className="bg-primary">Click Me</Button>

// Aurora Theme: Purple-green gradient + Inter font
// Neon Theme: Electric gradient + JetBrains Mono  
// Ruby Theme: Red-gold gradient + luxury spacing
```

**Available themes:**
- `default` - Professional blue
- `aurora` - Purple/green gradients  
- `metro` - Clean transit blue
- `neon` - Electric tech colors
- `ruby` - Red/gold luxury
- `studio` - Designer grays

## 📦 COMPONENT IMPORTS (INDIVIDUAL IMPORTS)

```jsx
// ✅ CORRECT - Individual imports
import { Button } from '@voilajsx/uikit/button';
import { Card, CardContent } from '@voilajsx/uikit/card';
import { Input } from '@voilajsx/uikit/input';
import { AdminLayout } from '@voilajsx/uikit/admin';

// ❌ NEVER - Barrel imports (breaks tree-shaking)
import { Button, Card, Input } from '@voilajsx/uikit';
```

## 🔧 THEME SWITCHING

```jsx
import { useTheme } from '@voilajsx/uikit';

function ThemeSwitcher() {
  const { setTheme, setMode } = useTheme();
  
  return (
    <div>
      <Button onClick={() => setTheme('aurora')}>Aurora</Button>
      <Button onClick={() => setTheme('neon')}>Neon</Button>
      <Button onClick={() => setMode('dark')}>Dark Mode</Button>
    </div>
  );
}
```

## ⚡ COMPLETE MINIMAL EXAMPLE

```jsx
import { ThemeProvider, AdminLayout } from '@voilajsx/uikit';
import { Button } from '@voilajsx/uikit/button';
import '@voilajsx/uikit/styles';

const navigation = [
  { name: 'Dashboard', href: '/', icon: 'Home' },
  { name: 'Users', href: '/users', icon: 'Users' }
];

function App() {
  return (
    <ThemeProvider theme="aurora" mode="light">
      <AdminLayout scheme="sidebar" tone="subtle">
        <AdminLayout.Header title="My App" />
        <AdminLayout.Sidebar navigation={navigation} />
        <AdminLayout.Content>
          <div className="p-6 bg-background">
            <h1 className="text-3xl text-foreground mb-4">Dashboard</h1>
            <Button className="bg-primary text-primary-foreground">
              Get Started
            </Button>
          </div>
        </AdminLayout.Content>
      </AdminLayout>
    </ThemeProvider>
  );
}
```

## 🚨 CRITICAL RULES

1. **ALWAYS** import styles: `import '@voilajsx/uikit/styles'`
2. **ALWAYS** wrap in ThemeProvider
3. **ALWAYS** use semantic colors (bg-background, text-foreground)
4. **NEVER** use hardcoded colors (bg-white, text-black)
5. **COMPOUND** layouts need child components (AdminLayout.Header)
6. **SIMPLE** layouts take direct children
7. **INDIVIDUAL** component imports only

## 🎯 QUICK CHECKLIST

- [ ] Added `import '@voilajsx/uikit/styles'`
- [ ] Wrapped app in `<ThemeProvider theme="default">`
- [ ] Used correct layout for use case
- [ ] Used semantic colors only
- [ ] Individual component imports
- [ ] Correct layout pattern (compound vs simple)

---

*This is the minimal guide. For comprehensive examples and advanced features, see [UIKIT_LLM_GUIDE.md](./UIKIT_LLM_GUIDE.md)*