# @voilajsx/uikit

A cross-platform React component library with beautiful themes and OKLCH color science.

[![npm version](https://badge.fury.io/js/@voilajsx%2Fuikit.svg)](https://www.npmjs.com/package/@voilajsx/uikit)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## ✨ Features

- 🌐 **Cross-Platform** - Works seamlessly on Web, React Native, Tauri, and Expo
- 🎨 **OKLCH Color Science** - Future-proof colors with better perceptual uniformity
- 🔄 **shadcn/ui Compatible** - Zero learning curve, familiar API and patterns
- 🎯 **Direct Imports** - Perfect tree-shaking with `@voilajsx/uikit/button`
- 🌙 **Built-in Theming** - Beautiful presets with light/dark mode support
- ⚡ **Modern Tooling** - Vite + Tailwind CSS v4 + TypeScript ready

## 🚀 Quick Start

### Installation

```bash
npm install @voilajsx/uikit
```

### Basic Usage

```jsx
import { Button } from '@voilajsx/uikit/button';
import { ThemeProvider } from '@voilajsx/uikit/theme-provider';
import '@voilajsx/uikit/styles';

function App() {
  return (
    <ThemeProvider theme="ocean" variant="light">
      <Button variant="default" size="lg">
        Get Started
      </Button>
    </ThemeProvider>
  );
}
```

## 🎨 Built-in Themes

Choose from beautiful, professionally designed themes:

```jsx
<ThemeProvider theme="default">   {/* Classic shadcn theme */}
<ThemeProvider theme="ocean">     {/* Deep blue ocean vibes */}
<ThemeProvider theme="forest">    {/* Natural green tones */}
<ThemeProvider theme="sunset">    {/* Warm orange/pink gradients */}
```

### Theme Switching

```jsx
import { useTheme } from '@voilajsx/uikit/theme-provider';

function ThemeSelector() {
  const { theme, variant, setTheme, toggleVariant } = useTheme();

  return (
    <div>
      <Button onClick={() => setTheme('ocean')}>Ocean Theme</Button>
      <Button onClick={toggleVariant}>
        {variant === 'light' ? '🌙' : '☀️'}
      </Button>
    </div>
  );
}
```

## 📦 Available Components

### Core Components

```jsx
import { Button } from '@voilajsx/uikit/button';
import { Input } from '@voilajsx/uikit/input';
import { Badge } from '@voilajsx/uikit/badge';
import { Card, CardHeader, CardTitle, CardContent } from '@voilajsx/uikit/card';
```

### Form Components

```jsx
import { Checkbox } from '@voilajsx/uikit/checkbox';
import { Switch } from '@voilajsx/uikit/switch';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from '@voilajsx/uikit/select';
import { Slider } from '@voilajsx/uikit/slider';
import { Textarea } from '@voilajsx/uikit/textarea';
```

### Layout Components

```jsx
import { Container } from '@voilajsx/uikit/container';
import { Header } from '@voilajsx/uikit/header';
import { Footer } from '@voilajsx/uikit/footer';
import { Sidebar } from '@voilajsx/uikit/sidebar';
```

### Navigation & Overlays

```jsx
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@voilajsx/uikit/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@voilajsx/uikit/tabs';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@voilajsx/uikit/accordion';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@voilajsx/uikit/sheet';
```

[See all components →](https://voilajsx.github.io/uikit)

## 🎯 Cross-Platform Usage

### Web (React)

```jsx
import { Button } from '@voilajsx/uikit/button';
// Works with standard DOM
```

### React Native / Expo

```jsx
import { Button } from '@voilajsx/uikit/button';
import { useAdapter } from '@voilajsx/uikit/adapters/hooks';

// Automatically adapts to native components
```

### Tauri (Desktop)

```jsx
import { Button } from '@voilajsx/uikit/button';
// Works in Tauri webview with desktop styling
```

## 🛠️ Custom Themes

Create your own themes with OKLCH colors:

```jsx
const customTheme = {
  name: 'Corporate',
  id: 'corporate',
  light: {
    background: 'oklch(1 0 0)',
    foreground: 'oklch(0.2 0.02 250)',
    primary: 'oklch(0.5 0.2 250)',
    primaryForeground: 'oklch(1 0 0)',
    // ... other colors
  },
  dark: {
    background: 'oklch(0.1 0.02 250)',
    foreground: 'oklch(0.98 0.02 250)',
    primary: 'oklch(0.6 0.25 250)',
    primaryForeground: 'oklch(0.1 0.02 250)',
    // ... other colors
  }
}

<ThemeProvider theme={customTheme}>
  <App />
</ThemeProvider>
```

## 🔧 Advanced Usage

### With Forms

```jsx
import { useForm } from 'react-hook-form';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
} from '@voilajsx/uikit/form';
import { Input } from '@voilajsx/uikit/input';
import { Button } from '@voilajsx/uikit/button';

function ContactForm() {
  const form = useForm();

  return (
    <Form {...form}>
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input placeholder="Enter your email" {...field} />
            </FormControl>
          </FormItem>
        )}
      />
      <Button type="submit">Submit</Button>
    </Form>
  );
}
```

### With Tailwind CSS v4

If using Tailwind CSS v4 in your project, add our components to your CSS:

```css
@import 'tailwindcss';
@source "../node_modules/@voilajsx/uikit/src";

@theme {
  /* Your custom theme variables */
}
```

## 🎨 Why OKLCH Colors?

OKLCH provides superior color science compared to HSL/RGB:

- **Perceptual uniformity** - Colors look consistent across devices
- **Better gradients** - Smoother color transitions
- **Future-proof** - Part of CSS Color Module Level 4
- **Accessibility** - More predictable contrast ratios

## 📱 Platform Support

| Platform         | Status          | Notes                         |
| ---------------- | --------------- | ----------------------------- |
| **Web**          | ✅ Full Support | Chrome, Firefox, Safari, Edge |
| **React Native** | ✅ Full Support | iOS, Android via adapters     |
| **Expo**         | ✅ Full Support | Universal apps                |
| **Tauri**        | ✅ Full Support | Desktop apps                  |
| **Next.js**      | ✅ Full Support | SSR compatible                |
| **Vite**         | ✅ Full Support | Optimized builds              |

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Setup

```bash
# Clone repository
git clone https://github.com/voilajsx/uikit.git
cd uikit

# Install dependencies
npm install

# Start development
npm run dev

# Build library
npm run build

# Run documentation site
cd docs
npm install
npm run dev
```

## 📄 License

MIT © [VoilaJSX](https://github.com/voilajsx)

## 🔗 Links

- 📚 [Documentation](https://voilajsx.github.io/uikit)
- 🎮 [Interactive Examples](https://voilajsx.github.io/uikit)
- 🐛 [Report Issues](https://github.com/voilajsx/uikit/issues)
- 💬 [Discussions](https://github.com/voilajsx/uikit/discussions)
- 📦 [NPM Package](https://www.npmjs.com/package/@voilajsx/uikit)

---

<div align="center">
  <strong>Built with ❤️ for the React ecosystem</strong>
</div>
