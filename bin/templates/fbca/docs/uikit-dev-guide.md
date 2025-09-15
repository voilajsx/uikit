# UIKit Developer Reference Guide

**Quick reference for @voilajsx/uikit components, layouts, and configuration options.**

## 🏗️ Layout Components (5 Total)

### Decision Tree: Which Layout to Use?

```
What are you building?
├── Admin Dashboard/SaaS → AdminLayout
├── Marketing Website → PageLayout
├── Authentication Pages → AuthLayout
├── Error/About Pages → BlankLayout
└── Browser Extensions → PopupLayout
```

### Layout Patterns

| Layout | Pattern | Usage |
|--------|---------|--------|
| **AdminLayout** | Compound | `<AdminLayout><AdminLayout.Header/><AdminLayout.Sidebar/><AdminLayout.Content/></AdminLayout>` |
| **PageLayout** | Compound | `<PageLayout><PageLayout.Header/><PageLayout.Content/><PageLayout.Footer/></PageLayout>` |
| **AuthLayout** | Single | `<AuthLayout><LoginForm/></AuthLayout>` |
| **BlankLayout** | Single | `<BlankLayout><ErrorPage/></BlankLayout>` |
| **PopupLayout** | Single | `<PopupLayout><ExtensionContent/></PopupLayout>` |

---

## 🎛️ AdminLayout Reference

**For: Admin dashboards, SaaS applications, management tools**

### Root Component Props
| Property | Type | Options | Default | Description |
|----------|------|---------|---------|-------------|
| `scheme` | `string` | `sidebar`, `compact` | `sidebar` | Layout structure |
| `tone` | `string` | `clean`, `subtle`, `brand`, `contrast` | `subtle` | Visual styling |
| `size` | `string` | `sm`, `md`, `lg`, `xl`, `full` | `lg` | Layout size |
| `defaultSidebarOpen` | `boolean` | - | `true` | Initial sidebar state |

### AdminLayout.Header Props
| Property | Type | Options | Description |
|----------|------|---------|-------------|
| `title` | `string` | - | Page title |
| `position` | `string` | `sticky`, `fixed`, `relative` | Header positioning |
| `breadcrumbs` | `array` | `{label: string, href?: string}[]` | Navigation breadcrumbs |
| `actions` | `ReactNode` | - | Header action buttons |

### AdminLayout.Sidebar Props
| Property | Type | Description |
|----------|------|-------------|
| `navigation` | `NavigationItem[]` | Menu items array |
| `currentPath` | `string` | Current page path for active states |
| `onNavigate` | `function` | `(href, item) => void` navigation handler |
| `logo` | `ReactNode` | Logo component |
| `footer` | `ReactNode` | Sidebar footer content |

---

## 🌐 PageLayout Reference

**For: Marketing websites, company pages, documentation**

### Root Component Props
| Property | Type | Options | Default | Description |
|----------|------|---------|---------|-------------|
| `scheme` | `string` | `base`, `sidebar` | `base` | Layout structure |
| `tone` | `string` | `clean`, `subtle`, `brand`, `contrast` | `clean` | Visual styling |
| `size` | `string` | `sm`, `md`, `lg`, `xl`, `full` | `xl` | Layout size |

### PageLayout.Header Props
| Property | Type | Description |
|----------|------|-------------|
| `navigation` | `NavigationItem[]` | Main navigation menu |
| `currentPath` | `string` | Current page for active states |
| `onNavigate` | `function` | Navigation click handler |
| `logo` | `ReactNode` | Logo component |
| `title` | `string` | Site title (if no logo) |
| `actions` | `ReactNode` | Header actions (login, etc.) |

### PageLayout.Content Props
| Property | Type | Description |
|----------|------|-------------|
| `title` | `string` | Page title above content |
| `breadcrumbs` | `array` | Page navigation breadcrumbs |
| `sidebar` | `string` | `none`, `left`, `right` |
| `sidebarContent` | `ReactNode` | Custom sidebar content |

---

## 🔐 AuthLayout Reference

**For: Login, signup, password reset pages**

### Props Table
| Property | Type | Options | Default | Description |
|----------|------|---------|---------|-------------|
| `scheme` | `string` | `simple`, `card`, `split`, `hero` | `card` | Auth layout type |
| `tone` | `string` | `clean`, `subtle`, `brand`, `contrast` | `clean` | Visual styling |
| `size` | `string` | `sm`, `md`, `lg`, `xl`, `full` | `md` | Content size |
| `title` | `string` | - | - | Auth page title |
| `subtitle` | `string` | - | - | Auth page subtitle |
| `logo` | `ReactNode` | - | - | Logo component |
| `imageUrl` | `string` | - | - | Background image (hero/split) |

