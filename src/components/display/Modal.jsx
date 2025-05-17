/**
 * Modal Component
 * 
 * A component to display content that requires user attention or interaction in an overlay.
 * Creates a portal to render at the document body level, with support for focus trapping,
 * backdrop clicking, and ESC key to close.
 * 
 * @module components/display/Modal
 */

import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { cn } from '../../utils/cn';
import { useFocusTrap } from '../../utils/focus-trap';

/**
 * Size variants for the modal
 */
const sizeClasses = {
  sm: 'max-w-md',
  md: 'max-w-lg',
  lg: 'max-w-2xl',
  xl: 'max-w-4xl',
  full: 'max-w-full mx-4 sm:mx-6',
};

/**
 * Modal component for displaying content in an overlay.
 * 
 * @param {boolean} isOpen - Whether the modal is visible
 * @param {Function} onClose - Handler to close the modal
 * @param {'sm'|'md'|'lg'|'xl'|'full'} size - Size of the modal
 * @param {string} className - Additional CSS classes
 * @param {React.ReactNode} children - Modal content
 * @param {Object} props - Additional props for the div element
 * @returns {JSX.Element|null} Modal component or null if not open
 */
const Modal = ({ 
  isOpen = false, 
  onClose,
  size = 'md',
  className,
  children,
  ...props
}) => {
  const modalRef = useRef(null);
  
  // Use the focus trap utility to manage keyboard navigation
  useFocusTrap(modalRef, isOpen);

  // Handle escape key press
  useEffect(() => {
    const handleEscape = (e) => {
      if (isOpen && e.key === 'Escape') {
        onClose();
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);
  
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);
  
  // If not open, don't render
  if (!isOpen) return null;
  
  return createPortal(
    <div
      className="fixed inset-0 z-[var(--z-index-modal)] overflow-y-auto"
      aria-modal="true"
      role="dialog"
    >
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      ></div>
      
      {/* Modal container */}
      <div className="flex min-h-screen items-end justify-center text-center sm:items-center sm:p-0">
        <div 
          ref={modalRef}
          className={cn(
            'relative w-full transform overflow-hidden rounded-t-lg sm:rounded-lg bg-white text-left',
            'shadow-xl transition-all sm:my-8',
            'animate-in fade-in-90 slide-in-from-bottom-10 sm:slide-in-from-bottom-0 duration-200',
            sizeClasses[size],
            className
          )}
          onClick={(e) => e.stopPropagation()}
          {...props}
        >
          {children}
          
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            aria-label="Close modal"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

/**
 * Modal header component
 * 
 * @param {string} className - Additional CSS classes
 * @param {React.ReactNode} children - Header content
 * @param {Object} props - Additional props for the div element
 * @returns {JSX.Element} Modal header component
 */
const ModalHeader = ({ 
  className, 
  children, 
  ...props 
}) => (
  <div 
    className={cn(
      'px-6 py-4 border-b border-[var(--border-color-default)]',
      className
    )} 
    {...props}
  >
    <h3 className="text-lg font-medium text-[var(--text-primary)]">{children}</h3>
  </div>
);

/**
 * Modal body component
 * 
 * @param {string} className - Additional CSS classes
 * @param {React.ReactNode} children - Body content
 * @param {Object} props - Additional props for the div element
 * @returns {JSX.Element} Modal body component
 */
const ModalBody = ({ 
  className, 
  children, 
  ...props 
}) => (
  <div 
    className={cn(
      'px-6 py-4',
      className
    )} 
    {...props}
  >
    {children}
  </div>
);

/**
 * Modal footer component
 * 
 * @param {string} className - Additional CSS classes
 * @param {React.ReactNode} children - Footer content
 * @param {Object} props - Additional props for the div element
 * @returns {JSX.Element} Modal footer component
 */
const ModalFooter = ({ 
  className, 
  children, 
  ...props 
}) => (
  <div 
    className={cn(
      'px-6 py-4 border-t border-[var(--border-color-default)]', 
      'bg-[var(--bg-subtle)]',
      'flex flex-wrap justify-end space-x-2',
      className
    )} 
    {...props}
  >
    {children}
  </div>
);

// Set display names for React DevTools
Modal.displayName = 'Modal';
ModalHeader.displayName = 'Modal.Header';
ModalBody.displayName = 'Modal.Body';
ModalFooter.displayName = 'Modal.Footer';

// Attach sub-components to Modal
Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default Modal;