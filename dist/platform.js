const PLATFORMS = {
  WEB: "web",
  NATIVE: "native",
  TAURI: "tauri",
  UNKNOWN: "unknown"
};
function detectPlatform() {
  if (typeof window !== "undefined" && typeof document !== "undefined") {
    if (window.__TAURI__ !== void 0 || window.__TAURI_IPC__ !== void 0) {
      return PLATFORMS.TAURI;
    }
    return PLATFORMS.WEB;
  }
  if (typeof navigator !== "undefined" && navigator.product === "ReactNative") {
    return PLATFORMS.NATIVE;
  }
  return PLATFORMS.UNKNOWN;
}
function isBrowser() {
  return typeof window !== "undefined" && typeof document !== "undefined";
}
function isNative() {
  return typeof navigator !== "undefined" && navigator.product === "ReactNative";
}
function isTauri() {
  return typeof window !== "undefined" && (window.__TAURI__ !== void 0 || window.__TAURI_IPC__ !== void 0);
}
export {
  PLATFORMS,
  detectPlatform,
  isBrowser,
  isNative,
  isTauri
};
//# sourceMappingURL=platform.js.map
