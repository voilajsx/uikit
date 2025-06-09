/**
 * AuthTemplate Split Gradient variant - using unified AuthTemplate
 * @module @voilajsx/uikit
 * @file src/pages/templates/AuthSplitGradientTemplate.jsx
 */

import React, { useState, useEffect } from 'react';
import { AuthTemplate } from '@voilajsx/uikit/templates/auth';
import { Button } from '@voilajsx/uikit/button';
import { Input } from '@voilajsx/uikit/input';
import { Label } from '@voilajsx/uikit/label';
import { Separator } from '@voilajsx/uikit/separator';
import { Sparkles, Github, Mail, Shield, Users, Zap } from 'lucide-react';

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
      <span className="text-xl font-semibold text-foreground">TechCorp</span>
    </div>
  );
}

/**
 * Split content component for gradient side
 * @returns {JSX.Element} Split content
 */
function SplitContent() {
  return (
    <div className="space-y-6 max-w-md text-primary-foreground">
      {/* Main heading */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-foreground/20 backdrop-blur-sm text-sm font-medium">
          <div className="w-2 h-2 rounded-full bg-primary-foreground"></div>
          Next-generation platform
        </div>
        <h2 className="text-3xl font-bold leading-tight">
          Welcome to the future of productivity
        </h2>
        <p className="text-primary-foreground/90 text-lg leading-relaxed">
          Join thousands of teams who trust our platform to streamline their workflows, 
          boost collaboration, and achieve remarkable results.
        </p>
      </div>
      
      {/* Feature highlights */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary-foreground/20 backdrop-blur-sm">
            <Shield className="h-5 w-5" />
          </div>
          <div>
            <div className="font-semibold">Enterprise Security</div>
            <div className="text-sm text-primary-foreground/75">SOC 2 compliant with end-to-end encryption</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary-foreground/20 backdrop-blur-sm">
            <Users className="h-5 w-5" />
          </div>
          <div>
            <div className="font-semibold">Team Collaboration</div>
            <div className="text-sm text-primary-foreground/75">Real-time sync across all devices</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary-foreground/20 backdrop-blur-sm">
            <Zap className="h-5 w-5" />
          </div>
          <div>
            <div className="font-semibold">Lightning Fast</div>
            <div className="text-sm text-primary-foreground/75">99.9% uptime with global CDN</div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="pt-4 border-t border-primary-foreground/20">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold">50K+</div>
            <div className="text-xs text-primary-foreground/75">Active Users</div>
          </div>
          <div>
            <div className="text-2xl font-bold">99.9%</div>
            <div className="text-xs text-primary-foreground/75">Uptime</div>
          </div>
          <div>
            <div className="text-2xl font-bold">24/7</div>
            <div className="text-xs text-primary-foreground/75">Support</div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * AuthSplitGradientTemplate page - SSR/hydration safe using unified AuthTemplate
 * @returns {JSX.Element} AuthSplitGradientTemplate page component
 */
function AuthSplitGradientTemplate() {
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
        <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-primary via-primary/90 to-accent" />
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
      variant="split-gradient"
      title="Welcome to TechCorp"
      subtitle="The future of productivity starts here"
      logo={<Logo />}
      splitContent={<SplitContent />}
      footer={
        <p className="text-sm text-muted-foreground">
          New to our platform?{' '}
          <a href="/signup" className="text-primary hover:underline">
            Create an account
          </a>
        </p>
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
    </AuthTemplate>
  );
}

export default AuthSplitGradientTemplate;