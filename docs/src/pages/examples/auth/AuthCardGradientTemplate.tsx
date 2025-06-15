/**
 * AuthCardGradientTemplate - Beautiful gradient card variant
 * @module @voilajsx/uikit
 * @file src/pages/templates/AuthCardGradientTemplate.jsx
 */

import React, { useState, useEffect } from 'react';
import { Button } from '@voilajsx/uikit/button';
import { Input } from '@voilajsx/uikit/input';
import { Label } from '@voilajsx/uikit/label';
import { AuthLayout as AuthTemplate } from '@voilajsx/uikit/auth';
import { Sparkles, Github, Mail, ArrowRight, Eye, EyeOff, Shield, Users, Star } from 'lucide-react';

/**
 * Logo component for gradient variant
 * @returns {JSX.Element} Logo component
 */
function GradientLogo() {
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 bg-primary-foreground/20 backdrop-blur-sm border border-primary-foreground/30 rounded-xl flex items-center justify-center shadow-lg">
        <Sparkles className="h-5 w-5 text-primary-foreground" />
      </div>
      <span className="text-2xl font-bold text-primary-foreground">
        Aurora
      </span>
    </div>
  );
}

/**
 * Feature cards for bottom section
 * @returns {JSX.Element} Feature cards component
 */
function FeatureCards() {
  const features = [
    {
      icon: Shield,
      title: "Secure",
      description: "Bank-level security"
    },
    {
      icon: Users,
      title: "Trusted",
      description: "10k+ users"
    },
    {
      icon: Star,
      title: "Rated",
      description: "4.9/5 stars"
    }
  ];

  return (
    <div className="grid grid-cols-3 gap-3">
      {features.map((feature, index) => {
        const Icon = feature.icon;
        return (
          <div 
            key={index}
            className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-4 border border-primary-foreground/20"
          >
            <div className="w-8 h-8 bg-primary-foreground/20 rounded-lg flex items-center justify-center mb-3">
              <Icon className="h-4 w-4 text-primary-foreground" />
            </div>
            <h3 className="text-primary-foreground font-semibold text-sm mb-1">{feature.title}</h3>
            <p className="text-primary-foreground/80 text-xs leading-relaxed">{feature.description}</p>
          </div>
        );
      })}
    </div>
  );
}

/**
 * AuthCardGradientTemplate page - SSR/hydration safe
 * @returns {JSX.Element} AuthCardGradientTemplate page component
 */
function AuthCardGradientTemplate() {
  const [isClient, setIsClient] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Ensure component has hydrated before showing interactive elements
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Fallback content for SSR/initial render
  if (!isClient) {
    return (
      <div className="min-h-screen bg-accent flex items-center justify-center p-4 sm:p-6">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-border">
            <div className="relative h-48 bg-gradient-to-br from-primary via-primary to-primary/80">
              <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-8">
                <h1 className="text-2xl font-bold text-primary-foreground mb-2">Loading...</h1>
              </div>
            </div>
            <div className="p-8">
              <div className="text-center text-muted-foreground">
                Please wait while we load the authentication form...
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <AuthTemplate 
      variant="card-gradient"
      title="Welcome Back"
      subtitle="Sign in to continue your journey"
      logo={<GradientLogo />}
      footer={
        <p className="text-sm text-muted-foreground">
          Don't have an account?{' '}
          <a href="/signup" className="text-primary hover:underline font-medium">
            Create one here
          </a>
        </p>
      }
    >
      {/* Form elements - AuthTemplate handles the card structure */}
      <div className="space-y-5">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-foreground font-medium text-sm">
            Email address
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="h-12 border-border focus:border-primary focus:ring-primary/20 rounded-xl px-4 text-foreground placeholder:text-muted-foreground transition-all duration-200"
            suppressHydrationWarning
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="password" className="text-foreground font-medium text-sm">
            Password
          </Label>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="h-12 border-border focus:border-primary focus:ring-primary/20 rounded-xl px-4 pr-12 text-foreground placeholder:text-muted-foreground transition-all duration-200"
              suppressHydrationWarning
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              suppressHydrationWarning
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2.5 cursor-pointer">
            <input 
              type="checkbox" 
              className="w-4 h-4 rounded border-border text-primary focus:ring-primary/20 focus:ring-2" 
              suppressHydrationWarning
            />
            <span className="text-muted-foreground text-sm select-none">Remember me</span>
          </label>
          <a 
            href="/forgot-password" 
            className="text-primary hover:text-primary/80 font-medium text-sm transition-colors"
          >
            Forgot password?
          </a>
        </div>

        <Button 
          className="w-full h-12 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground font-medium rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl" 
          suppressHydrationWarning
        >
          <span>Sign in to Aurora</span>
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-card px-4 text-muted-foreground font-medium tracking-wider">
              Or continue with
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <Button 
            variant="outline" 
            className="h-12 border-border hover:bg-muted hover:border-border/80 text-foreground rounded-xl transition-all duration-200" 
            suppressHydrationWarning
          >
            <Github className="h-4 w-4 mr-2" />
            GitHub
          </Button>
          <Button 
            variant="outline" 
            className="h-12 border-border hover:bg-muted hover:border-border/80 text-foreground rounded-xl transition-all duration-200" 
            suppressHydrationWarning
          >
            <Mail className="h-4 w-4 mr-2" />
            Google
          </Button>
        </div>
      </div>
    </AuthTemplate>
  );
}

export default AuthCardGradientTemplate;