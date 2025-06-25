/**
 * Page Layout with consistent prop naming and navigation support
 * @module @voilajsx/uikit
 * @file src/components/layouts/page.tsx
 */
import * as React from 'react';
import type { NavigationItem, Size } from '@/types';
/**
 * Page Layout props
 */
export interface PageLayoutProps {
    /** Page style variant */
    variant?: 'default' | 'muted' | 'primary' | 'black';
    /** Page size (width and spacing) */
    size?: Size;
    /** Whether header should be sticky */
    sticky?: boolean;
    /** Navigation items for header */
    navigation?: NavigationItem[];
    /** Current path for active states */
    currentPath?: string;
    /** Navigation handler */
    onNavigate?: (path: string, item: NavigationItem) => void;
    /** Page title */
    title?: string;
    /** Logo component */
    logo?: React.ReactNode;
    /** Header actions (buttons, theme toggle, etc.) */
    headerActions?: React.ReactNode;
    /** Footer navigation items */
    footerNavigation?: NavigationItem[];
    /** Footer content (if not using footerNavigation) */
    footerContent?: React.ReactNode;
    /** Copyright text for footer */
    copyright?: React.ReactNode;
    /** Additional CSS classes */
    className?: string;
    /** Page content */
    children: React.ReactNode;
}
/**
 * Page Header props
 */
export interface PageHeaderProps {
    /** Header style variant */
    variant?: 'default' | 'muted' | 'primary' | 'black';
    /** Header size (inherits from PageLayout if not specified) */
    size?: Size;
    /** Whether header should be sticky */
    sticky?: boolean;
    /** Navigation items */
    navigation?: NavigationItem[];
    /** Current path for active states */
    currentPath?: string;
    /** Navigation handler */
    onNavigate?: (path: string, item: NavigationItem) => void;
    /** Additional CSS classes */
    className?: string;
    /** Header content */
    children: React.ReactNode;
}
/**
 * Page Header component
 */
declare const PageHeader: React.ForwardRefExoticComponent<PageHeaderProps & React.RefAttributes<HTMLElement>>;
/**
 * Page Content props
 */
export interface PageContentProps {
    /** Content size (inherits from PageLayout if not specified) */
    size?: Size;
    /** Additional CSS classes */
    className?: string;
    /** Content */
    children: React.ReactNode;
}
/**
 * Page Content component - Main content area
 */
declare const PageContent: React.ForwardRefExoticComponent<PageContentProps & React.RefAttributes<HTMLElement>>;
/**
 * Page Footer props
 */
export interface PageFooterProps {
    /** Footer style variant */
    variant?: 'default' | 'muted' | 'primary' | 'black';
    /** Footer size (inherits from PageLayout if not specified) */
    size?: Size;
    /** Footer navigation items */
    navigation?: NavigationItem[];
    /** Current path for active states */
    currentPath?: string;
    /** Navigation handler */
    onNavigate?: (path: string, item: NavigationItem) => void;
    /** Additional CSS classes */
    className?: string;
    /** Footer content */
    children: React.ReactNode;
}
/**
 * Page Footer component
 */
declare const PageFooter: React.ForwardRefExoticComponent<PageFooterProps & React.RefAttributes<HTMLElement>>;
/**
 * Hook to access page configuration
 */
declare const usePage: () => {
    variant: "default" | "muted" | "primary" | "black";
    size: Size;
};
/**
 * PageLayout with compound components
 */
declare const PageLayout: React.ForwardRefExoticComponent<PageLayoutProps & React.RefAttributes<HTMLDivElement>> & {
    Header: React.ForwardRefExoticComponent<PageHeaderProps & React.RefAttributes<HTMLElement>>;
    Content: React.ForwardRefExoticComponent<PageContentProps & React.RefAttributes<HTMLElement>>;
    Footer: React.ForwardRefExoticComponent<PageFooterProps & React.RefAttributes<HTMLElement>>;
    Logo: React.ForwardRefExoticComponent<import("@/components/sections/header").HeaderLogoProps & React.RefAttributes<HTMLDivElement>>;
    Nav: React.ForwardRefExoticComponent<import("@/components/sections/header").HeaderNavProps & React.RefAttributes<HTMLDivElement>>;
};
/**
 * Export PageLayout with compound components and individual components
 */
export { PageLayout, PageHeader, PageContent, PageFooter, usePage };
//# sourceMappingURL=page.d.ts.map