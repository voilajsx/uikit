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

5. **Theme Integration**:

   - Always wrap applications in `ThemeProvider`
   - Use built-in themes: `default`, `metro`, `studio`, `ruby`, `neon`, `aurora`
   - For custom themes, use OKLCH color format
   - Support both light and dark variants

6. **Import Patterns**:
   - Use direct component imports: `@voilajsx/uikit/button`
   - Always import styles: `@voilajsx/uikit/styles`
   - Import theme provider: `@voilajsx/uikit/theme-provider`

## Available Components

### Core UI Components

```typescript
// Button with variants and sizes
import { Button } from '@voilajsx/uikit/button';
// Usage: <Button variant="default|destructive|outline|secondary|ghost|link" size="default|sm|lg|icon">

// Card components for content containers
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@voilajsx/uikit/card';

// Input field with styling
import { Input } from '@voilajsx/uikit/input';

// Badge for status indicators
import { Badge } from '@voilajsx/uikit/badge';
// Usage: <Badge variant="default|secondary|destructive|outline">

// Avatar with image fallback
import { Avatar, AvatarImage, AvatarFallback } from '@voilajsx/uikit/avatar';

// Alert messages
import { Alert, AlertTitle, AlertDescription } from '@voilajsx/uikit/alert';

// Accordion for collapsible content
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@voilajsx/uikit/accordion';

// Skeleton loading states
import { Skeleton } from '@voilajsx/uikit/skeleton';

// Progress indicators
import { Progress } from '@voilajsx/uikit/progress';

// Separator lines
import { Separator } from '@voilajsx/uikit/separator';
```

### Form Components

```typescript
// Form integration with React Hook Form
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from '@voilajsx/uikit/form';

// Checkbox with states
import { Checkbox } from '@voilajsx/uikit/checkbox';

// Radio button groups
import { RadioGroup, RadioGroupItem } from '@voilajsx/uikit/radio-group';

// Select dropdown
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectLabel,
  SelectSeparator,
} from '@voilajsx/uikit/select';

// Switch toggle
import { Switch } from '@voilajsx/uikit/switch';

// Range slider
import { Slider } from '@voilajsx/uikit/slider';

// Multi-line text input
import { Textarea } from '@voilajsx/uikit/textarea';

// Form labels
import { Label } from '@voilajsx/uikit/label';
```

### Navigation Components

```typescript
// Dropdown menus
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from '@voilajsx/uikit/dropdown-menu';

// Navigation tabs
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@voilajsx/uikit/tabs';

// Page navigation
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from '@voilajsx/uikit/pagination';

// Horizontal menu bar
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
} from '@voilajsx/uikit/menubar';

// Breadcrumb navigation
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@voilajsx/uikit/breadcrumb';
```

### Overlay Components

```typescript
// Modal dialogs
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@voilajsx/uikit/dialog';

// Slide-out panels
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from '@voilajsx/uikit/sheet';

// Floating content
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@voilajsx/uikit/popover';

// Hover tooltips
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from '@voilajsx/uikit/tooltip';

// Toast notifications
import {
  Toast,
  ToastProvider,
  ToastViewport,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
} from '@voilajsx/uikit/toast';
```

### Data Components

```typescript
// Data tables with styling
import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from '@voilajsx/uikit/table';

// Advanced data table with sorting/filtering
import { DataTable } from '@voilajsx/uikit/data-table';

// Toggle buttons
import { Toggle } from '@voilajsx/uikit/toggle';

// Command palette
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
} from '@voilajsx/uikit/command';
```

### Layout Components

```typescript
// Page containers
import { Container } from '@voilajsx/uikit/container';

// Page headers
import { Header } from '@voilajsx/uikit/header';

// Page footers
import { Footer } from '@voilajsx/uikit/footer';

// Navigation sidebars
import { Sidebar } from '@voilajsx/uikit/sidebar';
```

### Theme System

```typescript
// Theme provider and hooks
import { ThemeProvider, useTheme } from '@voilajsx/uikit/theme-provider';
```

### Template Layouts

