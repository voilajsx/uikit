// src/layouts/HeaderFooterLayout.jsx
import React from 'react';
import { cn } from '../utils/cn';

/**
 * HeaderFooterLayout component for standard page layouts with optional fixed header and footer.
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components
 * @param {boolean} props.fixedHeader - Whether the header should be fixed
 * @param {boolean} props.fixedFooter - Whether the footer should be fixed
 * @param {string} props.className - Additional CSS classes
 */
const HeaderFooterLayout = ({ 
  children,
  fixedHeader = false,
  fixedFooter = false,
  className,
  ...props
}) => {
  return (
    <div 
      className={cn(
        'min-h-screen flex flex-col',
        className
      )} 
      {...props}
    >
      {children}
    </div>
  );
};

/**
 * Header component for the HeaderFooterLayout.
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components
 * @param {boolean} props.fixed - Whether the header should be fixed
 * @param {string} props.className - Additional CSS classes
 */
const Header = ({ 
  children, 
  className,
  fixed = false,
  ...props 
}) => (
  <header 
    className={cn(
      'bg-white border-b border-[var(--border-color-default)]',
      'w-full z-[var(--z-index-sticky)]',
      fixed ? 'fixed top-0 left-0' : '',
      className
    )} 
    {...props}
  >
    {children}
  </header>
);

/**
 * Content component for the HeaderFooterLayout.
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components
 * @param {boolean} props.headerFixed - Whether the header is fixed
 * @param {boolean} props.footerFixed - Whether the footer is fixed
 * @param {string} props.className - Additional CSS classes
 */
const Content = ({ 
  children, 
  className,
  headerFixed = false,
  footerFixed = false,
  ...props 
}) => (
  <main 
    className={cn(
      'flex-1',
      headerFixed && 'mt-[var(--header-height)]',
      footerFixed && 'mb-[var(--footer-height)]',
      className
    )} 
    {...props}
  >
    {children}
  </main>
);

/**
 * Footer component for the HeaderFooterLayout.
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components
 * @param {boolean} props.fixed - Whether the footer should be fixed
 * @param {string} props.className - Additional CSS classes
 */
const Footer = ({ 
  children, 
  className,
  fixed = false,
  ...props 
}) => (
  <footer 
    className={cn(
      'bg-[var(--bg-subtle)] border-t border-[var(--border-color-default)]',
      'w-full h-[var(--footer-height)] z-[var(--z-index-sticky)]',
      fixed ? 'fixed bottom-0 left-0' : '',
      className
    )} 
    {...props}
  >
    {children}
  </footer>
);

// Set display names for all components
HeaderFooterLayout.displayName = 'HeaderFooterLayout';
Header.displayName = 'HeaderFooterLayout.Header';
Content.displayName = 'HeaderFooterLayout.Content';
Footer.displayName = 'HeaderFooterLayout.Footer';

// Attach subcomponents to HeaderFooterLayout
HeaderFooterLayout.Header = Header;
HeaderFooterLayout.Content = Content;
HeaderFooterLayout.Footer = Footer;

export default HeaderFooterLayout;