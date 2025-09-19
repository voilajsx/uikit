# Quick Start: Multi-Layout Application

**Build professional applications with pre-built layouts: AdminLayout, PageLayout, AuthLayout, and more.**

## 🎯 What is Multi Template?

The Multi template provides pre-built layout components that handle complex UI patterns like admin dashboards, marketing pages, and authentication flows. Perfect for applications that need professional layouts without building from scratch.

**Perfect for:**
- Admin dashboards and management tools
- SaaS applications with multiple user types
- E-commerce platforms
- Business applications
- Applications with authentication flows

## ⚡ 30-Second Setup

### Step 1: Install UIKit CLI Globally
```bash
# Install globally
npm install -g @voilajsx/uikit

# Check if you have the latest version
npm list -g @voilajsx/uikit

# Update if needed
npm update -g @voilajsx/uikit
```

### Step 2: Create Multi Project
```bash
uikit create my-multi-app --multi --theme elegant
cd my-multi-app && npm run dev
```

This creates a complete multi-layout application with:
- ✅ AdminLayout for dashboards
- ✅ PageLayout for marketing pages
- ✅ AuthLayout for login/signup
- ✅ React Router integration
- ✅ Navigation management
- ✅ Responsive design

### Step 2: Project Structure
```
src/
├── components/
│   └── ui/                     # UIKit components
├── pages/
│   ├── admin/
│   │   ├── Dashboard.tsx       # Admin dashboard
│   │   ├── Users.tsx           # User management
│   │   └── Settings.tsx        # Admin settings
│   ├── auth/
│   │   ├── Login.tsx           # Login page
│   │   └── Register.tsx        # Registration page
│   ├── Home.tsx               # Homepage
│   ├── About.tsx              # About page
│   └── Contact.tsx            # Contact page
├── App.tsx                    # Router setup
├── main.tsx                   # Entry point
└── index.css                  # Global styles
```

## 🏗️ Layout Components Overview

### Layout Decision Tree
```
What are you building?
├── Dashboard/Admin Panel → AdminLayout
├── Company Website → PageLayout
├── Login/Signup Page → AuthLayout
├── Error/About Page → BlankLayout
└── Chrome Extension/Popup → PopupLayout
```

### AdminLayout - For Dashboards
**Compound Layout** - Use child components
```jsx
<AdminLayout scheme="sidebar" tone="subtle" size="lg">
  <AdminLayout.Header title="Dashboard" position="sticky" />
  <AdminLayout.Sidebar navigation={nav} />
  <AdminLayout.Content>
    <YourContent />
  </AdminLayout.Content>
</AdminLayout>
```

### PageLayout - For Marketing Pages
**Compound Layout** - Use child components
```jsx
<PageLayout scheme="base" tone="clean" size="xl">
  <PageLayout.Header navigation={nav} />
  <PageLayout.Content>
    <YourContent />
  </PageLayout.Content>
  <PageLayout.Footer />
</PageLayout>
```

### AuthLayout - For Authentication
**Single Layout** - Direct children
```jsx
<AuthLayout scheme="card" tone="clean" size="md">
  <LoginForm />
</AuthLayout>
```

## 🎛️ AdminLayout Examples

### Complete Admin Dashboard
```jsx
import { AdminLayout } from '@voilajsx/uikit/admin';
import { Card, CardHeader, CardTitle, CardContent } from '@voilajsx/uikit/card';
import { Button } from '@voilajsx/uikit/button';
import { Badge } from '@voilajsx/uikit/badge';
import {
  LayoutDashboard,
  Users,
  Settings,
  BarChart3,
  Plus
} from 'lucide-react';

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

const stats = [
  { title: 'Total Users', value: '2,543', change: '+12%', trend: 'up' },
  { title: 'Revenue', value: '$45,678', change: '+8%', trend: 'up' },
  { title: 'Orders', value: '892', change: '+23%', trend: 'up' },
  { title: 'Conversion', value: '3.24%', change: '+0.4%', trend: 'up' },
];

function AdminDashboard() {
  const handleNavigation = (href, item) => {
    if (item.onClick) {
      item.onClick();
    } else if (href) {
      window.location.href = href; // Use your router here
    }
  };

  return (
    <AdminLayout scheme="sidebar" tone="subtle" size="lg">
      <AdminLayout.Header
        title="Dashboard"
        position="sticky"
        breadcrumbs={[
          { label: 'Admin', href: '/admin' },
          { label: 'Dashboard' },
        ]}
        actions={
          <Button className="bg-primary text-primary-foreground">
            <Plus className="h-4 w-4 mr-2" />
            New Project
          </Button>
        }
      />

      <AdminLayout.Sidebar
        navigation={navigation}
        currentPath="/admin"
        onNavigate={handleNavigation}
        logo={
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg"></div>
            <span className="text-xl font-bold text-foreground">AdminApp</span>
          </div>
        }
      />

      <AdminLayout.Content>
        <div className="space-y-6">
          {/* Stats Grid */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-card border-border">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-foreground">
                    {stat.title}
                  </CardTitle>
                  <BarChart3 className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="flex items-center space-x-1 text-xs">
                    <Badge className="bg-green-100 text-green-800">
                      {stat.change}
                    </Badge>
                    <span className="text-muted-foreground">from last month</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Content Sections */}
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium text-foreground">
                          User registered
                        </p>
                        <p className="text-xs text-muted-foreground">
                          2 minutes ago
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Button className="w-full bg-primary text-primary-foreground justify-start">
                    <Plus className="h-4 w-4 mr-2" />
                    Create New User
                  </Button>
                  <Button variant="outline" className="w-full border-border justify-start">
                    <BarChart3 className="h-4 w-4 mr-2" />
                    View Reports
                  </Button>
                  <Button variant="outline" className="w-full border-border justify-start">
                    <Settings className="h-4 w-4 mr-2" />
                    Manage Settings
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </AdminLayout.Content>
    </AdminLayout>
  );
}

export default AdminDashboard;
```

