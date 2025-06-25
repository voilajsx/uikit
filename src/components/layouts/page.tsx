/**
 * Page Layout with standardized scheme + tone system
 * @module @voilajsx/uikit
 * @file src/components/layouts/page.tsx
 */

import * as React from 'react';
import { forwardRef, createContext, useContext } from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Header, HeaderLogo, HeaderNav } from '@/components/sections/header';
import { Footer } from '@/components/sections/footer';
import type { NavigationItem, Size, PageLayoutScheme, Tone } from '@/types';

/**
 * Page context for sharing configuration
 */
const PageContext = createContext<{
  scheme: PageLayoutScheme;
  tone: Tone;
  size: Size;
}>({
  scheme: 'default',
  tone: 'clean',
  size: 'xl',
});

/**
 * Page layout scheme variants - structural arrangements
 */
const pageVariants = cva(
  'min-h-screen flex flex-col',
  {
    variants: {
      scheme: {
        default: '',
        blog: 'lg:grid lg:grid-cols-[1fr_300px] lg:gap-8',
        docs: 'lg:grid lg:grid-cols-[250px_1fr] lg:gap-6',
        marketing: 'space-y-0'
      },
      tone: {
        clean: 'bg-background text-foreground',
        subtle: 'bg-muted/20 text-foreground',
        brand: 'bg-primary/5 text-foreground',
        contrast: 'bg-zinc-900 text-zinc-100'
      }
    },
    defaultVariants: {
      scheme: 'default',
      tone: 'clean'
    }
  }
);

/**
 * Page content variants based on scheme
 */
const pageContentVariants = cva(
  'flex-1 w-full',
  {
    variants: {
      scheme: {
        default: '',
        blog: 'lg:order-1',
        docs: 'lg:order-2',
        marketing: ''
      }
    },
    defaultVariants: {
      scheme: 'default'
    }
  }
);

/**
 * Page content inner variants
 */
const pageContentInnerVariants = cva(
  'mx-auto',
  {
    variants: {
      size: {
        sm: 'max-w-2xl px-4 py-6',
        md: 'max-w-4xl px-4 sm:px-6 py-8',
        lg: 'max-w-6xl px-4 sm:px-6 lg:px-8 py-8',
        xl: 'max-w-7xl px-4 sm:px-6 lg:px-8 py-8',
        full: 'max-w-full px-4 sm:px-6 lg:px-8 py-8',
      },
      scheme: {
        default: '',
        blog: 'lg:max-w-none lg:px-0',
        docs: 'lg:max-w-none lg:px-0',
        marketing: ''
      }
    },
    defaultVariants: {
      size: 'xl',
      scheme: 'default'
    },
  }
);

/**
 * Page sidebar variants
 */
const sidebarVariants = cva(
  'hidden lg:block',
  {
    variants: {
      scheme: {
        default: 'hidden',
        blog: 'lg:order-2 bg-muted/30 p-6',
        docs: 'lg:order-1 bg-muted/30 p-4 border-r border-border',
        marketing: 'hidden'
      }
    },
    defaultVariants: {
      scheme: 'default'
    }
  }
);

/**
 * Page Layout props with standardized system
 */
export interface PageLayoutProps {
  /** Layout structure/arrangement */
  scheme?: PageLayoutScheme;
  /** Visual styling tone */
  tone?: Tone;
  /** Page size (width and spacing) */
  size?: Size;
  /** Header positioning */
  position?: 'sticky' | 'fixed' | 'relative';
  /** Navigation items for header */
  navigation?: NavigationItem[];
  /** Current path for active states */
  currentPath?: string;
  /** Navigation handler */
  onNavigate?: (href: string, item: NavigationItem) => void;
  /** Page title */
  title?: string;
  /** Logo component */
  logo?: React.ReactNode;
  /** Header actions (buttons, theme toggle, etc.) */
  headerActions?: React.ReactNode;
  /** Sidebar content for blog/docs schemes */
  sidebarContent?: React.ReactNode;
  /** Footer navigation items */
  footerNavigation?: NavigationItem[];
  /** Footer content (if not using footerNavigation) */
  footerContent?: React.ReactNode;
  /** Copyright text for footer */
  copyright?: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Page content */
  children: React.ReactNode;
}

