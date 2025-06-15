import { jsxs, jsx } from "react/jsx-runtime";
import { forwardRef, useState, useEffect } from "react";
import { cva } from "class-variance-authority";
import { cn } from "./utils.js";
import { Button } from "./button.js";
import { Badge } from "./badge.js";
import { Separator } from "./separator.js";
import { X, Menu, ChevronRight } from "lucide-react";
const adminVariants = cva(
  "min-h-screen bg-background flex",
  {
    variants: {
      variant: {
        default: "",
        primary: "",
        black: ""
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
const sidebarVariants = cva(
  "border-r transition-all duration-300 ease-in-out fixed left-0 top-0 z-50 h-full flex flex-col",
  {
    variants: {
      size: {
        compact: "w-48",
        // 192px
        default: "w-64",
        // 256px (original)
        wide: "w-80"
        // 320px
      },
      variant: {
        default: [
          "bg-background/95 backdrop-blur-sm border-border/40 supports-[backdrop-filter]:bg-background/80",
          "text-foreground"
        ],
        primary: [
          "bg-primary border-primary-foreground/20",
          "text-primary-foreground"
        ],
        black: [
          "bg-zinc-950/95 backdrop-blur-sm border-zinc-800/40 supports-[backdrop-filter]:bg-zinc-950/80",
          "text-zinc-100"
        ]
      }
    },
    defaultVariants: {
      size: "default",
      variant: "default"
    }
  }
);
const headerVariants = cva(
  "w-full border-b transition-all duration-200 z-40 bg-background/80 backdrop-blur-sm border-border/40 supports-[backdrop-filter]:bg-background/60 text-foreground",
  {
    variants: {
      sticky: {
        true: "sticky top-0",
        false: "relative"
      }
    },
    defaultVariants: {
      sticky: true
    }
  }
);
const getSizeConfig = (size = "default") => {
  const configs = {
    compact: {
      sidebarHeader: "h-12 px-3 text-xs",
      menuButton: "px-2 py-1.5 text-xs min-h-[28px]",
      submenuButton: "ml-3 px-2 py-1 text-xs min-h-[24px]",
      icon: "h-3.5 w-3.5",
      spacing: "space-y-0.5",
      showBadges: false
    },
    default: {
      sidebarHeader: "h-16 px-4 text-sm",
      menuButton: "px-3 py-2.5 text-sm min-h-[36px]",
      submenuButton: "ml-4 px-3 py-2 text-sm min-h-[32px]",
      icon: "h-4 w-4",
      spacing: "space-y-1",
      showBadges: true
    },
    wide: {
      sidebarHeader: "h-20 px-6 text-base",
      menuButton: "px-4 py-3 text-sm min-h-[44px]",
      submenuButton: "ml-6 px-4 py-2.5 text-sm min-h-[36px]",
      icon: "h-5 w-5",
      spacing: "space-y-1.5",
      showBadges: true
    }
  };
  return configs[size] || configs.default;
};
function AdminNavigation({
  navigationItems = [],
  currentPath = "",
  onNavigate = () => {
  },
  className,
  size = "default",
  variant = "default"
}) {
  const [expandedMenus, setExpandedMenus] = useState(/* @__PURE__ */ new Set());
  const config = getSizeConfig(size);
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
    const baseStyles = "w-full flex items-center gap-3 rounded-lg transition-all duration-200 group text-left font-medium";
    if (isSubmenu) {
      const submenuBase = `${config.submenuButton} font-normal`;
      switch (variant) {
        case "primary":
          return cn(
            submenuBase,
            isActive ? "bg-primary-foreground/20 text-primary-foreground shadow-sm" : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
          );
        case "black":
          return cn(
            submenuBase,
            isActive ? "bg-zinc-800 text-zinc-100 shadow-sm" : "text-zinc-300 hover:text-zinc-100 hover:bg-zinc-800/70"
          );
        default:
          return cn(
            submenuBase,
            isActive ? "bg-secondary text-secondary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground hover:bg-muted/70"
          );
      }
    } else {
      const mainBase = config.menuButton;
      switch (variant) {
        case "primary":
          return cn(
            baseStyles,
            mainBase,
            isActive ? "bg-primary-foreground/20 text-primary-foreground shadow-sm" : "text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10"
          );
        case "black":
          return cn(
            baseStyles,
            mainBase,
            isActive ? "bg-zinc-800 text-zinc-100 shadow-sm" : "text-zinc-200 hover:text-zinc-100 hover:bg-zinc-800/80"
          );
        default:
          return cn(
            baseStyles,
            mainBase,
            isActive ? "bg-secondary text-secondary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground hover:bg-muted/70"
          );
      }
    }
  };
  const MenuItem = ({ item, isSubmenu = false }) => {
    const hasSubmenu = !isSubmenu && item.items?.length > 0;
    const isExpanded = expandedMenus.has(item.key);
    const isActive = item.path ? currentPath === item.path : item.isActive;
    return /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => {
            if (hasSubmenu) {
              toggleMenu(item.key);
            } else if (item.path) {
              onNavigate(item.path, item);
            }
          },
          className: getMenuItemStyles(isActive, isSubmenu),
          children: [
            !isSubmenu && item.icon && /* @__PURE__ */ jsx(item.icon, { className: cn(config.icon, "flex-shrink-0") }),
            /* @__PURE__ */ jsx("span", { className: "flex-1 truncate text-left", children: item.label }),
            item.badge && config.showBadges && /* @__PURE__ */ jsx(
              Badge,
              {
                variant: isActive ? "secondary" : "outline",
                className: cn(
                  "text-xs h-4 px-1 ml-1 flex-shrink-0",
                  // Proper badge contrast for different variants
                  variant === "primary" && !isActive && "border-primary-foreground/30 text-primary-foreground/80 bg-primary-foreground/10",
                  variant === "black" && !isActive && "border-zinc-600 text-zinc-300 bg-zinc-800/50"
                ),
                children: item.badge
              }
            ),
            hasSubmenu && /* @__PURE__ */ jsx(ChevronRight, { className: cn(
              config.icon,
              "flex-shrink-0 transition-transform duration-200",
              isExpanded && "rotate-90"
            ) })
          ]
        }
      ),
      hasSubmenu && /* @__PURE__ */ jsx("div", { className: cn(
        "overflow-hidden transition-all duration-300",
        isExpanded ? "max-h-96 opacity-100 mt-1" : "max-h-0 opacity-0"
      ), children: /* @__PURE__ */ jsx("div", { className: cn(config.spacing, "pb-2"), children: item.items.map((subItem) => /* @__PURE__ */ jsx(MenuItem, { item: subItem, isSubmenu: true }, subItem.path || subItem.key)) }) })
    ] }, item.key || item.path);
  };
  const sections = navigationItems.reduce((acc, item) => {
    const section = item.section || "main";
    if (!acc[section]) acc[section] = [];
    acc[section].push(item);
    return acc;
  }, {});
  const getSectionHeaderStyles = () => {
    switch (variant) {
      case "primary":
        return "px-3 mb-4 text-xs font-semibold text-primary-foreground/70 uppercase tracking-wider";
      case "black":
        return "px-3 mb-4 text-xs font-semibold text-zinc-400 uppercase tracking-wider";
      default:
        return "px-3 mb-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider";
    }
  };
  return /* @__PURE__ */ jsx("nav", { className: cn("p-6 space-y-8", className), children: Object.entries(sections).map(([sectionKey, items]) => /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("h3", { className: getSectionHeaderStyles(), children: sectionKey.charAt(0).toUpperCase() + sectionKey.slice(1) }),
    /* @__PURE__ */ jsx("div", { className: config.spacing, children: items.map((item) => /* @__PURE__ */ jsx(MenuItem, { item }, item.key || item.path)) }),
    sectionKey !== "system" && /* @__PURE__ */ jsx(
      Separator,
      {
        className: cn(
          "mt-6",
          variant === "primary" && "bg-primary-foreground/20",
          variant === "black" && "bg-zinc-800/60"
        )
      }
    )
  ] }, sectionKey)) });
}
const AdminLayout = forwardRef(({
  className,
  variant = "default",
  size = "default",
  title = "Admin Panel",
  logo,
  headerActions,
  navigationItems = [],
  // ✅ Now expects unified structure with 'label' and 'items'
  currentPath = "",
  onNavigate = () => {
  },
  sidebarContent,
  sidebarFooter,
  children,
  sticky = true,
  // ✅ This prop now actually controls sticky behavior
  logoComponent,
  headerActionsComponent,
  collapsible = true,
  defaultSidebarOpen = true,
  ...props
}, ref) => {
  const [sidebarOpen, setSidebarOpen] = useState(defaultSidebarOpen);
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const config = getSizeConfig(size);
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      if (mobile && defaultSidebarOpen === true) {
        setSidebarOpen(false);
      }
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, [defaultSidebarOpen]);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    if (sticky) {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [sticky]);
  useEffect(() => {
    if (isMobile && sidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobile, sidebarOpen]);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const getHeaderClasses = () => {
    const scrollClasses = isScrolled && sticky ? "shadow-sm" : "";
    return cn(headerVariants({ sticky }), scrollClasses);
  };
  const getMobileToggleStyles = () => {
    return "p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors";
  };
  const getSidebarHeaderStyles = () => {
    switch (variant) {
      case "primary":
        return "border-primary-foreground/20 bg-primary-foreground/10";
      case "black":
        return "border-zinc-800/40 bg-zinc-900/50";
      default:
        return "border-border/20 bg-muted/20";
    }
  };
  const getSidebarNavHeaderStyles = () => {
    switch (variant) {
      case "primary":
        return "text-primary-foreground/90";
      case "black":
        return "text-zinc-200";
      default:
        return "text-muted-foreground";
    }
  };
  const getSidebarCloseButtonStyles = () => {
    switch (variant) {
      case "primary":
        return "text-primary-foreground hover:bg-primary-foreground/20 hover:text-primary-foreground";
      case "black":
        return "text-zinc-300 hover:bg-zinc-800 hover:text-zinc-100";
      default:
        return "text-muted-foreground hover:bg-muted hover:text-foreground";
    }
  };
  const getSidebarFooterStyles = () => {
    switch (variant) {
      case "primary":
        return "border-primary-foreground/20 bg-primary-foreground/10";
      case "black":
        return "border-zinc-800/40 bg-zinc-900/50";
      default:
        return "border-border/20 bg-muted/20";
    }
  };
  const getMainContentMargin = () => {
    if (isMobile) return "";
    const sizeMap = {
      compact: sidebarOpen ? "lg:ml-48" : "lg:ml-0",
      default: sidebarOpen ? "lg:ml-64" : "lg:ml-0",
      wide: sidebarOpen ? "lg:ml-80" : "lg:ml-0"
    };
    return sizeMap[size];
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref,
      className: cn(adminVariants({ variant }), className),
      ...props,
      children: [
        isMobile && sidebarOpen && /* @__PURE__ */ jsx(
          "div",
          {
            className: "fixed inset-0 z-40 bg-black/50 backdrop-blur-sm",
            onClick: () => setSidebarOpen(false),
            "aria-hidden": "true"
          }
        ),
        /* @__PURE__ */ jsx("aside", { className: cn(
          sidebarVariants({ size, variant }),
          // Mobile positioning
          isMobile ? [
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          ] : [
            // Desktop positioning
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          ]
        ), children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col h-full", children: [
          /* @__PURE__ */ jsxs("div", { className: cn(
            "flex items-center justify-between border-b flex-shrink-0",
            config.sidebarHeader,
            getSidebarHeaderStyles()
          ), children: [
            /* @__PURE__ */ jsx("h2", { className: cn(
              "font-semibold uppercase tracking-wider",
              getSidebarNavHeaderStyles()
            ), children: "Navigation" }),
            collapsible && isMobile && /* @__PURE__ */ jsx(
              Button,
              {
                variant: "ghost",
                size: "icon",
                onClick: toggleSidebar,
                className: cn("flex-shrink-0", getSidebarCloseButtonStyles()),
                "aria-label": "Close sidebar",
                children: /* @__PURE__ */ jsx(X, { className: "h-4 w-4" })
              }
            )
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex-1 overflow-y-auto", children: sidebarContent || /* @__PURE__ */ jsx(
            AdminNavigation,
            {
              navigationItems,
              currentPath,
              onNavigate,
              size,
              variant
            }
          ) }),
          sidebarFooter && /* @__PURE__ */ jsx("div", { className: cn(
            "flex-shrink-0 border-t",
            getSidebarFooterStyles()
          ), children: sidebarFooter })
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: cn(
          "flex-1 flex flex-col min-w-0 transition-all duration-300 ease-in-out",
          getMainContentMargin()
        ), children: [
          /* @__PURE__ */ jsx("header", { className: getHeaderClasses(), children: /* @__PURE__ */ jsxs("div", { className: cn(
            "flex items-center justify-between px-4 lg:px-6",
            config.sidebarHeader
          ), children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 min-w-0", children: [
              collapsible && /* @__PURE__ */ jsx(
                "button",
                {
                  className: getMobileToggleStyles(),
                  onClick: toggleSidebar,
                  "aria-label": sidebarOpen ? "Close sidebar" : "Open sidebar",
                  children: /* @__PURE__ */ jsx(Menu, { className: "h-5 w-5" })
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 min-w-0", children: [
                (logo || logoComponent) && /* @__PURE__ */ jsx("div", { className: "flex-shrink-0", children: logoComponent ? logoComponent("default") : logo }),
                /* @__PURE__ */ jsx("h1", { className: "text-lg font-semibold truncate", children: title })
              ] })
            ] }),
            (headerActions || headerActionsComponent) && /* @__PURE__ */ jsx("div", { className: "flex-shrink-0", children: headerActionsComponent ? headerActionsComponent("default") : headerActions })
          ] }) }),
          /* @__PURE__ */ jsx("main", { className: "flex-1 min-w-0", children: /* @__PURE__ */ jsx("div", { className: "p-4 lg:p-6 w-full", children: /* @__PURE__ */ jsx("div", { className: "w-full max-w-7xl mx-auto", children }) }) })
        ] })
      ]
    }
  );
});
AdminLayout.displayName = "AdminLayout";
export {
  AdminLayout
};
//# sourceMappingURL=admin.js.map
