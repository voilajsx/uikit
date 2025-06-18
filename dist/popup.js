import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import "react";
import { cn } from "./utils.js";
import { Button } from "./button.js";
import "./badge.js";
import { Separator } from "./separator.js";
import { ChevronLeft, X } from "lucide-react";
function PopupLayout({
  variant = "default",
  size = "md",
  title,
  subtitle,
  logo,
  badge,
  headerActions,
  showBack = false,
  showClose = false,
  showDivider = true,
  onBack,
  onClose,
  footer,
  scrollable = true,
  className,
  children,
  ...props
}) {
  const sizeClasses = {
    sm: "w-72 max-h-80",
    // 288px × 320px - Ultra compact
    md: "w-80 max-h-96",
    // 320px × 384px - Standard popup
    lg: "w-96 max-h-[32rem]",
    // 384px × 512px - Large popup
    auto: "min-w-72 max-w-lg max-h-[80vh]"
    // Responsive
  };
  const variantClasses = {
    default: "bg-background border-border shadow-lg",
    compact: "bg-card border-border shadow-md",
    mini: "bg-popover border-border shadow-sm"
  };
  const paddingClasses = {
    default: "p-4",
    compact: "p-3",
    mini: "p-2"
  };
  const hasHeader = title || subtitle || logo || badge || headerActions || showBack || showClose;
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "flex flex-col border rounded-lg overflow-hidden",
        sizeClasses[size],
        variantClasses[variant],
        className
      ),
      ...props,
      children: [
        hasHeader && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsxs("div", { className: cn("flex items-center gap-3", paddingClasses[variant]), children: [
            showBack && /* @__PURE__ */ jsx(
              Button,
              {
                variant: "ghost",
                size: "sm",
                className: "h-8 w-8 p-0 shrink-0",
                onClick: onBack,
                children: /* @__PURE__ */ jsx(ChevronLeft, { className: "h-4 w-4" })
              }
            ),
            logo && /* @__PURE__ */ jsx("div", { className: "shrink-0", children: logo }),
            /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
              title && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx("h1", { className: "text-sm font-semibold text-foreground truncate", children: title }),
                badge && badge
              ] }),
              subtitle && /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground truncate mt-0.5", children: subtitle })
            ] }),
            headerActions && /* @__PURE__ */ jsx("div", { className: "shrink-0 flex items-center gap-1", children: headerActions }),
            showClose && /* @__PURE__ */ jsx(
              Button,
              {
                variant: "ghost",
                size: "sm",
                className: "h-8 w-8 p-0 shrink-0",
                onClick: onClose,
                children: /* @__PURE__ */ jsx(X, { className: "h-4 w-4" })
              }
            )
          ] }),
          showDivider && /* @__PURE__ */ jsx(Separator, {})
        ] }),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: cn(
              "flex-1",
              scrollable && "overflow-y-auto overflow-x-hidden",
              !hasHeader && paddingClasses[variant],
              hasHeader && variant === "default" && "p-4",
              hasHeader && variant === "compact" && "p-3",
              hasHeader && variant === "mini" && "p-2"
            ),
            children
          }
        ),
        footer && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(Separator, {}),
          /* @__PURE__ */ jsx("div", { className: paddingClasses[variant], children: footer })
        ] })
      ]
    }
  );
}
function PopupHeader({
  title,
  subtitle,
  logo,
  badge,
  actions,
  showBack = false,
  showClose = false,
  onBack,
  onClose,
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxs("div", { className: cn("flex items-center gap-3 p-3", className), ...props, children: [
    showBack && /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "sm", className: "h-8 w-8 p-0", onClick: onBack, children: /* @__PURE__ */ jsx(ChevronLeft, { className: "h-4 w-4" }) }),
    logo && /* @__PURE__ */ jsx("div", { className: "shrink-0", children: logo }),
    /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
      title && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-sm font-semibold truncate", children: title }),
        badge && badge
      ] }),
      subtitle && /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground truncate", children: subtitle })
    ] }),
    actions && /* @__PURE__ */ jsx("div", { className: "shrink-0", children: actions }),
    showClose && /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "sm", className: "h-8 w-8 p-0", onClick: onClose, children: /* @__PURE__ */ jsx(X, { className: "h-4 w-4" }) })
  ] });
}
function PopupContent({
  scrollable = true,
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: cn(
        "flex-1 p-3",
        scrollable && "overflow-y-auto overflow-x-hidden",
        className
      ),
      ...props,
      children
    }
  );
}
function PopupFooter({
  actions,
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsx("div", { className: cn("border-t border-border p-3", className), ...props, children: actions || children });
}
export {
  PopupContent,
  PopupFooter,
  PopupHeader,
  PopupLayout,
  PopupLayout as default
};
//# sourceMappingURL=popup.js.map
