import { useMemo } from "react";
import { detectPlatform, PLATFORMS, isNative } from "../lib/platform.js";
function useAdapter(component, props = {}) {
  const platform = useMemo(() => detectPlatform(), []);
  return useMemo(() => {
    if (platform === PLATFORMS.NATIVE || isNative()) {
      try {
        const { nativeAdapter } = require("./native");
        return nativeAdapter(component, props);
      } catch (error) {
        console.warn("Native adapter not available, falling back to web");
        const { webAdapter } = require("./web");
        return webAdapter(component, props);
      }
    }
    try {
      const { webAdapter } = require("./web");
      return webAdapter(component, props);
    } catch (error) {
      console.error("Web adapter not available:", error);
      return { component: "div", styles: "" };
    }
  }, [component, props, platform]);
}
function usePlatform() {
  return useMemo(() => detectPlatform(), []);
}
function useStyles(component, props = {}) {
  const { styles } = useAdapter(component, props);
  return styles;
}
function useIsNative() {
  return useMemo(() => isNative(), []);
}
function useIsWeb() {
  const platform = usePlatform();
  return platform === PLATFORMS.WEB || platform === PLATFORMS.TAURI;
}
function usePlatformComponent({
  web,
  native,
  default: defaultComponent
}) {
  const isNativePlatform = useIsNative();
  return useMemo(() => {
    if (isNativePlatform && native) {
      return native;
    }
    if (!isNativePlatform && web) {
      return web;
    }
    return defaultComponent || null;
  }, [isNativePlatform, web, native, defaultComponent]);
}
export {
  useAdapter,
  useIsNative,
  useIsWeb,
  usePlatform,
  usePlatformComponent,
  useStyles
};
//# sourceMappingURL=hooks.js.map
