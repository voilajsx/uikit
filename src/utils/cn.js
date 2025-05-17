// src/utils/cn.js

/**
 * A utility function for merging class names with proper handling of Tailwind CSS classes.
 * Combines functionality of clsx (conditional classes) and tailwind-merge (resolving conflicts).
 *
 * @param  {...any} inputs - Any number of class names, objects, or arrays
 * @returns {string} - Merged class string with resolved Tailwind conflicts
 *
 * @example
 * cn('px-2 py-1', 'bg-red-500', { 'text-white': true, 'rounded': false })
 * // Result: 'px-2 py-1 bg-red-500 text-white'
 *
 * @example
 * cn('px-2', 'px-4')
 * // Result: 'px-4' (resolves the conflict by using the last one)
 */
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
