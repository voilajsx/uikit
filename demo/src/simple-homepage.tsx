/**
 * Simple Product Homepage - Single Page Demo
 * Shows dramatic theme variations with minimal complexity
 * Perfect for showcasing the power of enhanced theming
 */

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, Button, Badge } from '@voilajsx/uikit';
import { useTheme } from './themes/theme-provider';
import { 
  Zap, 
  Shield, 
  Star,
  ArrowRight,
  CheckCircle,
  Users,
  TrendingUp,
  Award,
  Palette,
  Monitor,
  Gem,
  Cpu
} from 'lucide-react';

// Hero image component that changes based on theme
function HeroImage() {
  const { theme } = useTheme();
  
  const heroImages = {
    default: 'https://assets.justinmind.com/wp-content/uploads/2018/07/10-hero-image-website-ideas-to-inspire-you-header-3-768x492.png',
    aurora: 'https://cdn.prod.website-files.com/605826c62e8de87de744596e/63f5e30a4d577354fdfce512_Duotone-Master-ssssFile-copy.jpg',
    neon: 'https://png.pngtree.com/png-vector/20221012/ourmid/pngtree-design-a-responsive-landing-page-or-hero-banner-for-a-business-startup-vector-png-image_28436428.png',
    ruby: 'https://assets.justinmind.com/wp-content/uploads/2018/07/10-hero-image-website-ideas-to-inspire-you-header-3-768x492.png',
    mango: 'https://images.unsplash.com/photo-1553200682-2286012b4b2a?w=800&q=80',
    metro: 'https://assets.justinmind.com/wp-content/uploads/2018/07/10-hero-image-website-ideas-to-inspire-you-header-3-768x492.png',
    studio: 'https://assets.justinmind.com/wp-content/uploads/2018/07/10-hero-image-website-ideas-to-inspire-you-header-3-768x492.png'
  };

  // Get the appropriate image for the current theme
  const imageUrl = heroImages[theme as keyof typeof heroImages] || heroImages.default;
  
  return (
    <div className="aspect-video bg-muted rounded-xl overflow-hidden shadow-lg">
      <img 
        src={imageUrl} 
        alt="Hero visual showcase" 
        className="w-full h-full object-cover"
        onError={(e) => {
          // Fallback to placeholder if image fails to load
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
          const parent = target.parentElement;
          if (parent) {
            parent.innerHTML = `
              <div class="w-full h-full flex items-center justify-center">
                <div class="text-center space-y-3">
                  <div class="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mx-auto">
                    <svg class="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                      <line x1="8" y1="21" x2="16" y2="21"/>
                      <line x1="12" y1="17" x2="12" y2="21"/>
                    </svg>
                  </div>
                  <p class="text-sm text-muted-foreground">Hero Visual - ${theme} Theme</p>
                </div>
              </div>
            `;
          }
        }}
      />
    </div>
  );
}

// Theme selector in header
function ThemeSelector() {
  const { theme, setTheme } = useTheme();
  
  const themes: { value: Theme; label: string; icon: React.ComponentType<any>; description: string }[] = [
    { value: 'default', label: 'Simple', icon: Monitor, description: 'Clean & minimal' },
    { value: 'aurora', label: 'Elegant', icon: Palette, description: 'Corporate & refined' },
    { value: 'neon', label: 'Futuristic', icon: Zap, description: 'Sci-fi & gradients' },
    { value: 'ruby', label: 'Professional', icon: Gem, description: 'Modern & premium' }
  ];

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm font-medium text-muted-foreground">Theme:</span>
      {themes.map((themeOption) => {
        const Icon = themeOption.icon;
        const isActive = theme === themeOption.value;
        
        return (
          <button
            key={themeOption.value}
            onClick={() => setTheme(themeOption.value)}
            className={`
              flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all
              ${isActive 
                ? 'bg-primary text-primary-foreground shadow-md' 
                : 'bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground'
              }
            `}
          >
            <Icon className="h-4 w-4" />
            {themeOption.label}
          </button>
        );
      })}
    </div>
  );
}

// Header component
function Header() {
  return (
    <header className="bg-card border-b shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Star className="h-5 w-5 text-primary-foreground" />
            </div>
            <h1 className="text-xl font-bold">ProductLab</h1>
          </div>
          
          <ThemeSelector />
        </div>
      </div>
    </header>
  );
}

// Hero section
function HeroSection() {
  return (
    <section className="bg-card py-20">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <Badge className="bg-primary text-primary-foreground mb-4">
            ✨ Enhanced Theming System
          </Badge>
          
          <h1 className="text-5xl font-bold">
            Same Code, Different Personalities
          </h1>
          
          <p className="text-xl text-muted-foreground">
            Watch how this exact same homepage transforms dramatically across four distinct design languages. 
            Zero code changes needed - pure CSS magic.
          </p>
          
          {/* Hero image - changes based on theme */}
          <div className="w-full max-w-2xl mx-auto mt-12 mb-8">
            <HeroImage />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button className="bg-primary text-primary-foreground px-8 py-3 text-lg">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="px-8 py-3 text-lg">
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

// Features section
function FeaturesSection() {
  const features = [
    {
      icon: Zap,
      title: 'Zero Code Changes',
      description: 'Drop in any v0/Lovable template unchanged. CSS hijacking automatically enhances existing shadcn classes.'
    },
    {
      icon: Palette,
      title: 'Automatic Gradients',
      description: 'bg-primary becomes beautiful gradients. Typography gets display fonts. Spacing adjusts per theme personality.'
    },
    {
      icon: Shield,
      title: 'Design Languages',
      description: 'Each theme creates a completely different personality: simple, elegant, futuristic, or professional modern.'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the magic of enhanced theming with zero complexity
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="bg-card shadow-md text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Stats section
function StatsSection() {
  const stats = [
    { icon: Users, value: '10K+', label: 'Happy Developers' },
    { icon: TrendingUp, value: '95%', label: 'Visual Impact' },
    { icon: Award, value: '4', label: 'Theme Styles' },
    { icon: CheckCircle, value: '0', label: 'Code Changes' }
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Proven Results</h2>
          <p className="text-lg text-muted-foreground">
            Numbers that speak for themselves
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// CTA section
function CTASection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-4xl font-bold">Ready to Transform Your UI?</h2>
          <p className="text-lg text-muted-foreground">
            Join thousands of developers who've upgraded their design system with zero breaking changes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button className="bg-primary text-primary-foreground px-8 py-3 text-lg">
              Start Building
            </Button>
            <Button variant="outline" className="px-8 py-3 text-lg">
              View Documentation
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-6 pt-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              Free to use
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              MIT License
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              Zero setup
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="bg-card border-t py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                <Star className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="font-bold">ProductLab</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Enhanced theming system for modern React applications.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Product</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div>Features</div>
              <div>Documentation</div>
              <div>Examples</div>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Company</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div>About</div>
              <div>Blog</div>
              <div>Careers</div>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Support</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div>Help Center</div>
              <div>Contact</div>
              <div>Status</div>
            </div>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© 2024 ProductLab. Built with ❤️ using Enhanced Theming System.</p>
        </div>
      </div>
    </footer>
  );
}

// Main homepage component
export default function SimpleHomepage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <CTASection />
      <Footer />
    </div>
  );
}