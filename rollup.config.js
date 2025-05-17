// rollup.config.js
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';

export default {
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

    // Process CSS files
    postcss({
      extensions: ['.css'],
      minimize: true,
      extract: 'dist/uikit.css',
    }),

    // Resolve node_modules and extensions
    resolve({
      extensions: ['.js', '.jsx'],
    }),

    // Convert CommonJS modules to ES6
    commonjs(),
  ],
};
