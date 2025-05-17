// babel.config.js
module.exports = {
  presets: [
    ['@babel/preset-env', { loose: true }],
    ['@babel/preset-react', { runtime: 'automatic' }],
  ],
};
