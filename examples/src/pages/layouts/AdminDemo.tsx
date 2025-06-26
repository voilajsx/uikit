import React, { useState, useEffect } from 'react';
import { Button } from '../../../../src/components/ui/button';
import { Badge } from '../../../../src/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '../../../../src/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../../src/components/ui/tabs';
import { DataTable } from '../../../../src/components/ui/data-table';
import { Progress } from '../../../../src/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '../../../../src/components/ui/avatar';
import { 
  LineChart, 
  Line, 
  AreaChart, 
  Area, 
  BarChart, 
  Bar, 
  PieChart, 
  Pie, 
  Cell,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';
import { 
  Home, 
  Users, 
  BarChart3, 
  Settings, 
  Bell, 
  Search,
  Package,
  FileText,
  HelpCircle,
  Calendar,
  Mail,
  Phone,
  CreditCard,
  DollarSign,
  Activity,
  Download,
  TrendingUp,
  TrendingDown,
  Plus,
  Filter,
  MoreHorizontal,
  Eye,
  Edit,
  Trash2,
  Shield,
  Database,
  Zap,
  Globe,
  Smartphone,
  Monitor,
  User,
  ChevronDown,
  Menu,
  X
} from 'lucide-react';

// AdminLayout Component (based on the actual implementation)
const AdminLayout = ({ 
  scheme = 'sidebar', 
  tone = 'subtle', 
  size = 'lg',
  title = 'Admin Panel',
  logo,
  navigation = [],
  currentPath = '',
  onNavigate,
  headerActions,
  collapsible = true,
  defaultSidebarOpen = true,
  children 
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(defaultSidebarOpen);
  const [isMobile, setIsMobile] = useState(false);

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      if (mobile && defaultSidebarOpen === true) {
        setSidebarOpen(false);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [defaultSidebarOpen]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Sidebar styles based on tone
  const sidebarToneClasses = {
    clean: 'bg-white border-border text-foreground',
    subtle: 'bg-muted/30 border-border/50 text-foreground',
    brand: 'bg-primary border-primary-foreground/20 text-primary-foreground',
    contrast: 'bg-zinc-900 border-zinc-700/40 text-zinc-100'
  };

  // Header styles based on tone
  const headerToneClasses = {
    clean: 'bg-background/80 backdrop-blur-sm border-border/40 text-foreground',
    subtle: 'bg-muted/50 backdrop-blur-sm border-border/30 text-foreground',
    brand: 'bg-primary border-primary-foreground/20 text-primary-foreground',
    contrast: 'bg-zinc-900 border-zinc-700/40 text-zinc-100'
  };

  // Size configurations
  const sizeConfig = {
    sm: { sidebar: 'w-48', content: 'lg:ml-48' },
    md: { sidebar: 'w-64', content: 'lg:ml-64' },
    lg: { sidebar: 'w-80', content: 'lg:ml-80' },
    xl: { sidebar: 'w-96', content: 'lg:ml-96' },
    full: { sidebar: 'w-[28rem]', content: 'lg:ml-[28rem]' }
  };

  // Navigation Component
  const AdminNavigation = ({ items }) => {
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

    const getMenuItemStyles = (isActive, isSubmenu = false) => {
      const base = 'w-full flex items-center gap-3 rounded-lg transition-all duration-200 group text-left font-medium';
      const padding = isSubmenu ? 'ml-4 px-3 py-2' : 'px-3 py-2.5';
      
      if (tone === 'subtle') {
        return `${base} ${padding} ${isActive 
          ? 'bg-background text-foreground shadow-sm' 
          : 'text-muted-foreground hover:text-foreground hover:bg-background/50'}`;
      }
      if (tone === 'brand') {
        return `${base} ${padding} ${isActive 
          ? 'bg-primary-foreground/20 text-primary-foreground shadow-sm' 
          : 'text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10'}`;
      }
      if (tone === 'contrast') {
        return `${base} ${padding} ${isActive 
          ? 'bg-zinc-800 text-zinc-100 shadow-sm' 
          : 'text-zinc-200 hover:text-zinc-100 hover:bg-zinc-800/80'}`;
      }
      return `${base} ${padding} ${isActive 
        ? 'bg-secondary text-secondary-foreground shadow-sm' 
        : 'text-muted-foreground hover:text-foreground hover:bg-muted/70'}`;
    };

    const MenuItem = ({ item, isSubmenu = false }) => {
      const hasSubmenu = !isSubmenu && item.items && item.items.length > 0;
      const isExpanded = expandedMenus.has(item.key);
      const isActive = item.href ? currentPath === item.href : item.isActive;

      return (
        <div key={item.key} className="w-full">
          <button
            onClick={() => {
              if (hasSubmenu) {
                toggleMenu(item.key);
              } else if (item.href) {
                onNavigate?.(item.href, item);
              } else if (item.onClick) {
                item.onClick();
              }
            }}
            className={getMenuItemStyles(isActive, isSubmenu)}
          >
            {!isSubmenu && item.icon && (
              <item.icon className="h-4 w-4 flex-shrink-0" />
            )}
            
            <span className="flex-1 truncate text-left">{item.label}</span>
            
            {item.badge && (
              <Badge 
                variant={isActive ? 'secondary' : 'outline'} 
                className="text-xs h-4 px-1 ml-1 flex-shrink-0"
              >
                {item.badge}
              </Badge>
            )}
            
            {hasSubmenu && (
              <ChevronDown className={`h-4 w-4 flex-shrink-0 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
            )}
          </button>
          
          {hasSubmenu && isExpanded && item.items && (
            <div className="overflow-hidden transition-all duration-300 mt-1">
              <div className="space-y-1 pb-2">
                {item.items.map((subItem) => (
                  <MenuItem key={subItem.key} item={subItem} isSubmenu={true} />
                ))}
              </div>
            </div>
          )}
        </div>
      );
    };

    return (
      <nav className="p-6 space-y-2">
        <div className="space-y-1">
          {items.map((item) => (
            <MenuItem key={item.key} item={item} />
          ))}
        </div>
      </nav>
    );
  };

  if (scheme === 'sidebar') {
    return (
      <div className="min-h-screen flex bg-background">
        {/* Mobile Overlay */}
        {isMobile && sidebarOpen && (
          <div 
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <aside className={`
          border-r transition-all duration-300 ease-in-out fixed left-0 top-0 z-50 h-full flex flex-col
          ${sizeConfig[size].sidebar}
          ${sidebarToneClasses[tone]}
          ${isMobile ? (sidebarOpen ? 'translate-x-0' : '-translate-x-full') : (sidebarOpen ? 'translate-x-0' : '-translate-x-full')}
        `}>
          <div className="flex flex-col h-full">
            {/* Sidebar Header */}
            <div className="flex items-center justify-between border-b h-16 px-4">
              <h2 className="font-semibold uppercase tracking-wider text-sm text-muted-foreground">
                Navigation
              </h2>
              
              {collapsible && isMobile && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleSidebar}
                  className="flex-shrink-0"
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>

            {/* Sidebar Content */}
            <div className="flex-1 overflow-y-auto">
              <AdminNavigation items={navigation} />
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <div className={`flex-1 flex flex-col min-w-0 transition-all duration-300 ease-in-out ${sidebarOpen && !isMobile ? sizeConfig[size].content : ''}`}>
          {/* Header */}
          <header className={`w-full border-b transition-all duration-200 z-40 ${headerToneClasses[tone]}`}>
            <div className="flex items-center justify-between px-4 lg:px-6 h-16">
              <div className="flex items-center gap-4 min-w-0">
                {/* Hamburger toggle */}
                {collapsible && (
                  <button
                    className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                    onClick={toggleSidebar}
                  >
                    <Menu className="h-5 w-5" />
                  </button>
                )}
                
                {/* Logo and Title */}
                <div className="flex items-center gap-3 min-w-0">
                  {logo && <div className="flex-shrink-0">{logo}</div>}
                  <h1 className="text-lg font-semibold truncate">{title}</h1>
                </div>
              </div>
              
              {/* Header Actions */}
              {headerActions && (
                <div className="flex-shrink-0">
                  {headerActions}
                </div>
              )}
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            <div className="p-4 lg:p-6 w-full">
              <div className="w-full max-w-7xl mx-auto">
                {children}
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }

  // Add other schemes (topbar, hybrid) here if needed
  return (
    <div className="min-h-screen bg-background">
      {children}
    </div>
  );
};

function AdminDemo() {
  const [currentPath, setCurrentPath] = useState('/admin/dashboard');
  const [currentTone, setCurrentTone] = useState('subtle');
  const [currentSize, setCurrentSize] = useState('lg');
  const [currentScheme, setCurrentScheme] = useState('sidebar');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Main navigation
  const navigation = [
    { 
      key: 'dashboard', 
      label: 'Dashboard', 
      href: '/admin/dashboard', 
      icon: Home, 
      isActive: currentPath === '/admin/dashboard' 
    },
    { 
      key: 'users', 
      label: 'Users', 
      href: '/admin/users', 
      icon: Users,
      isActive: currentPath === '/admin/users',
      badge: '1.2K'
    },
    { 
      key: 'analytics', 
      label: 'Analytics', 
      icon: BarChart3,
      items: [
        { key: 'overview', label: 'Overview', href: '/admin/analytics/overview', isActive: currentPath === '/admin/analytics/overview' },
        { key: 'reports', label: 'Reports', href: '/admin/analytics/reports', isActive: currentPath === '/admin/analytics/reports' },
        { key: 'goals', label: 'Goals', href: '/admin/analytics/goals', isActive: currentPath === '/admin/analytics/goals' },
      ]
    },
    { 
      key: 'content', 
      label: 'Content', 
      icon: FileText,
      items: [
        { key: 'posts', label: 'Posts', href: '/admin/content/posts', isActive: currentPath === '/admin/content/posts' },
        { key: 'pages', label: 'Pages', href: '/admin/content/pages', isActive: currentPath === '/admin/content/pages' },
        { key: 'media', label: 'Media', href: '/admin/content/media', isActive: currentPath === '/admin/content/media', badge: 'New' },
      ]
    },
    { 
      key: 'ecommerce', 
      label: 'E-commerce', 
      icon: Package,
      items: [
        { key: 'products', label: 'Products', href: '/admin/ecommerce/products', isActive: currentPath === '/admin/ecommerce/products' },
        { key: 'orders', label: 'Orders', href: '/admin/ecommerce/orders', isActive: currentPath === '/admin/ecommerce/orders', badge: '24' },
        { key: 'inventory', label: 'Inventory', href: '/admin/ecommerce/inventory', isActive: currentPath === '/admin/ecommerce/inventory' },
      ]
    },
    { 
      key: 'settings', 
      label: 'Settings', 
      href: '/admin/settings', 
      icon: Settings,
      isActive: currentPath === '/admin/settings'
    }
  ];

  // Sample chart data
  const revenueData = [
    { month: 'Jan', revenue: 4200, expenses: 2400, profit: 1800 },
    { month: 'Feb', revenue: 3800, expenses: 2200, profit: 1600 },
    { month: 'Mar', revenue: 5200, expenses: 2800, profit: 2400 },
    { month: 'Apr', revenue: 4800, expenses: 2600, profit: 2200 },
    { month: 'May', revenue: 6200, expenses: 3200, profit: 3000 },
    { month: 'Jun', revenue: 5800, expenses: 3000, profit: 2800 },
    { month: 'Jul', revenue: 7200, expenses: 3600, profit: 3600 },
    { month: 'Aug', revenue: 6800, expenses: 3400, profit: 3400 },
    { month: 'Sep', revenue: 8200, expenses: 4000, profit: 4200 },
    { month: 'Oct', revenue: 7800, expenses: 3800, profit: 4000 },
    { month: 'Nov', revenue: 9200, expenses: 4400, profit: 4800 },
    { month: 'Dec', revenue: 8800, expenses: 4200, profit: 4600 }
  ];

  const userGrowthData = [
    { month: 'Jan', users: 1200 },
    { month: 'Feb', users: 1450 },
    { month: 'Mar', users: 1680 },
    { month: 'Apr', users: 1920 },
    { month: 'May', users: 2150 },
    { month: 'Jun', users: 2380 },
    { month: 'Jul', users: 2620 },
    { month: 'Aug', users: 2850 },
    { month: 'Sep', users: 3100 },
    { month: 'Oct', users: 3350 },
    { month: 'Nov', users: 3580 },
    { month: 'Dec', users: 3820 }
  ];

  const deviceData = [
    { name: 'Desktop', value: 45, color: '#8884d8' },
    { name: 'Mobile', value: 35, color: '#82ca9d' },
    { name: 'Tablet', value: 20, color: '#ffc658' }
  ];

  const trafficSourceData = [
    { source: 'Organic Search', visitors: 4200, percentage: 45 },
    { source: 'Direct', visitors: 3100, percentage: 33 },
    { source: 'Social Media', visitors: 1200, percentage: 13 },
    { source: 'Email', visitors: 850, percentage: 9 }
  ];
  const users = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      role: 'Admin',
      status: 'Active',
      lastLogin: '2024-01-15',
      avatar: 'JD'
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      role: 'Editor',
      status: 'Active',
      lastLogin: '2024-01-14',
      avatar: 'JS'
    },
    {
      id: 3,
      name: 'Bob Johnson',
      email: 'bob@example.com',
      role: 'User',
      status: 'Inactive',
      lastLogin: '2024-01-10',
      avatar: 'BJ'
    },
    {
      id: 4,
      name: 'Alice Brown',
      email: 'alice@example.com',
      role: 'Editor',
      status: 'Active',
      lastLogin: '2024-01-16',
      avatar: 'AB'
    }
  ];

  // Data table columns
  const userColumns = [
    {
      key: 'user',
      title: 'User',
      render: (value, row) => (
        <div className="flex items-center gap-3">
          <Avatar className="h-8 w-8">
            <AvatarFallback className="bg-primary/10 text-primary font-medium text-sm">
              {row.avatar}
            </AvatarFallback>
          </Avatar>
          <div>
            <div className="font-medium text-foreground">{row.name}</div>
            <div className="text-sm text-muted-foreground">{row.email}</div>
          </div>
        </div>
      ),
    },
    {
      key: 'role',
      title: 'Role',
      render: (value) => (
        <Badge variant={value === 'Admin' ? 'default' : 'secondary'} className="text-xs">
          {value}
        </Badge>
      ),
    },
    {
      key: 'status',
      title: 'Status',
      render: (value) => (
        <Badge
          variant={value === 'Active' ? 'default' : 'destructive'}
          className="text-xs"
        >
          {value}
        </Badge>
      ),
    },
    {
      key: 'lastLogin',
      title: 'Last Login',
      render: (value) => (
        <span className="text-sm text-muted-foreground">{value}</span>
      ),
    },
    {
      key: 'actions',
      title: 'Actions',
      sortable: false,
      render: (_, row) => (
        <div className="flex gap-2">
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
            <Eye className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
            <Edit className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-destructive">
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      ),
    },
  ];

  // Navigation handler
  const handleNavigate = (href, item) => {
    console.log('Navigate to:', href, 'Item:', item);
    setCurrentPath(href);
  };

  // Header actions
  const headerActions = (
    <div className="flex items-center gap-2">
      <Button variant="ghost" size="sm" className="hidden md:flex">
        <Search className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="sm" className="relative">
        <Bell className="h-4 w-4" />
        <Badge variant="destructive" className="absolute -top-1 -right-1 h-4 w-4 flex items-center justify-center text-xs p-0">
          3
        </Badge>
      </Button>
      <Button variant="ghost" size="sm" className="hidden sm:flex">
        <Avatar className="h-7 w-7">
          <AvatarFallback className="bg-primary/10 text-primary font-medium text-xs">
            AD
          </AvatarFallback>
        </Avatar>
      </Button>
    </div>
  );

  // Stats data
  const stats = [
    {
      title: 'Total Users',
      value: '2,350',
      change: '+12%',
      trend: 'up',
      icon: Users,
      color: 'text-blue-600'
    },
    {
      title: 'Revenue',
      value: '$45,231',
      change: '+5.1%',
      trend: 'up',
      icon: DollarSign,
      color: 'text-green-600'
    },
    {
      title: 'Orders',
      value: '1,234',
      change: '-2.4%',
      trend: 'down',
      icon: Package,
      color: 'text-orange-600'
    },
    {
      title: 'Active Sessions',
      value: '573',
      change: '+8.2%',
      trend: 'up',
      icon: Activity,
      color: 'text-purple-600'
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Demo Controls Header */}
      <div className="border-b border-border bg-muted/20">
        <div className="container mx-auto p-6">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-foreground">Admin Layout Component Demo</h1>
            <p className="text-lg text-muted-foreground">
              Interactive demonstration of AdminLayout with sidebar navigation and dashboard content.
            </p>

            {/* Current State Display */}
            <Card className="bg-card text-card-foreground border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Current Configuration</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 text-sm">
                  <div>
                    <strong className="text-foreground">Path:</strong> 
                    <code className="ml-2 bg-muted px-2 py-1 rounded text-foreground">{currentPath}</code>
                  </div>
                  <div>
                    <strong className="text-foreground">Scheme:</strong> 
                    <code className="ml-2 bg-muted px-2 py-1 rounded text-foreground">{currentScheme}</code>
                  </div>
                  <div>
                    <strong className="text-foreground">Tone:</strong> 
                    <code className="ml-2 bg-muted px-2 py-1 rounded text-foreground">{currentTone}</code>
                  </div>
                  <div>
                    <strong className="text-foreground">Size:</strong> 
                    <code className="ml-2 bg-muted px-2 py-1 rounded text-foreground">{currentSize}</code>
                  </div>
                  <div>
                    <strong className="text-foreground">Sidebar:</strong> 
                    <code className="ml-2 bg-muted px-2 py-1 rounded text-foreground">{sidebarOpen ? 'Open' : 'Closed'}</code>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Interactive Controls */}
            <Tabs defaultValue="controls" className="w-full">
              <TabsList className="bg-muted">
                <TabsTrigger value="controls" className="text-foreground">Interactive Controls</TabsTrigger>
                <TabsTrigger value="demo" className="text-foreground">Demo Instructions</TabsTrigger>
              </TabsList>
              
              <TabsContent value="controls" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Tone Configuration */}
                  <Card className="bg-card text-card-foreground border-border">
                    <CardHeader>
                      <CardTitle className="text-foreground">Tone Configuration</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-3">
                        {(['clean', 'subtle', 'brand', 'contrast']).map((tone) => (
                          <Button
                            key={tone}
                            variant={currentTone === tone ? 'default' : 'outline'}
                            size="sm"
                            onClick={() => setCurrentTone(tone)}
                            className="capitalize"
                          >
                            {tone}
                          </Button>
                        ))}
                      </div>
                      <div className="mt-4 text-sm text-muted-foreground">
                        <strong className="text-foreground">Current tone:</strong> {currentTone} - recommended for admin panels
                      </div>
                    </CardContent>
                  </Card>

                  {/* Size Configuration */}
                  <Card className="bg-card text-card-foreground border-border">
                    <CardHeader>
                      <CardTitle className="text-foreground">Size Configuration</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                        {(['sm', 'md', 'lg', 'xl', 'full']).map((size) => (
                          <Button
                            key={size}
                            variant={currentSize === size ? 'default' : 'outline'}
                            size="sm"
                            onClick={() => setCurrentSize(size)}
                            className="uppercase"
                          >
                            {size}
                          </Button>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Sidebar Controls */}
                <Card className="bg-card text-card-foreground border-border">
                  <CardHeader>
                    <CardTitle className="text-foreground">Sidebar Controls</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-3">
                      <Button
                        variant={sidebarOpen ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setSidebarOpen(true)}
                      >
                        Open Sidebar
                      </Button>
                      <Button
                        variant={!sidebarOpen ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setSidebarOpen(false)}
                      >
                        Close Sidebar
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="demo" className="space-y-6">
                <Card className="bg-card text-card-foreground border-border">
                  <CardHeader>
                    <CardTitle className="text-foreground flex items-center gap-2">
                      <HelpCircle className="h-5 w-5" />
                      Try It Out
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm text-muted-foreground">
                    <div>• <strong className="text-foreground">Navigation:</strong> Click sidebar items to see active state changes</div>
                    <div>• <strong className="text-foreground">Dropdown Menus:</strong> Click items with arrows to expand/collapse</div>
                    <div>• <strong className="text-foreground">Sidebar Toggle:</strong> Use hamburger menu or controls to show/hide sidebar</div>
                    <div>• <strong className="text-foreground">Responsive:</strong> Resize window to see mobile behavior</div>
                    <div>• <strong className="text-foreground">Tone Changes:</strong> Test different tones for color variations</div>
                    <div>• <strong className="text-foreground">Size Changes:</strong> Test different sizes for sidebar width</div>
                    <div>• <strong className="text-foreground">Data Table:</strong> Scroll down to see user management table</div>
                    <div>• <strong className="text-foreground">Console:</strong> Check browser console for navigation events</div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      {/* Admin Layout Demo */}
      <AdminLayout
        scheme={currentScheme}
        tone={currentTone}
        size={currentSize}
        title="Admin Dashboard"
        logo={
          <div className="h-8 w-8 bg-primary text-primary-foreground rounded-lg flex items-center justify-center">
            <Shield className="h-5 w-5" />
          </div>
        }
        navigation={navigation}
        currentPath={currentPath}
        onNavigate={handleNavigate}
        headerActions={headerActions}
        collapsible={true}
        defaultSidebarOpen={sidebarOpen}
      >
        <div className="space-y-8">
          {/* Dashboard Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
              <p className="text-muted-foreground">
                Welcome back! Here's what's happening with your platform.
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
              <Button size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Add New
              </Button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-card text-card-foreground border-border">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-foreground">
                    {stat.title}
                  </CardTitle>
                  <stat.icon className={`h-4 w-4 ${stat.color}`} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="flex items-center pt-1">
                    <Badge 
                      variant={stat.trend === 'up' ? 'default' : 'destructive'} 
                      className="text-xs flex items-center gap-1"
                    >
                      {stat.trend === 'up' ? (
                        <TrendingUp className="h-3 w-3" />
                      ) : (
                        <TrendingDown className="h-3 w-3" />
                      )}
                      {stat.change}
                    </Badge>
                    <span className="text-xs text-muted-foreground ml-2">
                      from last month
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Charts Section */}
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Revenue Chart */}
            <Card className="bg-card text-card-foreground border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Revenue Overview</CardTitle>
                <p className="text-sm text-muted-foreground">Monthly revenue, expenses, and profit</p>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis 
                      dataKey="month" 
                      stroke="hsl(var(--muted-foreground))"
                      fontSize={12}
                    />
                    <YAxis 
                      stroke="hsl(var(--muted-foreground))"
                      fontSize={12}
                    />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: 'hsl(var(--popover))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px',
                        color: 'hsl(var(--popover-foreground))'
                      }}
                    />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="revenue" 
                      stroke="hsl(var(--primary))" 
                      strokeWidth={2}
                      name="Revenue"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="expenses" 
                      stroke="hsl(var(--destructive))" 
                      strokeWidth={2}
                      name="Expenses"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="profit" 
                      stroke="hsl(var(--chart-2))" 
                      strokeWidth={2}
                      name="Profit"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* User Growth Chart */}
            <Card className="bg-card text-card-foreground border-border">
              <CardHeader>
                <CardTitle className="text-foreground">User Growth</CardTitle>
                <p className="text-sm text-muted-foreground">Monthly active user growth</p>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={userGrowthData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis 
                      dataKey="month" 
                      stroke="hsl(var(--muted-foreground))"
                      fontSize={12}
                    />
                    <YAxis 
                      stroke="hsl(var(--muted-foreground))"
                      fontSize={12}
                    />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: 'hsl(var(--popover))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px',
                        color: 'hsl(var(--popover-foreground))'
                      }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="users" 
                      stroke="hsl(var(--primary))" 
                      fill="hsl(var(--primary))"
                      fillOpacity={0.2}
                      name="Users"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* More Charts */}
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Device Usage Pie Chart */}
            <Card className="bg-card text-card-foreground border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Device Usage</CardTitle>
                <p className="text-sm text-muted-foreground">Traffic breakdown by device type</p>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={deviceData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {deviceData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: 'hsl(var(--popover))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px',
                        color: 'hsl(var(--popover-foreground))'
                      }}
                    />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Traffic Sources Bar Chart */}
            <Card className="bg-card text-card-foreground border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Traffic Sources</CardTitle>
                <p className="text-sm text-muted-foreground">Visitor sources breakdown</p>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={trafficSourceData} layout="horizontal">
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis 
                      type="number" 
                      stroke="hsl(var(--muted-foreground))"
                      fontSize={12}
                    />
                    <YAxis 
                      type="category"
                      dataKey="source" 
                      stroke="hsl(var(--muted-foreground))"
                      fontSize={12}
                      width={100}
                    />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: 'hsl(var(--popover))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px',
                        color: 'hsl(var(--popover-foreground))'
                      }}
                    />
                    <Bar 
                      dataKey="visitors" 
                      fill="hsl(var(--primary))"
                      radius={[0, 4, 4, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-card text-card-foreground border-border">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center gap-3">
                  <Users className="h-5 w-5 text-primary" />
                  User Management
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Manage user accounts, roles, and permissions.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Active Users</span>
                    <span className="font-medium text-foreground">2,350</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Pending Approval</span>
                    <span className="font-medium text-foreground">45</span>
                  </div>
                  <Progress value={75} className="h-2" />
                  <Button variant="outline" size="sm" className="w-full mt-3">
                    View All Users
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card text-card-foreground border-border">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center gap-3">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  Analytics Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Track performance metrics and user engagement.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Page Views</span>
                    <span className="font-medium text-foreground">125.4K</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Bounce Rate</span>
                    <span className="font-medium text-foreground">23.5%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                  <Button variant="outline" size="sm" className="w-full mt-3">
                    View Analytics
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card text-card-foreground border-border">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center gap-3">
                  <Package className="h-5 w-5 text-primary" />
                  Content Management
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Create and manage your content and media.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Published Posts</span>
                    <span className="font-medium text-foreground">342</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Draft Posts</span>
                    <span className="font-medium text-foreground">28</span>
                  </div>
                  <Progress value={60} className="h-2" />
                  <Button variant="outline" size="sm" className="w-full mt-3">
                    Manage Content
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <Card className="bg-card text-card-foreground border-border">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-foreground">Recent Activity</CardTitle>
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    user: 'John Doe',
                    action: 'created a new post',
                    target: '"Getting Started with React"',
                    time: '2 minutes ago',
                    type: 'create'
                  },
                  {
                    user: 'Jane Smith',
                    action: 'updated user profile',
                    target: 'Alice Brown',
                    time: '5 minutes ago',
                    type: 'update'
                  },
                  {
                    user: 'Bob Johnson',
                    action: 'deleted product',
                    target: '"Wireless Headphones"',
                    time: '1 hour ago',
                    type: 'delete'
                  },
                  {
                    user: 'Alice Brown',
                    action: 'published blog post',
                    target: '"Design System Tips"',
                    time: '2 hours ago',
                    type: 'publish'
                  }
                ].map((activity, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-primary/10 text-primary font-medium text-xs">
                        {activity.user.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-foreground">
                        <span className="font-medium">{activity.user}</span>
                        {' '}{activity.action}{' '}
                        <span className="font-medium">{activity.target}</span>
                      </p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                    <Badge 
                      variant={activity.type === 'create' ? 'default' : 
                               activity.type === 'update' ? 'secondary' :
                               activity.type === 'delete' ? 'destructive' : 'outline'}
                      className="text-xs"
                    >
                      {activity.type}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* User Management Table */}
          <Card className="bg-card text-card-foreground border-border">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-foreground">User Management</CardTitle>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                  </Button>
                  <Button size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    Add User
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <DataTable
                columns={userColumns}
                data={users}
                searchable={true}
                sortable={true}
                searchPlaceholder="Search users..."
              />
            </CardContent>
          </Card>

          {/* System Status */}
          <Card className="bg-card text-card-foreground border-border">
            <CardHeader>
              <CardTitle className="text-foreground">System Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    name: 'API Server',
                    status: 'healthy',
                    uptime: '99.9%',
                    icon: Database,
                    color: 'text-green-600'
                  },
                  {
                    name: 'Database',
                    status: 'healthy', 
                    uptime: '99.8%',
                    icon: Database,
                    color: 'text-green-600'
                  },
                  {
                    name: 'CDN',
                    status: 'warning',
                    uptime: '99.2%',
                    icon: Globe,
                    color: 'text-yellow-600'
                  },
                  {
                    name: 'Background Jobs',
                    status: 'healthy',
                    uptime: '99.9%',
                    icon: Zap,
                    color: 'text-green-600'
                  }
                ].map((service, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <service.icon className={`h-4 w-4 ${service.color}`} />
                        <span className="text-sm font-medium text-foreground">{service.name}</span>
                      </div>
                      <Badge 
                        variant={service.status === 'healthy' ? 'default' : 
                                service.status === 'warning' ? 'secondary' : 'destructive'}
                        className="text-xs"
                      >
                        {service.status}
                      </Badge>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Uptime: {service.uptime}
                    </div>
                    <Progress 
                      value={parseFloat(service.uptime)} 
                      className="h-1"
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </AdminLayout>
    </div>
  );
}

export default AdminDemo;