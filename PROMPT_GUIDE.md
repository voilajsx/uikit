# @voilajsx/uikit - LLM Code Generation Reference

**Note**: Implementation is in JavaScript/JSX. TypeScript signatures are for reference only.

## LLM Code Generation Guidelines

1. **File Header Comments** (Required for all files):

   ```javascript
   /**
    * Brief description of what the file does
    * @module @voilajsx/uikit
    * @file path/to/filename.jsx
    */
   ```

2. **Component JSDoc** (Required for all components):

   ```javascript
   /**
    * One clear sentence describing what the component does
    * @param {Object} props - Component props
    * @param {string} [props.className] - Additional CSS classes
    * @param {React.ReactNode} props.children - Child components
    * @returns {JSX.Element} Component element
    */
   ```

3. **Code Style**:

   - ESM imports, single quotes, 2-space indentation, semicolons
   - Focus on reduced file size and clean code
   - Use Tailwind CSS classes for styling
   - Prefer functional components with hooks

4. **Comment Guidelines**:

   - **File headers**: Always include with description, module, and file path
   - **Component docs**: One clear sentence describing the purpose
   - **Inline comments**: Only for complex logic that's confusing
   - **No basic comments**: Avoid obvious comments like `// Button component`
   - **Focus on minimal file size**: Comment only when necessary

5. **Import Patterns**:
   - Use direct component imports: `@voilajsx/uikit/button`
   - Always import styles: `@voilajsx/uikit/styles`
   - Import theme provider: `@voilajsx/uikit/theme-provider`

## Complete Component Inventory

### 🏗️ Layout Templates (4 Total)

Full-page layouts that structure entire applications:

```jsx
// Standard website layout with header/content/footer
import {
  Page,
  PageHeader,
  PageContent,
  PageFooter,
} from '@voilajsx/uikit/page';

// Admin dashboard with sidebar navigation
import { AdminTemplate } from '@voilajsx/uikit/admin';

// Authentication pages (6 variants: simple, card, split-gradient, split-image, card-gradient, card-image)
import { AuthTemplate } from '@voilajsx/uikit/auth';

// Simple content pages, error pages, maintenance pages
import { BlankTemplate } from '@voilajsx/uikit/blank';
```

### 🧱 Section Components (3 Total)

Building blocks for custom layouts:

```jsx
// Responsive navigation header with logo and menu
import { Header, HeaderLogo, HeaderNav } from '@voilajsx/uikit/header';

// Content container with optional sticky sidebar
import {
  Container,
  ContainerSidebar,
  ContainerMain,
} from '@voilajsx/uikit/container';

// Footer with basic and advanced multi-column layouts
import {
  Footer,
  FooterBasic,
  FooterAdvanced,
  FooterBrand,
  FooterSocial,
} from '@voilajsx/uikit/footer';
```

### 🎨 UI Components (35 Total)

All shadcn/ui components enhanced with theming:

**Form & Input Components (10):**

```jsx
import { Button } from '@voilajsx/uikit/button';
import { Input } from '@voilajsx/uikit/input';
import { Textarea } from '@voilajsx/uikit/textarea';
import { Label } from '@voilajsx/uikit/label';
import { Checkbox } from '@voilajsx/uikit/checkbox';
import { RadioGroup, RadioGroupItem } from '@voilajsx/uikit/radio-group';
import { Switch } from '@voilajsx/uikit/switch';
import { Slider } from '@voilajsx/uikit/slider';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@voilajsx/uikit/select';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@voilajsx/uikit/form';
```

**Display & Layout Components (10):**

```jsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@voilajsx/uikit/card';
import { Badge } from '@voilajsx/uikit/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@voilajsx/uikit/avatar';
import { Separator } from '@voilajsx/uikit/separator';
import { Progress } from '@voilajsx/uikit/progress';
import { Skeleton } from '@voilajsx/uikit/skeleton';
import { Alert, AlertTitle, AlertDescription } from '@voilajsx/uikit/alert';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@voilajsx/uikit/breadcrumb';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@voilajsx/uikit/tabs';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@voilajsx/uikit/accordion';
```

**Navigation & Menu Components (6):**

```jsx
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@voilajsx/uikit/dropdown-menu';
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
} from '@voilajsx/uikit/menubar';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from '@voilajsx/uikit/pagination';
import {
  Command,
  CommandInput,
  CommandList,
  CommandItem,
} from '@voilajsx/uikit/command';
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from '@voilajsx/uikit/collapsible';
import { Toggle } from '@voilajsx/uikit/toggle';
```

**Overlay & Modal Components (5):**

```jsx
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@voilajsx/uikit/dialog';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@voilajsx/uikit/sheet';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@voilajsx/uikit/popover';
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from '@voilajsx/uikit/hover-card';
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from '@voilajsx/uikit/tooltip';
```

**Data & Table Components (4):**

```jsx
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from '@voilajsx/uikit/table';
import { DataTable } from '@voilajsx/uikit/data-table'; // Enhanced with search/sort
import { Calendar } from '@voilajsx/uikit/calendar';
import { Toast, ToastProvider, ToastViewport } from '@voilajsx/uikit/toast';
```

### 🎨 Theme System

6 professional themes with light/dark variants:

```jsx
import { ThemeProvider, useTheme } from '@voilajsx/uikit/theme-provider';

// Available themes: 'default', 'aurora', 'metro', 'neon', 'ruby', 'studio'
// Variants: 'light', 'dark'
```

**Theme Descriptions:**

- **default**: Ocean blue professional colors - perfect for business applications
- **aurora**: Northern lights purple-green gradients - ideal for creative applications
- **metro**: Clean transit-inspired gray-blue - excellent for admin panels and dashboards
- **neon**: Electric cyberpunk magenta-cyan - great for gaming and tech applications
- **ruby**: Sophisticated red with gold accents - perfect for premium brands
- **studio**: Designer grays with amber accent - ideal for design tools and creative platforms

## Template Selection Decision Tree

| Need                                       | Use Template    | When to Choose                                        |
| ------------------------------------------ | --------------- | ----------------------------------------------------- |
| Full website with header/footer navigation | `Page`          | Marketing sites, documentation, company websites      |
| Admin dashboard with persistent sidebar    | `AdminTemplate` | CRM systems, analytics dashboards, admin panels       |
| Authentication flows                       | `AuthTemplate`  | Login, signup, password reset, onboarding             |
| Simple content or error pages              | `BlankTemplate` | 404 pages, maintenance, about us, terms               |
| Content section with optional sidebar      | `Container`     | Documentation sections, settings pages, content areas |

