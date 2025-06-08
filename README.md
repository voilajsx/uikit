# @voilajsx/uikit

A cross-platform React component library with beautiful themes and OKLCH color science.

[![npm version](https://badge.fury.io/js/@voilajsx%2Fuikit.svg)](https://www.npmjs.com/package/@voilajsx/uikit)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## ✨ Features

- 🌐 **Cross-Platform** - Works seamlessly on Web, React Native, Tauri, and Expo
- 🎨 **OKLCH Color Science** - Future-proof colors with better perceptual uniformity
- 🔄 **shadcn/ui Compatible** - Zero learning curve, familiar API and patterns
- 🎯 **Direct Imports** - Perfect tree-shaking with `@voilajsx/uikit/button`
- 🌙 **Advanced Theming** - Built-in presets + custom theme support with runtime registration
- 📐 **Ready-to-Use Templates** - Complete page layouts for common use cases
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
    <ThemeProvider theme="default" variant="light">
      <Button variant="default" size="lg">
        Get Started
      </Button>
    </ThemeProvider>
  );
}
```

## 🎨 Built-in Themes

Choose from 6 beautiful, professionally designed themes with WCAG AAA accessibility compliance:

```jsx
// Professional & Clean
<ThemeProvider theme="default">   {/* Default theme - Clean system colors */}
<ThemeProvider theme="metro">     {/* Clean transit-inspired systematic design */}
<ThemeProvider theme="studio">    {/* Sophisticated designer grays with strategic accents */}

// Vibrant & Creative
<ThemeProvider theme="ruby">      {/* Premium ruby red with rose pink accents */}
<ThemeProvider theme="neon">      {/* Electric cyberpunk with glowing highlights */}
<ThemeProvider theme="aurora">    {/* Northern lights with purple-green magic */}
```

### Theme Preview

| Theme          | Light Mode               | Dark Mode                      | Perfect For                                     |
| -------------- | ------------------------ | ------------------------------ | ----------------------------------------------- |
| **🎨 Default** | Clean oceanic blues      | Electric blue highlights       | Business apps, dashboards, professional tools   |
| **🚇 Metro**   | Systematic gray-blue     | Clean transit aesthetics       | Admin panels, data applications, systematic UIs |
| **🎨 Studio**  | Designer grays + amber   | Sophisticated creative tones   | Design tools, portfolios, creative applications |
| **💎 Ruby**    | Sophisticated red + rose | Electric red with pink accents | Finance, luxury brands, premium products        |
| **⚡ Neon**    | Electric magenta + cyan  | Bright cyberpunk colors        | Gaming, tech startups, creative tools           |
| **🌌 Aurora**  | Purple-green elegance    | Bright northern lights         | Creative apps, elegant brands, portfolios       |

### Theme Switching

```jsx
import { useTheme } from '@voilajsx/uikit/theme-provider';

function ThemeSelector() {
  const { theme, variant, setTheme, toggleVariant } = useTheme();

  return (
    <div className="flex gap-2">
      <Button onClick={() => setTheme('default')}>Default</Button>
      <Button onClick={() => setTheme('metro')}>Metro</Button>
      <Button onClick={() => setTheme('studio')}>Studio</Button>
      <Button onClick={() => setTheme('ruby')}>Ruby</Button>
      <Button onClick={() => setTheme('neon')}>Neon</Button>
      <Button onClick={() => setTheme('aurora')}>Aurora</Button>
      <Button onClick={toggleVariant}>
        {variant === 'light' ? '🌙' : '☀️'}
      </Button>
    </div>
  );
}
```

## 📐 Ready-to-Use Templates

Get started faster with our pre-built page templates that handle common layout patterns:

### Available Templates

| Template               | Use Case                             | Features                           |
| ---------------------- | ------------------------------------ | ---------------------------------- |
| **🔐 AuthTemplate**    | Login, Register, Password Reset      | Centered layout, responsive cards  |
| **📄 BlankTemplate**   | Landing pages, About, Simple content | Minimal container, flexible sizing |
| **🏠 DefaultTemplate** | Main app layout, Dashboard           | Header + Sidebar + Footer layout   |
| **📝 FormTemplate**    | Settings, Profile, Configuration     | Form-optimized with action buttons |
| **📊 TableTemplate**   | Data management, Admin panels        | Search, filters, action buttons    |

### Template Usage

```jsx
// Authentication pages
import { AuthTemplate } from '@voilajsx/uikit/templates/auth';

<AuthTemplate title="Welcome Back" subtitle="Sign in to continue">
  <LoginForm />
