/**
 * Auth Layout with standardized prop naming and scheme system - FIXED TYPES
 * @module @voilajsx/uikit
 * @file src/components/layouts/auth.tsx
 */

import * as React from 'react';
import { forwardRef } from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import type { Size, AuthLayoutScheme, Tone } from '@/types';

/**
 * Auth layout scheme variants - structural arrangements
 */
const authVariants = cva(
  'min-h-screen',
  {
    variants: {
      scheme: {
        simple: 'bg-background flex items-center justify-center p-4',
        card: 'bg-background flex items-center justify-center p-4',
        split: 'flex min-h-screen bg-background',
        hero: 'min-h-screen relative overflow-hidden'
      },
      tone: {
        clean: '',
        subtle: 'bg-muted/10',
        brand: 'bg-primary/5',
        contrast: 'bg-zinc-900'
      }
    },
    defaultVariants: {
      scheme: 'card',
      tone: 'clean'
    }
  }
);

/**
 * Content container variants based on scheme and size
 */
const contentVariants = cva(
  'w-full space-y-6',
  {
    variants: {
      size: {
        sm: 'max-w-sm',
        md: 'max-w-md', 
        lg: 'max-w-lg',
        xl: 'max-w-xl',
        full: 'max-w-2xl'
      },
      scheme: {
        simple: '',
        card: 'p-8 bg-card border border-border rounded-lg shadow-lg',
        split: 'mx-auto lg:w-96',
        hero: ''
      }
    },
    defaultVariants: {
      size: 'md',
      scheme: 'card'
    }
  }
);

/**
 * Auth Layout props with standardized system - USING TYPES
 */
export interface AuthLayoutProps {
  /** Layout structure/arrangement - USING TYPE */
  scheme?: AuthLayoutScheme;
  /** Visual styling tone - USING TYPE */
  tone?: Tone;
  /** Content container size - USING TYPE */
  size?: Size;
  /** Page title */
  title?: string;
  /** Page subtitle */
  subtitle?: string;
  /** Logo component */
  logo?: React.ReactNode;
  /** Footer content */
  footer?: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Container props for customization */
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
  
  // Split scheme props
  /** Left side content for split scheme */
  splitContent?: React.ReactNode;
  
  // Hero scheme props  
  /** Background image URL for hero scheme */
  imageUrl?: string;
  /** Image alt text */
  imageAlt?: string;
  /** Image overlay */
  imageOverlay?: 'light' | 'dark' | 'none';
  
  // Card scheme props
  /** Additional card content for card scheme */
  cardContent?: React.ReactNode;
  
  /** Form content */
  children: React.ReactNode;
}

/**
 * AuthLayout - Unified authentication layout with standardized props
 */
