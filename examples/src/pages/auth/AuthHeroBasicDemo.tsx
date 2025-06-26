/**
 * AuthLayout Hero Scheme - Basic Demo using actual AuthLayout component
 * @module @voilajsx/uikit
 * @file examples/src/pages/auth/AuthHeroBasicDemo.tsx
 */

import React, { useState } from 'react';
import { AuthLayout } from '../../../../src/components/layouts/auth';
import { Button } from '../../../../src/components/ui/button';
import { Input } from '../../../../src/components/ui/input';
import { Label } from '../../../../src/components/ui/label';
import { Checkbox } from '../../../../src/components/ui/checkbox';
import { 
  User, 
  Eye, 
  EyeOff,
  Upload,
  Settings
} from 'lucide-react';

function AuthHeroBasicDemo() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [tone, setTone] = useState('clean');
  const [imageOverlay, setImageOverlay] = useState('dark');
  const [customImage, setCustomImage] = useState('');

  const handleSubmit = () => {
    console.log('Login:', { email, password, remember });
  };

  // Default hero image
  const defaultImage = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80";
  
  // Alternative hero images
  const heroImages = {
    mountain: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    city: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    ocean: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    forest: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
  };

  const currentImageUrl = customImage || heroImages.mountain;

  return (
    <div className="space-y-8">
      {/* Controls Panel */}
      <div className="fixed top-4 right-4 z-50 space-y-3">
        {/* Tone Selector */}
        <div className="bg-card border border-border rounded-lg p-4 shadow-lg">
          <div className="text-sm font-medium text-foreground mb-2">Hero Tone:</div>
          <div className="flex gap-2">
            {['clean', 'subtle', 'brand', 'contrast'].map((t) => (
              <Button
                key={t}
                variant={tone === t ? 'default' : 'outline'}
                size="sm"
                onClick={() => setTone(t)}
                className="capitalize text-xs"
              >
                {t}
              </Button>
            ))}
          </div>
        </div>

        {/* Image Overlay Selector */}
        <div className="bg-card border border-border rounded-lg p-4 shadow-lg">
          <div className="text-sm font-medium text-foreground mb-2">Image Overlay:</div>
          <div className="flex gap-2">
            {['light', 'dark', 'none'].map((overlay) => (
              <Button
                key={overlay}
                variant={imageOverlay === overlay ? 'default' : 'outline'}
                size="sm"
                onClick={() => setImageOverlay(overlay)}
                className="capitalize text-xs"
              >
                {overlay}
              </Button>
            ))}
          </div>
        </div>

        {/* Background Image Selector */}
        <div className="bg-card border border-border rounded-lg p-4 shadow-lg">
          <div className="text-sm font-medium text-foreground mb-2">Background:</div>
          <div className="grid grid-cols-2 gap-2">
            {Object.entries(heroImages).map(([name, url]) => (
              <Button
                key={name}
                variant={currentImageUrl === url ? 'default' : 'outline'}
                size="sm"
                onClick={() => setCustomImage(url)}
                className="capitalize text-xs"
              >
                {name}
              </Button>
            ))}
          </div>
          <div className="mt-2">
            <Input
              placeholder="Custom image URL"
              value={customImage}
              onChange={(e) => setCustomImage(e.target.value)}
              className="text-xs"
            />
          </div>
        </div>
      </div>

      <AuthLayout
        scheme="hero"
        tone={tone}
        size="md"
        title="Welcome back"
        subtitle="Sign in to your account"
        imageUrl={currentImageUrl}
        imageOverlay={imageOverlay}
        logo={
          <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20">
            <User className="h-10 w-10 text-white" />
          </div>
        }
        footer={
          <div className="text-center">
            <p className="text-white/80 text-sm">
              Secure authentication powered by enterprise-grade encryption
            </p>
          </div>
        }
      >
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-card-foreground">Email address</Label>
            <Input
              id="email"
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-background/80 backdrop-blur-sm border-border/50"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-card-foreground">Password</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-background/80 backdrop-blur-sm border-border/50 pr-10"
              />
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 p-0 text-muted-foreground hover:text-foreground"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="remember"
                checked={remember}
                onCheckedChange={setRemember}
              />
              <Label htmlFor="remember" className="text-sm font-normal text-card-foreground">
                Remember me
              </Label>
            </div>
            <Button variant="link" className="px-0 text-sm text-card-foreground hover:text-primary">
              Forgot password?
            </Button>
          </div>

          <Button 
            onClick={handleSubmit} 
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Sign in
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-border/30" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card/95 px-2 text-muted-foreground">Or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <Button variant="outline" className="bg-background/80 backdrop-blur-sm border-border/50">
              <svg className="h-4 w-4" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
            </Button>
            <Button variant="outline" className="bg-background/80 backdrop-blur-sm border-border/50">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </Button>
            <Button variant="outline" className="bg-background/80 backdrop-blur-sm border-border/50">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
            </Button>
          </div>

          <div className="text-center text-sm">
            <span className="text-card-foreground/80">Don't have an account? </span>
            <Button variant="link" className="px-0 text-sm text-primary hover:text-primary/80">
              Sign up
            </Button>
          </div>
        </div>
      </AuthLayout>
    </div>
  );
}

export default AuthHeroBasicDemo;