/**
 * DataTable Component
 * 
 * A component to display data in a table format with advanced features like sorting, filtering, and pagination.
 * Built on top of the Table component with added functionality.
 * 
 * @module components/data/DataTable
 */

import React, { useState } from 'react';
import Table from '../display/Table';
import Input from '../forms/Input';
import Pagination from '../navigation/Pagination';
import { cn } from '../../utils/cn';

/**
 * Sort icon for unsorted state
 * 
 * @param {Object} props - Component props
 * @returns {JSX.Element} Sort icon component
 */
const SortIcon = ({ className }) => (
  <svg className={cn("w-4 h-4", className)} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
  </svg>
);

/**
 * Sort icon for ascending sort state
 * 
 * @param {Object} props - Component props
 * @returns {JSX.Element} Sort ascending icon component
 */
const SortAscIcon = ({ className }) => (
  <svg className={cn("w-4 h-4", className)} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
  </svg>
);

/**
 * Sort icon for descending sort state
 * 
 * @param {Object} props - Component props
 * @returns {JSX.Element} Sort descending icon component
 */
const SortDescIcon = ({ className }) => (
  <svg className={cn("w-4 h-4", className)} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4" />
  </svg>
);

/**
 * DataTable component with sorting, filtering, and pagination.
 * 
 * @param {any[]} data - Array of data objects to display
 * @param {Object[]} columns - Configuration for each column
 * @param {string} columns[].key - Property key in data objects
 * @param {string} columns[].header - Column header text
 * @param {boolean} columns[].sortable - Whether column is sortable
 * @param {boolean} columns[].filterable - Whether column is filterable
 * @param {Function} columns[].render - Custom render function for cell
 * @param {string} columns[].className - Additional CSS classes for column
 * @param {string} keyField - Unique identifier field in data objects
 * @param {boolean} pagination - Whether to enable pagination
 * @param {number} pageSize - Number of rows per page
 * @param {Function} onRowClick - Handler for row click
 * @param {string} className - Additional CSS classes
 * @param {Object} props - Additional props for div element
 * @returns {JSX.Element} DataTable component
 */
const DataTable = ({
  data,
  columns,
  keyField,
  pagination = true,
  pageSize = 10,
  onRowClick,
  className,
  ...props
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortField, setSortField] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');
  const [filters, setFilters] = useState({});
  
  // Apply sorting and filtering
  const filteredData = data.filter(row => {
    return Object.entries(filters).every(([key, value]) => {
      if (!value) return true;
      const rowValue = String(row[key] || '').toLowerCase();
      return rowValue.includes(value.toLowerCase());
    });
  });
  
  const sortedData = sortField
    ? [...filteredData].sort((a, b) => {
        const aValue = a[sortField];
        const bValue = b[sortField];
        
        if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
        if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
        return 0;
      })
    : filteredData;
  
  // Pagination
  const totalPages = Math.ceil(sortedData.length / pageSize);
  const paginatedData = pagination
    ? sortedData.slice((currentPage - 1) * pageSize, currentPage * pageSize)
    : sortedData;
  
  /**
   * Handle column sort
   * 
   * @param {string} key - Column key to sort by
   */
  const handleSort = (key) => {
    if (sortField === key) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(key);
      setSortDirection('asc');
    }
  };
  
  /**
   * Handle column filter
   * 
   * @param {string} key - Column key to filter by
   * @param {string} value - Filter value
   */
  const handleFilter = (key, value) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
    setCurrentPage(1); // Reset to first page on filter change
  };
  
  /**
   * Get appropriate sort icon based on sort state
   * 
   * @param {string} key - Column key
   * @returns {JSX.Element} Sort icon component
   */
  const getSortIcon = (key) => {
    if (sortField !== key) return <SortIcon className="w-4 h-4" />;
    return sortDirection === 'asc' ? <SortAscIcon className="w-4 h-4" /> : <SortDescIcon className="w-4 h-4" />;
  };
  
  return (
    <div className={cn("w-full", className)} {...props}>
      <div className="overflow-x-auto">
        <Table variant="striped">
          <Table.Head>
            <Table.Row>
              {columns.map(column => (
                <Table.Cell 
                  key={column.key} 
                  as="th" 
                  className={cn(
                    column.sortable && 'cursor-pointer',
                    column.className
                  )}
                  onClick={column.sortable ? () => handleSort(column.key) : undefined}
                >
                  <div className="flex items-center space-x-1">
                    <span>{column.header}</span>
                    {column.sortable && (
                      <span className="text-[var(--text-secondary)]">
                        {getSortIcon(column.key)}
                      </span>
                    )}
                  </div>
                </Table.Cell>
              ))}
            </Table.Row>
            <Table.Row>
              {columns.map(column => (
                <Table.Cell key={`filter-${column.key}`}>
                  {column.filterable && (
                    <div className="flex items-center">
                      <Input
                        size="sm"
                        placeholder="Filter..."
                        value={filters[column.key] || ''}
                        onChange={(e) => handleFilter(column.key, e.target.value)}
                        className="w-full"
                      />
                    </div>
                  )}
                </Table.Cell>
              ))}
            </Table.Row>
          </Table.Head>
          <Table.Body>
            {paginatedData.length > 0 ? (
              paginatedData.map(row => (
                <Table.Row 
                  key={String(row[keyField])}
                  className={cn(onRowClick && 'cursor-pointer hover:bg-[var(--bg-subtle)]')}
                  onClick={onRowClick ? () => onRowClick(row) : undefined}
                >
                  {columns.map(column => (
                    <Table.Cell key={`${String(row[keyField])}-${column.key}`}>
                      {column.render ? column.render(row) : String(row[column.key] || '')}
                    </Table.Cell>
                  ))}
                </Table.Row>
              ))
            ) : (
              <Table.Row>
                <Table.Cell colSpan={columns.length} className="text-center py-4">
                  No data found
                </Table.Cell>
              </Table.Row>
            )}
          </Table.Body>
        </Table>
      </div>
      
      {pagination && totalPages > 1 && (
        <div className="mt-4 flex justify-between items-center">
          <div className="text-sm text-[var(--text-secondary)]">
            Showing {((currentPage - 1) * pageSize) + 1} to {Math.min(currentPage * pageSize, sortedData.length)} of {sortedData.length} entries
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      )}
    </div>
  );
};

// Set display name for React DevTools
DataTable.displayName = 'DataTable';

export default DataTable;