# UIKit Custom Theme Generation Guide

**Create beautiful, professional themes with OKLCH color science and modern design tokens.**

## 🎨 What is a UIKit Theme?

A UIKit theme is a complete design system that includes:
- **29 semantic colors** (light + dark mode variants)
- **Design tokens** (fonts, gradients, shadows)
- **Custom CSS styles** (theme-specific enhancements)
- **Chart colors** (5 data visualization colors)
- **Sidebar colors** (8 specialized navigation colors)

---

## ⚡ Quick Start: Create Your First Theme

### Step 1: Create Theme File
Create your theme preset file in the project:

```bash
# Create themes directory if it doesn't exist
mkdir -p src/themes/presets
```

```javascript
// src/themes/presets/my-brand.js
const myBrandTheme = {
  id: 'my-brand',                    // REQUIRED: Unique identifier
  name: 'My Brand Theme',            // REQUIRED: Display name
  description: 'Custom brand colors and design system',

  // Light mode colors
  light: {
    // Base colors
    background: '#FFFFFF',
    foreground: '#1F2937',
    card: '#FFFFFF',
    cardForeground: '#1F2937',
    popover: '#FFFFFF',
    popoverForeground: '#1F2937',

    // Brand colors
    primary: '#3B82F6',              // Your brand color
    primaryForeground: '#FFFFFF',
    secondary: '#F3F4F6',
    secondaryForeground: '#374151',

    // Supporting colors
    muted: '#F9FAFB',
    mutedForeground: '#6B7280',
    accent: '#F3F4F6',
    accentForeground: '#374151',

    // State colors
    destructive: '#EF4444',
    destructiveForeground: '#FFFFFF',

    // Border colors
    border: '#E5E7EB',
    input: '#E5E7EB',
    ring: '#3B82F6',

    // Chart colors (5 required for data visualization)
    chart1: '#3B82F6',
    chart2: '#10B981',
    chart3: '#F59E0B',
    chart4: '#EF4444',
    chart5: '#8B5CF6',

    // Sidebar colors (8 required for AdminLayout)
    sidebar: '#F8FAFC',
    sidebarForeground: '#334155',
    sidebarPrimary: '#3B82F6',
    sidebarPrimaryForeground: '#FFFFFF',
    sidebarAccent: '#F1F5F9',
    sidebarAccentForeground: '#334155',
    sidebarBorder: '#E2E8F0',
    sidebarRing: '#3B82F6',
  },

  // Dark mode colors
  dark: {
    background: '#0F172A',
    foreground: '#F8FAFC',
    card: '#1E293B',
    cardForeground: '#F8FAFC',
    popover: '#1E293B',
    popoverForeground: '#F8FAFC',

    primary: '#60A5FA',
    primaryForeground: '#1E293B',
    secondary: '#1E293B',
    secondaryForeground: '#F8FAFC',

    muted: '#1E293B',
    mutedForeground: '#94A3B8',
    accent: '#1E293B',
    accentForeground: '#F8FAFC',

    destructive: '#F87171',
    destructiveForeground: '#1F2937',

    border: '#334155',
    input: '#334155',
    ring: '#60A5FA',

    chart1: '#60A5FA',
    chart2: '#34D399',
    chart3: '#FBBF24',
    chart4: '#F87171',
    chart5: '#A78BFA',

    sidebar: '#0F172A',
    sidebarForeground: '#CBD5E1',
    sidebarPrimary: '#60A5FA',
    sidebarPrimaryForeground: '#1E293B',
    sidebarAccent: '#1E293B',
    sidebarAccentForeground: '#CBD5E1',
    sidebarBorder: '#334155',
    sidebarRing: '#60A5FA',
  }
};

export default myBrandTheme;
```

### Step 2: Bundle Your Theme
Generate CSS from your theme:

```bash
# Bundle themes and generate CSS
npx uikit bundle

# Or watch for changes during development
npx uikit bundle --watch
```

### Step 3: Use Your Theme
Apply your custom theme in your application:

