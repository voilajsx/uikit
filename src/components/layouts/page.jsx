/**
 * @fileoverview Simplified Page template with consistent prop naming
 * @description Clean page layout using compound components with standardized props
 * @package @voilajsx/uikit
 * @file /src/components/layouts/page.jsx
 */

import { forwardRef, createContext, useContext } from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";
import { Header, HeaderLogo, HeaderNav } from "../sections/header";
import { Footer } from "../sections/footer";

/**
 * Page context for sharing configuration
 */
const PageContext = createContext({});

/**
 * Page layout variants
 */
const pageVariants = cva(
  "min-h-screen flex flex-col",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        minimal: "bg-background text-foreground", 
        contained: "bg-muted/30",
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);

/**
 * Main Page Layout Component - Simplified with consistent props
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {'default'|'minimal'|'contained'} [props.variant='default'] - Page layout variant
 * @param {'sm'|'md'|'lg'|'xl'|'full'} [props.size='xl'] - Page width and spacing
 * @param {React.ReactNode} props.children - Page sections (Header, Content, Footer)
 * @returns {JSX.Element} Page layout container
 */
const Page = forwardRef(({
  className,
  variant = "default",
  size = "xl",
  children,
  ...props
}, ref) => {
  
  const pageConfig = { 
    variant, 
    size
  };

  return (
    <PageContext.Provider value={pageConfig}>
      <div
        ref={ref}
        className={cn(pageVariants({ variant }), className)}
        {...props}
      >
        {children}
      </div>
    </PageContext.Provider>
  );
});

Page.displayName = "Page";

/**
 * Page Header component
 * @param {Object} props - Component props
 * @param {'default'|'primary'|'black'} [props.variant='default'] - Header style variant
 * @param {'sm'|'md'|'lg'|'xl'|'full'} [props.size] - Header size (inherits from Page if not specified)
 * @param {boolean} [props.sticky=true] - Whether header should be sticky
 * @param {React.ReactNode} props.children - Header content
 * @returns {JSX.Element} Page header
 */
const PageHeader = forwardRef(({
  variant = "default",
  size,
  sticky = true,
  children,
  ...props
}, ref) => {
  const { size: pageSize } = usePage();
  
  return (
    <Header
      ref={ref}
      variant={variant}
      size={size || pageSize} // Use prop or inherit from Page
      sticky={sticky}
      {...props}
    >
      {children}
    </Header>
  );
});

PageHeader.displayName = "PageHeader";

/**
 * Page Content outer container variants - handles flex and background
 */
const pageContentVariants = cva(
  "flex-1 w-full"
);

/**
 * Page Content inner container variants - handles width and spacing
 */
const pageContentInnerVariants = cva(
  "mx-auto py-6",
  {
    variants: {
      size: {
        sm: "max-w-2xl px-4",
        md: "max-w-4xl px-4 sm:px-6", 
        lg: "max-w-6xl px-4 sm:px-6 lg:px-8",
        xl: "max-w-7xl px-4 sm:px-6 lg:px-8",
        full: "max-w-full px-4 sm:px-6 lg:px-8",
      },
    },
    defaultVariants: {
      size: "xl",
    },
  }
);

/**
 * Page Content component - Main content area
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {'sm'|'md'|'lg'|'xl'|'full'} [props.size] - Content size (inherits from Page if not specified)
 * @param {React.ReactNode} props.children - Main content
 * @returns {JSX.Element} Page content area
 */
const PageContent = forwardRef(({ 
  className, 
  size,
  children, 
  ...props 
}, ref) => {
  const { size: pageSize } = usePage();
  const contentSize = size || pageSize;
  
  return (
    <main 
      ref={ref} 
      className={cn(pageContentVariants(), className)} 
      {...props}
    >
      <div className={cn(pageContentInnerVariants({ size: contentSize }))}>
        {children}
      </div>
    </main>
  );
});

PageContent.displayName = "PageContent";

/**
 * Page Footer component
 * @param {Object} props - Component props
 * @param {'default'|'muted'|'dark'} [props.variant='default'] - Footer style variant
 * @param {'sm'|'md'|'lg'|'xl'|'full'} [props.size] - Footer size (inherits from Page if not specified)
 * @param {React.ReactNode} props.children - Footer content
 * @returns {JSX.Element} Page footer
 */
const PageFooter = forwardRef(({ 
  variant = "default",
  size,
  children, 
  ...props 
}, ref) => {
  const { size: pageSize } = usePage();
  
  return (
    <Footer 
      ref={ref} 
      variant={variant}
      size={size || pageSize} // Use prop or inherit from Page
      {...props}
    >
      {children}
    </Footer>
  );
});

PageFooter.displayName = "PageFooter";

/**
 * Hook to access page configuration
 * @returns {Object} Page configuration context
 */
const usePage = () => {
  const context = useContext(PageContext);
  if (!context) {
    throw new Error('usePage must be used within a Page component');
  }
  return context;
};

// Attach compound components
Page.Header = PageHeader;
Page.Content = PageContent;
Page.Footer = PageFooter;

// Re-export header compound components for convenience
Page.Logo = HeaderLogo;
Page.Nav = HeaderNav;

export { 
  Page, 
  PageHeader, 
  PageContent, 
  PageFooter,
  usePage,
  pageVariants 
};