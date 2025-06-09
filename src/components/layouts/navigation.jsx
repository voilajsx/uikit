/**
 * FIXED: Complete navigation layout system
 * @description Navigation wrapper that provides navigation to any template
 * @package @voilajsx/uikit
 * @file /src/components/layouts/navigation.jsx
 */

import React, { useState, useEffect, forwardRef } from "react";
import { cn } from "../../lib/utils";
import { Button } from "../ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

/**
 * Desktop Navigation Component - Only renders desktop navigation
 */
const DesktopNavigation = forwardRef(({ 
  items = [],
  className,
  ...props 
}, ref) => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isMounted, setIsMounted] = useState(false);

  // Ensure component is mounted before showing interactive elements
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Handle navigation click
  const handleNavClick = (onClick) => {
    setHoveredItem(null);
    onClick?.();
  };

  // Always render the navigation structure, only hide interactivity until mounted
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
              variant="ghost" 
              size="sm" 
              className={cn(
                "justify-start cursor-pointer rounded-lg transition-colors",
                item.className?.includes('bg-secondary') 
                  ? "hover:bg-secondary/80 text-secondary-foreground hover:text-secondary-foreground" 
                  : "hover:bg-muted",
                item.className
              )}
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
                  className="absolute top-full left-0 w-48 bg-background border border-border/50 rounded-lg shadow-lg z-50 mt-2"
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
 * Mobile Navigation Component - Only renders mobile navigation
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

  // Only run effects after mounting
  useEffect(() => {
    setIsMounted(true);
  }, []);

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
  const handleNavClick = (onClick) => {
    setExpandedMobileItems(new Set());
    onClose?.();
    onClick?.();
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
                  className={cn(
                    "flex items-center cursor-pointer transition-colors duration-200 rounded-lg",
                    item.className?.includes('bg-secondary') 
                      ? "hover:bg-secondary/80" 
                      : "hover:bg-muted",
                    item.className
                  )}
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
 * Navigation layout wrapper that provides navigation to templates
 * @param {Object} props - Component props
 * @param {string} [props.mode="topbar"] - Navigation mode: topbar | sidebar
 * @param {Array} [props.items=[]] - Navigation items array
 * @param {React.ReactNode} props.children - Template to wrap
 * @param {Function} [props.onNavClick] - Navigation click handler
 * @returns {JSX.Element} Navigation layout
 */
const NavigationLayout = forwardRef(({ 
  mode = "topbar",
  items = [],
  children,
  onNavClick,
  ...props 
}, ref) => {
  const [mobileOpen, setMobileOpen] = useState(false);
const [isMounted, setIsMounted] = useState(false);
  
// Initialize mounted state
useEffect(() => {
  setIsMounted(true);
}, []);
  // Close mobile menu on route changes
  useEffect(() => {
    if (!isMounted) return;
    
    const handleLocationChange = () => {
      setMobileOpen(false);
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, [isMounted]);

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

  const mobileToggle = (
    <Button 
      variant="ghost" 
      size="icon"
      className="md:hidden"
      onClick={() => setMobileOpen(!mobileOpen)}
      aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
    >
      {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
    </Button>
  );
  
  const desktopNavigation = (
    <DesktopNavigation items={items} />
  );

  const mobileNavigation = (
    <MobileNavigation 
      items={items}
      mobileOpen={mobileOpen}
      onClose={() => setMobileOpen(false)}
    />
  );

  // Clone children and inject navigation props
  return (
    <>
      {React.cloneElement(children, {
        desktopNavigation,
        mobileNavigation,
        mobileToggle,
        ref
      })}
    </>
  );
});

NavigationLayout.displayName = "NavigationLayout";

/**
 * Hook for managing navigation state (for advanced use cases)
 * @param {Array} items - Navigation items array
 * @param {Object} options - Additional options
 * @returns {Object} Navigation components and state
 */
export const useNavigation = (items = [], options = {}) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  
  // Close mobile menu on route changes
  useEffect(() => {
    const handleLocationChange = () => {
      setMobileOpen(false);
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

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

  const toggle = (
    <Button 
      variant="ghost" 
      size="icon"
      className="md:hidden"
      onClick={() => setMobileOpen(!mobileOpen)}
      aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
    >
      {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
    </Button>
  );
  
  const desktopMenu = (
    <DesktopNavigation items={items} {...options} />
  );

  const mobileMenu = (
    <MobileNavigation 
      items={items}
      mobileOpen={mobileOpen}
      onClose={() => setMobileOpen(false)}
      {...options}
    />
  );
  
  return { 
    toggle, 
    desktopMenu,
    mobileMenu, 
    isOpen: mobileOpen, 
    close: () => setMobileOpen(false),
    open: () => setMobileOpen(true)
  };
};

export { NavigationLayout, DesktopNavigation, MobileNavigation };
export default NavigationLayout;