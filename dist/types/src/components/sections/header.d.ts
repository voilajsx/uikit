/**
 * Header component with responsive navigation and standardized props
 * @module @voilajsx/uikit
 * @file src/components/sections/header.tsx
 */
import * as React from 'react';
import { type VariantProps } from 'class-variance-authority';
import type { NavigationItem, Size } from '@/types';
/**
 * Header variants with semantic colors
 */
declare const headerVariants: (props?: ({
    variant?: "default" | "muted" | "primary" | "black" | null | undefined;
    sticky?: boolean | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
/**
 * Container variants for responsive sizing
 */
declare const containerVariants: (props?: ({
    size?: "sm" | "md" | "lg" | "xl" | "full" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
/**
 * Header component props
 */
export interface HeaderProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof headerVariants> {
    /** Header style variant */
    variant?: 'default' | 'muted' | 'primary' | 'black';
    /** Header size (width + height + padding) */
    size?: Size;
    /** Whether header should be sticky */
    sticky?: boolean;
    /** Header content */
    children: React.ReactNode;
}
/**
 * Header Logo section props
 */
export interface HeaderLogoProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Logo content */
    children: React.ReactNode;
}
/**
 * Header Logo section (always on the left)
 */
declare const HeaderLogo: React.ForwardRefExoticComponent<HeaderLogoProps & React.RefAttributes<HTMLDivElement>>;
/**
 * Header Navigation props
 */
export interface HeaderNavProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Navigation items */
    navigation?: NavigationItem[];
    /** Current path for active states */
    currentPath?: string;
    /** Navigation handler */
    onNavigate?: (path: string, item: NavigationItem) => void;
}
/**
 * Smart Header Navigation with responsive mobile menu
 */
declare const HeaderNav: React.ForwardRefExoticComponent<HeaderNavProps & React.RefAttributes<HTMLDivElement>>;
/**
 * Header with compound components
 */
declare const Header: React.ForwardRefExoticComponent<HeaderProps & React.RefAttributes<HTMLElement>> & {
    Logo: React.ForwardRefExoticComponent<HeaderLogoProps & React.RefAttributes<HTMLDivElement>>;
    Nav: React.ForwardRefExoticComponent<HeaderNavProps & React.RefAttributes<HTMLDivElement>>;
};
/**
 * Export Header with compound components and individual components
 */
export { Header, HeaderLogo, HeaderNav, headerVariants, containerVariants };
//# sourceMappingURL=header.d.ts.map