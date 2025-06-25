/**
 * Footer component with consistent prop naming and navigation support
 * @module @voilajsx/uikit
 * @file src/components/sections/footer.tsx
 */
import * as React from 'react';
import type { Size, NavigationItem } from '@/types';
/**
 * Footer component props
 */
export interface FooterProps extends React.HTMLAttributes<HTMLElement> {
    /** Footer style variant */
    variant?: 'default' | 'muted' | 'primary' | 'black';
    /** Footer size (width + padding + spacing) */
    size?: Size;
    /** Whether footer should be sticky */
    sticky?: boolean;
    /** Navigation items */
    navigation?: NavigationItem[];
    /** Current path for active states */
    currentPath?: string;
    /** Navigation handler */
    onNavigate?: (path: string, item: NavigationItem) => void;
    /** Footer content */
    children: React.ReactNode;
}
/**
 * Footer link interface (legacy support)
 */
export interface FooterLink {
    /** Unique key */
    key: string;
    /** Display text */
    label: string;
    /** Click handler */
    onClick: () => void;
    /** Additional CSS classes */
    className?: string;
}
/**
 * Basic Footer props
 */
export interface FooterBasicProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Navigation items (standardized) */
    navigation?: NavigationItem[];
    /** Current path for active states */
    currentPath?: string;
    /** Navigation handler */
    onNavigate?: (path: string, item: NavigationItem) => void;
    /** Footer logo/brand */
    logo?: React.ReactNode;
    /** Navigation links (legacy - use navigation instead) */
    links?: FooterLink[];
    /** Social media links */
    social?: React.ReactNode;
    /** Copyright text */
    copyright?: React.ReactNode;
}
/**
 * Basic Footer - Simple row layout with navigation
 */
declare const FooterBasic: React.ForwardRefExoticComponent<FooterBasicProps & React.RefAttributes<HTMLDivElement>>;
/**
 * Footer column interface
 */
export interface FooterColumn {
    /** Unique key */
    key: string;
    /** Column title */
    title: string;
    /** Column links */
    links: FooterLink[];
}
/**
 * Advanced Footer props
 */
export interface FooterAdvancedProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Brand section (logo + description) */
    brand?: React.ReactNode;
    /** Footer columns with links (up to 5) */
    columns?: FooterColumn[];
    /** Newsletter signup */
    newsletter?: React.ReactNode;
    /** Social media links */
    social?: React.ReactNode;
    /** Legal links (privacy, terms, etc.) */
    legal?: React.ReactNode;
    /** Copyright text */
    copyright?: React.ReactNode;
}
/**
 * Advanced Footer - Multi-column layout with organized sections
 */
declare const FooterAdvanced: React.ForwardRefExoticComponent<FooterAdvancedProps & React.RefAttributes<HTMLDivElement>>;
/**
 * Social link interface
 */
export interface SocialLink {
    /** Unique key */
    key: string;
    /** Accessibility label */
    label: string;
    /** Icon component */
    icon: React.ComponentType<{
        className?: string;
    }>;
    /** Click handler */
    onClick: () => void;
    /** Additional CSS classes */
    className?: string;
}
/**
 * Footer Social props
 */
export interface FooterSocialProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Social media links */
    links?: SocialLink[];
}
/**
 * Footer Social component
 */
declare const FooterSocial: React.ForwardRefExoticComponent<FooterSocialProps & React.RefAttributes<HTMLDivElement>>;
/**
 * Footer with compound components
 */
declare const Footer: React.ForwardRefExoticComponent<FooterProps & React.RefAttributes<HTMLElement>> & {
    Basic: React.ForwardRefExoticComponent<FooterBasicProps & React.RefAttributes<HTMLDivElement>>;
    Advanced: React.ForwardRefExoticComponent<FooterAdvancedProps & React.RefAttributes<HTMLDivElement>>;
    Social: React.ForwardRefExoticComponent<FooterSocialProps & React.RefAttributes<HTMLDivElement>>;
};
/**
 * Export Footer with compound components and individual components
 */
export { Footer, FooterBasic, FooterAdvanced, FooterSocial };
//# sourceMappingURL=footer.d.ts.map