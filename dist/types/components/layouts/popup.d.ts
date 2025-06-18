/**
 * PopupLayout - Compact layout optimized for small interfaces
 * @param {Object} props - Component props
 * @param {'default'|'compact'|'mini'} [props.variant='default'] - Layout size variant
 * @param {'sm'|'md'|'lg'|'auto'} [props.size='md'] - Width control
 * @param {string} [props.title] - Header title text
 * @param {string} [props.subtitle] - Header subtitle text
 * @param {React.ReactNode} [props.logo] - Logo/icon component
 * @param {React.ReactNode} [props.badge] - Status badge
 * @param {React.ReactNode} [props.headerActions] - Header action buttons
 * @param {boolean} [props.showBack=false] - Show back button
 * @param {boolean} [props.showClose=false] - Show close button
 * @param {boolean} [props.showDivider=true] - Show header divider
 * @param {Function} [props.onBack] - Back button handler
 * @param {Function} [props.onClose] - Close button handler
 * @param {React.ReactNode} [props.footer] - Footer content
 * @param {boolean} [props.scrollable=true] - Enable content scrolling
 * @param {string} [props.className] - Additional CSS classes
 * @param {React.ReactNode} props.children - Main content
 * @returns {JSX.Element} PopupLayout component
 */
export function PopupLayout({ variant, size, title, subtitle, logo, badge, headerActions, showBack, showClose, showDivider, onBack, onClose, footer, scrollable, className, children, ...props }: {
    variant?: "default" | "compact" | "mini" | undefined;
    size?: "sm" | "lg" | "auto" | "md" | undefined;
    title?: string | undefined;
    subtitle?: string | undefined;
    logo?: React.ReactNode;
    badge?: React.ReactNode;
    headerActions?: React.ReactNode;
    showBack?: boolean | undefined;
    showClose?: boolean | undefined;
    showDivider?: boolean | undefined;
    onBack?: Function | undefined;
    onClose?: Function | undefined;
    footer?: React.ReactNode;
    scrollable?: boolean | undefined;
    className?: string | undefined;
    children: React.ReactNode;
}): JSX.Element;
/**
 * PopupHeader - Standalone header component for custom layouts
 */
export function PopupHeader({ title, subtitle, logo, badge, actions, showBack, showClose, onBack, onClose, className, ...props }: {
    [x: string]: any;
    title: any;
    subtitle: any;
    logo: any;
    badge: any;
    actions: any;
    showBack?: boolean | undefined;
    showClose?: boolean | undefined;
    onBack: any;
    onClose: any;
    className: any;
}): import("react/jsx-runtime").JSX.Element;
/**
 * PopupContent - Scrollable content container
 */
export function PopupContent({ scrollable, className, children, ...props }: {
    [x: string]: any;
    scrollable?: boolean | undefined;
    className: any;
    children: any;
}): import("react/jsx-runtime").JSX.Element;
/**
 * PopupFooter - Footer actions container
 */
export function PopupFooter({ actions, className, children, ...props }: {
    [x: string]: any;
    actions: any;
    className: any;
    children: any;
}): import("react/jsx-runtime").JSX.Element;
export default PopupLayout;
import React from 'react';
//# sourceMappingURL=popup.d.ts.map