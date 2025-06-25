# @voilajsx/uikit - LLM Code Generation Guide v1.0

## 🎯 Core LLM Rules

### Rule 1: Component Selection (ALWAYS follow this decision tree)

```
Need dashboard/admin interface? → AdminLayout
Need public website? → PageLayout
Need login/signup pages? → AuthLayout
Need error/simple pages? → BlankLayout
Need popup/extension? → PopupLayout
```

### Rule 2: Required Setup (EVERY project needs this)

```jsx
import { ThemeProvider } from '@voilajsx/uikit/theme-provider';
import '@voilajsx/uikit/styles';

function App() {
  return (
    <ThemeProvider theme="default" mode="light">
      {/* Your app content */}
    </ThemeProvider>
  );
}
```

### Rule 3: Standardized Props (ALL components use these)

```typescript
interface StandardProps {
  scheme?: string; // Layout structure
  tone?: 'clean' | 'subtle' | 'brand' | 'contrast';
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  navigation?: NavigationItem[];
  children: React.ReactNode;
}
```

### Rule 4: Navigation Structure (IDENTICAL everywhere)

```jsx
const navigation = [
  {
    key: 'unique-id',     // REQUIRED
    label: 'Display Text', // REQUIRED
    href: '/path',        // For routing
    onClick: () => {},    // For actions
    icon: HomeIcon,       // Lucide React icon
    items: [...],         // For submenus
    badge: 'New',         // For notifications
    isActive: true,       // For current page
  }
];
```

### Rule 5: Color System (NEVER use hardcoded colors)

```jsx
// ✅ ALWAYS use semantic colors
className = 'bg-background text-foreground border-border';
className = 'bg-primary text-primary-foreground';
className = 'bg-card text-card-foreground';

// ❌ NEVER use hardcoded colors
className = 'bg-white text-black border-gray-200';
className = 'bg-blue-500 text-white';
```

---

## 📋 Component Quick Reference

### Layout Components (5 total)

#### AdminLayout - Dashboard with sidebar

```jsx
import { AdminLayout } from '@voilajsx/uikit/admin';

<AdminLayout
  scheme="sidebar" // 'sidebar' | 'topbar' | 'hybrid'
  tone="subtle" // 'clean' | 'subtle' | 'brand' | 'contrast'
  size="lg" // 'sm' | 'md' | 'lg' | 'xl' | 'full'
  title="Admin Dashboard"
  navigation={navItems}
  currentPath="/admin"
  onNavigate={(href, item) => navigate(href)}
>
  <DashboardContent />
</AdminLayout>;
```

#### PageLayout - Website with header/footer

```jsx
import { PageLayout } from '@voilajsx/uikit/page';

<PageLayout
  scheme="default" // 'default' | 'blog' | 'docs' | 'marketing'
  tone="clean" // 'clean' | 'subtle' | 'brand' | 'contrast'
  size="xl" // 'sm' | 'md' | 'lg' | 'xl' | 'full'
  navigation={navItems}
  title="Website"
  copyright="© 2024 Company"
>
  <PageContent />
</PageLayout>;
```

#### AuthLayout - Authentication pages

```jsx
import { AuthLayout } from '@voilajsx/uikit/auth';

<AuthLayout
  scheme="card" // 'simple' | 'card' | 'split' | 'hero'
  tone="clean" // 'clean' | 'subtle' | 'brand' | 'contrast'
  size="md" // 'sm' | 'md' | 'lg' | 'xl' | 'full'
  title="Sign In"
  subtitle="Welcome back"
>
  <LoginForm />
</AuthLayout>;
```

#### BlankLayout - Simple pages

```jsx
import { BlankLayout } from '@voilajsx/uikit/blank';

<BlankLayout
  scheme="default" // 'default' | 'centered' | 'error' | 'maintenance'
  tone="clean" // 'clean' | 'subtle' | 'brand' | 'contrast'
  size="lg" // 'sm' | 'md' | 'lg' | 'xl' | 'full'
  title="404 Not Found"
>
  <ErrorContent />
</BlankLayout>;
```

#### PopupLayout - Compact interfaces

```jsx
import { PopupLayout } from '@voilajsx/uikit/popup';

<PopupLayout
  scheme="modal" // 'modal' | 'drawer' | 'floating'
  tone="clean" // 'clean' | 'subtle' | 'brand' | 'contrast'
  size="md" // 'sm' | 'md' | 'lg' | 'xl' | 'full'
  title="Extension"
  showClose={true}
  onClose={() => close()}
>
  <ExtensionContent />
</PopupLayout>;
```

