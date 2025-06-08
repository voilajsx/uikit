import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@voilajsx/uikit/card';
import { Button } from '@voilajsx/uikit/button';
import { Badge } from '@voilajsx/uikit/badge';
import { Input } from '@voilajsx/uikit/input';
import { Avatar, AvatarImage, AvatarFallback } from '@voilajsx/uikit/avatar';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@voilajsx/uikit/table';
import { DefaultTemplate } from '@voilajsx/uikit/templates/default';
import { AuthTemplate } from '@voilajsx/uikit/templates/auth';
import { FormTemplate } from '@voilajsx/uikit/templates/form';
import { TableTemplate } from '@voilajsx/uikit/templates/table';
import { BarChart3, Users, Settings, Database, Shield } from 'lucide-react';
import CodeBlock from '../components/CodeBlock';

const dashboardCode = `import { DefaultTemplate } from '@voilajsx/uikit/templates/default';
import { Card, CardHeader, CardTitle, CardContent } from '@voilajsx/uikit/card';
import { Button } from '@voilajsx/uikit/button';
import { Badge } from '@voilajsx/uikit/badge';

function Dashboard() {
  return (
    <DefaultTemplate
      headerContent={
        <div className="flex items-center justify-between w-full">
          <h1 className="text-xl font-semibold">Analytics Dashboard</h1>
          <Button variant="outline">Export</Button>
        </div>
      }
      sidebarContent={
        <nav className="p-6 space-y-2">
          <Button variant="ghost" className="w-full justify-start">
            📊 Dashboard
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            👥 Users
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            ⚙️ Settings
          </Button>
        </nav>
      }
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Users
              <Badge variant="secondary">+12%</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">1,234</p>
            <p className="text-sm text-muted-foreground">Active this month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">$12,345</p>
            <p className="text-sm text-muted-foreground">This quarter</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Conversion</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">2.4%</p>
            <p className="text-sm text-muted-foreground">Last 30 days</p>
          </CardContent>
        </Card>
      </div>
    </DefaultTemplate>
  );
}`;

const authFlowCode = `import { AuthTemplate } from '@voilajsx/uikit/templates/auth';
import { Card, CardHeader, CardTitle, CardContent } from '@voilajsx/uikit/card';
import { Button } from '@voilajsx/uikit/button';
import { Input } from '@voilajsx/uikit/input';
import { Label } from '@voilajsx/uikit/label';

function LoginPage() {
  return (
    <AuthTemplate 
      title="Welcome Back" 
      subtitle="Sign in to your account"
    >
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Sign In</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input 
              id="email" 
              type="email" 
              placeholder="your@email.com" 
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input 
              id="password" 
              type="password" 
              placeholder="Password" 
            />
          </div>
          
          <Button className="w-full">Sign In</Button>
          
          <div className="text-center">
            <Button variant="link" className="text-sm">
              Forgot password?
            </Button>
          </div>
        </CardContent>
      </Card>
    </AuthTemplate>
  );
}`;

const dataManagementCode = `import { TableTemplate } from '@voilajsx/uikit/templates/table';
import { Button } from '@voilajsx/uikit/button';
import { Badge } from '@voilajsx/uikit/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@voilajsx/uikit/avatar';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@voilajsx/uikit/table';

const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active' },
  { id: 3, name: 'Bob Wilson', email: 'bob@example.com', role: 'User', status: 'Inactive' },
];

function UserManagement() {
  return (
    <TableTemplate
      title="User Management"
      searchable={true}
      searchPlaceholder="Search users..."
      actions={
        <div className="flex gap-2">
          <Button>Add User</Button>
          <Button variant="outline">Export</Button>
        </div>
      }
    >
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>User</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>
                <div className="flex items-center gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>
                      {user.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{user.name}</div>
                    <div className="text-sm text-muted-foreground">{user.email}</div>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <Badge variant={user.role === 'Admin' ? 'default' : 'secondary'}>
                  {user.role}
                </Badge>
              </TableCell>
              <TableCell>
                <Badge variant={user.status === 'Active' ? 'default' : 'destructive'}>
                  {user.status}
                </Badge>
              </TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm">Edit</Button>
                  <Button variant="ghost" size="sm">Delete</Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableTemplate>
  );
}`;

