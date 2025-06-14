/**
 * @fileoverview Simplified Header component with consistent prop naming
 * @description Clean header component with responsive navigation and standardized props
 * @package @voilajsx/uikit
 * @file /src/components/sections/header.jsx
 */

import React, { forwardRef, createContext, useContext, useState, useEffect } from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";
import { Button } from "../ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

/**
 * Header context for variant sharing
 */
const HeaderContext = createContext({});

/**
 * Header variants defined with class-variance-authority
 */
const headerVariants = cva(
  "w-full border-b transition-all duration-200 z-40",
  {
    variants: {
      variant: {
        default: [
          "bg-background/80 backdrop-blur-sm border-border/40 supports-[backdrop-filter]:bg-background/60",
          "text-foreground"
        ],
        primary: [
          "bg-primary border-primary-foreground/20",
          "text-primary-foreground"
        ],
        black: [
          "bg-zinc-900 border-zinc-700/40",
          "text-zinc-100"
        ]
      },
      sticky: {
        true: "sticky top-0",
        false: "relative"
      }
    },
    defaultVariants: {
      variant: "default",
      sticky: true
    }
  }
);

/**
 * Container variants for content width and height control
 */
const containerVariants = cva(
  "mx-auto flex items-center justify-between",
  {
    variants: {
      size: {
        sm: "max-w-2xl h-12 px-4",
        md: "max-w-4xl h-14 px-4 sm:px-6",
        lg: "max-w-6xl h-16 px-4 sm:px-6 lg:px-8",
        xl: "max-w-7xl h-16 px-4 sm:px-6 lg:px-8",
        full: "max-w-full h-16 px-4 sm:px-6 lg:px-8"
      }
    },
    defaultVariants: {
      size: "xl"
    }
  }
);

/**
 * Main Header component - Simplified with consistent props
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {'default'|'primary'|'black'} [props.variant='default'] - Header variant
 * @param {'sm'|'md'|'lg'|'xl'|'full'} [props.size='xl'] - Header size (width + height + padding)
 * @param {boolean} [props.sticky=true] - Whether header should be sticky
 * @param {React.ReactNode} props.children - Header content slots
 * @returns {JSX.Element} Header component
 */
const Header = forwardRef(({ 
  className,
  variant = "default",
  size = "xl",
  sticky = true,
  children,
  ...props 
}, ref) => {
  return (
    <HeaderContext.Provider value={{ variant, size }}>
      <header
        ref={ref}
        className={cn(headerVariants({ variant, sticky }), className)}
        {...props}
      >
        <div className={cn(containerVariants({ size }))}>
          {children}
        </div>
      </header>
    </HeaderContext.Provider>
  );
});

Header.displayName = "Header";

/**
 * Header Logo section (always on the left)
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {React.ReactNode} props.children - Logo content
 * @returns {JSX.Element} Header logo section
 */
const HeaderLogo = forwardRef(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center flex-shrink-0", className)}
    {...props}
  >
    {children}
  </div>
));

HeaderLogo.displayName = "HeaderLogo";

/**
 * Smart Header Navigation (always on the right)
 * @param {Object} props - Component props
 * @param {Array} [props.items=[]] - Navigation items array
 * @param {string} [props.className] - Additional CSS classes
 * @returns {JSX.Element} Smart navigation component
 */
const HeaderNav = forwardRef(({ 
  items = [], 
  className, 
  ...props 
}, ref) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedMobileItems, setExpandedMobileItems] = useState(new Set());
  const [isMounted, setIsMounted] = useState(false);
  const { variant } = useContext(HeaderContext);

  // Ensure component is mounted before showing interactive elements
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    if (!isMounted) return;
    
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMounted]);

  // Prevent body scroll when mobile menu is open
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

  // Handle mobile dropdown toggle
  const toggleMobileDropdown = (index) => {
    const newExpanded = new Set(expandedMobileItems);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedMobileItems(newExpanded);
  };

  // Handle navigation click
  const handleItemClick = (onClick) => {
    setMobileOpen(false);
    setExpandedMobileItems(new Set());
    onClick?.();
  };

  // Get variant-specific button styles
  const getButtonStyles = (isActive = false) => {
    const baseStyles = "justify-start cursor-pointer rounded-lg transition-colors";
    
    switch (variant) {
      case 'primary':
        return cn(
          baseStyles,
          isActive 
            ? "bg-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/30" 
            : "text-primary-foreground hover:bg-primary-foreground/10"
        );
      case 'black':
        return cn(
          baseStyles,
          isActive 
            ? "bg-zinc-700 text-zinc-100 hover:bg-zinc-600" 
            : "text-zinc-100 hover:bg-zinc-800"
        );
      default: // 'default'
        return cn(
          baseStyles,
          isActive 
            ? "bg-secondary text-secondary-foreground hover:bg-secondary/80" 
            : "text-foreground hover:bg-muted"
        );
    }
  };

  // Get variant-specific mobile button styles
  const getMobileButtonStyles = (isActive = false) => {
    const baseStyles = "flex items-center cursor-pointer transition-colors duration-200 rounded-lg";
    
    // Mobile menu always uses background colors regardless of header variant
    return cn(
      baseStyles,
      isActive 
        ? "bg-secondary text-secondary-foreground" 
        : "text-foreground hover:bg-muted"
    );
  };

