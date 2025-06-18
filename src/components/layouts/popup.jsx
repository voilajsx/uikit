/**
 * PopupLayout - Compact layout for Chrome extensions, mobile overlays, and small panels
 * @module @voilajsx/uikit
 * @file src/components/layouts/popup.jsx
 */

import React from 'react';
import { cn } from '@voilajsx/uikit/lib/utils';
import { Button } from '@voilajsx/uikit/button';
import { Badge } from '@voilajsx/uikit/badge';
import { Separator } from '@voilajsx/uikit/separator';
import { X, ChevronLeft, MoreVertical, Settings } from 'lucide-react';

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
export function PopupLayout({
  variant = 'default',
  size = 'md',
  title,
  subtitle,
  logo,
  badge,
  headerActions,
  showBack = false,
  showClose = false,
  showDivider = true,
  onBack,
  onClose,
  footer,
  scrollable = true,
  className,
  children,
  ...props
}) {
  // Size configurations
  const sizeClasses = {
    sm: 'w-72 max-h-80',      // 288px × 320px - Ultra compact
    md: 'w-80 max-h-96',      // 320px × 384px - Standard popup
    lg: 'w-96 max-h-[32rem]', // 384px × 512px - Large popup
    auto: 'min-w-72 max-w-lg max-h-[80vh]', // Responsive
  };

  // Variant configurations
  const variantClasses = {
    default: 'bg-background border-border shadow-lg',
    compact: 'bg-card border-border shadow-md',
    mini: 'bg-popover border-border shadow-sm',
  };

  // Padding configurations
  const paddingClasses = {
    default: 'p-4',
    compact: 'p-3',
    mini: 'p-2',
  };

  const hasHeader = title || subtitle || logo || badge || headerActions || showBack || showClose;

  return (
    <div
      className={cn(
        'flex flex-col border rounded-lg overflow-hidden',
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {/* Header */}
      {hasHeader && (
        <>
          <div className={cn('flex items-center gap-3', paddingClasses[variant])}>
            {/* Back Button */}
            {showBack && (
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 shrink-0"
                onClick={onBack}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
            )}

            {/* Logo */}
            {logo && (
              <div className="shrink-0">
                {logo}
              </div>
            )}

            {/* Title Section */}
            <div className="flex-1 min-w-0">
              {title && (
                <div className="flex items-center gap-2">
                  <h1 className="text-sm font-semibold text-foreground truncate">
                    {title}
                  </h1>
                  {badge && badge}
                </div>
              )}
              {subtitle && (
                <p className="text-xs text-muted-foreground truncate mt-0.5">
                  {subtitle}
                </p>
              )}
            </div>

            {/* Header Actions */}
            {headerActions && (
              <div className="shrink-0 flex items-center gap-1">
                {headerActions}
              </div>
            )}

            {/* Close Button */}
            {showClose && (
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 shrink-0"
                onClick={onClose}
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>

          {showDivider && <Separator />}
        </>
      )}

      {/* Content */}
      <div
        className={cn(
          'flex-1',
          scrollable && 'overflow-y-auto overflow-x-hidden',
          !hasHeader && paddingClasses[variant],
          hasHeader && variant === 'default' && 'p-4',
          hasHeader && variant === 'compact' && 'p-3',
          hasHeader && variant === 'mini' && 'p-2'
        )}
      >
        {children}
      </div>

      {/* Footer */}
      {footer && (
        <>
          <Separator />
          <div className={paddingClasses[variant]}>
            {footer}
          </div>
        </>
      )}
    </div>
  );
}

/**
 * PopupHeader - Standalone header component for custom layouts
 */
export function PopupHeader({
  title,
  subtitle,
  logo,
  badge,
  actions,
  showBack = false,
  showClose = false,
  onBack,
  onClose,
  className,
  ...props
}) {
  return (
    <div className={cn('flex items-center gap-3 p-3', className)} {...props}>
      {showBack && (
        <Button variant="ghost" size="sm" className="h-8 w-8 p-0" onClick={onBack}>
          <ChevronLeft className="h-4 w-4" />
        </Button>
      )}

      {logo && <div className="shrink-0">{logo}</div>}

      <div className="flex-1 min-w-0">
        {title && (
          <div className="flex items-center gap-2">
            <h1 className="text-sm font-semibold truncate">{title}</h1>
            {badge && badge}
          </div>
        )}
        {subtitle && (
          <p className="text-xs text-muted-foreground truncate">{subtitle}</p>
        )}
      </div>

      {actions && <div className="shrink-0">{actions}</div>}

      {showClose && (
        <Button variant="ghost" size="sm" className="h-8 w-8 p-0" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
}

/**
 * PopupContent - Scrollable content container
 */
export function PopupContent({
  scrollable = true,
  className,
  children,
  ...props
}) {
  return (
    <div
      className={cn(
        'flex-1 p-3',
        scrollable && 'overflow-y-auto overflow-x-hidden',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

/**
 * PopupFooter - Footer actions container
 */
export function PopupFooter({
  actions,
  className,
  children,
  ...props
}) {
  return (
    <div className={cn('border-t border-border p-3', className)} {...props}>
      {actions || children}
    </div>
  );
}

// Export all components
export default PopupLayout;