import React, { useState, useEffect, useRef } from 'react';
import { Button } from '../../../src/components/ui/button.jsx';
import { Check, Copy, Terminal } from 'lucide-react';
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

  // Initialize highlight.js when component mounts
  useEffect(() => {
    if (codeRef.current) {
      // Remove any existing highlighting classes
      codeRef.current.removeAttribute('data-highlighted');
      codeRef.current.className = codeRef.current.className.replace(/hljs-\w+/g, '');
      
      // Set the code content and language
      codeRef.current.textContent = code;
      codeRef.current.className = `hljs language-${language} block font-mono ${showLineNumbers ? 'ml-12' : ''}`;
      
      // Apply syntax highlighting
      hljs.highlightElement(codeRef.current);
    }
  }, [code, language, showLineNumbers]);

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
    <div className="relative rounded-xl border border-border/50 bg-card overflow-hidden shadow-sm">
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
          <pre className="p-4 text-sm leading-relaxed m-0 bg-transparent">
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