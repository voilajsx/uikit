# @voilajsx/uikit - COMPLETE LLM Usage Guide v2.0

## 🎯 QUICK START (30 SECONDS)

### STEP 1: Required Setup (COPY-PASTE EVERY PROJECT)

```jsx
import { ThemeProvider } from '@voilajsx/uikit/theme-provider';
import '@voilajsx/uikit/styles'; // ← CRITICAL: Must import this

function App() {
  return (
    <ThemeProvider theme="default" mode="light">
      {/* Your app goes here */}
    </ThemeProvider>
  );
}
```

### STEP 2: Component Selection (FOLLOW THIS DECISION TREE)

```
What are you building?
├── Dashboard/Admin Panel → AdminLayout
├── Company Website → PageLayout
├── Login/Signup Page → AuthLayout
├── Error/About Page → BlankLayout
└── Chrome Extension/Popup → PopupLayout
```

---

## 📋 COMPONENT PATTERNS (ONLY 2 TYPES)

### 🏗️ COMPOUND LAYOUTS (Use Child Components)

**AdminLayout & PageLayout ONLY**

```jsx
// ✅ CORRECT - Use child components
<AdminLayout scheme="sidebar" tone="subtle">
  <AdminLayout.Header title="Dashboard" />
  <AdminLayout.Sidebar navigation={nav} />
  <AdminLayout.Content>
    <YourContent />
  </AdminLayout.Content>
</AdminLayout>

// ❌ WRONG - Don't pass direct children
<AdminLayout>
  <YourContent /> {/* This breaks */}
</AdminLayout>
```

### 📄 SINGLE LAYOUTS (Direct Children)

**AuthLayout, BlankLayout, PopupLayout**

```jsx
// ✅ CORRECT - Pass content directly
<AuthLayout scheme="card" tone="clean">
  <LoginForm />
</AuthLayout>

// ❌ WRONG - Don't use child components
<AuthLayout>
  <AuthLayout.Content>Form</AuthLayout.Content> {/* No such thing */}
</AuthLayout>
```

---

## 🎨 PROPS SYSTEM (3 CORE PROPS EVERYWHERE)

### Standard Props (Same for ALL components)

```jsx
<AnyLayout
  scheme="specific-to-component"  // Layout structure
  tone="clean|subtle|brand|contrast"  // Visual emphasis
  size="sm|md|lg|xl|full"        // Component size
>
```

### Scheme Options by Component

```jsx
AdminLayout: scheme = 'sidebar|compact';
PageLayout: scheme = 'default|sidebar';
AuthLayout: scheme = 'simple|card|split|hero';
BlankLayout: scheme = 'simple|card';
PopupLayout: scheme = 'modal|drawer|floating';
```

### Size Configurations (Exact Measurements)

```jsx
size = 'sm'; // Sidebars: 192px, Content: max-w-2xl, Padding: 16px
size = 'md'; // Sidebars: 224px, Content: max-w-4xl, Padding: 20px
size = 'lg'; // Sidebars: 256px, Content: max-w-6xl, Padding: 24px (DEFAULT)
size = 'xl'; // Sidebars: 288px, Content: max-w-7xl, Padding: 28px
size = 'full'; // Sidebars: 320px, Content: max-w-full, Padding: 32px
```

### Tone Visual Guide

```jsx
tone = 'clean'; // Pure white/light backgrounds (websites, auth)
tone = 'subtle'; // Light gray backgrounds (admin panels, professional)
tone = 'brand'; // Primary colored backgrounds (headers, CTAs, emphasis)
tone = 'contrast'; // Dark/bold backgrounds (footers, high contrast areas)
```

---

## 🧩 ALL UI COMPONENTS (35 TOTAL)

### Form & Input Components

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

// Usage
<div className="space-y-4">
  <Label className="text-foreground">Email</Label>
  <Input placeholder="Enter email" className="bg-background border-border" />
  <Button className="bg-primary text-primary-foreground">Submit</Button>