```typescript
// Authentication page layouts
import { AuthTemplate } from '@voilajsx/uikit/templates/auth';

// Minimal page template
import { BlankTemplate } from '@voilajsx/uikit/templates/blank';

// Header + sidebar + footer layout
import { DefaultTemplate } from '@voilajsx/uikit/templates/default';

// Form-optimized layouts
import { FormTemplate } from '@voilajsx/uikit/templates/form';

// Data table page layouts
import { TableTemplate } from '@voilajsx/uikit/templates/table';
```

### Utilities

```typescript
// Class merging utilities
import { cn } from '@voilajsx/uikit/utils';

// Platform detection
import { detectPlatform, isBrowser, isNative } from '@voilajsx/uikit/platform';

// Cross-platform adapters
import { useAdapter, usePlatform } from '@voilajsx/uikit/adapters/hooks';
```

## Template Layouts

### Available Templates

```typescript
// Template component signatures
interface AuthTemplateProps {
  className?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
}

interface BlankTemplateProps {
  className?: string;
  containerProps?: object;
  children: React.ReactNode;
}

interface DefaultTemplateProps {
  className?: string;
  headerContent?: React.ReactNode;
  sidebarContent?: React.ReactNode;
  footerContent?: React.ReactNode;
  children: React.ReactNode;
}

interface FormTemplateProps {
  className?: string;
  title?: string;
  actions?: React.ReactNode;
  onSubmit?: (event: React.FormEvent) => void;
  children: React.ReactNode;
}

interface TableTemplateProps {
  className?: string;
  title?: string;
  actions?: React.ReactNode;
  searchable?: boolean;
  searchPlaceholder?: string;
  onSearch?: (value: string) => void;
  filters?: React.ReactNode;
  children: React.ReactNode;
}
```

### Template Usage Patterns

```jsx
// AuthTemplate - Centered layout for authentication
<AuthTemplate title="Sign In" subtitle="Enter your credentials">
  <LoginForm />
</AuthTemplate>

// BlankTemplate - Minimal container layout
<BlankTemplate containerProps={{ size: 'lg' }}>
  <YourContent />
</BlankTemplate>

// DefaultTemplate - Complete app layout
<DefaultTemplate
  headerContent={<NavigationBar />}
  sidebarContent={<NavigationMenu />}
  footerContent={<AppFooter />}
>
  <MainContent />
</DefaultTemplate>

// FormTemplate - Form-optimized layout
<FormTemplate
  title="User Settings"
  actions={<SaveButton />}
  onSubmit={handleSubmit}
>
  <SettingsForm />
</FormTemplate>

// TableTemplate - Data table layout
<TableTemplate
  title="Users"
  searchable={true}
  actions={<AddUserButton />}
  filters={<UserFilters />}
>
  <UsersTable />
</TableTemplate>
```

### Built-in Themes

```typescript
// Available themes with their characteristics
const THEMES = {
  default: 'Clean system colors', // Default gray theme
  metro: 'Clean transit-inspired design', // Systematic gray-blue
  studio: 'Sophisticated designer grays', // Creative gray + amber
  ruby: 'Premium ruby red', // Sophisticated red + rose
  neon: 'Electric cyberpunk', // Bright magenta + cyan
  aurora: 'Northern lights magic', // Purple-green elegance
};
```

### Basic Theme Usage

```jsx
import { ThemeProvider } from '@voilajsx/uikit/theme-provider';
import '@voilajsx/uikit/styles';

function App() {
  return (
    <ThemeProvider theme="default" variant="light" detectSystem={true}>
      <YourApp />
    </ThemeProvider>
  );
}
```

### Theme Switching

```jsx
import { useTheme } from '@voilajsx/uikit/theme-provider';

function ThemeSelector() {
  const { theme, variant, setTheme, toggleVariant } = useTheme();

  return (
    <div className="flex gap-2">
      <Button onClick={() => setTheme('default')}>Default</Button>
      <Button onClick={() => setTheme('metro')}>Metro</Button>
      <Button onClick={() => setTheme('neon')}>Neon</Button>
      <Button onClick={toggleVariant}>
        {variant === 'light' ? '🌙' : '☀️'}
      </Button>
    </div>
  );
}
```