```jsx
import { ThemeProvider } from '@voilajsx/uikit/theme-provider';

function App() {
  return (
    <ThemeProvider theme="my-brand" mode="light">
      <YourApp />
    </ThemeProvider>
  );
}
```

---

## 🌈 Advanced Theme Features

### Design Tokens System
Add custom fonts, gradients, and enhancements:

```javascript
const advancedTheme = {
  id: 'advanced-brand',
  name: 'Advanced Brand Theme',

  // Design tokens for enhanced styling
  design: {
    fontPrimary: 'Inter, system-ui, sans-serif',
    fontDisplay: 'Cal Sans, Inter, sans-serif',
    fontMono: 'JetBrains Mono, monospace',

    gradientPrimary: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    gradientSecondary: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',

    shadowEnhance: '0 10px 25px rgba(0, 0, 0, 0.1)',
    radiusEnhance: '16px',

    // Custom properties
    brandPattern: 'url("data:image/svg+xml,...custom-pattern")',
  },

  // Custom CSS for theme-specific styling
  customStyles: `
    .theme-advanced-brand {
      /* Custom theme styles */
      --brand-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    }

    .theme-advanced-brand .voila-heading {
      font-family: 'Cal Sans', Inter, sans-serif;
      font-weight: 600;
      letter-spacing: -0.025em;
    }

    .theme-advanced-brand .brand-card {
      background: var(--brand-gradient);
      border-radius: var(--radius-enhance, 16px);
      box-shadow: var(--shadow-enhance);
    }
  `,

  light: {
    // ... your light colors
  },

  dark: {
    // ... your dark colors
  }
};
```

---

## 🎯 OKLCH Color Science (Recommended)

### Why OKLCH?
- **Perceptually uniform** - Better visual consistency
- **Predictable lightness** - Accurate brightness control
- **Better accessibility** - Improved contrast calculations
- **Future-proof** - Modern CSS color space

### OKLCH Syntax
```
oklch(L C H)
L = Lightness (0-1)    - 0 = black, 1 = white
C = Chroma (0-0.4)     - 0 = gray, 0.4+ = vivid
H = Hue (0-360)        - Color wheel degrees
```

### OKLCH Theme Example
```javascript
const oklchTheme = {
  id: 'oklch-theme',
  name: 'OKLCH Color Science Theme',

  light: {
    background: 'oklch(1.00 0.000 0)',          // Pure white
    foreground: 'oklch(0.15 0.000 0)',          // Dark text
    primary: 'oklch(0.50 0.20 250)',            // Blue brand color
    primaryForeground: 'oklch(1.00 0.000 0)',   // White text
    secondary: 'oklch(0.95 0.010 250)',         // Light blue
    accent: 'oklch(0.75 0.15 280)',             // Purple accent
    destructive: 'oklch(0.55 0.22 25)',         // Red warning
    border: 'oklch(0.92 0.005 250)',           // Subtle border
  },

  dark: {
    background: 'oklch(0.08 0.000 0)',          // Dark background
    foreground: 'oklch(0.95 0.000 0)',          // Light text
    primary: 'oklch(0.65 0.20 250)',            // Lighter blue for dark mode
    primaryForeground: 'oklch(0.08 0.000 0)',   // Dark text on light bg
    // ... more dark colors
  }
};
```

---

## 🎨 Color Palette Tools & Resources

