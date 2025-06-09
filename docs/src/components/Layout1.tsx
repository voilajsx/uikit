
/**
 * Example usage of AdminTemplate with header variants
 * @file examples/admin-layout-example.jsx
 */

import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { cn } from '@voilajsx/uikit/utils';
import { AdminTemplate } from '@voilajsx/uikit/templates/admin';
import { Button } from '@voilajsx/uikit/button';
import { Badge } from '@voilajsx/uikit/badge';
import { Separator } from '@voilajsx/uikit/separator';
import { useTheme } from '@voilajsx/uikit/theme-provider';
import { 
  Home,
  Users,
  Settings,
  BarChart3,
  FileText,
  Package,
  Shield,
  Bell,
  Search,
  User,
  LogOut,
  ChevronRight,
  Sparkles,
  Sun,
  Moon
} from 'lucide-react';

/**
 * Logo component that adapts to header variants
 */
function LogoComponent(headerVariant) {
  const logoTextColor = {
    default: "text-foreground",
    primary: "text-primary-foreground", 
    black: "text-zinc-100"
  };

  return (
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center">
        <Sparkles className="h-4 w-4 text-primary-foreground" />
      </div>
      <span className={cn("text-lg font-semibold", logoTextColor[headerVariant])}>
        Admin
      </span>
    </div>
  );
}

/**
 * Header actions component that adapts to header variants
 */
