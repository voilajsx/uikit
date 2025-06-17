import { jsx, jsxs } from "react/jsx-runtime";
import "react";
import { ThemeProvider } from "./theme-provider.js";
import { AdminLayout } from "./admin.js";
import { PageLayout, PageHeader, PageContent, PageFooter } from "./page.js";
import AuthLayout from "./auth.js";
import BlankLayout from "./blank.js";
function getLayoutConfig() {
  const config = {
    // Theme configuration
    theme: process.env.VOILA_THEME || "default",
    variant: process.env.VOILA_VARIANT || "light",
    detectSystem: process.env.VOILA_DETECT_SYSTEM === "true",
    // Layout configuration
    layout: process.env.VOILA_LAYOUT || "admin",
    layoutVariant: process.env.VOILA_LAYOUT_VARIANT || "default",
    layoutSize: process.env.VOILA_LAYOUT_SIZE || "default",
    // Content configuration
    title: process.env.VOILA_TITLE || "Platform",
    logo: process.env.VOILA_LOGO,
    // Navigation configuration
    navigation: process.env.VOILA_NAV ? JSON.parse(process.env.VOILA_NAV) : [],
    // Admin layout specific props
    adminLayout: {
      variant: process.env.VOILA_ADMIN_VARIANT || "default",
      size: process.env.VOILA_ADMIN_SIZE || "default",
      collapsible: process.env.VOILA_ADMIN_COLLAPSIBLE !== "false",
      defaultSidebarOpen: process.env.VOILA_ADMIN_SIDEBAR_OPEN !== "false"
    },
    // Page layout specific props
    pageLayout: {
      variant: process.env.VOILA_PAGE_VARIANT || "default",
      size: process.env.VOILA_PAGE_SIZE || "xl"
    },
    // Header specific props
    header: {
      variant: process.env.VOILA_HEADER_VARIANT || "default",
      sticky: process.env.VOILA_HEADER_STICKY !== "false",
      size: process.env.VOILA_HEADER_SIZE || "md"
    },
    // Footer specific props
    footer: {
      variant: process.env.VOILA_FOOTER_VARIANT || "default",
      size: process.env.VOILA_FOOTER_SIZE || "md"
    },
    // Auth layout specific props
    authLayout: {
      variant: process.env.VOILA_AUTH_VARIANT || "card",
      imageUrl: process.env.VOILA_AUTH_IMAGE_URL,
      imageOverlay: process.env.VOILA_AUTH_IMAGE_OVERLAY || "dark"
    },
    // Blank layout specific props
    blankLayout: {
      variant: process.env.VOILA_BLANK_VARIANT || "default"
    },
    // Additional custom props (JSON format)
    customProps: process.env.VOILA_CUSTOM_PROPS ? JSON.parse(process.env.VOILA_CUSTOM_PROPS) : {}
  };
  console.log("🔧 Layout configuration loaded:", {
    theme: config.theme,
    variant: config.variant,
    layout: config.layout,
    title: config.title,
    navItems: config.navigation.length,
    customProps: Object.keys(config.customProps).length
  });
  return config;
}
function LayoutWrapper({ children, overrides = {} }) {
  const config = { ...getLayoutConfig(), ...overrides };
  return /* @__PURE__ */ jsx(
    ThemeProvider,
    {
      theme: config.theme,
      variant: config.variant,
      detectSystem: config.detectSystem,
      children: renderLayoutFromConfig(children, config)
    }
  );
}
function renderLayoutFromConfig(children, config) {
  switch (config.layout) {
    case "admin":
      return /* @__PURE__ */ jsx(
        AdminLayout,
        {
          variant: config.adminLayout.variant,
          size: config.adminLayout.size,
          title: config.title,
          logo: config.logo ? /* @__PURE__ */ jsx("img", { src: config.logo, alt: "Logo", className: "h-8 w-auto" }) : void 0,
          navigationItems: config.navigation,
          currentPath: typeof window !== "undefined" ? window.location.pathname : "/",
          onNavigate: handleLayoutNavigation,
          collapsible: config.adminLayout.collapsible,
          defaultSidebarOpen: config.adminLayout.defaultSidebarOpen,
          headerActions: renderHeaderActions(),
          ...config.customProps,
          children
        }
      );
    case "page":
      return /* @__PURE__ */ jsxs(
        PageLayout,
        {
          variant: config.pageLayout.variant,
          size: config.pageLayout.size,
          ...config.customProps,
          children: [
            /* @__PURE__ */ jsxs(
              PageHeader,
              {
                variant: config.header.variant,
                sticky: config.header.sticky,
                size: config.header.size,
                children: [
                  config.logo ? /* @__PURE__ */ jsx("img", { src: config.logo, alt: "Logo", className: "h-8 w-auto mr-3" }) : /* @__PURE__ */ jsx("span", { className: "text-xl font-bold", children: config.title }),
                  config.navigation.length > 0 && /* @__PURE__ */ jsx("nav", { className: "ml-auto", children: config.navigation.map((item) => /* @__PURE__ */ jsx(
                    "button",
                    {
                      onClick: () => handleLayoutNavigation(item.path, item),
                      className: "ml-4 text-foreground hover:text-primary",
                      children: item.label
                    },
                    item.key
                  )) })
                ]
              }
            ),
            /* @__PURE__ */ jsx(PageContent, { children }),
            /* @__PURE__ */ jsx(
              PageFooter,
              {
                variant: config.footer.variant,
                size: config.footer.size,
                children: /* @__PURE__ */ jsxs("div", { className: "text-center text-sm text-muted-foreground", children: [
                  "© 2024 ",
                  config.title,
                  ". All rights reserved."
                ] })
              }
            )
          ]
        }
      );
    case "auth":
      return /* @__PURE__ */ jsx(
        AuthLayout,
        {
          variant: config.authLayout.variant,
          title: config.title,
          logo: config.logo ? /* @__PURE__ */ jsx("img", { src: config.logo, alt: "Logo", className: "h-16 w-auto" }) : void 0,
          imageUrl: config.authLayout.imageUrl,
          imageOverlay: config.authLayout.imageOverlay,
          ...config.customProps,
          children
        }
      );
    case "blank":
      return /* @__PURE__ */ jsx(
        BlankLayout,
        {
          variant: config.blankLayout.variant,
          title: config.title,
          logo: config.logo ? /* @__PURE__ */ jsx("img", { src: config.logo, alt: "Logo", className: "h-12 w-auto" }) : void 0,
          ...config.customProps,
          children
        }
      );
    default:
      return children;
  }
}
function renderHeaderActions(config) {
  return null;
}
function handleLayoutNavigation(path, item) {
  if (typeof window === "undefined") return;
  switch (item.onClick) {
    case "handleLogout":
      localStorage.removeItem("auth_token");
      localStorage.removeItem("auth_user");
      window.dispatchEvent(new CustomEvent("layout-logout"));
      window.location.href = "/login";
      return;
    case "toggleTheme":
      const currentVariant = document.documentElement.classList.contains("dark") ? "dark" : "light";
      const newVariant = currentVariant === "dark" ? "light" : "dark";
      document.documentElement.classList.toggle("dark", newVariant === "dark");
      localStorage.setItem("uikit-theme", JSON.stringify({
        theme: process.env.VOILA_THEME || "default",
        variant: newVariant
      }));
      return;
    default:
      if (typeof item.onClick === "function") {
        item.onClick();
        return;
      }
  }
  if (path) {
    if (path.startsWith("http") || path.startsWith("//")) {
      window.open(path, item.target || "_blank");
    } else {
      window.location.href = path;
    }
  }
}
function useLayoutConfig() {
  return getLayoutConfig();
}
function withLayoutConfig(componentProps, configKey) {
  const config = getLayoutConfig();
  const layoutProps = config[configKey] || {};
  return {
    ...layoutProps,
    ...componentProps
    // Component props override layout config
  };
}
export {
  LayoutWrapper,
  useLayoutConfig,
  withLayoutConfig
};
//# sourceMappingURL=wrapper.js.map
