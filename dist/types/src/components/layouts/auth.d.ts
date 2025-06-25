/**
 * Auth Layout with consistent prop naming and standardized size variants
 * @module @voilajsx/uikit
 * @file src/components/layouts/auth.tsx
 */
import * as React from 'react';
import type { Size } from '@/types';
/**
 * Auth Layout props
 */
export interface AuthLayoutProps {
    /** Auth layout variant */
    variant?: 'simple' | 'card' | 'split-gradient' | 'split-image' | 'card-gradient' | 'card-image';
    /** Content container size */
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
    /** Left side content for split variants */
    splitContent?: React.ReactNode;
    /** Background image URL for image variants */
    imageUrl?: string;
    /** Image alt text */
    imageAlt?: string;
    /** Image overlay */
    imageOverlay?: 'light' | 'dark' | 'none';
    /** Additional card content for card variants */
    cardContent?: React.ReactNode;
    /** Form content */
    children: React.ReactNode;
}
/**
 * AuthLayout with standardized props
 */
declare const AuthLayout: React.ForwardRefExoticComponent<AuthLayoutProps & React.RefAttributes<HTMLDivElement>>;
export { AuthLayout };
//# sourceMappingURL=auth.d.ts.map