/**
 * Admin Layout with consistent prop naming and navigation support
 * @module @voilajsx/uikit
 * @file src/components/layouts/admin.tsx
 */
import * as React from 'react';
import type { NavigationItem, Size } from '@/types';
/**
 * Admin Layout props
 */
export interface AdminLayoutProps {
    /** Admin layout style variant */
    variant?: 'default' | 'muted' | 'primary' | 'black';
    /** Sidebar size */
    size?: Size;
    /** Whether header should be sticky */
    sticky?: boolean;
    /** Navigation items */
    navigation?: NavigationItem[];
    /** Current path for active states */
    currentPath?: string;
    /** Navigation handler */
    onNavigate?: (path: string, item: NavigationItem) => void;
    /** Dashboard title */
    title?: string;
    /** Logo component */
    logo?: React.ReactNode;
    /** Header actions (buttons, theme toggle, etc.) */
    headerActions?: React.ReactNode;
    /** Custom sidebar content (overrides navigation) */
    sidebarContent?: React.ReactNode;
    /** Sidebar footer content */
    sidebarFooter?: React.ReactNode;
    /** Whether sidebar is collapsible */
    collapsible?: boolean;
    /** Default sidebar open state */
    defaultSidebarOpen?: boolean;
    /** Additional CSS classes */
    className?: string;
    /** Main content */
    children: React.ReactNode;
}
/**
 * AdminLayout with compound components
 */
declare const AdminLayout: React.ForwardRefExoticComponent<AdminLayoutProps & React.RefAttributes<HTMLDivElement>>;
export { AdminLayout };
//# sourceMappingURL=admin.d.ts.map