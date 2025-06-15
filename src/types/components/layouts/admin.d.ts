/**
 * @fileoverview TypeScript types for AdminLayout with unified navigation
 * @package @voilajsx/uikit
 * @file /src/components/layouts/admin.d.ts
 */

import { ComponentType, ReactNode } from 'react';

/**
 * Navigation Item interface with unified props
 */
export interface NavigationItem {
  /** Unique identifier for the navigation item */
  key: string;
  /** Display text for the navigation item */
  label: string;
  /** Optional Lucide icon component */
  icon?: ComponentType<{ className?: string }>;
  /** Optional URL path for navigation */
  path?: string;
  /** Optional badge text (e.g., "12", "New") */
  badge?: string;
  /** Whether this item is currently active */
  isActive?: boolean;
  /** Section group for organizing navigation ('main', 'system', etc.) */
  section?: string;
  /** Click handler function */
  onClick?: () => void;
  /** Nested navigation items */
  items?: Array<{
    /** Unique identifier for the sub-item */
    key: string;
    /** Display text for the sub-item */
    label: string;
    /** Optional URL path */
    path?: string;
    /** Whether this sub-item is active */
    isActive?: boolean;
    /** Click handler function */
    onClick?: () => void;
  }>;
}

/**
 * AdminLayout component props
 */
export interface AdminLayoutProps {
  /** Additional CSS classes */
  className?: string;
  /** Sidebar color scheme */
  variant?: 'default' | 'primary' | 'black';
  /** Sidebar width */
  size?: 'compact' | 'default' | 'wide';
  /** Header title text */
  title?: string;
  /** Logo component */
  logo?: ReactNode;
  /** Top-right header buttons */
  headerActions?: ReactNode;
  /** Navigation items array */
  navigationItems?: NavigationItem[];
  /** Current URL for active states */
  currentPath?: string;
  /** Navigation handler function */
  onNavigate?: (path: string, item: NavigationItem) => void;
  /** Custom sidebar content (overrides navigationItems) */
  sidebarContent?: ReactNode;
  /** Bottom sidebar content */
  sidebarFooter?: ReactNode;
  /** Main content area */
  children: ReactNode;
  /** Whether header should be sticky */
  sticky?: boolean;
  /** Logo component function that receives variant */
  logoComponent?: (variant: string) => ReactNode;
  /** Header actions component function that receives variant */
  headerActionsComponent?: (variant: string) => ReactNode;
  /** Allow sidebar collapse */
  collapsible?: boolean;
  /** Initial sidebar state */
  defaultSidebarOpen?: boolean;
}

/**
 * AdminNavigation component props
 */
export interface AdminNavigationProps {
  /** Navigation items array */
  navigationItems?: NavigationItem[];
  /** Current URL path */
  currentPath?: string;
  /** Navigation handler */
  onNavigate?: (path: string, item: NavigationItem) => void;
  /** Additional CSS classes */
  className?: string;
  /** Sidebar size */
  size?: 'compact' | 'default' | 'wide';
  /** Sidebar variant */
  variant?: 'default' | 'primary' | 'black';
}

/**
 * Size configuration interface
 */
export interface SizeConfig {
  sidebarHeader: string;
  menuButton: string;
  submenuButton: string;
  icon: string;
  spacing: string;
  showBadges: boolean;
}

export declare const AdminLayout: React.ForwardRefExoticComponent<
  AdminLayoutProps & React.RefAttributes<HTMLDivElement>
>;