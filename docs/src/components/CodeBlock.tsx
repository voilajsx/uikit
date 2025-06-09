import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@voilajsx/uikit/button';
import { Check, Copy, Terminal } from 'lucide-react';
import { useTheme } from '@voilajsx/uikit/theme-provider';
import hljs from 'highlight.js';

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
  showLineNumbers?: boolean;
}

function CodeBlock({ 
  code, 
  language = 'tsx', 
  title, 
  showLineNumbers = false
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const codeRef = useRef<HTMLElement>(null);
  const { variant } = useTheme();

  // Dynamic theme loading based on theme variant
  useEffect(() => {
    // Remove existing highlight.js theme
    const existingLink = document.querySelector('link[data-hljs-theme]');
    if (existingLink) {
      existingLink.remove();
    }

    // Remove existing override styles
    const existingOverride = document.querySelector('style[data-hljs-override]');
    if (existingOverride) {
      existingOverride.remove();
    }

    // Add new theme based on current mode
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.setAttribute('data-hljs-theme', 'true');
    
    if (variant === 'dark') {
      // Options for dark themes:
      // 1. Tokyo Night Dark (VS Code theme)
      //link.href = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/tokyo-night-dark.min.css';
      
      // 2. VS2015 (Visual Studio dark)
       //link.href = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/vs2015.min.css';
      
      // 3. Night Owl (popular theme)
       //link.href = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/night-owl.min.css';
      
      // 4. Dracula (vampire theme)
      // link.href = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/dracula.min.css';
      
      // 5. GitHub Dark (official GitHub dark)
       link.href = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github-dark.min.css';
      
      // 6. Dark theme
      // link.href = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/dark.min.css';
    } else {
      link.href = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github.min.css';
    }
    
    document.head.appendChild(link);

    // Add override styles for better theme integration
    const overrideStyle = document.createElement('style');
    overrideStyle.setAttribute('data-hljs-override', 'true');
    
    if (variant === 'dark') {
      overrideStyle.textContent = `
        .hljs {
          background: hsl(var(--card)) !important;
          color: #a9b1d6 !important;
        }
        /* Tokyo Night Dark colors */
        .hljs-keyword,
        .hljs-selector-tag,
        .hljs-literal,
        .hljs-type,
        .hljs-built_in,
        .hljs-operator,
        .hljs-deletion,
        .hljs-template-tag {
          color: #bb9af7 !important;
        }
        .hljs-string,
        .hljs-attr,
        .hljs-char,
        .hljs-doctag,
        .hljs-addition {
          color: #9ece6a !important;
        }
        .hljs-comment,
        .hljs-quote {
          color: #565f89 !important;
          font-style: italic !important;
        }
        .hljs-number,
        .hljs-regexp,
        .hljs-link {
          color: #ff9e64 !important;
        }
        .hljs-function,
        .hljs-title,
        .hljs-title.function,
        .hljs-title.class,
        .hljs-section,
        .hljs-name {
          color: #7aa2f7 !important;
        }
        .hljs-variable,
        .hljs-template-variable,
        .hljs-params,
        .hljs-subst {
          color: #f7768e !important;
        }
        .hljs-tag,
        .hljs-symbol,
        .hljs-bullet {
          color: #f7768e !important;
        }
        .hljs-meta,
        .hljs-meta-keyword,
        .hljs-meta-string {
          color: #7aa2f7 !important;
        }
        .hljs-property,
        .hljs-attribute {
          color: #ff9e64 !important;
        }
        .hljs-selector-id,
        .hljs-selector-class,
        .hljs-selector-attr,
        .hljs-selector-pseudo {
          color: #bb9af7 !important;
        }
        .hljs-emphasis {
          font-style: italic !important;
        }
        .hljs-strong {
          font-weight: bold !important;
        }
        .hljs-punctuation {
          color: #a9b1d6 !important;
        }
        .hljs-code {
          color: #9ece6a !important;
        }
        .hljs-formula {
          color: #bb9af7 !important;
        }
      `;
    } else {
      overrideStyle.textContent = `
        .hljs {
          background: hsl(var(--card)) !important;
          color: #24292f !important;
        }
        /* Keywords, operators, imports */
        .hljs-keyword,
        .hljs-selector-tag,
        .hljs-literal,
        .hljs-type,
        .hljs-built_in,
        .hljs-operator,
        .hljs-deletion,
        .hljs-template-tag {
          color: #d73a49 !important;
        }
        /* Strings, attributes */
        .hljs-string,
        .hljs-attr,
        .hljs-char,
        .hljs-doctag,
        .hljs-addition {
          color: #032f62 !important;
        }
        /* Comments */
        .hljs-comment,
        .hljs-quote {
          color: #6a737d !important;
          font-style: italic !important;
        }
        /* Numbers, constants */
        .hljs-number,
        .hljs-regexp,
        .hljs-link {
          color: #005cc5 !important;
        }
        /* Functions, methods, titles */
        .hljs-function,
        .hljs-title,
        .hljs-title.function,
        .hljs-title.class,
        .hljs-section,
        .hljs-name {
          color: #6f42c1 !important;
        }
        /* Variables, parameters */
        .hljs-variable,
        .hljs-template-variable,
        .hljs-params,
        .hljs-subst {
          color: #e36209 !important;
        }
        /* Tags, symbols */
        .hljs-tag,
        .hljs-symbol,
        .hljs-bullet {
          color: #22863a !important;
        }
        /* Meta, decorators */
        .hljs-meta,
        .hljs-meta-keyword,
        .hljs-meta-string {
          color: #005cc5 !important;
        }
        /* Property names */
        .hljs-property,
        .hljs-attribute {
          color: #6f42c1 !important;
        }
        /* Class names, selectors */
        .hljs-selector-id,
        .hljs-selector-class,
        .hljs-selector-attr,
        .hljs-selector-pseudo {
          color: #6f42c1 !important;
        }
        /* Emphasis */
        .hljs-emphasis {
          font-style: italic !important;
        }
        .hljs-strong {
          font-weight: bold !important;
        }
        /* Punctuation */
        .hljs-punctuation {
          color: #24292f !important;
        }
        /* Code block background */
        .hljs-code {
          color: #032f62 !important;
        }
        /* Formula */
        .hljs-formula {
          color: #d73a49 !important;
        }
      `;
    }
    
    document.head.appendChild(overrideStyle);

    // Force re-highlight all code blocks after theme loads
    const timeoutId = setTimeout(() => {
      document.querySelectorAll('pre code.hljs').forEach((block) => {
        if (block instanceof HTMLElement) {
          block.removeAttribute('data-highlighted');
          hljs.highlightElement(block);
        }
      });
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      const linkToRemove = document.querySelector('link[data-hljs-theme]');
      if (linkToRemove) {
        linkToRemove.remove();
      }
      const overrideToRemove = document.querySelector('style[data-hljs-override]');
      if (overrideToRemove) {
        overrideToRemove.remove();
      }
    };
  }, [variant]);

  // Re-highlight when code, language, or theme changes
  useEffect(() => {
    if (codeRef.current) {
      // Remove any existing highlighting
      codeRef.current.removeAttribute('data-highlighted');
      codeRef.current.className = codeRef.current.className.replace(/hljs-\w+/g, '');
      
      // Set the code content and language
      codeRef.current.textContent = code;
      codeRef.current.className = `hljs language-${language} block font-mono ${showLineNumbers ? 'ml-12' : ''}`;
      
      // Apply syntax highlighting
      hljs.highlightElement(codeRef.current);
    }
  }, [code, language, showLineNumbers, variant]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  const lines = code.split('\n');
  const isTerminal = language === 'bash' || language === 'shell';

  return (
    <div className="relative rounded-xl border border-secondary bg-card overflow-hidden shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border/30 px-4 py-3 bg-muted/30">
        <div className="flex items-center gap-3">
          {isTerminal ? (
            <Terminal className="h-4 w-4 text-muted-foreground" />
          ) : (
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/60"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/60"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/60"></div>
            </div>
          )}
          {title && (
            <span className="text-sm font-medium text-foreground">{title}</span>
          )}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground font-mono uppercase tracking-wide">
            {language}
          </span>
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7 hover:bg-background/80 text-muted-foreground hover:text-foreground"
            onClick={handleCopy}
            title="Copy code"
          >
            {copied ? (
              <Check className="h-3.5 w-3.5 text-green-500" />
            ) : (
              <Copy className="h-3.5 w-3.5" />
            )}
          </Button>
        </div>
      </div>

      {/* Code Content */}
      <div className="relative">
        <div className="overflow-x-auto">
          <pre className="p-4 text-sm leading-relaxed m-0 bg-transparent text-foreground ">
            {showLineNumbers && (
              <div className="absolute left-0 top-0 bottom-0 w-12 bg-muted/20 border-r border-border/30 flex flex-col items-center justify-start pt-4 text-xs text-muted-foreground font-mono select-none">
                {lines.map((_, index) => (
                  <div key={index + 1} className="leading-relaxed h-[1.375rem] flex items-center">
                    {index + 1}
                  </div>
                ))}
              </div>
            )}
            <code 
              ref={codeRef}
              className={`hljs block font-mono ${showLineNumbers ? 'ml-12' : ''}`}
              data-language={language}
            >
              {/* Code will be populated and highlighted by highlight.js */}
            </code>
          </pre>
        </div>

        {/* Gradient fade for long code */}
        {lines.length > 15 && (
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-card to-transparent pointer-events-none" />
        )}
      </div>

      {/* Copy feedback */}
      {copied && (
        <div className="absolute top-2 right-12 bg-green-500 text-white text-xs px-2 py-1 rounded animate-in fade-in slide-in-from-top-1 z-10">
          Copied!
        </div>
      )}
    </div>
  );
}

export default CodeBlock;