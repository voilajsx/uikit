/**
 * @fileoverview Page template with integrated navigation system
 * @description Complete page layout with built-in responsive navigation
 * @package @voilajsx/uikit
 * @file /src/templates/page.jsx
 */

import { forwardRef, useState, useEffect } from "react";
import { cn } from "../lib/utils";
import { Button } from "../components/ui/button";
import { ChevronDown } from "lucide-react";

/**
 * Desktop Navigation Component with variant-aware styling
 */
const DesktopNavigation = forwardRef(({ 
  items = [],
  headerVariant = "default",
  className,
  ...props 
}, ref) => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleNavClick = (onClick) => {
    setHoveredItem(null);
    onClick?.();
  };

  // Variant-aware navigation styles
  const getNavItemStyles = (item, isActive) => {
    const baseStyles = "justify-start cursor-pointer rounded-lg transition-colors";
    
    switch (headerVariant) {
      case "primary":
        return cn(
          baseStyles,
          // Add white text and remove borders/shadows
          "border-0 shadow-none text-white", // Force white text
          isActive 
            ? "bg-primary-foreground/20" 
            : "hover:bg-primary-foreground/10"
        );
      case "black":
        return cn(
          baseStyles,
          isActive 
            ? "bg-zinc-800 text-zinc-100 hover:bg-zinc-700" 
            : "text-zinc-300 hover:text-zinc-100 hover:bg-zinc-800"
        );
      default: // "default"
        return cn(
          baseStyles,
          // Prevent white text on hover - keep normal theme colors
          "hover:text-foreground", // Explicit dark text on hover
          isActive 
            ? "bg-secondary text-secondary-foreground hover:bg-secondary/80" 
            : "hover:bg-muted"
        );
    }
  };

  // Dropdown styles based on variant
  const getDropdownStyles = () => {
    return "bg-background border border-border/50 rounded-lg shadow-lg z-50 mt-2";
  };

  return (
    <nav className={cn("hidden md:flex items-center space-x-1", className)} ref={ref} {...props}>
      {items.map((item, index) => {
        const hasDropdown = item.items && item.items.length > 0;
        const isHovered = isMounted && hoveredItem === index;

        return (
          <div 
            key={item.key || index}
            className="relative group"
            onMouseEnter={() => isMounted && hasDropdown && setHoveredItem(index)}
            onMouseLeave={() => isMounted && hasDropdown && setHoveredItem(null)}
          >
            <Button 
              variant={headerVariant === "primary" ? "primary" : "ghost"}
              size="sm" 
              className={getNavItemStyles(item, item.isActive)}
              onClick={() => handleNavClick(item.onClick)}
            >
              {item.icon && <item.icon className="h-4 w-4 mr-2" />}
              <span>{item.label}</span>
              {hasDropdown && (
                <ChevronDown className={cn(
                  "h-3 w-3 ml-1 transition-transform duration-200",
                  isHovered && "rotate-180"
                )} />
              )}
            </Button>
            
            {hasDropdown && isHovered && isMounted && (
              <>
                <div className="absolute top-full left-0 w-full h-2 bg-transparent z-40" />
                <div 
                  className={cn("absolute top-full left-0 w-48", getDropdownStyles())}
                  onMouseEnter={() => setHoveredItem(index)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <div className="py-1">
                    {item.items.map((subItem, subIndex) => (
                      <button
                        key={subItem.key || subIndex}
                        className="w-full px-3 py-2 text-left text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors flex items-center cursor-pointer rounded-md"
                        onClick={() => handleNavClick(subItem.onClick)}
                      >
                        {subItem.icon && <subItem.icon className="h-4 w-4 mr-2" />}
                        <span>{subItem.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        );
      })}
    </nav>
  );
});

DesktopNavigation.displayName = "DesktopNavigation";

/**
 * Mobile Navigation Component
 */
const MobileNavigation = forwardRef(({ 
  items = [],
  mobileOpen = false,
  onClose,
  className,
  ...props 
}, ref) => {
  const [expandedMobileItems, setExpandedMobileItems] = useState(new Set());
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileOpen, isMounted]);

  const toggleMobileDropdown = (index) => {
    const newExpanded = new Set(expandedMobileItems);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedMobileItems(newExpanded);
  };

  const handleNavClick = (onClick) => {
    setExpandedMobileItems(new Set());
    onClose?.();
    onClick?.();
  };

  // Mobile item styles (uses standard theme colors regardless of header variant)
  const getMobileItemStyles = (item, isActive) => {
    const baseStyles = "flex items-center cursor-pointer transition-colors duration-200 rounded-lg";
    
    return cn(
      baseStyles,
      isActive 
        ? "bg-secondary text-secondary-foreground hover:bg-secondary/80" 
        : "hover:bg-muted text-foreground"
    );
  };

  return (
    <div
      ref={ref}
      className={cn(
        "fixed top-16 left-0 right-0 z-40 md:hidden bg-background border-b border-border/40 shadow-lg transition-all duration-300 ease-out overflow-hidden",
        mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0",
        className
      )}
      {...props}
    >
      <div className="max-h-96 overflow-y-auto">
        <div className="px-4 py-4 space-y-2">
          {items.map((item, index) => {
            const hasDropdown = item.items && item.items.length > 0;
            const isExpanded = expandedMobileItems.has(index);

            return (
              <div key={item.key || index} className="space-y-1">
                <div 
                  className={getMobileItemStyles(item, item.isActive)}
                  onClick={() => hasDropdown ? toggleMobileDropdown(index) : handleNavClick(item.onClick)}
                >
                  <div className="flex-1 flex items-center px-3 py-2">
                    {item.icon && <item.icon className="h-4 w-4 mr-3" />}
                    <span className="text-sm">{item.label}</span>
                    {hasDropdown && (
                      <ChevronDown className={cn(
                        "h-4 w-4 ml-auto transition-transform duration-200",
                        isExpanded && "rotate-180"
                      )} />
                    )}
                  </div>
                </div>
                
                {hasDropdown && (
                  <div className={cn(
                    "ml-6 space-y-1 border-l border-border/30 pl-4 overflow-hidden transition-all duration-300 ease-out",
                    isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  )}>
                    {item.items.map((subItem, subIndex) => (
                      <div
                        key={subItem.key || subIndex}
                        className="flex items-center px-3 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer"
                        onClick={() => handleNavClick(subItem.onClick)}
                      >
                        {subItem.icon && <subItem.icon className="h-3 w-3 mr-3" />}
                        <span className="text-sm">{subItem.label}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
});

MobileNavigation.displayName = "MobileNavigation";

/**
 * Page template with integrated navigation system
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {string} [props.variant="default"] - Layout variant: default | centered | wide
 * @param {string} [props.headerVariant="default"] - Header variant: default | primary | black
 * @param {React.ReactNode} [props.logo] - Logo component
 * @param {Array} [props.navigationItems=[]] - Navigation items array
 * @param {React.ReactNode} [props.headerCenter] - Center header content
 * @param {React.ReactNode} [props.headerActions] - Right header actions
 * @param {React.ReactNode} [props.secondaryNav] - Secondary navigation slot
 * @param {React.ReactNode} [props.sidebar] - Sidebar content slot
 * @param {React.ReactNode} props.children - Main content
 * @param {boolean} [props.sticky=true] - Whether header should be sticky
 * @param {Function} [props.logoComponent] - Logo component function that receives headerVariant
 * @param {Function} [props.headerCenterComponent] - Header center component function that receives headerVariant
 * @param {Function} [props.headerActionsComponent] - Header actions component function that receives headerVariant
 * @returns {JSX.Element} Page template
 */
const PageTemplate = forwardRef(({ 
  className,
  variant = "default",
  headerVariant = "default",
  logo,
  navigationItems = [],
  headerCenter,
  headerActions,
  secondaryNav,
  sidebar,
  children,
  sticky = true,
  logoComponent,
  headerCenterComponent, 
  headerActionsComponent,
  ...props 
}, ref) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const containerClass = {
    default: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
    centered: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8", 
    wide: "max-w-full mx-auto px-4 sm:px-6 lg:px-8"
  };

  // Header variant styles
  const headerVariantStyles = {
    default: "bg-white/80 backdrop-blur-sm border-border/40",
    primary: "bg-primary border-primary-foreground/20",
    black: "bg-zinc-900 border-zinc-700/40"
  };

  // Mobile toggle styles based on header variant
  const getMobileToggleStyles = () => {
    switch (headerVariant) {
      case "primary":
        return "md:hidden p-2 rounded-md text-primary-foreground hover:bg-primary-foreground/10 transition-colors";
      case "black":
        return "md:hidden p-2 rounded-md text-zinc-100 hover:bg-zinc-800 transition-colors";
      default:
        return "md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors";
    }
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
          scrolledBorderClasses = "border-none";
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

  // Mobile toggle button
  const mobileToggle = (
    <button
      className={getMobileToggleStyles()}
      onClick={() => setMobileOpen(!mobileOpen)}
      aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
    >
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        {mobileOpen ? (
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
      className={cn("min-h-screen bg-background", className)}
      {...props}
    >
      {/* Header */}
      <header className={getHeaderClasses()}>
        <div className={containerClass[variant]}>
          <div className="flex items-center justify-between h-16">
            {/* Left Section */}
            <div className="flex items-center gap-8">
              {(logo || logoComponent) && (
                <div className="flex-shrink-0">
                  {logoComponent ? logoComponent(headerVariant) : logo}
                </div>
              )}
              <DesktopNavigation 
                items={navigationItems} 
                headerVariant={headerVariant}
              />
            </div>

            {/* Center Section */}
            {(headerCenter || headerCenterComponent) && (
              <div className="hidden lg:flex flex-1 justify-center max-w-md mx-8">
                {headerCenterComponent ? headerCenterComponent(headerVariant) : headerCenter}
              </div>
            )}

            {/* Right Section */}
            <div className="flex items-center gap-3">
              {(headerActions || headerActionsComponent) && (
                <div className="hidden md:flex items-center gap-2">
                  {headerActionsComponent ? headerActionsComponent(headerVariant) : headerActions}
                </div>
              )}
              {mobileToggle}
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <MobileNavigation 
        items={navigationItems}
        mobileOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />

      {/* Secondary Navigation */}
      {secondaryNav && (
        <div className="border-b border-border/30 bg-muted/20">
          <div className={containerClass[variant]}>
            <div className="py-3">{secondaryNav}</div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className={cn("flex-1", sidebar && "lg:grid lg:grid-cols-4 lg:gap-8")}>
        <main className={cn(sidebar ? "lg:col-span-3" : "w-full")}>
          <div className={containerClass[variant]}>
            <div className="py-6 lg:py-8">{children}</div>
          </div>
        </main>

        {sidebar && (
          <aside className="lg:col-span-1">
            <div className="sticky top-24 px-4 sm:px-6 lg:px-0">
              <div className="py-6 lg:py-8">{sidebar}</div>
            </div>
          </aside>
        )}
      </div>
    </div>
  );
});

PageTemplate.displayName = "PageTemplate";

export { PageTemplate };