/**
 * Admin Layout with standardized scheme + tone system - FIXED PROPS ALIGNMENT
 * @module @voilajsx/uikit
 * @file src/components/layouts/admin.tsx
 */

import * as React from 'react';
import { forwardRef, useState, useEffect } from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Menu, X, ChevronRight } from 'lucide-react';
import type { NavigationItem, Size, AdminLayoutScheme, Tone } from '@/types';

/**
 * Admin Layout scheme variants - structural arrangements
 */
const adminVariants = cva(
  'min-h-screen',
  {
    variants: {
      scheme: {
        sidebar: 'bg-background flex',
        topbar: 'bg-background flex flex-col',
        hybrid: 'bg-background flex flex-col'
      },
      tone: {
        clean: '',
        subtle: 'bg-muted/10',
        brand: 'bg-primary/5',
        contrast: 'bg-zinc-900'
      }
    },
    defaultVariants: {
      scheme: 'sidebar',
      tone: 'subtle'
    }
  }
);

/**
 * Sidebar variants with tone-based semantic colors
 */
const sidebarVariants = cva(
  'border-r transition-all duration-300 ease-in-out fixed left-0 top-0 z-50 h-full flex flex-col',
  {
    variants: {
      size: {
        sm: 'w-48',    // 192px
        md: 'w-64',    // 256px
        lg: 'w-80',    // 320px
        xl: 'w-96',    // 384px
        full: 'w-[28rem]' // 448px
      },
      tone: {
        clean: [
          'bg-white border-border',
          'text-foreground'
        ],
        subtle: [
          'bg-muted/30 border-border/50',
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
      }
    },
    defaultVariants: {
      size: 'md',
      tone: 'subtle'
    }
  }
);

/**
 * Header variants with tone-based styling
 */
const headerVariants = cva(
  'w-full border-b transition-all duration-200 z-40',
  {
    variants: {
      tone: {
        clean: 'bg-background/80 backdrop-blur-sm border-border/40 text-foreground',
        subtle: 'bg-muted/50 backdrop-blur-sm border-border/30 text-foreground', 
        brand: 'bg-primary border-primary-foreground/20 text-primary-foreground',
        contrast: 'bg-zinc-900 border-zinc-700/40 text-zinc-100'
      },
      sticky: {
        true: 'sticky top-0',
        false: 'relative'
      }
    },
    defaultVariants: {
      tone: 'clean',
      sticky: true
    }
  }
);

/**
 * Size configuration for navigation
 */
const getSizeConfig = (size: Size = 'md') => {
  const configs = {
    sm: {
      sidebarHeader: 'h-12 px-3 text-xs',
      menuButton: 'px-2 py-1.5 text-xs min-h-[28px]',
      submenuButton: 'ml-3 px-2 py-1 text-xs min-h-[24px]',
      icon: 'h-3.5 w-3.5',
      spacing: 'space-y-0.5',
      showBadges: false,
    },
    md: {
      sidebarHeader: 'h-16 px-4 text-sm',
      menuButton: 'px-3 py-2.5 text-sm min-h-[36px]',
      submenuButton: 'ml-4 px-3 py-2 text-sm min-h-[32px]',
      icon: 'h-4 w-4',
      spacing: 'space-y-1',
      showBadges: true,
    },
    lg: {
      sidebarHeader: 'h-20 px-6 text-base',
      menuButton: 'px-4 py-3 text-sm min-h-[44px]',
      submenuButton: 'ml-6 px-4 py-2.5 text-sm min-h-[36px]',
      icon: 'h-5 w-5',
      spacing: 'space-y-1.5',
      showBadges: true,
    },
    xl: {
      sidebarHeader: 'h-20 px-6 text-base',
      menuButton: 'px-4 py-3 text-sm min-h-[44px]',
      submenuButton: 'ml-6 px-4 py-2.5 text-sm min-h-[36px]',
      icon: 'h-5 w-5',
      spacing: 'space-y-1.5',
      showBadges: true,
    },
    full: {
      sidebarHeader: 'h-20 px-6 text-base',
      menuButton: 'px-4 py-3 text-sm min-h-[44px]',
      submenuButton: 'ml-6 px-4 py-2.5 text-sm min-h-[36px]',
      icon: 'h-5 w-5',
      spacing: 'space-y-1.5',
      showBadges: true,
    },
  };
  
  return configs[size] || configs.md;
};

/**
 * Navigation renderer props - FIXED TO MATCH TYPES
 */
interface AdminNavigationProps {
  navigationItems: NavigationItem[];
  currentPath: string;
  onNavigate: (href: string, item: NavigationItem) => void; // ✅ FIXED: href parameter
  size: Size;
  tone: Tone;
}

/**
 * Built-in Navigation Component with proper tone-based colors - FIXED PROPS
 */
function AdminNavigation({ 
  navigationItems = [], 
  currentPath = '', 
  onNavigate = () => {},
  size = 'md',
  tone = 'subtle'
}: AdminNavigationProps) {
  const [expandedMenus, setExpandedMenus] = useState(new Set<string>());
  const config = getSizeConfig(size);

  const toggleMenu = (menuKey: string) => {
    const newExpanded = new Set(expandedMenus);
    if (newExpanded.has(menuKey)) {
      newExpanded.delete(menuKey);
    } else {
      newExpanded.add(menuKey);
    }
    setExpandedMenus(newExpanded);
  };

  // Get tone-specific styles for sidebar navigation
  const getMenuItemStyles = (isActive: boolean, isSubmenu = false) => {
    const baseStyles = 'w-full flex items-center gap-3 rounded-lg transition-all duration-200 group text-left font-medium';
    
    if (isSubmenu) {
      const submenuBase = `${config.submenuButton} font-normal`;
      switch (tone) {
        case 'subtle':
          return cn(
            submenuBase,
            isActive 
              ? 'bg-background text-foreground shadow-sm' 
              : 'text-muted-foreground hover:text-foreground hover:bg-background/50'
          );
        case 'brand':
          return cn(
            submenuBase,
            isActive 
              ? 'bg-primary-foreground/20 text-primary-foreground shadow-sm' 
              : 'text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10'
          );
        case 'contrast':
          return cn(
            submenuBase,
            isActive 
              ? 'bg-zinc-800 text-zinc-100 shadow-sm' 
              : 'text-zinc-300 hover:text-zinc-100 hover:bg-zinc-800/70'
          );
        default:
          return cn(
            submenuBase,
            isActive 
              ? 'bg-secondary text-secondary-foreground shadow-sm' 
              : 'text-muted-foreground hover:text-foreground hover:bg-muted/70'
          );
      }
    } else {
      const mainBase = config.menuButton;
      switch (tone) {
        case 'subtle':
          return cn(
            baseStyles,
            mainBase,
            isActive 
              ? 'bg-background text-foreground shadow-sm' 
              : 'text-muted-foreground hover:text-foreground hover:bg-background/50'
          );
        case 'brand':
          return cn(
            baseStyles,
            mainBase,
            isActive 
              ? 'bg-primary-foreground/20 text-primary-foreground shadow-sm' 
              : 'text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10'
          );
        case 'contrast':
          return cn(
            baseStyles,
            mainBase,
            isActive 
              ? 'bg-zinc-800 text-zinc-100 shadow-sm' 
              : 'text-zinc-200 hover:text-zinc-100 hover:bg-zinc-800/80'
          );
        default:
          return cn(
            baseStyles,
            mainBase,
            isActive 
              ? 'bg-secondary text-secondary-foreground shadow-sm' 
              : 'text-muted-foreground hover:text-foreground hover:bg-muted/70'
          );
      }
    }
  };

  const MenuItem = ({ item, isSubmenu = false }: { item: NavigationItem; isSubmenu?: boolean }) => {
    const hasSubmenu = !isSubmenu && item.items && item.items.length > 0;
    const isExpanded = expandedMenus.has(item.key);
    // ✅ FIXED: Use href instead of path, isActive instead of active
    const isActive = item.href ? currentPath === item.href : Boolean(item.isActive);

    return (
      <div key={item.key} className="w-full">
        <button
          onClick={() => {
            if (hasSubmenu) {
              toggleMenu(item.key);
            } else if (item.href) {
              // ✅ FIXED: Use href instead of path
              onNavigate(item.href, item);
            } else if (item.onClick) {
              // ✅ FIXED: Use onClick instead of action
              item.onClick();
            }
          }}
          className={getMenuItemStyles(isActive, isSubmenu)}
        >
          {!isSubmenu && item.icon && (
            <item.icon className={cn(config.icon, 'flex-shrink-0')} />
          )}
          
          <span className="flex-1 truncate text-left">{item.label}</span>
          
          {item.badge && config.showBadges && (
            <Badge 
              variant={isActive ? 'secondary' : 'outline'} 
              className={cn(
                'text-xs h-4 px-1 ml-1 flex-shrink-0',
                tone === 'brand' && !isActive && 'border-primary-foreground/30 text-primary-foreground/80 bg-primary-foreground/10',
                tone === 'contrast' && !isActive && 'border-zinc-600 text-zinc-300 bg-zinc-800/50'
              )}
            >
              {item.badge}
            </Badge>
          )}
          
          {hasSubmenu && (
            <ChevronRight className={cn(
              config.icon,
              'flex-shrink-0 transition-transform duration-200',
              isExpanded && 'rotate-90'
            )} />
          )}
        </button>
        
        {hasSubmenu && isExpanded && item.items && (
          <div className={cn(
            'overflow-hidden transition-all duration-300 mt-1',
            'max-h-96 opacity-100'
          )}>
            <div className={cn(config.spacing, 'pb-2')}>
              {item.items.map((subItem) => (
                <MenuItem key={subItem.key} item={subItem} isSubmenu={true} />
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <nav className="p-6 space-y-2">
      <div className={config.spacing}>
        {navigationItems.map((item) => (
          <MenuItem key={item.key} item={item} />
        ))}
      </div>
    </nav>
  );
}

/**
 * Admin Layout props with standardized system - ALIGNED WITH TYPES
 */
export interface AdminLayoutProps {
  /** Layout structure/arrangement */
  scheme?: AdminLayoutScheme;
  /** Visual styling tone */
  tone?: Tone;
  /** Layout size */
  size?: Size;
  /** Navigation items - USES STANDARD NavigationItem INTERFACE */
  navigation?: NavigationItem[];
  /** Current path for active states */
  currentPath?: string;
  /** Navigation handler - FIXED PARAMETER NAME */
  onNavigate?: (href: string, item: NavigationItem) => void;
  /** Dashboard title */
  title?: string;
  /** Logo component */
  logo?: React.ReactNode;
  /** Header actions (buttons, theme toggle, etc.) */
  headerActions?: React.ReactNode;
  /** Custom sidebar content (overrides navigation) */
  sidebarContent?: React.ReactNode;
  /** Sidebar footer content */
  sidebarFooter?: React.ReactNode;
  /** Whether sidebar is collapsible */
  collapsible?: boolean;
  /** Default sidebar open state */
  defaultSidebarOpen?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Main content */
  children: React.ReactNode;
}

/**
 * Enhanced Admin Layout with standardized scheme + tone system - FIXED PROPS
 */
const AdminLayoutComponent = forwardRef<HTMLDivElement, AdminLayoutProps>(({ 
  className,
  scheme = 'sidebar',
  tone = 'subtle',
  size = 'lg',
  navigation = [],
  currentPath = '',
  onNavigate = () => {},
  title = 'Admin Panel',
  logo,
  headerActions,
  sidebarContent,
  sidebarFooter,
  collapsible = true,
  defaultSidebarOpen = true,
  children,
}, ref) => {
  const [sidebarOpen, setSidebarOpen] = useState(defaultSidebarOpen);
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const config = getSizeConfig(size);

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      if (mobile && defaultSidebarOpen === true) {
        setSidebarOpen(false);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [defaultSidebarOpen]);

  // Handle scroll for header effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobile && sidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobile, sidebarOpen]);

  // Toggle sidebar
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Sidebar scheme - only render for sidebar and hybrid schemes
  const renderSidebar = () => {
    if (scheme === 'topbar') return null;

    return (
      <>
        {/* Mobile Overlay */}
        {isMobile && sidebarOpen && (
          <div 
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
            onClick={() => setSidebarOpen(false)}
            aria-hidden="true"
          />
        )}

        {/* Sidebar */}
        <aside className={cn(
          sidebarVariants({ size, tone }),
          isMobile ? [
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          ] : [
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          ]
        )}>
          <div className="flex flex-col h-full">
            {/* Sidebar Header */}
            <div className={cn(
              'flex items-center justify-between border-b flex-shrink-0',
              config.sidebarHeader,
              tone === 'subtle' && 'border-border/20 bg-muted/20',
              tone === 'brand' && 'border-primary-foreground/20 bg-primary-foreground/10',
              tone === 'contrast' && 'border-zinc-800/40 bg-zinc-900/50'
            )}>
              <h2 className={cn(
                'font-semibold uppercase tracking-wider',
                tone === 'subtle' && 'text-muted-foreground',
                tone === 'brand' && 'text-primary-foreground/90',
                tone === 'contrast' && 'text-zinc-200',
                tone === 'clean' && 'text-muted-foreground'
              )}>
                Navigation
              </h2>
              
              {collapsible && isMobile && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleSidebar}
                  className={cn(
                    'flex-shrink-0',
                    tone === 'subtle' && 'text-muted-foreground hover:bg-muted hover:text-foreground',
                    tone === 'brand' && 'text-primary-foreground hover:bg-primary-foreground/20 hover:text-primary-foreground',
                    tone === 'contrast' && 'text-zinc-300 hover:bg-zinc-800 hover:text-zinc-100'
                  )}
                  aria-label="Close sidebar"
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>

            {/* Sidebar Content - Scrollable */}
            <div className="flex-1 overflow-y-auto">
              {sidebarContent || (
                <AdminNavigation
                  navigationItems={navigation}
                  currentPath={currentPath}
                  onNavigate={onNavigate}
                  size={size}
                  tone={tone}
                />
              )}
            </div>

            {/* Sidebar Footer */}
            {sidebarFooter && (
              <div className={cn(
                'flex-shrink-0 border-t',
                tone === 'subtle' && 'border-border/20 bg-muted/20',
                tone === 'brand' && 'border-primary-foreground/20 bg-primary-foreground/10',
                tone === 'contrast' && 'border-zinc-800/40 bg-zinc-900/50'
              )}>
                {sidebarFooter}
              </div>
            )}
          </div>
        </aside>
      </>
    );
  };

  // Calculate main content margin based on scheme and sidebar state
  const getMainContentMargin = () => {
    if (scheme === 'topbar') return '';
    if (isMobile) return '';
    const sizeMap = {
      sm: sidebarOpen ? 'lg:ml-48' : 'lg:ml-0',
      md: sidebarOpen ? 'lg:ml-64' : 'lg:ml-0', 
      lg: sidebarOpen ? 'lg:ml-80' : 'lg:ml-0',
      xl: sidebarOpen ? 'lg:ml-96' : 'lg:ml-0',
      full: sidebarOpen ? 'lg:ml-[28rem]' : 'lg:ml-0'
    };
    return sizeMap[size];
  };

  return (
    <div
      ref={ref}
      className={cn(adminVariants({ scheme, tone }), className)}
    >
      {/* Render sidebar for sidebar and hybrid schemes */}
      {renderSidebar()}

      {/* Main Content Area */}
      <div className={cn(
        'flex-1 flex flex-col min-w-0 transition-all duration-300 ease-in-out',
        getMainContentMargin()
      )}>
        {/* Top Header */}
        <header className={cn(
          headerVariants({ tone, sticky: true }),
          isScrolled && 'shadow-sm'
        )}>
          <div className={cn(
            'flex items-center justify-between px-4 lg:px-6',
            config.sidebarHeader
          )}>
            <div className="flex items-center gap-4 min-w-0">
              {/* Hamburger toggle */}
              {collapsible && (
                <button
                  className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                  onClick={toggleSidebar}
                  aria-label={sidebarOpen ? 'Close sidebar' : 'Open sidebar'}
                >
                  <Menu className="h-5 w-5" />
                </button>
              )}
              
              {/* Logo and Title */}
              <div className="flex items-center gap-3 min-w-0">
                {logo && (
                  <div className="flex-shrink-0">
                    {logo}
                  </div>
                )}
                <h1 className="text-lg font-semibold truncate">
                  {title}
                </h1>
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

AdminLayoutComponent.displayName = 'AdminLayout';

/**
 * AdminLayout with standardized props - FULLY ALIGNED
 */
const AdminLayout = AdminLayoutComponent;

export { AdminLayout };