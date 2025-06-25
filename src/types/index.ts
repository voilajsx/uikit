/**
 * LLM-optimized type definitions for @voilajsx/uikit
 * @module @voilajsx/uikit
 * @file src/types/index.ts
 */

import type {
  ComponentType,
  ReactNode,
  ReactElement,
  HTMLAttributes,
  ForwardRefExoticComponent,
  RefAttributes,
} from 'react';

/**
 * @llm-decision-tree Component Selection Rules
 * 
 * Dashboard/admin interface → AdminLayout
 * Public website → PageLayout
 * Chrome extension/popup → PopupLayout
 * Login/signup pages → AuthLayout
 * Error/simple pages → BlankLayout
 */

/**
 * Standardized size variants - CONSISTENT across ALL components
 * @llm-rule Use same sizes everywhere for predictability
 */
export type Size = 'sm' | 'md' | 'lg' | 'xl' | 'full';

/**
 * System color scheme preference
 * @llm-rule mode: System-level light/dark preference
 */
export type Mode = 'light' | 'dark';

/**
 * Semantic tone system for component emphasis
 * @llm-rule tone: Component-level visual emphasis
 * clean → Pure, minimal, white/light backgrounds
 * subtle → Muted, supporting, gray areas
 * brand → Primary colored, branded elements
 * contrast → High emphasis, dark/bold areas
 */
export type Tone = 'clean' | 'subtle' | 'brand' | 'contrast';

/**
 * @llm-defaults Context-aware tone defaults:
 * AdminLayout: "subtle" (professional gray)
 * PageLayout: "clean" (pure white)
 * AuthLayout: "clean" (focused minimal)
 * PopupLayout: "clean" (clean extension)
 * BlankLayout: "clean" (simple pages)
 * Header: "clean" (clean headers)
 * Footer: "contrast" (bold footers)
 */

/**
 * Layout scheme types - structural arrangements for each component
 */
export type AdminLayoutScheme = 'sidebar' | 'topbar' | 'hybrid';
export type PageLayoutScheme = 'default' | 'blog' | 'docs' | 'marketing';
export type AuthLayoutScheme = 'simple' | 'card' | 'split' | 'hero';
export type BlankLayoutScheme = 'default' | 'centered' | 'error' | 'maintenance';
export type PopupLayoutScheme = 'modal' | 'drawer' | 'floating';

/**
 * Standardized navigation interface - SINGLE structure for ALL components
 * @llm-rules Navigation Usage:
 * - href: Use for page navigation (links)
 * - onClick: Use for app functions (modals, actions)
 * - items: Use for submenus (max 2 levels deep)
 * - badge: Use for notifications/counts
 * - isActive: Use for current page highlighting
 */
export interface NavigationItem {
  /** REQUIRED: Unique identifier */
  key: string;
  /** REQUIRED: Display text */
  label: string;
  /** OPTIONAL: Page navigation - USE for routing */
  href?: string;
  /** OPTIONAL: App function - USE for actions/modals */
  onClick?: () => void;
  /** OPTIONAL: Icon component from lucide-react */
  icon?: ComponentType<{ className?: string }>;
  /** OPTIONAL: Nested items - USE for dropdowns (max 2 levels) */
  items?: NavigationItem[];
  /** OPTIONAL: Badge text for notifications */
  badge?: string;
  /** OPTIONAL: Current page indicator */
  isActive?: boolean;
  /** OPTIONAL: Additional CSS classes */
  className?: string;
}

/**
 * Base props that ALL components should extend
 * @llm-props Base pattern for all components
 */
export interface BaseComponentProps {
  /** OPTIONAL: Additional CSS classes */
  className?: string;
  /** OPTIONAL: Inline styles */
  style?: React.CSSProperties;
}

/**
 * Props for components that support navigation
 * @llm-props Navigation components
 */
export interface NavigationProps {
  /** RECOMMENDED: Navigation items using standard structure */
  navigation?: NavigationItem[];
  /** OPTIONAL: Current path for active state detection */
  currentPath?: string;
  /** OPTIONAL: Navigation handler function */
  onNavigate?: (href: string, item: NavigationItem) => void;
}

/**
 * Props for components that support tone theming
 * @llm-props Tone system
 */
export interface ToneProps {
  /** RECOMMENDED: Visual emphasis - clean/subtle/brand/contrast */
  tone?: Tone;
}

