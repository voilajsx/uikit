import React from 'react';
import CodeBlock from './CodeBlock';

/**
 * PropsTable displays a component's props documentation
 *
 * @param {Array} props - Array of prop objects with name, type, default, required, and description
 * @param {string} className - Additional CSS classes
 */
const PropsTable = ({ props = [], className = '' }) => {
  if (!props || props.length === 0) {
    return (
      <div className="text-gray-500 dark:text-gray-400 italic py-4">
        No props documentation available.
      </div>
    );
  }

  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="props-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Default</th>
            <th>Required</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {props.map((prop) => (
            <tr key={prop.name}>
              <td className="font-mono text-sm whitespace-nowrap">
                {prop.name}
              </td>
              <td className="whitespace-nowrap">
                <code className="text-sm px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 font-mono">
                  {formatPropType(prop.type)}
                </code>
              </td>
              <td className="whitespace-nowrap">
                {prop.default !== undefined ? (
                  <code className="text-sm px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 font-mono">
                    {formatDefaultValue(prop.default)}
                  </code>
                ) : (
                  <span className="text-gray-400 dark:text-gray-500">—</span>
                )}
              </td>
              <td className="whitespace-nowrap text-center">
                {prop.required ? (
                  <span className="text-primary-600 dark:text-primary-400">
                    Yes
                  </span>
                ) : (
                  <span className="text-gray-400 dark:text-gray-500">No</span>
                )}
              </td>
              <td className="text-sm">
                {prop.description}

                {/* Display enum values if available */}
                {prop.type === 'enum' && prop.values && (
                  <div className="mt-1.5">
                    <div className="text-gray-600 dark:text-gray-400 text-xs mb-1">
                      Accepted values:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {prop.values.map((value) => (
                        <code
                          key={value}
                          className="text-xs px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 font-mono"
                        >
                          {formatEnumValue(value)}
                        </code>
                      ))}
                    </div>
                  </div>
                )}

                {/* Display examples if available */}
                {prop.example && (
                  <div className="mt-2 text-xs">
                    <div className="text-gray-600 dark:text-gray-400 mb-1">
                      Example:
                    </div>
                    <CodeBlock
                      code={prop.example}
                      language="jsx"
                      showLineNumbers={false}
                      className="!rounded !text-xs"
                    />
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

/**
 * Format prop type for display
 */
const formatPropType = (type) => {
  if (!type) return 'any';

  if (type === 'enum') return 'enum';

  if (type === 'func') return 'function';

  if (Array.isArray(type)) {
    return type.map(formatPropType).join(' | ');
  }

  if (typeof type === 'object' && type !== null) {
    // For more complex types like shapes, arrays, etc.
    return 'object';
  }

  return type.toString();
};

/**
 * Format default value for display
 */
const formatDefaultValue = (value) => {
  if (value === undefined || value === null) return 'undefined';

  if (typeof value === 'boolean') return value.toString();

  if (typeof value === 'string') return `"${value}"`;

  if (typeof value === 'number') return value.toString();

  if (typeof value === 'object') {
    if (Array.isArray(value)) {
      if (value.length === 0) return '[]';
      return '[...]';
    }
    return '{...}';
  }

  if (typeof value === 'function') return '() => {}';

  return String(value);
};

/**
 * Format enum value for display
 */
const formatEnumValue = (value) => {
  if (typeof value === 'string') return `"${value}"`;
  return String(value);
};

export default PropsTable;