### Recommended OKLCH Tools
- **[OKLCH Color Picker](https://oklch.com/)** - Interactive OKLCH color picker
- **[Coolors OKLCH](https://coolors.co/oklch)** - Palette generator with OKLCH
- **[Color.js](https://colorjs.io/)** - Advanced color manipulation library

### Brand Color Conversion
```javascript
// Convert your brand colors to OKLCH
// Hex: #3B82F6 → OKLCH
const brandBlue = 'oklch(0.60 0.15 255)';

// RGB: rgb(59, 130, 246) → OKLCH
const brandBlue = 'oklch(0.60 0.15 255)';
```

### Accessibility Guidelines
```javascript
// Ensure proper contrast ratios
light: {
  background: 'oklch(1.00 0.000 0)',     // White
  foreground: 'oklch(0.15 0.000 0)',     // Dark (21:1 contrast)

  primary: 'oklch(0.45 0.20 250)',       // Accessible blue
  primaryForeground: 'oklch(1.00 0.000 0)', // White (4.5:1+ contrast)
}
```

---

## 📊 Complete Color Reference Table

| Property | Usage | Light Mode Example | Dark Mode Example |
|----------|-------|-------------------|------------------|
| `background` | Main page background | `#FFFFFF` | `#0F172A` |
| `foreground` | Primary text color | `#1F2937` | `#F8FAFC` |
| `card` | Card/panel backgrounds | `#FFFFFF` | `#1E293B` |
| `cardForeground` | Text on cards | `#1F2937` | `#F8FAFC` |
| `popover` | Dropdown/modal backgrounds | `#FFFFFF` | `#1E293B` |
| `popoverForeground` | Text in popovers | `#1F2937` | `#F8FAFC` |
| `primary` | **Brand color** | `#3B82F6` | `#60A5FA` |
| `primaryForeground` | Text on primary elements | `#FFFFFF` | `#1E293B` |
| `secondary` | Secondary buttons/elements | `#F3F4F6` | `#1E293B` |
| `secondaryForeground` | Text on secondary elements | `#374151` | `#F8FAFC` |
| `muted` | Subtle background areas | `#F9FAFB` | `#1E293B` |
| `mutedForeground` | Secondary/subtle text | `#6B7280` | `#94A3B8` |
| `accent` | Accent elements | `#F3F4F6` | `#1E293B` |
| `accentForeground` | Text on accent elements | `#374151` | `#F8FAFC` |
| `destructive` | Error/danger elements | `#EF4444` | `#F87171` |
| `destructiveForeground` | Text on destructive elements | `#FFFFFF` | `#1F2937` |
| `border` | Standard borders | `#E5E7EB` | `#334155` |
| `input` | Input field borders | `#E5E7EB` | `#334155` |
| `ring` | Focus ring color | `#3B82F6` | `#60A5FA` |

### Chart Colors (Data Visualization)
| Property | Purpose | Example |
|----------|---------|---------|
| `chart1` | Primary data series | `#3B82F6` |
| `chart2` | Secondary data series | `#10B981` |
| `chart3` | Tertiary data series | `#F59E0B` |
| `chart4` | Warning data series | `#EF4444` |
| `chart5` | Additional data series | `#8B5CF6` |

### Sidebar Colors (AdminLayout)
| Property | Purpose | Example |
|----------|---------|---------|
| `sidebar` | Sidebar background | `#F8FAFC` |
| `sidebarForeground` | Sidebar text | `#334155` |
| `sidebarPrimary` | Active nav items | `#3B82F6` |
| `sidebarPrimaryForeground` | Text on active items | `#FFFFFF` |
| `sidebarAccent` | Hover states | `#F1F5F9` |
| `sidebarAccentForeground` | Text on hover | `#334155` |
| `sidebarBorder` | Sidebar borders | `#E2E8F0` |
| `sidebarRing` | Focus indicators | `#3B82F6` |

---

## 🔧 Theme Development Workflow

### 1. Setup Development Environment
```bash
# Start theme bundling in watch mode
npx uikit bundle --watch

# In another terminal, start your app
npm run dev
```

### 2. Iterative Design Process
1. **Modify theme file** - Update colors/design tokens
2. **Auto-rebuild** - Watch mode regenerates CSS
3. **Live preview** - See changes instantly in browser
4. **Refine** - Adjust colors based on visual feedback

### 3. Theme Testing Checklist
- [ ] Test in light and dark modes
- [ ] Verify accessibility (contrast ratios)
- [ ] Check all layout components (Admin, Page, Auth)
- [ ] Test form elements and buttons
- [ ] Validate data visualization colors
- [ ] Test responsive design on mobile

---

## 🏢 Brand Integration Examples

### Corporate Theme
```javascript
const corporateTheme = {
  id: 'corporate',
  name: 'Corporate Professional',

  design: {
    fontPrimary: 'Inter, sans-serif',
    fontDisplay: 'DM Sans, sans-serif',
  },

  light: {
    primary: '#1E40AF',        // Professional blue
    secondary: '#F1F5F9',      // Light gray
    accent: '#0F766E',         // Teal accent
    background: '#FFFFFF',     // Clean white
    // ... complete palette
  }
};
```

### Creative Theme
```javascript
const creativeTheme = {
  id: 'creative',
  name: 'Creative Studio',

  design: {
    fontPrimary: 'Poppins, sans-serif',
    gradientPrimary: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },

  light: {
    primary: 'oklch(0.55 0.25 290)',    // Vibrant purple
    accent: 'oklch(0.65 0.20 50)',      // Coral accent
    // ... creative color palette
  }
};
```

### E-commerce Theme
```javascript
const ecommerceTheme = {
  id: 'ecommerce',
  name: 'E-commerce Optimized',

  light: {
    primary: '#059669',        // Trust-building green
    destructive: '#DC2626',    // Clear error red
    chart1: '#059669',         // Sales green
    chart2: '#DC2626',         // Loss red
    chart3: '#D97706',         // Warning orange
    // ... e-commerce specific colors
  }
};
```

---

## 🚀 Advanced Customization

### Custom CSS Integration
```javascript
const advancedTheme = {
  // ... theme properties

  customStyles: `
    /* Theme-specific component styling */
    .theme-${themeId} .custom-button {
      background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      transition: all 0.2s ease;
    }

    .theme-${themeId} .custom-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
    }

    /* Custom focus styles */
    .theme-${themeId} *:focus-visible {
      outline: 2px solid var(--ring);
      outline-offset: 2px;
      border-radius: 4px;
    }
  `
};
```

### Font Integration
```javascript
// Add custom fonts to your project
const fontTheme = {
  design: {
    fontPrimary: 'Neue Montreal, Inter, sans-serif',
    fontDisplay: 'Clash Display, Inter, sans-serif',
    fontMono: 'Berkeley Mono, monospace',
  },

  customStyles: `
    /* Import custom fonts */
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

    .theme-font .voila-heading {
      font-family: 'Clash Display', Inter, sans-serif;
      font-weight: 600;
      letter-spacing: -0.02em;
    }
  `
};
```

---

## 📚 Resources & Tools

### Essential Links
- **[OKLCH Color Picker](https://oklch.com/)** - Interactive OKLCH tool
- **[Accessible Colors](https://accessible-colors.com/)** - Contrast checker
- **[Coolors](https://coolors.co/)** - Palette generator
- **[Adobe Color](https://color.adobe.com/)** - Professional color tools

### UIKit Documentation
- **[Component Reference](./uikit-dev-guide.md)** - All components and layouts
- **[LLM Usage Guide](./UIKIT_LLM_GUIDE.md)** - Complete implementation guide
- **[GitHub Repository](https://github.com/voilajsx/uikit)** - Source code and examples

### CLI Commands Reference
```bash
npx uikit bundle                 # Generate CSS from themes
npx uikit bundle --watch         # Watch mode for development
npx uikit bundle --verbose       # Detailed logging
npx uikit bundle --output <path> # Custom output location
```

---

## 🎯 Best Practices

### 1. Color Strategy
- **Start with your brand primary** - Build palette around brand color
- **Use OKLCH for consistency** - Better perceptual uniformity
- **Test accessibility** - Minimum 4.5:1 contrast ratio
- **Consider color psychology** - Colors convey meaning and emotion

### 2. Design Tokens
- **Define typography scales** - Consistent font sizing
- **Create spacing systems** - Harmonious layout proportions
- **Use semantic naming** - Colors should describe purpose, not appearance
- **Plan for dark mode** - Adjust lightness, maintain hue relationships

### 3. Development Workflow
- **Use watch mode** - Instant feedback during development
- **Test all components** - Ensure theme works across entire UI
- **Version your themes** - Track changes and iterations
- **Document decisions** - Explain color choices and rationale

---

**Create beautiful, accessible themes with @voilajsx/uikit** ✨