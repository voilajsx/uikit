// tailwind.config.js
module.exports = {
  // Configure content paths for Tailwind to scan
  content: ['./src/**/*.{js,jsx}'],

  // Extend theme - minimal since we use CSS variables for most styling
  theme: {
    extend: {
      // Animation for components like accordion, dropdown, etc.
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.2s ease-out',
        'fade-out': 'fade-out 0.2s ease-out',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
        'fade-in': {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        'fade-out': {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
      },
    },
  },

  // No plugins needed - keep minimal to avoid conflicts
  plugins: [],

  // Use most conservative configuration for compatibility
  corePlugins: {
    preflight: true,
  },

  // Support for Tailwind v4
  future: {
    // Enable v4 features as needed
    hoverOnlyWhenSupported: true,
  },
};
