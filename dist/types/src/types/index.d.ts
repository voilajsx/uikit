/**
 * Global type definitions for @voilajsx/uikit
 * @module @voilajsx/uikit
 * @file src/types/index.ts
 */
import type { ComponentType, ReactNode, ReactElement, HTMLAttributes, ForwardRefExoticComponent, RefAttributes } from 'react';
/**
 * Standardized size variants used across all components
 */
export type Size = 'sm' | 'md' | 'lg' | 'xl' | 'full';
/**
 * Theme identifiers for the UIKit theme system
 */
export type Theme = 'default' | 'aurora' | 'metro' | 'neon' | 'ruby' | 'studio';
/**
 * Theme variant (light/dark mode)
 */
export type ThemeVariant = 'light' | 'dark';
/**
 * Navigation item interface used across all navigation components
 * Supports nested navigation with collapsible items
 */
export interface NavigationItem {
    /** Unique identifier for the navigation item */
    key: string;
    /** Display text for the navigation item */
    label: string;
    /** Optional icon component (Lucide React icon) */
    icon?: ComponentType<{
        className?: string;
    }>;
    /** Optional URL path for navigation */
    path?: string;
    /** Whether this item is currently active */
    isActive?: boolean;
    /** Click handler function */
    onClick?: () => void;
    /** Optional badge text (e.g., "12", "New") */
    badge?: string;
    /** Optional section grouping (e.g., "main", "system") */
    section?: string;
    /** Additional CSS classes */
    className?: string;
    /** Nested navigation items for collapsible menus */
    items?: NavigationItem[];
}
/**
 * Base component props that most components should extend
 */
export interface BaseComponentProps {
    /** Additional CSS classes */
    className?: string;
    /** Child components or content */
    children?: ReactNode;
    /** Inline styles */
    style?: React.CSSProperties;
}
/**
 * Props for components that support navigation
 */
export interface NavigationProps {
    /** Array of navigation items */
    navigation?: NavigationItem[];
    /** Current path for determining active states */
    currentPath?: string;
    /** Navigation handler function */
    onNavigate?: (path: string, item: NavigationItem) => void;
}
/**
 * Props for components that support theming variants
 */
export interface VariantProps {
    /** Component style variant */
    variant?: 'default' | 'muted' | 'primary' | 'black';
}
/**
 * Props for components that support sizing
 */
export interface SizeProps {
    /** Component size */
    size?: Size;
}
/**
 * Props for components that support sticky positioning
 */
export interface StickyProps {
    /** Whether component should be sticky */
    sticky?: boolean;
}
/**
 * Common layout component props
 */
export interface LayoutProps extends BaseComponentProps, VariantProps, SizeProps, StickyProps, NavigationProps {
    /** Layout title */
    title?: string;
    /** Logo component */
    logo?: ReactNode;
    /** Header actions (buttons, theme toggle, etc.) */
    headerActions?: ReactNode;
}
/**
 * Theme configuration object
 */
export interface ThemeConfig {
    /** Theme identifier */
    id: Theme;
    /** Human-readable theme name */
    name: string;
    /** Theme description */
    description?: string;
    /** CSS variables for the theme */
    cssVars: {
        light: Record<string, string>;
        dark: Record<string, string>;
    };
}
/**
 * Theme provider context type
 */
export interface ThemeContextType {
    /** Current theme */
    theme: Theme;
    /** Current variant (light/dark) */
    variant: ThemeVariant;
    /** Set theme function */
    setTheme: (theme: Theme) => void;
    /** Set variant function */
    setVariant: (variant: ThemeVariant) => void;
    /** Toggle between light and dark variants */
    toggleVariant: () => void;
    /** Available themes */
    availableThemes: ThemeConfig[];
    /** Register a custom theme */
    registerTheme: (theme: ThemeConfig) => void;
}
/**
 * Theme provider props
 */
export interface ThemeProviderProps {
    /** Initial theme */
    theme?: Theme;
    /** Initial variant */
    variant?: ThemeVariant;
    /** Whether to detect system preference */
    detectSystem?: boolean;
    /** Custom themes to register */
    customThemes?: ThemeConfig[];
    /** Child components */
    children: ReactNode;
}
/**
 * Layout configuration for the layout wrapper
 */
