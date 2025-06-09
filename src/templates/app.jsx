/**
 * @fileoverview Mobile-first app template with cross-platform adaptations
 * @description Template for consumer apps, PWAs, and mobile-first applications
 * @package @voilajsx/uikit
 * @file /src/templates/app.jsx
 */

import { forwardRef, useState, useEffect } from "react";
import { cn } from "../lib/utils";
import { Button } from "../components/ui/button";
import { ArrowLeft, Menu, MoreVertical, Home, Search, Bell, User } from "lucide-react";

/**
 * Mobile-first app template with adaptive navigation and responsive design
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {string} [props.variant="mobile-first"] - Layout variant: mobile-first | desktop | hybrid
 * @param {string} [props.navigation="adaptive"] - Navigation type: top | bottom | floating | adaptive
 * @param {string} [props.header="standard"] - Header style: minimal | standard | hero | none
 * @param {string} [props.title] - App/page title
 * @param {string} [props.subtitle] - Page subtitle
 * @param {boolean} [props.showBackButton=false] - Show back navigation button
 * @param {boolean} [props.safeArea=true] - Handle safe areas for mobile devices
 * @param {React.ReactNode} [props.headerActions] - Header action buttons
 * @param {React.ReactNode} [props.navigationItems] - Custom navigation items
 * @param {React.ReactNode} [props.floatingAction] - Floating action button
 * @param {React.ReactNode} props.children - Main content
 * @param {Function} [props.onBackPress] - Back button callback
 * @param {Function} [props.onMenuPress] - Menu button callback
 * @returns {JSX.Element} App template
 */