/**
 * Props for components that support sizing
 * @llm-props Size system  
 */
export interface SizeProps {
  /** OPTIONAL: Component size - sm/md/lg/xl/full */
  size?: Size;
}

/**
 * Standard layout component props - ALL layouts extend this
 * @llm-props Layout components base
 * REQUIRED: children
 * RECOMMENDED: tone
 * OPTIONAL: size, className, style
 */
export interface LayoutProps extends BaseComponentProps, ToneProps, SizeProps {
  /** REQUIRED: Layout content */
  children: ReactNode;
}

/**
 * Admin layout props
 * @llm-props AdminLayout
 * REQUIRED: children
 * RECOMMENDED: scheme="sidebar", tone="subtle", navigation
 * OPTIONAL: size, className
 * @llm-defaults scheme="sidebar", tone="subtle", size="lg"
 */
export interface AdminLayoutProps extends LayoutProps, NavigationProps {
  /** REQUIRED: Main content */
  children: ReactNode;
  /** RECOMMENDED: Layout structure (default: "sidebar") */
  scheme?: AdminLayoutScheme;
  /** RECOMMENDED: Layout tone (default: "subtle") */
  tone?: Tone;
  /** RECOMMENDED: Sidebar navigation items */
  navigation?: NavigationItem[];
  /** OPTIONAL: Layout size (default: "lg") */
  size?: Size;
  /** OPTIONAL: Page title */
  title?: string;
  /** OPTIONAL: Logo component */
  logo?: ReactNode;
  /** OPTIONAL: Header actions */
  headerActions?: ReactNode;
}

/**
 * Page layout props  
 * @llm-props PageLayout
 * REQUIRED: children
 * RECOMMENDED: scheme="default", tone="clean"
 * OPTIONAL: navigation, size, className
 * @llm-defaults scheme="default", tone="clean", size="xl"
 */
export interface PageLayoutProps extends LayoutProps, NavigationProps {
  /** REQUIRED: Main content */
  children: ReactNode;
  /** RECOMMENDED: Layout structure (default: "default") */
  scheme?: PageLayoutScheme;
  /** RECOMMENDED: Layout tone (default: "clean") */
  tone?: Tone;
  /** OPTIONAL: Header navigation items */
  navigation?: NavigationItem[];
  /** OPTIONAL: Layout size (default: "xl") */
  size?: Size;
  /** OPTIONAL: Page title */
  title?: string;
  /** OPTIONAL: Logo component */
  logo?: ReactNode;
  /** OPTIONAL: Header actions */
  headerActions?: ReactNode;
  /** OPTIONAL: Footer navigation */
  footerNavigation?: NavigationItem[];
  /** OPTIONAL: Copyright text */
  copyright?: ReactNode;
}

/**
 * Auth layout props
 * @llm-props AuthLayout  
 * REQUIRED: children
 * RECOMMENDED: scheme="card", tone="clean"
 * OPTIONAL: title, size, className
 * @llm-defaults scheme="card", tone="clean", size="md"
 */
export interface AuthLayoutProps extends LayoutProps {
  /** REQUIRED: Form content */
  children: ReactNode;
  /** RECOMMENDED: Layout structure (default: "card") */
  scheme?: AuthLayoutScheme;
  /** RECOMMENDED: Layout tone (default: "clean") */
  tone?: Tone;
  /** OPTIONAL: Layout size (default: "md") */
  size?: Size;
  /** OPTIONAL: Page title */
  title?: string;
  /** OPTIONAL: Page subtitle */
  subtitle?: string;
  /** OPTIONAL: Logo component */
  logo?: ReactNode;
  /** OPTIONAL: Footer content */
  footer?: ReactNode;
  /** OPTIONAL: Split content (for split scheme) */
  splitContent?: ReactNode;
  /** OPTIONAL: Background image URL (for hero scheme) */
  imageUrl?: string;
}

/**
 * Blank layout props
 * @llm-props BlankLayout
 * REQUIRED: children
 * RECOMMENDED: scheme="default", tone="clean"  
 * OPTIONAL: title, size, className
 * @llm-defaults scheme="default", tone="clean", size="lg"
 */
