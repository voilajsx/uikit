/**
 * Admin Layout - FIXED with proper flex layout
 * @module @voilajsx/uikit
 * @file src/components/layouts/admin.tsx
 */

import * as React from 'react';
import { forwardRef, createContext, useContext, useState, useEffect } from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tooltip, TooltipContent, TooltipProvider,  TooltipTrigger } from '@/components/ui/tooltip';
import { Menu, X, ChevronRight, ChevronDown } from 'lucide-react';
import type { NavigationItem, Size, Tone } from '@/types';

/**
 * AdminLayout schemes - meaningful admin variations
 * sidebar: Full navigation with icons + labels (classic)
 * compact: Icon-only navigation with click-to-expand (mobile-first)
 */
export type AdminLayoutScheme = 'sidebar' | 'compact';

/**
 * Admin context for sharing configuration across compound components
 */
const AdminContext = createContext<{
  scheme: AdminLayoutScheme;
  tone: Tone;
  size: Size;
  sidebarExpanded: boolean;
  setSidebarExpanded: (expanded: boolean) => void;
  isMobile: boolean;
}>({
  scheme: 'sidebar',
  tone: 'subtle',
  size: 'lg',
  sidebarExpanded: true,
  setSidebarExpanded: () => {},
  isMobile: false,
});

/**
 * Admin layout container variants - FLEX LAYOUT
 */
const adminVariants = cva(
  'min-h-screen flex bg-background',
  {
    variants: {
      tone: {
        clean: '',
        subtle: '',
        brand: '',
        contrast: ''
      }
    },
    defaultVariants: {
      tone: 'subtle'
    }
  }
);

/**
 * Sidebar variants - FIXED POSITIONING FOR MOBILE, FLEX FOR DESKTOP
 */
const sidebarVariants = cva(
  'border-r transition-all duration-300 ease-in-out flex flex-col',
  {
    variants: {
      scheme: {
        sidebar: '',           // Width set by size variant
        compact: ''            // Width set by size variant  
      },
      size: {
        sm: 'w-48',           // 192px - Small sidebar
        md: 'w-56',           // 224px - Medium sidebar  
        lg: 'w-64',           // 256px - Large sidebar (default)
        xl: 'w-72',           // 288px - Extra large sidebar
        full: 'w-80'          // 320px - Full width sidebar
      },
      compactSize: {
        sm: 'w-12',           // 48px - Small compact
        md: 'w-14',           // 56px - Medium compact
        lg: 'w-16',           // 64px - Large compact (default)
        xl: 'w-18',           // 72px - Extra large compact
        full: 'w-20'          // 80px - Full compact
      },
      mobile: {
        true: 'fixed left-0 top-0 z-50 h-full',  // Mobile: fixed positioning
        false: 'relative'                         // Desktop: normal flex
      },
      expanded: {
        true: 'translate-x-0',
        false: '-translate-x-full lg:translate-x-0'  // Only hide on mobile
      },
      compactExpanded: {
        true: '',              // Expand to full size when compact is opened
        false: ''
      },
      tone: {
        clean: 'bg-white border-border text-foreground',
        subtle: 'bg-muted border-border text-foreground', 
        brand: 'bg-primary/10 border-primary/20 text-foreground',
        contrast: 'bg-zinc-900 border-border text-zinc-100'
      }
    },
    compoundVariants: [
      // Compact expanded takes the same size as the current size setting
      {
        scheme: 'compact',
        compactExpanded: true,
        size: 'sm',
        class: 'w-48'  // Match sm size
      },
      {
        scheme: 'compact',
        compactExpanded: true,
        size: 'md',
        class: 'w-56'  // Match md size
      },
      {
        scheme: 'compact',
        compactExpanded: true,
        size: 'lg',
        class: 'w-64'  // Match lg size
      },
      {
        scheme: 'compact',
        compactExpanded: true,
        size: 'xl',
        class: 'w-72'  // Match xl size
      },
      {
        scheme: 'compact',
        compactExpanded: true,
        size: 'full',
        class: 'w-80'  // Match full size
      }
    ],
    defaultVariants: {
      scheme: 'sidebar',
      size: 'lg',
      compactSize: 'lg',
      mobile: false,
      expanded: true,
      compactExpanded: false,
      tone: 'subtle'
    }
  }
);

/**
 * Main content area - FLEX LAYOUT
 */
const mainContentVariants = cva(
  'flex-1 flex flex-col min-w-0',
  {
    variants: {
      mobile: {
        true: 'w-full',      // Mobile: full width
        false: 'flex-1'      // Desktop: flex remaining space
      }
    },
    defaultVariants: {
      mobile: false
    }
  }
);

