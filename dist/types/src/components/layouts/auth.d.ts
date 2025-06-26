/**
 * Auth Layout with standardized prop naming and scheme system - FIXED TYPES
 * @module @voilajsx/uikit
 * @file src/components/layouts/auth.tsx
 */
import * as React from 'react';
import type { Size, AuthLayoutScheme, Tone } from '@/types';
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
    /** Left side content for split scheme */
    splitContent?: React.ReactNode;
    /** Background image URL for hero scheme */
    imageUrl?: string;
    /** Image alt text */
    imageAlt?: string;
    /** Image overlay */
    imageOverlay?: 'light' | 'dark' | 'none';
    /** Additional card content for card scheme */
    cardContent?: React.ReactNode;
    /** Form content */
    children: React.ReactNode;
}
/**
 * AuthLayout with standardized props - FULLY CONSISTENT
 */
declare const AuthLayout: React.ForwardRefExoticComponent<AuthLayoutProps & React.RefAttributes<HTMLDivElement>>;
export { AuthLayout };
//# sourceMappingURL=auth.d.ts.map