</div>;
```

### Display & Layout Components

```jsx
import {
  Card,
  CardHeader,
  CardTitle,
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

// Usage
<Card className="bg-card border-border">
  <CardHeader>
    <CardTitle className="text-foreground">Title</CardTitle>
  </CardHeader>
  <CardContent className="text-muted-foreground">Content here</CardContent>
</Card>;
```

### Navigation & Menu Components

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

// Usage
<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button className="bg-background border-border">Open</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent className="bg-popover border-border">
    <DropdownMenuItem className="text-foreground">Item 1</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>;
```

### Overlay & Modal Components

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

// Usage
<Dialog>
  <DialogTrigger asChild>
    <Button className="bg-primary text-primary-foreground">Open Dialog</Button>
  </DialogTrigger>
  <DialogContent className="bg-background border-border">
    <DialogHeader>
      <DialogTitle className="text-foreground">Dialog Title</DialogTitle>
    </DialogHeader>
    <p className="text-muted-foreground">Dialog content</p>
  </DialogContent>
</Dialog>;
```

### Data & Table Components

```jsx
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from '@voilajsx/uikit/table';
import { DataTable } from '@voilajsx/uikit/data-table';
import { Calendar } from '@voilajsx/uikit/calendar';
import { Toaster } from '@voilajsx/uikit/sonner';

// Usage
<Table className="bg-background">
  <TableHeader>
    <TableRow className="border-border">
      <TableHead className="text-foreground">Name</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow className="border-border">
      <TableCell className="text-foreground">John</TableCell>
    </TableRow>
  </TableBody>
</Table>;
```

---

## 🧭 NAVIGATION SYSTEM (COMPLETE GUIDE)

### Basic Navigation Structure

```jsx
const navigation = [
  {
    key: 'unique-id', // REQUIRED: Unique identifier
    label: 'Display Text', // REQUIRED: What users see
    href: '/path', // For page navigation
    onClick: () => {}, // For actions/functions
    icon: HomeIcon, // Lucide React icon (optional)
    badge: 'New', // Notification badge (optional)
    isActive: true, // Current page indicator (optional)
    className: 'custom-css', // Additional styling (optional)
  },
];
```

### Advanced Navigation with Submenus

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
    key: 'analytics',
    label: 'Analytics',
    icon: BarChart3,
    badge: '5',
    items: [
      // Submenu items (max 2 levels)
      {
        key: 'overview',
        label: 'Overview',
        href: '/admin/analytics/overview',
      },
      {
        key: 'reports',
        label: 'Reports',
        href: '/admin/analytics/reports',
        badge: 'New',
      },
    ],
  },
];
```

### Navigation Handler Function

```jsx
const handleNavigation = (href, item) => {
  if (item.onClick) {
    item.onClick(); // Execute custom function
  } else if (href) {
    // Handle routing based on your app
    window.location.href = href; // Simple navigation
    // navigate(href);                  // React Router
    // router.push(href);               // Next.js
  }
};
```

---

## 🏗️ SECTION COMPONENTS (Advanced Usage)

### Header Component (Standalone)

```jsx
import { Header, HeaderLogo, HeaderNav } from '@voilajsx/uikit/header';

<Header tone="clean" size="xl" position="sticky">
  <HeaderLogo>
    <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
  </HeaderLogo>
  <HeaderNav
    navigation={navigation}
    currentPath="/current"
    onNavigate={handleNavigation}
  />
</Header>;
```

### Footer Component (Standalone)

```jsx
import { Footer } from '@voilajsx/uikit/footer';

<Footer tone="contrast" size="xl" position="relative">
  <div className="text-center py-4">
    <p className="text-sm text-muted-foreground">© 2024 Company</p>
  </div>
</Footer>;
```

### Container Component (Content with Sidebar)

```jsx
import { Container } from '@voilajsx/uikit/container';

<Container
  tone="clean"
  size="xl"
  sidebar="left"
  navigation={sidebarNav}
  currentPath="/current"
  onNavigate={handleNavigation}
>
  <MainContent />
</Container>;
```

---

## 🚀 COMPLETE USAGE EXAMPLES

### 1. Admin Dashboard (Full Example)

```jsx
import { AdminLayout } from '@voilajsx/uikit/admin';
import { Card, CardHeader, CardTitle, CardContent } from '@voilajsx/uikit/card';
import { Button } from '@voilajsx/uikit/button';
import { Badge } from '@voilajsx/uikit/badge';
import { ThemeProvider } from '@voilajsx/uikit/theme-provider';
import { Home, Users, BarChart3, Settings } from 'lucide-react';
import '@voilajsx/uikit/styles';

const navigation = [
  {
    key: 'dashboard',
    label: 'Dashboard',
    href: '/admin',
    icon: Home,
    isActive: true,
  },
  {
    key: 'users',
    label: 'Users',
    href: '/admin/users',
    icon: Users,
    badge: '12',
  },
  {
    key: 'analytics',
    label: 'Analytics',
    icon: BarChart3,
    items: [
      { key: 'overview', label: 'Overview', href: '/admin/analytics' },
      { key: 'reports', label: 'Reports', href: '/admin/analytics/reports' },
    ],
  },
  {
    key: 'settings',
    label: 'Settings',
    href: '/admin/settings',
    icon: Settings,
  },
];

function AdminDashboard() {
  return (
    <ThemeProvider theme="default" mode="light">
      <AdminLayout scheme="sidebar" tone="subtle" size="lg">
        <AdminLayout.Header
          title="Admin Dashboard"
          breadcrumbs={[
            { label: 'Admin', href: '/admin' },
            { label: 'Dashboard' },
          ]}
          actions={
            <Button className="bg-primary text-primary-foreground">
              New Item
            </Button>
          }
        />
        <AdminLayout.Sidebar
          navigation={navigation}
          currentPath="/admin"
          onNavigate={(href) => (window.location.href = href)}
          logo={
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg"></div>
              <span className="text-xl font-bold text-foreground">Admin</span>
            </div>
          }
        />
        <AdminLayout.Content>
          <div className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card className="bg-card text-card-foreground border-border">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-foreground">
                    Total Users
                  </CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">
                    1,234
                  </div>
                  <Badge className="mt-1">+12% from last month</Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </AdminLayout.Content>
      </AdminLayout>
    </ThemeProvider>
  );
}
```

### 2. Company Website (Full Example)

```jsx
import { PageLayout } from '@voilajsx/uikit/page';
import { Button } from '@voilajsx/uikit/button';
import { Card, CardContent } from '@voilajsx/uikit/card';
import { ThemeProvider } from '@voilajsx/uikit/theme-provider';
import '@voilajsx/uikit/styles';

const navigation = [
  { key: 'home', label: 'Home', href: '/', isActive: true },
  { key: 'about', label: 'About', href: '/about' },
  { key: 'services', label: 'Services', href: '/services' },
  { key: 'contact', label: 'Contact', href: '/contact' },
];

const footerNavigation = [
  { key: 'privacy', label: 'Privacy Policy', href: '/privacy' },
  { key: 'terms', label: 'Terms of Service', href: '/terms' },
];

function Website() {
  return (
    <ThemeProvider theme="default" mode="light">
      <PageLayout scheme="default" tone="clean" size="xl">
        <PageLayout.Header
          navigation={navigation}
          currentPath="/"
          onNavigate={(href) => (window.location.href = href)}
          title="My Company"
          actions={
            <Button className="bg-primary text-primary-foreground">
              Get Started
            </Button>
          }
        />
        <PageLayout.Content>
          <div className="space-y-12">
            <section className="text-center py-12">
              <h1 className="text-4xl font-bold text-foreground mb-4">
                Welcome to Our Platform
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Build amazing applications with our comprehensive UI kit.
              </p>
              <Button size="lg" className="bg-primary text-primary-foreground">
                Get Started Today
              </Button>
            </section>

            <section className="grid md:grid-cols-3 gap-6">
              <Card className="bg-card text-card-foreground border-border">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Feature One
                  </h3>
                  <p className="text-muted-foreground">
                    Description of the first amazing feature.
                  </p>
                </CardContent>
              </Card>
            </section>
          </div>
        </PageLayout.Content>
        <PageLayout.Footer
          navigation={footerNavigation}
          copyright="© 2024 My Company. All rights reserved."
        />
      </PageLayout>
    </ThemeProvider>
  );
}
```

### 3. Login Page (Full Example)

```jsx
import { AuthLayout } from '@voilajsx/uikit/auth';
import { Button } from '@voilajsx/uikit/button';
import { Input } from '@voilajsx/uikit/input';
import { Label } from '@voilajsx/uikit/label';
import { Checkbox } from '@voilajsx/uikit/checkbox';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@voilajsx/uikit/form';
import { ThemeProvider } from '@voilajsx/uikit/theme-provider';
import { useForm } from 'react-hook-form';
import '@voilajsx/uikit/styles';

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

  return (
    <ThemeProvider theme="default" mode="light">
      <AuthLayout
        scheme="card"
        tone="clean"
        size="md"
        title="Welcome back"
        subtitle="Sign in to your account to continue"
        logo={
          <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center">
            <span className="text-2xl font-bold text-primary-foreground">
              L
            </span>
          </div>
        }
      >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground">
                    Email address
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="name@example.com"
                      className="bg-background text-foreground border-border"
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
                  <FormLabel className="text-foreground">Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter your password"
                      className="bg-background text-foreground border-border"
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
                  <FormLabel className="text-sm font-normal text-foreground">
                    Remember me for 30 days
                  </FormLabel>
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full bg-primary text-primary-foreground"
            >
              Sign in
            </Button>
          </form>
        </Form>
      </AuthLayout>
    </ThemeProvider>
  );
}
```

### 4. Chrome Extension Popup (Full Example)

```jsx
import { PopupLayout } from '@voilajsx/uikit/popup';
import { ThemeProvider } from '@voilajsx/uikit/theme-provider';
import { Button } from '@voilajsx/uikit/button';
import { Badge } from '@voilajsx/uikit/badge';
import { Switch } from '@voilajsx/uikit/switch';
import { Card, CardContent } from '@voilajsx/uikit/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@voilajsx/uikit/tabs';
import { Zap, Settings } from 'lucide-react';
import { useState } from 'react';
import '@voilajsx/uikit/styles';

function ChromeExtension() {
  const [isEnabled, setIsEnabled] = useState(true);
  const [autoMode, setAutoMode] = useState(false);

  return (
    <ThemeProvider theme="default" mode="light">
      <PopupLayout
        scheme="modal"
        tone="clean"
        size="md"
        title="Page Optimizer"
        subtitle="Boost your browsing experience"
        logo={
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Zap className="h-4 w-4 text-primary-foreground" />
          </div>
        }
        badge={
          <Badge
            className={
              isEnabled
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary text-secondary-foreground'
            }
          >
            {isEnabled ? 'Active' : 'Inactive'}
          </Badge>
        }
        footer={
          <div className="flex gap-2">
            <Button
              size="sm"
              className="flex-1 bg-primary text-primary-foreground"
            >
              Open Dashboard
            </Button>
            <Button variant="outline" size="sm" className="border-border">
              <Settings className="h-4 w-4" />
            </Button>
          </div>
        }
      >
        <Tabs defaultValue="controls" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-4 bg-muted">
            <TabsTrigger value="controls" className="text-foreground">
              Controls
            </TabsTrigger>
            <TabsTrigger value="stats" className="text-foreground">
              Stats
            </TabsTrigger>
          </TabsList>

          <TabsContent value="controls" className="space-y-4 mt-0">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-medium text-foreground">
                  Enable Extension
                </div>
                <div className="text-xs text-muted-foreground">
                  Activate page optimization
                </div>
              </div>
              <Switch checked={isEnabled} onCheckedChange={setIsEnabled} />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-medium text-foreground">
                  Auto Mode
                </div>
                <div className="text-xs text-muted-foreground">
                  Automatically optimize pages
                </div>
              </div>
              <Switch
                checked={autoMode}
                onCheckedChange={setAutoMode}
                disabled={!isEnabled}
              />
            </div>

            <Card className="bg-card text-card-foreground border-border">
              <CardContent className="p-3">
                <div className="text-center">
                  <div className="text-lg font-bold text-primary">247</div>
                  <div className="text-xs text-muted-foreground">
                    Pages optimized today
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="stats" className="space-y-3 mt-0">
            <div className="grid grid-cols-2 gap-3">
              <Card className="bg-card text-card-foreground border-border">
                <CardContent className="p-3 text-center">
                  <div className="text-lg font-bold text-foreground">1.2K</div>
                  <div className="text-xs text-muted-foreground">This week</div>
                </CardContent>
              </Card>
              <Card className="bg-card text-card-foreground border-border">
                <CardContent className="p-3 text-center">
                  <div className="text-lg font-bold text-foreground">15K</div>
                  <div className="text-xs text-muted-foreground">All time</div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </PopupLayout>
    </ThemeProvider>
  );
}
```

---

## 🎨 COLOR SYSTEM (COMPLETE REFERENCE)

### ✅ Semantic Color Classes (ALWAYS USE)

```jsx
// Background Colors
className = 'bg-background'; // Main page background
className = 'bg-card'; // Card/panel backgrounds
className = 'bg-popover'; // Dropdown/modal backgrounds
className = 'bg-muted'; // Subtle background areas
className = 'bg-primary'; // Primary buttons/brand elements
className = 'bg-secondary'; // Secondary buttons/elements
className = 'bg-destructive'; // Error/danger elements

// Text Colors
className = 'text-foreground'; // Primary text
className = 'text-muted-foreground'; // Secondary/subtle text
className = 'text-card-foreground'; // Text on card backgrounds
className = 'text-primary-foreground'; // Text on primary elements
className = 'text-secondary-foreground'; // Text on secondary elements
className = 'text-destructive'; // Error text

// Border Colors
className = 'border-border'; // Standard borders
className = 'border-input'; // Input field borders
className = 'border-primary'; // Primary colored borders
```

### ❌ Hardcoded Colors (NEVER USE)

```jsx
// These break in dark mode and don't match themes
className = 'bg-white text-black';
className = 'bg-blue-500 text-white';
className = 'border-gray-200';
className = 'bg-red-500';
className = 'text-green-600';
```

---

## 🎯 THEME SYSTEM (2-LEVEL SYSTEM)

### Level 1: Global Theme (Set Once in ThemeProvider)

```jsx
<ThemeProvider theme="aurora" mode="dark">
  {/* Affects ALL components globally */}
</ThemeProvider>;

// Available Themes:
theme = 'default'; // Professional blue - business apps
theme = 'aurora'; // Purple/green - creative apps
theme = 'metro'; // Transit blue - admin dashboards
theme = 'neon'; // Electric colors - gaming/tech
theme = 'ruby'; // Red/gold - luxury brands
theme = 'studio'; // Designer grays - creative tools

// Available Modes:
mode = 'light'; // Light color scheme
mode = 'dark'; // Dark color scheme
```

### Level 2: Component Tone (Per Component)

```jsx
<AdminLayout tone="subtle">      // Professional gray backgrounds
<Header tone="brand">            // Primary colored backgrounds
<Footer tone="contrast">         // High contrast/dark backgrounds
<AuthLayout tone="clean">        // Pure white/clean backgrounds

// Tone Meanings:
tone="clean"     // Pure, minimal, white/light backgrounds
tone="subtle"    // Muted, professional, gray backgrounds
tone="brand"     // Primary colored, branded elements
tone="contrast"  // High emphasis, dark/bold backgrounds
```

---

## 🔧 INTEGRATION EXAMPLES

### React Router Integration

```jsx
import { useNavigate, useLocation } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (href, item) => {
    if (item.onClick) {
      item.onClick();
    } else if (href) {
      navigate(href);
    }
  };

  return (
    <AdminLayout>
      <AdminLayout.Sidebar
        navigation={navigation}
        currentPath={location.pathname}
        onNavigate={handleNavigation}
      />
    </AdminLayout>
  );
}
```

### Next.js Integration

```jsx
import { useRouter } from 'next/router';

function App() {
  const router = useRouter();

  const handleNavigation = (href, item) => {
    if (item.onClick) {
      item.onClick();
    } else if (href) {
      router.push(href);
    }
  };

  return (
    <PageLayout>
      <PageLayout.Header
        navigation={navigation}
        currentPath={router.pathname}
        onNavigate={handleNavigation}
      />
    </PageLayout>
  );
}
```

### Form Library Integration (React Hook Form)

```jsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

function LoginForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground">Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter email"
                  className="bg-background border-border"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
```

### State Management Integration

```jsx
import { useStore } from '@/store';

function Dashboard() {
  const { user, notifications, updateUser } = useStore();

  const navigation = [
    {
      key: 'notifications',
      label: 'Notifications',
      href: '/notifications',
      badge: notifications.length.toString(),
    },
  ];

  return (
    <AdminLayout>
      <AdminLayout.Header
        title={`Welcome, ${user.name}`}
        actions={
          <Button onClick={() => updateUser({ lastSeen: new Date() })}>
            Update Profile
          </Button>
        }
      />
      <AdminLayout.Sidebar navigation={navigation} />
    </AdminLayout>
  );
}
```

---

## ⚠️ ERROR HANDLING & VALIDATION

### Common Errors and Solutions

```jsx
// ❌ ERROR: "Cannot read properties of undefined"
// CAUSE: Missing ThemeProvider or styles import
// SOLUTION: Always wrap app and import styles
import '@voilajsx/uikit/styles';
<ThemeProvider theme="default" mode="light">
  <App />
</ThemeProvider>

// ❌ ERROR: "AdminLayout.Header is not a function"
// CAUSE: Using single pattern on compound component
// SOLUTION: Use compound components for AdminLayout/PageLayout
<AdminLayout>
  <AdminLayout.Header /> {/* ✅ Correct */}
</AdminLayout>

// ❌ ERROR: Colors not working/showing default browser colors
// CAUSE: Using hardcoded colors instead of semantic colors
// SOLUTION: Use semantic color classes
className="bg-background text-foreground" {/* ✅ Correct */}

// ❌ ERROR: Navigation not working
// CAUSE: Missing key or label properties
// SOLUTION: Include required navigation structure
{
  key: 'home',        // ✅ Required
  label: 'Home',      // ✅ Required
  href: '/'           // ✅ Include href or onClick
}
```

### Development Warnings

```jsx
// Add to your components for development validation
if (process.env.NODE_ENV === 'development') {
  // Check for missing required props
  if (!navigation.every((item) => item.key && item.label)) {
    console.warn('Navigation items missing required key or label');
  }

  // Check for hardcoded colors in className
  if (className?.includes('bg-white') || className?.includes('text-black')) {
    console.warn('Avoid hardcoded colors, use semantic colors instead');
  }
}
```

---

## 🎯 ADVANCED PATTERNS

### Custom Theme Integration

```jsx
// Create custom theme toggle
import { useTheme } from '@voilajsx/uikit/theme-provider';

function ThemeToggle() {
  const { theme, mode, setTheme, setMode, toggleMode } = useTheme();

  return (
    <div className="flex items-center gap-2">
      <select
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
        className="bg-background border-border text-foreground"
      >
        <option value="default">Default</option>
        <option value="aurora">Aurora</option>
        <option value="neon">Neon</option>
      </select>

      <Button
        variant="outline"
        size="sm"
        onClick={toggleMode}
        className="border-border"
      >
        {mode === 'light' ? '🌙' : '☀️'}
      </Button>
    </div>
  );
}
```

### Dynamic Navigation

```jsx
// Navigation that changes based on user role
function useNavigationByRole(userRole) {
  const baseNavigation = [
    { key: 'dashboard', label: 'Dashboard', href: '/dashboard', icon: Home },
  ];

  const adminNavigation = [
    ...baseNavigation,
    { key: 'users', label: 'Users', href: '/admin/users', icon: Users },
    {
      key: 'settings',
      label: 'Settings',
      href: '/admin/settings',
      icon: Settings,
    },
  ];

  return userRole === 'admin' ? adminNavigation : baseNavigation;
}

function App() {
  const { user } = useAuth();
  const navigation = useNavigationByRole(user.role);

  return (
    <AdminLayout>
      <AdminLayout.Sidebar navigation={navigation} />
    </AdminLayout>
  );
}
```

### Responsive Layout Switching

```jsx
import { useMediaQuery } from '@/hooks/useMediaQuery';

function ResponsiveApp() {
  const isMobile = useMediaQuery('(max-width: 768px)');

  if (isMobile) {
    return (
      <PopupLayout scheme="drawer" size="full">
        <MobileContent />
      </PopupLayout>
    );
  }

  return (
    <AdminLayout scheme="sidebar" size="lg">
      <AdminLayout.Header />
      <AdminLayout.Sidebar />
      <AdminLayout.Content>
        <DesktopContent />
      </AdminLayout.Content>
    </AdminLayout>
  );
}
```

---

## 🚀 PERFORMANCE OPTIMIZATION

### Code Splitting by Layout

```jsx
import { lazy, Suspense } from 'react';

const AdminLayout = lazy(() => import('@voilajsx/uikit/admin'));
const PageLayout = lazy(() => import('@voilajsx/uikit/page'));

function App() {
  return (
    <Suspense
      fallback={
        <div className="bg-background text-foreground p-4">Loading...</div>
      }
    >
      {isAdmin ? (
        <AdminLayout>
          <AdminContent />
        </AdminLayout>
      ) : (
        <PageLayout>
          <PublicContent />
        </PageLayout>
      )}
    </Suspense>
  );
}
```

### Tree Shaking Optimization

```jsx
// ✅ CORRECT - Import only what you need
import { Button } from '@voilajsx/uikit/button';
import { Card } from '@voilajsx/uikit/card';

// ❌ WRONG - Imports entire library
import { Button, Card } from '@voilajsx/uikit';
```

---

## ✅❌ DOS AND DON'TS (CRITICAL FOR CONSISTENCY)

### 🎯 COMPONENT SELECTION

#### ✅ DO

```jsx
// Choose layout based on use case
Dashboard/Admin → AdminLayout
Website/Blog → PageLayout
Login/Signup → AuthLayout
Error/About → BlankLayout
Extension/Popup → PopupLayout
```

#### ❌ DON'T

```jsx
// Don't use wrong layout for use case
❌ PageLayout for admin dashboard
❌ AdminLayout for public website
❌ AuthLayout for error pages
```

### 🏗️ COMPONENT PATTERNS

#### ✅ DO - Compound Layouts (AdminLayout, PageLayout)

```jsx
// Always use compound components
<AdminLayout>
  <AdminLayout.Header />
  <AdminLayout.Sidebar />
  <AdminLayout.Content />
</AdminLayout>

<PageLayout>
  <PageLayout.Header />
  <PageLayout.Content />
  <PageLayout.Footer />
</PageLayout>
```

#### ❌ DON'T - Compound Layouts

```jsx
// Never pass direct children to compound layouts
❌ <AdminLayout>
     <div>Content</div>
   </AdminLayout>

❌ <PageLayout>
     <YourContent />
   </PageLayout>
```

#### ✅ DO - Single Layouts (AuthLayout, BlankLayout, PopupLayout)

```jsx
// Always pass direct children
<AuthLayout>
  <LoginForm />
</AuthLayout>

<BlankLayout>
  <ErrorContent />
</BlankLayout>
```

#### ❌ DON'T - Single Layouts

```jsx
// Never use compound components on single layouts
❌ <AuthLayout>
     <AuthLayout.Content>Form</AuthLayout.Content>
   </AuthLayout>

❌ <BlankLayout>
     <BlankLayout.Header />
   </BlankLayout>
```

### 🎨 COLOR SYSTEM

#### ✅ DO - Semantic Colors (ALWAYS)

```jsx
// Use semantic color variables
className = 'bg-background text-foreground';
className = 'bg-card text-card-foreground';
className = 'bg-primary text-primary-foreground';
className = 'bg-muted text-muted-foreground';
className = 'border-border';
className = 'hover:bg-muted';
```

#### ❌ DON'T - Hardcoded Colors (NEVER)

```jsx
// Never use hardcoded colors
❌ className="bg-white text-black"
❌ className="bg-blue-500 text-white"
❌ className="border-gray-200"
❌ className="hover:bg-gray-100"
❌ className="text-red-500"
```

### 📦 IMPORTS

#### ✅ DO - Individual Imports

```jsx
// Import components individually for tree shaking
import { AdminLayout } from '@voilajsx/uikit/admin';
import { Button } from '@voilajsx/uikit/button';
import { Card } from '@voilajsx/uikit/card';
import '@voilajsx/uikit/styles'; // Always import styles
```

#### ❌ DON'T - Barrel Imports

```jsx
// Never import from main package (breaks tree shaking)
❌ import { AdminLayout, Button, Card } from '@voilajsx/uikit';
❌ import * from '@voilajsx/uikit';
```

### 🧭 NAVIGATION STRUCTURE

#### ✅ DO - Standard Structure

```jsx
// Always use consistent navigation structure
const navigation = [
  {
    key: 'unique-id',        // ✅ REQUIRED
    label: 'Display Text',   // ✅ REQUIRED
    href: '/path',          // ✅ For routing
    onClick: () => {},      // ✅ For actions
    icon: HomeIcon,         // ✅ Lucide React icon
    badge: 'New',           // ✅ For notifications
    isActive: true,         // ✅ For current page
    items: [...]            // ✅ For submenus
  }
];
```

#### ❌ DON'T - Inconsistent Structure

```jsx
// Never use inconsistent navigation structure
❌ { name: 'Home', url: '/' }              // Wrong property names
❌ { title: 'About', link: '/about' }      // Wrong property names
❌ { label: 'Contact' }                    // Missing key property
❌ { key: 'services' }                     // Missing label property
```

### 🎯 PROPS SYSTEM

#### ✅ DO - Standard Props

```jsx
// Always use standardized props across all components
<AnyLayout
  scheme="specific-to-component"    // ✅ Layout structure
  tone="clean|subtle|brand|contrast" // ✅ Visual emphasis
  size="sm|md|lg|xl|full"          // ✅ Component size
/>

// Use appropriate values for each component
<AdminLayout scheme="sidebar" tone="subtle" size="lg" />
<PageLayout scheme="default" tone="clean" size="xl" />
<AuthLayout scheme="card" tone="clean" size="md" />
```

#### ❌ DON'T - Wrong Props

```jsx
// Never use wrong prop names or values
❌ <AdminLayout layout="sidebar" />        // Wrong: use scheme
❌ <PageLayout theme="clean" />            // Wrong: use tone
❌ <AuthLayout variant="card" />           // Wrong: use scheme
❌ <AdminLayout scheme="default" />        // Wrong: use "sidebar"
```

### 🎨 THEME SYSTEM

#### ✅ DO - Two-Level System

```jsx
// Level 1: Global theme (set once)
<ThemeProvider theme="aurora" mode="dark">
  {/* Level 2: Component tone (per component) */}
  <AdminLayout tone="subtle">
    <AdminLayout.Header tone="brand" />
  </AdminLayout>
</ThemeProvider>;

// Use appropriate combinations
theme = 'default|aurora|metro|neon|ruby|studio'; // Global
tone = 'clean|subtle|brand|contrast'; // Per component
```

#### ❌ DON'T - Confusion

```jsx
// Never confuse theme and tone
❌ <AdminLayout theme="subtle" />          // Wrong: use tone
❌ <ThemeProvider tone="aurora" />         // Wrong: use theme
❌ <Button theme="primary" />              // Wrong: use semantic colors
```

### 📱 RESPONSIVE DESIGN

#### ✅ DO - Built-in Responsiveness

```jsx
// Trust built-in responsive behavior
<AdminLayout size="lg">                   // Automatically responsive
<Header position="sticky">                // Mobile-friendly by default
<PopupLayout size="md">                   // Adapts to screen size
```

#### ❌ DON'T - Manual Breakpoints

```jsx
// Don't add manual responsive classes (already handled)
❌ className="hidden md:block lg:flex"
❌ className="w-full md:w-1/2 lg:w-1/3"
❌ size="sm md:md lg:lg"                   // Wrong: size is not responsive
```

### 🔧 INTEGRATION

#### ✅ DO - Standard Integration

```jsx
// Use standard navigation handler
const handleNavigation = (href, item) => {
  if (item.onClick) {
    item.onClick(); // Execute function
  } else if (href) {
    navigate(href); // Route navigation
  }
};

// Connect to routing
<AdminLayout.Sidebar
  navigation={navigation}
  currentPath={location.pathname} // From router
  onNavigate={handleNavigation}
/>;
```

#### ❌ DON'T - Custom Integration

```jsx
// Don't create custom navigation handling
❌ onClick={() => window.location = href} // Use onNavigate instead
❌ currentPage="home"                      // Use currentPath
❌ onItemClick={customHandler}             // Use onNavigate
```

### 📝 FORM HANDLING

#### ✅ DO - Form Components

```jsx
// Use UIKit form components with libraries
<Form {...form}>
  <FormField
    control={form.control}
    name="email"
    render={({ field }) => (
      <FormItem>
        <FormLabel className="text-foreground">Email</FormLabel>
        <FormControl>
          <Input className="bg-background border-border" {...field} />
        </FormControl>
      </FormItem>
    )}
  />
</Form>
```

#### ❌ DON'T - HTML Forms

```jsx
// Don't use raw HTML forms or inputs
❌ <form onSubmit={handleSubmit}>
     <input type="email" />
   </form>

❌ <input className="bg-white border-gray-200" /> // Wrong colors
```

### 🚨 ERROR PREVENTION

#### ✅ DO - Validation

```jsx
// Always validate in development
if (process.env.NODE_ENV === 'development') {
  if (!navigation.every(item => item.key && item.label)) {
    console.warn('Navigation missing required properties');
  }
}

// Use TypeScript for type safety
const navigation: NavigationItem[] = [...];
```

#### ❌ DON'T - Skip Validation

```jsx
// Don't skip validation or ignore TypeScript
❌ const navigation = [{ name: 'Home' }];  // Wrong structure
❌ // @ts-ignore                          // Don't ignore types
❌ <AdminLayout>{content}</AdminLayout>   // Wrong pattern
```

### 💡 DEVELOPMENT

#### ✅ DO - Best Practices

```jsx
// Use consistent naming
const adminNavigation = createAdminNav();
const handleAdminNavigation = (href, item) => {};

// Add helpful comments
// Admin dashboard with user management
<AdminLayout scheme="sidebar" tone="subtle">
  <AdminLayout.Sidebar navigation={adminNavigation} />
</AdminLayout>;

// Use environment checks
const isDev = process.env.NODE_ENV === 'development';
```

#### ❌ DON'T - Bad Practices

```jsx
// Don't use inconsistent naming
❌ const nav1 = [], nav2 = [], navItems = [];
❌ const handleClick = () => {}, onClick = () => {};

// Don't hardcode values
❌ <AdminLayout scheme="sidebar" tone="subtle" className="bg-white">
❌ if (window.location.pathname === '/admin') // Use proper routing
```

---

## 📝 FILE HEADERS (REQUIRED)

### ✅ DO - Always Include File Headers

```jsx
/**
 * Admin Dashboard with user management and analytics
 * @module @voilajsx/uikit
 * @file src/pages/admin/dashboard.jsx
 */
import { AdminLayout } from '@voilajsx/uikit/admin';
import { ThemeProvider } from '@voilajsx/uikit/theme-provider';
import '@voilajsx/uikit/styles';

// Component code here...
```

### ❌ DON'T - Skip Documentation

```jsx
// Never skip file headers - always document purpose
❌ import { AdminLayout } from '@voilajsx/uikit/admin';
   // Missing header documentation
```

---

## 🚨 CRITICAL REMINDERS (MUST FOLLOW)

### 🎯 **Core Rules** (Never Break These)

1. **✅ ALWAYS** import styles: `import '@voilajsx/uikit/styles'`
2. **✅ ALWAYS** wrap in ThemeProvider: `<ThemeProvider theme="default">`
3. **✅ ALWAYS** use semantic colors: `bg-background text-foreground`
4. **✅ NEVER** use hardcoded colors: `bg-white text-black`
5. **✅ COMPOUND** layouts need child components: `<AdminLayout><AdminLayout.Header/></AdminLayout>`
6. **✅ SINGLE** layouts take direct children: `<AuthLayout><LoginForm/></AuthLayout>`

### 🔍 **Quality Checklist** (Every Component)

- [ ] File header with description and @module/@file
- [ ] Correct component pattern (compound vs single)
- [ ] Semantic colors only (no hardcoded colors)
- [ ] Standard navigation structure (key + label)
- [ ] Appropriate scheme/tone/size props
- [ ] Individual imports (not barrel imports)

### ⚡ **Success Factors** (High Quality Code)

- **Consistency**: Same patterns across all files
- **Documentation**: Clear file headers and comments
- **Semantic Colors**: Future-proof theming
- **Type Safety**: Proper TypeScript usage
- **Performance**: Individual imports for tree-shaking

---

## ✅ SUCCESS CHECKLIST

### Required Setup

- [ ] `import '@voilajsx/uikit/styles'` in root file
- [ ] Wrap app in `<ThemeProvider theme="default" mode="light">`
- [ ] Choose correct layout: AdminLayout/PageLayout/AuthLayout/BlankLayout/PopupLayout

### Component Patterns

- [ ] Use compound pattern for AdminLayout & PageLayout (with .Header, .Content, etc.)
- [ ] Use single pattern for AuthLayout, BlankLayout & PopupLayout (direct children)
- [ ] Set appropriate scheme, tone, size props on all layouts

### Styling

- [ ] Use ONLY semantic colors (bg-background, text-foreground, border-border)
- [ ] NEVER use hardcoded colors (bg-white, text-black, border-gray-200)
- [ ] Apply semantic classes to all UI components

### Navigation

- [ ] Structure navigation with required key + label properties
- [ ] Include href for routing OR onClick for actions
- [ ] Add icons using lucide-react components
- [ ] Implement onNavigate handler for routing integration

### Integration

- [ ] Connect to your routing system (React Router, Next.js, etc.)
- [ ] Handle currentPath detection for active states
- [ ] Integrate with form libraries using Form components
- [ ] Add theme toggle using useTheme hook

### Testing

- [ ] Test light/dark mode switching
- [ ] Test all themes (default, aurora, metro, neon, ruby, studio)
- [ ] Test responsive behavior on mobile/desktop
- [ ] Verify navigation works across all layouts

Following this complete guide ensures 100% successful UIKit implementation with zero ambiguity for LLM code generation.