/**
 * AdminLayout Root - Container with context
 */
export interface AdminLayoutProps {
  /** RECOMMENDED: Layout scheme (default: "sidebar") */
  scheme?: AdminLayoutScheme;
  /** RECOMMENDED: Visual styling tone (default: "subtle") */
  tone?: Tone;
  /** OPTIONAL: Layout size (default: "lg") */
  size?: Size;

  /** OPTIONAL: Sidebar positioning */
  position?: 'relative' | 'sticky' | 'fixed';
  /** OPTIONAL: Default sidebar state (default: true) */
  defaultSidebarOpen?: boolean;
  /** OPTIONAL: Additional CSS classes */
  className?: string;
  /** REQUIRED: Admin structure (Header, Sidebar, Content) */
  children: React.ReactNode;
}

/**
 * AdminLayout Root Component - FIXED LAYOUT with auto-wrapping
 */
const AdminLayoutRoot = forwardRef<HTMLDivElement, AdminLayoutProps>(({
  scheme = 'sidebar',
  tone = 'subtle',
  size = 'lg',
  position = 'relative', // Add this line
  defaultSidebarOpen = true,
  className,
  children,
}, ref) => {
  const [sidebarExpanded, setSidebarExpanded] = useState(defaultSidebarOpen);
  const [isMobile, setIsMobile] = useState(false);

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      if (mobile) {
        setSidebarExpanded(false);
      } else {
        setSidebarExpanded(defaultSidebarOpen);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [defaultSidebarOpen]);

  // Prevent body scroll when mobile sidebar is open
  useEffect(() => {
    if (isMobile && sidebarExpanded) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobile, sidebarExpanded]);

  // Auto-wrap Header + Content in main area
  const childrenArray = React.Children.toArray(children);
  const sidebar = childrenArray.find(child => 
    React.isValidElement(child) && child.type === AdminSidebar
  );
  const header = childrenArray.find(child => 
    React.isValidElement(child) && child.type === AdminHeader
  );
  const content = childrenArray.find(child => 
    React.isValidElement(child) && child.type === AdminContent
  );

  return (
    <AdminContext.Provider value={{ 
      scheme, 
      tone, 
      size, 
      sidebarExpanded, 
      setSidebarExpanded,
      isMobile 
    }}>
      <div
        ref={ref}
        className={cn(adminVariants({ tone }), className)}
      >
        {/* Sidebar Container - sticky positioning here */}
      {/* Sidebar Container - sticky positioning here */}
      <div className={cn(
        'flex-shrink-0',
        position === 'sticky' && 'sticky top-0 max-h-screen overflow-y-auto'
      )}>
        {sidebar}
      </div>
        
        {/* Main Area (Header + Content) */}
        <div className="flex-1 flex flex-col min-w-0">
          {header}
          {content}
        </div>
      </div>
    </AdminContext.Provider>
  );
});

AdminLayoutRoot.displayName = 'AdminLayout';

/**
 * AdminLayout.Sidebar - Navigation sidebar with FIXED layout
 */
export interface AdminSidebarProps {
  /** OPTIONAL: Sidebar tone (inherits from AdminLayout if not set) */
  tone?: Tone;
  /** OPTIONAL: Navigation items */
  navigation?: NavigationItem[];
  /** OPTIONAL: Current path for active states */
  currentPath?: string;
  /** OPTIONAL: Navigation handler */
  onNavigate?: (href: string, item: NavigationItem) => void;
  /** OPTIONAL: Logo component */
  logo?: React.ReactNode;
  /** OPTIONAL: Sidebar positioning */
  position?: 'relative' | 'sticky' | 'fixed';
  /** OPTIONAL: Sidebar footer content */
  footer?: React.ReactNode;
  /** OPTIONAL: Additional CSS classes */
  className?: string;
}

