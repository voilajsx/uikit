/**
 * Popup Layout Example
 * @module @voilajsx/uikit
 * @file docs/src/pages/examples/layouts/PopupExample.tsx
 */
import React, { useState } from 'react';
import { PopupLayout } from '@voilajsx/uikit/popup';
import { ThemeProvider, useTheme } from '@voilajsx/uikit/theme-provider';
import { Button } from '@voilajsx/uikit/button';
import { Input } from '@voilajsx/uikit/input';
import { Card, CardContent } from '@voilajsx/uikit/card';
import { Badge } from '@voilajsx/uikit/badge';
import { Switch } from '@voilajsx/uikit/switch';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@voilajsx/uikit/tabs';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@voilajsx/uikit/select';
import { 
  Zap, 
  Shield, 
  Settings, 
  MoreVertical, 
  Bell, 
  Star,
  ChevronLeft,
  X,
  Heart,
  Download,
  Palette,
  Sun,
  Moon
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@voilajsx/uikit/dropdown-menu';

export default function PopupLayoutExamples() {
  const [currentVariant, setCurrentVariant] = useState('chrome-extension');
  const [isEnabled, setIsEnabled] = useState(true);
  const [autoMode, setAutoMode] = useState(false);
  const [currentSize, setCurrentSize] = useState('lg');
  const [currentTheme, setCurrentTheme] = useState('default');
  const [currentThemeVariant, setCurrentThemeVariant] = useState('light');

  const Logo = ({ icon: Icon = Zap, color = 'bg-primary' }) => (
    <div className="flex items-center gap-2">
      <div className={`flex items-center justify-center w-6 h-6 ${color} rounded`}>
        <Icon className="w-3 h-3 text-primary-foreground" />
      </div>
      <div>
        <div className="text-sm font-bold">VoilaExtension</div>
        <div className="text-xs text-muted-foreground">v1.0.0</div>
      </div>
    </div>
  );

  const variants = [
    { key: 'chrome-extension', label: 'Chrome Extension', defaultSize: 'lg' },
    { key: 'mobile-overlay', label: 'Mobile Overlay', defaultSize: 'auto' },
    { key: 'mini-widget', label: 'Mini Widget', defaultSize: 'sm' },
    { key: 'notification-panel', label: 'Notifications', defaultSize: 'lg' },
    { key: 'quick-actions', label: 'Quick Actions', defaultSize: 'md' }
  ];

  const sizes = [
    { key: 'sm', label: 'Small (288×320)', description: 'Ultra compact' },
    { key: 'md', label: 'Medium (320×384)', description: 'Standard popup' },
    { key: 'lg', label: 'Large (384×512)', description: 'Feature-rich' },
    { key: 'auto', label: 'Auto (Responsive)', description: 'Mobile-friendly' }
  ];

  const themes = [
    { key: 'default', label: 'Default', description: 'Ocean blue professional' },
    { key: 'aurora', label: 'Aurora', description: 'Purple-green gradients' },
    { key: 'metro', label: 'Metro', description: 'Gray-blue transit' },
    { key: 'neon', label: 'Neon', description: 'Cyberpunk magenta-cyan' },
    { key: 'ruby', label: 'Ruby', description: 'Red with gold accents' },
    { key: 'studio', label: 'Studio', description: 'Designer grays' }
  ];

  // Theme selector component
  const ThemeSelector = () => {
    const { theme, variant, setTheme, setVariant } = useTheme();
    
    return (
      <div className="space-y-3">
        <div className="space-y-2">
          <label className="text-xs font-medium">Theme</label>
          <Select value={theme} onValueChange={setTheme}>
            <SelectTrigger className="h-8 text-xs">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {themes.map((themeOption) => (
                <SelectItem key={themeOption.key} value={themeOption.key}>
                  <div>
                    <div className="font-medium">{themeOption.label}</div>
                    <div className="text-xs text-muted-foreground">
                      {themeOption.description}
                    </div>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center justify-between">
          <label className="text-xs font-medium">Dark Mode</label>
          <Switch
            checked={variant === 'dark'}
            onCheckedChange={(checked) => setVariant(checked ? 'dark' : 'light')}
          />
        </div>
      </div>
    );
  };

  const renderCurrentExample = () => {
    switch (currentVariant) {
      case 'chrome-extension':
        return (
          <PopupLayout
            variant="default"
            size={currentSize}
            logo={<Logo />}
            headerActions={
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground">Enable</span>
                <Switch checked={isEnabled} onCheckedChange={setIsEnabled} />
              </div>
            }
            footer={
              <div className="flex items-center justify-between">
                <Button variant="outline" size="sm" className="text-xs border-input hover:bg-accent hover:text-accent-foreground">
                  {isEnabled ? '🔐 Login to sync' : 'Login'}
                </Button>
                <Button variant="ghost" size="sm" className="hover:bg-accent hover:text-accent-foreground">
                  <Settings className="h-4 w-4" />
                </Button>
              </div>
            }
          >
            <div className="space-y-4">
              {/* Search Box */}
              <div className="relative">
                <Input 
                  placeholder="Search websites, features..." 
                  className="text-sm"
                />
              </div>

              <Tabs defaultValue="controls" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-4 bg-muted">
                  <TabsTrigger 
                    value="controls" 
                    className="data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
                  >
                    Controls
                  </TabsTrigger>
                  <TabsTrigger 
                    value="stats"
                    className="data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
                  >
                    Stats
                  </TabsTrigger>
                  <TabsTrigger 
                    value="theme"
                    className="data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
                  >
                    Theme
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="controls" className="space-y-4 mt-0">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium">Auto Mode</div>
                      <div className="text-xs text-muted-foreground">
                        Automatically optimize pages
                      </div>
                    </div>
                    <Switch 
                      checked={autoMode} 
                      onCheckedChange={setAutoMode}
                      disabled={!isEnabled}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium">Block Trackers</div>
                      <div className="text-xs text-muted-foreground">
                        Prevent tracking scripts
                      </div>
                    </div>
                    <Switch defaultChecked disabled={!isEnabled} />
                  </div>

                  <Card>
                    <CardContent className="p-3">
                      <div className="text-center">
                        <div className="text-lg font-bold text-primary">247</div>
                        <div className="text-xs text-muted-foreground">
                          Pages optimized today
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="stats" className="space-y-3 mt-0">
                  <div className="grid grid-cols-2 gap-3">
                    <Card>
                      <CardContent className="p-3 text-center">
                        <div className="text-lg font-bold">1.2K</div>
                        <div className="text-xs text-muted-foreground">This week</div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-3 text-center">
                        <div className="text-lg font-bold">15K</div>
                        <div className="text-xs text-muted-foreground">All time</div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span>Ads blocked</span>
                      <span className="font-medium">156</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Trackers blocked</span>
                      <span className="font-medium">89</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Scripts optimized</span>
                      <span className="font-medium">42</span>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="theme" className="mt-0">
                  <ThemeSelector />
                </TabsContent>
              </Tabs>
            </div>
          </PopupLayout>
        );

      case 'mobile-overlay':
        const notifications = [
          { id: 1, text: 'New message from John', time: '2m ago' },
          { id: 2, text: 'Update available', time: '5m ago' },
          { id: 3, text: 'Meeting reminder', time: '10m ago' },
        ];

        return (
          <PopupLayout
            variant="compact"
            size="auto"
            title="Notifications"
            subtitle={`${notifications.length} unread`}
            showBack={true}
            onBack={() => console.log('Go back')}
            footer={
              <Button className="w-full" size="sm">
                Mark All as Read
              </Button>
            }
          >
            <div className="space-y-2">
              {notifications.map((notification) => (
                <Card key={notification.id}>
                  <CardContent className="p-3">
                    <div className="flex justify-between items-start">
                      <div className="text-sm">{notification.text}</div>
                      <div className="text-xs text-muted-foreground ml-2">
                        {notification.time}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </PopupLayout>
        );

      case 'mini-widget':
        return (
          <PopupLayout
            variant="mini"
            size="sm"
            title="Quick Note"
            showClose={true}
            onClose={() => console.log('Close')}
          >
            <div className="space-y-2">
              <Input placeholder="Add a note..." className="text-xs" />
              <div className="flex gap-1">
                <Button size="sm" className="flex-1 text-xs">Save</Button>
                <Button variant="outline" size="sm" className="text-xs">Clear</Button>
              </div>
              <div className="text-xs text-muted-foreground">
                5 notes saved
              </div>
            </div>
          </PopupLayout>
        );

      case 'notification-panel':
        return (
          <PopupLayout
            variant="default"
            size="lg"
            title="Security Alerts"
            logo={<Logo icon={Shield} color="bg-destructive" />}
            badge={<Badge variant="destructive">3 threats</Badge>}
            headerActions={
              <Button variant="ghost" size="sm">
                <Bell className="h-4 w-4" />
              </Button>
            }
            footer={
              <div className="flex gap-2">
                <Button variant="destructive" size="sm" className="flex-1">
                  Block All
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  Review
                </Button>
              </div>
            }
          >
            <div className="space-y-3">
              <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-destructive">Malware Detected</span>
                  <Badge variant="destructive" className="text-xs">High Risk</Badge>
                </div>
                <p className="text-xs text-muted-foreground">
                  Suspicious script blocked on example.com
                </p>
              </div>
              
              <div className="bg-orange-100 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-orange-600 dark:text-orange-400">Tracking Blocked</span>
                  <Badge variant="secondary" className="text-xs">Medium</Badge>
                </div>
                <p className="text-xs text-muted-foreground">
                  12 trackers blocked on this page
                </p>
              </div>

              <div className="text-center pt-2">
                <div className="text-lg font-bold">156</div>
                <div className="text-xs text-muted-foreground">Total threats blocked today</div>
              </div>
            </div>
          </PopupLayout>
        );

      case 'quick-actions':
        const actions = [
          { icon: Download, label: 'Download', color: 'text-blue-500' },
          { icon: Heart, label: 'Favorite', color: 'text-red-500' },
          { icon: Star, label: 'Rate', color: 'text-yellow-500' },
          { icon: Settings, label: 'Settings', color: 'text-gray-500' },
        ];

        return (
          <PopupLayout
            variant="compact"
            size="md"
            title="Quick Actions"
          >
            <div className="grid grid-cols-2 gap-3">
              {actions.map((action, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="h-16 flex-col gap-2"
                  onClick={() => console.log(`${action.label} clicked`)}
                >
                  <action.icon className={`h-5 w-5 ${action.color}`} />
                  <span className="text-xs">{action.label}</span>
                </Button>
              ))}
            </div>
          </PopupLayout>
        );

      default:
        return null;
    }
  };

  return (
    <ThemeProvider theme={currentTheme} variant={currentThemeVariant} detectSystem={false}>
      <div className="min-h-screen bg-background p-8">
        {/* Variant Selector */}
        <div className="fixed top-4 left-4 z-10">
          <Card className="w-48">
            <CardContent className="p-3">
              <div className="space-y-3">
                <p className="text-xs font-medium text-muted-foreground">PopupLayout Variants</p>
                <div className="space-y-1">
                  {variants.map((variant) => (
                    <Button
                      key={variant.key}
                      variant={currentVariant === variant.key ? "default" : "ghost"}
                      size="sm"
                      onClick={() => {
                        setCurrentVariant(variant.key);
                        setCurrentSize(variant.defaultSize);
                      }}
                      className="w-full justify-start h-8 text-xs"
                    >
                      {variant.label}
                    </Button>
                  ))}
                </div>
                
                {currentVariant === 'chrome-extension' && (
                  <>
                    <div className="border-t pt-3">
                      <p className="text-xs font-medium text-muted-foreground mb-2">Size</p>
                      <div className="space-y-1">
                        {sizes.map((size) => (
                          <Button
                            key={size.key}
                            variant={currentSize === size.key ? "default" : "ghost"}
                            size="sm"
                            onClick={() => setCurrentSize(size.key)}
                            className="w-full justify-start h-8 text-xs"
                          >
                            <div className="text-left">
                              <div>{size.label.split(' ')[0]}</div>
                              <div className="text-[10px] text-muted-foreground">{size.description}</div>
                            </div>
                          </Button>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Center the current example */}
        <div className="flex items-center justify-center min-h-screen">
          {renderCurrentExample()}
        </div>

        {/* Info Badge */}
        <div className="fixed bottom-4 right-4">
          <Badge variant="secondary" className="text-xs">
            {currentVariant} - {currentVariant === 'chrome-extension' ? currentSize : variants.find(v => v.key === currentVariant)?.defaultSize}
          </Badge>
        </div>

        {/* Instructions */}
        <div className="fixed bottom-4 left-4">
          <Card className="w-64">
            <CardContent className="p-3">
              <p className="text-xs font-medium mb-1">PopupLayout Demo</p>
              <p className="text-xs text-muted-foreground">
                Switch between variants to see different popup layouts. 
                {currentVariant === 'chrome-extension' && ' Use the size selector to test different dimensions. Check the Theme tab inside the popup!'}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </ThemeProvider>
  );
}