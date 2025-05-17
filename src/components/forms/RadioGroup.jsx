/**
 * RadioGroup Component
 * 
 * A container component for Radio buttons that manages state and provides context.
 * Handles the selection state for a group of related radio buttons and ensures
 * proper accessibility and keyboard navigation.
 * 
 * @module components/forms/RadioGroup
 */

import React, { createContext, useContext, useState } from 'react';
import { cn } from '../../utils/cn';
import Radio from './Radio';

/**
 * Context for sharing state between RadioGroup and its Radio children
 * 
 * @typedef {Object} RadioGroupContextType
 * @property {string} name - Group name for all radios
 * @property {string} value - Currently selected value
 * @property {Function} onChange - Handler for selection changes
 */

// Create context for radio group state
const RadioGroupContext = createContext({
  name: '',
  value: '',
  onChange: () => {},
});

/**
 * RadioGroup component manages a collection of related radio buttons.
 * 
 * @param {React.ReactNode} children - Radio options (can be RadioGroup.Option or Radio components)
 * @param {string} name - Input name for all radio buttons in the group
 * @param {string} value - Currently selected value (for controlled component)
 * @param {string} defaultValue - Initial selected value (for uncontrolled component)
 * @param {Function} onChange - Handler called when selection changes
 * @param {string} className - Additional CSS classes to apply
 * @param {Object} props - Additional props passed to the container
 * @returns {JSX.Element} RadioGroup component
 */
const RadioGroup = ({ 
  children,
  name,
  value: controlledValue,
  defaultValue,
  onChange,
  className,
  ...props
}) => {
  // Use controlled or uncontrolled pattern
  const [internalValue, setInternalValue] = useState(defaultValue || '');
  const value = controlledValue !== undefined ? controlledValue : internalValue;
  
  /**
   * Handles changes to radio selection
   * 
   * @param {Event} e - Change event from radio input
   */
  const handleChange = (e) => {
    // Update internal state if uncontrolled
    if (controlledValue === undefined) {
      setInternalValue(e.target.value);
    }
    
    // Call external handler if provided
    if (onChange) {
      onChange(e);
    }
  };
  
  return (
    <RadioGroupContext.Provider value={{ name, value, onChange: handleChange }}>
      <div 
        role="radiogroup"
        className={cn(
          'space-y-2',
          className
        )}
        {...props}
      >
        {children}
      </div>
    </RadioGroupContext.Provider>
  );
};

/**
 * Radio option component specifically for use within RadioGroup.
 * Consumes context from the parent RadioGroup.
 * 
 * @param {React.ReactNode} children - Label content
 * @param {string} value - Value for this radio option
 * @param {Object} props - Additional props passed to the Radio component
 * @returns {JSX.Element} Radio component connected to the RadioGroup
 */
const RadioOption = ({ 
  children,
  value,
  ...props
}) => {
  // Get context values from RadioGroup
  const { name, value: groupValue, onChange } = useContext(RadioGroupContext);
  
  return (
    <Radio
      name={name}
      value={value}
      checked={value === groupValue}
      onChange={onChange}
      {...props}
    >
      {children}
    </Radio>
  );
};

// Set display names for React DevTools
RadioGroup.displayName = 'RadioGroup';
RadioOption.displayName = 'RadioGroup.Option';

// Attach Option as a subcomponent
RadioGroup.Option = RadioOption;

export default RadioGroup;