const AppTemplate = forwardRef(({ 
  className,
  variant = "mobile-first",
  navigation = "adaptive",
  header = "standard",
  title,
  subtitle,
  showBackButton = false,
  safeArea = true,
  headerActions,
  navigationItems,
  floatingAction,
  children,
  onBackPress,
  onMenuPress,
  ...props 
}, ref) => {
  const [activeTab, setActiveTab] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  // Determine navigation position based on variant and screen size
  const getNavigationPosition = () => {
    if (navigation === 'adaptive') {
      if (variant === 'mobile-first') return 'bottom';
      if (variant === 'desktop') return 'top';
      return window.innerWidth < 768 ? 'bottom' : 'top';
    }
    return navigation;
  };

  const [navPosition, setNavPosition] = useState(getNavigationPosition());

  // Update navigation position on resize
  useEffect(() => {
    const handleResize = () => {
      setNavPosition(getNavigationPosition());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [variant, navigation]);

  // Handle scroll for header effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Default navigation items
  const defaultNavItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'search', icon: Search, label: 'Search' },
    { id: 'notifications', icon: Bell, label: 'Notifications' },
    { id: 'profile', icon: User, label: 'Profile' }
  ];

  const navItems = navigationItems || defaultNavItems;

  const renderHeader = () => {
    if (header === 'none') return null;

    return (
      <header className={cn(
        "sticky top-0 z-40 w-full border-b border-border/10 bg-background/80 backdrop-blur-sm transition-all duration-200",
        safeArea && "pt-safe-top",
        isScrolled && "shadow-sm border-border/20",
        header === 'minimal' && "border-b-0",
        header === 'hero' && "bg-primary text-primary-foreground border-primary/20"
      )}>
        <div className={cn(
          "flex items-center justify-between px-4",
          header === 'minimal' ? "h-12" : "h-14 md:h-16"
        )}>
          {/* Left section */}
          <div className="flex items-center gap-3 min-w-0 flex-1">
            {showBackButton && (
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  "flex-shrink-0",
                  header === 'hero' && "text-primary-foreground hover:bg-primary-foreground/10"
                )}
                onClick={onBackPress}
                aria-label="Go back"
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
            )}
            
            {!showBackButton && onMenuPress && (
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  "md:hidden flex-shrink-0",
                  header === 'hero' && "text-primary-foreground hover:bg-primary-foreground/10"
                )}
                onClick={onMenuPress}
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            )}

            <div className="min-w-0 flex-1">
              {title && (
                <h1 className={cn(
                  "font-semibold truncate",
                  header === 'minimal' ? "text-lg" : "text-lg md:text-xl",
                  header === 'hero' && "text-primary-foreground"
                )}>
                  {title}
                </h1>
              )}
              {subtitle && header !== 'minimal' && (
                <p className={cn(
                  "text-sm text-muted-foreground truncate",
                  header === 'hero' && "text-primary-foreground/70"
                )}>
                  {subtitle}
                </p>
              )}
            </div>
          </div>

          {/* Right section */}
          {headerActions && (
            <div className="flex items-center gap-2 flex-shrink-0">
              {headerActions}
            </div>
          )}
        </div>
      </header>
    );
  };

  const renderBottomNavigation = () => {
    if (navPosition !== 'bottom') return null;

    return (
      <nav className={cn(
        "fixed bottom-0 left-0 right-0 z-40 bg-background border-t border-border/20",
        safeArea && "pb-safe-bottom"
      )}>
        <div className="flex items-center justify-around px-2 py-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            
            return (
              <Button
                key={item.id}
                variant="ghost"
                size="sm"
                className={cn(
                  "flex flex-col items-center gap-1 h-auto py-2 px-3 min-w-0 flex-1",
                  isActive && "text-primary"
                )}
                onClick={() => setActiveTab(item.id)}
              >
                <Icon className={cn("h-5 w-5", isActive && "text-primary")} />
                <span className="text-xs font-medium truncate">{item.label}</span>
              </Button>
            );
          })}
        </div>
      </nav>
    );
  };

  const renderTopNavigation = () => {
    if (navPosition !== 'top') return null;

    return (
      <nav className="border-b border-border/20 bg-background">
        <div className="flex items-center overflow-x-auto px-4 py-2 gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            
            return (
              <Button
                key={item.id}
                variant={isActive ? "default" : "ghost"}
                size="sm"
                className="flex items-center gap-2 whitespace-nowrap"
                onClick={() => setActiveTab(item.id)}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </Button>
            );
          })}
        </div>
      </nav>
    );
  };

  const renderFloatingNavigation = () => {
    if (navPosition !== 'floating') return null;

    return (
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40">
        <div className="flex items-center gap-2 bg-background border border-border/20 rounded-full px-4 py-3 shadow-lg">
          {navItems.slice(0, 4).map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            
            return (
              <Button
                key={item.id}
                variant={isActive ? "default" : "ghost"}
                size="icon"
                className="rounded-full"
                onClick={() => setActiveTab(item.id)}
              >
                <Icon className="h-5 w-5" />
              </Button>
            );
          })}
        </div>
      </nav>
    );
  };

  return (
    <div
      ref={ref}
      className={cn(
        "min-h-screen bg-background flex flex-col",
        safeArea && "min-h-screen-safe",
        className
      )}
      {...props}
    >
      {renderHeader()}
      {renderTopNavigation()}

      {/* Main Content */}
      <main className={cn(
        "flex-1 relative",
        navPosition === 'bottom' && safeArea && "pb-safe-bottom",
        navPosition === 'bottom' && "pb-16"
      )}>
        <div className="h-full">
          {children}
        </div>
      </main>

      {renderBottomNavigation()}
      {renderFloatingNavigation()}

      {/* Floating Action Button */}
      {floatingAction && (
        <div className={cn(
          "fixed bottom-6 right-6 z-50",
          navPosition === 'bottom' && "bottom-24",
          safeArea && navPosition === 'bottom' && "bottom-[calc(6rem+env(safe-area-inset-bottom))]"
        )}>
          {floatingAction}
        </div>
      )}
    </div>
  );
});

AppTemplate.displayName = "AppTemplate";

export { AppTemplate };