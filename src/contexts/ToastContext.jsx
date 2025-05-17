/**
 * Toast Context
 * 
 * A context provider to manage toast notifications throughout the application.
 * Provides functions to create, update, and remove toast notifications, as well
 * as handling their positioning and automatic dismissal.
 * 
 * @module contexts/ToastContext
 */

import React, { createContext, useContext, useState, useCallback } from 'react';
import { createPortal } from 'react-dom';
import Toast from '../components/feedback/Toast';
import { cn } from '../utils/cn';

/**
 * @typedef {Object} ToastContextValue
 * @property {Function} addToast - Function to add a new toast
 * @property {Function} removeToast - Function to remove a specific toast
 * @property {Function} removeAllToasts - Function to remove all toasts
 */

/**
 * @typedef {Object} ToastOptions
 * @property {string} title - Optional title for the toast
 * @property {string} description - Main content of the toast
 * @property {'success'|'warning'|'error'|'info'} variant - Visual style variant
 * @property {number} duration - How long to display in milliseconds
 * @property {'top'|'top-right'|'top-left'|'bottom'|'bottom-right'|'bottom-left'} position - Where to display the toast
 */

// Create context for toast state and functions
const ToastContext = createContext({
  addToast: () => {},
  removeToast: () => {},
  removeAllToasts: () => {},
});

/**
 * Hook to use the toast context in components
 * 
 * @returns {ToastContextValue} Toast functions
 */
export const useToast = () => useContext(ToastContext);

/**
 * ToastProvider component to wrap around the application
 * 
 * @param {React.ReactNode} children - Application content
 * @param {'top'|'top-right'|'top-left'|'bottom'|'bottom-right'|'bottom-left'} defaultPosition - Default position for toasts
 * @returns {JSX.Element} Provider component with toast container
 */
const ToastProvider = ({ 
  children,
  defaultPosition = 'bottom-right' 
}) => {
  // State to track all active toasts
  const [toasts, setToasts] = useState([]);

  /**
   * Add a new toast notification
   * 
   * @param {ToastOptions} options - Toast configuration
   * @returns {string} ID of the created toast
   */
  const addToast = useCallback(({ title, description, variant = 'info', duration = 5000, position = defaultPosition }) => {
    // Generate unique ID for the toast
    const id = Date.now().toString();
    
    // Create new toast object
    const newToast = { 
      id, 
      title, 
      description, 
      variant, 
      duration, 
      position 
    };
    
    // Add to state
    setToasts(prev => [...prev, newToast]);

    // Auto-dismiss toast after duration (if not Infinity)
    if (duration !== Infinity) {
      setTimeout(() => {
        removeToast(id);
      }, duration);
    }

    return id;
  }, [defaultPosition]);

  /**
   * Remove a specific toast by ID
   * 
   * @param {string} id - ID of the toast to remove
   */
  const removeToast = useCallback(id => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  }, []);

  /**
   * Remove all active toasts
   */
  const removeAllToasts = useCallback(() => {
    setToasts([]);
  }, []);

  /**
   * Position-specific styling for toast containers
   */
  const positionStyles = {
    'top': 'top-0 left-1/2 transform -translate-x-1/2',
    'top-left': 'top-0 left-0',
    'top-right': 'top-0 right-0',
    'bottom': 'bottom-0 left-1/2 transform -translate-x-1/2',
    'bottom-left': 'bottom-0 left-0',
    'bottom-right': 'bottom-0 right-0',
  };

  // Group toasts by position
  const toastsByPosition = toasts.reduce((acc, toast) => {
    const position = toast.position || defaultPosition;
    
    if (!acc[position]) {
      acc[position] = [];
    }
    
    acc[position].push(toast);
    return acc;
  }, {});

  return (
    <ToastContext.Provider 
      value={{ 
        addToast, 
        removeToast, 
        removeAllToasts 
      }}
    >
      {children}
      
      {/* Toast containers - only rendered on client side */}
      {typeof document !== 'undefined' && createPortal(
        <>
          {/* Render a container for each position that has toasts */}
          {Object.entries(toastsByPosition).map(([position, positionToasts]) => (
            <div
              key={position}
              className={cn(
                'fixed z-[var(--z-index-toast)] p-4',
                'flex flex-col gap-2',
                positionStyles[position]
              )}
              aria-live="polite"
              aria-atomic="true"
            >
              {positionToasts.map(toast => (
                <Toast
                  key={toast.id}
                  variant={toast.variant}
                  title={toast.title}
                  onClose={() => removeToast(toast.id)}
                >
                  {toast.description}
                </Toast>
              ))}
            </div>
          ))}
        </>,
        document.body
      )}
    </ToastContext.Provider>
  );
};

// Set display name for React DevTools
ToastProvider.displayName = 'ToastProvider';

export default ToastProvider;