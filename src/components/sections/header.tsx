/**
 * Header component with standardized prop naming and tone system
 * @module @voilajsx/uikit
 * @file src/components/sections/header.tsx
 */

import * as React from 'react';
import { forwardRef, createContext, useContext, useState, useEffect } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import type { NavigationItem, Size } from '@/types';

/**
 * Header context for sharing configuration
 */
const HeaderContext = createContext<{
  tone: 'clean' | 'subtle' | 'brand' | 'contrast';
  size: Size;
}>({
  tone: 'clean',
  size: 'xl',
});

/**
 * Header variants with tone-based semantic colors
 */
const headerVariants = cva(
  'w-full border-b transition-all duration-200 z-40',
  {
    variants: {
      tone: {
        clean: [
          'bg-background/80 backdrop-blur-sm border-border/40 supports-[backdrop-filter]:bg-background/60',
          'text-foreground'
        ],
        subtle: [
          'bg-muted/50 backdrop-blur-sm border-border/30',
          'text-foreground'
        ],
        brand: [
          'bg-primary border-primary-foreground/20',
          'text-primary-foreground'
        ],
        contrast: [
          'bg-zinc-900 border-zinc-700/40',
          'text-zinc-100'
        ]
      },
      position: {
        sticky: 'sticky top-0',
        fixed: 'fixed top-0 left-0 right-0',
        relative: 'relative'
      }
    },
    defaultVariants: {
      tone: 'clean',
      position: 'sticky'
    }
  }
);

/**
 * Container variants for responsive sizing
 */
const containerVariants = cva(
  'mx-auto flex items-center justify-between',
  {
    variants: {
      size: {
        sm: 'max-w-2xl h-12 px-4',
        md: 'max-w-4xl h-14 px-4 sm:px-6',
        lg: 'max-w-6xl h-16 px-4 sm:px-6 lg:px-8',
        xl: 'max-w-7xl h-16 px-4 sm:px-6 lg:px-8',
        full: 'max-w-full h-16 px-4 sm:px-6 lg:px-8'
      }
    },
    defaultVariants: {
      size: 'xl'
    }
  }
);

/**
 * Header component props with standardized system
 */
export interface HeaderProps 
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof headerVariants> {
  /** Visual styling tone */
  tone?: 'clean' | 'subtle' | 'brand' | 'contrast';
  /** Header size (width + height + padding) */
  size?: Size;
  /** Header positioning */
  position?: 'sticky' | 'fixed' | 'relative';
  /** Header content */
  children: React.ReactNode;
}

/**
 * Main Header component with standardized props
 */
const HeaderComponent = forwardRef<HTMLElement, HeaderProps>(({ 
  className,
  tone = 'clean',
  size = 'xl',
  position = 'sticky',
  children,
  ...props 
}, ref) => {
  return (
    <HeaderContext.Provider value={{ tone, size }}>
      <header
        ref={ref}
        className={cn(headerVariants({ tone, position }), className)}
        {...props}
      >
        <div className={cn(containerVariants({ size }))}>
          {children}
        </div>
      </header>
    </HeaderContext.Provider>
  );
});

HeaderComponent.displayName = 'Header';

/**
 * Header Logo section props
 */
export interface HeaderLogoProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Logo content */
  children: React.ReactNode;
}

/**
 * Header Logo section (always on the left)
 */
const HeaderLogo = forwardRef<HTMLDivElement, HeaderLogoProps>(({ 
  className, 
  children, 
  ...props 
}, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center flex-shrink-0', className)}
    {...props}
  >
    {children}
  </div>
));

HeaderLogo.displayName = 'HeaderLogo';

/**
 * Header Navigation props with standardized navigation system
 */
export interface HeaderNavProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Navigation items (standardized) */
  navigation?: NavigationItem[];
  /** Current path for active states */
  currentPath?: string;
  /** Navigation handler */
  onNavigate?: (href: string, item: NavigationItem) => void;
}

/**
 * Smart Header Navigation with responsive mobile menu
 */
