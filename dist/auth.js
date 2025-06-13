import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import "react";
import { cn } from "./utils.js";
function AuthTemplate({
  variant = "simple",
  title,
  subtitle,
  logo,
  footer,
  className,
  containerProps,
  // Split variant props
  splitContent,
  // Image variant props
  imageUrl = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  imageAlt = "Authentication background",
  imageOverlay = "dark",
  // Card variant props
  cardContent,
  children
}) {
  const overlayClasses = {
    light: "bg-gradient-to-br from-white/50 via-white/25 to-white/50",
    dark: "bg-gradient-to-br from-black/40 via-black/25 to-black/40",
    none: ""
  };
  if (variant === "simple") {
    return /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-background flex items-center justify-center p-4", children: /* @__PURE__ */ jsxs(
      "div",
      {
        ...containerProps,
        className: cn(
          "w-full max-w-md space-y-6",
          containerProps?.className
        ),
        children: [
          logo && /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: logo }),
          (title || subtitle) && /* @__PURE__ */ jsxs("div", { className: "text-center space-y-2", children: [
            title && /* @__PURE__ */ jsx("h1", { className: "text-2xl font-semibold tracking-tight text-foreground", children: title }),
            subtitle && /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: subtitle })
          ] }),
          /* @__PURE__ */ jsx("div", { className: cn("space-y-4", className), children }),
          footer && /* @__PURE__ */ jsx("div", { className: "text-center", children: footer })
        ]
      }
    ) });
  }
  if (variant === "card") {
    return /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-background flex items-center justify-center p-4", children: /* @__PURE__ */ jsxs(
      "div",
      {
        ...containerProps,
        className: cn(
          "w-full max-w-md space-y-6 p-8 bg-card border border-border rounded-lg shadow-lg",
          containerProps?.className
        ),
        children: [
          logo && /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: logo }),
          (title || subtitle) && /* @__PURE__ */ jsxs("div", { className: "text-center space-y-2", children: [
            title && /* @__PURE__ */ jsx("h1", { className: "text-2xl font-semibold tracking-tight text-foreground", children: title }),
            subtitle && /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: subtitle })
          ] }),
          /* @__PURE__ */ jsx("div", { className: cn("space-y-4", className), children }),
          footer && /* @__PURE__ */ jsx("div", { className: "text-center", children: footer })
        ]
      }
    ) });
  }
  if (variant === "split-gradient" || variant === "split-image") {
    return /* @__PURE__ */ jsxs("div", { className: "flex min-h-screen bg-background", children: [
      /* @__PURE__ */ jsxs("div", { className: "hidden lg:flex lg:w-1/2 relative overflow-hidden", children: [
        variant === "split-gradient" ? /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-accent" }),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-10", children: /* @__PURE__ */ jsx(
            "div",
            {
              className: "w-full h-full",
              style: {
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='53' cy='7' r='1'/%3E%3Ccircle cx='7' cy='53' r='1'/%3E%3Ccircle cx='53' cy='53' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
              }
            }
          ) })
        ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: imageUrl,
              alt: imageAlt,
              className: "absolute inset-0 w-full h-full object-cover"
            }
          ),
          imageOverlay !== "none" && /* @__PURE__ */ jsx("div", { className: cn("absolute inset-0", overlayClasses[imageOverlay]) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: cn(
          "relative z-10 flex flex-col justify-center p-8 lg:p-12",
          variant === "split-gradient" ? "text-primary-foreground" : "text-white"
        ), children: splitContent })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-1 lg:w-1/2", children: /* @__PURE__ */ jsx("div", { className: "flex flex-col justify-center w-full px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto w-full max-w-sm lg:w-96", children: [
        logo && /* @__PURE__ */ jsx("div", { className: "flex justify-center lg:justify-start mb-8", children: logo }),
        (title || subtitle) && /* @__PURE__ */ jsxs("div", { className: "text-center lg:text-left space-y-2 mb-8", children: [
          title && /* @__PURE__ */ jsx("h1", { className: "text-2xl sm:text-3xl font-semibold tracking-tight text-foreground", children: title }),
          subtitle && /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: subtitle })
        ] }),
        /* @__PURE__ */ jsx("div", { className: cn("space-y-4", className), children }),
        footer && /* @__PURE__ */ jsx("div", { className: "text-center lg:text-left mt-8", children: footer })
      ] }) }) })
    ] });
  }
  if (variant === "card-gradient") {
    return /* @__PURE__ */ jsx("div", { className: "min-h-screen background flex items-center justify-center p-4 sm:p-6", children: /* @__PURE__ */ jsxs("div", { className: "w-full max-w-md", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-xl shadow-2xl overflow-hidden border border-none", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative h-48 bg-gradient-to-br from-primary via-primary to-primary/80 overflow-hidden", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-20", children: /* @__PURE__ */ jsx(
            "div",
            {
              className: "w-full h-full",
              style: {
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3Ccircle cx='10' cy='10' r='1'/%3E%3Ccircle cx='50' cy='10' r='1'/%3E%3Ccircle cx='10' cy='50' r='1'/%3E%3Ccircle cx='50' cy='50' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
              }
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "absolute top-4 right-6 w-16 h-16 bg-primary-foreground/10 rounded-full blur-xl" }),
          /* @__PURE__ */ jsx("div", { className: "absolute bottom-6 left-8 w-12 h-12 bg-primary-foreground/15 rounded-full blur-lg" }),
          /* @__PURE__ */ jsx("div", { className: "absolute top-12 left-12 w-8 h-8 bg-primary-foreground/20 rounded-full blur-md" }),
          /* @__PURE__ */ jsxs("div", { className: "relative z-10 h-full flex flex-col justify-center items-center text-center px-8", children: [
            /* @__PURE__ */ jsx("div", { className: "mb-4", children: logo }),
            title && /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold text-primary-foreground mb-2", children: title }),
            subtitle && /* @__PURE__ */ jsx("p", { className: "text-primary-foreground/90 text-sm", children: subtitle })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "p-8 space-y-6 bg-white", children: /* @__PURE__ */ jsx("div", { className: cn("space-y-4", className), children }) })
      ] }),
      cardContent && /* @__PURE__ */ jsx("div", { className: "mt-8", children: cardContent }),
      footer && /* @__PURE__ */ jsx("div", { className: "text-center mt-6 text-sm text-muted-foreground", children: footer })
    ] }) });
  }
  if (variant === "card-image") {
    return /* @__PURE__ */ jsxs("div", { className: "min-h-screen relative overflow-hidden", children: [
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: "absolute inset-0 bg-cover bg-center bg-no-repeat",
          style: {
            backgroundImage: `url('${imageUrl}')`
          },
          children: [
            /* @__PURE__ */ jsx("div", { className: cn("absolute inset-0", overlayClasses[imageOverlay]) }),
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "relative  z-10 min-h-screen flex items-center justify-center p-4 sm:p-6", children: /* @__PURE__ */ jsxs("div", { className: "w-full max-w-md", children: [
        logo && /* @__PURE__ */ jsx("div", { className: "text-center mb-8", children: logo }),
        /* @__PURE__ */ jsxs("div", { className: "bg-card/95 bg-white backdrop-blur-xl rounded-3xl shadow-2xl border border-border/20 overflow-hidden", children: [
          /* @__PURE__ */ jsxs("div", { className: "px-8 pt-8 pb-6 text-center", children: [
            title && /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold text-foreground mb-2", children: title }),
            subtitle && /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: subtitle })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "px-8 pb-8 space-y-6", children: /* @__PURE__ */ jsx("div", { className: cn("space-y-4", className), children }) })
        ] }),
        cardContent && /* @__PURE__ */ jsx("div", { className: "mt-8", children: cardContent }),
        footer && /* @__PURE__ */ jsx("div", { className: "text-center mt-8 text-sm text-primary-foreground/80", children: footer })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-20 left-10 w-2 h-2 bg-primary-foreground/30 rounded-full animate-pulse" }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-40 right-20 w-3 h-3 bg-primary/40 rounded-full animate-pulse delay-1000" }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-32 left-20 w-2 h-2 bg-primary/40 rounded-full animate-pulse delay-500" }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-20 right-32 w-4 h-4 bg-primary-foreground/20 rounded-full animate-pulse delay-700" })
    ] });
  }
  return /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-background flex items-center justify-center p-4", children: /* @__PURE__ */ jsx("div", { className: "w-full max-w-md space-y-6", children: /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxs("p", { className: "text-destructive", children: [
    "Invalid variant: ",
    variant
  ] }) }) }) });
}
export {
  AuthTemplate,
  AuthTemplate as default
};
//# sourceMappingURL=auth.js.map