# UIKit Color System Guidelines (CRITICAL FOR THEME COMPATIBILITY)

## 🚨 MANDATORY Color Usage Rules

### 1. ONLY Use Semantic Color Variables

```jsx
// ✅ CORRECT - Use semantic color variables (theme-aware)
className = 'bg-background text-foreground border-border';
className = 'bg-primary text-primary-foreground';
className = 'bg-card text-card-foreground border-border';
className = 'text-muted-foreground bg-muted';

// ❌ WRONG - Never use hardcoded colors (breaks themes)
className = 'bg-white text-black border-gray-200';
className = 'bg-blue-500 text-white';
className = 'text-gray-600 bg-gray-100';
```

### 2. Complete Semantic Color System

```css
/* Background & Surface Colors */
bg-background           /* Main page background */
bg-card                /* Card/panel backgrounds */
bg-popover             /* Dropdown/popover backgrounds */
bg-muted               /* Subtle background areas */

/* Text Colors */
text-foreground        /* Primary text color */
text-muted-foreground  /* Secondary/subtle text */
text-card-foreground   /* Text on card backgrounds */
text-popover-foreground /* Text on popover backgrounds */

/* Interactive Colors */
bg-primary             /* Primary buttons/elements */
text-primary-foreground /* Text on primary elements */
bg-secondary           /* Secondary buttons/elements */
text-secondary-foreground /* Text on secondary elements */
bg-accent              /* Accent highlights */
text-accent-foreground /* Text on accent elements */

/* State Colors */
bg-destructive         /* Error/danger states */
text-destructive-foreground /* Text on destructive elements */
text-destructive       /* Destructive text (standalone) */

/* Border & Divider Colors */
border-border          /* Standard borders */
border-input           /* Input field borders */
ring-ring              /* Focus ring colors */

/* Chart Colors (for data visualization) */
bg-chart-1 through bg-chart-5  /* Themed chart colors */
```

### 3. Dark/Light Theme Compatibility

```jsx
// ✅ AUTOMATICALLY works in both themes
<Card className="bg-card text-card-foreground border-border">
  <CardHeader className="border-b border-border">
    <CardTitle className="text-foreground">Title</CardTitle>
    <p className="text-muted-foreground">Subtitle</p>
  </CardHeader>
  <CardContent className="text-foreground">
    Content adapts to theme automatically
  </CardContent>
</Card>

// ❌ BREAKS in dark theme
<Card className="bg-white text-black border-gray-200">
  <CardHeader className="border-b border-gray-200">
    <CardTitle className="text-gray-900">Title</CardTitle>
    <p className="text-gray-600">Subtitle</p>
  </CardHeader>
</Card>
```

### 4. State-Based Color Patterns

```jsx
// ✅ Status indicators using semantic colors
<Badge variant="default">Active</Badge>          // Uses bg-primary
<Badge variant="secondary">Pending</Badge>       // Uses bg-secondary
<Badge variant="destructive">Error</Badge>       // Uses bg-destructive
<Badge variant="outline">Neutral</Badge>         // Uses border-border

// ✅ Interactive states
<Button
  variant="default"     // bg-primary text-primary-foreground
  className="hover:bg-primary/90"  // Semantic color with opacity
>
  Action
</Button>

// ✅ Form validation states
<Input
  className={cn(
    "border-input",  // Default border
    error && "border-destructive focus:ring-destructive"  // Error state
  )}
/>
```

### 5. Opacity and Color Modifiers

```jsx
// ✅ Use opacity modifiers with semantic colors
className = 'bg-primary/10'; // 10% opacity primary
className = 'text-muted-foreground/60'; // 60% opacity muted text
className = 'border-border/50'; // 50% opacity border

// ✅ Hover states with semantic colors
className = 'hover:bg-muted/80'; // Hover with opacity
className = 'hover:text-foreground'; // Full semantic color on hover
```

### 6. Never Use These (Theme-Breaking Colors)

```jsx
// ❌ FORBIDDEN - Hardcoded grays
className="bg-gray-100 text-gray-900 border-gray-300"
className="bg-slate-50 text-slate-800"

// ❌ FORBIDDEN - Hardcoded colors
className="bg-blue-500 text-white"
className="bg-red-600 text-white"
className="bg-green-100 text-green-800"

// ❌ FORBIDDEN - CSS color values
style={{ backgroundColor: '#ffffff', color: '#000000' }}
className="bg-[#f5f5f5] text-[#333333]"
```

## Component-Specific Color Guidelines

### Buttons

```jsx
// ✅ Use button variants (automatically theme-aware)
<Button variant="default">Primary Action</Button>      // bg-primary
<Button variant="secondary">Secondary</Button>         // bg-secondary
<Button variant="destructive">Delete</Button>          // bg-destructive
<Button variant="outline">Outline</Button>             // border-input
<Button variant="ghost">Ghost</Button>                 // transparent
```

### Cards & Containers

```jsx
// ✅ Standard card pattern
<Card className="bg-card text-card-foreground border-border">
  <CardHeader className="border-b border-border">
    <CardTitle className="text-foreground">Title</CardTitle>
    <CardDescription className="text-muted-foreground">
      Description
    </CardDescription>
  </CardHeader>
  <CardContent className="text-foreground">Content here</CardContent>
</Card>
```

### Forms & Inputs

```jsx
// ✅ Form styling pattern
<div className="space-y-4">
  <Label className="text-foreground">Email</Label>
  <Input
    className="bg-background text-foreground border-input focus:ring-ring"
    placeholder="Enter email..."
  />
  <p className="text-muted-foreground text-sm">Helper text</p>
  {error && <p className="text-destructive text-sm">Error message</p>}
</div>
```

### Status & Feedback

```jsx
// ✅ Status indicators
<Alert className="border-border bg-background">
  <AlertTitle className="text-foreground">Success</AlertTitle>
  <AlertDescription className="text-muted-foreground">
    Operation completed successfully
  </AlertDescription>
</Alert>

<Alert variant="destructive" className="border-destructive bg-destructive/10">
  <AlertTitle className="text-destructive">Error</AlertTitle>
  <AlertDescription className="text-destructive">
    Something went wrong
  </AlertDescription>
</Alert>
```

