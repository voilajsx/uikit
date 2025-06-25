const o = {
  WEB: "web",
  NATIVE: "native",
  TAURI: "tauri",
  UNKNOWN: "unknown"
};
function c() {
  return typeof window < "u" && typeof document < "u" ? window.__TAURI__ !== void 0 || window.__TAURI_IPC__ !== void 0 || window.__TAURI_INVOKE__ !== void 0 ? o.TAURI : o.WEB : typeof navigator < "u" && navigator.product === "ReactNative" ? o.NATIVE : (typeof process < "u" && process.versions && process.versions.node, o.UNKNOWN);
}
function i() {
  return typeof window < "u" && typeof document < "u";
}
function u() {
  return typeof navigator < "u" && navigator.product === "ReactNative";
}
function f() {
  return typeof window < "u" && (window.__TAURI__ !== void 0 || window.__TAURI_IPC__ !== void 0 || window.__TAURI_INVOKE__ !== void 0);
}
function l() {
  return typeof process < "u" && process.versions && process.versions.node !== void 0;
}
function w() {
  return typeof window > "u";
}
function g() {
  if (!i())
    return {
      name: "Unknown",
      version: "Unknown",
      platform: o.UNKNOWN
    };
  const e = navigator.userAgent;
  let r = "Unknown", t = "Unknown";
  if (e.includes("Chrome") && !e.includes("Edg")) {
    r = "Chrome";
    const n = e.match(/Chrome\/(\d+)/);
    t = n ? n[1] : "Unknown";
  } else if (e.includes("Firefox")) {
    r = "Firefox";
    const n = e.match(/Firefox\/(\d+)/);
    t = n ? n[1] : "Unknown";
  } else if (e.includes("Safari") && !e.includes("Chrome")) {
    r = "Safari";
    const n = e.match(/Version\/(\d+)/);
    t = n ? n[1] : "Unknown";
  } else if (e.includes("Edg")) {
    r = "Edge";
    const n = e.match(/Edg\/(\d+)/);
    t = n ? n[1] : "Unknown";
  }
  return {
    name: r,
    version: t,
    platform: c()
  };
}
function v() {
  return i() ? {
    hasClipboard: "clipboard" in navigator,
    hasNotifications: "Notification" in window,
    hasGeolocation: "geolocation" in navigator,
    hasCamera: "mediaDevices" in navigator && "getUserMedia" in navigator.mediaDevices,
    hasFileSystem: "showOpenFilePicker" in window,
    hasLocalStorage: (() => {
      try {
        const e = "__storage_test__";
        return localStorage.setItem(e, e), localStorage.removeItem(e), !0;
      } catch {
        return !1;
      }
    })(),
    hasWebGL: (() => {
      try {
        const e = document.createElement("canvas");
        return !!(e.getContext("webgl") || e.getContext("experimental-webgl"));
      } catch {
        return !1;
      }
    })()
  } : {
    hasClipboard: !1,
    hasNotifications: !1,
    hasGeolocation: !1,
    hasCamera: !1,
    hasFileSystem: !1,
    hasLocalStorage: !1,
    hasWebGL: !1
  };
}
function m() {
  if (!i()) return "Unknown";
  const e = navigator.userAgent;
  return e.includes("Win") ? "Windows" : e.includes("Mac") ? "macOS" : e.includes("Linux") ? "Linux" : e.includes("Android") ? "Android" : e.includes("iPhone") || e.includes("iPad") ? "iOS" : "Unknown";
}
function a() {
  return i() ? /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  ) : !1;
}
function s() {
  return i() ? /iPad|Android(?!.*Mobile)/i.test(navigator.userAgent) : !1;
}
function d() {
  return !a() && !s();
}
function p() {
  return i() ? a() ? "mobile" : s() ? "tablet" : d() ? "desktop" : "unknown" : "unknown";
}
function _(e) {
  if (!i()) return !1;
  const t = {
    webgl: () => {
      try {
        const n = document.createElement("canvas");
        return !!(n.getContext("webgl") || n.getContext("experimental-webgl"));
      } catch {
        return !1;
      }
    },
    webgl2: () => {
      try {
        return !!document.createElement("canvas").getContext("webgl2");
      } catch {
        return !1;
      }
    },
    webrtc: () => "RTCPeerConnection" in window,
    websockets: () => "WebSocket" in window,
    serviceworker: () => "serviceWorker" in navigator,
    indexeddb: () => "indexedDB" in window,
    localstorage: () => {
      try {
        const n = "__test__";
        return localStorage.setItem(n, n), localStorage.removeItem(n), !0;
      } catch {
        return !1;
      }
    },
    clipboard: () => "clipboard" in navigator,
    notifications: () => "Notification" in window,
    geolocation: () => "geolocation" in navigator,
    camera: () => "mediaDevices" in navigator && "getUserMedia" in navigator.mediaDevices,
    filesystem: () => "showOpenFilePicker" in window
  }[e.toLowerCase()];
  return t ? t() : !1;
}
const h = {
  // Core detection
  detect: c,
  is: {
    browser: i,
    native: u,
    tauri: f,
    node: l,
    ssr: w
  },
  // Device detection
  device: {
    isMobile: a,
    isTablet: s,
    isDesktop: d,
    getType: p
  },
  // Browser info
  browser: {
    getInfo: g,
    getOS: m
  },
  // Capabilities
  capabilities: v,
  supports: _,
  // Constants
  PLATFORMS: o
};
export {
  o as PLATFORMS,
  h as default,
  c as detectPlatform,
  g as getBrowserInfo,
  p as getDeviceType,
  m as getOperatingSystem,
  v as getPlatformCapabilities,
  i as isBrowser,
  d as isDesktop,
  a as isMobile,
  u as isNative,
  l as isNode,
  w as isSSR,
  s as isTablet,
  f as isTauri,
  h as platform,
  _ as supportsFeature
};
//# sourceMappingURL=platform.js.map
