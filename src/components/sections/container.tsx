/**
 * Container component with standardized prop naming and tone system
 * @module @voilajsx/uikit
 * @file src/components/sections/container.tsx
 */

import * as React from 'react';
import { forwardRef, useState, useEffect } from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronRight } from 'lucide-react';
import type { NavigationItem, Size } from '@/types';

/**
 * Container variants with tone-based styling and position support
 */
const containerVariants = cva(
  'w-full mx-auto',
  {
    variants: {
      tone: {
        clean: 'bg-white text-foreground',
        subtle: 'bg-muted/20 text-foreground',
        brand: 'bg-primary/10 text-foreground',
        contrast: 'bg-muted/40 text-foreground'
      },
      layout: {
        none: 'block p-1',
        'sidebar-left': 'flex flex-col md:flex-row min-h-screen overflow-visible gap-3 md:gap-4 p-1',
        'sidebar-right': 'flex flex-col md:flex-row min-h-screen overflow-visible gap-3 md:gap-4 p-1',
      },
      size: {
        sm: 'max-w-2xl',
        md: 'max-w-4xl',
        lg: 'max-w-6xl',
        xl: 'max-w-7xl',
        full: 'max-w-full',
      },
      position: {
        sticky: 'sticky top-0 z-20',
        fixed: 'fixed top-0 left-0 right-0 z-20',
        relative: 'relative'
      }
    },
    defaultVariants: {
      tone: 'clean',
      layout: 'none',
      size: 'xl',
      position: 'relative'
    },
  }
);

/**
 * Sidebar variants
 */
const sidebarVariants = cva(
  'flex-shrink-0 bg-background border-r border-border',
  {
    variants: {
      position: {
        left: 'order-first',
        right: 'order-last',
      },
      size: {
        sm: 'md:w-48 lg:w-52 xl:w-56',
        md: 'md:w-56 lg:w-64 xl:w-72',
        lg: 'md:w-64 lg:w-72 xl:w-80',
        xl: 'md:w-72 lg:w-80 xl:w-96',
        full: 'md:w-80 lg:w-96 xl:w-[28rem]',
      },
      sidebarPosition: {
        sticky: 'md:sticky md:top-0 md:h-screen md:overflow-y-auto',
        fixed: 'md:fixed md:top-0 md:h-screen md:overflow-y-auto',
        relative: 'md:h-full',
      },
    },
    defaultVariants: {
      position: 'left',
      size: 'md',
      sidebarPosition: 'relative',
    },
  }
);

/**
 * Main content variants
 */