### Navigation & Menus

```jsx
// ✅ Navigation pattern (automatically themed by components)
<Header variant="default">  {/* Uses semantic colors internally */}
  <HeaderNav items={navItems} />
</Header>

// ✅ Custom navigation with semantic colors
<nav className="bg-background border-b border-border">
  <Button
    variant="ghost"
    className={cn(
      "text-muted-foreground hover:text-foreground",
      isActive && "text-foreground bg-muted"
    )}
  >
    Navigation Item
  </Button>
</nav>
```

## Data Visualization Colors

```jsx
// ✅ Use themed chart colors
<div className="grid grid-cols-5 gap-2">
  <div className="h-4 bg-chart-1 rounded"></div> {/* Theme-aware chart color 1 */}
  <div className="h-4 bg-chart-2 rounded"></div> {/* Theme-aware chart color 2 */}
  <div className="h-4 bg-chart-3 rounded"></div> {/* Theme-aware chart color 3 */}
  <div className="h-4 bg-chart-4 rounded"></div> {/* Theme-aware chart color 4 */}
  <div className="h-4 bg-chart-5 rounded"></div> {/* Theme-aware chart color 5 */}
</div>;

// ✅ DataTable with semantic colors
const columns = [
  {
    key: 'status',
    title: 'Status',
    render: (value) => (
      <Badge
        variant={value === 'active' ? 'default' : 'secondary'}
        className={cn(
          value === 'active' && 'bg-primary text-primary-foreground',
          value === 'inactive' && 'bg-muted text-muted-foreground'
        )}
      >
        {value}
      </Badge>
    ),
  },
];
```

## Testing Theme Compatibility

```jsx
// ✅ Always test components work in both themes
function ThemeTestComponent() {
  const { toggleVariant } = useTheme();

  return (
    <div className="p-4 bg-background text-foreground">
      <Button onClick={toggleVariant} className="mb-4">
        Toggle Theme to Test
      </Button>

      <Card className="bg-card text-card-foreground border-border">
        <CardContent className="p-4">
          <p className="text-foreground mb-2">Primary text</p>
          <p className="text-muted-foreground">Secondary text</p>
        </CardContent>
      </Card>
    </div>
  );
}
```

## Quick Reference Checklist

### ✅ DO:

- Use semantic color variables (`bg-background`, `text-foreground`, etc.)
- Use component variants (`variant="default"`, `variant="destructive"`)
- Use opacity modifiers (`bg-primary/10`, `text-muted-foreground/60`)
- Test in both light and dark themes
- Use themed chart colors (`bg-chart-1` through `bg-chart-5`)

### ❌ DON'T:

- Use hardcoded colors (`bg-white`, `text-black`, `bg-blue-500`)
- Use gray scale colors (`bg-gray-100`, `text-gray-600`)
- Use CSS color values (`#ffffff`, `rgb(255,255,255)`)
- Use arbitrary color values (`bg-[#f5f5f5]`)
- Assume colors work in both themes without testing

### 🎯 Golden Rule:

**If it uses a hardcoded color, it will break themes. Always use semantic color variables that automatically adapt to the current theme.**

## Theme System (Complete API Reference)

### Theme Provider - REQUIRED wrapper for all apps

```typescript
// Theme Provider - MUST wrap your entire application
import { ThemeProvider, useTheme } from '@voilajsx/uikit/theme-provider';

// ThemeProvider Props (complete interface)
interface ThemeProviderProps {
  theme?: 'default' | 'aurora' | 'metro' | 'neon' | 'ruby' | 'studio';
  variant?: 'light' | 'dark';
  detectSystem?: boolean; // Auto-detect system preference (default: true)
  customThemes?: Array<ThemeObject>; // Register custom themes
  children: React.ReactNode;
}

// useTheme Hook (complete return interface)
const {
  theme, // string: current theme id
  variant, // 'light' | 'dark'
  setTheme, // (themeId: string) => void
  setVariant, // ('light' | 'dark') => void
  toggleVariant, // () => void
  availableThemes, // Array<{id: string, name: string}>
  registerTheme, // (themeObj) => void - for custom themes
  getAvailableThemes, // () => Array - get all themes
} = useTheme();

// CRITICAL: Always wrap your app
<ThemeProvider theme="studio" variant="light" detectSystem={true}>
  <App />
</ThemeProvider>;
```

### Theme Selection Patterns

```jsx
// Standard theme selector
<Select value={theme} onValueChange={setTheme}>
  <SelectItem value="default">Default (Ocean Blue)</SelectItem>
  <SelectItem value="aurora">Aurora (Purple-Green)</SelectItem>
  <SelectItem value="metro">Metro (Gray-Blue)</SelectItem>
  <SelectItem value="neon">Neon (Cyberpunk)</SelectItem>
  <SelectItem value="ruby">Ruby (Red-Gold)</SelectItem>
  <SelectItem value="studio">Studio (Designer Gray)</SelectItem>
</Select>

// Dark mode toggle
<Switch
  checked={variant === 'dark'}
  onCheckedChange={(checked) => setVariant(checked ? 'dark' : 'light')}
/>

// Quick toggle button
<Button onClick={toggleVariant}>
  {variant === 'light' ? <Moon /> : <Sun />}
</Button>
```

## Layout Templates (Complete API Reference)

### 1. Page Template - Standard Website Layout

```typescript
// Complete page layout with header/content/footer
import {
  Page,
  PageHeader,
  PageContent,
  PageFooter,
} from '@voilajsx/uikit/page';

// Page Props (complete interface)
interface PageProps {
  variant?: 'default' | 'minimal' | 'contained';
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'; // Controls width and spacing
  children: React.ReactNode;
}

// PageHeader Props (inherits size from Page if not specified)
interface PageHeaderProps {
  variant?: 'default' | 'primary' | 'black'; // Color scheme
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  sticky?: boolean; // Sticky positioning (default: true)
  children: React.ReactNode;
}

// PageContent Props (inherits size from Page if not specified)
interface PageContentProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  children: React.ReactNode;
}

// PageFooter Props (inherits size from Page if not specified)
interface PageFooterProps {
  variant?: 'default' | 'muted' | 'dark'; // Color scheme
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  children: React.ReactNode;
}

// Standard Page Pattern
<Page variant="default" size="xl">
  <PageHeader variant="default" sticky={true}>
    <HeaderLogo>{logo}</HeaderLogo>
    <HeaderNav items={navItems} />
  </PageHeader>
  <PageContent>{/* Main content */}</PageContent>
  <PageFooter variant="default">
    <FooterBasic />
  </PageFooter>
</Page>;
```

