# @voilajsx/uikit - Voila JSX UI Kit

A comprehensive and themeable React UI component library designed for consistent, modern web development, built on top of Shadcn/ui and Radix UI primitives.

## 🚀 Quick Start

Get your project up and running with `@voilajsx/uikit` in no time!

### 📦 Installation

To add `@voilajsx/uikit` to your project, use npm or yarn:

```bash
npm install @voilajsx/uikit lucide-react # lucide-react for icons
# or
yarn add @voilajsx/uikit lucide-react
```

````

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
- **Theming**: Easily switch between various professional themes (`default`, `aurora`, `metro`, `neon`, `ruby`, `studio`) and light/dark modes using the `ThemeProvider`.

## 📚 Documentation

For detailed usage, available components, design guidelines, and LLM code generation rules, please refer to the comprehensive [LLM Code Generation Guide v1.0](LINK_TO_FULL_GUIDE_HERE).

## 📄 License

This project is licensed under the MIT License.


````
