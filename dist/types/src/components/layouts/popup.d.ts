/**
 * Popup Layout with consistent prop naming and standardized variants
 * @module @voilajsx/uikit
 * @file src/components/layouts/popup.tsx
 */
import * as React from 'react';
import type { Size } from '@/types';
/**
 * Popup Layout props
 */
export interface PopupLayoutProps {
    /** Popup style variant */
    variant?: 'default' | 'muted' | 'primary' | 'black';
    /** Popup size */
    size?: Size;
    /** Whether popup header should be sticky */
    sticky?: boolean;
    /** Header title text */
    title?: string;
    /** Header subtitle text */
    subtitle?: string;
    /** Logo/icon component */
    logo?: React.ReactNode;
    /** Status badge */
    badge?: React.ReactNode;
    /** Header action buttons */
    headerActions?: React.ReactNode;
    /** Show back button */
    showBack?: boolean;
    /** Show close button */
    showClose?: boolean;
    /** Show header divider */
    showDivider?: boolean;
    /** Back button handler */
    onBack?: () => void;
    /** Close button handler */
    onClose?: () => void;
    /** Footer content */
    footer?: React.ReactNode;
    /** Enable content scrolling */
    scrollable?: boolean;
    /** Additional CSS classes */
    className?: string;
    /** Inline styles */
    style?: React.CSSProperties;
    /** Main content */
    children: React.ReactNode;
}
/**
 * PopupHeader - Standalone header component
 */
export interface PopupHeaderProps {
    variant?: 'default' | 'muted' | 'primary' | 'black';
    size?: Size;
    title?: string;
    subtitle?: string;
    logo?: React.ReactNode;
    badge?: React.ReactNode;
    actions?: React.ReactNode;
    showBack?: boolean;
    showClose?: boolean;
    onBack?: () => void;
    onClose?: () => void;
    className?: string;
}
declare const PopupHeader: React.ForwardRefExoticComponent<PopupHeaderProps & React.RefAttributes<HTMLDivElement>>;
/**
 * PopupContent - Scrollable content container
 */
export interface PopupContentProps {
    variant?: 'default' | 'muted' | 'primary' | 'black';
    size?: Size;
    scrollable?: boolean;
    className?: string;
    children: React.ReactNode;
}
declare const PopupContent: React.ForwardRefExoticComponent<PopupContentProps & React.RefAttributes<HTMLDivElement>>;
/**
 * PopupFooter - Footer actions container
 */
export interface PopupFooterProps {
    variant?: 'default' | 'muted' | 'primary' | 'black';
    size?: Size;
    actions?: React.ReactNode;
    className?: string;
    children?: React.ReactNode;
}
declare const PopupFooter: React.ForwardRefExoticComponent<PopupFooterProps & React.RefAttributes<HTMLDivElement>>;
/**
 * PopupLayout with compound components
 */
declare const PopupLayout: React.ForwardRefExoticComponent<PopupLayoutProps & React.RefAttributes<HTMLDivElement>> & {
    Header: React.ForwardRefExoticComponent<PopupHeaderProps & React.RefAttributes<HTMLDivElement>>;
    Content: React.ForwardRefExoticComponent<PopupContentProps & React.RefAttributes<HTMLDivElement>>;
    Footer: React.ForwardRefExoticComponent<PopupFooterProps & React.RefAttributes<HTMLDivElement>>;
};
export { PopupLayout, PopupHeader, PopupContent, PopupFooter };
//# sourceMappingURL=popup.d.ts.map