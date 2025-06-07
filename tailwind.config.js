// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './docs/src/**/*.{js,jsx,ts,tsx}',
    './index.html',
  ],
  // Tailwind v4 uses CSS-first approach, most config is in CSS files
  // Keep minimal config here for compatibility
  plugins: [],
};