### User Management Page
```jsx
import { AdminLayout } from '@voilajsx/uikit/admin';
import { DataTable } from '@voilajsx/uikit/data-table';
import { Button } from '@voilajsx/uikit/button';
import { Badge } from '@voilajsx/uikit/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@voilajsx/uikit/avatar';
import { Edit, Trash2, Eye } from 'lucide-react';

const users = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    role: 'Admin',
    status: 'active',
    avatar: 'https://avatar.vercel.sh/john',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'User',
    status: 'inactive',
    avatar: 'https://avatar.vercel.sh/jane',
  },
];

const columns = [
  {
    id: 'user',
    header: 'User',
    cell: (value, row) => (
      <div className="flex items-center gap-3">
        <Avatar className="h-8 w-8">
          <AvatarImage src={row.avatar} alt={row.name} />
          <AvatarFallback className="bg-primary text-primary-foreground">
            {row.name.split(' ').map(n => n[0]).join('')}
          </AvatarFallback>
        </Avatar>
        <div>
          <div className="font-medium text-foreground">{row.name}</div>
          <div className="text-sm text-muted-foreground">{row.email}</div>
        </div>
      </div>
    ),
  },
  {
    id: 'role',
    header: 'Role',
    accessorKey: 'role',
  },
  {
    id: 'status',
    header: 'Status',
    cell: (value, row) => (
      <Badge
        className={
          row.status === 'active'
            ? 'bg-green-100 text-green-800'
            : 'bg-red-100 text-red-800'
        }
      >
        {row.status}
      </Badge>
    ),
  },
];

const actions = [
  {
    id: 'view',
    label: 'View',
    icon: Eye,
    onClick: (user) => console.log('View:', user.name),
  },
  {
    id: 'edit',
    label: 'Edit',
    icon: Edit,
    onClick: (user) => console.log('Edit:', user.name),
  },
  {
    id: 'delete',
    label: 'Delete',
    icon: Trash2,
    variant: 'destructive',
    onClick: (user) => console.log('Delete:', user.name),
  },
];

function UsersPage() {
  return (
    <AdminLayout scheme="sidebar" tone="subtle" size="lg">
      <AdminLayout.Header
        title="Users"
        breadcrumbs={[
          { label: 'Admin', href: '/admin' },
          { label: 'Users' },
        ]}
        actions={
          <Button className="bg-primary text-primary-foreground">
            Add User
          </Button>
        }
      />

      <AdminLayout.Sidebar navigation={navigation} currentPath="/admin/users" />

      <AdminLayout.Content>
        <DataTable
          data={users}
          columns={columns}
          actions={actions}
          searchable
          filterable
          pagination
          className="bg-background border-border"
        />
      </AdminLayout.Content>
    </AdminLayout>
  );
}
```

## 🌐 PageLayout Examples

