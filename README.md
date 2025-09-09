# @voilajsx/uikit - Voila JSX UI Kit

A comprehensive React UI component library with **enhanced theming system** featuring zero-touch CSS hijacking, automatic gradients, design tokens, and professional theme presets. Built on top of Shadcn/ui and Radix UI primitives with complete theme transformation capabilities.

## 🚀 Quick Start

Get your project up and running with `@voilajsx/uikit` in no time!

### 📦 Installation

To add `@voilajsx/uikit` to your project, use npm or yarn:

```bash
npm install @voilajsx/uikit lucide-react # lucide-react for icons
# or
yarn add @voilajsx/uikit lucide-react
```



### 💡 Core Setup & Usage

Every project using `@voilajsx/uikit` needs to be wrapped with the `ThemeProvider` and import the global styles.

1.  **Wrap your application** with `ThemeProvider` in your root file (e.g., `src/App.jsx` or `src/main.jsx`):

    ```jsx
    // src/App.jsx (or similar)
    import { ThemeProvider } from '@voilajsx/uikit/theme-provider';
    import '@voilajsx/uikit/styles'; // Import global styles

    function App() {
      return (
        <ThemeProvider theme="default" mode="light">
          {/* Your main application content goes here */}
          <div className="min-h-screen bg-background text-foreground p-8">
            {/* Example: A simple button */}
            <h1 className="text-3xl font-bold mb-4">Hello Voila UI Kit!</h1>
            {/* More components will go here */}
          </div>
        </ThemeProvider>
      );
    }

    export default App;
    ```

2.  **Use Components**: Import individual components from their respective paths.

    ```jsx
    // src/components/MyComponent.jsx
    import { Button } from '@voilajsx/uikit/button';
    import { Card, CardContent } from '@voilajsx/uikit/card';

    function MyComponent() {
      return (
        <Card className="bg-card text-card-foreground p-4">
          <CardContent>
            <p>This is a Card!</p>
            <Button className="mt-4">Click Me</Button>
          </CardContent>
        </Card>
      );
    }

    export default MyComponent;
    ```

### ✨ Key Principles

- **Semantic Colors**: **NEVER** use hardcoded colors (e.g., `bg-white`, `text-blue-500`). **ALWAYS** use our semantic color variables (e.g., `bg-background`, `text-foreground`, `bg-primary`, `text-muted-foreground`) to ensure full theme compatibility.
- **Layouts First**: Start by choosing the right layout component (`AdminLayout`, `PageLayout`, `AuthLayout`, `BlankLayout`, `PopupLayout`) for your application's pattern.
- **Zero-Touch Enhancement**: Standard shadcn components are automatically enhanced with gradients, custom fonts, and design tokens without changing your code.

## 🎨 Enhanced Theming System

Our **zero-touch theming system** transforms standard shadcn components with advanced design capabilities:

### ✨ Automatic Enhancement Features
- **Gradient Transformation**: `bg-primary` automatically becomes beautiful gradients
- **Design Tokens**: Each theme includes custom fonts, spacing, shadows, and radius
- **CSS Layer Hijacking**: Components enhance without code changes
- **Professional Themes**: 5 complete design systems (Aurora, Neon, Ruby, Studio, Metro)

### 🚀 Theme Bundler CLI

Generate optimized theme CSS for your projects:

```bash
# Bundle themes from your project's theme directory
npx voila-bundle

# Watch mode for development
npx voila-bundle --watch

# Custom output location  
npx voila-bundle --output=src/styles/themes.css
```

**Supported Theme Directories:**
- `src/themes/presets/`
- `src/web/assets/themes/presets/` 
- `themes/presets/`

### 🎯 Theme Switching

```jsx
import { useTheme } from '@voilajsx/uikit';

function ThemeControls() {
  const { theme, setTheme, mode, setMode } = useTheme();
  
  return (
    <div>
      <button onClick={() => setTheme('aurora')}>Aurora Theme</button>
      <button onClick={() => setTheme('neon')}>Neon Theme</button>
      <button onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}>
        Toggle {mode === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </div>
  );
}
```

### 🎨 Custom Theme Creation

Create custom themes with enhanced design tokens:

```js
// src/themes/presets/my-theme.js
export const myTheme = {
  id: 'my-theme',
  name: 'My Theme',
  description: 'Custom theme description',
  
  // Enhanced design tokens
  design: {
    fontPrimary: "'Inter', system-ui, sans-serif",
    fontDisplay: "'Cal Sans', 'Inter', sans-serif", 
    radiusEnhance: '1rem',
    spacingEnhance: '1.2',
    shadowEnhance: '0 8px 24px rgb(0 0 0 / 0.12)',
    gradientPrimary: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },
  
  light: {
    background: 'oklch(98% 0.01 240)',
    foreground: 'oklch(15% 0.01 240)',
    primary: 'oklch(60% 0.15 240)',
    // ... more OKLCH colors
  },
  
  dark: {
    background: 'oklch(12% 0.01 240)',
    foreground: 'oklch(92% 0.01 240)',
    // ... dark variant colors
  }
};

export default myTheme;
```

Then bundle with: `npx voila-bundle`

## 📚 Documentation

For detailed usage, available components, design guidelines, and LLM code generation rules, please refer to the comprehensive [LLM Code Generation Guide v1.0](./UIKIT_LLM_GUIDE.md).

## 📄 License

This project is licensed under the MIT License.