const mainVariants = cva(
  'flex-1 min-w-0',
  {
    variants: {
      size: {
        sm: 'p-2',
        md: 'p-3',
        lg: 'p-4',
        xl: 'p-4',
        full: 'p-4',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

/**
 * Size configuration for navigation
 */
const getSizeConfig = (size: Size = 'md') => {
  const configs = {
    sm: {
      button: 'text-xs py-1.5 px-2 min-h-[28px]',
      icon: 'h-3 w-3 mr-2 flex-shrink-0',
      spacing: 'space-y-0.5',
      showBadges: false,
    },
    md: {
      button: 'text-sm py-2 px-3 min-h-[32px]',
      icon: 'h-4 w-4 mr-2 flex-shrink-0',
      spacing: 'space-y-1',
      showBadges: true,
    },
    lg: {
      button: 'text-sm py-2.5 px-4 min-h-[36px]',
      icon: 'h-4 w-4 mr-3 flex-shrink-0',
      spacing: 'space-y-1.5',
      showBadges: true,
    },
    xl: {
      button: 'text-sm py-2.5 px-4 min-h-[36px]',
      icon: 'h-4 w-4 mr-3 flex-shrink-0',
      spacing: 'space-y-1.5',
      showBadges: true,
    },
    full: {
      button: 'text-sm py-2.5 px-4 min-h-[36px]',
      icon: 'h-4 w-4 mr-3 flex-shrink-0',
      spacing: 'space-y-1.5',
      showBadges: true,
    },
  };
  
  return configs[size] || configs.md;
};

/**
 * Navigation renderer props
 */
interface NavigationRendererProps {
  navigation: NavigationItem[];
  size: Size;
  currentPath?: string;
  onNavigate?: (href: string, item: NavigationItem) => void;
}

/**
 * Navigation renderer component
 */
function NavigationRenderer({ 
  navigation, 
  size = 'md',
  currentPath = '',
  onNavigate 
}: NavigationRendererProps) {
  const [expandedItems, setExpandedItems] = useState(new Set<string>());
  const config = getSizeConfig(size);

  // Initialize with all expandable items open
  useEffect(() => {
    const expanded = new Set<string>();
    
    const addExpandableItems = (navItems: NavigationItem[]) => {
      navItems.forEach((item) => {
        if (item.items && item.items.length > 0) {
          expanded.add(item.key);
          addExpandableItems(item.items);
        }
      });
    };
    
    addExpandableItems(navigation);
    setExpandedItems(expanded);
  }, [navigation]);

  const toggleExpanded = (itemKey: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(itemKey)) {
      newExpanded.delete(itemKey);
    } else {
      newExpanded.add(itemKey);
    }
    setExpandedItems(newExpanded);
  };

  const handleItemClick = (item: NavigationItem) => {
    if (item.items && item.items.length > 0) {
      toggleExpanded(item.key);
    } else if (item.href && onNavigate) {
      onNavigate(item.href, item);
    } else if (item.onClick) {
      item.onClick();
    }
  };

  const renderNavItem = (item: NavigationItem, depth = 0): React.ReactNode => {
    const hasSubItems = item.items && item.items.length > 0;
    const isExpanded = expandedItems.has(item.key);
    const isActive = item.href ? currentPath === item.href : item.isActive;

    return (
      <div key={item.key} className="w-full">
        <Button
          variant={isActive ? 'secondary' : 'ghost'}
          className={cn(
            'w-full justify-start transition-all items-center',
            config.button,
            depth > 0 && 'ml-4 w-[calc(100%-1rem)]',
            item.className
          )}
          onClick={() => handleItemClick(item)}
        >
          {item.icon && <item.icon className={config.icon} />}
          <span className="flex-1 text-left truncate">{item.label}</span>
          
          {item.badge && config.showBadges && (
            <Badge variant="secondary" className="text-xs ml-auto">
              {item.badge}
            </Badge>
          )}
          
          {hasSubItems && (
            <ChevronRight 
              className={cn(
                'h-4 w-4 ml-2 transition-transform duration-200 text-muted-foreground',
                isExpanded && 'rotate-90'
              )} 
            />
          )}
        </Button>
        
        {hasSubItems && isExpanded && item.items && (
          <div className="mt-1 space-y-1">
            {item.items.map((subItem) =>
              renderNavItem(subItem, depth + 1)
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <nav className={cn('w-full p-3', config.spacing)}>
      {navigation.map((item) => renderNavItem(item))}
    </nav>
  );
}

/**
 * Container Sidebar props
 */
interface ContainerSidebarProps {
  content?: React.ReactNode | NavigationItem[];
  position?: 'left' | 'right';
  size?: Size;
  sidebarPosition?: 'sticky' | 'fixed' | 'relative';
  currentPath?: string;
  onNavigate?: (href: string, item: NavigationItem) => void;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Container Sidebar component
 */
const ContainerSidebar = forwardRef<HTMLDivElement, ContainerSidebarProps>(({ 
  content,
  position = 'left',
  size = 'md',
  sidebarPosition = 'relative',
  currentPath = '',
  onNavigate,
  className,
  style,
}, ref) => {
  
  if (!content) return null;

  const [headerHeight, setHeaderHeight] = useState(0);

  // Header height detection for sticky positioning
  useEffect(() => {
    if (sidebarPosition === 'relative') return;

    const updateHeight = () => {
      const header = document.querySelector('header');
      setHeaderHeight(header ? header.offsetHeight : 0);
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, [sidebarPosition]);

  // Render content based on type
  const renderContent = () => {
    if (Array.isArray(content)) {
      return (
        <NavigationRenderer 
          navigation={content} 
          size={size}
          currentPath={currentPath}
          onNavigate={onNavigate}
        />
      );
    }
    return <div className="p-3">{content}</div>;
  };

  return (
    <aside 
      ref={ref}
      className={cn(
        sidebarVariants({ position, size, sidebarPosition }),
        className
      )}
      style={sidebarPosition !== 'relative' ? { ...style, top: `${headerHeight + 10}px` } : style}
    >
      {renderContent()}
    </aside>
  );
});

ContainerSidebar.displayName = 'ContainerSidebar';

/**
 * Container Main props
 */
interface ContainerMainProps {
  size?: Size;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Container Main content area
 */
const ContainerMain = forwardRef<HTMLDivElement, ContainerMainProps>(({ 
  size = 'md',
  children,
  className,
  style,
}, ref) => (
  <main 
    ref={ref}
    className={cn(mainVariants({ size }), className)}
    style={style}
  >
    {children}
  </main>
));

ContainerMain.displayName = 'ContainerMain';

/**
 * Container component props with standardized system
 */
export interface ContainerProps {
  /** Visual styling tone */
  tone?: 'clean' | 'subtle' | 'brand' | 'contrast';
  /** Container positioning */
  position?: 'sticky' | 'fixed' | 'relative';
  /** Sidebar position */
  sidebar?: 'none' | 'left' | 'right';
  /** Navigation items (takes priority over sidebarContent) */
  navigation?: NavigationItem[];
  /** Custom sidebar content (for JSX content) */
  sidebarContent?: React.ReactNode;
  /** Current path for active states */
  currentPath?: string;
  /** Navigation handler */
  onNavigate?: (href: string, item: NavigationItem) => void;
  /** Whether sidebar should be sticky */
  sidebarPosition?: 'sticky' | 'fixed' | 'relative';
  /** Container size */
  size?: Size;
  /** Container content */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Inline styles */
  style?: React.CSSProperties;
}

/**
 * Main Container component with standardized props
 */
const ContainerComponent = forwardRef<HTMLDivElement, ContainerProps>(({ 
  className,
  style,
  tone = 'clean',
  position = 'relative',
  sidebar = 'none',
  navigation = [],
  sidebarContent,
  currentPath = '',
  onNavigate,
  sidebarPosition = 'relative',
  size = 'xl',
  children,
}, ref) => {
  
  // Determine layout
  const layout = sidebar === 'left' ? 'sidebar-left' : 
                sidebar === 'right' ? 'sidebar-right' : 'none';
  
  const hasSidebar = sidebar !== 'none' && (navigation.length > 0 || sidebarContent);

  // Determine sidebar content: navigation takes priority
  const finalSidebarContent = navigation.length > 0 ? navigation : sidebarContent;

  return (
    <div 
      ref={ref}
      className={cn(containerVariants({ tone, layout, size, position }), className)}
      style={style}
    >
      {/* Left Sidebar */}
      {hasSidebar && sidebar === 'left' && (
        <ContainerSidebar 
          content={finalSidebarContent}
          position="left"
          size={size}
          sidebarPosition={sidebarPosition}
          currentPath={currentPath}
          onNavigate={onNavigate}
        />
      )}
      
      {/* Main Content */}
      <ContainerMain size={size}>
        {children}
      </ContainerMain>
      
      {/* Right Sidebar */}
      {hasSidebar && sidebar === 'right' && (
        <ContainerSidebar 
          content={finalSidebarContent}
          position="right"
          size={size}
          sidebarPosition={sidebarPosition}
          currentPath={currentPath}
          onNavigate={onNavigate}
        />
      )}
    </div>
  );
});

ContainerComponent.displayName = 'Container';

/**
 * Container with compound components
 */
const Container = Object.assign(ContainerComponent, {
  Sidebar: ContainerSidebar,
  Main: ContainerMain,
});

/**
 * Export Container with compound components and individual components
 */
export { Container, ContainerSidebar, ContainerMain };