### 2. Admin Template - Dashboard with Sidebar

```typescript
// Admin dashboard with sidebar and header
import { AdminTemplate } from '@voilajsx/uikit/admin';

// AdminTemplate Props (complete interface)
interface AdminTemplateProps {
  variant?: 'default' | 'primary' | 'black'; // Sidebar color scheme
  size?: 'compact' | 'default' | 'wide'; // Sidebar width (192px/256px/320px)
  title?: string; // Header title text
  logo?: React.ReactNode; // Logo component
  headerActions?: React.ReactNode; // Top-right header buttons

  // Navigation Structure (REQUIRED) - ✅ UPDATED: Now uses unified structure
  navigationItems: Array<{
    key: string; // REQUIRED: Unique identifier
    label: string; // ✅ CHANGED: Display text (was 'title', now 'label')
    icon?: React.ComponentType; // Optional: Lucide icon component
    path?: string; // Optional: URL path
    badge?: string; // Optional: Badge text (e.g., "12", "New")
    isActive?: boolean; // Optional: Current page indicator
    section?: string; // Optional: Group name ('main', 'system', etc.)
    onClick?: () => void; // Optional: Click handler
    items?: Array<{
      // ✅ CHANGED: Nested navigation (was 'submenu', now 'items')
      key: string;
      label: string; // ✅ CHANGED: (was 'title', now 'label')
      path?: string;
      isActive?: boolean;
      onClick?: () => void;
    }>;
  }>;

  currentPath?: string; // Current URL for active states
  onNavigate?: (path: string, item: object) => void; // Navigation handler
  sidebarContent?: React.ReactNode; // Custom sidebar content (overrides navigationItems)
  sidebarFooter?: React.ReactNode; // Bottom sidebar content
  collapsible?: boolean; // Allow sidebar collapse (default: true)
  defaultSidebarOpen?: boolean; // Initial sidebar state (default: true)
  children: React.ReactNode; // Main content area
}

// Navigation Items Example Structure - ✅ UPDATED: Uses unified props
const navigationItems = [
  {
    key: 'dashboard',
    label: 'Dashboard', // ✅ CHANGED: was 'title', now 'label'
    icon: Home,
    path: '/admin',
    isActive: true,
    section: 'main', // Groups items with separators
  },
  {
    key: 'users',
    label: 'Users', // ✅ CHANGED: was 'title', now 'label'
    icon: Users,
    path: '/admin/users',
    badge: '24', // Shows notification badge
    section: 'main',
  },
  {
    key: 'analytics',
    label: 'Analytics', // ✅ CHANGED: was 'title', now 'label'
    icon: BarChart3,
    section: 'main',
    items: [
      // ✅ CHANGED: was 'submenu', now 'items'
      // Creates collapsible submenu
      { key: 'overview', label: 'Overview', path: '/admin/analytics' }, // ✅ CHANGED: 'label'
      { key: 'reports', label: 'Reports', path: '/admin/analytics/reports' }, // ✅ CHANGED: 'label'
    ],
  },
  {
    key: 'settings',
    label: 'Settings', // ✅ CHANGED: was 'title', now 'label'
    icon: Settings,
    path: '/admin/settings',
    section: 'system', // Different section = separator line
  },
];

// Standard Admin Pattern
<AdminTemplate
  variant="default"
  size="default"
  title="Admin Dashboard"
  navigationItems={navigationItems}
  currentPath="/admin"
  onNavigate={(path) => navigate(path)}
  headerActions={<HeaderButtons />}
>
  {/* Dashboard content */}
</AdminTemplate>;
```

### 3. Auth Template - Authentication Pages

```typescript
// Authentication page layouts
import { AuthTemplate } from '@voilajsx/uikit/auth';

// AuthTemplate Props (complete interface)
interface AuthTemplateProps {
  variant: 'simple' | 'card' | 'split-gradient' | 'split-image' | 'card-gradient' | 'card-image';
  title?: string; // Page title
  subtitle?: string; // Page subtitle
  logo?: React.ReactNode; // Logo component
  footer?: React.ReactNode; // Footer content
  className?: string;
  containerProps?: object;

  // Split Layout Props (for split-* variants)
  splitContent?: React.ReactNode; // Left side content

  // Image Layout Props (for *-image variants)
  imageUrl?: string; // Background image URL
  imageAlt?: string; // Image alt text
  imageOverlay?: 'light' | 'dark' | 'none'; // Image overlay

  // Card Layout Props (for card-* variants)
  cardContent?: React.ReactNode; // Additional card content

  children: React.ReactNode; // Form content (REQUIRED)
}

// Variant Descriptions
const AUTH_VARIANTS = {
  'simple': 'Centered form on plain background',
  'card': 'Form inside elevated card',
  'split-gradient': 'Left gradient panel, right form',
  'split-image': 'Left image panel, right form',
  'card-gradient': 'Vertical card with gradient header',
  'card-image': 'Card overlay on background image'
};

// Standard Auth Patterns
<AuthTemplate variant="card" title="Sign In" subtitle="Welcome back">
  <LoginForm />
</AuthTemplate>

<AuthTemplate
  variant="split-gradient"
  title="Join Us"
  splitContent={<WelcomeContent />}
>
  <SignupForm />
</AuthTemplate>

<AuthTemplate
  variant="card-image"
  imageUrl="/background.jpg"
  imageOverlay="dark"
  title="Welcome"
>
  <AuthForm />
</AuthTemplate>
```

### 4. Blank Template - Simple Content Pages

