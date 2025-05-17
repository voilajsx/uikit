// src/utils/focus-trap.js

/**
 * A custom React hook for trapping focus within a specified element.
 * Used for modals, dialogs, and other components that need to trap keyboard focus
 * for accessibility compliance.
 *
 * @param {React.RefObject} ref - React ref object pointing to the container element
 * @param {boolean} isActive - Whether the focus trap is active (default: true)
 *
 * @example
 * const modalRef = useRef(null);
 * useFocusTrap(modalRef, isModalOpen);
 */
import { useEffect } from 'react';

export function useFocusTrap(ref, isActive = true) {
  useEffect(() => {
    // Skip if not active or ref not set
    if (!isActive || !ref.current) return;

    // Find all focusable elements within the container
    const focusableElements = ref.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    // If no focusable elements found, exit early
    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    /**
     * Handle Tab key to maintain focus within the container
     * @param {KeyboardEvent} e - Keyboard event
     */
    function handleTabKey(e) {
      if (e.key !== 'Tab') return;

      // Shift+Tab navigates backwards
      if (e.shiftKey) {
        // If on first element, wrap to last element
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else {
        // If on last element, wrap to first element
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    }

    // Focus the first element when the trap is activated
    if (firstElement) {
      firstElement.focus();
    }

    // Add event listener for tab key
    ref.current.addEventListener('keydown', handleTabKey);

    // Cleanup: remove event listener
    return () => {
      if (ref.current) {
        ref.current.removeEventListener('keydown', handleTabKey);
      }
    };
  }, [isActive, ref]);
}
