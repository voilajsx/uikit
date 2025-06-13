/**
 * AuthTemplate Card variant - clean visual only
 * @module @voilajsx/uikit
 * @file src/pages/templates/AuthCardTemplate.jsx
 */

import React, { useState, useEffect } from 'react';
import { Button } from '@voilajsx/uikit/button';
import { Input } from '@voilajsx/uikit/input';
import { Label } from '@voilajsx/uikit/label';
import { Separator } from '@voilajsx/uikit/separator';
import { AuthTemplate } from '@voilajsx/uikit/auth';
import { Sparkles, Github, Mail } from 'lucide-react';

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
      <span className="text-xl font-semibold text-foreground">Brand</span>
    </div>
  );
}

/**
 * AuthCardTemplate page - SSR/hydration safe using AuthTemplate
 * @returns {JSX.Element} AuthCardTemplate page component
 */
function AuthCardTemplate() {
  const [isClient, setIsClient] = useState(false);

  // Ensure component has hydrated before showing interactive elements
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Fallback content for SSR/initial render
  if (!isClient) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="w-full max-w-md p-8 bg-card border border-border rounded-lg shadow-lg">
          <div className="text-center space-y-4">
            <h1 className="text-2xl font-semibold">Loading...</h1>
          </div>
        </div>
      </div>
    );
  }

  return (
    <AuthTemplate 
      variant="card"
      title="Welcome Back" 
      subtitle="Sign in to your account"
      logo={<Logo />}
      footer={
        <p className="text-sm text-muted-foreground">
          Don't have an account?{' '}
          <a href="/signup" className="text-primary hover:underline">
            Sign up
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
          <span className="bg-card px-2 text-muted-foreground">
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

export default AuthCardTemplate;