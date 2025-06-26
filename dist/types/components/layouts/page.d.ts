/**
 * Page Layout with standardized scheme + tone system
 * @module @voilajsx/uikit
 * @file src/components/layouts/page.tsx
 */
import * as React from 'react';
import type { NavigationItem, Size, PageLayoutScheme, Tone } from '@/types';
/**
 * Page Layout props with standardized system
 */
export interface PageLayoutProps {
    /** Layout structure/arrangement */
    scheme?: PageLayoutScheme;
    /** Visual styling tone */
    tone?: Tone;
    /** Page size (width and spacing) */
    size?: Size;
    /** Header positioning */
    position?: 'sticky' | 'fixed' | 'relative';
    /** Navigation items for header */
    navigation?: NavigationItem[];
    /** Current path for active states */
    currentPath?: string;
    /** Navigation handler */
    onNavigate?: (href: string, item: NavigationItem) => void;
    /** Page title */
    title?: string;
    /** Logo component */
    logo?: React.ReactNode;
    /** Header actions (buttons, theme toggle, etc.) */
    headerActions?: React.ReactNode;
    /** Sidebar content for blog/docs schemes */
    sidebarContent?: React.ReactNode;
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
 * Page Header props with standardized system
 */
export interface PageHeaderProps {
    /** Header tone (inherits from PageLayout if not specified) */
    tone?: Tone;
    /** Header size (inherits from PageLayout if not specified) */
    size?: Size;
    /** Header positioning */
    position?: 'sticky' | 'fixed' | 'relative';
    /** Navigation items */
    navigation?: NavigationItem[];
    /** Current path for active states */
    currentPath?: string;
    /** Navigation handler */
    onNavigate?: (href: string, item: NavigationItem) => void;
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
    /** Content scheme (inherits from PageLayout if not specified) */
    scheme?: PageLayoutScheme;
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
 * Page Footer props with standardized system
 */
export interface PageFooterProps {
    /** Footer tone (inherits from PageLayout if not specified) */
    tone?: Tone;
    /** Footer size (inherits from PageLayout if not specified) */
    size?: Size;
    /** Footer navigation items */
    navigation?: NavigationItem[];
    /** Current path for active states */
    currentPath?: string;
    /** Navigation handler */
    onNavigate?: (href: string, item: NavigationItem) => void;
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
    scheme: PageLayoutScheme;
    tone: Tone;
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