const HeaderNav = forwardRef<HTMLDivElement, HeaderNavProps>(({ 
  navigation = [], 
  currentPath = '',
  onNavigate,
  className, 
  ...props 
}, ref) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedMobileItems, setExpandedMobileItems] = useState(new Set<string>());
  const [isMounted, setIsMounted] = useState(false);
  const { tone } = useContext(HeaderContext);

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
  const toggleMobileDropdown = (key: string) => {
    const newExpanded = new Set(expandedMobileItems);
    if (newExpanded.has(key)) {
      newExpanded.delete(key);
    } else {
      newExpanded.add(key);
    }
    setExpandedMobileItems(newExpanded);
  };

  // Handle navigation click
  const handleItemClick = (item: NavigationItem) => {
    setMobileOpen(false);
    setExpandedMobileItems(new Set());
    
    if (item.href && onNavigate) {
      onNavigate(item.href, item);
    } else if (item.onClick) {
      item.onClick();
    }
  };

  // Get tone-specific button styles
  const getButtonStyles = (isActive = false) => {
    const baseStyles = 'justify-start cursor-pointer rounded-lg transition-colors';
    
    switch (tone) {
      case 'subtle':
        return cn(
          baseStyles,
          isActive 
            ? 'bg-background text-foreground hover:bg-background/80' 
            : 'text-muted-foreground hover:text-foreground hover:bg-background/50'
        );
      case 'brand':
        return cn(
          baseStyles,
          isActive 
            ? 'bg-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/30' 
            : 'text-primary-foreground hover:bg-primary-foreground/10'
        );
      case 'contrast':
        return cn(
          baseStyles,
          isActive 
            ? 'bg-zinc-700 text-zinc-100 hover:bg-zinc-600' 
            : 'text-zinc-100 hover:bg-zinc-800'
        );
      default:
        return cn(
          baseStyles,
          isActive 
            ? 'bg-secondary text-secondary-foreground hover:bg-secondary/80' 
            : 'text-foreground hover:bg-muted'
        );
    }
  };

  // Desktop Navigation Component
  const DesktopNavigation = () => {
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
      const handleOutsideClick = () => setOpenDropdown(null);
      
      if (openDropdown !== null) {
        document.addEventListener('click', handleOutsideClick);
        return () => document.removeEventListener('click', handleOutsideClick);
      }
    }, [openDropdown]);

    return (
      <nav className={cn('hidden md:flex items-center space-x-1', className)} ref={ref} {...props}>
        {navigation.map((item) => {
          const hasDropdown = item.items && item.items.length > 0;
          const isOpen = openDropdown === item.key;
          const isActive = item.href ? currentPath === item.href : item.isActive;

          return (
            <div key={item.key} className="relative">
              <Button 
                variant="ghost" 
                size="sm" 
                className={cn(getButtonStyles(isActive), item.className)}
                onClick={(e) => {
                  e.stopPropagation();
                  if (hasDropdown) {
                    setOpenDropdown(isOpen ? null : item.key);
                  } else {
                    setOpenDropdown(null);
                    handleItemClick(item);
                  }
                }}
              >
                {item.icon && <item.icon className="h-4 w-4 mr-2" />}
                <span>{item.label}</span>
                {hasDropdown && (
                  <ChevronDown className={cn(
                    'h-3 w-3 ml-1 transition-transform duration-200',
                    isOpen && 'rotate-180'
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
                    {item.items?.map((subItem) => {
                      const subIsActive = subItem.href ? currentPath === subItem.href : subItem.isActive;
                      
                      return (
                        <button
                          key={subItem.key}
                          className={cn(
                            'w-full px-3 py-2 text-left text-sm transition-colors flex items-center',
                            'hover:bg-muted focus:bg-muted focus:outline-none',
                            subIsActive 
                              ? 'bg-secondary text-secondary-foreground' 
                              : 'text-foreground'
                          )}
                          onClick={() => {
                            setOpenDropdown(null);
                            handleItemClick(subItem);
                          }}
                        >
                          {subItem.icon && <subItem.icon className="h-4 w-4 mr-2" />}
                          <span>{subItem.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </nav>
    );
  };

  // Mobile Toggle Button
  const MobileToggle = () => {
    const getMobileToggleStyles = () => {
      switch (tone) {
        case 'subtle':
          return 'md:hidden text-muted-foreground hover:text-foreground hover:bg-background/50';
        case 'brand':
          return 'md:hidden text-primary-foreground hover:bg-primary-foreground/10';
        case 'contrast':
          return 'md:hidden text-zinc-100 hover:bg-zinc-800';
        default:
          return 'md:hidden text-foreground hover:bg-muted';
      }
    };

    return (
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
  };

  // Mobile Navigation Component
  const MobileNavigation = () => {
    const getMobileButtonStyles = (isActive = false) => {
      return cn(
        'flex items-center cursor-pointer transition-colors duration-200 rounded-lg',
        isActive 
          ? 'bg-secondary text-secondary-foreground' 
          : 'text-foreground hover:bg-muted'
      );
    };

    return (
      <div
        className={cn(
          'fixed top-16 left-0 right-0 z-40 md:hidden bg-background border-b border-border/40 shadow-lg transition-all duration-300 ease-out overflow-hidden',
          mobileOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="max-h-96 overflow-y-auto">
          <div className="px-4 py-4 space-y-2">
            {navigation.map((item) => {
              const hasSubItems = item.items && item.items.length > 0;
              const isExpanded = expandedMobileItems.has(item.key);
              const isActive = item.href ? currentPath === item.href : item.isActive;

              return (
                <div key={item.key} className="space-y-1">
                  <div 
                    className={cn(getMobileButtonStyles(isActive), item.className)}
                    onClick={() => hasSubItems ? toggleMobileDropdown(item.key) : handleItemClick(item)}
                  >
                    <div className="flex-1 flex items-center px-3 py-2">
                      {item.icon && <item.icon className="h-4 w-4 mr-3" />}
                      <span className="text-sm">{item.label}</span>
                      {hasSubItems && (
                        <ChevronDown className={cn(
                          'h-4 w-4 ml-auto transition-transform duration-200',
                          isExpanded && 'rotate-180'
                        )} />
                      )}
                    </div>
                  </div>
                  
                  {/* Submenu */}
                  {hasSubItems && (
                    <div className={cn(
                      'ml-6 space-y-1 border-l border-border/30 pl-4 overflow-hidden transition-all duration-300 ease-out',
                      isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    )}>
                      {item.items?.map((subItem) => {
                        const subIsActive = subItem.href ? currentPath === subItem.href : subItem.isActive;
                        
                        return (
                          <div
                            key={subItem.key}
                            className={cn(
                              'flex items-center px-3 py-2 rounded-lg transition-colors cursor-pointer',
                              subIsActive 
                                ? 'bg-secondary text-secondary-foreground' 
                                : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                            )}
                            onClick={() => handleItemClick(subItem)}
                          >
                            {subItem.icon && <subItem.icon className="h-3 w-3 mr-3" />}
                            <span className="text-sm">{subItem.label}</span>
                          </div>
                        );
                      })}
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

HeaderNav.displayName = 'HeaderNav';

/**
 * Header with compound components
 */
const Header = Object.assign(HeaderComponent, {
  Logo: HeaderLogo,
  Nav: HeaderNav,
});

/**
 * Export Header with compound components and individual components
 */
export { 
  Header,
  HeaderLogo,
  HeaderNav,
  headerVariants,
  containerVariants
};