### Custom Theme Creation

```typescript
// Custom theme object structure
interface CustomTheme {
  name: string;
  id: string;
  light: {
    background: string; // OKLCH format
    foreground: string;
    primary: string;
    primaryForeground: string;
    secondary: string;
    secondaryForeground: string;
    muted: string;
    mutedForeground: string;
    accent: string;
    accentForeground: string;
    destructive: string;
    destructiveForeground: string;
    border: string;
    input: string;
    ring: string;
  };
  dark: {
    // Same structure as light
  };
}
```

## Example Implementations

### Basic App Structure

```jsx
/**
 * Basic application with UIKit theme provider and components
 * @module @voilajsx/uikit
 * @file examples/basic-app.jsx
 */

import { ThemeProvider } from '@voilajsx/uikit/theme-provider';
import { Button } from '@voilajsx/uikit/button';
import { Card, CardHeader, CardTitle, CardContent } from '@voilajsx/uikit/card';
import '@voilajsx/uikit/styles';

/**
 * Main application component with theme provider
 * @returns {JSX.Element} Application component
 */
function App() {
  return (
    <ThemeProvider theme="default" variant="light">
      <div className="min-h-screen bg-background">
        <main className="container mx-auto p-6">
          <Card>
            <CardHeader>
              <CardTitle>Welcome to UIKit</CardTitle>
            </CardHeader>
            <CardContent>
              <Button>Get Started</Button>
            </CardContent>
          </Card>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
```

### Form Example

```jsx
/**
 * Contact form using UIKit form components and React Hook Form
 * @module @voilajsx/uikit
 * @file examples/contact-form.jsx
 */

import { useForm } from 'react-hook-form';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@voilajsx/uikit/form';
import { Input } from '@voilajsx/uikit/input';
import { Textarea } from '@voilajsx/uikit/textarea';
import { Button } from '@voilajsx/uikit/button';
import { Card, CardHeader, CardTitle, CardContent } from '@voilajsx/uikit/card';

/**
 * Contact form component with validation
 * @returns {JSX.Element} Contact form component
 */
function ContactForm() {
  const form = useForm({
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = (data) => {
    console.log('Form submitted:', data);
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Contact Us</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Your message..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}

export default ContactForm;
```

### Dashboard Layout

```jsx
/**
 * Dashboard layout using UIKit layout components and navigation
 * @module @voilajsx/uikit
 * @file examples/dashboard.jsx
 */

import { Header } from '@voilajsx/uikit/header';
import { Sidebar } from '@voilajsx/uikit/sidebar';
import { Container } from '@voilajsx/uikit/container';
import { Button } from '@voilajsx/uikit/button';
import { Card, CardHeader, CardTitle, CardContent } from '@voilajsx/uikit/card';
import { Badge } from '@voilajsx/uikit/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@voilajsx/uikit/avatar';
import { useTheme } from '@voilajsx/uikit/theme-provider';

/**
 * Dashboard layout with header, sidebar, and main content
 * @returns {JSX.Element} Dashboard component
 */
function Dashboard() {
  const { toggleVariant, variant } = useTheme();

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar className="w-64">
        <div className="p-6">
          <h2 className="text-lg font-semibold">Dashboard</h2>
          <nav className="mt-6 space-y-2">
            <Button variant="ghost" className="w-full justify-start">
              Overview
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Analytics
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Settings
            </Button>
          </nav>
        </div>
      </Sidebar>

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <Header>
          <Container className="flex h-16 items-center justify-between">
            <h1 className="text-xl font-semibold">Welcome Back</h1>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" onClick={toggleVariant}>
                {variant === 'light' ? '🌙' : '☀️'}
              </Button>
              <Avatar>
                <AvatarImage src="/avatar.jpg" alt="User" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
          </Container>
        </Header>

        {/* Page Content */}
        <main className="p-6">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    Users
                    <Badge variant="secondary">+12%</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">1,234</p>
                  <p className="text-sm text-muted-foreground">
                    Active this month
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    Revenue
                    <Badge variant="default">+5%</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">$12,345</p>
                  <p className="text-sm text-muted-foreground">This quarter</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    Orders
                    <Badge variant="destructive">-2%</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">567</p>
                  <p className="text-sm text-muted-foreground">This week</p>
                </CardContent>
              </Card>
            </div>
          </Container>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
```

