/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./examples/**/*.{js,ts,jsx,tsx}",
    "./test-demo/**/*.{js,ts,jsx,tsx}",
  ],
  // Enable CSS purging for production builds
  mode: process.env.NODE_ENV === 'production' ? 'jit' : 'development',
  safelist: [
    // Force generation of semantic color utility classes
    'bg-primary', 'bg-primary-foreground',
    'bg-secondary', 'bg-secondary-foreground',
    'bg-muted', 'bg-muted-foreground',
    'bg-accent', 'bg-accent-foreground',
    'bg-destructive', 'bg-destructive-foreground',
    'bg-card', 'bg-card-foreground',
    'bg-popover', 'bg-popover-foreground',
    'bg-background', 'bg-sidebar',
    'text-primary', 'text-primary-foreground',
    'text-secondary', 'text-secondary-foreground',
    'text-muted', 'text-muted-foreground',
    'text-accent', 'text-accent-foreground',
    'text-destructive', 'text-destructive-foreground',
    'text-card', 'text-card-foreground',
    'text-popover', 'text-popover-foreground',
    'text-background', 'text-foreground',
    'border-primary', 'border-secondary', 'border-muted',
    'border-accent', 'border-destructive', 'border-card',
    'border-popover', 'border-background', 'border-foreground',
    'border-input', 'border-border',
    'ring-primary', 'ring-ring', 'ring-offset-background',

    // Essential layout utilities used in components
    'flex', 'inline-flex', 'grid', 'block', 'hidden',
    'items-center', 'justify-center', 'justify-between',
    'flex-col', 'flex-row', 'gap-2', 'gap-4', 'space-x-2', 'space-y-2',
    'w-full', 'h-full', 'min-w-0', 'max-w-full',
    'p-2', 'p-4', 'px-2', 'px-4', 'py-2', 'py-4',
    'm-2', 'mx-2', 'my-2', 'mt-2', 'mb-2', 'ml-2', 'mr-2',
    'rounded', 'rounded-md', 'rounded-lg', 'rounded-full',
    'border', 'border-0', 'border-2',
    'text-sm', 'text-base', 'text-lg', 'text-xl',
    'font-medium', 'font-semibold', 'font-bold',
    'opacity-50', 'opacity-75', 'opacity-100',
    'transition', 'transition-all', 'duration-200',
    'hover:opacity-75', 'focus:outline-none', 'focus:ring-2',
    'disabled:opacity-50', 'disabled:pointer-events-none',

    // Animation classes for Motion component
    'animate-pulse', 'animate-spin', 'animate-bounce',

    // Common size variants
    'h-4', 'h-5', 'h-6', 'h-8', 'h-9', 'h-10', 'h-12',
    'w-4', 'w-5', 'w-6', 'w-8', 'w-9', 'w-10', 'w-12',
    'size-4', 'size-5', 'size-6', 'size-8', 'size-9',

    // Position utilities
    'relative', 'absolute', 'fixed', 'sticky',
    'top-0', 'right-0', 'bottom-0', 'left-0',
    'z-10', 'z-20', 'z-30', 'z-40', 'z-50',
  ],
  theme: {
    extend: {
      colors: {
        // shadcn/ui color variables - using var() directly since colors can be hex, hsl, or oklch
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
        card: {
          DEFAULT: "var(--color-card)",
          foreground: "var(--color-card-foreground)",
        },
        popover: {
          DEFAULT: "var(--color-popover)",
          foreground: "var(--color-popover-foreground)",
        },
        primary: {
          DEFAULT: "var(--color-primary)",
          foreground: "var(--color-primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--color-secondary)",
          foreground: "var(--color-secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--color-muted)",
          foreground: "var(--color-muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--color-accent)",
          foreground: "var(--color-accent-foreground)",
        },
        destructive: {
          DEFAULT: "var(--color-destructive)",
          foreground: "var(--color-destructive-foreground)",
        },
        border: "var(--color-border)",
        input: "var(--color-input)",
        ring: "var(--color-ring)",
        chart: {
          "1": "var(--color-chart1)",
          "2": "var(--color-chart2)",
          "3": "var(--color-chart3)",
          "4": "var(--color-chart4)",
          "5": "var(--color-chart5)",
        },
        sidebar: {
          DEFAULT: "var(--color-sidebar)",
          foreground: "var(--color-sidebar-foreground)",
          primary: "var(--color-sidebar-primary)",
          "primary-foreground": "var(--color-sidebar-primary-foreground)",
          accent: "var(--color-sidebar-accent)",
          "accent-foreground": "var(--color-sidebar-accent-foreground)",
          border: "var(--color-sidebar-border)",
          ring: "var(--color-sidebar-ring)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
}