import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import replace from '@rollup/plugin-replace';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import postcss from 'rollup-plugin-postcss';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import alias from '@rollup/plugin-alias';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name using ESM
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Get command-line arguments
const dashboard = process.env.EXAMPLE !== 'corporate';
const corporate = process.env.EXAMPLE === 'corporate';

// Create configurations array
const configs = [];

// Dashboard example configuration
if (dashboard) {
  configs.push({
    input: 'examples/dashboard/index.jsx',
    output: {
      file: 'examples/dashboard/dist/bundle.js',
      format: 'iife',
      sourcemap: true,
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
      },
    },
    plugins: [
      // Add alias plugin to resolve package imports to local src files
      alias({
        entries: [
          {
            find: '@voilajsx/uikit',
            replacement: path.resolve(__dirname, 'src'),
          },
          {
            find: '@voilajsx/uikit/icons',
            replacement: path.resolve(__dirname, 'src/components/icons'),
          },
          {
            find: '@voilajsx/uikit/styles',
            replacement: path.resolve(__dirname, 'dist/uikit.css'),
          },
        ],
      }),
      resolve({
        extensions: ['.js', '.jsx'],
        modules: ['node_modules', '.'],
        preferBuiltins: false,
      }),
      replace({
        'process.env.NODE_ENV': JSON.stringify('development'),
        preventAssignment: true,
      }),
      babel({
        presets: ['@babel/preset-react'],
        babelHelpers: 'bundled',
        exclude: 'node_modules/**',
        extensions: ['.js', '.jsx'],
      }),
      commonjs({
        include: 'node_modules/**',
      }),
      postcss({
        plugins: [tailwindcss, autoprefixer, cssnano({ preset: 'default' })],
        extract: 'examples/dashboard/dist/bundle.css',
        minimize: true,
        // This ensures any CSS imports in the JS files are processed
        extensions: ['.css'],
      }),
      serve({
        open: true,
        contentBase: ['.', 'examples/dashboard'],
        port: 3000,
        historyApiFallback: true,
      }),
      livereload('examples/dashboard'),
    ],
    // Remove package externals so they're bundled
    external: ['react', 'react-dom'],
  });
}

// Corporate site example configuration
if (corporate) {
  configs.push({
    input: 'examples/corporate-site/index.jsx',
    output: {
      file: 'examples/corporate-site/dist/bundle.js',
      format: 'iife',
      sourcemap: true,
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
      },
    },
    plugins: [
      // Add alias plugin to resolve package imports to local src files
      alias({
        entries: [
          {
            find: '@voilajsx/uikit',
            replacement: path.resolve(__dirname, 'src'),
          },
          {
            find: '@voilajsx/uikit/icons',
            replacement: path.resolve(__dirname, 'src/components/icons'),
          },
          {
            find: '@voilajsx/uikit/styles',
            replacement: path.resolve(__dirname, 'dist/uikit.css'),
          },
        ],
      }),
      resolve({
        extensions: ['.js', '.jsx'],
        modules: ['node_modules', '.'],
        preferBuiltins: false,
      }),
      replace({
        'process.env.NODE_ENV': JSON.stringify('development'),
        preventAssignment: true,
      }),
      babel({
        presets: ['@babel/preset-react'],
        babelHelpers: 'bundled',
        exclude: 'node_modules/**',
        extensions: ['.js', '.jsx'],
      }),
      commonjs({
        include: 'node_modules/**',
      }),
      postcss({
        plugins: [tailwindcss, autoprefixer, cssnano({ preset: 'default' })],
        extract: 'examples/corporate-site/dist/bundle.css',
        minimize: true,
        extensions: ['.css'],
      }),
      serve({
        open: true,
        contentBase: ['.', 'examples/corporate-site'],
        port: 3001,
        historyApiFallback: true,
      }),
      livereload('examples/corporate-site'),
    ],
    // Remove package externals so they're bundled
    external: ['react', 'react-dom'],
  });
}

export default configs;
