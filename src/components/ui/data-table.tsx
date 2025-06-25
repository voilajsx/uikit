/**
 * Enhanced DataTable component with built-in search and sort functionality
 * @module @voilajsx/uikit
 * @file src/components/ui/data-table.tsx
 */

import * as React from 'react';
import { useState, useMemo } from 'react';
import { cn } from '@/lib/utils';
import { Input } from './input';
import { Button } from './button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './table';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';

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

type SortDirection = 'asc' | 'desc' | null;

/**
 * Enhanced DataTable with search and sort functionality
 */
export function DataTable<T = any>({
  columns,
  data,
  searchable = true,
  sortable = true,
  searchPlaceholder = 'Search...',
  className,
}: DataTableProps<T>) {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<SortDirection>(null);

  // Filter data based on search term
  const filteredData = useMemo(() => {
    if (!searchable || !searchTerm.trim()) return data;

    return data.filter((row) => {
      return columns.some((column) => {
        const value = (row as any)[column.key];
        if (value == null) return false;
        
        return String(value)
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
    });
  }, [data, searchTerm, columns, searchable]);

  // Sort filtered data
  const sortedData = useMemo(() => {
    if (!sortable || !sortColumn || !sortDirection) return filteredData;

    return [...filteredData].sort((a, b) => {
      const aValue = (a as any)[sortColumn];
      const bValue = (b as any)[sortColumn];

      // Handle null/undefined values
      if (aValue == null && bValue == null) return 0;
      if (aValue == null) return sortDirection === 'asc' ? -1 : 1;
      if (bValue == null) return sortDirection === 'asc' ? 1 : -1;

      // Handle different data types
      if (typeof aValue === 'string' && typeof bValue === 'string') {
        const comparison = aValue.localeCompare(bValue);
        return sortDirection === 'asc' ? comparison : -comparison;
      }

      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return sortDirection === 'asc' ? aValue - bValue : bValue - aValue;
      }

      // Fallback to string comparison
      const comparison = String(aValue).localeCompare(String(bValue));
      return sortDirection === 'asc' ? comparison : -comparison;
    });
  }, [filteredData, sortColumn, sortDirection, sortable]);

  // Handle column sort
  const handleSort = (columnKey: string) => {
    const column = columns.find(col => col.key === columnKey);
    if (!column?.sortable) return;

    if (sortColumn === columnKey) {
      // Cycle through: asc -> desc -> null
      if (sortDirection === 'asc') {
        setSortDirection('desc');
      } else if (sortDirection === 'desc') {
        setSortDirection(null);
        setSortColumn(null);
      }
    } else {
      setSortColumn(columnKey);
      setSortDirection('asc');
    }
  };

  // Get sort icon for column
  const getSortIcon = (columnKey: string) => {
    if (sortColumn !== columnKey) return null;
    if (sortDirection === 'asc') return <ChevronUp className="h-4 w-4" />;
    if (sortDirection === 'desc') return <ChevronDown className="h-4 w-4" />;
    return null;
  };

  return (
    <div className={cn('space-y-4', className)}>
      {/* Search Input */}
      {searchable && (
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder={searchPlaceholder}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-9"
          />
        </div>
      )}

      {/* Table */}
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              {columns.map((column) => (
                <TableHead key={column.key}>
                  {column.sortable && sortable ? (
                    <Button
                      variant="ghost"
                      className="h-auto p-0 font-semibold hover:bg-transparent"
                      onClick={() => handleSort(column.key)}
                    >
                      <span>{column.title}</span>
                      <div className="ml-2 flex h-4 w-4 items-center justify-center">
                        {getSortIcon(column.key)}
                      </div>
                    </Button>
                  ) : (
                    <span className="font-semibold">{column.title}</span>
                  )}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedData.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center text-muted-foreground"
                >
                  {searchTerm ? 'No results found.' : 'No data available.'}
                </TableCell>
              </TableRow>
            ) : (
              sortedData.map((row, index) => (
                <TableRow key={index}>
                  {columns.map((column) => (
                    <TableCell key={column.key}>
                      {column.render
                        ? column.render((row as any)[column.key], row)
                        : String((row as any)[column.key] ?? '')}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {/* Results Info */}
      {searchable && (
        <div className="text-sm text-muted-foreground">
          Showing {sortedData.length} of {data.length} results
          {searchTerm && ` for "${searchTerm}"`}
        </div>
      )}
    </div>
  );
}