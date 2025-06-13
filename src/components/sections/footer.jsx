/**
 * @fileoverview Simplified Footer component with consistent prop naming
 * @description Flexible footer component with standardized props and 5-column layout
 * @package @voilajsx/uikit
 * @file /src/components/sections/footer.jsx
 */

import React, { forwardRef, createContext, useContext } from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

/**
 * Footer context for variant sharing
 */
const FooterContext = createContext({});

/**
 * Footer variants defined with class-variance-authority
 */
const footerVariants = cva(
  "w-full border-t transition-all duration-200",
  {
    variants: {
      variant: {
        default: [
          "bg-background border-border",
          "text-foreground"
        ],
        muted: [
          "bg-muted/30 border-border/50",
          "text-foreground"
        ],
        dark: [
          "bg-secondary border-border",
          "text-secondary-foreground"
        ]
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);

/**
 * Container variants for content width and spacing control
 */
const containerVariants = cva(
  "mx-auto",
  {
    variants: {
      size: {
        sm: "max-w-2xl py-4 px-4",
        md: "max-w-4xl py-5 px-4 sm:px-6",
        lg: "max-w-6xl py-6 px-4 sm:px-6 lg:px-8",
        xl: "max-w-7xl py-6 px-4 sm:px-6 lg:px-8",
        full: "max-w-full py-8 px-4 sm:px-6 lg:px-8"
      }
    },
    defaultVariants: {
      size: "xl"
    }
  }
);

/**
 * Main Footer component - Simplified with consistent props
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {'default'|'muted'|'dark'} [props.variant='default'] - Footer variant
 * @param {'sm'|'md'|'lg'|'xl'|'full'} [props.size='xl'] - Footer size (width + padding + spacing)
 * @param {React.ReactNode} props.children - Footer content
 * @returns {JSX.Element} Footer component
 */
const Footer = forwardRef(({ 
  className,
  variant = "default",
  size = "xl",
  children,
  ...props 
}, ref) => {
  return (
    <FooterContext.Provider value={{ variant, size }}>
      <footer
        ref={ref}
        className={cn(footerVariants({ variant }), className)}
        {...props}
      >
        <div className={cn(containerVariants({ size }))}>
          {children}
        </div>
      </footer>
    </FooterContext.Provider>
  );
});

Footer.displayName = "Footer";

/**
 * Basic Footer - Simple row layout with navigation links
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {React.ReactNode} [props.logo] - Footer logo/brand
 * @param {Array} [props.links=[]] - Navigation links
 * @param {React.ReactNode} [props.social] - Social media links
 * @param {React.ReactNode} [props.copyright] - Copyright text
 * @returns {JSX.Element} Basic footer layout
 */
const FooterBasic = forwardRef(({
  className,
  logo,
  links = [],
  social,
  copyright,
  ...props
}, ref) => {
  const { variant } = useContext(FooterContext);

  // Get variant-specific link styles
  const getLinkStyles = () => {
    switch (variant) {
      case 'muted':
        return "text-muted-foreground hover:text-foreground";
      case 'dark':
        return "text-secondary-foreground/70 hover:text-secondary-foreground";
      default:
        return "text-muted-foreground hover:text-foreground";
    }
  };

  return (
    <div 
      ref={ref}
      className={cn("space-y-4", className)}
      {...props}
    >
      {/* Main row with logo, links, and social */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Logo */}
        {logo && (
          <div className="flex-shrink-0">
            {logo}
          </div>
        )}

        {/* Navigation Links */}
        {links.length > 0 && (
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {links.map((link, index) => (
              <button
                key={link.key || index}
                onClick={link.onClick}
                className={cn(
                  "text-sm transition-colors cursor-pointer",
                  getLinkStyles(),
                  link.className
                )}
              >
                {link.label}
              </button>
            ))}
          </nav>
        )}

        {/* Social Links */}
        {social && (
          <div className="flex-shrink-0">
            {social}
          </div>
        )}
      </div>

      {/* Copyright */}
      {copyright && (
        <>
          <Separator />
          <div className="text-center">
            <p className={cn(
              "text-sm",
              variant === 'dark' 
                ? "text-secondary-foreground/60" 
                : "text-muted-foreground"
            )}>
              {copyright}
            </p>
          </div>
        </>
      )}
    </div>
  );
});

FooterBasic.displayName = "FooterBasic";

/**
 * Advanced Footer - Multi-column layout with organized sections (up to 5 columns)
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {React.ReactNode} [props.brand] - Brand section (logo + description)
 * @param {Array} [props.columns=[]] - Footer columns with links
 * @param {React.ReactNode} [props.newsletter] - Newsletter signup
 * @param {React.ReactNode} [props.social] - Social media links
 * @param {React.ReactNode} [props.legal] - Legal links (privacy, terms, etc.)
 * @param {React.ReactNode} [props.copyright] - Copyright text
 * @returns {JSX.Element} Advanced footer layout
 */
const FooterAdvanced = forwardRef(({
  className,
  brand,
  columns = [],
  newsletter,
  social,
  legal,
  copyright,
  ...props
}, ref) => {
  const { variant } = useContext(FooterContext);

  // Get variant-specific styles
  const getTextStyles = () => {
    switch (variant) {
      case 'muted':
        return {
          heading: "text-foreground",
          text: "text-muted-foreground",
          link: "text-muted-foreground hover:text-foreground"
        };
      case 'dark':
        return {
          heading: "text-secondary-foreground",
          text: "text-secondary-foreground/70",
          link: "text-secondary-foreground/70 hover:text-secondary-foreground"
        };
      default:
        return {
          heading: "text-foreground",
          text: "text-muted-foreground",
          link: "text-muted-foreground hover:text-foreground"
        };
    }
  };

  const styles = getTextStyles();

  // Calculate grid configuration for main content
  const getTotalColumnsCount = () => {
    let count = 0;
    if (brand) count += 1;
    if (columns.length > 0) count += Math.min(columns.length, 4);
    if (newsletter) count += 1;
    return Math.min(count, 5); // Maximum 5 columns on large screens
  };

  const totalColumns = getTotalColumnsCount();

  // Determine grid class based on total columns
  const getMainGridClass = () => {
    if (totalColumns <= 1) return "lg:grid-cols-1";
    if (totalColumns === 2) return "lg:grid-cols-2";
    if (totalColumns === 3) return "lg:grid-cols-3";
    if (totalColumns === 4) return "lg:grid-cols-4";
    return "lg:grid-cols-5"; // 5 or more columns
  };

  return (
    <div 
      ref={ref}
      className={cn("space-y-8", className)}
      {...props}
    >
      {/* Main Content Grid */}
      <div>
        {/* Mobile Layout - Show only on mobile */}
        <div className="block lg:hidden space-y-6">
          {/* Brand Section - Full width on mobile */}
          {brand && (
            <div className="space-y-4">
              {brand}
            </div>
          )}

          {/* Navigation Columns - 2 columns on mobile */}
          {columns.length > 0 && (
            <div className="grid grid-cols-2 gap-6">
              {columns.slice(0, 4).map((column, index) => (
                <div key={column.key || index} className="space-y-3">
                  <h4 className={cn("text-sm font-semibold", styles.heading)}>
                    {column.title}
                  </h4>
                  <ul className="space-y-2">
                    {column.links?.map((link, linkIndex) => (
                      <li key={link.key || linkIndex}>
                        <button
                          onClick={link.onClick}
                          className={cn(
                            "text-sm transition-colors cursor-pointer block",
                            styles.link,
                            link.className
                          )}
                        >
                          {link.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {/* Newsletter Section - Full width on mobile */}
          {newsletter && (
            <div className="space-y-4">
              {newsletter}
            </div>
          )}
        </div>

        {/* Desktop Layout - Show only on large screens */}
        <div className="hidden lg:block">
          <div className={cn("grid gap-8", getMainGridClass())}>
            {/* Brand Section */}
            {brand && (
              <div className="space-y-4">
                {brand}
              </div>
            )}

            {/* Navigation Columns (Up to 4) */}
            {columns.slice(0, 4).map((column, index) => (
              <div key={column.key || index} className="space-y-3">
                <h4 className={cn("text-sm font-semibold", styles.heading)}>
                  {column.title}
                </h4>
                <ul className="space-y-2">
                  {column.links?.map((link, linkIndex) => (
                    <li key={link.key || linkIndex}>
                      <button
                        onClick={link.onClick}
                        className={cn(
                          "text-sm transition-colors cursor-pointer block",
                          styles.link,
                          link.className
                        )}
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Newsletter Section */}
            {newsletter && (
              <div className="space-y-4">
                {newsletter}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Additional Columns Row - 5th column and beyond */}
      {columns.length > 4 && (
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
          {columns.slice(4).map((column, index) => (
            <div key={column.key || (index + 4)} className="space-y-3">
              <h4 className={cn("text-sm font-semibold", styles.heading)}>
                {column.title}
              </h4>
              <ul className="space-y-2">
                {column.links?.map((link, linkIndex) => (
                  <li key={link.key || linkIndex}>
                    <button
                      onClick={link.onClick}
                      className={cn(
                        "text-sm transition-colors cursor-pointer block",
                        styles.link,
                        link.className
                      )}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {/* Bottom Section */}
      <div className="space-y-4">
        <Separator />
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          {copyright && (
            <p className={cn("text-sm", styles.text)}>
              {copyright}
            </p>
          )}

          {/* Legal Links */}
          {legal && (
            <div className="flex items-center gap-4">
              {legal}
            </div>
          )}

          {/* Social Links */}
          {social && (
            <div className="flex items-center gap-2">
              {social}
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

FooterAdvanced.displayName = "FooterAdvanced";

/**
 * Footer Brand component for advanced layout
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {React.ReactNode} [props.logo] - Brand logo
 * @param {string} [props.description] - Brand description
 * @param {React.ReactNode} [props.contact] - Contact information
 * @returns {JSX.Element} Footer brand section
 */
const FooterBrand = forwardRef(({
  className,
  logo,
  description,
  contact,
  ...props
}, ref) => {
  const { variant } = useContext(FooterContext);

  const textClass = variant === 'dark' 
    ? "text-secondary-foreground/70" 
    : "text-muted-foreground";

  return (
    <div 
      ref={ref}
      className={cn("space-y-4", className)}
      {...props}
    >
      {logo && (
        <div className="flex-shrink-0">
          {logo}
        </div>
      )}
      
      {description && (
        <p className={cn("text-sm leading-relaxed", textClass)}>
          {description}
        </p>
      )}

      {contact && (
        <div className={cn("text-sm", textClass)}>
          {contact}
        </div>
      )}
    </div>
  );
});

FooterBrand.displayName = "FooterBrand";

/**
 * Footer Social component
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {Array} [props.links=[]] - Social media links
 * @returns {JSX.Element} Footer social links
 */
const FooterSocial = forwardRef(({
  className,
  links = [],
  ...props
}, ref) => {
  const { variant } = useContext(FooterContext);

  const getButtonStyles = () => {
    switch (variant) {
      case 'muted':
        return "text-muted-foreground hover:text-foreground hover:bg-background/50";
      case 'dark':
        return "text-secondary-foreground/70 hover:text-secondary-foreground hover:bg-secondary-foreground/10";
      default:
        return "text-muted-foreground hover:text-foreground hover:bg-muted";
    }
  };

  return (
    <div 
      ref={ref}
      className={cn("flex items-center gap-1", className)}
      {...props}
    >
      {links.map((link, index) => (
        <Button
          key={link.key || index}
          variant="ghost"
          size="icon"
          className={cn("h-8 w-8", getButtonStyles(), link.className)}
          onClick={link.onClick}
          title={link.label}
        >
          {link.icon && <link.icon className="h-4 w-4" />}
        </Button>
      ))}
    </div>
  );
});

FooterSocial.displayName = "FooterSocial";

// Attach compound components to Footer
Footer.Basic = FooterBasic;
Footer.Advanced = FooterAdvanced;
Footer.Brand = FooterBrand;
Footer.Social = FooterSocial;

export { 
  Footer,
  FooterBasic,
  FooterAdvanced,
  FooterBrand,
  FooterSocial,
  footerVariants,
  containerVariants
};