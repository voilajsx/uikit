/**
 * @fileoverview Collapsible component for @voilajsx/uikit
 * @description A collapsible component with smooth animations
 * @package @voilajsx/uikit
 * @file /src/components/ui/collapsible.jsx
 */

import React, { createContext, useContext, useState, forwardRef } from "react";
import { cn } from "../../lib/utils";

/**
 * Collapsible context for state sharing
 */
const CollapsibleContext = createContext({});

/**
 * Hook to use collapsible context
 */
const useCollapsible = () => {
  const context = useContext(CollapsibleContext);
  if (!context) {
    throw new Error("useCollapsible must be used within a Collapsible component");
  }
  return context;
};

/**
 * Main Collapsible component
 * @param {Object} props - Component props
 * @param {boolean} [props.open] - Controlled open state
 * @param {boolean} [props.defaultOpen=false] - Default open state
 * @param {Function} [props.onOpenChange] - Open state change handler
 * @param {string} [props.className] - Additional CSS classes
 * @param {React.ReactNode} props.children - Collapsible content
 * @returns {JSX.Element} Collapsible component
 */
const Collapsible = forwardRef(({
  open: controlledOpen,
  defaultOpen = false,
  onOpenChange,
  className,
  children,
  ...props
}, ref) => {
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  
  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : internalOpen;
  
  const handleOpenChange = (newOpen) => {
    if (!isControlled) {
      setInternalOpen(newOpen);
    }
    onOpenChange?.(newOpen);
  };

  const contextValue = {
    open,
    onOpenChange: handleOpenChange,
  };

  return (
    <CollapsibleContext.Provider value={contextValue}>
      <div
        ref={ref}
        className={cn("space-y-2", className)}
        {...props}
      >
        {children}
      </div>
    </CollapsibleContext.Provider>
  );
});

Collapsible.displayName = "Collapsible";

/**
 * Collapsible trigger component
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {React.ReactNode} props.children - Trigger content
 * @returns {JSX.Element} Collapsible trigger
 */
const CollapsibleTrigger = forwardRef(({ 
  className, 
  children, 
  ...props 
}, ref) => {
  const { open, onOpenChange } = useCollapsible();

  return (
    <button
      ref={ref}
      type="button"
      className={cn(
        "flex w-full items-center justify-between p-0 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className
      )}
      data-state={open ? "open" : "closed"}
      onClick={() => onOpenChange(!open)}
      {...props}
    >
      {children}
    </button>
  );
});

CollapsibleTrigger.displayName = "CollapsibleTrigger";

/**
 * Collapsible content component
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {React.ReactNode} props.children - Content to collapse
 * @returns {JSX.Element} Collapsible content
 */
const CollapsibleContent = forwardRef(({ 
  className, 
  children, 
  ...props 
}, ref) => {
  const { open } = useCollapsible();

  return (
    <div
      ref={ref}
      className={cn(
        "overflow-hidden transition-all duration-300 ease-in-out",
        open ? "animate-in slide-in-from-top-1" : "animate-out slide-out-to-top-1",
        open ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        className
      )}
      data-state={open ? "open" : "closed"}
      {...props}
    >
      <div className="pt-1">
        {children}
      </div>
    </div>
  );
});

CollapsibleContent.displayName = "CollapsibleContent";

export { Collapsible, CollapsibleTrigger, CollapsibleContent, useCollapsible };