### Data Table Example

```jsx
/**
 * Data table with sorting and filtering using UIKit components
 * @module @voilajsx/uikit
 * @file examples/users-table.jsx
 */

import { useState } from 'react';
import { DataTable } from '@voilajsx/uikit/data-table';
import { Button } from '@voilajsx/uikit/button';
import { Input } from '@voilajsx/uikit/input';
import { Badge } from '@voilajsx/uikit/badge';
import { Card, CardHeader, CardTitle, CardContent } from '@voilajsx/uikit/card';

/**
 * Users table component with search and actions
 * @returns {JSX.Element} Users table component
 */
function UsersTable() {
  const [users] = useState([
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      role: 'Admin',
      status: 'Active',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      role: 'User',
      status: 'Active',
    },
    {
      id: 3,
      name: 'Bob Johnson',
      email: 'bob@example.com',
      role: 'User',
      status: 'Inactive',
    },
  ]);

  const columns = [
    {
      key: 'name',
      title: 'Name',
      render: (value) => <span className="font-medium">{value}</span>,
    },
    {
      key: 'email',
      title: 'Email',
      render: (value) => <span className="text-muted-foreground">{value}</span>,
    },
    {
      key: 'role',
      title: 'Role',
      render: (value) => (
        <Badge variant={value === 'Admin' ? 'default' : 'secondary'}>
          {value}
        </Badge>
      ),
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
      sortable: false,
      render: (_, row) => (
        <div className="flex gap-2">
          <Button variant="ghost" size="sm">
            Edit
          </Button>
          <Button variant="ghost" size="sm">
            Delete
          </Button>
        </div>
      ),
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Users Management</CardTitle>
      </CardHeader>
      <CardContent>
        <DataTable
          columns={columns}
          data={users}
          searchable={true}
          sortable={true}
        />
      </CardContent>
    </Card>
  );
}

export default UsersTable;
```

### Authentication Template Example

```jsx
/**
 * Login page using AuthTemplate for centered authentication layout
 * @module @voilajsx/uikit
 * @file examples/login-page.jsx
 */

import { AuthTemplate } from '@voilajsx/uikit/templates/auth';
import { Card, CardHeader, CardTitle, CardContent } from '@voilajsx/uikit/card';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
} from '@voilajsx/uikit/form';
import { Input } from '@voilajsx/uikit/input';
import { Button } from '@voilajsx/uikit/button';
import { useForm } from 'react-hook-form';

/**
 * Login page component with authentication template
 * @returns {JSX.Element} Login page component
 */
function LoginPage() {
  const form = useForm();

  const onSubmit = (data) => {
    console.log('Login attempt:', data);
  };

  return (
    <AuthTemplate
      title="Welcome Back"
      subtitle="Sign in to your account to continue"
    >
      <Card>
        <CardHeader>
          <CardTitle>Sign In</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        {...field}
                      />
                    </FormControl>
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
                        placeholder="Password"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">
                Sign In
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </AuthTemplate>
  );
}

export default LoginPage;
```

### Default Template Example

