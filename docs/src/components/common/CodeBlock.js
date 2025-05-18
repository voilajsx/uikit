import React, { useState } from 'react';
import { Highlight, themes } from 'prism-react-renderer';
import {
  ClipboardDocumentIcon,
  ClipboardDocumentCheckIcon,
} from '@heroicons/react/24/outline';
import { copyToClipboard } from '../../utils/codeFormatter';

/**
 * CodeBlock component displays syntax-highlighted code with copy functionality
 *
 * @param {string} code - The code to display
 * @param {string} language - The programming language of the code (default: jsx)
 * @param {boolean} showLineNumbers - Whether to show line numbers (default: true)
 * @param {number[]} highlightLines - Line numbers to highlight (default: [])
 * @param {string} filename - Optional filename to display
 * @param {string} className - Additional CSS classes
 */
const CodeBlock = ({
  code = '',
  language = 'jsx',
  showLineNumbers = true,
  highlightLines = [],
  filename,
  className = '',
}) => {
  const [copied, setCopied] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    return document.documentElement.classList.contains('dark');
  });

  // Update darkMode when the theme changes
  React.useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          setDarkMode(document.documentElement.classList.contains('dark'));
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => {
      observer.disconnect();
    };
  }, []);

  // Handle copy to clipboard
  const handleCopy = async () => {
    const success = await copyToClipboard(code);

    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Remove extra indentation from code
  const formattedCode = React.useMemo(() => {
    if (!code) return '';

    // Split into lines
    const lines = code.split('\n');

    // Find the minimum indentation (excluding empty lines)
    const nonEmptyLines = lines.filter((line) => line.trim().length > 0);
    const indentations = nonEmptyLines.map(
      (line) => line.match(/^\s*/)[0].length
    );
    const minIndent = Math.min(...indentations);

    // Remove the minimum indentation from each line
    const trimmedLines = lines.map((line) => {
      if (line.trim().length === 0) return '';
      return line.substring(minIndent);
    });

    // Join back into a string
    return trimmedLines.join('\n').trim();
  }, [code]);

  return (
    <div className={`code-block overflow-hidden rounded-lg ${className}`}>
      {/* Optional filename header */}
      {filename && (
        <div className="px-4 py-2 bg-gray-700 text-gray-200 text-sm font-mono border-b border-gray-600">
          {filename}
        </div>
      )}

      {/* Code block */}
      <div className="relative">
        <Highlight
          theme={darkMode ? themes.nightOwl : themes.github}
          code={formattedCode}
          language={language}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre
              className={`${className} overflow-x-auto p-4 text-sm`}
              style={style}
            >
              {tokens.map((line, i) => {
                const lineNumber = i + 1;
                const isHighlighted = highlightLines.includes(lineNumber);

                return (
                  <div
                    key={i}
                    {...getLineProps({ line, key: i })}
                    className={`${
                      isHighlighted ? 'highlight-line -mx-4 px-4' : ''
                    }`}
                  >
                    {showLineNumbers && (
                      <span className="inline-block mr-4 text-gray-500 select-none w-8 text-right">
                        {lineNumber}
                      </span>
                    )}
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                );
              })}
            </pre>
          )}
        </Highlight>

        {/* Copy button */}
        <button
          onClick={handleCopy}
          className="copy-button"
          aria-label="Copy code to clipboard"
          title="Copy code to clipboard"
        >
          {copied ? (
            <ClipboardDocumentCheckIcon className="h-5 w-5 text-green-400" />
          ) : (
            <ClipboardDocumentIcon className="h-5 w-5" />
          )}
        </button>
      </div>
    </div>
  );
};

export default CodeBlock;
