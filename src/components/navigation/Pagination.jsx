/**
 * Pagination Component
 * 
 * A component for navigating between pages of content or search results.
 * Provides first, previous, next, and last page navigation along with 
 * page number buttons. Automatically handles ranges with ellipsis for 
 * large page counts.
 * 
 * @module components/navigation/Pagination
 */

import React from 'react';
import { cn } from '../../utils/cn';

/**
 * Pagination component for navigating between pages of content.
 * 
 * @param {number} currentPage - Current active page (1-based index)
 * @param {number} totalPages - Total number of pages available
 * @param {Function} onPageChange - Callback when a page is selected (receives page number)
 * @param {number} siblingCount - Number of page buttons to show on each side of current page
 * @param {string} className - Additional CSS classes to apply
 * @param {Object} props - Additional props to pass to the nav element
 * @returns {JSX.Element} Pagination component
 */
const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  siblingCount = 1,
  className,
  ...props
}) => {
  /**
   * Generates the array of page numbers to display in the pagination.
   * Handles logic for showing ellipsis when there are many pages.
   * 
   * @returns {Array} Array of page numbers and 'DOTS' for ellipsis
   */
  const getPageNumbers = () => {
    const totalNumbers = siblingCount * 2 + 3; // siblings + firstPage + lastPage + currentPage
    const totalBlocks = totalNumbers + 2; // +2 for DOTS blocks
    
    // If we have fewer pages than blocks, show all pages without dots
    if (totalPages <= totalBlocks) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    
    // Calculate left and right sibling indices
    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);
    
    // Determine whether to show ellipsis on left and right sides
    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPages - 1;
    
    // Case 1: Show right dots only (current page near start)
    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + 2 * siblingCount;
      const leftRange = Array.from({ length: leftItemCount }, (_, i) => i + 1);
      return [...leftRange, 'DOTS', totalPages];
    }
    
    // Case 2: Show left dots only (current page near end)
    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * siblingCount;
      const rightRange = Array.from(
        { length: rightItemCount },
        (_, i) => totalPages - rightItemCount + i + 1
      );
      return [1, 'DOTS', ...rightRange];
    }
    
    // Case 3: Show both left and right dots (current page in middle)
    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = Array.from(
        { length: rightSiblingIndex - leftSiblingIndex + 1 },
        (_, i) => leftSiblingIndex + i
      );
      return [1, 'DOTS', ...middleRange, 'DOTS', totalPages];
    }
    
    return [];
  };
  
  // Get array of page numbers to display
  const pageNumbers = getPageNumbers();
  
  return (
    <nav
      aria-label="Pagination"
      className={cn('flex items-center space-x-1', className)}
      {...props}
    >
      {/* First Page Button */}
      <button
        className={cn(
          'px-3 py-1 rounded-[var(--radius-default)] text-sm font-medium',
          'hover:bg-[var(--bg-subtle)]',
          currentPage === 1 && 'opacity-50 cursor-not-allowed'
        )}
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
        aria-label="Go to first page"
      >
        &#171; {/* Double left arrow */}
      </button>
      
      {/* Previous Page Button */}
      <button
        className={cn(
          'px-3 py-1 rounded-[var(--radius-default)] text-sm font-medium',
          'hover:bg-[var(--bg-subtle)]',
          currentPage === 1 && 'opacity-50 cursor-not-allowed'
        )}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Go to previous page"
      >
        &#8249; {/* Single left arrow */}
      </button>
      
      {/* Page Number Buttons */}
      {pageNumbers.map((pageNumber, i) => {
        // Render ellipsis
        if (pageNumber === 'DOTS') {
          return (
            <span
              key={`dots-${i}`}
              className="px-3 py-1 text-[var(--text-secondary)]"
            >
              &#8230; {/* Ellipsis */}
            </span>
          );
        }
        
        // Render page button
        return (
          <button
            key={pageNumber}
            className={cn(
              'px-3 py-1 rounded-[var(--radius-default)] text-sm font-medium',
              pageNumber === currentPage
                ? 'bg-[var(--primary-color)] text-white'
                : 'hover:bg-[var(--bg-subtle)]'
            )}
            onClick={() => onPageChange(pageNumber)}
            aria-current={pageNumber === currentPage ? 'page' : undefined}
            aria-label={`Go to page ${pageNumber}`}
          >
            {pageNumber}
          </button>
        );
      })}
      
      {/* Next Page Button */}
      <button
        className={cn(
          'px-3 py-1 rounded-[var(--radius-default)] text-sm font-medium',
          'hover:bg-[var(--bg-subtle)]',
          currentPage === totalPages && 'opacity-50 cursor-not-allowed'
        )}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Go to next page"
      >
        &#8250; {/* Single right arrow */}
      </button>
      
      {/* Last Page Button */}
      <button
        className={cn(
          'px-3 py-1 rounded-[var(--radius-default)] text-sm font-medium',
          'hover:bg-[var(--bg-subtle)]',
          currentPage === totalPages && 'opacity-50 cursor-not-allowed'
        )}
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
        aria-label="Go to last page"
      >
        &#187; {/* Double right arrow */}
      </button>
    </nav>
  );
};

// Set display name for React DevTools
Pagination.displayName = 'Pagination';

export default Pagination;