export interface LayoutConfig {
    /** Theme configuration */
    theme: Theme;
    /** Theme variant */
    variant: ThemeVariant;
    /** Whether to detect system preference */
    detectSystem: boolean;
    /** Layout type */
    layout: string;
    /** Layout title */
    title: string;
    /** Logo URL or component */
    logo?: string;
    /** Navigation items */
    navigation: NavigationItem[];
    /** Admin layout specific configuration */
    adminLayout: {
        variant: 'default' | 'muted' | 'primary' | 'black';
        size: Size;
        collapsible: boolean;
        defaultSidebarOpen: boolean;
    };
    /** Page layout specific configuration */
    pageLayout: {
        variant: 'default' | 'muted' | 'primary' | 'black';
        size: Size;
    };
    /** Header specific configuration */
    header: {
        variant: 'default' | 'muted' | 'primary' | 'black';
        sticky: boolean;
        size: Size;
    };
    /** Footer specific configuration */
    footer: {
        variant: 'default' | 'muted' | 'primary' | 'black';
        size: Size;
    };
    /** Auth layout specific configuration */
    authLayout: {
        variant: 'simple' | 'card' | 'split-gradient' | 'split-image' | 'card-gradient' | 'card-image';
        imageUrl?: string;
        imageOverlay: 'light' | 'dark' | 'none';
    };
    /** Blank layout specific configuration */
    blankLayout: {
        variant: 'default' | 'card' | 'error' | 'maintenance' | 'suspension';
    };
    /** Additional custom properties */
    customProps: Record<string, any>;
}
/**
 * Platform detection types
 */
export type Platform = 'web' | 'native' | 'tauri' | 'unknown';
/**
 * Footer link interface (for legacy support)
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
 * Social link interface
 */
export interface SocialLink {
    /** Unique key */
    key: string;
    /** Accessibility label */
    label: string;
    /** Icon component */
    icon: ComponentType<{
        className?: string;
    }>;
    /** Click handler */
    onClick: () => void;
    /** Additional CSS classes */
    className?: string;
}
/**
 * Form field types for enhanced form components
 */
export type FormFieldType = 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'textarea' | 'select' | 'checkbox' | 'radio' | 'switch' | 'slider' | 'date' | 'time' | 'file';
/**
 * Data table column definition
 */
export interface DataTableColumn<T = any> {
    /** Unique key (property name in data) */
    key: string;
    /** Column header text */
    title: string;
    /** Whether column is sortable */
    sortable?: boolean;
    /** Custom cell renderer */
    render?: (value: any, row: T, index: number) => ReactNode;
    /** Column width */
    width?: string | number;
    /** Column alignment */
    align?: 'left' | 'center' | 'right';
    /** Whether column is hidden */
    hidden?: boolean;
}
/**
 * Data table props
 */
export interface DataTableProps<T = any> {
    /** Table columns */
    columns: DataTableColumn<T>[];
    /** Table data */
    data: T[];
    /** Whether table is searchable */
    searchable?: boolean;
    /** Whether table is sortable */
    sortable?: boolean;
    /** Custom search placeholder */
    searchPlaceholder?: string;
    /** Loading state */
    loading?: boolean;
    /** Empty state message */
    emptyMessage?: string;
    /** Additional CSS classes */
    className?: string;
}
/**
 * Color mode preference
 */
export type ColorMode = 'light' | 'dark' | 'system';
/**
 * Responsive breakpoint values
 */
export interface Breakpoints {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
}
/**
 * Animation duration presets
 */
export type AnimationDuration = 'fast' | 'normal' | 'slow';
/**
 * Component state variants
 */
export type ComponentState = 'default' | 'loading' | 'error' | 'success' | 'warning';
/**
 * Re-export commonly used React types for convenience
 */
export type { ComponentType, ReactNode, ReactElement, HTMLAttributes, ForwardRefExoticComponent, RefAttributes, };
//# sourceMappingURL=index.d.ts.map