const settingsPageCode = `import { FormTemplate } from '@voilajsx/uikit/templates/form';
import { Card, CardHeader, CardTitle, CardContent } from '@voilajsx/uikit/card';
import { Button } from '@voilajsx/uikit/button';
import { Input } from '@voilajsx/uikit/input';
import { Label } from '@voilajsx/uikit/label';
import { Switch } from '@voilajsx/uikit/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@voilajsx/uikit/select';

function SettingsPage() {
  return (
    <FormTemplate
      title="Account Settings"
      actions={
        <div className="flex gap-2">
          <Button variant="outline">Cancel</Button>
          <Button>Save Changes</Button>
        </div>
      }
    >
      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Profile Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>First Name</Label>
                <Input placeholder="John" />
              </div>
              <div className="space-y-2">
                <Label>Last Name</Label>
                <Input placeholder="Doe" />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label>Email</Label>
              <Input type="email" placeholder="john@example.com" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Preferences</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label>Email Notifications</Label>
                <p className="text-sm text-muted-foreground">
                  Receive email about your account activity
                </p>
              </div>
              <Switch />
            </div>
            
            <div className="space-y-2">
              <Label>Theme</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
      </div>
    </FormTemplate>
  );
}`;

const examples = [
  {
    title: 'Dashboard Application',
    description: 'Complete analytics dashboard with stats, charts, and navigation',
    icon: BarChart3,
    code: dashboardCode,
    features: ['Header + Sidebar layout', 'Statistics cards', 'Navigation menu', 'Export functionality'],
    useCase: 'Admin panels, analytics dashboards, business intelligence'
  },
  {
    title: 'Authentication Flow',
    description: 'Centered login page with form validation and error handling',
    icon: Shield,
    code: authFlowCode,
    features: ['Centered layout', 'Form validation', 'Responsive design', 'Clean typography'],
    useCase: 'Login, register, password reset, account verification'
  },
  {
    title: 'Data Management',
    description: 'User management table with search, filtering, and actions',
    icon: Database,
    code: dataManagementCode,
    features: ['Search functionality', 'Action buttons', 'Status badges', 'Avatar display'],
    useCase: 'Admin panels, CRM systems, user management, content management'
  },
  {
    title: 'Settings Page',
    description: 'Form-based settings page with multiple sections and controls',
    icon: Settings,
    code: settingsPageCode,
    features: ['Form sections', 'Multiple input types', 'Action buttons', 'Save/cancel flow'],
    useCase: 'User preferences, configuration, profile editing, system settings'
  }
];

function Examples() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold mb-4">Examples</h1>
        <p className="text-xl text-muted-foreground">
          Complete application examples showcasing real-world patterns and best practices.
        </p>
      </div>

      {/* Why Examples */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Learn by Example</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">🎯 Real Patterns</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Production-ready patterns you can copy and customize.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">⚡ Quick Start</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Get a working application in minutes, not hours.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">🏗️ Best Practices</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Learn proper component composition and layout patterns.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Examples */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Complete Examples</h2>
        <div className="space-y-16">
          {examples.map((example, index) => {
            const Icon = example.icon;
            return (
              <div key={example.title} className="space-y-6">
                {/* Example Header */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-semibold">{example.title}</h3>
                      <Badge variant="outline">{index + 1}/4</Badge>
                    </div>
                    <p className="text-muted-foreground mb-3">{example.description}</p>
                    <p className="text-sm"><strong>Perfect for:</strong> {example.useCase}</p>
                  </div>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {example.features.map((feature) => (
                    <Badge key={feature} variant="secondary" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>

                {/* Code */}
                <CodeBlock 
                  code={example.code} 
                  title={`${example.title} - Complete Example`}
                />

                {index < examples.length - 1 && <hr className="my-12" />}
              </div>
            );
          })}
        </div>
      </section>

      {/* Cross-Platform Note */}
      <section>
        <Card className="bg-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              📱 Cross-Platform Ready
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              All these examples work across platforms:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div>✅ <strong>Web</strong> - All browsers</div>
              <div>✅ <strong>React Native</strong> - iOS & Android</div>
              <div>✅ <strong>Expo</strong> - Universal apps</div>
              <div>✅ <strong>Tauri</strong> - Desktop apps</div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Next Steps */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Build Your Own</h2>
        <Card>
          <CardContent className="pt-6">
            <p className="text-muted-foreground mb-4">
              Ready to build your own application? Start with a template and customize:
            </p>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm">Use AuthTemplate</Button>
              <Button variant="outline" size="sm">Use DefaultTemplate</Button>
              <Button variant="outline" size="sm">Use FormTemplate</Button>
              <Button variant="outline" size="sm">Use TableTemplate</Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}

export default Examples;