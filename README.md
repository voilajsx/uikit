# @voilajsx/uikit

A comprehensive React component library designed for building modern admin dashboards and corporate websites. Built with React and Tailwind CSS, the @voilajsx/uikit provides a set of customizable, accessible, and responsive components with a consistent design system.

## Key Features

- **Theme-First Design**: All visual properties use CSS variables, enabling seamless theme switching
- **Accessibility by Default**: All components meet WCAG 2.1 AA standards
- **Responsive & Mobile-First**: Components adapt automatically to different screen sizes
- **Composition Over Inheritance**: Components follow compound patterns for flexibility
- **Minimal API Surface**: Simple, consistent props across components

## Installation

```bash
# npm
npm install @voilajsx/uikit

# yarn
yarn add @voilajsx/uikit
```

### Peer Dependencies

This library requires React 17 or later:

```bash
# npm
npm install react react-dom

# yarn
yarn add react react-dom
```

## Basic Usage

Wrap your application with the `ThemeProvider` to enable theming and dark mode support:

```jsx
import React from 'react';
import { ThemeProvider, Button, Card } from '@voilajsx/uikit';

// Optional: Import the default CSS
import '@voilajsx/uikit/dist/uikit.css';

// Optional: Custom theme
const myTheme = {
  name: 'my-theme',
  styles: {
    '--primary-color': '#4f46e5',
    '--secondary-color': '#7c3aed',
    // Override any CSS variables...
  },
};

function App() {
  return (
    <ThemeProvider theme={myTheme}>
      <div className="p-[var(--spacing-4)]">
        <Card>
          <Card.Header>Getting Started</Card.Header>
          <Card.Body>
            <p className="mb-[var(--spacing-4)]">
              Welcome to the @voilajsx/uikit example!
            </p>
            <Button variant="primary">Click Me</Button>
          </Card.Body>
        </Card>
      </div>
    </ThemeProvider>
  );
}

export default App;
```

## Available Components

The UI kit is organized into categories for easier discovery:

### Elements

- **Button**: Action triggers with various styles and states
- **Link**: Navigation component with theming support
- **Avatar**: User profile pictures or initials
- **Badge**: Highlight status or counts
- **Divider**: Separate content sections

### Form Components

- **Input**: Text input with variants and states
- **Textarea**: Multi-line text input
- **Select**: Option selection dropdown
- **Checkbox**: Boolean selection control
- **Radio**: Single selection from a list
- **Switch**: Toggle control
- **FormGroup**, **FormLabel**, **FormHelperText**: Form organization

### Feedback Components

- **Alert**: Important messages to the user
- **Toast**: Brief, non-blocking notifications
- **Spinner**: Loading indicator
- **Progress**: Completion status indicator

### Navigation Components

- **Menu**: Vertical navigation
- **Tabs**: Content organization in tabs
- **Dropdown**: Contextual actions menu
- **Breadcrumb**: Page location tracking
- **Pagination**: Navigate between pages of content

### Display Components

- **Card**: Content container with multiple sections
- **Table**: Structured data display
- **Modal**: Dialog for focused interaction
- **Tooltip**: Contextual information on hover

### Data Visualization

- **LineChart**: Display trends over time
- **BarChart**: Compare quantities across categories
- **PieChart**: Show proportions of a whole
- **DataTable**: Enhanced table with sorting and filtering
- **MetricCard**: Display KPIs and metrics
- **KpiGrid**: Organize multiple metrics

### Layout Components

- **SidebarLayout**: Admin layout with sidebar
- **DashboardLayout**: Data-focused layout with widgets
- **HeaderFooterLayout**: Standard page layout
- **CenteredLayout**: Content-focused layout
- **TwoColumnLayout**: Content with sidebar layout
- **FullWidthLayout**: Edge-to-edge content layout
- **AppLayout**: Complete application layout with header, sidebar, and footer

## Theming System

The @voilajsx/uikit uses CSS variables for all styling, making it easy to customize the appearance without changing component code.

### Creating a Custom Theme

```jsx
const customTheme = {
  name: 'custom-theme',
  styles: {
    // Colors
    '--primary-color': '#0ea5e9',
    '--secondary-color': '#8b5cf6',
    '--success-color': '#10b981',
    '--error-color': '#ef4444',

    // Dark mode variants
    '--primary-color-dark-mode': '#38bdf8',
    '--bg-light-dark-mode': '#1e293b',

    // Additional customization
    '--radius-default': '0.5rem',
    '--font-base': 'Inter, sans-serif',
    // Override any CSS variable...
  },
};
```

### Dark Mode Support

```jsx
import React, { useState } from 'react';
import { ThemeProvider, Button } from '@voilajsx/uikit';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeProvider theme={customTheme} darkMode={darkMode}>
      <div className="p-[var(--spacing-4)]">
        <Button onClick={() => setDarkMode(!darkMode)}>
          Toggle {darkMode ? 'Light' : 'Dark'} Mode
        </Button>
      </div>
    </ThemeProvider>
  );
}
```

## Accessibility

All components in the @voilajsx/uikit are designed with accessibility in mind, following these principles:

- Proper ARIA attributes
- Keyboard navigation
- Focus management
- Screen reader support
- Sufficient color contrast
- Responsive design

## Contributing

We welcome contributions to the @voilajsx/uikit! Please see our [Contributing Guide](CONTRIBUTING.md) for more information.

## License

MIT © [VoilaJSX](LICENSE)