</AuthTemplate>;

// Main application layout
import { DefaultTemplate } from '@voilajsx/uikit/templates/default';

<DefaultTemplate
  headerContent={<NavigationBar />}
  sidebarContent={<SideMenu />}
  footerContent={<AppFooter />}
>
  <DashboardContent />
</DefaultTemplate>;

// Settings and forms
import { FormTemplate } from '@voilajsx/uikit/templates/form';

<FormTemplate
  title="User Settings"
  actions={<SaveCancelButtons />}
  onSubmit={handleSubmit}
>
  <SettingsForm />
</FormTemplate>;

// Data tables and management
import { TableTemplate } from '@voilajsx/uikit/templates/table';

<TableTemplate
  title="Users"
  searchable={true}
  actions={<AddUserButton />}
  filters={<UserFilters />}
>
  <UsersTable />
</TableTemplate>;

// Simple content pages
import { BlankTemplate } from '@voilajsx/uikit/templates/blank';

<BlankTemplate containerProps={{ size: 'lg' }}>
  <AboutPageContent />
</BlankTemplate>;
```

## 🎨 Custom Themes

Create and use custom themes with OKLCH colors for perfect color consistency.

### Creating a Custom Theme

```jsx
// themes/company.js
const companyTheme = {
  name: 'Company Brand',
  id: 'company',

  light: {
    background: 'oklch(0.99 0.005 85)',
    foreground: 'oklch(0.15 0.02 85)',
    primary: 'oklch(0.5 0.2 220)',
    primaryForeground: 'oklch(0.98 0.02 85)',
    secondary: 'oklch(0.92 0.04 85)',
    secondaryForeground: 'oklch(0.25 0.05 85)',
    muted: 'oklch(0.94 0.02 85)',
    mutedForeground: 'oklch(0.45 0.03 85)',
    accent: 'oklch(0.55 0.15 200)',
    accentForeground: 'oklch(0.98 0.02 85)',
    destructive: 'oklch(0.6 0.25 30)',
    destructiveForeground: 'oklch(0.98 0.02 85)',
    border: 'oklch(0.88 0.03 85)',
    input: 'oklch(0.88 0.03 85)',
    ring: 'oklch(0.5 0.2 220)',
  },

  dark: {
    background: 'oklch(0.08 0.02 85)',
    foreground: 'oklch(0.95 0.02 85)',
    primary: 'oklch(0.65 0.25 220)',
    primaryForeground: 'oklch(0.08 0.02 85)',
    secondary: 'oklch(0.18 0.05 85)',
    secondaryForeground: 'oklch(0.95 0.02 85)',
    muted: 'oklch(0.15 0.03 85)',
    mutedForeground: 'oklch(0.7 0.03 85)',
    accent: 'oklch(0.6 0.18 200)',
    accentForeground: 'oklch(0.95 0.02 85)',
    destructive: 'oklch(0.5 0.2 30)',
    destructiveForeground: 'oklch(0.95 0.02 85)',
    border: 'oklch(0.22 0.04 85)',
    input: 'oklch(0.22 0.04 85)',
    ring: 'oklch(0.65 0.25 220)',
  },
};

export default companyTheme;
```

### Using Custom Themes

#### Method 1: Register via Provider (Recommended)

```jsx
import companyTheme from './themes/company.js';

function App() {
  return (
    <ThemeProvider theme="company" customThemes={[companyTheme]}>
      <YourApp />
    </ThemeProvider>
  );
}
```

#### Method 2: Runtime Registration

```jsx
import { useTheme } from '@voilajsx/uikit/theme-provider';
import companyTheme from './themes/company.js';

function ThemeManager() {
  const { setTheme, registerTheme } = useTheme();

  useEffect(() => {
    registerTheme(companyTheme);
  }, []);

  return (
    <Button onClick={() => setTheme('company')}>Switch to Company Theme</Button>
  );
}
```

#### Method 3: Direct Theme Objects

```jsx
import { useTheme } from '@voilajsx/uikit/theme-provider';
import companyTheme from './themes/company.js';

