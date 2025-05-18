import React from 'react';
import {
  PlusIcon,
  ArrowRightIcon,
  ChevronDownIcon,
  ArrowDownTrayIcon as DownloadIcon, // Change this line
  XMarkIcon,
} from '@heroicons/react/24/outline';
import ComponentExample from '../common/ComponentExample';
import buttonData from '../../data/componentData/buttonData';

/**
 * Component that showcases all Button examples
 */
const ButtonExamples = () => {
  // Simulated Button component
  const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    disabled = false,
    isLoading = false,
    loadingText,
    leftIcon,
    rightIcon,
    fullWidth = false,
    className = '',
    ...props
  }) => {
    // Style maps
    const variantStyles = {
      primary: 'bg-primary-600 hover:bg-primary-700 text-white',
      secondary: 'bg-secondary-600 hover:bg-secondary-700 text-white',
      outline: 'border border-primary-600 text-primary-600 hover:bg-primary-50',
      ghost: 'text-primary-600 hover:bg-primary-50',
      link: 'text-primary-600 hover:underline p-0',
      danger: 'bg-danger-600 hover:bg-danger-700 text-white',
    };

    const sizeStyles = {
      xs: 'text-xs px-2 py-1',
      sm: 'text-sm px-3 py-1.5',
      md: 'text-base px-4 py-2',
      lg: 'text-lg px-5 py-2.5',
      xl: 'text-xl px-6 py-3',
    };

    return (
      <button
        type="button"
        disabled={disabled}
        className={`
          inline-flex items-center justify-center font-medium rounded-md transition-colors
          ${variantStyles[variant] || variantStyles.primary}
          ${sizeStyles[size] || sizeStyles.md}
          ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
          ${fullWidth ? 'w-full' : ''}
          ${className}
        `}
        {...props}
      >
        {isLoading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}

        {leftIcon && !isLoading && <span className="mr-2">{leftIcon}</span>}
        {isLoading && loadingText ? loadingText : children}
        {rightIcon && !isLoading && <span className="ml-2">{rightIcon}</span>}
      </button>
    );
  };

  // Render examples from button data
  return (
    <>
      {/* Variants example */}
      <ComponentExample
        title={buttonData.examples.variants.title}
        description={buttonData.examples.variants.description}
        code={buttonData.examples.variants.code}
      >
        <div className="flex flex-wrap gap-4">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
          <Button variant="danger">Danger</Button>
        </div>
      </ComponentExample>

      {/* Sizes example */}
      <ComponentExample
        title={buttonData.examples.sizes.title}
        description={buttonData.examples.sizes.description}
        code={buttonData.examples.sizes.code}
      >
        <div className="flex flex-wrap items-center gap-4">
          <Button size="xs">Extra Small</Button>
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
          <Button size="xl">Extra Large</Button>
        </div>
      </ComponentExample>

      {/* States example */}
      <ComponentExample
        title={buttonData.examples.states.title}
        description={buttonData.examples.states.description}
        code={buttonData.examples.states.code}
      >
        <div className="flex flex-wrap gap-4">
          <Button>Normal</Button>
          <Button disabled>Disabled</Button>
          <Button isLoading>Loading</Button>
          <Button isLoading loadingText="Loading...">
            Submit
          </Button>
        </div>
      </ComponentExample>

      {/* Icons example */}
      <ComponentExample
        title={buttonData.examples.icons.title}
        description={buttonData.examples.icons.description}
        code={buttonData.examples.icons.code}
      >
        <div className="flex flex-wrap gap-4">
          <Button leftIcon={<PlusIcon className="h-4 w-4" />}>Add Item</Button>
          <Button rightIcon={<ArrowRightIcon className="h-4 w-4" />}>
            Next
          </Button>
          <Button
            leftIcon={<DownloadIcon className="h-4 w-4" />}
            rightIcon={<ChevronDownIcon className="h-4 w-4" />}
          >
            Download
          </Button>
        </div>
      </ComponentExample>

      {/* Full width example */}
      <ComponentExample
        title={buttonData.examples.fullWidth.title}
        description={buttonData.examples.fullWidth.description}
        code={buttonData.examples.fullWidth.code}
      >
        <div className="w-full space-y-2">
          <Button fullWidth>Full Width Button</Button>
          <Button variant="outline" fullWidth>
            Full Width Outline
          </Button>
        </div>
      </ComponentExample>

      {/* Button group example */}
      <ComponentExample
        title={buttonData.examples.buttonGroup.title}
        description={buttonData.examples.buttonGroup.description}
        code={buttonData.examples.buttonGroup.code}
      >
        <div className="flex rounded-md shadow-sm">
          <Button className="rounded-r-none">Left</Button>
          <Button className="rounded-none border-x-0">Middle</Button>
          <Button className="rounded-l-none">Right</Button>
        </div>
      </ComponentExample>

      {/* Accessibility example */}
      <ComponentExample
        title={buttonData.accessibility.examples.ariaLabel.title}
        description={buttonData.accessibility.examples.ariaLabel.description}
        code={buttonData.accessibility.examples.ariaLabel.code}
      >
        <Button aria-label="Close dialog" variant="ghost">
          <XMarkIcon className="h-5 w-5" />
        </Button>
      </ComponentExample>
    </>
  );
};

export default ButtonExamples;
