# @voilajsx/uikit

**Custom Themes + Ready Layouts + Cross-Platform**

A modern React component library that extends shadcn/ui with beautiful themes, complete page layouts, and universal platform support. Built with OKLCH color science and designed for modern web development, @voilajsx/uikit provides everything you need to build stunning applications quickly. Whether you're creating a simple website or a complex dashboard, our components adapt seamlessly across Web, React Native, Expo, and Tauri platforms while maintaining 100% API compatibility with shadcn/ui.

[![npm version](https://badge.fury.io/js/@voilajsx%2Fuikit.svg)](https://www.npmjs.com/package/@voilajsx/uikit)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## ✨ What You Get

- 🎨 **6 Professional Themes** - Default, Metro, Studio, Ruby, Neon, Aurora
- 🏗️ **4 Page Layouts** - Auth, Blank, Page, Admin templates
- 📦 **3 Section Components** - Header, Container, Footer building blocks
- 🧩 **35+ UI Components** - 100% shadcn/ui compatible
- 📱 **Cross-Platform** - Web, React Native, Expo, Tauri
- ⚡ **Zero Migration** - Just change imports, keep everything else

## 🚀 Quick Start

```bash
npm install @voilajsx/uikit
```

```jsx
import { Button } from '@voilajsx/uikit/button';
import { ThemeProvider } from '@voilajsx/uikit/theme-provider';
import '@voilajsx/uikit/styles';

function App() {
  return (
    <ThemeProvider theme="ruby" variant="light">
      <Button size="lg">Beautiful Button</Button>
    </ThemeProvider>
  );
}
```

## 🎯 Zero Migration from shadcn/ui

```diff
- import { Button } from "@/components/ui/button"
+ import { Button } from "@voilajsx/uikit/button"

// Everything else stays exactly the same!
<Button variant="default" size="lg">Same API</Button>
```

## 📚 Documentation

For complete guides, live examples, theming tutorials, and full API reference, visit our comprehensive documentation site.

<p align="center">
  <a href="https://voilajsx.github.io/uikit">
    <img src="https://img.shields.io/badge/📚_Read_Documentation-4F46E5?style=for-the-badge&labelColor=1F2937&color=4F46E5" alt="Read Documentation" />
  </a>
</p>

---

<p align="center">
  Built with ❤️ by the <a href="https://github.com/orgs/voilajsx/people">VoilaJSX Team</a>
</p>
