module.exports = {
  parser: 'babel-eslint',
  extends: ['tidal', 'tidal/prettier', 'tidal/flow', 'tidal/react'],
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
    },
    sourceType: 'module',
  },
  rules: {},
  settings: {
    'import/resolver': {
      webpack: {
        config: './webpack/config.prod.js',
      },
    },
  },
};
