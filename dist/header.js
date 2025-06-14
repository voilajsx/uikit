import { jsx, jsxs } from "react/jsx-runtime";
import { createContext, forwardRef, useState, useContext, useEffect } from "react";
import { cva } from "class-variance-authority";
import { cn } from "./utils.js";
import { Button } from "./button.js";
import { ChevronDown, X, Menu } from "lucide-react";
const HeaderContext = createContext({});
const headerVariants = cva(
  "w-full border-b transition-all duration-200 z-40",
  {
    variants: {
      variant: {
        default: [
          "bg-background/80 backdrop-blur-sm border-border/40 supports-[backdrop-filter]:bg-background/60",
          "text-foreground"
        ],
        primary: [
          "bg-primary border-primary-foreground/20",
          "text-primary-foreground"
        ],
        black: [
          "bg-zinc-900 border-zinc-700/40",
          "text-zinc-100"
        ]
      },
      sticky: {
        true: "sticky top-0",
        false: "relative"
      }
    },
    defaultVariants: {
      variant: "default",
      sticky: true
    }
  }
);
const containerVariants = cva(
  "mx-auto flex items-center justify-between",
  {
    variants: {
      size: {
        sm: "max-w-2xl h-12 px-4",
        md: "max-w-4xl h-14 px-4 sm:px-6",
        lg: "max-w-6xl h-16 px-4 sm:px-6 lg:px-8",
        xl: "max-w-7xl h-16 px-4 sm:px-6 lg:px-8",
        full: "max-w-full h-16 px-4 sm:px-6 lg:px-8"
      }
    },
    defaultVariants: {
      size: "xl"
    }
  }
);
const Header = forwardRef(({
  className,
  variant = "default",
  size = "xl",
  sticky = true,
  children,
  ...props
}, ref) => {
  return /* @__PURE__ */ jsx(HeaderContext.Provider, { value: { variant, size }, children: /* @__PURE__ */ jsx(
    "header",
    {
      ref,
      className: cn(headerVariants({ variant, sticky }), className),
      ...props,
      children: /* @__PURE__ */ jsx("div", { className: cn(containerVariants({ size })), children })
    }
  ) });
});
Header.displayName = "Header";
const HeaderLogo = forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("flex items-center flex-shrink-0", className),
    ...props,
    children
  }
));
HeaderLogo.displayName = "HeaderLogo";
const HeaderNav = forwardRef(({
  items = [],
  className,
  ...props
}, ref) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedMobileItems, setExpandedMobileItems] = useState(/* @__PURE__ */ new Set());
  const [isMounted, setIsMounted] = useState(false);
  const { variant } = useContext(HeaderContext);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  useEffect(() => {
    if (!isMounted) return;
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMounted]);
  useEffect(() => {
    if (!isMounted) return;
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileOpen, isMounted]);
  const toggleMobileDropdown = (index) => {
    const newExpanded = new Set(expandedMobileItems);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedMobileItems(newExpanded);
  };
  const handleItemClick = (onClick) => {
    setMobileOpen(false);
    setExpandedMobileItems(/* @__PURE__ */ new Set());
    onClick?.();
  };
  const getButtonStyles = (isActive = false) => {
    const baseStyles = "justify-start cursor-pointer rounded-lg transition-colors";
    switch (variant) {
      case "primary":
        return cn(
          baseStyles,
          isActive ? "bg-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/30" : "text-primary-foreground hover:bg-primary-foreground/10"
        );
      case "black":
        return cn(
          baseStyles,
          isActive ? "bg-zinc-700 text-zinc-100 hover:bg-zinc-600" : "text-zinc-100 hover:bg-zinc-800"
        );
      default:
        return cn(
          baseStyles,
          isActive ? "bg-secondary text-secondary-foreground hover:bg-secondary/80" : "text-foreground hover:bg-muted"
        );
    }
  };
  const getMobileButtonStyles = (isActive = false) => {
    const baseStyles = "flex items-center cursor-pointer transition-colors duration-200 rounded-lg";
    return cn(
      baseStyles,
      isActive ? "bg-secondary text-secondary-foreground" : "text-foreground hover:bg-muted"
    );
  };
  const DesktopNavigation = () => {
    const [openDropdown, setOpenDropdown] = useState(null);
    const toggleDropdown = (index, hasDropdown, mainOnClick) => {
      if (hasDropdown) {
        setOpenDropdown(openDropdown === index ? null : index);
      } else {
        setOpenDropdown(null);
        mainOnClick?.();
      }
    };
    useEffect(() => {
      const handleOutsideClick = () => setOpenDropdown(null);
      if (openDropdown !== null) {
        document.addEventListener("click", handleOutsideClick);
        return () => document.removeEventListener("click", handleOutsideClick);
      }
    }, [openDropdown]);
    const handleSubItemClick = (onClick) => {
      setOpenDropdown(null);
      onClick?.();
    };
    return /* @__PURE__ */ jsx("nav", { className: cn("hidden md:flex items-center space-x-1", className), ref, ...props, children: items.map((item, index) => {
      const hasDropdown = item.items && item.items.length > 0;
      const isOpen = openDropdown === index;
      return /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxs(
          Button,
          {
            variant: "ghost",
            size: "sm",
            className: cn(
              getButtonStyles(item.isActive),
              item.className
            ),
            onClick: (e) => {
              e.stopPropagation();
              toggleDropdown(index, hasDropdown, item.onClick);
            },
            children: [
              item.icon && /* @__PURE__ */ jsx(item.icon, { className: "h-4 w-4 mr-2" }),
              /* @__PURE__ */ jsx("span", { children: item.label }),
              hasDropdown && /* @__PURE__ */ jsx(ChevronDown, { className: cn(
                "h-3 w-3 ml-1 transition-transform duration-200",
                isOpen && "rotate-180"
              ) })
            ]
          }
        ),
        hasDropdown && isOpen && /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute top-full left-0 w-48 bg-background border border-border rounded-lg shadow-lg z-50 mt-1",
            onClick: (e) => e.stopPropagation(),
            children: /* @__PURE__ */ jsx("div", { className: "py-1", children: item.items.map((subItem, subIndex) => /* @__PURE__ */ jsxs(
              "button",
              {
                className: cn(
                  "w-full px-3 py-2 text-left text-sm transition-colors flex items-center",
                  "hover:bg-muted focus:bg-muted focus:outline-none",
                  subItem.isActive ? "bg-secondary text-secondary-foreground" : "text-foreground"
                ),
                onClick: () => handleSubItemClick(subItem.onClick),
                children: [
                  subItem.icon && /* @__PURE__ */ jsx(subItem.icon, { className: "h-4 w-4 mr-2" }),
                  /* @__PURE__ */ jsx("span", { children: subItem.label })
                ]
              },
              subItem.key || subIndex
            )) })
          }
        )
      ] }, item.key || index);
    }) });
  };
  const MobileNavigation = () => {
    return /* @__PURE__ */ jsx(
      "div",
      {
        className: cn(
          "fixed top-16 left-0 right-0 z-40 md:hidden bg-background border-b border-border/40 shadow-lg transition-all duration-300 ease-out overflow-hidden",
          mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        ),
        children: /* @__PURE__ */ jsx("div", { className: "max-h-96 overflow-y-auto", children: /* @__PURE__ */ jsx("div", { className: "px-4 py-4 space-y-2", children: items.map((item, index) => {
          const hasSubItems = item.items && item.items.length > 0;
          const isExpanded = expandedMobileItems.has(index);
          return /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsx(
              "div",
              {
                className: cn(
                  getMobileButtonStyles(item.isActive),
                  item.className
                ),
                onClick: () => hasSubItems ? toggleMobileDropdown(index) : handleItemClick(item.onClick),
                children: /* @__PURE__ */ jsxs("div", { className: "flex-1 flex items-center px-3 py-2", children: [
                  item.icon && /* @__PURE__ */ jsx(item.icon, { className: "h-4 w-4 mr-3" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm", children: item.label }),
                  hasSubItems && /* @__PURE__ */ jsx(ChevronDown, { className: cn(
                    "h-4 w-4 ml-auto transition-transform duration-200",
                    isExpanded && "rotate-180"
                  ) })
                ] })
              }
            ),
            hasSubItems && /* @__PURE__ */ jsx("div", { className: cn(
              "ml-6 space-y-1 border-l border-border/30 pl-4 overflow-hidden transition-all duration-300 ease-out",
              isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            ), children: item.items.map((subItem, subIndex) => /* @__PURE__ */ jsxs(
              "div",
              {
                className: cn(
                  "flex items-center px-3 py-2 rounded-lg transition-colors cursor-pointer",
                  subItem.isActive ? "bg-secondary text-secondary-foreground" : "text-muted-foreground hover:text-foreground hover:bg-muted"
                ),
                onClick: () => handleItemClick(subItem.onClick),
                children: [
                  subItem.icon && /* @__PURE__ */ jsx(subItem.icon, { className: "h-3 w-3 mr-3" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm", children: subItem.label })
                ]
              },
              subItem.key || subIndex
            )) })
          ] }, item.key || index);
        }) }) })
      }
    );
  };
  const getMobileToggleStyles = () => {
    switch (variant) {
      case "primary":
        return "md:hidden text-primary-foreground hover:bg-primary-foreground/10";
      case "black":
        return "md:hidden text-zinc-100 hover:bg-zinc-800";
      default:
        return "md:hidden text-foreground hover:bg-muted";
    }
  };
  const MobileToggle = () => /* @__PURE__ */ jsx(
    Button,
    {
      variant: "ghost",
      size: "icon",
      className: getMobileToggleStyles(),
      onClick: () => setMobileOpen(!mobileOpen),
      "aria-label": mobileOpen ? "Close menu" : "Open menu",
      children: mobileOpen ? /* @__PURE__ */ jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsx(Menu, { className: "h-5 w-5" })
    }
  );
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center ml-auto", children: [
    /* @__PURE__ */ jsx(DesktopNavigation, {}),
    /* @__PURE__ */ jsx(MobileToggle, {}),
    /* @__PURE__ */ jsx(MobileNavigation, {})
  ] });
});
HeaderNav.displayName = "HeaderNav";
Header.Logo = HeaderLogo;
Header.Nav = HeaderNav;
export {
  Header,
  HeaderLogo,
  HeaderNav,
  containerVariants,
  headerVariants
};
//# sourceMappingURL=header.js.map