### Section Components (3 total)

#### Header - Navigation header

```jsx
import { Header, HeaderLogo, HeaderNav } from '@voilajsx/uikit/header';

<Header tone="clean" size="xl" position="sticky">
  <HeaderLogo>
    <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
  </HeaderLogo>
  <HeaderNav
    navigation={navItems}
    currentPath="/current"
    onNavigate={(href, item) => navigate(href)}
  />
</Header>;
```

#### Footer - Page footer

```jsx
import { Footer } from '@voilajsx/uikit/footer';

<Footer
  tone="contrast"
  size="xl"
  navigation={footerNav}
  currentPath="/current"
  onNavigate={(href, item) => navigate(href)}
>
  <div className="text-center py-4">
    <p className="text-sm text-muted-foreground">© 2024 Company</p>
  </div>
</Footer>;
```

#### Container - Content with sidebar

```jsx
import { Container } from '@voilajsx/uikit/container';

<Container
  tone="clean"
  size="xl"
  sidebar="left"
  navigation={sidebarNav}
  currentPath="/current"
  onNavigate={(href, item) => navigate(href)}
>
  <MainContent />
</Container>;
```

### UI Components (35 total - same as shadcn/ui)

All shadcn/ui components work identically, just change import path:

```jsx
// Form & Input
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

// Display & Layout
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

// Navigation & Menu
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

// Overlay & Modal
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

// Data & Table
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
```

### Theme System

```jsx
import { ThemeProvider, useTheme } from '@voilajsx/uikit/theme-provider';

// Available themes: 'default' | 'aurora' | 'metro' | 'neon' | 'ruby' | 'studio'
// Available modes: 'light' | 'dark'

<ThemeProvider theme="default" mode="light" detectSystem={true}>
  <App />
</ThemeProvider>;

// In components
const { theme, mode, setTheme, setMode, toggleMode } = useTheme();
```

---

## 🎯 LLM Decision Trees

### 1. Layout Selection

```
What are you building?
├── Admin dashboard/CRM/analytics → AdminLayout
├── Company website/blog/docs → PageLayout
├── Login/signup/onboarding → AuthLayout
├── Error page/maintenance/about → BlankLayout
└── Chrome extension/popup/overlay → PopupLayout
```

### 2. Scheme Selection

```
AdminLayout schemes:
├── sidebar (default) - Persistent left sidebar
├── topbar - Top navigation only
└── hybrid - Both top and side navigation

PageLayout schemes:
├── default (recommended) - Header + content + footer
├── blog - Main + sidebar layout
├── docs - Sidebar + main layout
└── marketing - Hero sections layout

AuthLayout schemes:
├── card (recommended) - Centered card form
├── simple - Plain centered form
├── split - Left panel + right form
└── hero - Background image + overlay card

BlankLayout schemes:
├── default (recommended) - Simple centered content
├── centered - Fully centered content
├── error - Error page styling
└── maintenance - Maintenance page styling

PopupLayout schemes:
├── modal (recommended) - Standard popup
├── drawer - Side drawer style
└── floating - Floating panel style
```

### 3. Tone Selection

```
What feeling do you want?
├── clean - Pure, minimal, white backgrounds (most websites)
├── subtle - Professional gray backgrounds (admin panels)
├── brand - Primary colored backgrounds (headers, CTAs)
└── contrast - Dark/bold backgrounds (footers, emphasis)
```

### 4. Size Selection

```
How much space do you need?
├── sm - Compact (sidebars: 192px, content: max-w-2xl)
├── md - Medium (sidebars: 256px, content: max-w-4xl)
├── lg - Large (sidebars: 320px, content: max-w-6xl)
├── xl - Extra large (sidebars: 384px, content: max-w-7xl)
└── full - Maximum (sidebars: 448px, content: max-w-full)
```

---

## 🔧 Complete Code Templates

### 1. Basic App Setup

