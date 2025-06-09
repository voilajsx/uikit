/**
 * AuthTemplate Simple variant - clean visual only
 * @module @voilajsx/uikit
 * @file src/pages/templates/AuthSimpleTemplate.jsx
 */

import React, { useState, useEffect } from 'react';
import { Button } from '@voilajsx/uikit/button';
import { Input } from '@voilajsx/uikit/input';
import { Label } from '@voilajsx/uikit/label';
import { AuthTemplate } from '@voilajsx/uikit/templates/auth';
import { Sparkles } from 'lucide-react';

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
 * AuthSimpleTemplate page - SSR/hydration safe
 * @returns {JSX.Element} AuthSimpleTemplate page component
 */
function AuthSimpleTemplate() {
  const [isClient, setIsClient] = useState(false);

  // Ensure component has hydrated before showing interactive elements
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Fallback content for SSR/initial render
  if (!isClient) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="w-full max-w-md space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-semibold">Loading...</h1>
          </div>
        </div>
      </div>
    );
  }

  return (
    <AuthTemplate 
      variant="simple"
      title="Welcome Back" 
      subtitle="Sign in to your account to continue"
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
      {/* Just the form elements - no Card wrapper needed */}
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input 
          id="email" 
          type="email" 
          placeholder="your@email.com"
          suppressHydrationWarning
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input 
          id="password" 
          type="password" 
          placeholder="Password"
          suppressHydrationWarning
        />
      </div>
      
      <Button className="w-full" suppressHydrationWarning>
        Sign In
      </Button>
      
      <div className="text-center">
        <Button variant="link" className="text-sm">
          Forgot password?
        </Button>
      </div>
    </AuthTemplate>
  );
}

export default AuthSimpleTemplate;