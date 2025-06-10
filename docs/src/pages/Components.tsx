import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@voilajsx/uikit/card';
import Layout from '../components/Layout';
import { Button } from '@voilajsx/uikit/button';
import { Badge } from '@voilajsx/uikit/badge';
import { Alert, AlertDescription } from '@voilajsx/uikit/alert';
import { ExternalLink, Info } from 'lucide-react';
import CodeBlock from '../components/CodeBlock';

const importExampleCode = `// shadcn/ui way:
import { Button } from "@/components/ui/button"

// @voilajsx/uikit way:
import { Button } from "@voilajsx/uikit/button"

// API is 100% identical!
<Button variant="default" size="lg">
  Same props, same behavior
</Button>`;

const componentsData = [
  {
    category: 'UI Components',
    components: [
      { name: 'Button', path: 'button', description: 'Interactive buttons with variants' },
      { name: 'Card', path: 'card', description: 'Content containers' },
      { name: 'Input', path: 'input', description: 'Text input fields' },
      { name: 'Badge', path: 'badge', description: 'Status indicators' },
      { name: 'Avatar', path: 'avatar', description: 'User profile images' },
      { name: 'Alert', path: 'alert', description: 'Contextual messages' },
      { name: 'Accordion', path: 'accordion', description: 'Collapsible content' },
      { name: 'Skeleton', path: 'skeleton', description: 'Loading placeholders' },
      { name: 'Progress', path: 'progress', description: 'Progress indicators' },
      { name: 'Separator', path: 'separator', description: 'Visual dividers' },
    ]
  },
  {
    category: 'Form Components',
    components: [
      { name: 'Form', path: 'form', description: 'React Hook Form integration' },
      { name: 'Checkbox', path: 'checkbox', description: 'Boolean inputs' },
      { name: 'Radio Group', path: 'radio-group', description: 'Single selection' },
      { name: 'Select', path: 'select', description: 'Dropdown selection' },
      { name: 'Switch', path: 'switch', description: 'Toggle controls' },
      { name: 'Slider', path: 'slider', description: 'Range inputs' },
      { name: 'Textarea', path: 'textarea', description: 'Multi-line text' },
      { name: 'Label', path: 'label', description: 'Form labels' },
    ]
  },
  {
    category: 'Navigation',
    components: [
      { name: 'Dropdown Menu', path: 'dropdown-menu', description: 'Context menus' },
      { name: 'Tabs', path: 'tabs', description: 'Tabbed interfaces' },
      { name: 'Pagination', path: 'pagination', description: 'Page navigation' },
      { name: 'Breadcrumb', path: 'breadcrumb', description: 'Navigation breadcrumbs' },
    ]
  },
  {
    category: 'Overlays',
    components: [
      { name: 'Dialog', path: 'dialog', description: 'Modal dialogs' },
      { name: 'Sheet', path: 'sheet', description: 'Slide-out panels' },
      { name: 'Popover', path: 'popover', description: 'Floating content' },
      { name: 'Tooltip', path: 'tooltip', description: 'Hover information' },
      { name: 'Toast', path: 'toast', description: 'Notifications' },
    ]
  },
  {
    category: 'Data & Layout',
    components: [
      { name: 'Table', path: 'table', description: 'Data tables' },
      { name: 'Data Table', path: 'data-table', description: 'Advanced tables with sorting' },
      { name: 'Container', path: 'container', description: 'Responsive containers' },
      { name: 'Header', path: 'header', description: 'Page headers' },
      { name: 'Footer', path: 'footer', description: 'Page footers' },
      { name: 'Sidebar', path: 'sidebar', description: 'Navigation sidebars' },
    ]
  }
];

function Components() {
  return (
   <Layout>
     <div className="space-y-12">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold mb-4">Components</h1>
        <p className="text-xl text-muted-foreground">
          35+ production-ready components with shadcn/ui compatibility.
        </p>
      </div>

      {/* Key Differences */}
      <Alert className="border-gray-300">
        <Info className="h-4 w-4" />
        <AlertDescription className="text-sm pt-1">
          <strong>Same API as shadcn/ui</strong> - Only the import paths change. 
          All props, variants, and behaviors are identical.
        </AlertDescription>
      </Alert>

      {/* Import Example */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Import Pattern</h2>
      </section>

      {/* What's Enhanced */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">What's Enhanced</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">🎨 Automatic Theming</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                All components automatically adapt to your chosen theme with no configuration.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">📱 Cross-Platform</CardTitle>
            </CardHeader> 
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Same components work on Web, React Native, and Tauri with automatic adaptation.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">📦 Perfect Tree-Shaking</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Direct imports ensure smallest possible bundle sizes in production.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Component Categories */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">All Components</h2>
        <div className="space-y-8">
          {componentsData.map((category) => (
            <div key={category.category}>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                {category.category}
                <Badge variant="secondary" className="ml-2">
                  {category.components.length}
                </Badge>
              </h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.components.map((component) => (
                  <Card key={component.name} className="hover:shadow-md transition-shadow">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base flex items-center justify-between">
                        {component.name}
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6"
                          asChild
                        >
                         <a 
                            href={`https://ui.shadcn.com/docs/components/${component.path}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="View shadcn/ui docs"
                          >
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        </Button>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-sm text-muted-foreground mb-3">
                        {component.description}
                      </p>
                      <code className="text-xs bg-muted px-2 py-1 rounded">
                        @voilajsx/uikit/{component.path}
                      </code>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Documentation Link */}
      <section className="text-center p-8 bg-muted/50 rounded-lg">
        <h3 className="text-xl font-semibold mb-2">Complete API Documentation</h3>
        <p className="text-muted-foreground mb-4">
          For detailed props, examples, and usage patterns, see the shadcn/ui documentation.
          Our API is 100% compatible.
        </p>
        <Button asChild>
          <a
            href="https://ui.shadcn.com/docs/components"
            target="_blank"
            rel="noopener noreferrer"
          >
            View shadcn/ui Docs <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </section>
    </div>
   </Layout>
  );
}

export default Components;