```typescript
// Simple content pages and error states
import { BlankTemplate } from '@voilajsx/uikit/blank';

// BlankTemplate Props (complete interface)
interface BlankTemplateProps {
  variant?: 'default' | 'card' | 'error' | 'maintenance' | 'suspension';
  title?: string; // Page title
  subtitle?: string; // Page subtitle
  logo?: React.ReactNode; // Logo component
  icon?: React.ReactNode; // Icon component (e.g., error icon)
  actions?: React.ReactNode; // Action buttons
  footer?: React.ReactNode; // Footer content
  className?: string;
  containerProps?: object;
  children?: React.ReactNode; // Main content
}

// Variant Descriptions
const BLANK_VARIANTS = {
  'default': 'Simple centered content',
  'card': 'Content in elevated card',
  'error': 'Error page styling with muted colors',
  'maintenance': 'Maintenance page with pulsing icon',
  'suspension': 'Account suspension styling with destructive colors'
};

// Standard Blank Patterns
<BlankTemplate
  variant="error"
  title="404 - Page Not Found"
  subtitle="The page you're looking for doesn't exist"
  icon={<AlertTriangle className="h-24 w-24" />}
  actions={
    <Button onClick={() => navigate('/')}>
      Go Home
    </Button>
  }
/>

<BlankTemplate variant="card" title="About Us">
  <AboutContent />
</BlankTemplate>
```

---

## Section Components (Complete API Reference)

### 1. Header Component - Navigation Header

```typescript
// Header with logo and navigation
import { Header, HeaderLogo, HeaderNav } from '@voilajsx/uikit/header';

// Header Props (complete interface)
interface HeaderProps {
  variant?: 'default' | 'primary' | 'black'; // Color scheme
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'; // Height and padding
  sticky?: boolean; // Sticky positioning (default: true)
  className?: string;
  children: React.ReactNode;
}

// HeaderNav Props (complete interface)
interface HeaderNavProps {
  items: Array<{
    key: string; // REQUIRED: Unique identifier
    label: string; // REQUIRED: Display text
    icon?: React.ComponentType; // Optional: Lucide icon
    isActive?: boolean; // Optional: Active state
    onClick?: () => void; // Optional: Click handler
    className?: string; // Optional: Custom styling
    items?: Array<{
      // Optional: Dropdown submenu
      key: string;
      label: string;
      icon?: React.ComponentType;
      isActive?: boolean;
      onClick?: () => void;
    }>;
  }>;
  className?: string;
}

// Standard Header Pattern
<Header variant="default" sticky={true}>
  <HeaderLogo>
    <div className="flex items-center gap-2">
      <img src="/logo.png" alt="Brand" className="h-8 w-8" />
      <span className="text-xl font-bold">Brand</span>
    </div>
  </HeaderLogo>
  <HeaderNav items={navigationItems} />
</Header>;

// Navigation Items Structure
const navigationItems = [
  { key: 'home', label: 'Home', isActive: true, onClick: () => {} },
  { key: 'about', label: 'About', onClick: () => {} },
  {
    key: 'services',
    label: 'Services',
    items: [
      // Dropdown menu
      { key: 'web', label: 'Web Design', onClick: () => {} },
      { key: 'mobile', label: 'Mobile Apps', onClick: () => {} },
    ],
  },
  { key: 'contact', label: 'Contact', onClick: () => {} },
];
```

### 2. Container Component - Content with Optional Sidebar

```typescript
// Content container with optional sidebar
import { Container } from '@voilajsx/uikit/container';

// Container Props (complete interface)
interface ContainerProps {
  variant?: 'default' | 'contained' | 'minimal';
  sidebar?: 'none' | 'left' | 'right'; // Sidebar position
  sidebarContent?: React.ReactNode | Array<NavigationItem>; // Sidebar content
  sidebarSticky?: boolean; // Sticky sidebar behavior (default: false)
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'; // Container width
  className?: string;
  children: React.ReactNode; // Main content
}

// NavigationItem Interface (for sidebarContent array)
interface NavigationItem {
  key: string; // REQUIRED: Unique identifier
  label: string; // REQUIRED: Display text (note: 'label' not 'title')
  icon?: React.ComponentType; // Optional: Lucide icon
  badge?: string; // Optional: Badge text
  isActive?: boolean; // Optional: Active state
  onClick?: () => void; // Optional: Click handler
  items?: Array<NavigationItem>; // Optional: Nested items (collapsible)
}

// Sidebar Content Patterns

// 1. Navigation Array (auto-rendered with collapsible support)
const sidebarNav = [
  { key: 'overview', label: 'Overview', icon: Home, isActive: true },
  { key: 'users', label: 'Users', icon: Users, badge: '12' },
  {
    key: 'settings',
    label: 'Settings',
    icon: Settings,
    items: [ // Creates collapsible submenu
      { key: 'general', label: 'General', onClick: () => {} },
      { key: 'security', label: 'Security', onClick: () => {} }
    ]
  }
];

// 2. Custom JSX Content
const customSidebar = (
  <nav className="p-4 space-y-2">
    <Button variant="ghost" className="w-full justify-start">
      <Home className="mr-2 h-4 w-4" />
      Dashboard
    </Button>
    <Button variant="ghost" className="w-full justify-start">
      <Users className="mr-2 h-4 w-4" />
      Users
    </Button>
  </nav>
);

// Standard Container Patterns
<Container sidebar="left" sidebarContent={sidebarNav} size="xl">
  <MainContent />
</Container>

<Container sidebar="right" sidebarContent={customSidebar} sidebarSticky={true}>
  <MainContent />
</Container>
```

### 3. Footer Component - Footer Layouts

```typescript
// Footer with multiple layout options
import { Footer, FooterBasic, FooterAdvanced, FooterBrand, FooterSocial } from '@voilajsx/uikit/footer';

// Footer Props (complete interface)
interface FooterProps {
  variant?: 'default' | 'muted' | 'dark'; // Color scheme
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'; // Width and padding
  className?: string;
  children: React.ReactNode;
}

// FooterBasic Props (simple footer)
interface FooterBasicProps {
  logo?: React.ReactNode; // Footer logo
  links?: Array<{ // Navigation links
    key: string;
    label: string;
    onClick: () => void;
    className?: string;
  }>;
  social?: React.ReactNode; // Social media links
  copyright?: React.ReactNode; // Copyright text
  className?: string;
}

// FooterAdvanced Props (multi-column footer)
interface FooterAdvancedProps {
  brand?: React.ReactNode; // Brand section (logo + description)
  columns?: Array<{ // Footer columns (up to 5)
    key: string;
    title: string;
    links: Array<{
      key: string;
      label: string;
      onClick: () => void;
    }>;
  }>;
  newsletter?: React.ReactNode; // Newsletter signup
  social?: React.ReactNode; // Social links
  legal?: React.ReactNode; // Legal links
  copyright?: React.ReactNode; // Copyright text
  className?: string;
}

// FooterSocial Props
interface FooterSocialProps {
  links: Array<{
    key: string;
    label: string; // For accessibility
    icon: React.ComponentType; // Lucide icon
    onClick: () => void;
    className?: string;
  }>;
  className?: string;
}

// Standard Footer Patterns
<Footer variant="default">
  <FooterBasic
    logo={<BrandLogo />}
    links={footerLinks}
    social={<FooterSocial links={socialLinks} />}
    copyright="© 2024 Company. All rights reserved."
  />
</Footer>

<Footer variant="dark">
  <FooterAdvanced
    brand={<FooterBrand logo={<Logo />} description="Company description" />}
    columns={footerColumns}
    social={<FooterSocial links={socialLinks} />}
    legal={<LegalLinks />}
    copyright="© 2024 Company"
  />
</Footer>
```

