/**
 * @fileoverview Table template for @voilajsx/uikit
 * @description Layout template optimized for data tables and list pages
 * @package @voilajsx/uikit
 * @file /src/templates/table.jsx
 */

import { forwardRef } from "react";
import { cn } from "../lib/utils";
import { Header } from "../components/layouts/header";
import { Container } from "../components/layouts/container";
import { Input } from "../components/ui/input";

/**
 * Table layout template with header, search/filter area, and table content
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {string} [props.title] - Page title
 * @param {React.ReactNode} [props.actions] - Action buttons (add, export, etc.)
 * @param {boolean} [props.searchable=false] - Show search input
 * @param {string} [props.searchPlaceholder="Search..."] - Search placeholder text
 * @param {Function} [props.onSearch] - Search handler
 * @param {React.ReactNode} [props.filters] - Filter components
 * @param {React.ReactNode} props.children - Table content
 * @returns {JSX.Element} Table template component
 */
const TableTemplate = forwardRef(({ 
  className,
  title,
  actions,
  searchable = false,
  searchPlaceholder = "Search...",
  onSearch,
  filters,
  children,
  ...props 
}, ref) => {
  return (
    <div
      ref={ref}
      className={cn("flex min-h-screen flex-col", className)}
      {...props}
    >
      {/* Header with title and actions */}
      <Header>
        <Container className="flex h-14 items-center justify-between">
          {title && (
            <h1 className="text-xl font-semibold">{title}</h1>
          )}
          {actions && (
            <div className="flex items-center space-x-2">
              {actions}
            </div>
          )}
        </Container>
      </Header>

      {/* Main content */}
      <main className="flex-1 py-6">
        <Container>
          {/* Search and filters section */}
          {(searchable || filters) && (
            <div className="mb-6 flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
              {/* Search */}
              {searchable && (
                <div className="flex-1 md:max-w-sm">
                  <Input
                    placeholder={searchPlaceholder}
                    onChange={(e) => onSearch?.(e.target.value)}
                    className="w-full"
                  />
                </div>
              )}

              {/* Filters */}
              {filters && (
                <div className="flex items-center space-x-2">
                  {filters}
                </div>
              )}
            </div>
          )}

          {/* Table content */}
          <div className="rounded-md border">
            {children}
          </div>
        </Container>
      </main>
    </div>
  );
});

TableTemplate.displayName = "TableTemplate";

export { TableTemplate };