/**
 * @fileoverviewAuth Layout
 * @module @voilajsx/uikit
 * @file src/components/layouts/auth.jsx
 */

import React from 'react';
import { cn } from '../../lib/utils';

/**
 * AuthLayout - Unified authentication layout with multiple variants
 * Supports all authentication layout patterns through a single component
 * @param {Object} props - Component props
 * @param {string} [props.variant='simple'] - Layout variant ('simple' | 'card' | 'split-gradient' | 'split-image' | 'card-gradient' | 'card-image')
 * @param {string} [props.title] - Page title
 * @param {string} [props.subtitle] - Page subtitle
 * @param {React.ReactNode} [props.logo] - Logo component
 * @param {React.ReactNode} [props.footer] - Footer content
 * @param {string} [props.className] - Additional CSS classes
 * @param {Object} [props.containerProps] - Container props for customization
 * 
 * // Split variant props
 * @param {React.ReactNode} [props.splitContent] - Left side content for split variants
 * 
 * // Image variant props  
 * @param {string} [props.imageUrl] - Background image URL for image variants
 * @param {string} [props.imageAlt] - Image alt text
 * @param {string} [props.imageOverlay] - Image overlay ('light' | 'dark' | 'none')
 * 
 * // Card variant props
 * @param {React.ReactNode} [props.cardContent] - Left side content for card variants
 * 
 * @param {React.ReactNode} props.children - Form content
 * @returns {JSX.Element} AuthLayout component
 */
function AuthLayout({
  variant = 'simple',
  title,
  subtitle,
  logo,
  footer,
  className,
  containerProps,
  
  // Split variant props
  splitContent,
  
  // Image variant props
  imageUrl = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  imageAlt = "Authentication background",
  imageOverlay = 'dark',
  
  // Card variant props
  cardContent,
  
  children,
}) {
  const overlayClasses = {
    light: 'bg-gradient-to-br from-white/50 via-white/25 to-white/50',
    dark: 'bg-gradient-to-br from-black/40 via-black/25 to-black/40',
    none: '',
  };

  // Simple variant - basic centered layout
  if (variant === 'simple') {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div
          {...containerProps}
          className={cn(
            'w-full max-w-md space-y-6',
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

          <div className={cn('space-y-4', className)}>
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

  // Card variant - elevated card layout
  if (variant === 'card') {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div
          {...containerProps}
          className={cn(
            'w-full max-w-md space-y-6 p-8 bg-card border border-border rounded-lg shadow-lg',
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

          <div className={cn('space-y-4', className)}>
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

  // Split variants - full screen split layout
  if (variant === 'split-gradient' || variant === 'split-image') {
    return (
      <div className="flex min-h-screen bg-background">
        {/* Left side - Gradient or Image */}
        <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
          {variant === 'split-gradient' ? (
            <>
              {/* Dynamic gradient */}
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
          ) : (
            <>
              {/* Image background */}
              <img
                src={imageUrl}
                alt={imageAlt}
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              {/* Overlay */}
              {imageOverlay !== 'none' && (
                <div className={cn('absolute inset-0', overlayClasses[imageOverlay])}></div>
              )}
            </>
          )}
          
          {/* Content overlay */}
          <div className={cn(
            'relative z-10 flex flex-col justify-center p-8 lg:p-12',
            variant === 'split-gradient' ? 'text-primary-foreground' : 'text-white'
          )}>
            {splitContent}
          </div>
        </div>

        {/* Right side - Form content */}
        <div className="flex flex-1 lg:w-1/2">
          <div className="flex flex-col justify-center w-full px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
            <div className="mx-auto w-full max-w-sm lg:w-96">
              
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

              <div className={cn('space-y-4', className)}>
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

  // Card Gradient variant - vertical card with beautiful gradient header
  if (variant === 'card-gradient') {
    return (
      <div className="min-h-screen background flex items-center justify-center p-4 sm:p-6">
        <div className="w-full max-w-md">
          
          {/* Main Card */}
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-none">
            
            {/* Top Gradient Section */}
            <div className="relative h-48 bg-gradient-to-br from-primary via-primary to-primary/80 overflow-hidden">
              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-20">
                <div 
                  className="w-full h-full"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3Ccircle cx='10' cy='10' r='1'/%3E%3Ccircle cx='50' cy='10' r='1'/%3E%3Ccircle cx='10' cy='50' r='1'/%3E%3Ccircle cx='50' cy='50' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  }}
                />
              </div>
              
              {/* Floating orbs */}
              <div className="absolute top-4 right-6 w-16 h-16 bg-primary-foreground/10 rounded-full blur-xl"></div>
              <div className="absolute bottom-6 left-8 w-12 h-12 bg-primary-foreground/15 rounded-full blur-lg"></div>
              <div className="absolute top-12 left-12 w-8 h-8 bg-primary-foreground/20 rounded-full blur-md"></div>
              
              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-8">
                <div className="mb-4">
                  {logo}
                </div>
                {title && (
                  <h1 className="text-2xl font-bold text-primary-foreground mb-2">{title}</h1>
                )}
                {subtitle && (
                  <p className="text-primary-foreground/90 text-sm">{subtitle}</p>
                )}
              </div>
            </div>

            {/* Bottom Form Section */}
            <div className="p-8 space-y-6 bg-white">
              <div className={cn('space-y-4', className)}>
                {children}
              </div>
            </div>
          </div>

          {/* Bottom Features */}
          {cardContent && (
            <div className="mt-8">
              {cardContent}
            </div>
          )}

          {footer && (
            <div className="text-center mt-6 text-sm text-muted-foreground">
              {footer}
            </div>
          )}
        </div>
      </div>
    );
  }

  // Card Image variant - card overlay on beautiful image background
  if (variant === 'card-image') {
    return (
      <div className="min-h-screen relative overflow-hidden">
        
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${imageUrl}')`
          }}
        >
          {/* Overlay for better text readability */}
          <div className={cn('absolute inset-0', overlayClasses[imageOverlay])}></div>
          
          {/* Gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20"></div>
        </div>

        {/* Content */}
        <div className="relative  z-10 min-h-screen flex items-center justify-center p-4 sm:p-6">
          <div className="w-full max-w-md">
            
            {/* Logo at top */}
            {logo && (
              <div className="text-center mb-8">
                {logo}
              </div>
            )}

            {/* Main Card */}
            <div className="bg-card/95 bg-white backdrop-blur-xl rounded-3xl shadow-2xl border border-border/20 overflow-hidden">
              
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
                <div className={cn('space-y-4', className)}>
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

  // Fallback to simple variant
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center">
          <p className="text-destructive">Invalid variant: {variant}</p>
        </div>
      </div>
    </div>
  );
}

/**
 * Export AuthLayout as default and named export
 */
export { AuthLayout as default, AuthLayout };