```jsx
/**
 * Basic application setup with theme provider
 * @module @voilajsx/uikit
 * @file app.jsx
 */
import { ThemeProvider } from '@voilajsx/uikit/theme-provider';
import { Button } from '@voilajsx/uikit/button';
import '@voilajsx/uikit/styles';

function App() {
  return (
    <ThemeProvider theme="default" mode="light" detectSystem={true}>
      <div className="min-h-screen bg-background text-foreground p-6">
        <div className="max-w-md mx-auto">
          <h1 className="text-2xl font-bold mb-4">Welcome to UIKit</h1>
          <Button className="w-full">Get Started</Button>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
```

### 2. Admin Dashboard Template

```jsx
/**
 * Complete admin dashboard with sidebar navigation
 * @module @voilajsx/uikit
 * @file admin-dashboard.jsx
 */
import { AdminLayout } from '@voilajsx/uikit/admin';
import { Card, CardHeader, CardTitle, CardContent } from '@voilajsx/uikit/card';
import { Button } from '@voilajsx/uikit/button';
import { Badge } from '@voilajsx/uikit/badge';
import { Home, Users, BarChart3, Settings } from 'lucide-react';

function AdminDashboard() {
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

  return (
    <AdminLayout
      scheme="sidebar"
      tone="subtle"
      size="lg"
      title="Admin Dashboard"
      navigation={navigation}
      currentPath="/admin"
      onNavigate={(href, item) => {
        if (item.onClick) {
          item.onClick();
        } else if (href) {
          window.location.href = href;
        }
      }}
    >
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back! Here's what's happening with your platform.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="bg-card text-card-foreground border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-foreground">
                Total Users
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">1,234</div>
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

          <Card className="bg-card text-card-foreground border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-foreground">
                Revenue
              </CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">$45,231</div>
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
    </AdminLayout>
  );
}

export default AdminDashboard;
```

### 3. Website Template

```jsx
/**
 * Complete website with header and footer
 * @module @voilajsx/uikit
 * @file website.jsx
 */
import { PageLayout } from '@voilajsx/uikit/page';
import { Header, HeaderLogo, HeaderNav } from '@voilajsx/uikit/header';
import { Footer } from '@voilajsx/uikit/footer';
import { Button } from '@voilajsx/uikit/button';
import { Card, CardContent } from '@voilajsx/uikit/card';

function Website() {
  const navigation = [
    { key: 'home', label: 'Home', href: '/', isActive: true },
    { key: 'about', label: 'About', href: '/about' },
    { key: 'services', label: 'Services', href: '/services' },
    { key: 'contact', label: 'Contact', href: '/contact' },
  ];

  const footerNavigation = [
    { key: 'privacy', label: 'Privacy Policy', href: '/privacy' },
    { key: 'terms', label: 'Terms of Service', href: '/terms' },
    { key: 'support', label: 'Support', href: '/support' },
  ];

  return (
    <PageLayout
      scheme="default"
      tone="clean"
      size="xl"
      navigation={navigation}
      currentPath="/"
      onNavigate={(href, item) => {
        if (item.onClick) {
          item.onClick();
        } else if (href) {
          window.location.href = href;
        }
      }}
      title="Brand"
      logo={
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg"></div>
          <span className="text-xl font-bold text-foreground">Brand</span>
        </div>
      }
      footerNavigation={footerNavigation}
      copyright="© 2024 Brand. All rights reserved."
    >
      <div className="space-y-12">
        <section className="text-center py-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Welcome to Our Platform
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Build amazing applications with our comprehensive UI kit designed
            for modern web development.
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
                Description of the first amazing feature that helps users.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card text-card-foreground border-border">
            <CardContent className="p-6 text-center">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Feature Two
              </h3>
              <p className="text-muted-foreground">
                Description of the second great feature that solves problems.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card text-card-foreground border-border">
            <CardContent className="p-6 text-center">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Feature Three
              </h3>
              <p className="text-muted-foreground">
                Description of the third powerful feature for better experience.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </PageLayout>
  );
}

export default Website;
```

### 4. Authentication Template

```jsx
/**
 * Complete login page with form validation
 * @module @voilajsx/uikit
 * @file login-page.jsx
 */
import { AuthLayout } from '@voilajsx/uikit/auth';
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
    // Handle login logic
  };

  return (
    <AuthLayout
      scheme="card"
      tone="clean"
      size="md"
      title="Welcome back"
      subtitle="Sign in to your account to continue"
      logo={
        <div className="flex items-center justify-center w-16 h-16 bg-primary rounded-xl">
          <span className="text-2xl font-bold text-primary-foreground">L</span>
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
                <FormLabel className="text-foreground">Email address</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="name@example.com"
                    className="bg-background text-foreground border-input"
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
                    className="bg-background text-foreground border-input"
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
                  <FormLabel className="text-sm font-normal text-foreground">
                    Remember me for 30 days
                  </FormLabel>
                </div>
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
  );
}

export default LoginPage;
```

