import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AdminTemplate } from '../../../src/templates/admin.jsx';
import { Button } from '../../../src/components/ui/button.jsx';
import { Home, BookOpen, Puzzle, Layout as LayoutIcon, Palette, Code } from 'lucide-react';
import ThemeSwitcher from './ThemeSwitcher';

const navigation = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Start', href: '/start', icon: BookOpen },
  { name: 'Components', href: '/components', icon: Puzzle },
  { name: 'Templates', href: '/templates', icon: LayoutIcon },
  { name: 'Themes', href: '/themes', icon: Palette },
  { name: 'Examples', href: '/examples', icon: Code },
  
  // 14 additional dummy items for scroll testing
  { name: 'Dashboard', href: '/dashboard', icon: LayoutIcon },
  { name: 'Analytics', href: '/analytics', icon: Palette },
  { name: 'Reports', href: '/reports', icon: BookOpen },
  { name: 'Settings', href: '/settings', icon: Code },
  { name: 'Users', href: '/users', icon: Home },
  { name: 'Products', href: '/products', icon: Puzzle },
  { name: 'Orders', href: '/orders', icon: BookOpen },
  { name: 'Invoices', href: '/invoices', icon: LayoutIcon },
  { name: 'Customers', href: '/customers', icon: Palette },
  { name: 'Inventory', href: '/inventory', icon: Code },
  { name: 'Shipping', href: '/shipping', icon: Home },
  { name: 'Payments', href: '/payments', icon: Puzzle },
  { name: 'Reviews', href: '/reviews', icon: BookOpen },
  { name: 'Support', href: '/support', icon: LayoutIcon },
  { name: 'Documentation', href: '/docs', icon: Palette },
  { name: 'API Reference', href: '/api', icon: Code },
  { name: 'Changelog', href: '/changelog', icon: Home },
  { name: 'Downloads', href: '/downloads', icon: Puzzle },
  { name: 'Contact', href: '/contact', icon: BookOpen },
  { name: 'About', href: '/about', icon: LayoutIcon },
];

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  const location = useLocation();

  // Sidebar content - exactly like your original navigation
  const sidebarContent = (
    <nav className="px-3 sm:px-4 py-4 sm:py-6 space-y-1">
      {navigation.map((item) => {
        const Icon = item.icon;
        const isActive = location.pathname === item.href;
        
        return (
          <Button
            key={item.name}
            variant={isActive ? "secondary" : "ghost"}
            className="w-full justify-start text-foreground hover:text-foreground hover:bg-muted h-9 sm:h-10"
            asChild
          >
            <Link to={item.href}>
              <Icon className="mr-2 sm:mr-3 h-4 w-4" />
              <span className="text-sm sm:text-base">{item.name}</span>
            </Link>
          </Button>
        );
      })}
    </nav>
  );

  // Sidebar footer - exactly like your original
  const sidebarFooter = (
    <div className="p-3 sm:p-4 text-center">
      <p className="text-xs text-muted-foreground">
        v1.0.0
      </p>
    </div>
  );

  // Header actions - your theme switcher
  const headerActions = <ThemeSwitcher />;

  return (
    <AdminTemplate
      title="@voilajsx/uikit"
      subtitle="Documentation"
      headerActions={headerActions}
      sidebarContent={sidebarContent}
      sidebarFooter={sidebarFooter}
      sidebarWidth="w-64"
      headerHeight="h-14 sm:h-16"
    >
      {children}
    </AdminTemplate>
  );
}

export default Layout;