/**
 * Main PageLayout component with scheme + tone system
 */
const PageLayoutComponent = forwardRef<HTMLDivElement, PageLayoutProps>(({
  className,
  scheme = 'default',
  tone = 'clean',
  size = 'xl',
  position = 'sticky',
  navigation = [],
  currentPath = '',
  onNavigate,
  title,
  logo,
  headerActions,
  sidebarContent,
  footerNavigation = [],
  footerContent,
  copyright,
  children,
}, ref) => {
  
  // Use navigation or footerNavigation for footer
  const finalFooterNavigation = footerNavigation.length > 0 ? footerNavigation : navigation;

  // Determine footer tone based on page tone
  const footerTone = tone === 'clean' ? 'contrast' : tone;

  return (
    <PageContext.Provider value={{ scheme, tone, size }}>
      <div
        ref={ref}
        className={cn(pageVariants({ scheme, tone }), className)}
      >
        {/* Header */}
        <Header 
          tone={tone}
          size={size}
          position={position}
        >
          {/* Logo */}
          <HeaderLogo>
            {logo || (title && (
              <span className="text-xl font-bold">{title}</span>
            ))}
          </HeaderLogo>

          {/* Navigation */}
          {navigation.length > 0 && (
            <HeaderNav
              navigation={navigation}
              currentPath={currentPath}
              onNavigate={onNavigate}
            />
          )}

          {/* Header Actions */}
          {headerActions && (
            <div className="ml-auto flex items-center gap-2">
              {headerActions}
            </div>
          )}
        </Header>

        {/* Main Content Area with Scheme-based Layout */}
        <div className={cn('flex-1', scheme !== 'default' && 'lg:grid')}>
          {/* Sidebar for docs/blog schemes */}
          {(scheme === 'blog' || scheme === 'docs') && (
            <aside className={cn(sidebarVariants({ scheme }))}>
              {sidebarContent || (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">
                    {scheme === 'blog' ? 'Recent Posts' : 'Navigation'}
                  </h3>
                  {scheme === 'docs' && navigation.length > 0 && (
                    <nav className="space-y-2">
                      {navigation.map((item) => (
                        <button
                          key={item.key}
                          onClick={() => {
                            if (item.href && onNavigate) {
                              onNavigate(item.href, item);
                            } else if (item.onClick) {
                              item.onClick();
                            }
                          }}
                          className={cn(
                            'block w-full text-left px-3 py-2 rounded-md text-sm transition-colors',
                            item.href && currentPath === item.href
                              ? 'bg-primary text-primary-foreground'
                              : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                          )}
                        >
                          {item.label}
                        </button>
                      ))}
                    </nav>
                  )}
                </div>
              )}
            </aside>
          )}

          {/* Main Content */}
          <PageContent scheme={scheme} size={size}>
            {children}
          </PageContent>
        </div>

        {/* Footer */}
        <Footer 
          tone={footerTone}
          size={size}
        >
          {/* Footer Navigation */}
          {finalFooterNavigation.length > 0 && (
            <div className="flex flex-wrap justify-center gap-6 py-4">
              {finalFooterNavigation.map((item) => (
                <button
                  key={item.key}
                  onClick={() => {
                    if (item.href && onNavigate) {
                      onNavigate(item.href, item);
                    } else if (item.onClick) {
                      item.onClick();
                    }
                  }}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}

          {/* Custom Footer Content */}
          {footerContent}

          {/* Copyright */}
          {copyright && (
            <div className="text-center py-4 border-t border-border">
              <p className="text-sm text-muted-foreground">
                {copyright}
              </p>
            </div>
          )}
        </Footer>
      </div>
    </PageContext.Provider>
  );
});

PageLayoutComponent.displayName = 'PageLayout';

/**
 * Page Header props with standardized system
 */
export interface PageHeaderProps {
  /** Header tone (inherits from PageLayout if not specified) */
  tone?: Tone;
  /** Header size (inherits from PageLayout if not specified) */
  size?: Size;
  /** Header positioning */
  position?: 'sticky' | 'fixed' | 'relative';
  /** Navigation items */
  navigation?: NavigationItem[];
  /** Current path for active states */
  currentPath?: string;
  /** Navigation handler */
  onNavigate?: (href: string, item: NavigationItem) => void;
  /** Additional CSS classes */
  className?: string;
  /** Header content */
  children: React.ReactNode;
}

/**
 * Page Header component
 */
const PageHeader = forwardRef<HTMLElement, PageHeaderProps>(({
  tone,
  size,
  position = 'sticky',
  navigation = [],
  currentPath = '',
  onNavigate,
  className,
  children,
}, ref) => {
  const { tone: pageTone, size: pageSize } = usePage();
  
  return (
    <Header
      tone={tone || pageTone}
      size={size || pageSize}
      position={position}
      className={className}
    >
      {children}
      {navigation.length > 0 && (
        <HeaderNav
          navigation={navigation}
          currentPath={currentPath}
          onNavigate={onNavigate}
        />
      )}
    </Header>
  );
});

PageHeader.displayName = 'PageHeader';

/**
 * Page Content props
 */
export interface PageContentProps {
  /** Content scheme (inherits from PageLayout if not specified) */
  scheme?: PageLayoutScheme;
  /** Content size (inherits from PageLayout if not specified) */
  size?: Size;
  /** Additional CSS classes */
  className?: string;
  /** Content */
  children: React.ReactNode;
}

/**
 * Page Content component - Main content area
 */
const PageContent = forwardRef<HTMLElement, PageContentProps>(({ 
  scheme,
  size,
  className, 
  children,
}, ref) => {
  const { scheme: pageScheme, size: pageSize } = usePage();
  const contentScheme = scheme || pageScheme;
  const contentSize = size || pageSize;
  
  return (
    <main 
      ref={ref} 
      className={cn(pageContentVariants({ scheme: contentScheme }), className)}
    >
      <div className={cn(pageContentInnerVariants({ size: contentSize, scheme: contentScheme }))}>
        {children}
      </div>
    </main>
  );
});

PageContent.displayName = 'PageContent';

/**
 * Page Footer props with standardized system
 */
export interface PageFooterProps {
  /** Footer tone (inherits from PageLayout if not specified) */
  tone?: Tone;
  /** Footer size (inherits from PageLayout if not specified) */
  size?: Size;
  /** Footer navigation items */
  navigation?: NavigationItem[];
  /** Current path for active states */
  currentPath?: string;
  /** Navigation handler */
  onNavigate?: (href: string, item: NavigationItem) => void;
  /** Additional CSS classes */
  className?: string;
  /** Footer content */
  children: React.ReactNode;
}

/**
 * Page Footer component
 */
const PageFooter = forwardRef<HTMLElement, PageFooterProps>(({ 
  tone,
  size,
  navigation = [],
  currentPath = '',
  onNavigate,
  className,
  children,
}, ref) => {
  const { tone: pageTone, size: pageSize } = usePage();
  const footerTone = tone || (pageTone === 'clean' ? 'contrast' : pageTone);
  
  return (
    <Footer 
      tone={footerTone}
      size={size || pageSize}
      className={className}
    >
      {/* Navigation */}
      {navigation.length > 0 && (
        <div className="flex flex-wrap justify-center gap-6 py-4">
          {navigation.map((item) => (
            <button
              key={item.key}
              onClick={() => {
                if (item.href && onNavigate) {
                  onNavigate(item.href, item);
                } else if (item.onClick) {
                  item.onClick();
                }
              }}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
      {children}
    </Footer>
  );
});

PageFooter.displayName = 'PageFooter';

/**
 * Hook to access page configuration
 */
const usePage = () => {
  const context = useContext(PageContext);
  if (!context) {
    throw new Error('usePage must be used within a PageLayout component');
  }
  return context;
};

/**
 * PageLayout with compound components
 */
const PageLayout = Object.assign(PageLayoutComponent, {
  Header: PageHeader,
  Content: PageContent,
  Footer: PageFooter,
  Logo: HeaderLogo,
  Nav: HeaderNav,
});

/**
 * Export PageLayout with compound components and individual components
 */
export { 
  PageLayout,
  PageHeader,
  PageContent,
  PageFooter,
  usePage
};