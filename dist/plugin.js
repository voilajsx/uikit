import "node:fs";
import "node:path";
function voilajsLayout(options = {}) {
  const {
    enabled = process.env.VOILA_PLATFORM_BUILD === "true",
    verbose = false
  } = options;
  return {
    name: "voilajs-layout",
    buildStart() {
      if (!enabled) {
        if (verbose) console.log("🚫 VoilaJS Layout plugin disabled");
        return;
      }
      const appName = this.getAppName();
      this.logLayoutConfig(appName);
    },
    transform(code, id) {
      if (!enabled) return null;
      if (this.isMainFile(id)) {
        return this.transformMainFile(code, id);
      }
      return null;
    },
    // Helper methods
    getAppName() {
      const cwd = process.cwd();
      const parts = cwd.split("/");
      const appsIndex = parts.indexOf("apps");
      return appsIndex !== -1 && parts[appsIndex + 1] ? parts[appsIndex + 1] : "unknown";
    },
    isMainFile(id) {
      return id.includes("main.jsx") || id.includes("main.tsx") || id.includes("index.jsx");
    },
    logLayoutConfig(appName) {
      const config = {
        app: appName,
        theme: process.env.VOILA_THEME || "default",
        variant: process.env.VOILA_VARIANT || "light",
        layout: process.env.VOILA_LAYOUT || "admin",
        title: process.env.VOILA_TITLE || "Platform",
        navigation: process.env.VOILA_NAV ? "configured" : "none"
      };
      console.log("🎨 VoilaJS Layout Build Configuration:");
      console.table(config);
      if (process.env.VOILA_NAV) {
        try {
          const nav = JSON.parse(process.env.VOILA_NAV);
          console.log(`📋 Navigation: ${nav.length} items configured`);
          if (verbose) {
            nav.forEach((item) => {
              console.log(`  - ${item.label} (${item.path || item.onClick})`);
            });
          }
        } catch (e) {
          console.warn("⚠️ Invalid VOILA_NAV JSON format");
        }
      }
    },
    transformMainFile(code, id) {
      if (verbose) {
        console.log(`🔄 Transforming main file: ${id}`);
      }
      if (code.includes("LayoutWrapper") || code.includes("@voilajsx/uikit")) {
        if (verbose) console.log("📋 Layout wrapper already present, skipping...");
        return null;
      }
      let transformedCode = code;
      if (!transformedCode.includes("LayoutWrapper")) {
        const reactImportRegex = /import React.*?from ['"]react['"];?\n/;
        const match = transformedCode.match(reactImportRegex);
        if (match) {
          const importStatement = `import { LayoutWrapper } from '@voilajsx/uikit/wrapper';
`;
          transformedCode = transformedCode.replace(
            match[0],
            match[0] + importStatement
          );
        } else {
          transformedCode = `import { LayoutWrapper } from '@voilajsx/uikit/wrapper';
${transformedCode}`;
        }
      }
      const renderPatterns = [
        // React 18+ createRoot pattern
        /createRoot\s*\(\s*document\.getElementById\(['"]root['"]\)\s*\)\.render\s*\(\s*([\s\S]*?)\s*\)/,
        // Legacy ReactDOM.render pattern
        /ReactDOM\.render\s*\(\s*([\s\S]*?)\s*,\s*document\.getElementById\(['"]root['"]\)\s*\)/,
        // Alternative render patterns
        /\.render\s*\(\s*([\s\S]*?)\s*\)/
      ];
      let wrapped = false;
      for (const pattern of renderPatterns) {
        if (pattern.test(transformedCode)) {
          transformedCode = transformedCode.replace(pattern, (match, content) => {
            wrapped = true;
            const cleanContent = content.trim();
            const wrappedContent = `
  <LayoutWrapper>
    ${cleanContent}
  </LayoutWrapper>`;
            if (match.includes("createRoot")) {
              return match.replace(content, wrappedContent);
            } else if (match.includes("ReactDOM.render")) {
              return match.replace(content, wrappedContent);
            } else {
              return match.replace(content, wrappedContent);
            }
          });
          break;
        }
      }
      if (!wrapped) {
        console.warn("⚠️ Could not find render pattern to wrap with LayoutWrapper");
        console.warn("💡 Manual wrapping may be required");
        return null;
      }
      if (verbose) {
        console.log("✅ Successfully injected LayoutWrapper");
      }
      return {
        code: transformedCode,
        map: null
        // You could generate source maps here if needed
      };
    }
  };
}
export {
  voilajsLayout as LayoutPlugin,
  voilajsLayout as default,
  voilajsLayout
};
//# sourceMappingURL=plugin.js.map