### Marketing Homepage
```jsx
import { PageLayout } from '@voilajsx/uikit/page';
import { Button } from '@voilajsx/uikit/button';
import { Card, CardHeader, CardTitle, CardContent } from '@voilajsx/uikit/card';
import { Badge } from '@voilajsx/uikit/badge';
import { ArrowRight, Star, Users, Zap } from 'lucide-react';

const navigation = [
  { key: 'home', label: 'Home', href: '/', isActive: true },
  { key: 'about', label: 'About', href: '/about' },
  { key: 'services', label: 'Services', href: '/services' },
  { key: 'contact', label: 'Contact', href: '/contact' },
];

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized for speed and performance across all devices.'
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Work together seamlessly with real-time collaboration.'
  },
  {
    icon: Star,
    title: 'Premium Quality',
    description: 'Enterprise-grade reliability you can depend on.'
  }
];

function Homepage() {
  return (
    <PageLayout scheme="base" tone="clean" size="xl">
      <PageLayout.Header
        navigation={navigation}
        currentPath="/"
        logo={
          <div className="text-2xl font-bold text-foreground">
            Company
          </div>
        }
        actions={
          <div className="flex gap-2">
            <Button variant="outline" className="border-border">
              Sign In
            </Button>
            <Button className="bg-primary text-primary-foreground">
              Get Started
            </Button>
          </div>
        }
      />

      <PageLayout.Content>
        {/* Hero Section */}
        <section className="text-center py-20 bg-gradient-to-b from-background to-muted/20">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-primary/10 text-primary">
              ✨ Now Available
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Build the Future with
              <span className="text-primary"> Our Platform</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Everything you need to create, deploy, and scale modern applications.
              Join thousands of developers who trust our platform.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="border-border">
                View Demo
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Why Choose Our Platform?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Powerful features designed to help you succeed in today's competitive market.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-card border-border">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-foreground">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted/20 rounded-2xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of companies using our platform to grow their business.
            </p>
            <Button size="lg" className="bg-primary text-primary-foreground">
              Start Your Free Trial
            </Button>
          </div>
        </section>
      </PageLayout.Content>

      <PageLayout.Footer
        copyright="© 2025 Company Name. All rights reserved."
        navigation={[
          { key: 'privacy', label: 'Privacy', href: '/privacy' },
          { key: 'terms', label: 'Terms', href: '/terms' },
          { key: 'support', label: 'Support', href: '/support' },
        ]}
      />
    </PageLayout>
  );
}
```

## 🔐 AuthLayout Examples

### Login Page
```jsx
import { useState } from 'react';
import { AuthLayout } from '@voilajsx/uikit/auth';
import { Button } from '@voilajsx/uikit/button';
import { Input } from '@voilajsx/uikit/input';
import { Label } from '@voilajsx/uikit/label';
import { Checkbox } from '@voilajsx/uikit/checkbox';
import { Separator } from '@voilajsx/uikit/separator';

function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login:', formData);
  };

  const handleChange = (field) => (value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <AuthLayout
      scheme="card"
      tone="clean"
      size="md"
      title="Welcome back"
      subtitle="Sign in to your account to continue"
      logo={
        <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
          <span className="text-2xl font-bold text-primary-foreground">L</span>
        </div>
      }
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="email" className="text-foreground">
            Email address
          </Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleChange('email')(e.target.value)}
            className="bg-background border-border text-foreground"
            placeholder="name@example.com"
            required
          />
        </div>

        <div>
          <Label htmlFor="password" className="text-foreground">
            Password
          </Label>
          <Input
            id="password"
            type="password"
            value={formData.password}
            onChange={(e) => handleChange('password')(e.target.value)}
            className="bg-background border-border text-foreground"
            placeholder="Enter your password"
            required
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="remember"
              checked={formData.remember}
              onCheckedChange={handleChange('remember')}
            />
            <Label htmlFor="remember" className="text-sm text-foreground">
              Remember me
            </Label>
          </div>
          <a href="/forgot-password" className="text-sm text-primary hover:underline">
            Forgot password?
          </a>
        </div>

        <Button
          type="submit"
          className="w-full bg-primary text-primary-foreground"
        >
          Sign in
        </Button>

        <Separator className="bg-border" />

        <div className="text-center">
          <span className="text-muted-foreground">Don't have an account? </span>
          <a href="/register" className="text-primary hover:underline">
            Sign up
          </a>
        </div>
      </form>
    </AuthLayout>
  );
}
```

### Registration Page
```jsx
import { AuthLayout } from '@voilajsx/uikit/auth';
import { ValidatedInput, ValidatedCheckbox, FormActions } from '@voilajsx/uikit/form';

function RegisterPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreed: false,
  });

  return (
    <AuthLayout
      scheme="split"
      tone="clean"
      size="lg"
      title="Create your account"
      subtitle="Join thousands of users who trust our platform"
      imageUrl="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&h=1000"
    >
      <form className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <ValidatedInput
            label="First name"
            value={formData.firstName}
            onChange={(value) => setFormData(prev => ({ ...prev, firstName: value }))}
            required
          />
          <ValidatedInput
            label="Last name"
            value={formData.lastName}
            onChange={(value) => setFormData(prev => ({ ...prev, lastName: value }))}
            required
          />
        </div>

        <ValidatedInput
          type="email"
          label="Email address"
          value={formData.email}
          onChange={(value) => setFormData(prev => ({ ...prev, email: value }))}
          required
        />

        <ValidatedInput
          type="password"
          label="Password"
          value={formData.password}
          onChange={(value) => setFormData(prev => ({ ...prev, password: value }))}
          minLength={8}
          showPasswordStrength
          showPasswordToggle
          required
        />

        <ValidatedInput
          type="password"
          label="Confirm password"
          value={formData.confirmPassword}
          onChange={(value) => setFormData(prev => ({ ...prev, confirmPassword: value }))}
          required
        />

        <ValidatedCheckbox
          label="I agree to the Terms of Service and Privacy Policy"
          checked={formData.agreed}
          onChange={(value) => setFormData(prev => ({ ...prev, agreed: value }))}
          required
        />

        <FormActions
          submitText="Create Account"
          showCancel={false}
        />
      </form>
    </AuthLayout>
  );
}
```

