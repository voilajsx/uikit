/**
 * AuthCardImageTemplate - Beautiful image background card variant
 * @module @voilajsx/uikit
 * @file src/pages/templates/AuthCardImageTemplate.jsx
 */

import React, { useState, useEffect } from 'react';
import { Button } from '@voilajsx/uikit/button';
import { Input } from '@voilajsx/uikit/input';
import { Label } from '@voilajsx/uikit/label';
import { AuthTemplate } from '@voilajsx/uikit/auth';
import { Sparkles, Github, Mail, ArrowRight, Eye, EyeOff } from 'lucide-react';

/**
 * Logo component for image variant
 * @returns {JSX.Element} Logo component
 */
function ImageLogo() {
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-lg">
        <Sparkles className="h-5 w-5 text-white" />
      </div>
      <span className="text-2xl font-bold text-white">
        Zenith
      </span>
    </div>
  );
}

/**
 * AuthCardImageTemplate page - SSR/hydration safe
 * @returns {JSX.Element} AuthCardImageTemplate page component
 */
function AuthCardImageTemplate() {
  const [isClient, setIsClient] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Ensure component has hydrated before showing interactive elements
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Fallback content for SSR/initial render
  if (!isClient) {
    return (
      <div className="min-h-screen relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/25 to-black/40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 min-h-screen flex items-center justify-center p-4 sm:p-6">
          <div className="w-full max-w-md">
            <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
              <div className="px-8 pt-8 pb-6 text-center">
                <h1 className="text-3xl font-bold text-foreground mb-2">Loading...</h1>
                <p className="text-muted-foreground">Please wait while we load the authentication form...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <AuthTemplate 
      variant="card-image"
      title="Welcome Back"
      subtitle="Please sign in to your account"
      logo={<ImageLogo />}
      imageUrl="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      imageAlt="Beautiful mountain landscape"
      imageOverlay="dark"
      footer={
        <p className="text-sm">
          Don't have an account?{' '}
          <a href="/signup" className="text-white hover:text-white/80 font-medium transition-colors underline">
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
            className="h-12 bg-white/80 border-border focus:border-primary focus:ring-primary/40 rounded-xl px-4 text-foreground placeholder:text-muted-foreground transition-all duration-200 backdrop-blur-sm"
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
              className="h-12 bg-white/80 border-border focus:border-primary focus:ring-primary/40 rounded-xl px-4 pr-12 text-foreground placeholder:text-muted-foreground transition-all duration-200 backdrop-blur-sm"
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
          className="w-full h-12 bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-accent text-white font-medium rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl" 
          suppressHydrationWarning
        >
          <span>Sign in to Zenith</span>
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white px-4 text-muted-foreground font-medium tracking-wider">
              Or continue with
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <Button 
            variant="outline" 
            className="h-12 bg-white/80 border-border hover:bg-accent hover:border-border/80 text-foreground rounded-xl transition-all duration-200 backdrop-blur-sm" 
            suppressHydrationWarning
          >
            <Github className="h-4 w-4 mr-2" />
            GitHub
          </Button>
          <Button 
            variant="outline" 
            className="h-12 bg-white/80 border-border hover:bg-accent hover:border-border/80 text-foreground rounded-xl transition-all duration-200 backdrop-blur-sm" 
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

export default AuthCardImageTemplate;