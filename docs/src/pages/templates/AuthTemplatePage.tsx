/**
 * AuthTemplate documentation with fixed sticky sidebar and mobile responsiveness
 * @module @voilajsx/uikit
 * @file src/pages/templates/AuthTemplatePage.tsx
 */

import React, { useState, useEffect } from 'react';
import Layout from '../../components/layout';
import { useNavigate } from 'react-router-dom';
import { Button } from '@voilajsx/uikit/button';
import { Card, CardHeader, CardTitle, CardContent } from '@voilajsx/uikit/card';
import { Badge } from '@voilajsx/uikit/badge';
import { Alert, AlertDescription } from '@voilajsx/uikit/alert';
import CodeBlock from '../../components/CodeBlock';
import { 
  Info, 
  ExternalLink, 
  CreditCard, 
  Users, 
  Building, 
  Palette,
  Smartphone,
  Globe,
  ArrowRight
} from 'lucide-react';

/**
 * Navigation link component
 */
function NavLink({ children, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`block w-full text-left text-sm py-2 px-3 rounded transition-colors ${
        isActive 
          ? 'text-primary bg-primary/10 font-medium' 
          : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
      }`}
    >
      {children}
    </button>
  );
}

/**
 * Navigation content component
 */
function NavigationContent({ activeSection, onNavigate }) {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      if (onNavigate) onNavigate(); // Close mobile menu
    }
  };

  return (
    <div className="p-6">
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-foreground">AuthTemplate</h2>
        <p className="text-xs text-muted-foreground mt-1">Authentication layouts</p>
      </div>
      
      <nav className="space-y-1">
        <NavLink isActive={activeSection === 'overview'} onClick={() => scrollToSection('overview')}>
          Overview
        </NavLink>
        <NavLink isActive={activeSection === 'installation'} onClick={() => scrollToSection('installation')}>
          Installation
        </NavLink>
        <NavLink isActive={activeSection === 'usage'} onClick={() => scrollToSection('usage')}>
          Quick Usage
        </NavLink>
        <NavLink isActive={activeSection === 'variants'} onClick={() => scrollToSection('variants')}>
          Variants
        </NavLink>
        <NavLink isActive={activeSection === 'examples'} onClick={() => scrollToSection('examples')}>
          Live Examples
        </NavLink>
        <NavLink isActive={activeSection === 'props'} onClick={() => scrollToSection('props')}>
          Props
        </NavLink>
        <NavLink isActive={activeSection === 'patterns'} onClick={() => scrollToSection('patterns')}>
          Common Patterns
        </NavLink>
      </nav>
    </div>
  );
}



/**
 * AuthTemplate documentation with mobile responsiveness
 */