## 🎨 Layout Props Reference

### AdminLayout Props
```jsx
<AdminLayout
  scheme="sidebar|compact"              // Layout structure
  tone="clean|subtle|brand|contrast"    // Visual emphasis
  size="sm|md|lg|xl|full"              // Layout size
  baseSidebarOpen={true}                // Initial sidebar state
>
  <AdminLayout.Header
    title="Dashboard"                   // Page title
    position="sticky|fixed|relative"   // Header positioning
    breadcrumbs={breadcrumbItems}      // Breadcrumb navigation
    actions={<HeaderActions />}        // Header action buttons
  />
  <AdminLayout.Sidebar
    navigation={navigationItems}       // Navigation menu
    currentPath="/admin"              // Current path for active states
    onNavigate={handleNavigation}     // Navigation handler
    logo={<Logo />}                   // Logo component
  />
  <AdminLayout.Content>
    {/* Your admin content */}
  </AdminLayout.Content>
</AdminLayout>
```

### PageLayout Props
```jsx
<PageLayout
  scheme="base|sidebar"                // Layout structure
  tone="clean|subtle|brand|contrast"   // Visual emphasis
  size="sm|md|lg|xl|full"             // Layout size
>
  <PageLayout.Header
    navigation={navigationItems}       // Navigation menu
    currentPath="/"                   // Current path
    onNavigate={handleNavigation}     // Navigation handler
    logo={<Logo />}                   // Logo component
    actions={<HeaderActions />}       // Header actions
  />
  <PageLayout.Content
    title="Page Title"                // Optional page title
    breadcrumbs={breadcrumbItems}     // Optional breadcrumbs
  >
    {/* Your page content */}
  </PageLayout.Content>
  <PageLayout.Footer
    navigation={footerNav}            // Footer navigation
    copyright="© 2025 Company"        // Copyright text
  />
</PageLayout>
```

### AuthLayout Props
```jsx
<AuthLayout
  scheme="simple|card|split|hero"     // Layout structure
  tone="clean|subtle|brand|contrast"  // Visual emphasis
  size="sm|md|lg|xl|full"            // Layout size
  title="Welcome"                    // Auth page title
  subtitle="Sign in to continue"     // Auth page subtitle
  logo={<Logo />}                    // Logo component
  imageUrl="/hero.jpg"               // Background image (split/hero)
>
  {/* Your auth form */}
</AuthLayout>
```

## ✅ Multi-Layout Best Practices

### Layout Selection
- [ ] AdminLayout for dashboards, management tools, SaaS admin panels
- [ ] PageLayout for marketing sites, company pages, documentation
- [ ] AuthLayout for login, signup, password reset pages
- [ ] BlankLayout for error pages, simple content pages
- [ ] PopupLayout for browser extensions, modal content

### Navigation Management
- [ ] Use consistent navigation structure across layouts
- [ ] Implement proper active state management
- [ ] Handle navigation with your routing system (React Router, Next.js)
- [ ] Add breadcrumbs for deep page hierarchies

### Responsive Design
- [ ] Test layouts across all breakpoints (sm, md, lg, xl)
- [ ] Ensure mobile navigation works properly
- [ ] Verify sidebar collapse/expand functionality
- [ ] Test touch interactions on mobile devices

### Theme Integration
- [ ] Use semantic colors consistently across all layouts
- [ ] Test layouts with all 5 themes (base, elegant, metro, studio, vivid)
- [ ] Verify light and dark mode compatibility
- [ ] Maintain consistent branding across layouts

## 🚀 Next Steps

Once you've mastered multi-layout applications:

1. **Advanced Data Management** - Add state management (Redux, Zustand)
2. **Real-time Features** - Integrate WebSockets or SSE
3. **Authentication** - Implement protected routes and user management
4. **FBCA Template** - Feature-based architecture for scalable apps

## 📚 Resources

- [Layout Components](../UIKIT_LLM_GUIDE.md#compound-component-props) - Complete props reference
- [Navigation System](../UIKIT_LLM_GUIDE.md#navigation-system) - Advanced navigation patterns
- [DataTable Component](../UIKIT_LLM_GUIDE.md#data-table-components) - Advanced data management

---

**Built with @voilajsx/uikit** ✨