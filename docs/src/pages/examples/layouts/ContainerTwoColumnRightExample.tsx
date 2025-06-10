/**
 * Two-column layout with right sidebar example
 * @module @voilajsx/uikit
 * @file src/pages/examples/layouts/ContainerTwoColumnRightExample.tsx
 */

import React, { useState, useEffect } from 'react';
import { Button } from '@voilajsx/uikit/button';
import { Card, CardHeader, CardTitle, CardContent } from '@voilajsx/uikit/card';
import { Badge } from '@voilajsx/uikit/badge';
import { Container } from '@voilajsx/uikit/container';
import { 
  Layout, 
  BookOpen, 
  Clock, 
  Star, 
  Calendar,
  Bookmark,
  Sparkles 
} from 'lucide-react';

/**
 * Right sidebar content
 */
function RightSidebar() {
  return (
    <div className="space-y-6">
      {/* Table of Contents */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Table of Contents</h3>
        <nav className="space-y-2">
          <div className="p-2 rounded bg-primary/10 text-primary text-sm font-medium">
            Introduction
          </div>
          <div className="p-2 rounded hover:bg-muted text-sm cursor-pointer">
            Getting Started
          </div>
          <div className="p-2 rounded hover:bg-muted text-sm cursor-pointer">
            Examples
          </div>
          <div className="p-2 rounded hover:bg-muted text-sm cursor-pointer">
            Best Practices
          </div>
          <div className="p-2 rounded hover:bg-muted text-sm cursor-pointer">
            Advanced Usage
          </div>
        </nav>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Button variant="outline" size="sm" className="w-full justify-start">
            <Bookmark className="h-4 w-4 mr-2" />
            Bookmark Page
          </Button>
          <Button variant="outline" size="sm" className="w-full justify-start">
            <Star className="h-4 w-4 mr-2" />
            Add to Favorites
          </Button>
          <Button variant="outline" size="sm" className="w-full justify-start">
            <Calendar className="h-4 w-4 mr-2" />
            Schedule Review
          </Button>
        </CardContent>
      </Card>

      {/* Recent Activity */}
      <div>
        <h4 className="font-semibold mb-3 flex items-center gap-2">
          <Clock className="h-4 w-4" />
          Recent Activity
        </h4>
        <div className="space-y-3 text-sm">
          <div className="flex gap-3">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <p className="font-medium">Updated documentation</p>
              <p className="text-xs text-muted-foreground">2 hours ago</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="w-2 h-2 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <p className="font-medium">Added new examples</p>
              <p className="text-xs text-muted-foreground">1 day ago</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="w-2 h-2 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <p className="font-medium">Fixed responsive issues</p>
              <p className="text-xs text-muted-foreground">3 days ago</p>
            </div>
          </div>
        </div>
      </div>
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
          <Badge variant="secondary">Right Sidebar</Badge>
        </div>
        <p className="text-muted-foreground">
          This demonstrates a two-column layout with the sidebar on the right side. 
          Perfect for documentation, blog posts, or content that benefits from contextual information.
        </p>
      </div>

      {/* Article Content */}
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Article Content
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm max-w-none">
            <p className="text-foreground">
              This layout is particularly effective for content-heavy pages where you want to provide 
              additional context, navigation, or related information alongside the main content.
            </p>
            <p className="text-foreground">
              The right sidebar is perfect for table of contents, related articles, quick actions, 
              or contextual information that supports the main content without interrupting the reading flow.
            </p>
            <p className="text-foreground">
              On mobile devices, the sidebar automatically stacks below the main content, ensuring 
              a great experience across all screen sizes.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Implementation</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded text-sm overflow-x-auto">
{`<div className="min-h-screen bg-background">
  <Container size="xl" padding="none">
    <div className="flex flex-col lg:flex-row">
      <main className="flex-1 min-w-0 order-2 lg:order-1">
        <div className="p-4 sm:p-6 lg:p-8">
          <YourMainContent />
        </div>
      </main>
      <aside className="w-full lg:w-80 bg-card border-l order-1 lg:order-2">
        <div className="p-4 sm:p-6">
          <YourSidebar />
        </div>
      </aside>
    </div>
  </Container>
</div>`}
            </pre>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Best Use Cases</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Documentation sites with table of contents</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Blog posts with related articles or author info</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>E-commerce product pages with recommendations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>News articles with trending topics</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Action */}
        <div className="text-center pt-4">
          <Button>
            <Sparkles className="mr-2 h-4 w-4" />
            Try This Layout
          </Button>
        </div>
      </div>
    </div>
  );
}

/**
 * ContainerTwoColumnRightExample page
 */
function ContainerTwoColumnRightExample() {
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
          {/* Main Content */}
          <main className="flex-1 min-w-0 order-2 lg:order-1">
            <div className="p-4 sm:p-6 lg:p-8">
              <MainContent />
            </div>
          </main>

          {/* Right Sidebar */}
          <aside className="w-full lg:w-80 bg-card border-l border-border order-1 lg:order-2">
            <div className="p-4 sm:p-6">
              <RightSidebar />
            </div>
          </aside>
        </div>
      </Container>
    </div>
  );
}

export default ContainerTwoColumnRightExample;