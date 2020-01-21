module.exports = {
  parser: 'babel-eslint',
  extends: ['tidal', 'tidal/flow', 'tidal/react', 'prettier', 'plugin:prettier/recommended', 'prettier/flowtype'],
  plugins: ['prettier'],
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
  rules: {
    'prettier/prettier': 'error',
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: './webpack/config.prod.js',
      },
    },
  },
};
