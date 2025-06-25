/**
 * Enhanced DataTable component with built-in search and sort functionality
 * @module @voilajsx/uikit
 * @file src/components/ui/data-table.tsx
 */
import * as React from 'react';
/**
 * Column definition for DataTable
 */
export interface DataTableColumn<T = any> {
    /** Unique key for the column (should match data property) */
    key: string;
    /** Display title for the column header */
    title: string;
    /** Whether this column is sortable */
    sortable?: boolean;
    /** Custom render function for the cell */
    render?: (value: any, row: T) => React.ReactNode;
}
/**
 * DataTable component props
 */
export interface DataTableProps<T = any> {
    /** Column definitions */
    columns: DataTableColumn<T>[];
    /** Table data */
    data: T[];
    /** Enable search functionality */
    searchable?: boolean;
    /** Enable sorting functionality */
    sortable?: boolean;
    /** Search placeholder text */
    searchPlaceholder?: string;
    /** Additional CSS classes */
    className?: string;
}
/**
 * Enhanced DataTable with search and sort functionality
 */
export declare function DataTable<T = any>({ columns, data, searchable, sortable, searchPlaceholder, className, }: DataTableProps<T>): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=data-table.d.ts.map