const AdminSidebar = forwardRef<HTMLElement, AdminSidebarProps>(({
  tone,
  navigation = [],
  currentPath = '',
  onNavigate,
  logo,
  position, // Add this line
  footer,
  className,
}, ref) => {
  const { scheme, tone: adminTone, size, sidebarExpanded, setSidebarExpanded, isMobile } = useAdmin();
  const [expandedMenus, setExpandedMenus] = useState(new Set<string>());
  const [compactExpanded, setCompactExpanded] = useState(false);

  const finalTone = tone || adminTone;
  const isCompact = scheme === 'compact';
  const showLabels = !isCompact || compactExpanded;

  // Handle compact mode expansion
  const handleCompactToggle = () => {
    if (isCompact) {
      setCompactExpanded(!compactExpanded);
    }
  };

  // Handle menu expansion
  const toggleMenu = (menuKey: string) => {
    const newExpanded = new Set(expandedMenus);
    if (newExpanded.has(menuKey)) {
      newExpanded.delete(menuKey);
    } else {
      newExpanded.add(menuKey);
    }
    setExpandedMenus(newExpanded);
  };

  // Get menu item styles
  const getMenuItemStyles = (isActive: boolean, isSubmenu = false) => {
    const baseStyles = isSubmenu 
  ? 'w-[92%] flex items-center transition-all duration-200 group text-left font-medium rounded-lg cursor-pointer'
  : 'w-full flex items-center transition-all duration-200 group text-left font-medium rounded-lg cursor-pointer';
    const padding = isSubmenu 
      ? (showLabels ? 'ml-4 px-3 py-2' : 'px-2 py-2') 
      : (showLabels ? 'px-3 py-2.5' : 'px-2 py-2.5 justify-center');
    
    let toneStyles = '';
    switch (finalTone) {
      case 'clean':
        toneStyles = isActive 
          ? 'bg-muted text-foreground shadow-sm' 
          : 'text-muted-foreground hover:text-foreground hover:bg-muted/50';
        break;
      case 'subtle':
        toneStyles = isActive 
          ? 'bg-background text-foreground shadow-sm' 
          : 'text-muted-foreground hover:text-foreground hover:bg-background/60';
        break;
      case 'brand':
        toneStyles = isActive 
          ? 'bg-primary-foreground/20 text-primary-foreground shadow-sm' 
          : 'text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10';
        break;
      case 'contrast':
        toneStyles = isActive 
           ? 'bg-muted/20 dark:bg-muted/20 text-white shadow-sm' 
          : ' text-white  hover:bg-muted/20';
        break;
      default:
        toneStyles = isActive 
          ? 'bg-muted/10 text-foreground   shadow-sm' 
          : 'text-muted-foreground hover:text-foreground hover:bg-muted/50';
    }
    
    return cn(baseStyles, padding, toneStyles);
  };

  // Menu item component
  const MenuItem = ({ item, isSubmenu = false }: { item: NavigationItem; isSubmenu?: boolean }) => {
    const hasSubmenu = !isSubmenu && item.items && item.items.length > 0;
    const isExpanded = expandedMenus.has(item.key);
    const isActive = item.href ? currentPath === item.href : Boolean(item.isActive);

    const handleClick = () => {
      if (isCompact && !compactExpanded) {
        setCompactExpanded(true);
        return;
      }

      if (hasSubmenu) {
        toggleMenu(item.key);
      } else if (item.href && onNavigate) {
        onNavigate(item.href, item);
      } else if (item.onClick) {
        item.onClick();
      }
    };

    const menuButton = (
      <button
        onClick={handleClick}
        className={getMenuItemStyles(isActive, isSubmenu)}
      >
        {!isSubmenu && item.icon && (
          <item.icon className={cn(
            'flex-shrink-0',
            showLabels ? 'h-4 w-4 mr-3' : 'h-5 w-5'
          )} />
        )}
        
        {showLabels && (
          <>
            <span className="flex-1 truncate text-left">{item.label}</span>
            
            {item.badge && (
              <Badge 
                variant={isActive ? 'secondary' : 'outline'} 
                className={cn(
                  "text-xs h-4 px-1 ml-1 flex-shrink-0",
                  // Badge colors based on tone
                  finalTone === 'brand' && !isActive && 'bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20',
                  finalTone === 'brand' && isActive && 'bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30',
                  finalTone === 'contrast' && !isActive && 'bg-zinc-700 text-zinc-300 border-zinc-600',
                  finalTone === 'contrast' && isActive && 'bg-zinc-600 text-zinc-100 border-zinc-500'
                )}
              >
                {item.badge}
              </Badge>
            )}
            
            {hasSubmenu && (
              <ChevronRight className={cn(
                'h-4 w-4 flex-shrink-0 transition-transform duration-200',
                isExpanded && 'rotate-90'
              )} />
            )}
          </>
        )}
      </button>
    );

    // In compact mode without labels, wrap in tooltip
    if (isCompact && !compactExpanded && !isSubmenu && item.icon) {
      return (
        <div key={item.key} className="w-full">
          <TooltipProvider>
            <Tooltip delayDuration={300}>
              <TooltipTrigger asChild>
                {menuButton}
              </TooltipTrigger>
              <TooltipContent 
                side="right" 
                className="bg-white text-black border border-gray-200 shadow-md [&>*[data-side]]:hidden"
              >
                <p>{item.label}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          {hasSubmenu && isExpanded && showLabels && item.items && (
            <div className="overflow-hidden transition-all duration-300 mt-1">
              <div className="space-y-1 pb-2">
                {item.items.map((subItem) => (
                  <MenuItem key={subItem.key} item={subItem} isSubmenu={true} />
                ))}
              </div>
            </div>
          )}
        </div>
      );
    }

    return (
      <div key={item.key} className="w-full">
        {menuButton}
        
        {hasSubmenu && isExpanded && showLabels && item.items && (
          <div className="overflow-hidden transition-all duration-300 mt-1">
            <div className="space-y-1 pb-2">
              {item.items.map((subItem) => (
                <MenuItem key={subItem.key} item={subItem} isSubmenu={true} />
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };
  console.log('Scheme:', scheme, 'Size:', size, 'IsCompact:', );
  return (
    <>
      {/* Mobile Overlay */}
      {isMobile && sidebarExpanded && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
          onClick={() => setSidebarExpanded(false)}
          aria-hidden="true"
        />
      )}
  
      {/* Sidebar */}
     <aside 
      ref={ref}
      className={cn(
        'border-r transition-all duration-300 ease-in-out flex flex-col',
        // Mobile positioning
        // Positioning based on prop and mobile state
        isMobile ? 'fixed left-0 top-0 z-50 h-full' : 'sticky top-0 h-screen',
        // Expansion state
        sidebarExpanded ? 'translate-x-0' : '-translate-x-full lg:translate-x-0',
        // Width based on scheme and size
        scheme === 'sidebar' && size === 'sm' && 'w-48',
        scheme === 'sidebar' && size === 'md' && 'w-56',
        scheme === 'sidebar' && size === 'lg' && 'w-64',
        scheme === 'sidebar' && size === 'xl' && 'w-72',
        scheme === 'sidebar' && size === 'full' && 'w-80',
        scheme === 'compact' && !compactExpanded && size === 'sm' && 'w-12',
        scheme === 'compact' && !compactExpanded && size === 'md' && 'w-14',
        scheme === 'compact' && !compactExpanded && size === 'lg' && 'w-16',
        scheme === 'compact' && !compactExpanded && size === 'xl' && 'w-18',
        scheme === 'compact' && !compactExpanded && size === 'full' && 'w-20',
        scheme === 'compact' && compactExpanded && size === 'sm' && 'w-48',
        scheme === 'compact' && compactExpanded && size === 'md' && 'w-56',
        scheme === 'compact' && compactExpanded && size === 'lg' && 'w-64',
        scheme === 'compact' && compactExpanded && size === 'xl' && 'w-72',
        scheme === 'compact' && compactExpanded && size === 'full' && 'w-80',
        // Tone colors - both sidebar and compact use header tone variants
        (scheme === 'sidebar' || scheme === 'compact') && finalTone === 'clean' && 'bg-background/90 backdrop-blur-sm border-border/40 text-foreground',
        (scheme === 'sidebar' || scheme === 'compact') && finalTone === 'subtle' && 'bg-muted/90 backdrop-blur-sm border-border/30 text-foreground',
        (scheme === 'sidebar' || scheme === 'compact') && finalTone === 'brand' && 'bg-primary border-primary-foreground/20 text-primary-foreground',
        (scheme === 'sidebar' || scheme === 'compact') && finalTone === 'contrast' && 'bg-zinc-900 border-zinc-700/40 text-zinc-100',
        className
      )}
    >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className={cn(
            'flex items-center shadow-sm  flex-shrink-0',
            showLabels ? 'justify-between h-16 px-4' : 'justify-center h-16 px-2'
          )}>
            {showLabels ? (
              <>
                {logo && (
                  <div className={cn(
                    "flex-shrink-0",
                    // Logo colors based on tone
                    finalTone === 'brand' && '[&_*]:text-primary-foreground',
                    finalTone === 'contrast' && '[&_*]:text-zinc-100'
                  )}>
                    {logo}
                  </div>
                )}
                {/* Close button for mobile OR compact expanded */}
                {(isMobile || (isCompact && compactExpanded)) && (
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => {
                      if (isMobile) {
                        setSidebarExpanded(false);
                      } else if (isCompact) {
                        setCompactExpanded(false);
                      }
                    }}
                    className="flex-shrink-0"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                )}
              </>
            ) : (
              <Button
                variant="ghost"
                size="icon"
                onClick={handleCompactToggle}
                className="flex-shrink-0"
              >
                <Menu className="h-4 w-4" />
              </Button>
            )}
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto">
            <nav className={cn('space-y-1', showLabels ? 'p-4' : 'p-2')}>
              {navigation.map((item) => (
                <MenuItem key={item.key} item={item} />
              ))}
            </nav>
          </div>

          {/* Sidebar Footer */}
          {footer && showLabels && (
            <>
               <Separator className={cn(
                  // Separator colors based on tone
                  finalTone === 'clean' && 'bg-border/40',
                  finalTone === 'subtle' && 'bg-border/30', 
                  finalTone === 'brand' && 'bg-primary-foreground/20',
                  finalTone === 'contrast' && 'bg-zinc-700/40'
                )} />
              <div className="flex-shrink-0 p-4">
                {footer}
              </div>
            </>
          )}
        </div>
      </aside>
    </>
  );
});

AdminSidebar.displayName = 'AdminSidebar';

/**
 * AdminLayout.Header - Top header with breadcrumbs and actions
 */
export interface AdminHeaderProps {
  /** OPTIONAL: Header tone (inherits from AdminLayout if not set) */
  tone?: Tone;
  /** OPTIONAL: Header size (inherits from AdminLayout if not set) */
  size?: Size;
  /** OPTIONAL: Page title */
  title?: string;
  /** OPTIONAL: Breadcrumb items */
  breadcrumbs?: { label: string; href?: string }[];
  /** OPTIONAL: Header actions (buttons, user menu, etc.) */
  actions?: React.ReactNode;
  /** OPTIONAL: Additional CSS classes */
  className?: string;
}

const AdminHeader = forwardRef<HTMLElement, AdminHeaderProps>(({
  tone,
  size,
  title,
  breadcrumbs = [],
  actions,
  className,
}, ref) => {
  const { sidebarExpanded, setSidebarExpanded, isMobile } = useAdmin();

  return (
    <header 
      ref={ref}
      className={cn(
        'w-full shadow-sm bg-muted/30 text-foreground flex-shrink-0',
        className
      )}
    >
      <div className="flex items-center justify-between px-4 lg:px-6 h-16">
        <div className="flex items-center gap-4 min-w-0">
         {/* Mobile hamburger toggle */}
        {isMobile && (
          <button
            className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            onClick={() => setSidebarExpanded(!sidebarExpanded)}
            aria-label={sidebarExpanded ? 'Close sidebar' : 'Open sidebar'}
          >
            <Menu className="h-5 w-5" />
          </button>
        )}
          
          {/* Title and Breadcrumbs */}
          <div className="min-w-0">
            
            {breadcrumbs.length > 0 && (
              <nav className="flex items-center gap-2  text-muted-foreground">
                {breadcrumbs.map((crumb, index) => (
                  <React.Fragment key={index}>
                    {index > 0 && <span>/</span>}
                    {crumb.href ? (
                      <button className="hover:text-foreground transition-colors">
                        {crumb.label}
                      </button>
                    ) : (
                      <span>{crumb.label}</span>
                    )}
                  </React.Fragment>
                ))}
              </nav>
            )}
          </div>
        </div>
        
        {/* Header Actions */}
        {actions && (
          <div className="flex-shrink-0">
            {actions}
          </div>
        )}
      </div>
    </header>
  );
});

AdminHeader.displayName = 'AdminHeader';

/**
 * AdminLayout.Content - Main content area with PROPER flex layout
 */
export interface AdminContentProps {
  /** OPTIONAL: Content tone (inherits from AdminLayout if not set) */
  tone?: Tone;
  /** OPTIONAL: Content size (inherits from AdminLayout if not set) */
  size?: Size;
  /** OPTIONAL: Additional CSS classes */
  className?: string;
  /** REQUIRED: Admin content */
  children: React.ReactNode;
}

const AdminContent = forwardRef<HTMLElement, AdminContentProps>(({
  tone,
  size,
  className,
  children,
}, ref) => {
  const { isMobile } = useAdmin();

  return (
    <div className={cn(mainContentVariants({ mobile: isMobile }))}>
      <main 
        ref={ref}
        className={cn('flex-1 min-w-0 overflow-auto', className)}
      >
        <div className="p-4 lg:p-6 w-full">
          <div className="w-full  mx-auto">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
});

AdminContent.displayName = 'AdminContent';

/**
 * Hook to access admin configuration
 */
const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within an AdminLayout component');
  }
  return context;
};

/**
 * AdminLayout - COMPOUND-ONLY Component
 */
const AdminLayout = Object.assign(AdminLayoutRoot, {
  Sidebar: AdminSidebar,
  Header: AdminHeader,
  Content: AdminContent,
});

/**
 * Export FIXED AdminLayout
 */
export { 
  AdminLayout,
  AdminSidebar,
  AdminHeader,
  AdminContent,
  useAdmin
};