/**
 * @fileoverview Admin template with responsive mobile sidebar and overlay
 * @description Advanced template for admin panels, dashboards, and documentation sites
 * @package @voilajsx/uikit
 * @file /src/templates/admin.jsx
 */

import { forwardRef, useState, useEffect } from "react";
import { cn } from "../lib/utils";
import { Button } from "../components/ui/button";
import { Menu, X } from "lucide-react";

/**
 * Admin template with responsive sidebar, mobile overlay, and sticky header
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {string} [props.title] - Site title
 * @param {string} [props.subtitle] - Site subtitle shown on larger screens
 * @param {React.ReactNode} [props.headerActions] - Header action buttons (theme switcher, user menu, etc.)
 * @param {React.ReactNode} props.sidebarContent - Sidebar navigation content
 * @param {React.ReactNode} [props.sidebarFooter] - Sidebar footer content (version, links, etc.)
 * @param {React.ReactNode} props.children - Main content
 * @param {string} [props.sidebarWidth="w-64"] - Sidebar width class
 * @param {string} [props.headerHeight="h-16"] - Header height class
 * @param {boolean} [props.defaultSidebarOpen=false] - Default sidebar state on mobile
 * @param {Function} [props.onSidebarToggle] - Sidebar toggle callback
 * @returns {JSX.Element} Admin template
 */
const AdminTemplate = forwardRef(({ 
  className,
  title = "Admin Panel",
  subtitle,
  headerActions,
  sidebarContent,
  sidebarFooter,
  children,
  sidebarWidth = "w-64",
  headerHeight = "h-16",
  defaultSidebarOpen = false,
  onSidebarToggle,
  ...props 
}, ref) => {
  const [sidebarOpen, setSidebarOpen] = useState(defaultSidebarOpen);

  // Handle sidebar toggle with callback
  const toggleSidebar = () => {
    const newState = !sidebarOpen;
    setSidebarOpen(newState);
    onSidebarToggle?.(newState);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
    onSidebarToggle?.(false);
  };

  // Close sidebar on route changes (works with React Router)
  useEffect(() => {
    const handleLocationChange = () => {
      if (window.innerWidth < 1024) {
        closeSidebar();
      }
    };

    // Listen for popstate (back/forward navigation)
    window.addEventListener('popstate', handleLocationChange);
    
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  // Handle window resize - close sidebar on mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when sidebar is open on mobile
  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [sidebarOpen]);

  return (
    <div
      ref={ref}
      className={cn("min-h-screen bg-background", className)}
      {...props}
    >
      {/* Fixed Header */}
      <header className={cn(
        "fixed top-0 left-0 right-0 z-30 border-b border-border/30 bg-primary text-primary-foreground shadow-sm",
        headerHeight
      )}>
        <div className="w-full h-full flex items-center justify-between px-4 lg:px-6">
          <div className="flex items-center gap-4 min-w-0">
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-primary-foreground hover:bg-primary-foreground/10 flex-shrink-0"
              onClick={toggleSidebar}
              aria-label={sidebarOpen ? 'Close menu' : 'Open menu'}
            >
              {sidebarOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
            
            {/* Logo/Title */}
            <div className="flex items-center gap-3 min-w-0">
              <h1 className="text-lg lg:text-xl font-semibold text-primary-foreground truncate">
                {title}
              </h1>
              {subtitle && (
                <span className="hidden md:inline text-primary-foreground/70 text-sm flex-shrink-0">
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

      <div className={cn("flex", headerHeight === "h-16" ? "pt-16" : "pt-14")}>
        {/* Mobile sidebar overlay - positioned below header */}
        {sidebarOpen && (
          <div 
            className={cn(
              "fixed inset-0 z-40 bg-black/50 lg:hidden",
              // Position overlay below header
              headerHeight === "h-16" ? "top-16" : "top-14"
            )}
            onClick={closeSidebar}
            aria-hidden="true"
          />
        )}

        {/* Sidebar */}
        <aside className={cn(
          "fixed left-0 z-50 bg-background border-r border-border/40 transform transition-transform duration-200 ease-in-out",
          "lg:static lg:translate-x-0 lg:z-auto lg:sticky lg:h-screen",
          sidebarWidth,
          // Mobile: Below header, Desktop: includes header height
          headerHeight === "h-16" ? "top-16 bottom-0 lg:top-16 lg:h-[calc(100vh-4rem)]" : "top-14 bottom-0 lg:top-14 lg:h-[calc(100vh-3.5rem)]",
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        )}>
          <div className="h-full flex flex-col">
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