### 5. Chrome Extension Popup Template

```jsx
/**
 * Complete Chrome extension popup with tabs and controls
 * @module @voilajsx/uikit
 * @file chrome-extension.jsx
 */
import { PopupLayout } from '@voilajsx/uikit/popup';
import { ThemeProvider } from '@voilajsx/uikit/theme-provider';
import { Button } from '@voilajsx/uikit/button';
import { Badge } from '@voilajsx/uikit/badge';
import { Switch } from '@voilajsx/uikit/switch';
import { Card, CardContent } from '@voilajsx/uikit/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@voilajsx/uikit/tabs';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@voilajsx/uikit/dropdown-menu';
import { Zap, Settings, MoreVertical } from 'lucide-react';
import { useState } from 'react';
import '@voilajsx/uikit/styles';

function ChromeExtension() {
  const [isEnabled, setIsEnabled] = useState(true);
  const [autoMode, setAutoMode] = useState(false);

  return (
    <ThemeProvider theme="default" mode="light" detectSystem={true}>
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
          <Badge variant={isEnabled ? 'default' : 'secondary'}>
            {isEnabled ? 'Active' : 'Inactive'}
          </Badge>
        }
        headerActions={
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="bg-popover text-popover-foreground"
            >
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
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

            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Ads blocked</span>
                <span className="font-medium text-foreground">156</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Trackers blocked</span>
                <span className="font-medium text-foreground">89</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Scripts optimized</span>
                <span className="font-medium text-foreground">42</span>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </PopupLayout>
    </ThemeProvider>
  );
}

export default ChromeExtension;
```

### 6. Data Table Template

```jsx
/**
 * Complete data table with search and sorting
 * @module @voilajsx/uikit
 * @file data-table-example.jsx
 */
import { DataTable } from '@voilajsx/uikit/data-table';
import { Badge } from '@voilajsx/uikit/badge';
import { Button } from '@voilajsx/uikit/button';
import { Card, CardHeader, CardTitle, CardContent } from '@voilajsx/uikit/card';

function DataTableExample() {
  const users = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      role: 'Admin',
      status: 'Active',
      lastLogin: '2024-01-15',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      role: 'User',
      status: 'Active',
      lastLogin: '2024-01-14',
    },
    {
      id: 3,
      name: 'Bob Johnson',
      email: 'bob@example.com',
      role: 'User',
      status: 'Inactive',
      lastLogin: '2024-01-10',
    },
  ];

  const columns = [
    {
      key: 'name',
      title: 'Name',
      render: (value, row) => (
        <div>
          <div className="font-medium text-foreground">{value}</div>
          <div className="text-sm text-muted-foreground">{row.email}</div>
        </div>
      ),
    },
    {
      key: 'role',
      title: 'Role',
      render: (value) => (
        <Badge variant="secondary" className="text-xs">
          {value}
        </Badge>
      ),
    },
    {
      key: 'status',
      title: 'Status',
      render: (value) => (
        <Badge
          variant={value === 'Active' ? 'default' : 'destructive'}
          className="text-xs"
        >
          {value}
        </Badge>
      ),
    },
    {
      key: 'lastLogin',
      title: 'Last Login',
      render: (value) => (
        <span className="text-sm text-muted-foreground">{value}</span>
      ),
    },
    {
      key: 'actions',
      title: 'Actions',
      sortable: false,
      render: (_, row) => (
        <div className="flex gap-2">
          <Button variant="ghost" size="sm" className="text-foreground">
            Edit
          </Button>
          <Button variant="ghost" size="sm" className="text-destructive">
            Delete
          </Button>
        </div>
      ),
    },
  ];

  return (
    <Card className="bg-card text-card-foreground border-border">
      <CardHeader>
        <CardTitle className="text-foreground">User Management</CardTitle>
      </CardHeader>
      <CardContent>
        <DataTable
          columns={columns}
          data={users}
          searchable={true}
          sortable={true}
          className="bg-background"
        />
      </CardContent>
    </Card>
  );
}

export default DataTableExample;
```

