/**
 * Two-column layout with left sidebar example
 * @module @voilajsx/uikit
 * @file src/pages/examples/layouts/ContainerTwoColumnLeftExample.tsx
 */

import React, { useState, useEffect } from 'react';
import { Button } from '@voilajsx/uikit/button';
import { Card, CardHeader, CardTitle, CardContent } from '@voilajsx/uikit/card';
import { Badge } from '@voilajsx/uikit/badge';
import { Container } from '@voilajsx/uikit/container';
import { 
  Layout, 
  Home, 
  Users, 
  Settings, 
  BarChart3, 
  FileText,
  Sparkles 
} from 'lucide-react';

/**
 * Left sidebar navigation
 */
function LeftSidebar() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Navigation</h3>
      <nav className="space-y-2">
        <div className="flex items-center gap-3 p-3 rounded bg-primary/10 text-primary">
          <Home className="h-4 w-4" />
          <span className="text-sm font-medium">Dashboard</span>
        </div>
        <div className="flex items-center gap-3 p-3 rounded hover:bg-muted text-muted-foreground hover:text-foreground cursor-pointer">
          <Users className="h-4 w-4" />
          <span className="text-sm">Users</span>
        </div>
        <div className="flex items-center gap-3 p-3 rounded hover:bg-muted text-muted-foreground hover:text-foreground cursor-pointer">
          <BarChart3 className="h-4 w-4" />
          <span className="text-sm">Analytics</span>
        </div>
        <div className="flex items-center gap-3 p-3 rounded hover:bg-muted text-muted-foreground hover:text-foreground cursor-pointer">
          <FileText className="h-4 w-4" />
          <span className="text-sm">Reports</span>
        </div>
        <div className="flex items-center gap-3 p-3 rounded hover:bg-muted text-muted-foreground hover:text-foreground cursor-pointer">
          <Settings className="h-4 w-4" />
          <span className="text-sm">Settings</span>
        </div>
      </nav>
    </div>
  );
}

/**
 * Main content area
 */
function MainContent() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center">
            <Layout className="h-4 w-4 text-primary-foreground" />
          </div>
          <h1 className="text-2xl font-bold">Two-Column Layout</h1>
          <Badge variant="secondary">Left Sidebar</Badge>
        </div>
        <p className="text-muted-foreground">
          This demonstrates a two-column layout with the sidebar on the left side.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Active Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-xs text-muted-foreground">+5% from yesterday</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$12,345</div>
            <p className="text-xs text-muted-foreground">+12% from last week</p>
          </CardContent>
        </Card>
      </div>

      {/* Implementation */}
      <Card>
        <CardHeader>
          <CardTitle>Implementation</CardTitle>
        </CardHeader>
        <CardContent>
          <pre className="bg-muted p-4 rounded text-sm overflow-x-auto">
{`<div className="min-h-screen bg-background">
  <Container size="xl" padding="none">
    <div className="flex flex-col lg:flex-row">
      <aside className="w-full lg:w-80 bg-card border-r">
        <div className="p-4 sm:p-6">
          <YourSidebar />
        </div>
      </aside>
      <main className="flex-1 min-w-0">
        <div className="p-4 sm:p-6 lg:p-8">
          <YourMainContent />
        </div>
      </main>
    </div>
  </Container>
</div>`}
          </pre>
        </CardContent>
      </Card>

      {/* Action */}
      <div className="text-center pt-4">
        <Button>
          <Sparkles className="mr-2 h-4 w-4" />
          Explore More
        </Button>
      </div>
    </div>
  );
}

/**
 * ContainerTwoColumnLeftExample page
 */
function ContainerTwoColumnLeftExample() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="text-center space-y-4">
          <div className="w-10 h-10 bg-primary/20 rounded-lg mx-auto flex items-center justify-center">
            <Layout className="h-5 w-5 text-primary" />
          </div>
          <h1 className="text-2xl font-semibold">Loading Layout...</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Container size="xl" padding="none">
        <div className="flex flex-col lg:flex-row">
          {/* Left Sidebar */}
          <aside className="w-full lg:w-80 bg-card border-r border-border">
            <div className="p-4 sm:p-6">
              <LeftSidebar />
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            <div className="p-4 sm:p-6 lg:p-8">
              <MainContent />
            </div>
          </main>
        </div>
      </Container>
    </div>
  );
}

export default ContainerTwoColumnLeftExample;