const AuthLayoutComponent = forwardRef<HTMLDivElement, AuthLayoutProps>(({
  scheme = 'card',
  tone = 'clean',
  size = 'md',
  title,
  subtitle,
  logo,
  footer,
  className,
  containerProps,
  
  // Split scheme props
  splitContent,
  
  // Hero scheme props
  imageUrl = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  imageAlt = "Authentication background",
  imageOverlay = 'dark',
  
  // Card scheme props
  cardContent,
  
  children,
}, ref) => {
  
  const overlayClasses = {
    light: 'bg-gradient-to-br from-white/50 via-white/25 to-white/50',
    dark: 'bg-gradient-to-br from-black/40 via-black/25 to-black/40',
    none: '',
  };

  // Simple scheme - basic centered layout
  if (scheme === 'simple') {
    return (
      <div ref={ref} className={cn(authVariants({ scheme, tone }), className)}>
        <div
          {...containerProps}
          className={cn(
            contentVariants({ size, scheme }),
            containerProps?.className
          )}
        >
          {logo && (
            <div className="flex justify-center">
              {logo}
            </div>
          )}

          {(title || subtitle) && (
            <div className="text-center space-y-2">
              {title && (
                <h1 className="text-2xl font-semibold tracking-tight text-foreground">
                  {title}
                </h1>
              )}
              {subtitle && (
                <p className="text-sm text-muted-foreground">
                  {subtitle}
                </p>
              )}
            </div>
          )}

          <div className="space-y-4">
            {children}
          </div>

          {footer && (
            <div className="text-center">
              {footer}
            </div>
          )}
        </div>
      </div>
    );
  }

  // Card scheme - elevated card layout
  if (scheme === 'card') {
    return (
      <div ref={ref} className={cn(authVariants({ scheme, tone }), className)}>
        <div
          {...containerProps}
          className={cn(
            contentVariants({ size, scheme }),
            containerProps?.className
          )}
        >
          {logo && (
            <div className="flex justify-center">
              {logo}
            </div>
          )}

          {(title || subtitle) && (
            <div className="text-center space-y-2">
              {title && (
                <h1 className="text-2xl font-semibold tracking-tight text-foreground">
                  {title}
                </h1>
              )}
              {subtitle && (
                <p className="text-sm text-muted-foreground">
                  {subtitle}
                </p>
              )}
            </div>
          )}

          <div className="space-y-4">
            {children}
          </div>

          {footer && (
            <div className="text-center">
              {footer}
            </div>
          )}
        </div>
      </div>
    );
  }

  // Split scheme - full screen split layout
  if (scheme === 'split') {
    return (
      <div ref={ref} className={cn(authVariants({ scheme, tone }), className)}>
        {/* Left side - Content or Image */}
        <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
          {splitContent ? (
            // Custom split content
            <div className="relative z-10 flex flex-col justify-center p-8 lg:p-12 w-full">
              {splitContent}
            </div>
          ) : (
            <>
              {/* Default gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-accent"></div>
              
              {/* Subtle pattern overlay */}
              <div className="absolute inset-0 opacity-10">
                <div 
                  className="w-full h-full"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='53' cy='7' r='1'/%3E%3Ccircle cx='7' cy='53' r='1'/%3E%3Ccircle cx='53' cy='53' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  }}
                />
              </div>
            </>
          )}
        </div>

        {/* Right side - Form content */}
        <div className="flex flex-1 lg:w-1/2">
          <div className="flex flex-col justify-center w-full px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
            <div className={cn(contentVariants({ size, scheme }))}>
              
              {logo && (
                <div className="flex justify-center lg:justify-start mb-8">
                  {logo}
                </div>
              )}

              {(title || subtitle) && (
                <div className="text-center lg:text-left space-y-2 mb-8">
                  {title && (
                    <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">
                      {title}
                    </h1>
                  )}
                  {subtitle && (
                    <p className="text-sm text-muted-foreground">
                      {subtitle}
                    </p>
                  )}
                </div>
              )}

              <div className="space-y-4">
                {children}
              </div>

              {footer && (
                <div className="text-center lg:text-left mt-8">
                  {footer}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Hero scheme - card overlay on image background
  if (scheme === 'hero') {
    return (
      <div ref={ref} className={cn(authVariants({ scheme, tone }), className)}>
        
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${imageUrl}')`
          }}
        >
          {/* Overlay for better text readability */}
          {imageOverlay !== 'none' && (
            <div className={cn('absolute inset-0', overlayClasses[imageOverlay])}></div>
          )}
          
          {/* Gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 min-h-screen flex items-center justify-center p-4 sm:p-6">
          <div className={cn('w-full', contentVariants({ size, scheme: 'simple' }))}>
            
            {/* Logo at top */}
            {logo && (
              <div className="text-center mb-8">
                {logo}
              </div>
            )}

            {/* Main Card */}
            <div className="bg-card/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-border/20 overflow-hidden">
              
              {/* Card Header */}
              <div className="px-8 pt-8 pb-6 text-center">
                {title && (
                  <h1 className="text-3xl font-bold text-foreground mb-2">{title}</h1>
                )}
                {subtitle && (
                  <p className="text-muted-foreground">{subtitle}</p>
                )}
              </div>

              {/* Card Body */}
              <div className="px-8 pb-8 space-y-6">
                <div className="space-y-4">
                  {children}
                </div>
              </div>
            </div>

            {/* Bottom Content */}
            {cardContent && (
              <div className="mt-8">
                {cardContent}
              </div>
            )}

            {/* Bottom Text */}
            {footer && (
              <div className="text-center mt-8 text-sm text-primary-foreground/80">
                {footer}
              </div>
            )}
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary-foreground/30 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-primary/40 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-20 w-2 h-2 bg-primary/40 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-20 right-32 w-4 h-4 bg-primary-foreground/20 rounded-full animate-pulse delay-700"></div>
      </div>
    );
  }

  // Fallback to card scheme
  return (
    <div ref={ref} className={cn(authVariants({ scheme: 'card', tone }), className)}>
      <div className={cn(contentVariants({ size, scheme: 'card' }))}>
        <div className="text-center">
          <p className="text-destructive">Invalid scheme: {scheme}</p>
        </div>
      </div>
    </div>
  );
});

AuthLayoutComponent.displayName = 'AuthLayout';

/**
 * AuthLayout with standardized props - FULLY CONSISTENT
 */
const AuthLayout = AuthLayoutComponent;

export { AuthLayout };