```jsx
/**
 * Complete application layout using DefaultTemplate
 * @module @voilajsx/uikit
 * @file examples/app-layout.jsx
 */

import { DefaultTemplate } from '@voilajsx/uikit/templates/default';
import { Button } from '@voilajsx/uikit/button';
import { Avatar, AvatarImage, AvatarFallback } from '@voilajsx/uikit/avatar';
import { Card, CardHeader, CardTitle, CardContent } from '@voilajsx/uikit/card';
import { useTheme } from '@voilajsx/uikit/theme-provider';

/**
 * Navigation bar component for header
 * @returns {JSX.Element} Navigation bar
 */
function NavigationBar() {
  const { toggleVariant, variant } = useTheme();

  return (
    <div className="flex items-center justify-between w-full">
      <h1 className="text-xl font-semibold">My Application</h1>
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={toggleVariant}>
          {variant === 'light' ? '🌙' : '☀️'}
        </Button>
        <Avatar>
          <AvatarImage src="/avatar.jpg" alt="User" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}

/**
 * Sidebar navigation menu
 * @returns {JSX.Element} Sidebar navigation
 */
function NavigationMenu() {
  return (
    <nav className="p-6 space-y-2">
      <h2 className="text-lg font-semibold mb-4">Navigation</h2>
      <Button variant="ghost" className="w-full justify-start">
        Dashboard
      </Button>
      <Button variant="ghost" className="w-full justify-start">
        Users
      </Button>
      <Button variant="ghost" className="w-full justify-start">
        Settings
      </Button>
      <Button variant="ghost" className="w-full justify-start">
        Analytics
      </Button>
    </nav>
  );
}

/**
 * Application footer content
 * @returns {JSX.Element} Footer content
 */
function AppFooter() {
  return (
    <div className="text-center text-sm text-muted-foreground">
      © 2024 My Application. All rights reserved.
    </div>
  );
}

/**
 * Main application layout using DefaultTemplate
 * @returns {JSX.Element} Application layout
 */
function AppLayout() {
  return (
    <DefaultTemplate
      headerContent={<NavigationBar />}
      sidebarContent={<NavigationMenu />}
      footerContent={<AppFooter />}
    >
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Total Users</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">1,234</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Revenue</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">$12,345</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Orders</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">567</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </DefaultTemplate>
  );
}

export default AppLayout;
```

### Form Template Example

```jsx
/**
 * Settings page using FormTemplate for form-optimized layout
 * @module @voilajsx/uikit
 * @file examples/settings-page.jsx
 */

import { FormTemplate } from '@voilajsx/uikit/templates/form';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
} from '@voilajsx/uikit/form';
import { Input } from '@voilajsx/uikit/input';
import { Textarea } from '@voilajsx/uikit/textarea';
import { Switch } from '@voilajsx/uikit/switch';
import { Button } from '@voilajsx/uikit/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@voilajsx/uikit/select';
import { useForm } from 'react-hook-form';

/**
 * Settings page with form template
 * @returns {JSX.Element} Settings page component
 */
function SettingsPage() {
  const form = useForm({
    defaultValues: {
      name: 'John Doe',
      email: 'john@example.com',
      bio: '',
      notifications: true,
      theme: 'system',
    },
  });

  const onSubmit = (data) => {
    console.log('Settings saved:', data);
  };

  const formActions = (
    <div className="flex gap-2">
      <Button variant="outline" type="button">
        Cancel
      </Button>
      <Button type="submit" form="settings-form">
        Save Changes
      </Button>
    </div>
  );

  return (
    <FormTemplate
      title="Account Settings"
      actions={formActions}
      onSubmit={form.handleSubmit(onSubmit)}
    >
      <Form {...form}>
        <div id="settings-form" className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Profile Information</h3>

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your full name" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="bio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bio</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us about yourself..."
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Preferences</h3>

            <FormField
              control={form.control}
              name="theme"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Theme</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a theme" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="notifications"
              render={({ field }) => (
                <FormItem className="flex items-center justify-between">
                  <div>
                    <FormLabel>Email Notifications</FormLabel>
                    <FormDescription>
                      Receive email notifications about your account activity.
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
        </div>
      </Form>
    </FormTemplate>
  );
}

export default SettingsPage;
```

### Table Template Example

