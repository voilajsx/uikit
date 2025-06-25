/**
 * Blank Layout with consistent prop naming and standardized size variants
 * @module @voilajsx/uikit
 * @file src/components/layouts/blank.tsx
 */
import * as React from 'react';
import type { Size } from '@/types';
/**
 * Blank Layout props
 */
export interface BlankLayoutProps {
    /** Blank layout variant */
    variant?: 'default' | 'card' | 'error' | 'maintenance' | 'suspension';
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
 * BlankLayout with standardized props
 */
declare const BlankLayout: React.ForwardRefExoticComponent<BlankLayoutProps & React.RefAttributes<HTMLDivElement>>;
export { BlankLayout };
//# sourceMappingURL=blank.d.ts.map