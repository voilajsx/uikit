/**
 * AuthLayout Simple Scheme - Basic Demo using actual AuthLayout component
 * @module @voilajsx/uikit
 * @file examples/src/pages/auth/AuthSimpleBasicDemo.tsx
 */

import React, { useState } from 'react';
import { AuthLayout } from '../../../../src/components/layouts/auth';
import { Button } from '../../../../src/components/ui/button';
import { Input } from '../../../../src/components/ui/input';
import { Label } from '../../../../src/components/ui/label';
import { Checkbox } from '../../../../src/components/ui/checkbox';
import { User, Eye, EyeOff } from 'lucide-react';

function AuthSimpleBasicDemo() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [tone, setTone] = useState('clean');

  const handleSubmit = () => {
    console.log('Login:', { email, password, remember });
  };

  return (
    <div className="space-y-8">
      {/* Tone Selector */}
      <div className="fixed top-4 right-4 z-50">
        <div className="bg-card border border-border rounded-lg p-4 shadow-lg">
          <div className="text-sm font-medium text-foreground mb-2">Simple Tone:</div>
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
        scheme="simple"
        tone={tone}
        size="md"
        title="Welcome back"
        subtitle="Sign in to your account"
        logo={
          <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center">
            <User className="h-8 w-8 text-primary-foreground" />
          </div>
        }
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

export default AuthSimpleBasicDemo;