---

## 🎨 Theme System Usage

### Available Themes

```jsx
// 6 professional themes with light/dark variants
const themes = [
  'default', // Ocean blue - professional business
  'aurora', // Purple-green gradients - creative apps
  'metro', // Gray-blue - admin panels
  'neon', // Electric colors - gaming/tech
  'ruby', // Red-gold - luxury brands
  'studio', // Designer grays - creative tools
];
```

### Theme Provider Setup

```jsx
import { ThemeProvider, useTheme } from '@voilajsx/uikit/theme-provider';

// Wrap your entire app
<ThemeProvider
  theme="default" // Theme name
  mode="light" // 'light' | 'dark'
  detectSystem={true} // Auto-detect system preference
>
  <App />
</ThemeProvider>;
```

### Theme Hook Usage

```jsx
function ThemeControls() {
  const {
    theme, // Current theme: 'default' | 'aurora' | etc.
    mode, // Current mode: 'light' | 'dark'
    setTheme, // (theme: string) => void
    setMode, // (mode: 'light' | 'dark') => void
    toggleMode, // () => void
  } = useTheme();

  return (
    <div className="space-y-4">
      <select
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
        className="bg-background text-foreground border-border"
      >
        <option value="default">Default</option>
        <option value="aurora">Aurora</option>
        <option value="metro">Metro</option>
        <option value="neon">Neon</option>
        <option value="ruby">Ruby</option>
        <option value="studio">Studio</option>
      </select>

      <button
        onClick={toggleMode}
        className="bg-primary text-primary-foreground px-4 py-2 rounded"
      >
        Toggle to {mode === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </div>
  );
}
```

---

## ⚠️ Critical Rules for LLMs

### 1. NEVER Use Hardcoded Colors

```jsx
// ❌ WRONG - Will break themes
className = 'bg-white text-black border-gray-200';
className = 'bg-blue-500 text-white';
className = 'text-gray-600';

// ✅ CORRECT - Works with all themes
className = 'bg-background text-foreground border-border';
className = 'bg-primary text-primary-foreground';
className = 'text-muted-foreground';
```

### 2. ALWAYS Use Semantic Color Variables

```jsx
// Background colors
bg - background; // Main page background
bg - card; // Card/panel backgrounds
bg - popover; // Dropdown/popover backgrounds
bg - muted; // Subtle background areas

// Text colors
text - foreground; // Primary text
text - muted - foreground; // Secondary/subtle text
text - card - foreground; // Text on card backgrounds

// Interactive colors
bg - primary; // Primary buttons/elements
text - primary - foreground; // Text on primary elements
bg - secondary; // Secondary buttons/elements
text - secondary - foreground; // Text on secondary elements

// State colors
bg - destructive; // Error/danger states
text - destructive; // Error text

// Border colors
border - border; // Standard borders
border - input; // Input field borders
```

### 3. ALWAYS Include Required Imports

```jsx
// Required for every project
import '@voilajsx/uikit/styles';
import { ThemeProvider } from '@voilajsx/uikit/theme-provider';

// Component imports (individual for tree-shaking)
import { Button } from '@voilajsx/uikit/button';
import { Card } from '@voilajsx/uikit/card';
// etc.
```

### 4. ALWAYS Use Standardized Navigation Structure

```jsx
const navigation = [
  {
    key: 'unique-id',     // REQUIRED: Unique identifier
    label: 'Display Text', // REQUIRED: Display text
    href: '/path',        // Optional: For routing
    onClick: () => {},    // Optional: For actions
    icon: HomeIcon,       // Optional: Lucide React icon
    items: [...],         // Optional: For submenus
    badge: 'New',         // Optional: For notifications
    isActive: true,       // Optional: For current page
  }
];
```

### 5. ALWAYS Follow Component Selection Rules

```jsx
// Dashboard/admin interface → AdminLayout
<AdminLayout scheme="sidebar" tone="subtle" navigation={nav}>
  <DashboardContent />
</AdminLayout>

// Public website → PageLayout
<PageLayout scheme="default" tone="clean" navigation={nav}>
  <WebsiteContent />
</PageLayout>

// Login/signup pages → AuthLayout
<AuthLayout scheme="card" tone="clean">
  <LoginForm />
</AuthLayout>

// Error/simple pages → BlankLayout
<BlankLayout scheme="default" tone="clean">
  <ErrorContent />
</BlankLayout>

// Chrome extension/popup → PopupLayout
<PopupLayout scheme="modal" tone="clean" size="md">
  <ExtensionContent />
</PopupLayout>
```

