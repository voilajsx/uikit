/**
 * @fileoverview Admin template with persistent sidebar - web-optimized but mobile-responsive
 * @description Perfect for documentation sites, admin panels, and web applications
 * @package @voilajsx/uikit
 * @file /src/templates/admin.jsx
 */

import { forwardRef, useState, useEffect } from "react";
import { cn } from "../lib/utils";
import { Button } from "../components/ui/button";
import { Menu, X } from "lucide-react";

/**
 * Admin template with persistent sidebar on desktop and overlay on mobile
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {string} [props.variant="persistent"] - Sidebar behavior: persistent | overlay-only
 * @param {string} [props.title] - Site title
 * @param {string} [props.subtitle] - Site subtitle shown on larger screens
 * @param {React.ReactNode} [props.headerActions] - Header action buttons
 * @param {React.ReactNode} props.sidebarContent - Sidebar navigation content
 * @param {React.ReactNode} [props.sidebarFooter] - Sidebar footer content
 * @param {React.ReactNode} props.children - Main content
 * @param {string} [props.sidebarWidth="w-64"] - Sidebar width class
 * @param {string} [props.headerHeight="h-16"] - Header height class
 * @param {Function} [props.onSidebarToggle] - Sidebar toggle callback
 * @returns {JSX.Element} Admin template
 */
const AdminTemplate = forwardRef(({ 
  className,
  variant = "persistent",
  title = "Admin Panel",
  subtitle,
  headerActions,
  sidebarContent,
  sidebarFooter,
  children,
  sidebarWidth = "w-64",
  headerHeight = "h-16",
  onSidebarToggle,
  ...props 
}, ref) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle mobile menu toggle
  const toggleMobileMenu = () => {
    const newState = !mobileMenuOpen;
    setMobileMenuOpen(newState);
    onSidebarToggle?.(newState);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    onSidebarToggle?.(false);
  };

  // Close mobile menu on route changes
  useEffect(() => {
    const handleLocationChange = () => {
      if (window.innerWidth < 1024) {
        closeMobileMenu();
      }
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // For overlay-only variant, always use mobile behavior
  const shouldShowPersistentSidebar = variant === "persistent" && window.innerWidth >= 1024;
  const shouldUseMobileMenu = variant === "overlay-only" || window.innerWidth < 1024;

  return (
    <div
      ref={ref}
      className={cn("min-h-screen bg-background flex", className)}
      {...props}
    >
      {/* Desktop Persistent Sidebar - Only shown on desktop for persistent variant */}
      {variant === "persistent" && (
        <aside className={cn(
          "hidden lg:flex lg:flex-col lg:fixed lg:inset-y-0 lg:z-50 bg-background border-r border-border/40",
          sidebarWidth
        )}>
          <div className="flex flex-col h-full">
            {/* Sidebar Header */}
            <div className={cn(
              "flex items-center px-6 border-b border-border/20 bg-muted/20 flex-shrink-0",
              headerHeight
            )}>
              <div className="flex items-center gap-3 min-w-0">
                <h1 className="text-lg font-semibold text-foreground truncate">
                  {title}
                </h1>
                {subtitle && (
                  <span className="hidden xl:inline text-muted-foreground text-sm flex-shrink-0">
                    {subtitle}
                  </span>
                )}
              </div>
            </div>

            {/* Sidebar Content - Scrollable */}
            <div className="flex-1 overflow-y-auto">
              {sidebarContent}
            </div>

            {/* Sidebar Footer - Fixed at bottom */}
            {sidebarFooter && (
              <div className="flex-shrink-0 border-t border-border/20 bg-muted/20">
                {sidebarFooter}
              </div>
            )}
          </div>
        </aside>
      )}

      {/* Mobile Menu Overlay */}
      {shouldUseMobileMenu && mobileMenuOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/50 lg:hidden"
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Sidebar */}
      {shouldUseMobileMenu && (
        <aside className={cn(
          "fixed left-0 top-0 z-50 h-full bg-background border-r border-border/40 transform transition-transform duration-200 ease-in-out lg:hidden",
          sidebarWidth,
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        )}>
          <div className="flex flex-col h-full">
            {/* Mobile Sidebar Header with Close Button */}
            <div className={cn(
              "flex items-center justify-between px-4 border-b border-border/20 bg-muted/20 flex-shrink-0",
              headerHeight
            )}>
              <div className="flex items-center gap-3 min-w-0">
                <h1 className="text-lg font-semibold text-foreground truncate">
                  {title}
                </h1>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={closeMobileMenu}
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Mobile Sidebar Content */}
            <div className="flex-1 overflow-y-auto">
              {sidebarContent}
            </div>

            {/* Mobile Sidebar Footer */}
            {sidebarFooter && (
              <div className="flex-shrink-0 border-t border-border/20 bg-muted/20">
                {sidebarFooter}
              </div>
            )}
          </div>
        </aside>
      )}

      {/* Main Content Area */}
      <div className={cn(
        "flex-1 flex flex-col min-w-0",
        variant === "persistent" && "lg:ml-64"
      )}>
        {/* Top Header */}
        <header className={cn(
          "sticky top-0 z-40 w-full border-b border-border/30 bg-background/80 backdrop-blur-sm shadow-sm",
          headerHeight
        )}>
          <div className="w-full h-full flex items-center justify-between px-4 lg:px-6">
            <div className="flex items-center gap-4 min-w-0">
              {/* Mobile menu button - shown when using mobile menu */}
              {shouldUseMobileMenu && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden text-foreground hover:bg-muted flex-shrink-0"
                  onClick={toggleMobileMenu}
                  aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                >
                  {mobileMenuOpen ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <Menu className="h-5 w-5" />
                  )}
                </Button>
              )}
              
              {/* Header Title - Hidden on desktop when sidebar is persistent */}
              <div className={cn(
                "flex items-center gap-3 min-w-0",
                variant === "persistent" && "lg:hidden"
              )}>
                <h1 className="text-lg lg:text-xl font-semibold text-foreground truncate">
                  {title}
                </h1>
                {subtitle && (
                  <span className="hidden md:inline text-muted-foreground text-sm flex-shrink-0">
                    {subtitle}
                  </span>
                )}
              </div>
            </div>
            
            {/* Header Actions */}
            {headerActions && (
              <div className="flex-shrink-0">
                {headerActions}
              </div>
            )}
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 min-w-0">
          <div className="p-4 lg:p-6 w-full">
            <div className="w-full max-w-7xl mx-auto">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
});

AdminTemplate.displayName = "AdminTemplate";

export { AdminTemplate };