export interface BlankLayoutProps extends LayoutProps {
  /** REQUIRED: Main content */
  children: ReactNode;
  /** RECOMMENDED: Layout structure (default: "default") */
  scheme?: BlankLayoutScheme;
  /** RECOMMENDED: Layout tone (default: "clean") */
  tone?: Tone;
  /** OPTIONAL: Layout size (default: "lg") */
  size?: Size;
  /** OPTIONAL: Page title */
  title?: string;
  /** OPTIONAL: Page subtitle */
  subtitle?: string;
  /** OPTIONAL: Logo component */
  logo?: ReactNode;
  /** OPTIONAL: Footer content */
  footer?: ReactNode;
}

/**
 * Popup layout props
 * @llm-props PopupLayout
 * REQUIRED: children  
 * RECOMMENDED: scheme="modal", tone="clean"
 * OPTIONAL: title, size, className
 * @llm-defaults scheme="modal", tone="clean", size="md"
 */
export interface PopupLayoutProps extends LayoutProps {
  /** REQUIRED: Main content */
  children: ReactNode;
  /** RECOMMENDED: Layout structure (default: "modal") */
  scheme?: PopupLayoutScheme;
  /** RECOMMENDED: Layout tone (default: "clean") */
  tone?: Tone;
  /** OPTIONAL: Layout size (default: "md") */
  size?: Size;
  /** OPTIONAL: Popup title */
  title?: string;
  /** OPTIONAL: Popup subtitle */
  subtitle?: string;
  /** OPTIONAL: Show close button */
  showClose?: boolean;
  /** OPTIONAL: Close handler */
  onClose?: () => void;
}

/**
 * Header component props (Section component - no scheme)
 * @llm-props Header
 * REQUIRED: children
 * RECOMMENDED: tone="clean"
 * OPTIONAL: size, className
 */
export interface HeaderProps extends BaseComponentProps, ToneProps, SizeProps, NavigationProps {
  /** REQUIRED: Header content */
  children: ReactNode;
  /** RECOMMENDED: Header tone (default: "clean") */
  tone?: Tone;
  /** OPTIONAL: Header size */
  size?: Size;
  /** OPTIONAL: Header positioning */
  position?: 'sticky' | 'fixed' | 'relative';
}

/**
 * Footer component props (Section component - no scheme)
 * @llm-props Footer
 * REQUIRED: children
 * RECOMMENDED: tone="contrast"
 * OPTIONAL: size, className
 */
export interface FooterProps extends BaseComponentProps, ToneProps, SizeProps, NavigationProps {
  /** REQUIRED: Footer content */
  children: ReactNode;
  /** RECOMMENDED: Footer tone (default: "contrast") */
  tone?: Tone;
  /** OPTIONAL: Footer navigation */
  navigation?: NavigationItem[];
  /** OPTIONAL: Footer size */
  size?: Size;
  /** OPTIONAL: Footer positioning */
  position?: 'sticky' | 'fixed' | 'relative';
}

/**
 * Container component props (Section component - no scheme)
 * @llm-props Container
 * REQUIRED: children
 * RECOMMENDED: tone="clean"
 * OPTIONAL: size, className
 */
export interface ContainerProps extends BaseComponentProps, ToneProps, SizeProps, NavigationProps {
  /** REQUIRED: Container content */
  children: ReactNode;
  /** RECOMMENDED: Container tone (default: "clean") */
  tone?: Tone;
  /** OPTIONAL: Container size */
  size?: Size;
  /** OPTIONAL: Sidebar position */
  sidebar?: 'none' | 'left' | 'right';
  /** OPTIONAL: Sidebar sticky behavior */
  sticky?: boolean;
}

/**
 * Legacy types for backward compatibility
 */
export type Theme = 'default' | 'aurora' | 'metro' | 'neon' | 'ruby' | 'studio';
export type ThemeVariant = Mode;

export interface ThemeConfig {
  id: Theme;
  name: string;
  description?: string;
  cssVars: {
    light: Record<string, string>;
    dark: Record<string, string>;
  };
}

/**
 * Platform detection types
 */
export type Platform = 'web' | 'native' | 'tauri' | 'unknown';

/**
 * Re-export commonly used React types for convenience
 */
export type {
  ComponentType,
  ReactNode,
  ReactElement,
  HTMLAttributes,
  ForwardRefExoticComponent,
  RefAttributes,
};