### 6. ALWAYS Use Tone Appropriately

```jsx
// Professional admin interfaces
tone = 'subtle'; // Gray backgrounds, professional look

// Clean public websites
tone = 'clean'; // Pure white backgrounds, minimal

// Branded elements (headers, CTAs)
tone = 'brand'; // Primary colored backgrounds

// High emphasis (footers, important sections)
tone = 'contrast'; // Dark/bold backgrounds
```

### 7. ALWAYS Include File Headers

```jsx
/**
 * Brief description of what the file does
 * @module @voilajsx/uikit
 * @file path/to/filename.jsx
 */
```

---

## 🚀 Quick Start Checklist

### ✅ For Every New Project:

1. **Install**: `npm install @voilajsx/uikit`
2. **Import styles**: `import '@voilajsx/uikit/styles';`
3. **Wrap app**: `<ThemeProvider><App /></ThemeProvider>`
4. **Choose layout**: Follow component selection rules
5. **Use semantic colors**: Never hardcode colors
6. **Test themes**: Verify light/dark mode compatibility

### ✅ For Chrome Extensions:

1. **Use PopupLayout** with appropriate size
2. **Include ThemeProvider** in popup
3. **Handle responsive design** with proper classes
4. **Test in both themes** (light/dark)

### ✅ For Admin Dashboards:

1. **Use AdminLayout** with sidebar scheme
2. **Set tone to "subtle"** for professional look
3. **Include navigation items** with proper structure
4. **Add header actions** for user controls

### ✅ For Public Websites:

1. **Use PageLayout** with default scheme
2. **Set tone to "clean"** for minimal look
3. **Include navigation** and footer items
4. **Add proper meta information**

---

## 🎯 LLM Success Patterns

### Pattern 1: Always Start with Layout

```jsx
// 1. Choose layout based on use case
// 2. Set appropriate scheme, tone, size
// 3. Add navigation if needed
// 4. Fill with content

<AdminLayout scheme="sidebar" tone="subtle" size="lg">
  {/* Content here */}
</AdminLayout>
```

### Pattern 2: Always Use Semantic Classes

```jsx
// 1. Use bg-* for backgrounds
// 2. Use text-* for text colors
// 3. Use border-* for borders
// 4. Never hardcode colors

<Card className="bg-card text-card-foreground border-border">
  <CardContent className="text-foreground">
    <p className="text-muted-foreground">Secondary text</p>
  </CardContent>
</Card>
```

### Pattern 3: Always Structure Navigation Consistently

```jsx
// 1. Use key + label (required)
// 2. Add href for routing OR onClick for actions
// 3. Add icon from lucide-react
// 4. Use items for submenus

const nav = [
  {
    key: 'home',
    label: 'Home',
    href: '/',
    icon: Home,
    isActive: true,
  },
];
```

### Pattern 4: Always Test Theme Compatibility

```jsx
// 1. Test with different themes
// 2. Test light/dark modes
// 3. Verify semantic colors work
// 4. Check responsive design

<ThemeProvider theme="neon" mode="dark">
  <YourComponent />
</ThemeProvider>
```

---

## 🔧 Common Mistakes to Avoid

### ❌ Don't Do This:

```jsx
// Hardcoded colors
className="bg-white text-black"

// Wrong navigation structure
{ title: 'Home', submenu: [...] }

// Missing theme provider
<App /> // Without ThemeProvider wrapper

// Wrong component choice
<PageLayout> // For admin dashboard
<AdminLayout> // For public website

// Missing imports
// Forgetting '@voilajsx/uikit/styles'
```

### ✅ Do This Instead:

```jsx
// Semantic colors
className="bg-background text-foreground"

// Correct navigation structure
{ key: 'home', label: 'Home', items: [...] }

// Proper theme setup
<ThemeProvider><App /></ThemeProvider>

// Correct component choice
<AdminLayout> // For admin dashboard
<PageLayout> // For public website

// Complete imports
import '@voilajsx/uikit/styles';
```

---

This guide ensures LLMs will generate consistent, theme-compatible code that works perfectly with @voilajsx/uikit's design system. Following these patterns guarantees successful implementations every time.
