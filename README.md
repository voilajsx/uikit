# @voilajsx/uikit

Cross-platform React components with themes. Built with Tailwind CSS v4 and compatible with v0.dev.

## Installation

```bash
npm install @voilajsx/uikit
```

## Quick Start

```jsx
import { Button, Card, CardContent } from '@voilajsx/uikit';
import { ThemeProvider } from '@voilajsx/uikit';
import '@voilajsx/uikit/styles';

function App() {
  return (
    <ThemeProvider>
      <Card>
        <CardContent>
          <Button>Click me</Button>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
}
```

## Features

- **Zero configuration** - Works immediately after installation
- **v0.dev compatible** - Copy-paste works without changes
- **Cross-platform** - Same code works on web/desktop/mobile
- **Ultra-minimal** - Only essential components included
- **Simple imports** - Clear, predictable import structure
- **Flexible themes** - Multiple built-in themes with light/dark variants

## Theme System

@voilajsx/uikit includes a powerful theme system with:

- Multiple built-in themes (Default, Ocean, Sunset)
- Light and dark variants for each theme
- System preference detection
- Simple theme switching API
- Custom theme support

### Basic Theme Usage

```jsx
import { ThemeProvider, useTheme } from '@voilajsx/uikit';

// Inside your component
function ThemeSwitcher() {
  const { theme, variant, setTheme, setVariant, toggleVariant } = useTheme();

  return (
    <div>
      <button onClick={() => setTheme('ocean')}>Ocean Theme</button>
      <button onClick={toggleVariant}>
        {variant === 'dark' ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  );
}

// In your app
function App() {
  return (
    <ThemeProvider
      defaultTheme="default"
      defaultVariant="light"
      detectSystem={true}
    >
      <YourApp />
    </ThemeProvider>
  );
}
```

### Custom Themes

You can easily create and register custom themes:

```jsx
import { themeRegistry } from '@voilajsx/uikit';

// Define your custom theme
const customTheme = {
  name: 'Custom Theme',

  light: {
    // Light variant variables
    background: '0 0% 100%',
    foreground: '222.2 84% 4.9%',
    // ... other variables
  },

  dark: {
    // Dark variant variables
    background: '222.2 84% 4.9%',
    foreground: '210 40% 98%',
    // ... other variables
  },
};

// Register your theme
themeRegistry.register('custom', customTheme);
```

See the [Theme Guide](./THEME_GUIDE.md) for more details on creating custom themes.

## Components

### Core UI Components

- Button
- Card
- Input
- Badge
- Avatar
- Select (coming soon)
- Table (coming soon)
- Dialog (coming soon)

### Layout Components

- Container
- Header (coming soon)
- Footer (coming soon)
- Sidebar (coming soon)

### Templates

- Default Template (coming soon)
- Auth Template (coming soon)
- Form Template (coming soon)
- Table Template (coming soon)
- Blank Template (coming soon)

## Development

To run the development server:

```bash
npm run dev
```

To build the library:

```bash
npm run build
```

## License

MIT
