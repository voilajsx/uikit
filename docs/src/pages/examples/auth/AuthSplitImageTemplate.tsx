/**
 * AuthTemplate Split Image variant - using unified AuthTemplate
 * @module @voilajsx/uikit
 * @file src/pages/templates/AuthSplitImageTemplate.jsx
 */

import React, { useState, useEffect } from 'react';
import { AuthLayout as AuthTemplate } from '@voilajsx/uikit/auth';
import { Button } from '@voilajsx/uikit/button';
import { Input } from '@voilajsx/uikit/input';
import { Label } from '@voilajsx/uikit/label';
import { Separator } from '@voilajsx/uikit/separator';
import { Sparkles, Github, Mail, Users, Star, Quote } from 'lucide-react';

/**
 * Logo component for branding
 * @returns {JSX.Element} Logo component
 */
function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center">
        <Sparkles className="h-4 w-4 text-primary-foreground" />
      </div>
      <span className="text-xl font-semibold text-foreground">AgencyCorp</span>
    </div>
  );
}

/**
 * Split content component for image overlay
 * @param {Object} [testimonial] - Testimonial data
 * @returns {JSX.Element} Split content
 */
function SplitContent({ 
  testimonial = {
    quote: "This platform transformed how we work. Our team's productivity increased by 40% in just three months.",
    author: "Sarah Johnson",
    role: "CEO",
    company: "TechCorp",
    avatar: undefined
  }
} = {}) {
  return (
    <div className="flex flex-col justify-between h-full text-white">
      {/* Top section - Trust indicators */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-sm font-medium">
          <div className="w-2 h-2 rounded-full bg-green-400"></div>
          Trusted by 10,000+ businesses worldwide
        </div>
        
        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <span className="text-sm font-medium">4.9/5 from 2,500+ reviews</span>
        </div>
      </div>

      {/* Bottom section - Testimonial */}
      <div className="space-y-6 max-w-md">
        <div className="space-y-4">
          <Quote className="h-8 w-8 text-white/60" />
          <blockquote className="text-xl font-medium leading-relaxed">
            "{testimonial.quote}"
          </blockquote>
        </div>
        
        {/* Author info */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center overflow-hidden">
            {testimonial.avatar ? (
              <img 
                src={testimonial.avatar} 
                alt={testimonial.author}
                className="w-full h-full object-cover"
              />
            ) : (
              <Users className="h-6 w-6" />
            )}
          </div>
          <div>
            <div className="font-semibold text-lg">{testimonial.author}</div>
            <div className="text-sm text-white/75">
              {testimonial.role}, {testimonial.company}
            </div>
          </div>
        </div>

        {/* Additional social proof */}
        <div className="flex items-center gap-6 pt-4 border-t border-white/20">
          <div className="text-center">
            <div className="text-xl font-bold">500K+</div>
            <div className="text-xs text-white/75">Projects Created</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold">150+</div>
            <div className="text-xs text-white/75">Countries</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold">24/7</div>
            <div className="text-xs text-white/75">Support</div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * AuthSplitImageTemplate page - SSR/hydration safe using unified AuthTemplate
 * @param {Object} [props] - Component props
 * @param {string} [props.imageUrl] - Custom image URL
 * @param {Object} [props.testimonial] - Custom testimonial data
 * @returns {JSX.Element} AuthSplitImageTemplate page component
 */
function AuthSplitImageTemplate({ 
  imageUrl = "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  testimonial
} = {}) {
  const [isClient, setIsClient] = useState(false);

  // Ensure component has hydrated before showing interactive elements
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Fallback content for SSR/initial render
  if (!isClient) {
    return (
      <div className="flex min-h-screen bg-background">
        {/* Simple fallback during SSR */}
        <div className="hidden lg:flex lg:w-1/2 bg-muted" />
        <div className="flex flex-1 lg:w-1/2 items-center justify-center p-8">
          <div className="w-full max-w-sm space-y-4">
            <div className="text-center space-y-2">
              <h1 className="text-2xl font-semibold">Loading...</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <AuthTemplate
      variant="split-image"
      title="Welcome to AgencyCorp"
      subtitle="Professional solutions for modern businesses"
      logo={<Logo />}
      splitContent={<SplitContent testimonial={testimonial} />}
      imageUrl={imageUrl}
      imageAlt="Modern office workspace with professionals collaborating"
      imageOverlay="dark"
      footer={
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">
            Need an account?{' '}
            <a href="/signup" className="text-primary hover:underline">
              Sign up for free
            </a>
          </p>
          
          {/* Mobile-only social proof */}
          <div className="lg:hidden pt-4 text-center">
            <p className="text-xs text-muted-foreground">
              Trusted by 10,000+ businesses worldwide
            </p>
            <div className="flex items-center justify-center gap-1 mt-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="text-xs ml-1 text-muted-foreground">4.9/5 rating</span>
            </div>
          </div>
        </div>
      }
    >
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="Enter your email"
          suppressHydrationWarning
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          placeholder="Enter your password"
          suppressHydrationWarning
        />
      </div>

      <div className="flex items-center justify-between text-sm">
        <label className="flex items-center gap-2">
          <input 
            type="checkbox" 
            className="rounded" 
            suppressHydrationWarning
          />
          <span className="text-muted-foreground">Remember me</span>
        </label>
        <a href="/forgot-password" className="text-primary hover:underline">
          Forgot password?
        </a>
      </div>

      <Button className="w-full" suppressHydrationWarning>
        Sign In
      </Button>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <Separator className="w-full" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <Button variant="outline" className="w-full" suppressHydrationWarning>
          <Github className="h-4 w-4 mr-2" />
          GitHub
        </Button>
        <Button variant="outline" className="w-full" suppressHydrationWarning>
          <Mail className="h-4 w-4 mr-2" />
          Google
        </Button>
      </div>

      {/* Legal links - moved to bottom */}
      <div className="text-center lg:text-left text-xs text-muted-foreground pt-4 border-t">
        <p>
          By signing in, you agree to our{' '}
          <a href="/terms" className="text-primary hover:underline">Terms of Service</a>{' '}
          and{' '}
          <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>
        </p>
      </div>
    </AuthTemplate>
  );
}

export default AuthSplitImageTemplate;