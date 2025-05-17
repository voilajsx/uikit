// src/utils/click-outside.js

/**
 * A custom React hook for detecting clicks outside a specified element.
 * Commonly used for closing dropdowns, modals, and other overlay components.
 *
 * @param {React.RefObject} ref - React ref object pointing to the target element
 * @param {Function} handler - Callback function to be called when a click outside is detected
 *
 * @example
 * const dropdownRef = useRef(null);
 * useClickOutside(dropdownRef, () => setIsOpen(false));
 */
import { useEffect } from 'react';

export function useClickOutside(ref, handler) {
  useEffect(() => {
    /**
     * Check if the click/touch was outside the referenced element and call the handler
     * @param {MouseEvent|TouchEvent} event - The event object
     */
    const listener = (event) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      // Call the handler only if the click is outside the element
      handler(event);
    };

    // Add event listeners
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener); // For mobile support

    // Cleanup function - remove listeners when component unmounts
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]); // Re-run if ref or handler changes
}
