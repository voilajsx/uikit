/**
 * @fileoverview Core utility functions for @voilajsx/uikit
 * @description Provides essential utilities for component styling and manipulation
 * @package @voilajsx/uikit
 * @file /src/lib/utils.js
 */

import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merges multiple class names using clsx and tailwind-merge
 * This allows for proper handling of Tailwind CSS class conflicts
 * @param {...string} inputs - Class names to merge
 * @returns {string} Merged class names
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
