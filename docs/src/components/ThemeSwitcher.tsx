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

function ThemeSwitcher() {
  const { theme, variant, setTheme, toggleVariant } = useTheme();

  const themes = [
    { id: 'default', name: 'Default', color: 'bg-blue-500' },
    { id: 'metro', name: 'Metro', color: 'bg-slate-500' },
    { id: 'studio', name: 'Studio', color: 'bg-amber-500' },
    { id: 'ruby', name: 'Ruby', color: 'bg-red-500' },
    { id: 'neon', name: 'Neon', color: 'bg-fuchsia-500' },
    { id: 'aurora', name: 'Aurora', color: 'bg-purple-500' },
  ];

  return (
    <div className="flex items-center gap-2">
      {/* Theme Selector - Remove custom styling to use default theme colors */}
      <Select value={theme} onValueChange={setTheme}>
        <SelectTrigger className="w-28 sm:w-36 bg-primary-foreground/10 text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/20 data-[state=open]:bg-primary-foreground/20 data-[state=open]:border-primary-foreground/50">
          <SelectValue placeholder="Theme">
            <div className="flex items-center gap-2 text-primary-foreground">
              <div className={`w-3 h-3 rounded-full ${themes.find(t => t.id === theme)?.color || 'bg-blue-500'}`} />
              <span className="text-primary-foreground">{themes.find(t => t.id === theme)?.name || 'Theme'}</span>
            </div>
          </SelectValue>
        </SelectTrigger>
        <SelectContent className="bg-background border-border/50 shadow-lg text-foreground">
          {themes.map((t) => (
            <SelectItem 
              key={t.id} 
              value={t.id}
              className="hover:bg-muted focus:bg-muted text-foreground data-[highlighted]:bg-muted data-[highlighted]:text-foreground"
            >
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${t.color}`} />
                <span className="text-foreground">{t.name}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Dark/Light Toggle */}
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleVariant}
        title={`Switch to ${variant === 'light' ? 'dark' : 'light'} mode`}
        className="h-9 w-9 text-primary-foreground hover:bg-primary-foreground/10 border border-primary-foreground/30"
      >
        {variant === 'light' ? (
          <Moon className="h-4 w-4" />
        ) : (
          <Sun className="h-4 w-4" />
        )}
      </Button>
    </div>
  );
}

export default ThemeSwitcher;