```jsx
/**
 * Users management page using TableTemplate
 * @module @voilajsx/uikit
 * @file examples/users-management.jsx
 */

import { useState } from 'react';
import { TableTemplate } from '@voilajsx/uikit/templates/table';
import { DataTable } from '@voilajsx/uikit/data-table';
import { Button } from '@voilajsx/uikit/button';
import { Badge } from '@voilajsx/uikit/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@voilajsx/uikit/select';
import { Avatar, AvatarImage, AvatarFallback } from '@voilajsx/uikit/avatar';

/**
 * Users management page with table template
 * @returns {JSX.Element} Users management component
 */
function UsersManagement() {
  const [users] = useState([
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      role: 'Admin',
      status: 'Active',
      avatar: '/avatars/john.jpg',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      role: 'User',
      status: 'Active',
      avatar: '/avatars/jane.jpg',
    },
    {
      id: 3,
      name: 'Bob Johnson',
      email: 'bob@example.com',
      role: 'Moderator',
      status: 'Inactive',
      avatar: null,
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  const tableActions = (
    <div className="flex gap-2">
      <Button>Add User</Button>
      <Button variant="outline">Export</Button>
    </div>
  );

  const tableFilters = (
    <div className="flex gap-2">
      <Select defaultValue="all">
        <SelectTrigger className="w-32">
          <SelectValue placeholder="Role" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Roles</SelectItem>
          <SelectItem value="admin">Admin</SelectItem>
          <SelectItem value="user">User</SelectItem>
          <SelectItem value="moderator">Moderator</SelectItem>
        </SelectContent>
      </Select>

      <Select defaultValue="all">
        <SelectTrigger className="w-32">
          <SelectValue placeholder="Status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Status</SelectItem>
          <SelectItem value="active">Active</SelectItem>
          <SelectItem value="inactive">Inactive</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );

  const columns = [
    {
      key: 'user',
      title: 'User',
      render: (_, row) => (
        <div className="flex items-center gap-3">
          <Avatar className="h-8 w-8">
            <AvatarImage src={row.avatar} alt={row.name} />
            <AvatarFallback>
              {row.name
                .split(' ')
                .map((n) => n[0])
                .join('')}
            </AvatarFallback>
          </Avatar>
          <div>
            <div className="font-medium">{row.name}</div>
            <div className="text-sm text-muted-foreground">{row.email}</div>
          </div>
        </div>
      ),
    },
    {
      key: 'role',
      title: 'Role',
      render: (value) => (
        <Badge
          variant={
            value === 'Admin'
              ? 'default'
              : value === 'Moderator'
              ? 'secondary'
              : 'outline'
          }
        >
          {value}
        </Badge>
      ),
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
      sortable: false,
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

  return (
    <TableTemplate
      title="User Management"
      searchable={true}
      searchPlaceholder="Search users..."
      onSearch={handleSearch}
      actions={tableActions}
      filters={tableFilters}
    >
      <DataTable
        columns={columns}
        data={users}
        searchable={false} // Search handled by template
        sortable={true}
      />
    </TableTemplate>
  );
}

export default UsersManagement;
```

### Blank Template Example

```jsx
/**
 * Simple content page using BlankTemplate
 * @module @voilajsx/uikit
 * @file examples/about-page.jsx
 */

import { BlankTemplate } from '@voilajsx/uikit/templates/blank';
import { Card, CardHeader, CardTitle, CardContent } from '@voilajsx/uikit/card';
import { Button } from '@voilajsx/uikit/button';
import { Separator } from '@voilajsx/uikit/separator';

/**
 * About page using blank template for minimal layout
 * @returns {JSX.Element} About page component
 */
function AboutPage() {
  return (
    <BlankTemplate containerProps={{ size: 'lg' }}>
      <div className="py-12">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-4xl font-bold mb-4">
              About Our Company
            </CardTitle>
            <p className="text-xl text-muted-foreground">
              Building the future of web development
            </p>
          </CardHeader>
          <CardContent className="prose prose-gray max-w-none">
            <div className="space-y-6">
              <p className="text-lg">
                We are a team of passionate developers creating tools that make
                web development faster, easier, and more enjoyable. Our mission
                is to empower developers with beautiful, functional components
                that work across all platforms.
              </p>

              <Separator />

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
                  <p>
                    To create a world where building beautiful user interfaces
                    is accessible to everyone, regardless of their platform or
                    technical background.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
                  <p>
                    Providing developers with high-quality, cross-platform
                    components that maintain consistency and accessibility
                    across all devices.
                  </p>
                </div>
              </div>

              <Separator />

              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">
                  Ready to Get Started?
                </h3>
                <div className="flex gap-4 justify-center">
                  <Button size="lg">View Documentation</Button>
                  <Button variant="outline" size="lg">
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </BlankTemplate>
  );
}

export default AboutPage;
```

