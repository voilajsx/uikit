/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust to include your source files
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        success: 'var(--success-color)',
        danger: 'var(--danger-color)',
        warning: 'var(--warning-color)',
        info: 'var(--info-color)',
        'primary-soft': 'var(--primary-soft)',
        'secondary-soft': 'var(--secondary-soft)',
        'success-soft': 'var(--success-soft)',
        'danger-soft': 'var(--danger-soft)',
        'warning-soft': 'var(--warning-soft)',
        'info-soft': 'var(--info-soft)',
        base: 'var(--base-color)',
        surface: 'var(--surface-color)',
        subtle: 'var(--subtle-color)',
        accent: 'var(--accent-color)',
        light: 'var(--light-color)',
        dark: 'var(--dark-color)',
      },
    },
  },
  plugins: [],
};