### Scheme Visual Guide
| Scheme | Description | Use Case |
|--------|-------------|----------|
| `simple` | Basic centered form | Minimal auth flows |
| `card` | Form in elevated card | Standard login/signup |
| `split` | Two-column with image | Marketing-heavy auth |
| `hero` | Full-screen background | Brand-focused auth |

---

## 📄 BlankLayout & PopupLayout Reference

### BlankLayout Props
| Property | Type | Options | Default | Description |
|----------|------|---------|---------|-------------|
| `scheme` | `string` | `simple`, `card` | `simple` | Layout structure |
| `tone` | `string` | `clean`, `subtle`, `brand`, `contrast` | `clean` | Visual styling |
| `size` | `string` | `sm`, `md`, `lg`, `xl`, `full` | `lg` | Content size |

### PopupLayout Props
| Property | Type | Options | Default | Description |
|----------|------|---------|---------|-------------|
| `scheme` | `string` | `modal`, `drawer`, `floating` | `modal` | Popup structure |
| `tone` | `string` | `clean`, `subtle`, `brand`, `contrast` | `clean` | Visual styling |
| `size` | `string` | `sm`, `md`, `lg`, `xl`, `full` | `md` | Popup size |
| `title` | `string` | - | - | Popup title |
| `showClose` | `boolean` | - | - | Show close button |
| `onClose` | `function` | - | - | Close handler |

---

## 🧩 Core UI Components (37 Total)

### Form & Input Components

| Component | Key Props | Variants | Description |
|-----------|-----------|----------|-------------|
| **Button** | `variant`, `size`, `asChild` | `default`, `destructive`, `outline`, `secondary`, `ghost`, `link` | Click actions |
| **Input** | `type`, `placeholder` | Standard HTML types | Text input field |
| **Textarea** | `rows`, `placeholder` | - | Multi-line text input |
| **Select** | `value`, `onValueChange` | - | Dropdown selection |
| **Checkbox** | `checked`, `onCheckedChange` | - | Boolean input |
| **Switch** | `checked`, `onCheckedChange` | - | Toggle input |
| **RadioGroup** | `value`, `onValueChange` | - | Single choice from options |
| **Slider** | `value`, `min`, `max` | - | Range input |
| **Label** | `htmlFor` | - | Input labels |

### Display Components

| Component | Key Props | Variants | Description |
|-----------|-----------|----------|-------------|
| **Card** | Compound component | - | Content containers |
| **CardHeader** | - | - | Card header section |
| **CardTitle** | - | - | Card title text |
| **CardContent** | - | - | Card main content |
| **CardFooter** | - | - | Card footer section |
| **Badge** | `variant` | `default`, `secondary`, `destructive`, `outline` | Status indicators |
| **Avatar** | `src`, `alt` | - | Profile images |
| **Alert** | `variant` | `default`, `destructive` | Important messages |
| **Progress** | `value`, `max` | - | Progress indicators |
| **Skeleton** | `className` | - | Loading placeholders |
| **Separator** | `orientation` | `horizontal`, `vertical` | Visual dividers |

### Navigation Components

| Component | Key Props | Description |
|-----------|-----------|-------------|
| **DropdownMenu** | Compound component | Context menus |
| **NavigationMenu** | `value`, `onValueChange` | Main navigation |
| **Breadcrumb** | Compound component | Page hierarchy |
| **Tabs** | `value`, `onValueChange` | Content switching |
| **Pagination** | `currentPage`, `totalPages` | Page navigation |
| **Command** | `value`, `onValueChange` | Search/command palette |

### Overlay Components

| Component | Key Props | Description |
|-----------|-----------|-------------|
| **Dialog** | `open`, `onOpenChange` | Modal dialogs |
| **Sheet** | `open`, `onOpenChange`, `side` | Slide-out panels |
| **Popover** | `open`, `onOpenChange` | Floating content |
| **Tooltip** | `content` | Hover information |
| **HoverCard** | `content` | Rich hover content |

### Advanced Components

| Component | Key Features | Description |
|-----------|--------------|-------------|
| **DataTable** | Sorting, filtering, pagination, virtual scrolling | Data grid |
| **Calendar** | Date selection, range selection | Date picker |
| **Form** | React Hook Form integration, validation | Enhanced forms |

---

## 🎨 Theme System

### Available Themes
| Theme | ID | Description | Best For |
|-------|----|-----------|----|
| **Base** | `base` | Clean default | Minimal designs |
| **Elegant** | `elegant` | Professional business | Corporate apps |
| **Metro** | `metro` | Modern flat design | Consumer apps |
| **Studio** | `studio` | Creative professional | Design tools |
| **Vivid** | `vivid` | High-contrast vibrant | Gaming/entertainment |

