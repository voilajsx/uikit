/**
 * @fileoverview Auth template for @voilajsx/uikit
 * @description Centered layout template for authentication pages
 * @package @voilajsx/uikit
 * @file /src/templates/auth.jsx
 */

import { forwardRef } from "react";
import { cn } from "../lib/utils";

/**
 * Auth layout template with centered container
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {string} [props.title] - Page title
 * @param {string} [props.subtitle] - Page subtitle
 * @param {React.ReactNode} props.children - Auth form content
 * @returns {JSX.Element} Auth template component
 */
const AuthTemplate = forwardRef(({ 
  className,
  title,
  subtitle,
  children,
  ...props 
}, ref) => {
  return (
    <div
      ref={ref}
      className={cn("flex min-h-screen items-center justify-center bg-background", className)}
      {...props}
    >
      <div className="w-full max-w-md space-y-6 px-4">
        {/* Header */}
        {(title || subtitle) && (
          <div className="text-center">
            {title && (
              <h1 className="text-2xl font-semibold tracking-tight">
                {title}
              </h1>
            )}
            {subtitle && (
              <p className="mt-2 text-sm text-muted-foreground">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* Auth content */}
        {children}
      </div>
    </div>
  );
});

AuthTemplate.displayName = "AuthTemplate";

export { AuthTemplate };