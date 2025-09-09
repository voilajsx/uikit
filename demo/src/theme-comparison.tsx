/**
 * Theme Comparison Demo - Shows the same components across different themes
 * Demonstrates the power of zero-touch theme switching
 */

import React, { useState } from 'react';
import { 
  Card, CardContent, CardDescription, CardHeader, CardTitle,
  Button, Badge, Input, Label, Avatar, AvatarFallback, 
  Progress, Separator, ThemeProvider, useTheme, type Theme 
} from '@voilajsx/uikit';
import { 
  Palette,
  Zap,
  Gem,
  Monitor,
  Brush,
  Star,
  TrendingUp,
  Users,
  DollarSign,
  ShoppingCart,
  Heart
} from 'lucide-react';

// Theme selector component
function ThemeSelector() {
  const { theme, setTheme, mode, toggleMode } = useTheme();
  
  const themes: { value: Theme; label: string; icon: React.ComponentType<any>; description: string }[] = [
    { value: 'default', label: 'Default', icon: Monitor, description: 'Professional sky blue' },
    { value: 'aurora', label: 'Aurora', icon: Palette, description: 'Northern lights gradients' },
    { value: 'neon', label: 'Neon', icon: Zap, description: 'Electric gaming style' },
    { value: 'ruby', label: 'Ruby', icon: Gem, description: 'Luxury red & gold' },
    { value: 'studio', label: 'Studio', icon: Brush, description: 'Designer grays' }
  ];

  return (
    <Card className="bg-card shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl">🎨 Theme Showcase</CardTitle>
        <CardDescription>
          Watch the same components transform across different design languages
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Current Theme: {theme}</span>
          <Button 
            variant="outline" 
            size="sm"
            onClick={toggleMode}
          >
            {mode === 'light' ? '🌙' : '☀️'} {mode}
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {themes.map((themeOption) => {
            const Icon = themeOption.icon;
            const isActive = theme === themeOption.value;
            
            return (
              <button
                key={themeOption.value}
                onClick={() => setTheme(themeOption.value)}
                className={`
                  p-3 rounded-lg border-2 transition-all text-left
                  ${isActive 
                    ? 'border-primary bg-primary/10 shadow-md' 
                    : 'border-border hover:border-primary/50 hover:bg-muted/50'
                  }
                `}
              >
                <Icon className={`h-6 w-6 mb-2 ${isActive ? 'text-primary' : 'text-muted-foreground'}`} />
                <div className="text-sm font-medium">{themeOption.label}</div>
                <div className="text-xs text-muted-foreground">{themeOption.description}</div>
              </button>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}

// Sample component showcase
function ComponentShowcase() {
  const [progress] = useState(75);
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Stats Cards */}
      <Card className="bg-card shadow-md">
        <CardHeader>
          <CardTitle className="text-lg">Performance Metrics</CardTitle>
          <CardDescription>Key business indicators</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-muted/20 rounded-lg">
              <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-primary">+24%</div>
              <div className="text-xs text-muted-foreground">Growth</div>
            </div>
            <div className="text-center p-4 bg-muted/20 rounded-lg">
              <Users className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold">12.5K</div>
              <div className="text-xs text-muted-foreground">Users</div>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Progress</span>
              <span>{progress}%</span>
            </div>
            <Progress value={progress} className="w-full" />
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <Card className="bg-card shadow-md">
        <CardHeader>
          <CardTitle className="text-lg">Interactive Elements</CardTitle>
          <CardDescription>Buttons and badges with gradients</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <Button className="bg-primary text-primary-foreground">
              <Star className="w-4 h-4 mr-2" />
              Primary
            </Button>
            <Button className="bg-secondary text-secondary-foreground">
              Secondary
            </Button>
            <Button className="bg-accent text-accent-foreground">
              <Heart className="w-4 h-4 mr-2" />
              Accent
            </Button>
            <Button variant="outline">
              Outline
            </Button>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <Badge className="bg-primary text-primary-foreground">Featured</Badge>
            <Badge variant="secondary">New</Badge>
            <Badge variant="outline">Limited</Badge>
            <Badge variant="destructive">Sale</Badge>
          </div>
        </CardContent>
      </Card>

      {/* Product Card */}
      <Card className="bg-card shadow-lg">
        <CardContent className="p-6">
          <div className="aspect-video bg-gradient-to-br from-muted to-muted/50 rounded-lg mb-4 flex items-center justify-center">
            <ShoppingCart className="h-12 w-12 text-primary" />
          </div>
          
          <div className="space-y-3">
            <div>
              <h3 className="text-lg font-semibold">Premium Product</h3>
              <p className="text-sm text-muted-foreground">
                Experience the difference with our flagship offering
              </p>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold text-primary">$299</div>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
            </div>
            
            <Button className="w-full bg-primary text-primary-foreground">
              Add to Cart
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Form Example */}
      <Card className="bg-card shadow-lg">
        <CardHeader>
          <CardTitle className="text-lg">Contact Form</CardTitle>
          <CardDescription>Enhanced form with theme-aware styling</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Your full name" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="your@email.com" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Input id="message" placeholder="Tell us about your project" />
          </div>
          
          <div className="flex gap-3 pt-2">
            <Button className="flex-1 bg-primary text-primary-foreground">
              Send Message
            </Button>
            <Button variant="outline">
              Cancel
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// User testimonials
function TestimonialCard({ name, role, content }: { name: string; role: string; content: string }) {
  return (
    <Card className="bg-card shadow-md">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <Avatar>
            <AvatarFallback>{name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="mb-3">
              <div className="font-semibold">{name}</div>
              <div className="text-sm text-muted-foreground">{role}</div>
            </div>
            <p className="text-sm text-muted-foreground italic">"{content}"</p>
            <div className="flex items-center gap-1 mt-3">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-3 w-3 fill-primary text-primary" />
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// Main comparison page
export function ThemeComparison() {
  return (
    <div className="min-h-screen bg-background p-4 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">🎨 Voila Theme System</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Watch how the same shadcn components transform across different design languages. 
          Zero code changes needed - just pure CSS magic!
        </p>
      </div>

      {/* Theme Selector */}
      <ThemeSelector />

      {/* Feature Highlights */}
      <Card className="bg-card shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl">✨ What You're Seeing</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                <Palette className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold">Zero Code Changes</h3>
              <p className="text-sm text-muted-foreground">
                Same shadcn components, completely different look
              </p>
            </div>
            
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold">Automatic Gradients</h3>
              <p className="text-sm text-muted-foreground">
                CSS hijacking creates beautiful gradients automatically
              </p>
            </div>
            
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                <Brush className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold">Design Language</h3>
              <p className="text-sm text-muted-foreground">
                Typography, spacing, and shadows change per theme
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Component Showcase */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-center">Component Showcase</h2>
        <ComponentShowcase />
      </div>

      {/* Testimonials */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-center">What People Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <TestimonialCard 
            name="Sarah Chen"
            role="UI Designer"
            content="The gradient system is incredible! Our app went from looking basic to premium with zero code changes."
          />
          <TestimonialCard 
            name="Alex Rodriguez"
            role="Developer"
            content="Finally, a theming system that doesn't break existing components. Works perfectly with v0 templates!"
          />
          <TestimonialCard 
            name="Maya Patel"
            role="Product Manager"
            content="Each theme gives our product a completely different personality. Game-changing for our brand."
          />
        </div>
      </div>

      {/* Implementation Note */}
      <Card className="bg-muted/20 shadow-sm border-2 border-dashed border-primary/30">
        <CardContent className="p-6 text-center space-y-3">
          <h3 className="text-lg font-semibold text-primary">🚀 Implementation Note</h3>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            This entire demo uses <strong>zero custom classes</strong>. Every component is pure shadcn code 
            that gets automatically enhanced by our CSS hijacking system. Change the theme above and watch 
            the magic happen!
          </p>
          <div className="flex justify-center gap-2 text-xs text-muted-foreground">
            <code className="bg-muted px-2 py-1 rounded">bg-primary</code>
            <code className="bg-muted px-2 py-1 rounded">text-2xl</code>
            <code className="bg-muted px-2 py-1 rounded">rounded-lg</code>
            <code className="bg-muted px-2 py-1 rounded">shadow-md</code>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Export the main component
export default ThemeComparison;