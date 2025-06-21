import { jsx, jsxs } from "react/jsx-runtime";
import "react";
import { ThemeProvider } from "./theme-provider.js";
import { AdminLayout } from "./admin.js";
import { PageLayout, PageHeader, PageContent, PageFooter } from "./page.js";
import AuthLayout from "./auth.js";
import BlankLayout from "./blank.js";
const __vite_import_meta_env__ = {};
function parseNavigationConfig(navConfig) {
  if (!navConfig) return [];
  try {
    return JSON.parse(navConfig);
  } catch (error) {
    console.warn("Failed to parse navigation JSON:", navConfig);
    return [];
  }
}
function getLayoutConfig() {
  const env = __vite_import_meta_env__ || {};
  console.log("🔍 DEBUG getLayoutConfig: Raw environment variables:", {
    VITE__LAYOUT__THEME: env.VITE__LAYOUT__THEME,
    VITE__LAYOUT__VARIANT: env.VITE__LAYOUT__VARIANT,
    VITE__LAYOUT__TYPE: env.VITE__LAYOUT__TYPE,
    VITE__LAYOUT__TITLE: env.VITE__LAYOUT__TITLE,
    VITE__LAYOUT__ADMIN__VARIANT: env.VITE__LAYOUT__ADMIN__VARIANT,
    VITE__LAYOUT__ADMIN__SIZE: env.VITE__LAYOUT__ADMIN__SIZE
  });
  const config = {
    // Theme configuration
    theme: env.VITE__LAYOUT__THEME || "default",
    variant: env.VITE__LAYOUT__VARIANT || "light",
    detectSystem: env.VITE__LAYOUT__DETECT_SYSTEM === "true",
    // Layout configuration
    layout: env.VITE__LAYOUT__TYPE || "admin",
    title: env.VITE__LAYOUT__TITLE || env.VITE__APP__NAME || "Platform",
    logo: env.VITE__LAYOUT__LOGO,
    // Navigation configuration (JSON string)
    navigation: parseNavigationConfig(env.VITE__LAYOUT__NAVIGATION),
    // Admin layout specific props
    adminLayout: {
      variant: env.VITE__LAYOUT__ADMIN__VARIANT || "default",
      size: env.VITE__LAYOUT__ADMIN__SIZE || "default",
      collapsible: env.VITE__LAYOUT__ADMIN__COLLAPSIBLE !== "false",
      defaultSidebarOpen: env.VITE__LAYOUT__ADMIN__SIDEBAR_OPEN !== "false"
    },
    // Page layout specific props
    pageLayout: {
      variant: env.VITE__LAYOUT__PAGE__VARIANT || "default",
      size: env.VITE__LAYOUT__PAGE__SIZE || "xl"
    },
    // Header specific props
    header: {
      variant: env.VITE__LAYOUT__HEADER__VARIANT || "default",
      sticky: env.VITE__LAYOUT__HEADER__STICKY !== "false",
      size: env.VITE__LAYOUT__HEADER__SIZE || "md"
    },
    // Footer specific props
    footer: {
      variant: env.VITE__LAYOUT__FOOTER__VARIANT || "default",
      size: env.VITE__LAYOUT__FOOTER__SIZE || "md"
    },
    // Auth layout specific props
    authLayout: {
      variant: env.VITE__LAYOUT__AUTH__VARIANT || "card",
      imageUrl: env.VITE__LAYOUT__AUTH__IMAGE_URL,
      imageOverlay: env.VITE__LAYOUT__AUTH__IMAGE_OVERLAY || "dark"
    },
    // Blank layout specific props
    blankLayout: {
      variant: env.VITE__LAYOUT__BLANK__VARIANT || "default"
    },
    // Additional custom props (JSON format)
    customProps: parseNavigationConfig(env.VITE__LAYOUT__CUSTOM_PROPS) || {}
  };
  console.log("🔧 DEBUG getLayoutConfig: Final config:", {
    theme: config.theme,
    variant: config.variant,
    layout: config.layout,
    title: config.title,
    navItems: config.navigation.length,
    adminVariant: config.adminLayout.variant,
    adminSize: config.adminLayout.size
  });
  if (typeof window !== "undefined" && window.console) {
    console.log("🔧 Layout configuration loaded:", {
      theme: config.theme,
      variant: config.variant,
      layout: config.layout,
      title: config.title,
      navItems: config.navigation.length,
      customProps: Object.keys(config.customProps).length,
      source: "VITE__ environment variables"
    });
  }
  return config;
}
function LayoutWrapper({ children, layout, navigation, overrides = {} }) {
  const config = { ...getLayoutConfig(), ...overrides };
  const finalLayout = layout || config.layout;
  const finalNavigation = navigation || config.navigation;
  console.log("🎨 DEBUG LayoutWrapper: Passing to ThemeProvider:", {
    theme: config.theme,
    variant: config.variant,
    detectSystem: config.detectSystem,
    finalLayout,
    overrides
  });
  return /* @__PURE__ */ jsx(
    ThemeProvider,
    {
      theme: config.theme,
      variant: config.variant,
      detectSystem: config.detectSystem,
      children: renderLayoutFromConfig(children, finalLayout, finalNavigation, config)
    }
  );
}
function renderLayoutFromConfig(children, layout, navigation, config) {
  console.log("🏗️ DEBUG renderLayoutFromConfig:", {
    layout,
    navigationCount: navigation.length,
    theme: config.theme
  });
  switch (layout) {
    case "admin":
      return /* @__PURE__ */ jsx(
        AdminLayout,
        {
          variant: config.adminLayout.variant,
          size: config.adminLayout.size,
          title: config.title,
          logo: config.logo ? /* @__PURE__ */ jsx("img", { src: config.logo, alt: "Logo", className: "h-8 w-auto" }) : void 0,
          navigationItems: navigation,
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
                  navigation.length > 0 && /* @__PURE__ */ jsx("nav", { className: "ml-auto", children: navigation.map((item) => /* @__PURE__ */ jsx(
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
    case "none":
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
        theme: "default",
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
