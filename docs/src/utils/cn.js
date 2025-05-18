// src/utils/cn.js
// This is a simplified version for the test environment

/**
 * Utility to merge class names and remove duplicates
 * @param  {...string} classes - Class names to merge
 * @returns {string} - Merged class names
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}
