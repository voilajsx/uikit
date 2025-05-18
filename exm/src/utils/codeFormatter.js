import { Highlight, themes } from 'prism-react-renderer';

/**
 * Format and highlight code snippets
 * @param {string} code - The code to format
 * @param {string} language - The programming language
 * @param {boolean} isDarkMode - Whether dark mode is enabled
 * @param {number[]} highlightLines - Line numbers to highlight
 * @returns {Object} Formatted code with proper syntax highlighting
 */
export const formatCode = (
  code,
  language = 'jsx',
  isDarkMode = false,
  highlightLines = []
) => {
  // Trim extra indentation
  const codeWithoutExtraIndent = removeExtraIndentation(code);

  // Return the highlighted code
  return (
    <Highlight
      theme={isDarkMode ? themes.vsDark : themes.vsLight}
      code={codeWithoutExtraIndent}
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
                className={
                  isHighlighted
                    ? 'highlight-line pl-2 -ml-2 pr-2 -mr-2'
                    : undefined
                }
              >
                <span className="inline-block text-gray-500 w-10 select-none opacity-50">
                  {lineNumber}
                </span>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            );
          })}
        </pre>
      )}
    </Highlight>
  );
};

/**
 * Remove extra indentation from code blocks
 * @param {string} code - The code to process
 * @returns {string} Code with consistent indentation
 */
const removeExtraIndentation = (code) => {
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
};

/**
 * Parse and extract code blocks from JSX string
 * @param {string} jsx - JSX string containing code blocks
 * @returns {Object} Extracted code blocks with language info
 */
export const extractCodeBlocks = (jsx) => {
  // Example implementation - can be expanded for more complex cases
  const regex = /```(\w+)?\s*\n([\s\S]*?)```/g;
  const blocks = [];
  let match;

  while ((match = regex.exec(jsx)) !== null) {
    blocks.push({
      language: match[1] || 'jsx',
      code: match[2],
    });
  }

  return blocks;
};

/**
 * Copy text to clipboard
 * @param {string} text - Text to copy
 * @returns {Promise<boolean>} Whether the copy was successful
 */
export const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    console.error('Failed to copy text:', err);
    return false;
  }
};
