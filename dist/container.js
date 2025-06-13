import { jsx, jsxs } from "react/jsx-runtime";
import { forwardRef, useState } from "react";
import { cva } from "class-variance-authority";
import { cn } from "./utils.js";
import { Button } from "./button.js";
import { Badge } from "./badge.js";
import { ChevronRight } from "lucide-react";
const containerVariants = cva(
  "w-full mx-auto",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        contained: "bg-muted/30 text-foreground",
        minimal: "bg-background text-foreground"
      },
      layout: {
        none: "block p-1",
        "sidebar-left": "flex flex-col md:flex-row min-h-screen overflow-visible gap-3 md:gap-4 p-1",
        "sidebar-right": "flex flex-col md:flex-row min-h-screen overflow-visible gap-3 md:gap-4 p-1"
      },
      size: {
        sm: "max-w-2xl",
        md: "max-w-4xl",
        lg: "max-w-6xl",
        xl: "max-w-7xl",
        full: "max-w-full"
      }
    },
    defaultVariants: {
      variant: "default",
      layout: "none",
      size: "xl"
    }
  }
);
const sidebarVariants = cva(
  "flex-shrink-0 bg-background",
  {
    variants: {
      position: {
        left: "order-first",
        right: "order-last"
      },
      size: {
        sm: "md:w-36 lg:w-48",
        // Compact sidebar
        md: "md:w-48 lg:w-64",
        // Default sidebar  
        lg: "md:w-64 lg:w-80",
        // Wide sidebar
        xl: "md:w-64 lg:w-80",
        // Same as lg
        full: "md:w-64 lg:w-80"
        // Same as lg
      },
      sticky: {
        true: "md:sticky md:h-screen md:overflow-y-auto lg:sticky lg:h-screen lg:overflow-y-auto",
        false: "lg:h-full"
      }
    },
    defaultVariants: {
      position: "left",
      size: "md",
      sticky: false
    }
  }
);
const sidebarContentVariants = cva(
  "h-full",
  {
    variants: {
      size: {
        sm: "p-3",
        md: "p-3",
        lg: "p-4",
        xl: "p-4",
        full: "p-4"
      },
      sticky: {
        true: "pb-4",
        // Minimal extra padding for sticky scroll
        false: ""
      }
    },
    defaultVariants: {
      size: "md",
      sticky: false
    }
  }
);
const mainVariants = cva(
  "flex-1 min-w-0",
  {
    variants: {
      size: {
        sm: "p-3",
        md: "p-3"
      },
      hasSidebar: {
        true: "md:min-h-screen",
        false: ""
      },
      sidebarPosition: {
        left: "order-2",
        right: "order-1",
        none: ""
      }
    },
    defaultVariants: {
      size: "md",
      hasSidebar: false,
      sidebarPosition: "none"
    }
  }
);
const getSizeConfig = (size = "md") => {
  const configs = {
    sm: {
      button: "text-sm py-1.5 px-2 min-h-[32px] text-xs",
      icon: "h-3.5 w-3.5 mr-2 flex-shrink-0",
      spacing: "space-y-0.5",
      showBadges: false,
      showLabels: true
    },
    md: {
      button: "text-sm py-2 px-3 min-h-[36px]",
      icon: "h-4 w-4 mr-2.5 flex-shrink-0",
      spacing: "space-y-1",
      showBadges: true,
      showLabels: true
    },
    lg: {
      button: "text-sm py-2.5 px-4 min-h-[40px]",
      icon: "h-4 w-4 mr-3 flex-shrink-0",
      spacing: "space-y-1.5",
      showBadges: true,
      showLabels: true
    },
    xl: {
      button: "text-sm py-2.5 px-4 min-h-[40px]",
      icon: "h-4 w-4 mr-3 flex-shrink-0",
      spacing: "space-y-1.5",
      showBadges: true,
      showLabels: true
    },
    full: {
      button: "text-sm py-2.5 px-4 min-h-[40px]",
      icon: "h-4 w-4 mr-3 flex-shrink-0",
      spacing: "space-y-1.5",
      showBadges: true,
      showLabels: true
    }
  };
  return configs[size] || configs.md;
};
const NavigationRenderer = ({ items, size = "md" }) => {
  const config = getSizeConfig(size);
  const getInitialExpandedItems = () => {
    const expanded = /* @__PURE__ */ new Set();
    const addExpandableItems = (items2, depth = 0) => {
      items2.forEach((item, index) => {
        if (item.items && item.items.length > 0) {
          const itemKey = item.key || `${depth}-${index}`;
          expanded.add(itemKey);
          addExpandableItems(item.items, depth + 1);
        }
      });
    };
    addExpandableItems(items);
    return expanded;
  };
  const [expandedItems, setExpandedItems] = useState(getInitialExpandedItems());
  const toggleExpanded = (itemKey) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(itemKey)) {
      newExpanded.delete(itemKey);
    } else {
      newExpanded.add(itemKey);
    }
    setExpandedItems(newExpanded);
  };
  const renderNavItem = (item, index, depth = 0) => {
    const hasSubItems = item.items && item.items.length > 0;
    const isExpanded = expandedItems.has(item.key || `${depth}-${index}`);
    const itemKey = item.key || `${depth}-${index}`;
    return /* @__PURE__ */ jsxs("div", { className: "w-full", children: [
      /* @__PURE__ */ jsxs(
        Button,
        {
          variant: item.isActive ? "secondary" : "ghost",
          className: cn(
            "w-full justify-start transition-all items-center",
            config.button,
            depth > 0 && "ml-4 w-[calc(100%-1rem)]"
          ),
          onClick: () => {
            if (hasSubItems) {
              toggleExpanded(itemKey);
            }
            if (item.onClick) {
              item.onClick();
            }
          },
          children: [
            item.icon && /* @__PURE__ */ jsx(item.icon, { className: config.icon }),
            config.showLabels && /* @__PURE__ */ jsx("span", { className: "flex-1 text-left truncate", children: item.label }),
            item.badge && config.showBadges && /* @__PURE__ */ jsx(Badge, { variant: "secondary", className: "text-xs ml-auto", children: item.badge }),
            hasSubItems && /* @__PURE__ */ jsx(
              ChevronRight,
              {
                className: cn(
                  "h-4 w-4 ml-2 transition-transform duration-200 text-muted-foreground",
                  isExpanded && "rotate-90"
                )
              }
            )
          ]
        }
      ),
      hasSubItems && isExpanded && /* @__PURE__ */ jsx("div", { className: "mt-1 space-y-1", children: item.items.map(
        (subItem, subIndex) => renderNavItem(subItem, subIndex, depth + 1)
      ) })
    ] }, itemKey);
  };
  return /* @__PURE__ */ jsx("nav", { className: cn("w-full", config.spacing), children: items.map((item, index) => renderNavItem(item, index)) });
};
const renderSidebarContent = (content, size = "md") => {
  if (!content) return null;
  if (Array.isArray(content)) {
    return /* @__PURE__ */ jsx(NavigationRenderer, { items: content, size });
  }
  return content;
};
const ContainerSidebar = forwardRef(({
  content,
  position = "left",
  size = "md",
  sticky = false,
  className,
  ...props
}, ref) => {
  if (!content) return null;
  const getHeaderHeight = () => {
    const header = document.querySelector("header");
    return header ? header.offsetHeight : 0;
  };
  const headerHeight = sticky ? getHeaderHeight() : 0;
  return /* @__PURE__ */ jsx(
    "aside",
    {
      ref,
      className: cn(
        sidebarVariants({ position, size, sticky }),
        className
      ),
      style: sticky ? { top: `${headerHeight + 10}px` } : {},
      ...props,
      children: /* @__PURE__ */ jsx("div", { className: cn(sidebarContentVariants({ size, sticky })), children: renderSidebarContent(content, size) })
    }
  );
});
ContainerSidebar.displayName = "ContainerSidebar";
const ContainerMain = forwardRef(({
  children,
  size = "md",
  hasSidebar = false,
  sidebarPosition = "none",
  className,
  ...props
}, ref) => /* @__PURE__ */ jsx(
  "main",
  {
    ref,
    className: cn(
      mainVariants({ size, hasSidebar, sidebarPosition }),
      className
    ),
    ...props,
    children
  }
));
ContainerMain.displayName = "ContainerMain";
const Container = forwardRef(({
  className,
  variant = "default",
  sidebar = "none",
  sidebarContent,
  sidebarSticky = false,
  size = "xl",
  children,
  ...props
}, ref) => {
  const layout = sidebar === "left" ? "sidebar-left" : sidebar === "right" ? "sidebar-right" : "none";
  const hasSidebar = sidebar !== "none" && sidebarContent;
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref,
      className: cn(
        containerVariants({ variant, layout, size }),
        className
      ),
      ...props,
      children: [
        hasSidebar && sidebar === "left" && /* @__PURE__ */ jsx(
          ContainerSidebar,
          {
            content: sidebarContent,
            position: "left",
            size,
            sticky: sidebarSticky
          }
        ),
        /* @__PURE__ */ jsx(
          ContainerMain,
          {
            size,
            hasSidebar,
            sidebarPosition: sidebar,
            children
          }
        ),
        hasSidebar && sidebar === "right" && /* @__PURE__ */ jsx(
          ContainerSidebar,
          {
            content: sidebarContent,
            position: "right",
            size,
            sticky: sidebarSticky
          }
        )
      ]
    }
  );
});
Container.displayName = "Container";
Container.Sidebar = ContainerSidebar;
Container.Main = ContainerMain;
export {
  Container,
  ContainerMain,
  ContainerSidebar
};
//# sourceMappingURL=container.js.map