## Enhanced UI Components (Key Differences from shadcn/ui)

### DataTable - Enhanced Table with Search and Sort

```typescript
// Enhanced table component with built-in features
import { DataTable } from '@voilajsx/uikit/data-table';

// DataTable Props (UIKit-specific enhancement)
interface DataTableProps {
  columns: Array<{
    key: string; // REQUIRED: Data property key
    title: string; // REQUIRED: Column header text
    sortable?: boolean; // Optional: Enable sorting (default: true)
    render?: (value: any, row: object) => React.ReactNode; // Optional: Custom cell renderer
  }>;
  data: Array<object>; // REQUIRED: Table data
  searchable?: boolean; // Optional: Enable search (default: true)
  sortable?: boolean; // Optional: Enable global sorting (default: true)
  className?: string;
}

// Example Usage
const columns = [
  {
    key: 'name',
    title: 'Name',
    render: (value, row) => (
      <div>
        <div className="font-medium">{value}</div>
        <div className="text-sm text-muted-foreground">{row.email}</div>
      </div>
    ),
  },
  {
    key: 'role',
    title: 'Role',
    render: (value) => <Badge variant="secondary">{value}</Badge>,
  },
  {
    key: 'status',
    title: 'Status',
    render: (value) => (
      <Badge variant={value === 'Active' ? 'default' : 'destructive'}>
        {value}
      </Badge>
    ),
  },
  {
    key: 'actions',
    title: 'Actions',
    sortable: false, // Disable sorting for action column
    render: (_, row) => (
      <div className="flex gap-2">
        <Button variant="ghost" size="sm">
          Edit
        </Button>
        <Button variant="ghost" size="sm" className="text-destructive">
          Delete
        </Button>
      </div>
    ),
  },
];

<DataTable columns={columns} data={users} searchable sortable />;
```

### Form Components - React Hook Form Integration

```typescript
// Enhanced form integration (same API as shadcn/ui)
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from '@voilajsx/uikit/form';

// Standard React Hook Form pattern (unchanged from shadcn/ui)
const form = useForm({
  defaultValues: {
    email: '',
    password: '',
  },
});

<Form {...form}>
  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
    <FormField
      control={form.control}
      name="email"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Email</FormLabel>
          <FormControl>
            <Input placeholder="name@example.com" {...field} />
          </FormControl>
          <FormDescription>
            We'll never share your email with anyone else.
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
    <Button type="submit">Submit</Button>
  </form>
</Form>;
```

### Standard shadcn/ui Components (All Available)

```typescript
// All standard shadcn/ui components work exactly the same
import { Button } from '@voilajsx/uikit/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from '@voilajsx/uikit/card';
import { Input } from '@voilajsx/uikit/input';
import { Label } from '@voilajsx/uikit/label';
import { Textarea } from '@voilajsx/uikit/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@voilajsx/uikit/select';
import { Checkbox } from '@voilajsx/uikit/checkbox';
import { RadioGroup, RadioGroupItem } from '@voilajsx/uikit/radio-group';
import { Switch } from '@voilajsx/uikit/switch';
import { Slider } from '@voilajsx/uikit/slider';
import { Progress } from '@voilajsx/uikit/progress';
import { Badge } from '@voilajsx/uikit/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@voilajsx/uikit/avatar';
import { Separator } from '@voilajsx/uikit/separator';
import { Skeleton } from '@voilajsx/uikit/skeleton';
import { Alert, AlertTitle, AlertDescription } from '@voilajsx/uikit/alert';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
} from '@voilajsx/uikit/breadcrumb';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@voilajsx/uikit/tabs';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@voilajsx/uikit/accordion';
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from '@voilajsx/uikit/collapsible';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@voilajsx/uikit/dialog';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '@voilajsx/uikit/dropdown-menu';
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from '@voilajsx/uikit/hover-card';
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
} from '@voilajsx/uikit/menubar';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
} from '@voilajsx/uikit/pagination';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@voilajsx/uikit/popover';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from '@voilajsx/uikit/sheet';
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
} from '@voilajsx/uikit/table';
import {
  Toast,
  ToastProvider,
  ToastViewport,
  ToastTitle,
  ToastDescription,
} from '@voilajsx/uikit/toast';
import { Toggle } from '@voilajsx/uikit/toggle';
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from '@voilajsx/uikit/tooltip';
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from '@voilajsx/uikit/command';
import { Calendar } from '@voilajsx/uikit/calendar';

// All components maintain 100% API compatibility with shadcn/ui
// Only difference: Enhanced theming system built-in
```

---

## Complete Implementation Examples

### 1. Basic App Setup (REQUIRED PATTERN)

```jsx
/**
 * Basic application with theme provider setup
 * @module @voilajsx/uikit
 * @file examples/basic-app.jsx
 */

import { ThemeProvider } from '@voilajsx/uikit/theme-provider';
import { Button } from '@voilajsx/uikit/button';
import { Card, CardHeader, CardTitle, CardContent } from '@voilajsx/uikit/card';
import '@voilajsx/uikit/styles';

function App() {
  return (
    <ThemeProvider theme="studio" variant="light" detectSystem={true}>
      <div className="min-h-screen bg-background p-6">
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle>Welcome to UIKit</CardTitle>
          </CardHeader>
          <CardContent>
            <Button className="w-full">Get Started</Button>
          </CardContent>
        </Card>
      </div>
    </ThemeProvider>
  );
}

export default App;
```

### 2. Complete Page Layout

