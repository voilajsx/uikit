/**
 * Admin Layout with standardized scheme + tone system - FIXED PROPS ALIGNMENT
 * @module @voilajsx/uikit
 * @file src/components/layouts/admin.tsx
 */
import * as React from 'react';
import type { NavigationItem, Size, AdminLayoutScheme, Tone } from '@/types';
/**
 * Admin Layout props with standardized system - ALIGNED WITH TYPES
 */
export interface AdminLayoutProps {
    /** Layout structure/arrangement */
    scheme?: AdminLayoutScheme;
    /** Visual styling tone */
    tone?: Tone;
    /** Layout size */
    size?: Size;
    /** Navigation items - USES STANDARD NavigationItem INTERFACE */
    navigation?: NavigationItem[];
    /** Current path for active states */
    currentPath?: string;
    /** Navigation handler - FIXED PARAMETER NAME */
    onNavigate?: (href: string, item: NavigationItem) => void;
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
 * AdminLayout with standardized props - FULLY ALIGNED
 */
declare const AdminLayout: React.ForwardRefExoticComponent<AdminLayoutProps & React.RefAttributes<HTMLDivElement>>;
export { AdminLayout };
//# sourceMappingURL=admin.d.ts.map