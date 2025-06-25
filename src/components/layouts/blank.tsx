/**
 * Blank Layout with standardized scheme + tone system
 * @module @voilajsx/uikit
 * @file src/components/layouts/blank.tsx
 */

import * as React from 'react';
import { forwardRef } from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import type { Size, BlankLayoutScheme, Tone } from '@/types';

/**
 * Blank layout scheme variants - structural arrangements
 */
const blankVariants = cva(
  'min-h-screen flex items-center justify-center p-4',
  {
    variants: {
      scheme: {
        default: '',
        centered: 'flex-col',
        error: 'flex-col',
        maintenance: 'flex-col'
      },
      tone: {
        clean: 'bg-background',
        subtle: 'bg-muted/20',
        brand: 'bg-primary/5',
        contrast: 'bg-zinc-900'
      }
    },
    defaultVariants: {
      scheme: 'default',
      tone: 'clean'
    }
  }
);

/**
 * Content container variants based on scheme and size
 */
const contentVariants = cva(
  'w-full space-y-8 text-center',
  {
    variants: {
      size: {
        sm: 'max-w-md',
        md: 'max-w-2xl',
        lg: 'max-w-4xl',
        xl: 'max-w-5xl',
        full: 'max-w-6xl'
      },
      scheme: {
        default: '',
        centered: '',
        error: 'max-w-2xl',
        maintenance: 'max-w-3xl'
      }
    },
    defaultVariants: {
      size: 'lg',
      scheme: 'default'
    }
  }
);

/**
 * Icon variant styles based on scheme
 */
const iconVariants = cva(
  'flex justify-center',
  {
    variants: {
      scheme: {
        default: '',
        centered: '',
        error: 'text-destructive',
        maintenance: 'text-primary animate-pulse'
      }
    },
    defaultVariants: {
      scheme: 'default'
    }
  }
);

/**
 * Title variant styles based on size
 */
const titleVariants = cva(
  'font-bold tracking-tight',
  {
    variants: {
      size: {
        sm: 'text-2xl sm:text-3xl',
        md: 'text-3xl sm:text-4xl',
        lg: 'text-4xl sm:text-5xl',
        xl: 'text-5xl sm:text-6xl',
        full: 'text-6xl sm:text-7xl'
      },
      tone: {
        clean: 'text-foreground',
        subtle: 'text-foreground',
        brand: 'text-foreground',
        contrast: 'text-zinc-100'
      }
    },
    defaultVariants: {
      size: 'lg',
      tone: 'clean'
    }
  }
);

/**
 * Subtitle variant styles
 */
const subtitleVariants = cva(
  '',
  {
    variants: {
      size: {
        sm: 'text-base',
        md: 'text-lg',
        lg: 'text-xl',
        xl: 'text-2xl',
        full: 'text-3xl'
      },
      tone: {
        clean: 'text-muted-foreground max-w-md mx-auto',
        subtle: 'text-muted-foreground',
        brand: 'text-muted-foreground',
        contrast: 'text-zinc-300'
      }
    },
    defaultVariants: {
      size: 'lg',
      tone: 'clean'
    }
  }
);

/**
 * Footer variant styles based on scheme
 */
const footerVariants = cva(
  'text-center',
  {
    variants: {
      scheme: {
        default: '',
        centered: '',
        error: 'text-sm',
        maintenance: 'text-sm'
      },
      tone: {
        clean: 'text-muted-foreground',
        subtle: 'text-muted-foreground',
        brand: 'text-muted-foreground', 
        contrast: 'text-zinc-400'
      }
    },
    defaultVariants: {
      scheme: 'default',
      tone: 'clean'
    }
  }
);

/**
 * Blank Layout props with standardized system
 */
export interface BlankLayoutProps {
  /** Layout structure/arrangement */
  scheme?: BlankLayoutScheme;
  /** Visual styling tone */
  tone?: Tone;
  /** Content container size */
  size?: Size;
  /** Page title */
  title?: string;
  /** Page subtitle */
  subtitle?: string;
  /** Logo component */
  logo?: React.ReactNode;
  /** Icon component (e.g., error icon) */
  icon?: React.ReactNode;
  /** Action buttons */
  actions?: React.ReactNode;
  /** Footer content */
  footer?: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Container props for customization */
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
  /** Main content */
  children?: React.ReactNode;
}

/**
 * BlankLayout - Unified blank page layout with standardized scheme + tone system
 */
const BlankLayoutComponent = forwardRef<HTMLDivElement, BlankLayoutProps>(({
  scheme = 'default',
  tone = 'clean',
  size = 'lg',
  title,
  subtitle,
  logo,
  icon,
  actions,
  footer,
  className,
  containerProps,
  children,
}, ref) => {

  return (
    <div ref={ref} className={cn(blankVariants({ scheme, tone }), className)}>
      <div
        {...containerProps}
        className={cn(
          contentVariants({ size, scheme }),
          containerProps?.className
        )}
      >
        {/* Logo Section */}
        {logo && (
          <div className="flex justify-center">
            {logo}
          </div>
        )}

        {/* Icon Section */}
        {icon && (
          <div className={cn(iconVariants({ scheme }))}>
            {icon}
          </div>
        )}

        {/* Title and Subtitle */}
        {(title || subtitle) && (
          <div className="space-y-4">
            {title && (
              <h1 className={cn(titleVariants({ size, tone }))}>
                {title}
              </h1>
            )}
            {subtitle && (
              <p className={cn(subtitleVariants({ size, tone }))}>
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* Main Content */}
        {children && (
          <div className="space-y-6">
            {children}
          </div>
        )}

        {/* Action Buttons */}
        {actions && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {actions}
          </div>
        )}

        {/* Footer */}
        {footer && (
          <div className={cn(footerVariants({ scheme, tone }))}>
            {footer}
          </div>
        )}
      </div>
    </div>
  );
});

BlankLayoutComponent.displayName = 'BlankLayout';

/**
 * BlankLayout with standardized props
 */
const BlankLayout = BlankLayoutComponent;

export { BlankLayout };