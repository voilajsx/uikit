// rollup.config.js
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import path from 'path';

// Create an array of configurations
export default [
  // Main package configuration
  {
    input: 'src/index.js',
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: 'dist/index.es.js',
        format: 'es',
        sourcemap: true,
      },
    ],
    plugins: [
      // Automatically externalize peerDependencies
      peerDepsExternal(),

      // Process JSX and ES6+ with Babel
      babel({
        babelHelpers: 'bundled',
        presets: ['@babel/preset-env', '@babel/preset-react'],
        extensions: ['.js', '.jsx'],
        exclude: 'node_modules/**',
      }),

      // Resolve node_modules and extensions
      resolve({
        extensions: ['.js', '.jsx'],
      }),

      // Convert CommonJS modules to ES6
      commonjs(),
    ],
    external: ['react', 'react-dom'],
  },

  // Icons subpackage configuration
  {
    input: 'src/components/icons/index.js',
    output: [
      {
        file: 'dist/icons/index.js',
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: 'dist/icons/index.es.js',
        format: 'es',
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      babel({
        babelHelpers: 'bundled',
        presets: ['@babel/preset-env', '@babel/preset-react'],
        extensions: ['.js', '.jsx'],
        exclude: 'node_modules/**',
      }),
      resolve({
        extensions: ['.js', '.jsx'],
      }),
      commonjs(),
    ],
    external: ['react', 'react-dom'],
  },
  // CSS is built separately with the tailwindcss CLI as per your scripts
];
