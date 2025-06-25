/**
 * Container component with consistent prop naming and navigation support
 * @module @voilajsx/uikit
 * @file src/components/sections/container.tsx
 */
import * as React from 'react';
import type { NavigationItem, Size } from '@/types';
/**
 * Container Sidebar props
 */
interface ContainerSidebarProps {
    content?: React.ReactNode | NavigationItem[];
    position?: 'left' | 'right';
    size?: Size;
    sticky?: boolean;
    currentPath?: string;
    onNavigate?: (path: string, item: NavigationItem) => void;
    className?: string;
    style?: React.CSSProperties;
}
/**
 * Container Sidebar component
 */
declare const ContainerSidebar: React.ForwardRefExoticComponent<ContainerSidebarProps & React.RefAttributes<HTMLDivElement>>;
/**
 * Container Main props
 */
interface ContainerMainProps {
    size?: Size;
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}
/**
 * Container Main content area
 */
declare const ContainerMain: React.ForwardRefExoticComponent<ContainerMainProps & React.RefAttributes<HTMLDivElement>>;
/**
 * Container component props
 */
export interface ContainerProps {
    /** Container style variant */
    variant?: 'default' | 'muted' | 'primary' | 'black';
    /** Sidebar position */
    sidebar?: 'none' | 'left' | 'right';
    /** Navigation items (takes priority over sidebarContent) */
    navigation?: NavigationItem[];
    /** Custom sidebar content (for JSX content) */
    sidebarContent?: React.ReactNode;
    /** Current path for active states */
    currentPath?: string;
    /** Navigation handler */
    onNavigate?: (path: string, item: NavigationItem) => void;
    /** Whether sidebar should be sticky */
    sticky?: boolean;
    /** Container size */
    size?: Size;
    /** Container content */
    children: React.ReactNode;
    /** Additional CSS classes */
    className?: string;
    /** Inline styles */
    style?: React.CSSProperties;
}
/**
 * Container with compound components
 */
declare const Container: React.ForwardRefExoticComponent<ContainerProps & React.RefAttributes<HTMLDivElement>> & {
    Sidebar: React.ForwardRefExoticComponent<ContainerSidebarProps & React.RefAttributes<HTMLDivElement>>;
    Main: React.ForwardRefExoticComponent<ContainerMainProps & React.RefAttributes<HTMLDivElement>>;
};
/**
 * Export Container with compound components and individual components
 */
export { Container, ContainerSidebar, ContainerMain };
//# sourceMappingURL=container.d.ts.map