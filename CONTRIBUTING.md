# Contributing to @voilajsx/uikit

Thank you for your interest in contributing to @voilajsx/uikit! We welcome contributions from the community and are excited to have you on board.

## Table of Contents

- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Project Structure](#project-structure)
- [How to Contribute](#how-to-contribute)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
- [Component Guidelines](#component-guidelines)
- [Theme Development](#theme-development)
- [Testing Guidelines](#testing-guidelines)
- [Documentation](#documentation)
- [Reporting Issues](#reporting-issues)
- [Security Vulnerabilities](#security-vulnerabilities)
- [License](#license)

## Getting Started

1. Fork the repository on GitHub
2. Clone your fork locally:
   ```bash
   git clone https://github.com/YOUR-USERNAME/uikit.git
   cd uikit
   ```
3. Add the upstream repository:
   ```bash
   git remote add upstream https://github.com/voilajsx/uikit.git
   ```
4. Create a new branch for your feature or fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Development Setup

### Prerequisites

- Node.js >= 18.0.0
- npm >= 8.0.0

### Installation

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start development server:

   ```bash
   npm run dev
   ```

3. Build the library:

   ```bash
   npm run build
   ```

4. Run tests:
   ```bash
   npm test
   ```

## Project Structure

```
uikit/
├── src/
│   ├── components/
│   │   ├── ui/                 # Core UI components
│   │   │   ├── button.jsx
│   │   │   ├── card.jsx
│   │   │   └── ...
│   │   └── layouts/            # Layout components
│   │       ├── container.jsx
│   │       ├── header.jsx
│   │       └── ...
│   ├── themes/
│   │   ├── presets/            # Built-in theme presets
│   │   │   ├── default.js
│   │   │   ├── ocean.js
│   │   │   └── ...
│   │   ├── theme-provider.jsx  # Theme context
│   │   ├── theme-generator.js  # Build-time theme generation
│   │   └── globals.css         # Generated CSS
│   ├── lib/
│   │   ├── utils.js           # Utility functions
│   │   └── platform.js        # Platform detection
│   ├── adapters/              # Cross-platform adapters
│   │   ├── hooks.js
│   │   ├── web.js
│   │   └── native.js
│   └── templates/             # Page layout templates
├── docs/                      # Documentation
├── CONTRIBUTING.md            # This file
├── README.md                  # Project overview
├── package.json              # Project metadata
├── vite.config.js            # Build configuration
└── tailwind.config.js        # Tailwind configuration
```

## How to Contribute

### Types of Contributions

1. **Bug Fixes**: Fix issues in existing components
2. **New Components**: Add new UI components following shadcn/ui patterns
3. **Theme Presets**: Create new color themes with OKLCH colors
4. **Cross-Platform Support**: Improve React Native/Tauri adapters
5. **Documentation**: Improve guides, examples, and API docs
6. **Templates**: Add new page layout templates
7. **Accessibility**: Improve component accessibility
8. **Performance**: Optimize bundle size and runtime performance

### Development Workflow

1. **Pick an Issue**: Look for issues labeled `good first issue` or `help wanted`
2. **Discuss**: Comment on the issue to let others know you're working on it
3. **Code**: Make your changes following our coding standards
4. **Test**: Test your changes across different platforms if applicable
5. **Document**: Update documentation and examples
6. **Submit**: Create a pull request

## Pull Request Process

1. **Update your branch**:

   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

2. **Test your changes**:

   ```bash
   npm run build
   npm test
   npm run typecheck
   npm run lint
   ```

3. **Test in demo app**:

   ```bash
   npm run dev
   # Verify your changes work in the demo
   ```

4. **Update documentation**:

   - Update README.md component table if adding new components
   - Add examples for new features
   - Update JSDoc comments

5. **Create Pull Request**:

   - Use a clear, descriptive title
   - Reference any related issues
   - Describe what changes you made and why
   - Include screenshots for UI changes
   - Test on different screen sizes and themes

6. **Code Review**:
   - Address review feedback
   - Keep your PR up to date with main branch
   - Be patient and respectful

### PR Title Format

```
type(scope): description

Examples:
feat(button): add loading state variant
fix(theme): resolve OKLCH color calculation
docs(readme): update custom theme examples
test(card): add accessibility tests
theme(sunset): create warm sunset color palette
```

Types: `feat`, `fix`, `docs`, `test`, `refactor`, `perf`, `style`, `chore`, `theme`

## Coding Standards

### React Component Style

- Use functional components with hooks
- Use `forwardRef` for all components that accept refs
- Use TypeScript JSDoc comments for props
- Follow shadcn/ui patterns and conventions

### Example Component Structure

```jsx
/**
 * @fileoverview Button component for @voilajsx/uikit
 * @description Flexible button with variants and sizes
 * @package @voilajsx/uikit
 * @file /src/components/ui/button.jsx
 */

import { forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const buttonVariants = cva(
  // Base classes
  'inline-flex items-center justify-center...',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground...',
        // ...
      },
      size: {
        default: 'h-9 px-4 py-2',
        // ...
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

/**
 * Button component with variants and sizes
 * @param {Object} props - Component props
 * @param {string} [props.variant='default'] - Button variant
 * @param {string} [props.size='default'] - Button size
 * @param {string} [props.className] - Additional CSS classes
 * @param {boolean} [props.asChild=false] - Render as child component
 * @returns {JSX.Element} Button component
 */
const Button = forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };
```

### File Naming & Organization

- Component files: `kebab-case.jsx` (e.g., `dropdown-menu.jsx`)
- Use barrel exports in index files
- Group related components in the same file
- Theme files: `kebab-case.js` (e.g., `ocean-theme.js`)

### CSS & Styling

- Use Tailwind CSS utility classes
- Use CSS custom properties for theme colors
- Use OKLCH color format for all theme colors
- Follow the existing color naming convention

## Component Guidelines

### New Component Checklist

- [ ] Follows shadcn/ui API patterns
- [ ] Uses `forwardRef` for DOM elements
- [ ] Includes proper TypeScript JSDoc
- [ ] Uses `cva` for variants
- [ ] Includes all necessary exports
- [ ] Added to vite.config.js exports
- [ ] Added to package.json exports
- [ ] Added to README.md component table
- [ ] Tested in demo app

### Accessibility Requirements

- Use semantic HTML elements
- Include proper ARIA attributes
- Support keyboard navigation
- Ensure proper color contrast
- Test with screen readers
- Follow WCAG 2.1 AA guidelines

### Cross-Platform Considerations

- Test on Web, React Native (if applicable)
- Use platform adapters when needed
- Ensure consistent API across platforms
- Document platform-specific behaviors

## Theme Development

### Creating Theme Presets

1. Create theme file in `src/themes/presets/`
2. Use OKLCH color format
3. Include both light and dark variants
4. Follow naming conventions

### Example Theme Structure

```javascript
/**
 * @fileoverview Custom theme preset
 * @description Brief description of the theme
 */

const customTheme = {
  name: 'Custom Theme',
  id: 'custom',

  light: {
    background: 'oklch(1 0 0)',
    foreground: 'oklch(0.15 0.02 0)',
    primary: 'oklch(0.5 0.2 220)',
    // ... all required colors
  },

  dark: {
    background: 'oklch(0.08 0.02 0)',
    foreground: 'oklch(0.95 0.02 0)',
    primary: 'oklch(0.65 0.25 220)',
    // ... all required colors
  },
};

export default customTheme;
```

### Theme Generation

- Themes are built automatically with `npm run generate-themes`
- CSS is generated from theme presets
- Test themes in demo app before submitting

## Testing Guidelines

### Test Structure

```javascript
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Button } from './button';

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('applies variant classes', () => {
    render(<Button variant="outline">Click me</Button>);
    expect(screen.getByRole('button')).toHaveClass('border');
  });

  it('forwards refs correctly', () => {
    const ref = React.createRef();
    render(<Button ref={ref}>Click me</Button>);
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });
});
```

### Testing Requirements

- Unit tests for all components
- Accessibility tests with @testing-library
- Visual regression tests (future)
- Cross-browser compatibility

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

## Documentation

### Documentation Standards

- Use clear, concise language
- Include working code examples
- Document all props and their types
- Show common usage patterns
- Explain accessibility features

### Example Documentation

````markdown
## Button

A versatile button component with multiple variants and sizes.

### Usage

\```jsx
import { Button } from '@voilajsx/uikit/button';

function Example() {
return (
<Button variant="outline" size="lg">
Click me
</Button>
);
}
\```

### Props

| Prop    | Type    | Default   | Description               |
| ------- | ------- | --------- | ------------------------- |
| variant | string  | 'default' | Button style variant      |
| size    | string  | 'default' | Button size               |
| asChild | boolean | false     | Render as child component |
````

## Reporting Issues

### Before Creating an Issue

1. Search existing issues to avoid duplicates
2. Check if the issue is already fixed in main branch
3. Test with the latest version
4. Verify the issue across different browsers/platforms

### Creating an Issue

Include:

- Clear, descriptive title
- Steps to reproduce
- Expected vs actual behavior
- Environment details (browser, OS, Node.js version)
- Code samples or minimal reproduction
- Screenshots for visual issues

### Issue Labels

- `bug`: Something isn't working correctly
- `enhancement`: New feature request
- `component`: Related to a specific component
- `theme`: Theme or styling related
- `accessibility`: Accessibility improvements
- `cross-platform`: Platform-specific issues
- `good first issue`: Good for newcomers
- `help wanted`: Extra attention needed

## Security Vulnerabilities

If you discover a security vulnerability:

1. **DO NOT** create a public GitHub issue
2. Email security@voilajsx.com with:
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Suggested fix (if any)

We will respond within 48 hours and work with you to resolve the issue.

## Code of Conduct

### Our Standards

- Be respectful and inclusive
- Welcome newcomers and help them learn
- Accept constructive criticism gracefully
- Focus on what's best for the community
- Respect different perspectives and experiences

### Enforcement

Unacceptable behavior should be reported to conduct@voilajsx.com. All complaints will be reviewed and investigated promptly and fairly.

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

## Recognition

Contributors will be recognized in:

- The project's CONTRIBUTORS.md file
- Release notes for significant contributions
- Our documentation website
- GitHub contributor graphs

## Questions?

- Create a discussion in GitHub Discussions
- Join our Discord community (coming soon)
- Email us at hello@voilajsx.com

---

Thank you for contributing to @voilajsx/uikit! Together we're building the future of cross-platform React components. 🚀
