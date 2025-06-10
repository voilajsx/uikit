/**
 * AppLayout Full variant example
 * @module @voilajsx/uikit
 * @file src/pages/examples/layouts/ContainerFullExample.jsx
 */

import React, { useState, useEffect } from 'react';
import { Button } from '@voilajsx/uikit/button';
import { Card, CardHeader, CardTitle, CardContent } from '@voilajsx/uikit/card';
import { Badge } from '@voilajsx/uikit/badge';
import { Container } from '@voilajsx/uikit/container';
import { Layout, Sparkles, BarChart3, Users, Settings } from 'lucide-react';

/**
 * Demo content for the full layout
 */
function DemoContent() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center">
            <Layout className="h-5 w-5 text-primary-foreground" />
          </div>
          <h1 className="text-3xl font-bold">Full Layout Example</h1>
        </div>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          This demonstrates a full-width layout using the Container component directly.
        </p>
        <Badge variant="secondary">Full Width Layout</Badge>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,847</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Revenue</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231</div>
            <p className="text-xs text-muted-foreground">+8% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Sessions</CardTitle>
            <Settings className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">573</div>
            <p className="text-xs text-muted-foreground">+3% from last hour</p>
          </CardContent>
        </Card>
      </div>

      {/* Usage Example */}
      <Card>
        <CardHeader>
          <CardTitle>Implementation</CardTitle>
        </CardHeader>
        <CardContent>
          <pre className="bg-muted p-4 rounded text-sm overflow-x-auto">
{`<div className="min-h-screen bg-background">
  <Container size="xl">
    <YourContent />
  </Container>
</div>`}
          </pre>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
        <Button size="lg">
          <Sparkles className="mr-2 h-4 w-4" />
          Get Started
        </Button>
        <Button variant="outline" size="lg">
          View Documentation
        </Button>
      </div>
    </div>
  );
}

/**
 * ContainerFullExample page
 */
function ContainerFullExample() {
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
      <Container size="xl">
        <div className="py-8">
          <DemoContent />
        </div>
      </Container>
    </div>
  );
}

export default ContainerFullExample;