function HeaderActionsComponent(headerVariant) {
  const { variant, toggleVariant } = useTheme();
  
  const getButtonStyles = () => {
    switch (headerVariant) {
      case "primary":
        return "text-primary-foreground hover:bg-primary-foreground/10";
      case "black":
        return "text-zinc-100 hover:bg-zinc-800";
      default:
        return "text-muted-foreground hover:text-foreground hover:bg-muted";
    }
  };

  return (
    <div className="flex items-center gap-2">
      <Button variant="ghost" size="icon" className={getButtonStyles()}>
        <Search className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="icon" className={getButtonStyles()}>
        <Bell className="h-4 w-4" />
      </Button>
      <Button 
        variant="ghost" 
        size="icon" 
        onClick={toggleVariant}
        className={getButtonStyles()}
      >
        {variant === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
      </Button>
      <Button variant="ghost" size="icon" className={getButtonStyles()}>
        <User className="h-4 w-4" />
      </Button>
    </div>
  );
}

/**
 * Sidebar Navigation Component with Two-level Menus
 */
function SidebarNavigation() {
  const location = useLocation();
  const navigate = useNavigate();
  const [expandedMenus, setExpandedMenus] = useState(new Set());

  const toggleMenu = (menuKey) => {
    const newExpanded = new Set(expandedMenus);
    if (newExpanded.has(menuKey)) {
      newExpanded.delete(menuKey);
    } else {
      newExpanded.add(menuKey);
    }
    setExpandedMenus(newExpanded);
  };

  const navItems = [
    {
      title: "Dashboard",
      icon: Home,
      path: "/admin",
      isActive: location.pathname === "/admin"
    },
    {
      title: "User Management",
      icon: Users,
      key: "users",
      isActive: location.pathname.startsWith("/admin/users"),
      badge: "23",
      submenu: [
        {
          title: "All Users",
          path: "/admin/users",
          isActive: location.pathname === "/admin/users"
        },
        {
          title: "User Roles",
          path: "/admin/users/roles",
          isActive: location.pathname === "/admin/users/roles"
        },
        {
          title: "Permissions",
          path: "/admin/users/permissions",
          isActive: location.pathname === "/admin/users/permissions"
        },
        {
          title: "User Groups",
          path: "/admin/users/groups",
          isActive: location.pathname === "/admin/users/groups"
        }
      ]
    },
    {
      title: "Products & Orders",
      icon: Package,
      key: "ecommerce",
      isActive: location.pathname.startsWith("/admin/products") || location.pathname.startsWith("/admin/orders"),
      submenu: [
        {
          title: "All Products",
          path: "/admin/products",
          isActive: location.pathname === "/admin/products"
        },
        {
          title: "Product Categories",
          path: "/admin/products/categories",
          isActive: location.pathname === "/admin/products/categories"
        },
        {
          title: "Inventory Management",
          path: "/admin/products/inventory",
          isActive: location.pathname === "/admin/products/inventory"
        },
        {
          title: "Orders",
          path: "/admin/orders",
          isActive: location.pathname.startsWith("/admin/orders"),
          badge: "12"
        },
        {
          title: "Customers",
          path: "/admin/customers",
          isActive: location.pathname.startsWith("/admin/customers")
        }
      ]
    },
    {
      title: "Analytics & Reports",
      icon: BarChart3,
      key: "analytics",
      isActive: location.pathname.startsWith("/admin/analytics") || location.pathname.startsWith("/admin/reports"),
      submenu: [
        {
          title: "Dashboard Analytics",
          path: "/admin/analytics",
          isActive: location.pathname === "/admin/analytics"
        },
        {
          title: "Sales Reports",
          path: "/admin/reports/sales",
          isActive: location.pathname === "/admin/reports/sales"
        },
        {
          title: "User Analytics",
          path: "/admin/reports/users",
          isActive: location.pathname === "/admin/reports/users"
        },
        {
          title: "Traffic Reports",
          path: "/admin/reports/traffic",
          isActive: location.pathname === "/admin/reports/traffic"
        }
      ]
    },
    {
      title: "Content Management",
      icon: FileText,
      key: "content",
      isActive: location.pathname.startsWith("/admin/content"),
      submenu: [
        {
          title: "Pages",
          path: "/admin/content/pages",
          isActive: location.pathname === "/admin/content/pages"
        },
        {
          title: "Blog Posts",
          path: "/admin/content/blog",
          isActive: location.pathname === "/admin/content/blog"
        },
        {
          title: "Media Library",
          path: "/admin/content/media",
          isActive: location.pathname === "/admin/content/media"
        },
        {
          title: "SEO Settings",
          path: "/admin/content/seo",
          isActive: location.pathname === "/admin/content/seo"
        }
      ]
    },
    {
      title: "Security",
      icon: Shield,
      key: "security",
      isActive: location.pathname.startsWith("/admin/security"),
      submenu: [
        {
          title: "Security Overview",
          path: "/admin/security",
          isActive: location.pathname === "/admin/security"
        },
        {
          title: "Access Logs",
          path: "/admin/security/logs",
          isActive: location.pathname === "/admin/security/logs"
        },
        {
          title: "Two-Factor Auth",
          path: "/admin/security/2fa",
          isActive: location.pathname === "/admin/security/2fa"
        },
        {
          title: "API Security",
          path: "/admin/security/api",
          isActive: location.pathname === "/admin/security/api"
        }
      ]
    }
  ];

  const settingsItems = [
    {
      title: "System Settings",
      icon: Settings,
      key: "settings",
      isActive: location.pathname.startsWith("/admin/settings"),
      submenu: [
        {
          title: "General Settings",
          path: "/admin/settings",
          isActive: location.pathname === "/admin/settings"
        },
        {
          title: "Email Configuration",
          path: "/admin/settings/email",
          isActive: location.pathname === "/admin/settings/email"
        },
        {
          title: "Notifications",
          path: "/admin/settings/notifications",
          isActive: location.pathname === "/admin/settings/notifications"
        },
        {
          title: "Integrations",
          path: "/admin/settings/integrations",
          isActive: location.pathname === "/admin/settings/integrations"
        }
      ]
    }
  ];

  const renderMenuItem = (item, isSubmenuItem = false) => {
    const hasSubmenu = !isSubmenuItem && item.submenu && item.submenu.length > 0;
    const isExpanded = expandedMenus.has(item.key);

    return (
      <div key={item.key || item.path} className="space-y-1">
        <button
          onClick={() => {
            if (hasSubmenu) {
              toggleMenu(item.key);
            } else {
              navigate(item.path);
            }
          }}
          className={cn(
            "w-full flex items-center gap-3 py-2.5 text-sm rounded-lg transition-all duration-200",
            isSubmenuItem ? "px-4 ml-6" : "px-3",
            item.isActive
              ? "bg-primary text-primary-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground hover:bg-muted"
          )}
        >
          {!isSubmenuItem && item.icon && (
            <item.icon className="h-4 w-4 flex-shrink-0" />
          )}
          {isSubmenuItem && (
            <div className="flex items-center flex-shrink-0">
              <div className="w-4 h-px bg-border mr-2" />
              <div className={cn(
                "w-2 h-2 rounded-full",
                item.isActive ? "bg-primary-foreground" : "bg-muted-foreground"
              )} />
            </div>
          )}
          <span className="flex-1 text-left font-medium">{item.title}</span>
          {item.badge && (
            <Badge variant={item.isActive ? "secondary" : "outline"} className="text-xs">
              {item.badge}
            </Badge>
          )}
          {hasSubmenu && (
            <ChevronRight className={cn(
              "h-4 w-4 flex-shrink-0 transition-transform duration-200",
              isExpanded && "rotate-90"
            )} />
          )}
        </button>
        
        {/* Submenu with slide animation */}
        {hasSubmenu && (
          <div className={cn(
            "overflow-hidden transition-all duration-300 ease-in-out",
            isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          )}>
            <div className="py-1 space-y-1">
              {item.submenu.map((subItem) => renderMenuItem(subItem, true))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <nav className="p-4 space-y-6">
      {/* Main Navigation */}
      <div>
        <h3 className="px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
          Main Navigation
        </h3>
        <div className="space-y-1">
          {navItems.map((item) => renderMenuItem(item))}
        </div>
      </div>

      <Separator />

      {/* Settings Section */}
      <div>
        <h3 className="px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
          System
        </h3>
        <div className="space-y-1">
          {settingsItems.map((item) => renderMenuItem(item))}
        </div>
      </div>
    </nav>
  );
}

/**
 * Sidebar Footer Component
 */
function SidebarFooter() {
  return (
    <div className="p-4 space-y-2">
      <div className="flex items-center gap-3 px-3 py-2">
        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
          <User className="h-4 w-4 text-primary-foreground" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-foreground truncate">John Doe</p>
          <p className="text-xs text-muted-foreground truncate">admin@company.com</p>
        </div>
      </div>
      <Button variant="ghost" size="sm" className="w-full justify-start text-muted-foreground">
        <LogOut className="h-4 w-4 mr-2" />
        Sign Out
      </Button>
    </div>
  );
}

/**
 * Example Admin Layout using AdminTemplate
 */
function AdminLayout({ children, headerVariant = "default" }) {
  return (
    <AdminTemplate
      title="Admin Dashboard"
      headerVariant={headerVariant}
      logoComponent={LogoComponent}
      headerActionsComponent={HeaderActionsComponent}
      sidebarContent={<SidebarNavigation />}
      sidebarFooter={<SidebarFooter />}
      sticky={true}
    >
      {children}
    </AdminTemplate>
  );
}

export default AdminLayout;