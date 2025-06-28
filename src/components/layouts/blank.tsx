/**
 * Blank Layout with simplified scheme system - simple and card only
 * @module @voilajsx/uikit
 * @file src/components/layouts/blank.tsx
 */

import * as React from 'react';
import { forwardRef } from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import type { Size, BlankLayoutScheme, Tone } from '@/types';

/**
 * Blank layout scheme variants - simplified to 2 meaningful schemes
 */
const blankVariants = cva(
  'min-h-screen flex items-center justify-center p-4',
  {
    variants: {
      scheme: {
        simple: 'flex-col',     // Simple centered layout
        card: 'flex-col'        // Card-based layout
      },
      tone: {
        clean: 'bg-background',
        subtle: 'bg-muted/20',
        brand: 'bg-primary/5',
        contrast: 'bg-zinc-400'
      }
    },
    defaultVariants: {
      scheme: 'simple',
      tone: 'clean'
    }
  }
);

/**
 * Content container variants based on scheme and size
 */
const contentVariants = cva(
  'w-full space-y-6 text-center',
  {
    variants: {
      scheme: {
        simple: '',                    // No container styling
        card: 'bg-card border border-border rounded-lg shadow-lg p-8'  // Card styling
      },
      size: {
        sm: 'max-w-md',
        md: 'max-w-lg',
        lg: 'max-w-2xl',
        xl: 'max-w-4xl',
        full: 'max-w-6xl'
      }
    },
    defaultVariants: {
      scheme: 'simple',
      size: 'lg'
    }
  }
);

/**
 * Title variant styles based on size and tone
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
 * Subtitle variant styles based on size and tone
 */
const subtitleVariants = cva(
  'max-w-md mx-auto',
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
        clean: 'text-muted-foreground',
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
 * Footer variant styles based on tone
 */
const footerVariants = cva(
  'text-center mt-8',
  {
    variants: {
      tone: {
        clean: 'text-muted-foreground',
        subtle: 'text-muted-foreground',
        brand: 'text-muted-foreground', 
        contrast: 'text-zinc-400'
      }
    },
    defaultVariants: {
      tone: 'clean'
    }
  }
);

/**
 * Blank Layout props - minimal but essential
 */
export interface BlankLayoutProps {
  /** RECOMMENDED: Layout scheme - simple or card */
  scheme?: BlankLayoutScheme;
  /** RECOMMENDED: Visual styling tone */
  tone?: Tone;
  /** OPTIONAL: Content container size */
  size?: Size;
  /** OPTIONAL: Additional CSS classes */
  className?: string;
  /** REQUIRED: All content goes here */
  children: React.ReactNode;
}

/**
 * BlankLayout - Minimal but essential layout
 */
const BlankLayoutComponent = forwardRef<HTMLDivElement, BlankLayoutProps>(({
  scheme = 'simple',
  tone = 'clean',
  size = 'lg',
  className,
  children,
}, ref) => {

  return (
    <div ref={ref} className={cn(blankVariants({ scheme, tone }), className)}>
      <div className={cn(contentVariants({ scheme, size }))}>
        {children}
      </div>
    </div>
  );
});

BlankLayoutComponent.displayName = 'BlankLayout';

/**
 * BlankLayout - Minimal and essential
 */
const BlankLayout = BlankLayoutComponent;

export { BlankLayout };

/**
 * @llm-rule BlankLayout Usage - Minimal but essential
 * 
 * Simple error page:
 * <BlankLayout scheme="simple" tone="clean">
 *   <h1 className="text-4xl font-bold text-foreground mb-4">404 Not Found</h1>
 *   <p className="text-muted-foreground mb-6">The page you're looking for doesn't exist.</p>
 *   <Button>Go Home</Button>
 * </BlankLayout>
 * 
 * Card-based maintenance page:
 * <BlankLayout scheme="card" tone="subtle" size="md">
 *   <WrenchIcon className="h-16 w-16 mx-auto mb-4 text-primary" />
 *   <h1 className="text-3xl font-bold mb-2">Under Maintenance</h1>
 *   <p className="text-muted-foreground mb-6">We'll be back soon!</p>
 *   <Button>Notify Me</Button>
 * </BlankLayout>
 * 
 * About page:
 * <BlankLayout scheme="simple" size="xl">
 *   <Logo className="mb-6" />
 *   <h1 className="text-5xl font-bold mb-4">About Us</h1>
 *   <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
 *     Company description and mission statement goes here.
 *   </p>
 * </BlankLayout>
 */