function QuickSwitch() {
  const { setTheme } = useTheme();

  return (
    <Button onClick={() => setTheme(companyTheme)}>
      Company Theme (Auto-registers)
    </Button>
  );
}
```

#### Method 4: Dynamic Themes

```jsx
function DynamicTheme() {
  const { setTheme } = useTheme();

  const createUserTheme = (primaryColor) => ({
    id: 'user-generated',
    name: 'User Theme',
    light: {
      background: 'oklch(1 0 0)',
      foreground: 'oklch(0.15 0.02 0)',
      primary: primaryColor,
      primaryForeground: 'oklch(1 0 0)',
      // ... other colors
    },
    dark: {
      background: 'oklch(0.08 0.02 0)',
      foreground: 'oklch(0.95 0.02 0)',
      primary: primaryColor,
      primaryForeground: 'oklch(0.08 0.02 0)',
      // ... other colors
    },
  });

  return (
    <Button onClick={() => setTheme(createUserTheme('oklch(0.6 0.25 350)'))}>
      Generate Pink Theme
    </Button>
  );
}
```

### Advanced Custom Theme Features

#### Theme Packages

Create distributable theme packages:

```bash
# Create a theme package
npm init @company/brand-theme
```

```jsx
// In your theme package
export const brandTheme = {
  name: 'Brand Theme',
  id: 'brand',
  light: { /* colors */ },
  dark: { /* colors */ }
};

// Usage in apps
import { brandTheme } from '@company/brand-theme';
<ThemeProvider customThemes={[brandTheme]} theme="brand">
```

#### Multi-Brand Applications

```jsx
import { clientA, clientB, clientC } from './themes';

