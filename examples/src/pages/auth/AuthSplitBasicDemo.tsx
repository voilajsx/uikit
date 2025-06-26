/**
 * AuthLayout Split Scheme - Basic Demo using actual AuthLayout component
 * @module @voilajsx/uikit
 * @file examples/src/pages/auth/AuthSplitBasicDemo.tsx
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
  Shield, 
  Zap, 
  Globe, 
  Star 
} from 'lucide-react';

function AuthSplitBasicDemo() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [tone, setTone] = useState('clean');

  const handleSubmit = () => {
    console.log('Login:', { email, password, remember });
  };

  // Split content for the left panel with proper gradient background
  const splitContent = (
    <div className="relative w-full h-full">
      {/* Gradient background matching AuthLayout default */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-accent"></div>
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='53' cy='7' r='1'/%3E%3Ccircle cx='7' cy='53' r='1'/%3E%3Ccircle cx='53' cy='53' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-white p-8 lg:p-12 flex flex-col justify-center h-full">
        <div className="mb-8">
          <h2 className="text-4xl font-bold mb-4">
            Welcome to our platform
          </h2>
          <p className="text-xl text-white/80">
            Join thousands of users who trust our secure authentication system.
          </p>
        </div>
      
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
            <Shield className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Secure & Encrypted</h3>
            <p className="text-white/70">Your data is protected with enterprise-grade security</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
            <Zap className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Fast & Reliable</h3>
            <p className="text-white/70">Lightning-fast authentication with 99.9% uptime</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
            <Globe className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Global Access</h3>
            <p className="text-white/70">Access your account from anywhere in the world</p>
          </div>
        </div>
      </div>
      
      <div className="mt-12 p-6 bg-white/10 rounded-lg backdrop-blur-sm">
        <div className="flex items-center gap-3 mb-3">
          <Star className="h-5 w-5 text-yellow-400 fill-current" />
          <Star className="h-5 w-5 text-yellow-400 fill-current" />
          <Star className="h-5 w-5 text-yellow-400 fill-current" />
          <Star className="h-5 w-5 text-yellow-400 fill-current" />
          <Star className="h-5 w-5 text-yellow-400 fill-current" />
        </div>
        <p className="text-white/90 italic">
          "The best authentication experience I've ever used. Simple, secure, and beautiful."
        </p>
        <p className="text-white/70 mt-2 text-sm">— Sarah Chen, Product Manager</p>
              </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-8">
      {/* Tone Selector */}
      <div className="fixed top-4 right-4 z-50">
        <div className="bg-card border border-border rounded-lg p-4 shadow-lg">
          <div className="text-sm font-medium text-foreground mb-2">Split Tone:</div>
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
      </div>

      <AuthLayout
        scheme="split"
        tone={tone}
        size="lg"
        title="Welcome back"
        subtitle="Sign in to your account"
        logo={
          <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center">
            <User className="h-8 w-8 text-primary-foreground" />
          </div>
        }
        splitContent={splitContent}
      >
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email address</Label>
            <Input
              id="email"
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pr-10"
              />
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 p-0"
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
              <Label htmlFor="remember" className="text-sm font-normal">
                Remember me
              </Label>
            </div>
            <Button variant="link" className="px-0 text-sm">
              Forgot password?
            </Button>
          </div>

          <Button onClick={handleSubmit} className="w-full">
            Sign in
          </Button>

          <div className="text-center text-sm">
            <span className="text-muted-foreground">Don't have an account? </span>
            <Button variant="link" className="px-0 text-sm">
              Sign up
            </Button>
          </div>
        </div>
      </AuthLayout>
    </div>
  );
}

export default AuthSplitBasicDemo;