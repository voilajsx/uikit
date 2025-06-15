/**
 * Blank Layout Example
 * @module @voilajsx/uikit
 * @file docs/src/pages/examples/layouts/BlankExample.tsx
 */
import React, { useState } from 'react';
import { BlankLayout as BlankTemplate } from '@voilajsx/uikit/blank';
import { Button } from '@voilajsx/uikit/button';
import { Input } from '@voilajsx/uikit/input';
import { Card, CardContent } from '@voilajsx/uikit/card';
import { Badge } from '@voilajsx/uikit/badge';
import { Home, AlertCircle, Wrench, ShieldX, ArrowLeft } from 'lucide-react';

export default function BlankTemplateExamples() {
  const [currentVariant, setCurrentVariant] = useState('default');

  const Logo = () => (
    <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-lg">
      <span className="text-primary-foreground font-bold text-lg">V</span>
    </div>
  );

  const variants = [
    { key: 'default', label: 'Default' },
    { key: 'card', label: 'Card' },
    { key: 'error', label: 'Error' },
    { key: 'maintenance', label: 'Maintenance' },
    { key: 'suspension', label: 'Suspension' }
  ];

  const renderCurrentExample = () => {
    switch (currentVariant) {
      case 'default':
        return (
          <BlankTemplate
            variant="default"
            title="Welcome to VoilaJSX"
            subtitle="A modern React component library for building beautiful user interfaces"
            logo={<Logo />}
          >
            <div className="flex gap-4 justify-center">
              <Button>Get Started</Button>
              <Button variant="outline">Documentation</Button>
            </div>
          </BlankTemplate>
        );

      case 'card':
        return (
          <BlankTemplate
            variant="card"
            title="Sign In"
            subtitle="Enter your credentials to continue"
            logo={<Logo />}
          >
            <form className="space-y-4 max-w-sm mx-auto">
              <Input type="email" placeholder="Email" />
              <Input type="password" placeholder="Password" />
              <Button className="w-full">Sign In</Button>
            </form>
          </BlankTemplate>
        );

      case 'error':
        return (
          <BlankTemplate
            variant="error"
            title="Page Not Found"
            subtitle="The page you're looking for doesn't exist"
            logo={<Logo />}
            icon={<AlertCircle className="w-10 h-10" />}
            actions={
              <>
                <Button className="flex items-center gap-2">
                  <Home className="w-4 h-4" />
                  Go Home
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Go Back
                </Button>
              </>
            }
          >
            <div className="text-6xl font-black text-muted-foreground/20">404</div>
          </BlankTemplate>
        );

      case 'maintenance':
        return (
          <BlankTemplate
            variant="maintenance"
            title="Under Maintenance"
            subtitle="We're making improvements and will be back shortly"
            logo={<Logo />}
            icon={<Wrench className="w-10 h-10" />}
            actions={<Button variant="outline">Check Status</Button>}
          >
            <div className="bg-muted/50 rounded-lg p-4 max-w-xs mx-auto">
              <p className="text-sm font-medium mb-1">Estimated completion</p>
              <p className="text-lg font-semibold text-primary">2 hours</p>
            </div>
          </BlankTemplate>
        );

      case 'suspension':
        return (
          <BlankTemplate
            variant="suspension"
            title="Account Suspended"
            subtitle="Your account has been temporarily suspended"
            logo={<Logo />}
            icon={<ShieldX className="w-10 h-10" />}
            actions={<Button variant="outline">Contact Support</Button>}
          >
            <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 max-w-sm mx-auto">
              <p className="text-sm font-medium text-destructive mb-2">Reason</p>
              <p className="text-sm text-muted-foreground">Policy violation detected</p>
            </div>
          </BlankTemplate>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Variant Selector */}
      <div className="fixed top-4 left-4 z-10">
        <Card className="w-40">
          <CardContent className="p-3">
            <div className="space-y-2">
              <p className="text-xs font-medium text-muted-foreground">Variants</p>
              {variants.map((variant) => (
                <Button
                  key={variant.key}
                  variant={currentVariant === variant.key ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setCurrentVariant(variant.key)}
                  className="w-full justify-start h-8 text-xs"
                >
                  {variant.label}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Current Example */}
      {renderCurrentExample()}

      {/* Info Badge */}
      <div className="fixed bottom-4 right-4">
        <Badge variant="secondary" className="text-xs">
          {currentVariant}
        </Badge>
      </div>
    </div>
  );
}