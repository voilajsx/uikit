import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@voilajsx/uikit/button';
import { Card, CardHeader, CardTitle, CardContent } from '@voilajsx/uikit/card';
import { Alert, AlertDescription } from '@voilajsx/uikit/alert';
import { ArrowRight, CheckCircle } from 'lucide-react';
import CodeBlock from '../components/CodeBlock';

const installCode = `npm install @voilajsx/uikit`;

const basicSetupCode = `import { ThemeProvider } from '@voilajsx/uikit/theme-provider';
import '@voilajsx/uikit/styles';
import App from './App';

function Root() {
  return (
    <ThemeProvider theme="default" variant="light" detectSystem={true}>
      <App />
    </ThemeProvider>
  );
}`;

const basicUsageCode = `import { Button } from '@voilajsx/uikit/button';
import { Card, CardHeader, CardTitle, CardContent } from '@voilajsx/uikit/card';

function App() {
  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Hello UIKit!</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Click me</Button>
      </CardContent>
    </Card>
  );
}`;

const migrationCode = `// Before (shadcn/ui)
import { Button } from "@/components/ui/button"

// After (@voilajsx/uikit)
import { Button } from "@voilajsx/uikit/button"

// Everything else stays the same!`;

function Start() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold mb-4">Getting Started</h1>
        <p className="text-xl text-muted-foreground">
          Get up and running with @voilajsx/uikit in minutes.
        </p>
      </div>

      {/* Installation */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Installation</h2>
        <CodeBlock code={installCode} language="bash" title="Install via npm" />
      </section>

      {/* Setup */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Setup</h2>
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Wrap your app with the ThemeProvider and import styles:
          </p>
          <CodeBlock code={basicSetupCode} title="main.tsx / index.tsx" />
        </div>
      </section>

      {/* Basic Usage */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Basic Usage</h2>
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Use components exactly like shadcn/ui:
          </p>
          <CodeBlock code={basicUsageCode} title="App.tsx" />
        </div>
      </section>

      {/* Migration */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Migration from shadcn/ui</h2>
        <Alert className="mb-4">
          <CheckCircle className="h-4 w-4" />
          <AlertDescription>
            <strong>100% API compatible</strong> - just change the import paths!
          </AlertDescription>
        </Alert>
        <CodeBlock code={migrationCode} title="Import changes only" />
      </section>

      {/* Next Steps */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Next Steps</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <span>Explore Components</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Browse 35+ components with examples and API docs.
              </p>
              <Button variant="outline" asChild>
                <Link to="/components">View Components</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <span>Try Templates</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Complete page layouts for common use cases.
              </p>
              <Button variant="outline" asChild>
                <Link to="/templates">View Templates</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <span>Switch Themes</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                6 beautiful themes with custom theme support.
              </p>
              <Button variant="outline" asChild>
                <Link to="/themes">Explore Themes</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <span>See Examples</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Complete applications and real-world patterns.
              </p>
              <Button variant="outline" asChild>
                <Link to="/examples">View Examples</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

export default Start;