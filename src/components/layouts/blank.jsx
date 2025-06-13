/**
 * BlankTemplate - Unified blank page layout component with variants
 * @module @voilajsx/uikit
 * @file src/components/layouts/blank.jsx
 */

import React from 'react';
import { cn } from '../../lib/utils';

/**
 * BlankTemplate - Unified blank page layout with multiple variants
 * Supports all blank page layout patterns through a single component
 * @param {Object} props - Component props
 * @param {string} [props.variant='default'] - Layout variant ('default' | 'card' | 'error' | 'maintenance' | 'suspension')
 * @param {string} [props.title] - Page title
 * @param {string} [props.subtitle] - Page subtitle
 * @param {React.ReactNode} [props.logo] - Logo component
 * @param {React.ReactNode} [props.icon] - Icon component
 * @param {React.ReactNode} [props.actions] - Action buttons (replaces errorActions/maintenanceActions)
 * @param {React.ReactNode} [props.footer] - Footer content
 * @param {string} [props.className] - Additional CSS classes
 * @param {Object} [props.containerProps] - Container props for customization
 * @param {React.ReactNode} props.children - Main content
 * @returns {JSX.Element} BlankTemplate component
 */
function BlankTemplate({
  variant = 'default',
  title,
  subtitle,
  logo,
  icon,
  actions,
  footer,
  className,
  containerProps,
  children,
}) {
  // Get variant-specific styles and behavior
  const getVariantConfig = () => {
    switch (variant) {
      case 'card':
        return {
          containerClasses: 'w-full max-w-2xl space-y-8 p-8 sm:p-12 bg-card border border-border rounded-xl shadow-lg text-center',
          iconClasses: '',
        };
      case 'error':
        return {
          containerClasses: 'w-full max-w-2xl space-y-8 text-center',
          iconClasses: 'text-muted-foreground',
        };
      case 'maintenance':
        return {
          containerClasses: 'w-full max-w-2xl space-y-8 text-center',
          iconClasses: 'text-primary animate-pulse',
        };
      case 'suspension':
        return {
          containerClasses: 'w-full max-w-2xl space-y-8 text-center',
          iconClasses: 'text-destructive',
        };
      default:
        return {
          containerClasses: 'w-full max-w-2xl space-y-8 text-center',
          iconClasses: '',
        };
    }
  };

  const config = getVariantConfig();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div
        {...containerProps}
        className={cn(
          config.containerClasses,
          containerProps?.className
        )}
      >
        {logo && (
          <div className="flex justify-center">
            {logo}
          </div>
        )}

        {icon && (
          <div className={cn('flex justify-center', config.iconClasses)}>
            {icon}
          </div>
        )}

        {(title || subtitle) && (
          <div className="space-y-4">
            {title && (
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                {title}
              </h1>
            )}
            {subtitle && (
              <p className={cn(
                'text-lg text-muted-foreground',
                variant === 'default' && 'max-w-md mx-auto'
              )}>
                {subtitle}
              </p>
            )}
          </div>
        )}

        {children && (
          <div className={cn('space-y-6', className)}>
            {children}
          </div>
        )}

        {actions && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {actions}
          </div>
        )}

        {footer && (
          <div className={cn(
            'text-center',
            (variant === 'error' || variant === 'maintenance' || variant === 'suspension') && 'text-sm text-muted-foreground'
          )}>
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}

/**
 * Export BlankTemplate as default and named export
 */
export { BlankTemplate as default, BlankTemplate };