### Theme Usage
```jsx
import { ThemeProvider, useTheme } from '@voilajsx/uikit/theme-provider';

// Wrap your app
<ThemeProvider theme="elegant" mode="light">
  <App />
</ThemeProvider>

// Switch themes dynamically
const { setTheme, setMode } = useTheme();
setTheme('vivid');
setMode('dark');
```

---

## 🎯 Universal Systems

### Tone System (All Components)
| Tone | Usage | Background | Text Color |
|------|-------|------------|------------|
| `clean` | Pure, minimal areas | White/light | Default text |
| `subtle` | Supporting areas | Light gray | Muted text |
| `brand` | Primary elements | Brand color | White/contrast |
| `contrast` | High emphasis | Dark/black | Light text |

### Size System (All Components)
| Size | Width | Usage |
|------|-------|-------|
| `sm` | 672px | Compact interfaces |
| `md` | 896px | Standard content |
| `lg` | 1152px | Wide content |
| `xl` | 1280px | Full-width layouts |
| `full` | 100% | Edge-to-edge content |

---

## 🧭 Navigation System

### NavigationItem Structure
```typescript
interface NavigationItem {
  key: string;              // REQUIRED: Unique ID
  label: string;            // REQUIRED: Display text
  href?: string;            // Page navigation
  onClick?: () => void;     // Function calls
  icon?: ComponentType;     // Lucide React icon
  items?: NavigationItem[]; // Submenu (max 2 levels)
  badge?: string;          // Notification count
  isActive?: boolean;      // Current page highlighting
}
```

### Navigation Patterns
```jsx
const navigation = [
  {
    key: 'dashboard',
    label: 'Dashboard',
    href: '/admin',
    icon: LayoutDashboard,
    isActive: true,
  },
  {
    key: 'users',
    label: 'Users',
    icon: Users,
    badge: '12',
    items: [
      { key: 'list', label: 'All Users', href: '/admin/users' },
      { key: 'new', label: 'Add User', href: '/admin/users/new' },
    ],
  },
];
```

---

## 🎨 Semantic Colors (CRITICAL)

### ✅ Always Use Semantic Classes
```jsx
// ✅ CORRECT - Adapts to all themes and modes
className="bg-background text-foreground border-border"
className="bg-card text-card-foreground"
className="bg-primary text-primary-foreground"
```

### ❌ Never Use Hardcoded Colors
```jsx
// ❌ WRONG - Breaks in dark mode and different themes
className="bg-white text-black border-gray-200"
className="bg-blue-500 text-white"
```

### Complete Semantic Color Reference
| Class | Usage |
|-------|-------|
| `bg-background` | Main page background |
| `bg-card` | Card/panel backgrounds |
| `bg-popover` | Dropdown/modal backgrounds |
| `bg-muted` | Subtle background areas |
| `bg-primary` | Primary buttons/brand elements |
| `bg-secondary` | Secondary buttons/elements |
| `text-foreground` | Primary text |
| `text-muted-foreground` | Secondary/subtle text |
| `border-border` | Standard borders |
| `border-input` | Input field borders |

---

## 🚀 Quick Reference Commands

### Component Import Patterns
```jsx
// ✅ Individual imports (tree-shaking friendly)
import { Button } from '@voilajsx/uikit/button';
import { Card, CardContent, CardHeader } from '@voilajsx/uikit/card';

// ❌ Barrel imports (larger bundle size)
import { Button, Card } from '@voilajsx/uikit';
```

### Layout Code Patterns
```jsx
// AdminLayout (Compound)
<AdminLayout scheme="sidebar" tone="subtle" size="lg">
  <AdminLayout.Header title="Dashboard" />
  <AdminLayout.Sidebar navigation={nav} />
  <AdminLayout.Content>{children}</AdminLayout.Content>
</AdminLayout>

// AuthLayout (Single)
<AuthLayout scheme="card" tone="clean" title="Sign In">
  <LoginForm />
</AuthLayout>
```

### DataTable Column Configuration
```jsx
const columns = [
  {
    id: 'name',
    header: 'Name',
    accessorKey: 'name',
    sortable: true,
    filterable: true,
  },
  {
    id: 'status',
    header: 'Status',
    cell: (value) => <Badge>{value}</Badge>,
    filterType: 'select',
  },
];
```

---

## 📚 Quick Links

- **[Complete LLM Guide](./UIKIT_LLM_GUIDE.md)** - Comprehensive usage guide with examples
- **[GitHub Repository](https://github.com/voilajsx/uikit)** - Source code and issues
- **[Theme Examples](https://github.com/voilajsx/uikit/tree/main/examples)** - Live theme demos

---

**Built with @voilajsx/uikit** ✨