function AuthTemplatePage() {
  const [activeSection, setActiveSection] = useState('overview');
  const navigate = useNavigate();

  // Track active section
  useEffect(() => {
    const sections = ['overview', 'installation', 'usage', 'variants', 'examples', 'props', 'patterns'];
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5, rootMargin: '-20% 0px -35% 0px' }
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const installCode = `npm install @voilajsx/uikit`;

  const setupCode = `import { AuthTemplate } from '@voilajsx/uikit/templates/auth';
import { ThemeProvider } from '@voilajsx/uikit/theme-provider';
import '@voilajsx/uikit/styles';`;

  const quickUsageCode = `<AuthTemplate variant="simple" title="Sign In">
  <Input placeholder="Email" />
  <Input placeholder="Password" type="password" />
  <Button>Sign In</Button>
</AuthTemplate>`;

  const simpleCode = `<AuthTemplate variant="simple" title="Sign In">
  <YourForm />
</AuthTemplate>`;

  const cardCode = `<AuthTemplate variant="card" title="Sign In">
  <YourForm />
</AuthTemplate>`;

  const cardGradientCode = `<AuthTemplate variant="card-gradient" title="Welcome">
  <YourForm />
</AuthTemplate>`;

  const cardImageCode = `<AuthTemplate 
  variant="card-image"
  imageUrl="/background.jpg"
  title="Sign In"
>
  <YourForm />
</AuthTemplate>`;

  const splitGradientCode = `<AuthTemplate 
  variant="split-gradient"
  splitContent={<BrandContent />}
  title="Sign In"
>
  <YourForm />
</AuthTemplate>`;

  const splitImageCode = `<AuthTemplate 
  variant="split-image"
  imageUrl="/hero.jpg"
  splitContent={<BrandContent />}
  title="Sign In"
>
  <YourForm />
</AuthTemplate>`;

  const loginExampleCode = `function LoginPage() {
  return (
    <AuthTemplate 
      variant="card" 
      title="Welcome Back"
      logo={<Logo />}
      footer={<p>Need an account? <a href="/signup">Sign up</a></p>}
    >
      <div className="space-y-4">
        <Input placeholder="Email" type="email" />
        <Input placeholder="Password" type="password" />
        <Button className="w-full">Sign In</Button>
      </div>
    </AuthTemplate>
  );
}`;

  const socialAuthCode = `<AuthTemplate variant="card" title="Sign In">
  <div className="space-y-4">
    <Button variant="outline" className="w-full">
      <Github className="mr-2 h-4 w-4" /> GitHub
    </Button>
    <Button variant="outline" className="w-full">
      <Mail className="mr-2 h-4 w-4" /> Google  
    </Button>
    <Separator />
    <Input placeholder="Email" />
    <Input placeholder="Password" type="password" />
    <Button className="w-full">Sign In</Button>
  </div>
</AuthTemplate>`;

  const loadingStateCode = `function LoginForm() {
  const [loading, setLoading] = useState(false);
  
  return (
    <AuthTemplate variant="card" title="Sign In">
      <div className="space-y-4">
        <Input placeholder="Email" disabled={loading} />
        <Input placeholder="Password" type="password" disabled={loading} />
        <Button className="w-full" disabled={loading}>
          {loading ? 'Signing in...' : 'Sign In'}
        </Button>
      </div>
    </AuthTemplate>
  );
}`;

  const validationCode = `<AuthTemplate variant="card" title="Sign In">
  <div className="space-y-4">
    <div>
      <Input placeholder="Email" className={errors.email ? 'border-red-500' : ''} />
      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
    </div>
    <div>
      <Input placeholder="Password" type="password" />
      {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
    </div>
    <Button className="w-full">Sign In</Button>
  </div>
</AuthTemplate>`;

  // Example cards data
  const exampleCards = [
    {
      title: 'Simple Login',
      description: 'Clean minimal login form',
      variant: 'simple',
      icon: CreditCard,
      route: '/examples/auth/simple'
    },
    {
      title: 'Card',
      description: 'OAuth integration example',
      variant: 'card',
      icon: Globe,
      route: '/examples/auth/card'
    },
    {
      title: 'Card Gradient',
      description: 'Elevated signup with features',
      variant: 'card',
      icon: Users,
      route: '/examples/auth/card-gradient'
    },
    {
      title: 'Card Image',
      description: 'Split layout with branding',
      variant: 'split-image',
      icon: Building,
      route: '/examples/auth/card-image'
    },
    {
      title: 'Split Gradient',
      description: 'Multi-theme demonstration',
      variant: 'card-gradient',
      icon: Palette,
      route: '/examples/auth/split-gradient'
    },
    {
      title: 'Split Image',
      description: 'Responsive design showcase',
      variant: 'simple',
      icon: Smartphone,
      route: '/examples/auth/split-image'
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-background">
      <div className="flex min-h-screen">
        {/* Desktop Sidebar - Fixed positioning */}
        <div className="hidden lg:block">
          <div className="fixed top-0 pt-15 left-0 h-screen w-64 overflow-y-auto border-r border-border bg-background">
            <NavigationContent activeSection={activeSection} />
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full lg:ml-64">
          {/* Mobile Navigation List */}
          <div className="lg:hidden bg-background border-b border-border">
            <div className="px-4 py-6">
              <h1 className="text-xl font-semibold text-foreground mb-4">AuthTemplate</h1>
              <nav className="flex flex-wrap gap-2">
                <Button
                  variant={activeSection === 'overview' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => scrollToSection('overview')}
                >
                  Overview
                </Button>
                <Button
                  variant={activeSection === 'installation' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => scrollToSection('installation')}
                >
                  Installation
                </Button>
                <Button
                  variant={activeSection === 'usage' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => scrollToSection('usage')}
                >
                  Usage
                </Button>
                <Button
                  variant={activeSection === 'variants' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => scrollToSection('variants')}
                >
                  Variants
                </Button>
                <Button
                  variant={activeSection === 'examples' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => scrollToSection('examples')}
                >
                  Examples
                </Button>
                <Button
                  variant={activeSection === 'props' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => scrollToSection('props')}
                >
                  Props
                </Button>
                <Button
                  variant={activeSection === 'patterns' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => scrollToSection('patterns')}
                >
                  Patterns
                </Button>
              </nav>
            </div>
          </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">

            {/* Overview */}
            <section id="overview" className="mb-16">
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">AuthTemplate</h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">
                A flexible authentication layout component with 6 variants. One API, multiple designs.
              </p>

              
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <p className="text-base sm:text-lg text-foreground leading-relaxed mb-6">
                  AuthTemplate provides ready-to-use authentication page layouts. Simply choose a variant 
                  and wrap your form content. All variants are responsive, accessible, and theme-aware.
                </p>

                <Alert className="my-6 border-foreground/20 bg-foreground/5">
                  <AlertDescription>
                    All variants use the same API - just change the <code className="bg-muted px-1 rounded">variant</code> prop to switch layouts.
                  </AlertDescription>
                </Alert>

                
              </div>
            </section>

            {/* Live Examples Grid */}
            <section id="examples" className="mb-16">
              <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-6">Live Examples</h2>
              
              <p className="text-muted-foreground mb-8 text-sm sm:text-base">
                Interactive examples showcasing different use cases and patterns:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2  gap-4 sm:gap-6 mb-8">
                {exampleCards.map((example) => {
                  const Icon = example.icon;
                  return (
                    <Card 
                      key={example.title} 
                      className="group hover:shadow-md transition-all duration-200 border-border hover:border-primary/30 cursor-pointer"
                      onClick={() => navigate(example.route)}
                    >
                      <CardHeader className="pb-3">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                            <Icon className="h-4 w-4 text-primary" />
                          </div>
                          <Badge variant="secondary" className="text-xs">
                            {example.variant}
                          </Badge>
                        </div>
                        <CardTitle className="text-base sm:text-lg flex items-center justify-between">
                          {example.title}
                          <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <p className="text-sm text-muted-foreground mb-3">
                          {example.description}
                        </p>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="w-full"
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate(example.route);
                          }}
                        >
                          View Example
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              <div className="text-center">
                <Button 
                  variant="outline" 
                  onClick={() => navigate('/examples/auth')}
                >
                  View All Examples <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </section>

            {/* Installation */}
            <section id="installation" className="mb-16">
              <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-6">Installation</h2>
              
              <CodeBlock 
                code={installCode} 
                language="bash" 
                title="Install via npm" 
              />

              <p className="text-foreground my-4">Import the component and styles:</p>

              <CodeBlock 
                code={setupCode}
                title="App.tsx"
              />
            </section>

            {/* Quick Usage */}
            <section id="usage" className="mb-16">
              <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-6">Quick Usage</h2>
              
              <p className="text-foreground mb-4">Wrap your form content with AuthTemplate:</p>

              <CodeBlock 
                code={quickUsageCode}
                title="LoginPage.tsx"
              />

              <p className="text-foreground mt-4">That's it! AuthTemplate handles layout, styling, and responsive behavior.</p>
            </section>

            {/* Variants */}
            <section id="variants" className="mb-16">
              <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-6">Variants</h2>
              
              <p className="text-foreground mb-8">Choose the variant that matches your design needs:</p>

              <div className="space-y-8">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3">simple</h3>
                  <p className="text-muted-foreground mb-4 text-sm sm:text-base">Clean centered layout. Good for: MVPs, minimal interfaces.</p>
                  <CodeBlock code={simpleCode} />
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3">card</h3>
                  <p className="text-muted-foreground mb-4 text-sm sm:text-base">Elevated card with shadow. Good for: business apps, professional tools.</p>
                  <CodeBlock code={cardCode} />
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3">card-gradient</h3>
                  <p className="text-muted-foreground mb-4 text-sm sm:text-base">Card with gradient header. Good for: modern apps, creative brands.</p>
                  <CodeBlock code={cardGradientCode} />
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3">card-image</h3>
                  <p className="text-muted-foreground mb-4 text-sm sm:text-base">Card over background image. Good for: travel, lifestyle, creative apps.</p>
                  <CodeBlock code={cardImageCode} />
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3">split-gradient</h3>
                  <p className="text-muted-foreground mb-4 text-sm sm:text-base">Two-column with gradient left side. Good for: web apps, dashboards.</p>
                  <CodeBlock code={splitGradientCode} />
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3">split-image</h3>
                  <p className="text-muted-foreground mb-4 text-sm sm:text-base">Two-column with image left side. Good for: corporate sites, marketing.</p>
                  <CodeBlock code={splitImageCode} />
                </div>
              </div>
            </section>

            

            {/* Practical Example */}
            <section className="mb-16">
              <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-6">Complete Login Example</h3>
              <CodeBlock code={loginExampleCode} title="LoginPage.tsx" />
            </section>

            {/* Props */}
            <section id="props" className="mb-16">
              <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-6">Props Reference</h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-4">Required</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse border border-border rounded-lg">
                      <thead>
                        <tr className="border-b bg-muted/30">
                          <th className="text-left py-3 px-4 font-semibold text-foreground">Prop</th>
                          <th className="text-left py-3 px-4 font-semibold text-foreground">Type</th>
                          <th className="text-left py-3 px-4 font-semibold text-foreground">Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="py-3 px-4"><code className="bg-muted px-2 py-1 rounded text-sm">variant</code></td>
                          <td className="py-3 px-4 text-muted-foreground">string</td>
                          <td className="py-3 px-4 text-foreground">Layout variant to use</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 px-4"><code className="bg-muted px-2 py-1 rounded text-sm">children</code></td>
                          <td className="py-3 px-4 text-muted-foreground">ReactNode</td>
                          <td className="py-3 px-4 text-foreground">Form content</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-4">Optional</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse border border-border rounded-lg">
                      <thead>
                        <tr className="border-b bg-muted/30">
                          <th className="text-left py-3 px-4 font-semibold text-foreground">Prop</th>
                          <th className="text-left py-3 px-4 font-semibold text-foreground">Type</th>
                          <th className="text-left py-3 px-4 font-semibold text-foreground">Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="py-3 px-4"><code className="bg-muted px-2 py-1 rounded text-sm">title</code></td>
                          <td className="py-3 px-4 text-muted-foreground">string</td>
                          <td className="py-3 px-4 text-foreground">Page title</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 px-4"><code className="bg-muted px-2 py-1 rounded text-sm">subtitle</code></td>
                          <td className="py-3 px-4 text-muted-foreground">string</td>
                          <td className="py-3 px-4 text-foreground">Page subtitle</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 px-4"><code className="bg-muted px-2 py-1 rounded text-sm">logo</code></td>
                          <td className="py-3 px-4 text-muted-foreground">ReactNode</td>
                          <td className="py-3 px-4 text-foreground">Logo component</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 px-4"><code className="bg-muted px-2 py-1 rounded text-sm">footer</code></td>
                          <td className="py-3 px-4 text-muted-foreground">ReactNode</td>
                          <td className="py-3 px-4 text-foreground">Footer content</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 px-4"><code className="bg-muted px-2 py-1 rounded text-sm">imageUrl</code></td>
                          <td className="py-3 px-4 text-muted-foreground">string</td>
                          <td className="py-3 px-4 text-foreground">Background image (image variants)</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 px-4"><code className="bg-muted px-2 py-1 rounded text-sm">splitContent</code></td>
                          <td className="py-3 px-4 text-muted-foreground">ReactNode</td>
                          <td className="py-3 px-4 text-foreground">Left panel content (split variants)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>

            {/* Common Patterns */}
            <section id="patterns" className="mb-16">
              <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-6">Common Patterns</h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">With Social Auth</h3>
                  <CodeBlock code={socialAuthCode} />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">With Loading State</h3>
                  <CodeBlock code={loadingStateCode} />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">With Validation</h3>
                  <CodeBlock code={validationCode} />
                </div>
              </div>
            </section>

            {/* Quick Tips */}
            <section className="mb-12">
              <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-4">Quick Tips</h2>
              <ul className="text-foreground space-y-2 text-sm sm:text-base">
                <li><strong>Responsive</strong> - Split variants become single column on mobile</li>
                <li><strong>Themes</strong> - All variants adapt to theme colors automatically</li>
                <li><strong>Accessibility</strong> - Built-in screen reader and keyboard support</li>
                <li><strong>Performance</strong> - Optimized for SSR and fast loading</li>
                <li><strong>Customization</strong> - Use <code className="bg-muted px-1 rounded">className</code> prop for custom styling</li>
              </ul>
            </section>

            <footer className="mt-16 pt-8 border-t border-border text-center text-sm text-muted-foreground">
              <p>
                AuthTemplate is part of @voilajsx/uikit. 
                <button 
                  onClick={() => navigate('/components')}
                  className="text-primary hover:underline ml-1"
                >
                  View all components
                </button>
              </p>
            </footer>

          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
}

export default AuthTemplatePage;