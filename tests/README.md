# Visual Testing Environment with Vite

This folder contains simple test pages to visually check our components in a browser environment.

## How to Use

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open the browser at the URL displayed in the terminal (usually http://localhost:5173)

## Test Pages

Each file in this directory represents a test page for specific components:

- `button.jsx`: Tests the Button component with different variations
- `card.jsx`: Tests the Card component with different variations

## File Structure

```
tests/
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
├── index.html           # Main HTML entry
├── main.jsx             # Main React entry
├── App.jsx              # Test app with navigation
├── button.jsx           # Button component test page
├── card.jsx             # Card component test page
└── README.md            # This file
```

## Implementation Details

The test environment directly imports components from the `../src` directory, allowing you to see changes immediately without building the library first.

## Customizing Tests

To test additional components, create a new file in this directory and add it to the navigation in `App.jsx`.
