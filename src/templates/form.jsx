/**
 * @fileoverview Form template for @voilajsx/uikit
 * @description Layout template optimized for forms and settings pages
 * @package @voilajsx/uikit
 * @file /src/templates/form.jsx
 */

import { forwardRef } from "react";
import { cn } from "../lib/utils";
import { Header } from "../components/layouts/header";
import { Footer } from "../components/layouts/footer";
import { Container } from "../components/layouts/container";

/**
 * Form layout template with header, form container, and footer
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {string} [props.title] - Form title
 * @param {React.ReactNode} [props.actions] - Action buttons (save, cancel, etc.)
 * @param {Function} [props.onSubmit] - Form submit handler
 * @param {React.ReactNode} props.children - Form content
 * @returns {JSX.Element} Form template component
 */
const FormTemplate = forwardRef(({ 
  className,
  title,
  actions,
  onSubmit,
  children,
  ...props 
}, ref) => {
  return (
    <div
      ref={ref}
      className={cn("flex min-h-screen flex-col", className)}
      {...props}
    >
      {/* Header with title and actions */}
      <Header>
        <Container className="flex h-14 items-center justify-between">
          {title && (
            <h1 className="text-xl font-semibold">{title}</h1>
          )}
          {actions && (
            <div className="flex items-center space-x-2">
              {actions}
            </div>
          )}
        </Container>
      </Header>

      {/* Main form content */}
      <main className="flex-1 py-6">
        <Container className="max-w-2xl">
          <form onSubmit={onSubmit} className="space-y-6">
            {children}
          </form>
        </Container>
      </main>

      {/* Footer */}
      <Footer>
        <Container className="py-4">
          <div className="flex justify-center">
            <p className="text-sm text-muted-foreground">
              All changes are saved automatically
            </p>
          </div>
        </Container>
      </Footer>
    </div>
  );
});

FormTemplate.displayName = "FormTemplate";

export { FormTemplate };