```jsx
/**
 * Custom theme creation and registration example
 * @module @voilajsx/uikit
 * @file examples/custom-theme.jsx
 */

import { ThemeProvider } from '@voilajsx/uikit/theme-provider';
import { Button } from '@voilajsx/uikit/button';
import { Card, CardContent } from '@voilajsx/uikit/card';

/**
 * Custom brand theme using OKLCH colors
 */
const brandTheme = {
  name: 'Brand Theme',
  id: 'brand',
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

/**
 * App component using custom theme
 * @returns {JSX.Element} App with custom theme
 */
function CustomThemeApp() {
  return (
    <ThemeProvider theme="brand" customThemes={[brandTheme]}>
      <div className="min-h-screen bg-background p-8">
        <Card className="max-w-md mx-auto">
          <CardContent className="p-6 text-center">
            <h1 className="text-2xl font-bold mb-4">Custom Brand Theme</h1>
            <p className="text-muted-foreground mb-6">
              This app uses a custom theme with brand colors.
            </p>
            <div className="space-y-2">
              <Button className="w-full">Primary Action</Button>
              <Button variant="secondary" className="w-full">
                Secondary Action
              </Button>
              <Button variant="outline" className="w-full">
                Outline Button
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </ThemeProvider>
  );
}

export default CustomThemeApp;
```

## Code Generation Rules

1. **Always include file header** with description, @module, and @file tags
2. **Use JSDoc for all components** with one clear sentence descriptions
3. **Always import styles**: Include `@voilajsx/uikit/styles` in main App component
4. **Use ThemeProvider**: Wrap all apps in ThemeProvider with appropriate theme
5. **Follow import patterns**: Use direct component imports from specific paths
6. **Use Tailwind classes**: Apply Tailwind CSS for additional styling
7. **Include responsive design**: Use responsive Tailwind classes (sm:, md:, lg:)
8. **Handle theme switching**: Implement theme selector when multiple themes needed
9. **Use semantic HTML**: Ensure proper accessibility with semantic elements
10. **Focus on minimal file size** - avoid unnecessary comments
11. **Follow React best practices**: Use hooks, functional components, proper state management
12. **Use appropriate templates**: Choose the right template for the page type (Auth, Default, Form, Table, Blank)
13. **Template consistency**: Follow template patterns for consistent user experience across pages

## Common Patterns

### App Initialization

```jsx
// Always wrap in ThemeProvider with styles import
import { ThemeProvider } from '@voilajsx/uikit/theme-provider';
import '@voilajsx/uikit/styles';

function App() {
  return (
    <ThemeProvider theme="studio" variant="light" detectSystem={true}>
      {/* App content */}
    </ThemeProvider>
  );
}
```

### Layout Structure

```jsx
// Use layout components for consistent structure
import { Header } from '@voilajsx/uikit/header';
import { Container } from '@voilajsx/uikit/container';
import { Sidebar } from '@voilajsx/uikit/sidebar';

// Standard layout pattern
<div className="flex min-h-screen">
  <Sidebar />
  <div className="flex-1">
    <Header />
    <main>
      <Container>{/* Content */}</Container>
    </main>
  </div>
</div>;
```

### Form Patterns

```jsx
// Always use React Hook Form with Form components
import { useForm } from 'react-hook-form';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
} from '@voilajsx/uikit/form';

const form = useForm();

<Form {...form}>
  <form onSubmit={form.handleSubmit(onSubmit)}>
    <FormField
      control={form.control}
      name="fieldName"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Label</FormLabel>
          <FormControl>
            <Input {...field} />
          </FormControl>
        </FormItem>
      )}
    />
  </form>
</Form>;
```

---

<p align="center">
  Built with ❤️ in India by the <a href="https://github.com/orgs/voilajsx/people">VoilaJSX Team</a> — powering modern web development.
</p>