```jsx
/**
 * Complete page using Page template with all sections
 * @module @voilajsx/uikit
 * @file examples/complete-page.jsx
 */

import {
  Page,
  PageHeader,
  PageContent,
  PageFooter,
} from '@voilajsx/uikit/page';
import { HeaderLogo, HeaderNav } from '@voilajsx/uikit/header';
import { FooterBasic } from '@voilajsx/uikit/footer';
import { Button } from '@voilajsx/uikit/button';
import { Card, CardContent } from '@voilajsx/uikit/card';

function HomePage() {
  const navigationItems = [
    { key: 'home', label: 'Home', isActive: true, onClick: () => {} },
    { key: 'about', label: 'About', onClick: () => {} },
    { key: 'services', label: 'Services', onClick: () => {} },
    { key: 'contact', label: 'Contact', onClick: () => {} },
  ];

  const footerLinks = [
    { key: 'privacy', label: 'Privacy Policy', onClick: () => {} },
    { key: 'terms', label: 'Terms of Service', onClick: () => {} },
    { key: 'support', label: 'Support', onClick: () => {} },
  ];

  return (
    <Page variant="default" size="xl">
      <PageHeader variant="default" sticky={true}>
        <HeaderLogo>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg"></div>
            <span className="text-xl font-bold">Brand</span>
          </div>
        </HeaderLogo>
        <HeaderNav items={navigationItems} />
      </PageHeader>

      <PageContent>
        <div className="space-y-12">
          <section className="text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to Our Platform</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Build amazing applications with our comprehensive UI kit.
            </p>
            <Button size="lg">Get Started Today</Button>
          </section>

          <section className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold mb-2">Feature One</h3>
                <p className="text-muted-foreground">
                  Description of the first feature.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold mb-2">Feature Two</h3>
                <p className="text-muted-foreground">
                  Description of the second feature.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold mb-2">Feature Three</h3>
                <p className="text-muted-foreground">
                  Description of the third feature.
                </p>
              </CardContent>
            </Card>
          </section>
        </div>
      </PageContent>

      <PageFooter variant="default">
        <FooterBasic
          logo={<span className="font-bold">Brand</span>}
          links={footerLinks}
          copyright="© 2024 Brand. All rights reserved."
        />
      </PageFooter>
    </Page>
  );
}

export default HomePage;
```

### 3. Admin Dashboard (COMPLETE EXAMPLE)

```jsx
/**
 * Complete admin dashboard with all features
 * @module @voilajsx/uikit
 * @file examples/admin-dashboard.jsx
 */

import { AdminTemplate } from '@voilajsx/uikit/admin';
import { Card, CardHeader, CardTitle, CardContent } from '@voilajsx/uikit/card';
import { Button } from '@voilajsx/uikit/button';
import { Badge } from '@voilajsx/uikit/badge';
import { useTheme } from '@voilajsx/uikit/theme-provider';
import {
  Home,
  Users,
  BarChart3,
  Settings,
  Bell,
  Sun,
  Moon,
} from 'lucide-react';

function AdminDashboard() {
  const { variant, toggleVariant } = useTheme();

  const navigationItems = [
    {
      key: 'dashboard',
      label: 'Dashboard', // ✅ CHANGED: was 'title', now 'label'
      icon: Home,
      path: '/admin',
      isActive: true,
      section: 'main',
    },
    {
      key: 'users',
      label: 'User Management', // ✅ CHANGED: was 'title', now 'label'
      icon: Users,
      path: '/admin/users',
      badge: '24',
      section: 'main',
    },
    {
      key: 'analytics',
      label: 'Analytics', // ✅ CHANGED: was 'title', now 'label'
      icon: BarChart3,
      section: 'main',
      items: [
        // ✅ CHANGED: was 'submenu', now 'items'
        {
          key: 'overview',
          label: 'Overview', // ✅ CHANGED: was 'title', now 'label'
          path: '/admin/analytics',
        },
        {
          key: 'reports',
          label: 'Reports', // ✅ CHANGED: was 'title', now 'label'
          path: '/admin/analytics/reports',
        },
      ],
    },
    {
      key: 'settings',
      label: 'Settings', // ✅ CHANGED: was 'title', now 'label'
      icon: Settings,
      path: '/admin/settings',
      section: 'system',
    },
  ];

  const headerActions = (
    <div className="flex items-center gap-2">
      <Button variant="ghost" size="icon">
        <Bell className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="icon" onClick={toggleVariant}>
        {variant === 'light' ? (
          <Moon className="h-4 w-4" />
        ) : (
          <Sun className="h-4 w-4" />
        )}
      </Button>
    </div>
  );

  return (
    <AdminTemplate
      variant="default"
      size="default"
      title="Admin Dashboard"
      navigationItems={navigationItems}
      currentPath="/admin"
      onNavigate={(path) => console.log('Navigate to:', path)}
      headerActions={headerActions}
    >
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back! Here's what's happening with your platform.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,234</div>
              <div className="flex items-center pt-1">
                <Badge variant="default" className="text-xs">
                  +12%
                </Badge>
                <span className="text-xs text-muted-foreground ml-2">
                  from last month
                </span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Revenue</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$45,231</div>
              <div className="flex items-center pt-1">
                <Badge variant="default" className="text-xs">
                  +5%
                </Badge>
                <span className="text-xs text-muted-foreground ml-2">
                  from last month
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminTemplate>
  );
}

export default AdminDashboard;
```

### 4. Authentication Page

```jsx
/**
 * Complete authentication page with card variant
 * @module @voilajsx/uikit
 * @file examples/auth-page.jsx
 */

import { AuthTemplate } from '@voilajsx/uikit/auth';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@voilajsx/uikit/form';
import { Input } from '@voilajsx/uikit/input';
import { Button } from '@voilajsx/uikit/button';
import { Checkbox } from '@voilajsx/uikit/checkbox';
import { useForm } from 'react-hook-form';

function LoginPage() {
  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
      remember: false,
    },
  });

  const onSubmit = (data) => {
    console.log('Login attempt:', data);
  };

  const logo = (
    <div className="flex items-center justify-center w-16 h-16 bg-primary rounded-xl">
      <span className="text-2xl font-bold text-primary-foreground">L</span>
    </div>
  );

  return (
    <AuthTemplate
      variant="card"
      title="Welcome back"
      subtitle="Sign in to your account to continue"
      logo={logo}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email address</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="name@example.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="remember"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel className="text-sm font-normal">
                    Remember me for 30 days
                  </FormLabel>
                </div>
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">
            Sign in
          </Button>
        </form>
      </Form>
    </AuthTemplate>
  );
}

export default LoginPage;
```