function MultiTenantApp({ clientId }) {
  const themes = {
    'client-a': clientA,
    'client-b': clientB,
    'client-c': clientC,
  };

  return (
    <ThemeProvider theme={clientId} customThemes={Object.values(themes)}>
      <App />
    </ThemeProvider>
  );
}
```

#### Theme Builder Integration

```jsx
function ThemeBuilder() {
  const { setTheme } = useTheme();

  const handleExport = (userDefinedColors) => {
    const customTheme = generateThemeFromColors(userDefinedColors);
    setTheme(customTheme); // Auto-registers and applies
  };

  return <ThemeBuilderUI onExport={handleExport} />;
}
```

## 📦 Complete Component Library

> **Based on shadcn/ui + Tailwind CSS**: All components follow [shadcn/ui](https://ui.shadcn.com/) patterns and [Tailwind CSS](https://tailwindcss.com/) conventions. For detailed API documentation, props, and examples, refer to the [shadcn/ui documentation](https://ui.shadcn.com/docs/components) - our components maintain 100% API compatibility.

### 🧩 Core UI Components

| Component      | Import Path                  | Description                            |
| -------------- | ---------------------------- | -------------------------------------- |
| **Accordion**  | `@voilajsx/uikit/accordion`  | Collapsible content sections           |
| **Alert**      | `@voilajsx/uikit/alert`      | Contextual alert messages              |
| **Avatar**     | `@voilajsx/uikit/avatar`     | User profile images with fallbacks     |
| **Badge**      | `@voilajsx/uikit/badge`      | Small status indicators                |
| **Breadcrumb** | `@voilajsx/uikit/breadcrumb` | Navigation breadcrumbs                 |
| **Button**     | `@voilajsx/uikit/button`     | Interactive buttons with variants      |
| **Card**       | `@voilajsx/uikit/card`       | Content containers with header/footer  |
| **Command**    | `@voilajsx/uikit/command`    | Command palette / search interface     |
| **Data Table** | `@voilajsx/uikit/data-table` | Advanced tables with sorting/filtering |
| **Skeleton**   | `@voilajsx/uikit/skeleton`   | Loading state placeholders             |
| **Separator**  | `@voilajsx/uikit/separator`  | Visual content dividers                |

### 📝 Form Components

| Component       | Import Path                   | Description                            |
| --------------- | ----------------------------- | -------------------------------------- |
| **Checkbox**    | `@voilajsx/uikit/checkbox`    | Boolean input with indeterminate state |
| **Form**        | `@voilajsx/uikit/form`        | React Hook Form integration            |
| **Input**       | `@voilajsx/uikit/input`       | Text input fields                      |
| **Label**       | `@voilajsx/uikit/label`       | Form labels with accessibility         |
| **Radio Group** | `@voilajsx/uikit/radio-group` | Single-choice radio buttons            |
| **Select**      | `@voilajsx/uikit/select`      | Dropdown selection                     |
| **Slider**      | `@voilajsx/uikit/slider`      | Range input control                    |
| **Switch**      | `@voilajsx/uikit/switch`      | Toggle switch input                    |
| **Textarea**    | `@voilajsx/uikit/textarea`    | Multi-line text input                  |

### 🧭 Navigation Components

| Component         | Import Path                     | Description                 |
| ----------------- | ------------------------------- | --------------------------- |
| **Dropdown Menu** | `@voilajsx/uikit/dropdown-menu` | Context menus and dropdowns |
| **Menubar**       | `@voilajsx/uikit/menubar`       | Horizontal menu navigation  |
| **Pagination**    | `@voilajsx/uikit/pagination`    | Page navigation controls    |
| **Tabs**          | `@voilajsx/uikit/tabs`          | Tabbed content interface    |

### 💬 Overlay Components

| Component   | Import Path               | Description                       |
| ----------- | ------------------------- | --------------------------------- |
| **Dialog**  | `@voilajsx/uikit/dialog`  | Modal dialogs and alerts          |
| **Popover** | `@voilajsx/uikit/popover` | Floating content containers       |
| **Sheet**   | `@voilajsx/uikit/sheet`   | Slide-out panels (drawer/sidebar) |
| **Toast**   | `@voilajsx/uikit/toast`   | Notification messages             |
| **Tooltip** | `@voilajsx/uikit/tooltip` | Hover information                 |

### 📊 Data Components

| Component    | Import Path                | Description                    |
| ------------ | -------------------------- | ------------------------------ |
| **Progress** | `@voilajsx/uikit/progress` | Progress indicators            |
| **Table**    | `@voilajsx/uikit/table`    | Data tables with styling       |
| **Toggle**   | `@voilajsx/uikit/toggle`   | Pressed/unpressed state button |

### 🏗️ Layout Components

| Component     | Import Path                 | Description                     |
| ------------- | --------------------------- | ------------------------------- |
| **Container** | `@voilajsx/uikit/container` | Responsive page containers      |
| **Header**    | `@voilajsx/uikit/header`    | Page header with sticky support |
| **Footer**    | `@voilajsx/uikit/footer`    | Page footer layout              |
| **Sidebar**   | `@voilajsx/uikit/sidebar`   | Navigation sidebar              |

### 🎨 Theme System

| Component          | Import Path                      | Description                 |
| ------------------ | -------------------------------- | --------------------------- |
| **Theme Provider** | `@voilajsx/uikit/theme-provider` | Theme context and switching |

### 🛠️ Utilities

| Utility      | Import Path                  | Description                       |
| ------------ | ---------------------------- | --------------------------------- |
| **Utils**    | `@voilajsx/uikit/utils`      | Tailwind class merging utilities  |
| **Platform** | `@voilajsx/uikit/platform`   | Cross-platform detection          |
| **Adapters** | `@voilajsx/uikit/adapters/*` | Cross-platform component adapters |

### 📐 Page Templates

| Template             | Import Path                         | Description                      |
| -------------------- | ----------------------------------- | -------------------------------- |
| **Auth Template**    | `@voilajsx/uikit/templates/auth`    | Authentication page layouts      |
| **Blank Template**   | `@voilajsx/uikit/templates/blank`   | Minimal page template            |
| **Default Template** | `@voilajsx/uikit/templates/default` | Header + sidebar + footer layout |
| **Form Template**    | `@voilajsx/uikit/templates/form`    | Form-optimized layouts           |
| **Table Template**   | `@voilajsx/uikit/templates/table`   | Data table page layouts          |

### Usage Examples

```jsx
// Basic components
import { Button } from '@voilajsx/uikit/button';
import { Card, CardHeader, CardTitle, CardContent } from '@voilajsx/uikit/card';
import { Input } from '@voilajsx/uikit/input';

// Form integration
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
} from '@voilajsx/uikit/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from '@voilajsx/uikit/select';

// Advanced components
import { DataTable } from '@voilajsx/uikit/data-table';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@voilajsx/uikit/dialog';

// Layout templates
import { DefaultTemplate } from '@voilajsx/uikit/templates/default';
import { Container } from '@voilajsx/uikit/container';
```

> **💡 Pro Tip**: Since we maintain 100% API compatibility with shadcn/ui, you can use their [documentation](https://ui.shadcn.com/docs/components), examples, and community resources directly with @voilajsx/uikit components. Just replace their imports with ours!

**Total: 35+ Components + 5 Layout Templates + Cross-platform Adapters**

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

### OKLCH Color Format

```jsx
// OKLCH format: oklch(lightness chroma hue)
primary: 'oklch(0.5 0.2 220)';
//              ↑   ↑   ↑
//              |   |   └─ Hue (0-360)
//              |   └───── Chroma (saturation, 0-0.4)
//              └───────── Lightness (0-1)
```

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

<p align="center">
  Built with ❤️ in India by the <a href="https://github.com/orgs/voilajsx/people">VoilaJSX Team</a> — powering modern web development.
</p>
