/**
 * Templates overview page showcasing AuthTemplate variants
 * @module @voilajsx/uikit
 * @file src/pages/Templates.tsx
 */

import React from 'react';
import { Link } from 'react-router-dom';
import  Layout  from '../components/Layout.tsx';
import { Card, CardHeader, CardTitle, CardContent } from '@voilajsx/uikit/card';
import { Button } from '@voilajsx/uikit/button';
import { Badge } from '@voilajsx/uikit/badge';
import { Shield, ArrowRight, Eye, Zap, Palette, Globe } from 'lucide-react';
import CodeBlock from '../components/CodeBlock';

const quickStartCode = `// Choose the right template variant:

// Simple centered layout
import { AuthTemplate } from '@voilajsx/uikit/templates/auth';
<AuthTemplate variant="simple" />

// Card layout with background  
<AuthTemplate variant="card" />

// Split layout with image
<AuthTemplate variant="split" />`;

/**
 * Templates overview page component
 * @returns {JSX.Element} Templates page component
 */
function Templates(): JSX.Element {
  const authVariants = [
    {
      id: 'simple',
      name: 'Simple',
      description: 'Clean centered layout',
      icon: Zap,
      features: ['Minimal design', 'Fast loading', 'Mobile-first'],
      path: '/templates/auth/simple'
    },
    {
      id: 'card',
      name: 'Card',
      description: 'Elevated card design',
      icon: Palette,
      features: ['Visual elevation', 'Gradient background', 'Modern appeal'],
      path: '/templates/auth/card'
    },
    {
      id: 'split',
      name: 'Split',
      description: 'Professional layout',
      icon: Globe,
      features: ['Brand showcase', 'Image support', 'Enterprise ready'],
      path: '/templates/auth/split'
    }
  ];

  return (
    <Layout>
<div className="space-y-12">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold mb-4">Page Templates</h1>
        <p className="text-xl text-muted-foreground">
          Professional page layouts for common use cases. Each variant has its own dedicated page.
        </p>
      </div>

      {/* Quick Start */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Quick Start</h2>
        <CodeBlock code={quickStartCode} title="Import Templates" />
      </section>

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

      {/* AuthTemplate Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">AuthTemplate Variants</h2>
        
        <div className="space-y-8">
          {/* Main AuthTemplate Card */}
          <Card className="hover:shadow-lg transition-all duration-200">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <CardTitle className="text-xl">AuthTemplate</CardTitle>
                    <Badge variant="secondary" className="text-xs">3 Variants</Badge>
                  </div>
                  <p className="text-muted-foreground">
                    Professional authentication layouts for login, register, and password reset pages.
                  </p>
                </div>
                <Button asChild>
                  <Link to="/templates/auth">
                    <Eye className="mr-2 h-4 w-4" />
                    Overview
                  </Link>
                </Button>
              </div>
            </CardHeader>
          </Card>

          {/* Variant Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {authVariants.map((variant) => {
              const Icon = variant.icon;
              return (
                <Card key={variant.id} className="hover:shadow-lg transition-all duration-200 group">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <Badge variant="outline" className="text-xs">
                        /auth/{variant.id}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg">{variant.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{variant.description}</p>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-xs font-medium text-muted-foreground mb-2">FEATURES:</p>
                      <div className="space-y-1">
                        {variant.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm">
                            <div className="w-1 h-1 rounded-full bg-primary" />
                            <span className="text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button asChild className="w-full">
                      <Link to={variant.path}>
                        View {variant.name} <ArrowRight className="ml-2 h-3 w-3" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Each variant has its own dedicated page with live preview, code examples, and best practices.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium">1. Install the package</h4>
                  <code className="text-sm bg-muted px-2 py-1 rounded">
                    npm install @voilajsx/uikit
                  </code>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-medium">2. Import and use</h4>
                  <code className="text-sm bg-muted px-2 py-1 rounded">
                    import {`{ AuthTemplate }`} from '@voilajsx/uikit/templates/auth'
                  </code>
                </div>
              </div>

              <div className="flex gap-2 pt-4">
                <Button asChild>
                  <Link to="/templates/auth">
                    View AuthTemplate Overview <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/start">
                    Installation Guide
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Coming Soon */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">More Templates Coming Soon</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="opacity-60">
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                DefaultTemplate
                <Badge variant="outline" className="text-xs">Soon</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Complete app layout with header, sidebar, and footer.
              </p>
            </CardContent>
          </Card>

          <Card className="opacity-60">
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                FormTemplate
                <Badge variant="outline" className="text-xs">Soon</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Form-optimized layout with action buttons.
              </p>
            </CardContent>
          </Card>

          <Card className="opacity-60">
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                TableTemplate
                <Badge variant="outline" className="text-xs">Soon</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Data management with search and filters.
              </p>
            </CardContent>
          </Card>

          <Card className="opacity-60">
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                BlankTemplate
                <Badge variant="outline" className="text-xs">Soon</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Minimal layout for simple content pages.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
    </Layout>
    
  );
}

export default Templates;