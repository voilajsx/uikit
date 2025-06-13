import { jsx, jsxs } from "react/jsx-runtime";
import "react";
import { cn } from "./utils.js";
function BlankTemplate({
  variant = "default",
  title,
  subtitle,
  logo,
  icon,
  actions,
  footer,
  className,
  containerProps,
  children
}) {
  const getVariantConfig = () => {
    switch (variant) {
      case "card":
        return {
          containerClasses: "w-full max-w-2xl space-y-8 p-8 sm:p-12 bg-card border border-border rounded-xl shadow-lg text-center",
          iconClasses: ""
        };
      case "error":
        return {
          containerClasses: "w-full max-w-2xl space-y-8 text-center",
          iconClasses: "text-muted-foreground"
        };
      case "maintenance":
        return {
          containerClasses: "w-full max-w-2xl space-y-8 text-center",
          iconClasses: "text-primary animate-pulse"
        };
      case "suspension":
        return {
          containerClasses: "w-full max-w-2xl space-y-8 text-center",
          iconClasses: "text-destructive"
        };
      default:
        return {
          containerClasses: "w-full max-w-2xl space-y-8 text-center",
          iconClasses: ""
        };
    }
  };
  const config = getVariantConfig();
  return /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-background flex items-center justify-center p-4", children: /* @__PURE__ */ jsxs(
    "div",
    {
      ...containerProps,
      className: cn(
        config.containerClasses,
        containerProps?.className
      ),
      children: [
        logo && /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: logo }),
        icon && /* @__PURE__ */ jsx("div", { className: cn("flex justify-center", config.iconClasses), children: icon }),
        (title || subtitle) && /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          title && /* @__PURE__ */ jsx("h1", { className: "text-3xl sm:text-4xl font-bold tracking-tight text-foreground", children: title }),
          subtitle && /* @__PURE__ */ jsx("p", { className: cn(
            "text-lg text-muted-foreground",
            variant === "default" && "max-w-md mx-auto"
          ), children: subtitle })
        ] }),
        children && /* @__PURE__ */ jsx("div", { className: cn("space-y-6", className), children }),
        actions && /* @__PURE__ */ jsx("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: actions }),
        footer && /* @__PURE__ */ jsx("div", { className: cn(
          "text-center",
          (variant === "error" || variant === "maintenance" || variant === "suspension") && "text-sm text-muted-foreground"
        ), children: footer })
      ]
    }
  ) });
}
export {
  BlankTemplate,
  BlankTemplate as default
};
//# sourceMappingURL=blank.js.map
