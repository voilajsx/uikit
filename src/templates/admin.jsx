/**
 * @fileoverview Admin template with persistent sidebar and header variants
 * @description Clean admin layout with header variants similar to PageTemplate
 * @package @voilajsx/uikit
 * @file /src/templates/admin.jsx
 */

import { forwardRef, useState, useEffect } from "react";
import { cn } from "../lib/utils";
import { Button } from "../components/ui/button";
import { Menu, X } from "lucide-react";

/**
 * Admin template with persistent sidebar and header variants
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {string} [props.headerVariant="default"] - Header variant: default | primary | black
 * @param {string} [props.title] - Site title
 * @param {React.ReactNode} [props.logo] - Logo component
 * @param {React.ReactNode} [props.headerActions] - Header action buttons
 * @param {React.ReactNode} props.sidebarContent - Sidebar navigation content
 * @param {React.ReactNode} [props.sidebarFooter] - Sidebar footer content
 * @param {React.ReactNode} props.children - Main content
 * @param {string} [props.sidebarWidth="w-64"] - Sidebar width class
 * @param {boolean} [props.sticky=true] - Whether header should be sticky
 * @param {Function} [props.logoComponent] - Logo component function that receives headerVariant
 * @param {Function} [props.headerActionsComponent] - Header actions component function that receives headerVariant
 * @returns {JSX.Element} Admin template
 */
const AdminTemplate = forwardRef(({ 
  className,
  headerVariant = "default",
  title = "Admin Panel",
  logo,
  headerActions,
  sidebarContent,
  sidebarFooter,
  children,
  sidebarWidth = "w-64",
  sticky = true,
  logoComponent,
  headerActionsComponent,
  ...props 
}, ref) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll for header effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    if (sticky) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [sticky]);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
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

  // Header variant styles
  const headerVariantStyles = {
    default: "bg-white/80 backdrop-blur-sm border-border/40",
    primary: "bg-primary border-primary-foreground/20",
    black: "bg-zinc-900 border-zinc-700/40"
  };

  // Get header classes based on variant
  const getHeaderClasses = () => {
    const baseClasses = "w-full border-b transition-all duration-200 z-40";
    const variantClasses = headerVariantStyles[headerVariant];
    const stickyClasses = sticky ? "sticky top-0" : "";
    const scrollClasses = isScrolled ? "shadow-sm" : "";
    
    let scrolledBorderClasses = "";
    if (isScrolled) {
      switch (headerVariant) {
        case "default":
          scrolledBorderClasses = "border-border/60";
          break;
        case "primary":
          scrolledBorderClasses = "border-primary-foreground/30";
          break;
        case "black":
          scrolledBorderClasses = "border-zinc-600/50";
          break;
        default:
          scrolledBorderClasses = "border-border/60";
      }
    }

    return cn(
      baseClasses,
      variantClasses,
      stickyClasses,
      scrollClasses,
      scrolledBorderClasses
    );
  };

  // Mobile toggle styles based on header variant
  const getMobileToggleStyles = () => {
    switch (headerVariant) {
      case "primary":
        return "lg:hidden p-2 rounded-md text-primary-foreground hover:bg-primary-foreground/10 transition-colors";
      case "black":
        return "lg:hidden p-2 rounded-md text-zinc-100 hover:bg-zinc-800 transition-colors";
      default:
        return "lg:hidden p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors";
    }
  };

  // Get title styles based on header variant
  const getTitleStyles = () => {
    switch (headerVariant) {
      case "primary":
        return "text-primary-foreground";
      case "black":
        return "text-zinc-100";
      default:
        return "text-foreground";
    }
  };

  // Mobile toggle button
  const mobileToggle = (
    <button
      className={getMobileToggleStyles()}
      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
    >
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        {mobileMenuOpen ? (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        ) : (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        )}
      </svg>
    </button>
  );

  return (
    <div
      ref={ref}
      className={cn("min-h-screen bg-background flex", className)}
      {...props}
    >
      {/* Desktop Persistent Sidebar */}
      <aside className={cn(
        "hidden lg:flex lg:flex-col lg:fixed lg:inset-y-0 lg:z-50 bg-background border-r border-border/40",
        sidebarWidth
      )}>
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center h-16 px-6 border-b border-border/20 bg-muted/20 flex-shrink-0">
            <div className="flex items-center gap-3 min-w-0">
              {(logo || logoComponent) && (
                <div className="flex-shrink-0">
                  {logoComponent ? logoComponent(headerVariant) : logo}
                </div>
              )}
              <h1 className="text-lg font-semibold text-foreground truncate">
                {title}
              </h1>
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

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/50 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Sidebar */}
      <aside className={cn(
        "fixed left-0 top-0 z-50 h-full bg-background border-r border-border/40 transform transition-transform duration-200 ease-in-out lg:hidden",
        sidebarWidth,
        mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
      )}>
        <div className="flex flex-col h-full">
          {/* Mobile Sidebar Header with Close Button */}
          <div className="flex items-center justify-between h-16 px-4 border-b border-border/20 bg-muted/20 flex-shrink-0">
            <div className="flex items-center gap-3 min-w-0">
              {(logo || logoComponent) && (
                <div className="flex-shrink-0">
                  {logoComponent ? logoComponent("default") : logo}
                </div>
              )}
              <h1 className="text-lg font-semibold text-foreground truncate">
                {title}
              </h1>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(false)}
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

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 lg:ml-64">
        {/* Top Header */}
        <header className={getHeaderClasses()}>
          <div className="flex items-center justify-between h-16 px-4 lg:px-6">
            <div className="flex items-center gap-4 min-w-0">
              {/* Mobile menu button */}
              {mobileToggle}
              
              {/* Header Title - Hidden on desktop when sidebar is visible */}
              <div className="flex items-center gap-3 min-w-0 lg:hidden">
                {(logo || logoComponent) && (
                  <div className="flex-shrink-0">
                    {logoComponent ? logoComponent(headerVariant) : logo}
                  </div>
                )}
                <h1 className={cn("text-lg font-semibold truncate", getTitleStyles())}>
                  {title}
                </h1>
              </div>
            </div>
            
            {/* Header Actions */}
            {(headerActions || headerActionsComponent) && (
              <div className="flex-shrink-0">
                {headerActionsComponent ? headerActionsComponent(headerVariant) : headerActions}
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
