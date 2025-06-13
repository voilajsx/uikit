import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@voilajsx/uikit/button';
import { Card, CardHeader, CardTitle, CardContent } from '@voilajsx/uikit/card';
import { Badge } from '@voilajsx/uikit/badge';
import { ArrowRight, Palette, Smartphone, Layout as LayoutIcon, Zap, Code2, Star, Github, ExternalLink } from 'lucide-react';
import Layout from '../components/Layout';

function Home() {
  return (
    <Layout>
      <div className="space-y-16 sm:space-y-20 w-full max-w-none">
        {/* Hero Section - Simplified */}
        <section className="text-center space-y-6 sm:space-y-8 w-full py-12 sm:py-16">
          <Badge variant="secondary" className="mb-4 text-xs sm:text-sm bg-primary/10 text-primary border-primary/20">
            Open Source • MIT License 
          </Badge>
          
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight px-2">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                @voilajsx/uikit
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground max-w-4xl mx-auto px-4 leading-relaxed">
              <span className="font-semibold text-foreground">Custom Themes</span> + 
              <span className="font-semibold text-foreground"> Ready Layouts</span> + 
              <span className="font-semibold text-foreground"> Cross-Platform</span>
            </p>
            
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4 leading-relaxed">
              Drop-in replacement for shadcn/ui components, built with React and Tailwind v4, compatible with Next.js, Vite, or any framework
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4 max-w-lg sm:max-w-none mx-auto pt-6">
            <Button size="lg" className="w-full sm:w-auto text-lg px-8 py-6 shadow-lg" asChild>
              <Link to="/start">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg px-8 py-6" asChild>
              <Link to="/examples">Live Examples</Link>
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-6 pt-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>30+ UI Components</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>3 Prebuilt Sections</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>4 Page Layouts</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>6 Themes</span>
            </div>
          </div>
        </section>

        {/* Key Value Propositions */}
        <section className="w-full">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-foreground">
            Why Choose @voilajsx/uikit?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-border  bg-card hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <Badge variant="secondary" className="text-xs">Zero Migration</Badge>
                </div>
                <CardTitle className="text-xl">Drop-in Replacement</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground leading-relaxed">
                  100% compatible with shadcn/ui. Just change imports and instantly get themes, templates, and cross-platform support.
                </p>
                <p className="text-sm font-mono bg-muted/50 p-2 rounded">
                  @/components/ui/button → @voilajsx/uikit/button
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Palette className="h-6 w-6 text-primary" />
                  </div>
                  <Badge variant="secondary" className="text-xs">6 Themes</Badge>
                </div>
                <CardTitle className="text-xl">Professional Themes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground leading-relaxed">
                  Beautiful themes with OKLCH color science: Default, Metro, Studio, Ruby, Neon, Aurora. Runtime switching included.
                </p>
                <div className="flex gap-1">
                  <div className="w-4 h-4 bg-blue-500 rounded-full" title="Default"></div>
                  <div className="w-4 h-4 bg-slate-500 rounded-full" title="Metro"></div>
                  <div className="w-4 h-4 bg-amber-500 rounded-full" title="Studio"></div>
                  <div className="w-4 h-4 bg-red-500 rounded-full" title="Ruby"></div>
                  <div className="w-4 h-4 bg-fuchsia-500 rounded-full" title="Neon"></div>
                  <div className="w-4 h-4 bg-purple-500 rounded-full" title="Aurora"></div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border bg-card hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <LayoutIcon className="h-6 w-6 text-primary" />
                  </div>
                  <Badge variant="secondary" className="text-xs">5 Templates</Badge>
                </div>
                <CardTitle className="text-xl">Complete Layouts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground leading-relaxed">
                  Ready-to-use page templates: Auth, Admin Dashboard, Form, Table, and Blank layouts. Build faster.
                </p>
                <div className="flex flex-wrap gap-1 text-xs">
                  <Badge variant="outline" className="text-xs">AuthTemplate</Badge>
                  <Badge variant="outline" className="text-xs">AdminTemplate</Badge>
                  <Badge variant="outline" className="text-xs">FormTemplate</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border bg-card hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Smartphone className="h-6 w-6 text-primary" />
                  </div>
                  <Badge variant="secondary" className="text-xs">Universal</Badge>
                </div>
                <CardTitle className="text-xl">Cross-Platform</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground leading-relaxed">
                  Web, React Native, Expo, and Tauri support. Write once, deploy everywhere with adaptive components.
                </p>
                <div className="grid grid-cols-2 gap-1 text-xs">
                  <span>✅ Web</span>
                  <span>✅ React Native</span>
                  <span>✅ Expo</span>
                  <span>✅ Tauri</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border bg-card hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Code2 className="h-6 w-6 text-primary" />
                  </div>
                  <Badge variant="secondary" className="text-xs">35+ Components</Badge>
                </div>
                <CardTitle className="text-xl">Complete Library</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground leading-relaxed">
                  All shadcn/ui components plus DataTable, layouts, form integration, and platform adapters.
                </p>
                <p className="text-sm text-muted-foreground">
                  Perfect tree-shaking • TypeScript ready
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Star className="h-6 w-6 text-primary" />
                  </div>
                  <Badge variant="secondary" className="text-xs">Open Source</Badge>
                </div>
                <CardTitle className="text-xl">Developer First</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground leading-relaxed">
                  MIT licensed, TypeScript support, comprehensive docs, and active community support.
                </p>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm" className="h-7 px-2" asChild>
                    <a href="https://github.com/voilajsx/uikit" target="_blank" rel="noopener noreferrer">
                      <Github className="h-3 w-3 mr-1" />
                      GitHub
                    </a>
                  </Button>
                  <Button variant="ghost" size="sm" className="h-7 px-2" asChild>
                    <a href="https://ui.shadcn.com" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-3 w-3 mr-1" />
                      shadcn/ui
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Quick Preview */}
        <section className="space-y-8 w-full">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              See It In Action
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore live examples and complete applications built with @voilajsx/uikit
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer" asChild>
              <Link to="/examples#dashboard">
                <CardHeader className="text-center">
                  <CardTitle className="text-lg">Analytics Dashboard</CardTitle>
                </CardHeader>
                <CardContent className="pt-0 text-center">
                  <div className="w-full h-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg mb-3 flex items-center justify-center">
                    <LayoutIcon className="h-8 w-8 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Complete admin dashboard with stats and navigation
                  </p>
                </CardContent>
              </Link>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer" asChild>
              <Link to="/examples#auth">
                <CardHeader className="text-center">
                  <CardTitle className="text-lg">Authentication</CardTitle>
                </CardHeader>
                <CardContent className="pt-0 text-center">
                  <div className="w-full h-24 bg-gradient-to-br from-secondary/20 to-muted/20 rounded-lg mb-3 flex items-center justify-center">
                    <Star className="h-8 w-8 text-secondary-foreground" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Login and registration flows with validation
                  </p>
                </CardContent>
              </Link>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer" asChild>
              <Link to="/themes">
                <CardHeader className="text-center">
                  <CardTitle className="text-lg">Theme Switching</CardTitle>
                </CardHeader>
                <CardContent className="pt-0 text-center">
                  <div className="w-full h-24 bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg mb-3 flex items-center justify-center">
                    <Palette className="h-8 w-8 text-accent-foreground" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Live theme preview with all 6 built-in themes
                  </p>
                </CardContent>
              </Link>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer" asChild>
              <Link to="/components">
                <CardHeader className="text-center">
                  <CardTitle className="text-lg">Component Library</CardTitle>
                </CardHeader>
                <CardContent className="pt-0 text-center">
                  <div className="w-full h-24 bg-gradient-to-br from-muted/20 to-secondary/20 rounded-lg mb-3 flex items-center justify-center">
                    <Code2 className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Browse all 35+ components with examples
                  </p>
                </CardContent>
              </Link>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center space-y-6 py-12 bg-muted/30 rounded-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            Ready to Build Something Beautiful?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join developers who are building faster with professional themes and ready-to-use templates.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="text-lg px-8" asChild>
              <Link to="/start">
                Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8" asChild>
              <a href="https://github.com/voilajsx/uikit" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                Star on GitHub
              </a>
            </Button>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default Home;