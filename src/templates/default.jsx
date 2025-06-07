/**
 * @fileoverview Default template for @voilajsx/uikit
 * @description Main layout template with header, sidebar, and footer
 * @package @voilajsx/uikit
 * @file /src/templates/default.jsx
 */

import { forwardRef } from "react";
import { cn } from "../lib/utils";
import { Header } from "../components/layouts/header";
import { Footer } from "../components/layouts/footer";
import { Sidebar } from "../components/layouts/sidebar";
import { Container } from "../components/layouts/container";

/**
 * Default layout template with header, sidebar, main content, and footer
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {React.ReactNode} [props.headerContent] - Header content
 * @param {React.ReactNode} [props.sidebarContent] - Sidebar content
 * @param {React.ReactNode} [props.footerContent] - Footer content
 * @param {React.ReactNode} props.children - Main content
 * @returns {JSX.Element} Default template component
 */
const DefaultTemplate = forwardRef(({ 
  className,
  headerContent,
  sidebarContent,
  footerContent,
  children,
  ...props 
}, ref) => {
  return (
    <div
      ref={ref}
      className={cn("flex min-h-screen flex-col ", className)}
      {...props}
    >
      {/* Header */}
      {headerContent && (
        <Header>
          <Container className="flex h-14 items-center">
            {headerContent}
          </Container>
        </Header>
      )}

      {/* Main layout with sidebar and content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        {sidebarContent && (
          <Sidebar className="hidden md:flex">
            {sidebarContent}
          </Sidebar>
        )}

        {/* Main content */}
        <main className="flex-1">
          <Container className="py-6">
            {children}
          </Container>
        </main>
      </div>

      {/* Footer */}
      {footerContent && (
        <Footer>
          <Container className="py-6">
            {footerContent}
          </Container>
        </Footer>
      )}
    </div>
  );
});

DefaultTemplate.displayName = "DefaultTemplate";

export { DefaultTemplate };