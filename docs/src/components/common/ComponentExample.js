import React, { useState } from 'react';
import { Tab } from '@headlessui/react';
import CodeBlock from './CodeBlock';

/**
 * ComponentExample displays a live component preview with its code
 *
 * @param {ReactNode} children - The component to display
 * @param {string} code - The code for the component
 * @param {string} title - Optional title for the example
 * @param {string} description - Optional description for the example
 * @param {boolean} showGrid - Whether to show a grid background in the preview
 * @param {boolean} centered - Whether to center the component in the preview
 * @param {boolean} expandable - Whether the code section is expandable
 * @param {string} className - Additional CSS classes
 */
const ComponentExample = ({
  children,
  code,
  title,
  description,
  showGrid = false,
  centered = false,
  expandable = true,
  className = '',
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`mb-8 ${className}`}>
      {/* Title and description if provided */}
      {(title || description) && (
        <div className="mb-4">
          {title && (
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              {title}
            </h3>
          )}
          {description && (
            <p className="mt-1 text-gray-600 dark:text-gray-400">
              {description}
            </p>
          )}
        </div>
      )}

      {/* Component preview */}
      <div
        className={`component-preview ${
          showGrid ? 'component-preview-grid' : ''
        } ${centered ? 'flex items-center justify-center' : ''}`}
      >
        {children}
      </div>

      {/* Code tabs */}
      <Tab.Group>
        <Tab.List className="flex bg-gray-100 dark:bg-gray-800 rounded-b-lg border-t border-gray-200 dark:border-gray-700">
          <Tab
            className={({ selected }) =>
              `px-4 py-2 text-sm font-medium text-left flex-1 focus:outline-none ${
                selected
                  ? 'text-primary-700 dark:text-primary-400'
                  : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
              }`
            }
          >
            Code
          </Tab>
          {/* Additional tab options could be added here, like CSS, etc. */}
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <div className="relative">
              {/* Expandable control */}
              {expandable && code && code.split('\n').length > 10 && (
                <button
                  onClick={() => setExpanded(!expanded)}
                  className="absolute top-2 right-16 text-xs font-medium text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 z-10"
                >
                  {expanded ? 'Show less' : 'Show more'}
                </button>
              )}

              {/* Code block with height constraint when not expanded */}
              <div
                className={`${
                  !expanded &&
                  expandable &&
                  code &&
                  code.split('\n').length > 10
                    ? 'max-h-80 overflow-hidden'
                    : ''
                }`}
              >
                <CodeBlock code={code} language="jsx" />
              </div>

              {/* Gradient fade for collapsed code */}
              {!expanded &&
                expandable &&
                code &&
                code.split('\n').length > 10 && (
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-800 to-transparent"></div>
                )}
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default ComponentExample;
