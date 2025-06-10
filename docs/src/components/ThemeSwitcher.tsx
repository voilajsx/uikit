import React from 'react';
import { useTheme } from '../../../src/themes/theme-provider.jsx';
import { Button } from '../../../src/components/ui/button.jsx';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../../src/components/ui/select.jsx';
import { Sun, Moon } from 'lucide-react';
import { cn } from '../../../src/lib/utils.js';

/**
 * Adaptive Theme Switcher that works on any background
 * @param {Object} props - Component props
 * @param {'default'|'onDark'|'onLight'|'minimal'} [props.variant='default'] - Visual variant
 * @param {string} [props.className] - Additional CSS classes
 * @param {boolean} [props.showThemeSelector=true] - Show theme dropdown
 * @param {boolean} [props.showVariantToggle=true] - Show light/dark toggle
 * @param {'horizontal'|'vertical'} [props.orientation='horizontal'] - Layout orientation
 * @returns {JSX.Element} Theme switcher component
 */
function ThemeSwitcher({ 
  variant = 'default',
  className,
  showThemeSelector = true,
  showVariantToggle = true,
  orientation = 'horizontal'
}) {
  const { theme, variant: currentVariant, setTheme, toggleVariant } = useTheme();

  const themes = [
    { id: 'default', name: 'Default', color: 'bg-blue-500' },
    { id: 'metro', name: 'Metro', color: 'bg-slate-500' },
    { id: 'studio', name: 'Studio', color: 'bg-amber-500' },
    { id: 'ruby', name: 'Ruby', color: 'bg-red-500' },
    { id: 'neon', name: 'Neon', color: 'bg-fuchsia-500' },
    { id: 'aurora', name: 'Aurora', color: 'bg-purple-500' },
  ];

  // Get variant-specific styles
  const getStyles = () => {
    switch (variant) {
      case 'onDark':
        // For dark backgrounds (like primary header)
        return {
          select: "bg-white/10 text-white border-white/30 hover:bg-white/20 data-[state=open]:bg-white/20",
          selectValue: "text-white",
          selectItem: "text-white",
          button: "text-white hover:bg-white/10 border-white/30"
        };
      
      case 'onLight':
        // For light backgrounds
        return {
          select: "bg-black/5 text-gray-900 border-gray-300 hover:bg-black/10 data-[state=open]:bg-black/10",
          selectValue: "text-gray-900",
          selectItem: "text-gray-900",
          button: "text-gray-900 hover:bg-black/5 border-gray-300"
        };
      
      case 'minimal':
        // Minimal style using semantic colors
        return {
          select: "bg-transparent text-foreground border-border hover:bg-muted/50",
          selectValue: "text-foreground",
          selectItem: "text-foreground",
          button: "text-foreground hover:bg-muted border-border"
        };
      
      default:
        // Default using semantic design tokens (works everywhere)
        return {
          select: "bg-background text-foreground border-border hover:bg-muted data-[state=open]:bg-muted",
          selectValue: "text-foreground",
          selectItem: "text-foreground",
          button: "text-foreground hover:bg-muted border-border"
        };
    }
  };

  const styles = getStyles();
  const isVertical = orientation === 'vertical';

  return (
    <div className={cn(
      "flex items-center gap-2",
      isVertical && "flex-col",
      className
    )}>
      {/* Theme Selector */}
      {showThemeSelector && (
        <Select value={theme} onValueChange={setTheme}>
          <SelectTrigger className={cn(
            "w-28 sm:w-36 h-9",
            styles.select
          )}>
            <SelectValue placeholder="Theme">
              <div className="flex items-center gap-2">
                <div className={cn(
                  "w-3 h-3 rounded-full",
                  themes.find(t => t.id === theme)?.color || 'bg-blue-500'
                )} />
                <span className={styles.selectValue}>
                  {themes.find(t => t.id === theme)?.name || 'Theme'}
                </span>
              </div>
            </SelectValue>
          </SelectTrigger>
          
          <SelectContent className="bg-background border-border shadow-lg">
            {themes.map((t) => (
              <SelectItem 
                key={t.id} 
                value={t.id}
                className="hover:bg-muted focus:bg-muted data-[highlighted]:bg-muted"
              >
                <div className="flex items-center gap-2">
                  <div className={cn("w-3 h-3 rounded-full", t.color)} />
                  <span className="text-foreground">{t.name}</span>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )}

      {/* Dark/Light Toggle */}
      {showVariantToggle && (
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleVariant}
          title={`Switch to ${currentVariant === 'light' ? 'dark' : 'light'} mode`}
          className={cn("h-9 w-9", styles.button)}
        >
          {currentVariant === 'light' ? (
            <Moon className="h-4 w-4" />
          ) : (
            <Sun className="h-4 w-4" />
          )}
        </Button>
      )}
    </div>
  );
}

// Export variants as separate components for convenience
export function HeaderThemeSwitcher(props) {
  return <ThemeSwitcher variant="onDark" {...props} />;
}

export function CardThemeSwitcher(props) {
  return <ThemeSwitcher variant="default" {...props} />;
}

export function LightThemeSwitcher(props) {
  return <ThemeSwitcher variant="onLight" {...props} />;
}

export function MinimalThemeSwitcher(props) {
  return <ThemeSwitcher variant="minimal" {...props} />;
}

export default ThemeSwitcher;