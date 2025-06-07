/**
 * @fileoverview DataTable component for @voilajsx/uikit
 * @description Advanced table with sorting, filtering, and pagination
 * @package @voilajsx/uikit
 * @file /src/components/ui/data-table.jsx
 */

import { forwardRef, useState } from 'react'
import { ArrowUpDown, ArrowUp, ArrowDown, Search } from 'lucide-react'
import { cn } from '../../lib/utils'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './table'
import { Button } from './button'
import { Input } from './input'

const DataTable = forwardRef(({ 
  className,
  columns = [],
  data = [],
  searchable = true,
  sortable = true,
  ...props 
}, ref) => {
  const [sorting, setSorting] = useState({ column: null, direction: null })
  const [searchTerm, setSearchTerm] = useState('')

  // Filter data based on search term
  const filteredData = searchable 
    ? data.filter(row => 
        Object.values(row).some(value => 
          String(value).toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
    : data

  // Sort data based on current sorting
  const sortedData = sortable && sorting.column
    ? [...filteredData].sort((a, b) => {
        const aVal = a[sorting.column]
        const bVal = b[sorting.column]
        
        if (aVal < bVal) return sorting.direction === 'asc' ? -1 : 1
        if (aVal > bVal) return sorting.direction === 'asc' ? 1 : -1
        return 0
      })
    : filteredData

  const handleSort = (columnKey) => {
    if (!sortable) return
    
    setSorting(prev => {
      if (prev.column === columnKey) {
        if (prev.direction === 'asc') return { column: columnKey, direction: 'desc' }
        if (prev.direction === 'desc') return { column: null, direction: null }
      }
      return { column: columnKey, direction: 'asc' }
    })
  }

  const getSortIcon = (columnKey) => {
    if (sorting.column !== columnKey) return <ArrowUpDown className="ml-2 h-4 w-4" />
    if (sorting.direction === 'asc') return <ArrowUp className="ml-2 h-4 w-4" />
    if (sorting.direction === 'desc') return <ArrowDown className="ml-2 h-4 w-4" />
    return <ArrowUpDown className="ml-2 h-4 w-4" />
  }

  return (
    <div className={cn('w-full space-y-4', className)} ref={ref} {...props}>
      {searchable && (
        <div className="flex items-center space-x-2">
          <Search className="h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-sm"
          />
        </div>
      )}
      
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              {columns.map((column) => (
                <TableHead 
                  key={column.key}
                  className={cn(
                    sortable && column.sortable !== false ? 'cursor-pointer select-none' : ''
                  )}
                  onClick={() => column.sortable !== false && handleSort(column.key)}
                >
                  <div className="flex items-center">
                    {column.title}
                    {sortable && column.sortable !== false && getSortIcon(column.key)}
                  </div>
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedData.length === 0 ? (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            ) : (
              sortedData.map((row, index) => (
                <TableRow key={index}>
                  {columns.map((column) => (
                    <TableCell key={column.key}>
                      {column.render ? column.render(row[column.key], row) : row[column.key]}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
})
DataTable.displayName = 'DataTable'

export { DataTable }