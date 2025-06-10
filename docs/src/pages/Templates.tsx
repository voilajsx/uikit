import React from 'react';
import Layout from '../components/Layout';
import { Card, CardHeader, CardTitle, CardContent } from '@voilajsx/uikit/card';
import { Button } from '@voilajsx/uikit/button';
import { Badge } from '@voilajsx/uikit/badge';
import { Layout as LayoutIcon, Shield, FileText, Table, Minus } from 'lucide-react';
import CodeBlock from '../components/CodeBlock';

const authTemplateCode = `import { AuthTemplate } from '@voilajsx/uikit/templates/auth';
import { Card, CardHeader, CardTitle, CardContent } from '@voilajsx/uikit/card';
import { Button } from '@voilajsx/uikit/button';
import { Input } from '@voilajsx/uikit/input';

function LoginPage() {
  return (
    <AuthTemplate title="Welcome Back" subtitle="Sign in to continue">
      <Card>
        <CardHeader>
          <CardTitle>Sign In</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Input placeholder="Email" type="email" />
            <Input placeholder="Password" type="password" />
            <Button className="w-full">Sign In</Button>
          </div>
        </CardContent>
      </Card>
    </AuthTemplate>
  );
}`;

const defaultTemplateCode = `import { DefaultTemplate } from '@voilajsx/uikit/templates/default';
import { Button } from '@voilajsx/uikit/button';

function Dashboard() {
  return (
    <DefaultTemplate
      headerContent={
        <div className="flex items-center justify-between w-full">
          <h1 className="text-xl font-semibold">My App</h1>
          <Button variant="ghost">Profile</Button>
        </div>
      }
      sidebarContent={
        <nav className="p-6 space-y-2">
          <Button variant="ghost" className="w-full justify-start">Dashboard</Button>
          <Button variant="ghost" className="w-full justify-start">Users</Button>
          <Button variant="ghost" className="w-full justify-start">Settings</Button>
        </nav>
      }
      footerContent={
        <p className="text-center text-sm text-muted-foreground">
          © 2024 My Company
        </p>
      }
    >
      <h2 className="text-2xl font-bold mb-4">Dashboard Content</h2>
      <p>Your main application content goes here.</p>
    </DefaultTemplate>
  );
}`;

const formTemplateCode = `import { FormTemplate } from '@voilajsx/uikit/templates/form';
import { Button } from '@voilajsx/uikit/button';
import { Input } from '@voilajsx/uikit/input';
import { Label } from '@voilajsx/uikit/label';

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
      <div className="space-y-6">
        <div className="space-y-2">
          <Label>Full Name</Label>
          <Input placeholder="Enter your name" />
        </div>
        <div className="space-y-2">
          <Label>Email</Label>
          <Input type="email" placeholder="your@email.com" />
        </div>
      </div>
    </FormTemplate>
  );
}`;

const tableTemplateCode = `import { TableTemplate } from '@voilajsx/uikit/templates/table';
import { Button } from '@voilajsx/uikit/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@voilajsx/uikit/table';

function UsersPage() {
  return (
    <TableTemplate
      title="User Management"
      searchable={true}
      actions={<Button>Add User</Button>}
    >
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>John Doe</TableCell>
            <TableCell>john@example.com</TableCell>
            <TableCell>Admin</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableTemplate>
  );
}`;

const blankTemplateCode = `import { BlankTemplate } from '@voilajsx/uikit/templates/blank';
import { Card, CardHeader, CardTitle, CardContent } from '@voilajsx/uikit/card';

function AboutPage() {
  return (
    <BlankTemplate containerProps={{ size: 'lg' }}>
      <div className="py-12 text-center">
        <Card>
          <CardHeader>
            <CardTitle className="text-4xl">About Us</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-muted-foreground">
              Simple, flexible content layout.
            </p>
          </CardContent>
        </Card>
      </div>
    </BlankTemplate>
  );
}`;

const templates = [
  {
    name: 'AuthTemplate',
    icon: Shield,
    description: 'Centered layout for authentication pages',
    useCase: 'Login, Register, Password Reset',
    code: authTemplateCode,
    features: ['Centered layout', 'Responsive design', 'Optional title/subtitle']
  },
  {
    name: 'DefaultTemplate',
    icon: Layout,
    description: 'Complete app layout with header, sidebar, and footer',
    useCase: 'Dashboard, Main App Layout',
    code: defaultTemplateCode,
    features: ['Header + Sidebar + Footer', 'Responsive sidebar', 'Flexible content area']
  },
  {
    name: 'FormTemplate',
    icon: FileText,
    description: 'Form-optimized layout with action buttons',
    useCase: 'Settings, Profile, Configuration',
    code: formTemplateCode,
    features: ['Form-focused layout', 'Action buttons', 'Contained width']
  },
  {
    name: 'TableTemplate',
    icon: Table,
    description: 'Data management layout with search and filters',
    useCase: 'Admin Panels, Data Management',
    code: tableTemplateCode,
    features: ['Built-in search', 'Action buttons', 'Filter support']
  },
  {
    name: 'BlankTemplate',
    icon: Minus,
    description: 'Minimal layout with just a container',
    useCase: 'Landing Pages, About, Simple Content',
    code: blankTemplateCode,
    features: ['Minimal layout', 'Flexible container', 'Custom sizing']
  }
];

function Templates() {
  return (
    <Layout>
      <div className="space-y-12">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold mb-4">Page Templates</h1>
        <p className="text-xl text-muted-foreground">
          Complete page layouts for common use cases. Build faster with pre-designed patterns.
        </p>
      </div>

      {/* Overview */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Why Templates?</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">⚡ Faster Development</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Skip layout decisions and focus on your business logic.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">🎨 Consistent Design</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Professional layouts that work across all themes.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">📱 Responsive Ready</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Mobile-first design that adapts to all screen sizes.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Templates */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Available Templates</h2>
        <div className="space-y-12">
          {templates.map((template, index) => {
            const Icon = template.icon;
            return (
              <div key={template.name} className="space-y-6">
                {/* Template Header */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-semibold">{template.name}</h3>
                      <Badge variant="outline">{index + 1}/5</Badge>
                    </div>
                    <p className="text-muted-foreground mb-2">{template.description}</p>
                    <p className="text-sm"><strong>Best for:</strong> {template.useCase}</p>
                  </div>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {template.features.map((feature) => (
                    <Badge key={feature} variant="secondary" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>

                {/* Code Example */}
                <CodeBlock 
                  code={template.code} 
                  title={`${template.name} Example`}
                />

                {index < templates.length - 1 && <hr className="my-8" />}
              </div>
            );
          })}
        </div>
      </section>

      {/* Template Composition */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Template Customization</h2>
        <Card>
          <CardHeader>
            <CardTitle>All templates support:</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li>• <strong>Theme integration</strong> - Automatic theme switching</li>
              <li>• <strong>Responsive design</strong> - Mobile-first approach</li>
              <li>• <strong>Accessible markup</strong> - ARIA labels and semantic HTML</li>
              <li>• <strong>Custom styling</strong> - Override with Tailwind classes</li>
              <li>• <strong>Composition</strong> - Mix and match template elements</li>
            </ul>
          </CardContent>
        </Card>
      </section>
    </div>
    </Layout>
  );
}

export default Templates;