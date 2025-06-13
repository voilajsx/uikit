import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { createContext, forwardRef, useContext } from "react";
import { cva } from "class-variance-authority";
import { cn } from "./utils.js";
import { Button } from "./button.js";
import { Separator } from "./separator.js";
const FooterContext = createContext({});
const footerVariants = cva(
  "w-full border-t transition-all duration-200",
  {
    variants: {
      variant: {
        default: [
          "bg-background border-border",
          "text-foreground"
        ],
        muted: [
          "bg-muted/30 border-border/50",
          "text-foreground"
        ],
        dark: [
          "bg-secondary border-border",
          "text-secondary-foreground"
        ]
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
const containerVariants = cva(
  "mx-auto",
  {
    variants: {
      size: {
        sm: "max-w-2xl py-4 px-4",
        md: "max-w-4xl py-5 px-4 sm:px-6",
        lg: "max-w-6xl py-6 px-4 sm:px-6 lg:px-8",
        xl: "max-w-7xl py-6 px-4 sm:px-6 lg:px-8",
        full: "max-w-full py-8 px-4 sm:px-6 lg:px-8"
      }
    },
    defaultVariants: {
      size: "xl"
    }
  }
);
const Footer = forwardRef(({
  className,
  variant = "default",
  size = "xl",
  children,
  ...props
}, ref) => {
  return /* @__PURE__ */ jsx(FooterContext.Provider, { value: { variant, size }, children: /* @__PURE__ */ jsx(
    "footer",
    {
      ref,
      className: cn(footerVariants({ variant }), className),
      ...props,
      children: /* @__PURE__ */ jsx("div", { className: cn(containerVariants({ size })), children })
    }
  ) });
});
Footer.displayName = "Footer";
const FooterBasic = forwardRef(({
  className,
  logo,
  links = [],
  social,
  copyright,
  ...props
}, ref) => {
  const { variant } = useContext(FooterContext);
  const getLinkStyles = () => {
    switch (variant) {
      case "muted":
        return "text-muted-foreground hover:text-foreground";
      case "dark":
        return "text-secondary-foreground/70 hover:text-secondary-foreground";
      default:
        return "text-muted-foreground hover:text-foreground";
    }
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref,
      className: cn("space-y-4", className),
      ...props,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-between gap-4", children: [
          logo && /* @__PURE__ */ jsx("div", { className: "flex-shrink-0", children: logo }),
          links.length > 0 && /* @__PURE__ */ jsx("nav", { className: "flex flex-wrap items-center justify-center gap-6", children: links.map((link, index) => /* @__PURE__ */ jsx(
            "button",
            {
              onClick: link.onClick,
              className: cn(
                "text-sm transition-colors cursor-pointer",
                getLinkStyles(),
                link.className
              ),
              children: link.label
            },
            link.key || index
          )) }),
          social && /* @__PURE__ */ jsx("div", { className: "flex-shrink-0", children: social })
        ] }),
        copyright && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(Separator, {}),
          /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsx("p", { className: cn(
            "text-sm",
            variant === "dark" ? "text-secondary-foreground/60" : "text-muted-foreground"
          ), children: copyright }) })
        ] })
      ]
    }
  );
});
FooterBasic.displayName = "FooterBasic";
const FooterAdvanced = forwardRef(({
  className,
  brand,
  columns = [],
  newsletter,
  social,
  legal,
  copyright,
  ...props
}, ref) => {
  const { variant } = useContext(FooterContext);
  const getTextStyles = () => {
    switch (variant) {
      case "muted":
        return {
          heading: "text-foreground",
          text: "text-muted-foreground",
          link: "text-muted-foreground hover:text-foreground"
        };
      case "dark":
        return {
          heading: "text-secondary-foreground",
          text: "text-secondary-foreground/70",
          link: "text-secondary-foreground/70 hover:text-secondary-foreground"
        };
      default:
        return {
          heading: "text-foreground",
          text: "text-muted-foreground",
          link: "text-muted-foreground hover:text-foreground"
        };
    }
  };
  const styles = getTextStyles();
  const getTotalColumnsCount = () => {
    let count = 0;
    if (brand) count += 1;
    if (columns.length > 0) count += Math.min(columns.length, 4);
    if (newsletter) count += 1;
    return Math.min(count, 5);
  };
  const totalColumns = getTotalColumnsCount();
  const getMainGridClass = () => {
    if (totalColumns <= 1) return "lg:grid-cols-1";
    if (totalColumns === 2) return "lg:grid-cols-2";
    if (totalColumns === 3) return "lg:grid-cols-3";
    if (totalColumns === 4) return "lg:grid-cols-4";
    return "lg:grid-cols-5";
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref,
      className: cn("space-y-8", className),
      ...props,
      children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "block lg:hidden space-y-6", children: [
            brand && /* @__PURE__ */ jsx("div", { className: "space-y-4", children: brand }),
            columns.length > 0 && /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-6", children: columns.slice(0, 4).map((column, index) => /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
              /* @__PURE__ */ jsx("h4", { className: cn("text-sm font-semibold", styles.heading), children: column.title }),
              /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: column.links?.map((link, linkIndex) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: link.onClick,
                  className: cn(
                    "text-sm transition-colors cursor-pointer block",
                    styles.link,
                    link.className
                  ),
                  children: link.label
                }
              ) }, link.key || linkIndex)) })
            ] }, column.key || index)) }),
            newsletter && /* @__PURE__ */ jsx("div", { className: "space-y-4", children: newsletter })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "hidden lg:block", children: /* @__PURE__ */ jsxs("div", { className: cn("grid gap-8", getMainGridClass()), children: [
            brand && /* @__PURE__ */ jsx("div", { className: "space-y-4", children: brand }),
            columns.slice(0, 4).map((column, index) => /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
              /* @__PURE__ */ jsx("h4", { className: cn("text-sm font-semibold", styles.heading), children: column.title }),
              /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: column.links?.map((link, linkIndex) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: link.onClick,
                  className: cn(
                    "text-sm transition-colors cursor-pointer block",
                    styles.link,
                    link.className
                  ),
                  children: link.label
                }
              ) }, link.key || linkIndex)) })
            ] }, column.key || index)),
            newsletter && /* @__PURE__ */ jsx("div", { className: "space-y-4", children: newsletter })
          ] }) })
        ] }),
        columns.length > 4 && /* @__PURE__ */ jsx("div", { className: "grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5", children: columns.slice(4).map((column, index) => /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsx("h4", { className: cn("text-sm font-semibold", styles.heading), children: column.title }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: column.links?.map((link, linkIndex) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            "button",
            {
              onClick: link.onClick,
              className: cn(
                "text-sm transition-colors cursor-pointer block",
                styles.link,
                link.className
              ),
              children: link.label
            }
          ) }, link.key || linkIndex)) })
        ] }, column.key || index + 4)) }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsx(Separator, {}),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-between gap-4", children: [
            copyright && /* @__PURE__ */ jsx("p", { className: cn("text-sm", styles.text), children: copyright }),
            legal && /* @__PURE__ */ jsx("div", { className: "flex items-center gap-4", children: legal }),
            social && /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2", children: social })
          ] })
        ] })
      ]
    }
  );
});
FooterAdvanced.displayName = "FooterAdvanced";
const FooterBrand = forwardRef(({
  className,
  logo,
  description,
  contact,
  ...props
}, ref) => {
  const { variant } = useContext(FooterContext);
  const textClass = variant === "dark" ? "text-secondary-foreground/70" : "text-muted-foreground";
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref,
      className: cn("space-y-4", className),
      ...props,
      children: [
        logo && /* @__PURE__ */ jsx("div", { className: "flex-shrink-0", children: logo }),
        description && /* @__PURE__ */ jsx("p", { className: cn("text-sm leading-relaxed", textClass), children: description }),
        contact && /* @__PURE__ */ jsx("div", { className: cn("text-sm", textClass), children: contact })
      ]
    }
  );
});
FooterBrand.displayName = "FooterBrand";
const FooterSocial = forwardRef(({
  className,
  links = [],
  ...props
}, ref) => {
  const { variant } = useContext(FooterContext);
  const getButtonStyles = () => {
    switch (variant) {
      case "muted":
        return "text-muted-foreground hover:text-foreground hover:bg-background/50";
      case "dark":
        return "text-secondary-foreground/70 hover:text-secondary-foreground hover:bg-secondary-foreground/10";
      default:
        return "text-muted-foreground hover:text-foreground hover:bg-muted";
    }
  };
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      className: cn("flex items-center gap-1", className),
      ...props,
      children: links.map((link, index) => /* @__PURE__ */ jsx(
        Button,
        {
          variant: "ghost",
          size: "icon",
          className: cn("h-8 w-8", getButtonStyles(), link.className),
          onClick: link.onClick,
          title: link.label,
          children: link.icon && /* @__PURE__ */ jsx(link.icon, { className: "h-4 w-4" })
        },
        link.key || index
      ))
    }
  );
});
FooterSocial.displayName = "FooterSocial";
Footer.Basic = FooterBasic;
Footer.Advanced = FooterAdvanced;
Footer.Brand = FooterBrand;
Footer.Social = FooterSocial;
export {
  Footer,
  FooterAdvanced,
  FooterBasic,
  FooterBrand,
  FooterSocial,
  containerVariants,
  footerVariants
};
//# sourceMappingURL=footer.js.map