// Desktop Navigation Component - Simple & Robust
const DesktopNavigation = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  // Simple toggle function
  const toggleDropdown = (index, hasDropdown, mainOnClick) => {
    if (hasDropdown) {
      setOpenDropdown(openDropdown === index ? null : index);
    } else {
      setOpenDropdown(null);
      mainOnClick?.();
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleOutsideClick = () => setOpenDropdown(null);
    
    if (openDropdown !== null) {
      document.addEventListener('click', handleOutsideClick);
      return () => document.removeEventListener('click', handleOutsideClick);
    }
  }, [openDropdown]);

  // Handle sub-item click
  const handleSubItemClick = (onClick) => {
    setOpenDropdown(null);
    onClick?.();
  };

  return (
    <nav className={cn("hidden md:flex items-center space-x-1", className)} ref={ref} {...props}>
      {items.map((item, index) => {
        const hasDropdown = item.items && item.items.length > 0;
        const isOpen = openDropdown === index;

        return (
          <div key={item.key || index} className="relative">
            <Button 
              variant="ghost" 
              size="sm" 
              className={cn(
                getButtonStyles(item.isActive),
                item.className
              )}
              onClick={(e) => {
                e.stopPropagation();
                toggleDropdown(index, hasDropdown, item.onClick);
              }}
            >
              {item.icon && <item.icon className="h-4 w-4 mr-2" />}
              <span>{item.label}</span>
              {hasDropdown && (
                <ChevronDown className={cn(
                  "h-3 w-3 ml-1 transition-transform duration-200",
                  isOpen && "rotate-180"
                )} />
              )}
            </Button>
            
            {/* Dropdown Menu */}
            {hasDropdown && isOpen && (
              <div 
                className="absolute top-full left-0 w-48 bg-background border border-border rounded-lg shadow-lg z-50 mt-1"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="py-1">
                  {item.items.map((subItem, subIndex) => (
                    <button
                      key={subItem.key || subIndex}
                      className={cn(
                        "w-full px-3 py-2 text-left text-sm transition-colors flex items-center",
                        "hover:bg-muted focus:bg-muted focus:outline-none",
                        subItem.isActive 
                          ? "bg-secondary text-secondary-foreground" 
                          : "text-foreground"
                      )}
                      onClick={() => handleSubItemClick(subItem.onClick)}
                    >
                      {subItem.icon && <subItem.icon className="h-4 w-4 mr-2" />}
                      <span>{subItem.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
};

  // Mobile Navigation Component
  const MobileNavigation = () => {
    return (
      <div
        className={cn(
          "fixed top-16 left-0 right-0 z-40 md:hidden bg-background border-b border-border/40 shadow-lg transition-all duration-300 ease-out overflow-hidden",
          mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="max-h-96 overflow-y-auto">
          <div className="px-4 py-4 space-y-2">
            {items.map((item, index) => {
              const hasSubItems = item.items && item.items.length > 0;
              const isExpanded = expandedMobileItems.has(index);

              return (
                <div key={item.key || index} className="space-y-1">
                  <div 
                    className={cn(
                      getMobileButtonStyles(item.isActive),
                      item.className
                    )}
                    onClick={() => hasSubItems ? toggleMobileDropdown(index) : handleItemClick(item.onClick)}
                  >
                    <div className="flex-1 flex items-center px-3 py-2">
                      {item.icon && <item.icon className="h-4 w-4 mr-3" />}
                      <span className="text-sm">{item.label}</span>
                      {hasSubItems && (
                        <ChevronDown className={cn(
                          "h-4 w-4 ml-auto transition-transform duration-200",
                          isExpanded && "rotate-180"
                        )} />
                      )}
                    </div>
                  </div>
                  
                  {/* Submenu with slide animation */}
                  {hasSubItems && (
                    <div className={cn(
                      "ml-6 space-y-1 border-l border-border/30 pl-4 overflow-hidden transition-all duration-300 ease-out",
                      isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    )}>
                      {item.items.map((subItem, subIndex) => (
                        <div
                          key={subItem.key || subIndex}
                          className={cn(
                            "flex items-center px-3 py-2 rounded-lg transition-colors cursor-pointer",
                            subItem.isActive 
                              ? "bg-secondary text-secondary-foreground" 
                              : "text-muted-foreground hover:text-foreground hover:bg-muted"
                          )}
                          onClick={() => handleItemClick(subItem.onClick)}
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
  };

  // Get mobile toggle button styles
  const getMobileToggleStyles = () => {
    switch (variant) {
      case 'primary':
        return "md:hidden text-primary-foreground hover:bg-primary-foreground/10";
      case 'black':
        return "md:hidden text-zinc-100 hover:bg-zinc-800";
      default:
        return "md:hidden text-foreground hover:bg-muted";
    }
  };

  // Mobile Toggle Button Component
  const MobileToggle = () => (
    <Button
      variant="ghost"
      size="icon"
      className={getMobileToggleStyles()}
      onClick={() => setMobileOpen(!mobileOpen)}
      aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
    >
      {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
    </Button>
  );

  return (
    <div className="flex items-center ml-auto">
      {/* Desktop Navigation */}
      <DesktopNavigation />
      
      {/* Mobile Toggle */}
      <MobileToggle />
      
      {/* Mobile Navigation */}
      <MobileNavigation />
    </div>
  );
});

HeaderNav.displayName = "HeaderNav";

// Attach compound components to Header
Header.Logo = HeaderLogo;
Header.Nav = HeaderNav;

export { 
  Header,
  HeaderLogo,
  HeaderNav,
  headerVariants,
  containerVariants
};