### 5. Theme Selector Component

```jsx
/**
 * Complete theme selector with all available themes
 * @module @voilajsx/uikit
 * @file examples/theme-selector.jsx
 */

import { useTheme } from '@voilajsx/uikit/theme-provider';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@voilajsx/uikit/select';
import { Switch } from '@voilajsx/uikit/switch';
import { Label } from '@voilajsx/uikit/label';
import { Button } from '@voilajsx/uikit/button';
import { Card, CardHeader, CardTitle, CardContent } from '@voilajsx/uikit/card';
import { Palette, Sun, Moon } from 'lucide-react';

function ThemeSelector() {
  const { theme, variant, setTheme, setVariant, toggleVariant } = useTheme();

  const themes = [
    {
      id: 'default',
      name: 'Default',
      description: 'Ocean blue professional colors',
    },
    {
      id: 'aurora',
      name: 'Aurora',
      description: 'Northern lights purple-green gradients',
    },
    {
      id: 'metro',
      name: 'Metro',
      description: 'Clean transit-inspired gray-blue design',
    },
    {
      id: 'neon',
      name: 'Neon',
      description: 'Electric cyberpunk magenta-cyan colors',
    },
    {
      id: 'ruby',
      name: 'Ruby',
      description: 'Sophisticated red with gold accents',
    },
    {
      id: 'studio',
      name: 'Studio',
      description: 'Designer grays with amber accent',
    },
  ];

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Palette className="h-5 w-5" />
          Theme Preferences
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-3">
          <Label htmlFor="theme-select" className="text-base font-medium">
            Choose Theme
          </Label>
          <Select value={theme} onValueChange={setTheme}>
            <SelectTrigger id="theme-select">
              <SelectValue placeholder="Select a theme" />
            </SelectTrigger>
            <SelectContent>
              {themes.map((themeOption) => (
                <SelectItem key={themeOption.id} value={themeOption.id}>
                  <div>
                    <div className="font-medium">{themeOption.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {themeOption.description}
                    </div>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-3">
          <Label className="text-base font-medium">Color Mode</Label>
          <div className="flex items-center justify-between rounded-lg border p-3">
            <div className="space-y-0.5">
              <Label htmlFor="dark-mode-switch" className="text-sm font-medium">
                Dark Mode
              </Label>
              <div className="text-xs text-muted-foreground">
                Switch between light and dark appearance
              </div>
            </div>
            <Switch
              id="dark-mode-switch"
              checked={variant === 'dark'}
              onCheckedChange={(checked) =>
                setVariant(checked ? 'dark' : 'light')
              }
            />
          </div>
        </div>

        <Button
          variant="outline"
          size="sm"
          className="w-full"
          onClick={toggleVariant}
        >
          {variant === 'light' ? (
            <Moon className="mr-2 h-4 w-4" />
          ) : (
            <Sun className="mr-2 h-4 w-4" />
          )}
          Toggle to {variant === 'light' ? 'Dark' : 'Light'} Mode
        </Button>
      </CardContent>
    </Card>
  );
}

export default ThemeSelector;
```

## Critical Code Generation Rules

### 1. ALWAYS Required Setup

```jsx
// ALWAYS wrap your entire app
<ThemeProvider theme="studio" variant="light" detectSystem={true}>
  <App />
</ThemeProvider>;

// ALWAYS import styles
import '@voilajsx/uikit/styles';
```

### 2. Navigation Structure Requirements

**Unified Navigation Structure (all components use 'label' and 'items'):**

```jsx
// ✅ ALL navigation components now use the SAME structure
const navigationItems = [
  {
    key: 'unique-id',    // REQUIRED
    label: 'Display Name', // REQUIRED (unified: all components use 'label')
    icon: LucideIcon,     // Optional
    path: '/path',        // Optional
    isActive: boolean,    // Optional
    section: 'main',      // Optional (AdminTemplate only)
    items: [...]          // Optional (unified: all components use 'items')
  }
];

// ✅ Works with AdminTemplate
<AdminTemplate navigationItems={navigationItems} />

// ✅ Works with Container
<Container sidebarContent={navigationItems} />

// ✅ Works with HeaderNav
<HeaderNav items={navigationItems} />
```

### 3. Template Selection Guide

```jsx
// Choose the right template:
Page; // Full website with header/footer
AdminTemplate; // Dashboard with sidebar
AuthTemplate; // Login/signup pages
BlankTemplate; // Simple content/error pages
Container; // Content section with optional sidebar
```

### 4. Theme Usage Patterns

```jsx
const { theme, variant, setTheme, setVariant, toggleVariant } = useTheme();

// All 6 themes available:
'default' | 'aurora' | 'metro' | 'neon' | 'ruby' | 'studio';

// Variants:
'light' | 'dark';
```

### 5. DataTable Usage

```jsx
const columns = [
  {
    key: 'dataProperty', // REQUIRED: matches data object key
    title: 'Column Header', // REQUIRED: display text
    render: (value, row) => <Custom />, // Optional: custom renderer
  },
];

<DataTable columns={columns} data={arrayOfObjects} />;
```

### 6. Responsive Classes

```jsx
// ALWAYS include responsive breakpoints
className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4';
```

### 7. Icon Usage

```jsx
// ALWAYS use Lucide React icons
import { Home, Users, Settings } from 'lucide-react';
```

### 8. Common Prop Patterns

```jsx
// Size props (most components)
size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'

// Variant props (color schemes)
variant?: 'default' | 'primary' | 'black'  // For headers/sidebars
variant?: 'default' | 'muted' | 'dark'     // For footers
variant?: 'simple' | 'card' | 'split-gradient' // For auth templates
```

### 9. File Structure Requirements

```jsx
/**
 * Brief description of what the file does
 * @module @voilajsx/uikit
 * @file path/to/filename.jsx
 */
```

### 10. Zero Migration from shadcn/ui

```jsx
// Just change the import path - everything else stays the same
- import { Button } from "@/components/ui/button"
+ import { Button } from "@voilajsx/uikit/button"

// All props, APIs, and usage patterns remain identical
<Button variant="default" size="lg">Same API</Button>
```

---
