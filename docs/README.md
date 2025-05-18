# VoilaJSX UIKit Documentation

This is the documentation site for the VoilaJSX UIKit, a modern React component library built with Tailwind CSS.

## Overview

The documentation site showcases the components, layouts, and utilities available in the VoilaJSX UIKit. It provides examples, usage guidelines, and API documentation to help developers use the library effectively.

## Getting Started

### Prerequisites

- Node.js 16.x or later
- npm 8.x or later

### Installation

1. Clone the repository:

```bash
git clone https://github.com/voilajsx/uikit.git
cd uikit/docs
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view the documentation in your browser.

## Building for Production

To build the documentation site for production:

```bash
npm run build
```

The build files will be located in the `build` directory.

## Deploying to GitHub Pages

To deploy the documentation site to GitHub Pages:

```bash
npm run deploy
```

This will build the site and deploy it to the `gh-pages` branch of the repository.

## Project Structure

```
docs/
├── public/                 # Static files
├── src/
│   ├── components/         # React components for the documentation site
│   │   ├── common/         # Common UI components used across the site
│   │   ├── examples/       # Example implementations of UIKit components
│   │   └── layout/         # Layout components for the site
│   ├── data/               # Data files for documentation content
│   ├── pages/              # Page components for different routes
│   ├── styles/             # CSS and styling files
│   ├── utils/              # Utility functions
│   ├── App.js              # Main App component with routes
│   └── index.js            # Entry point
├── package.json            # Project dependencies and scripts
└── README.md               # This file
```

## Contributing

We welcome contributions to the documentation! Please see the [CONTRIBUTING.md](../CONTRIBUTING.md) file for guidelines.

## License

This project is licensed under the MIT License - see the [LICENSE](../LICENSE) file for details.
