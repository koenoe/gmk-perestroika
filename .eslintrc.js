const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'),
);

module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb',
    'prettier',
    'prettier/react',
    'plugin:flowtype/recommended',
  ],
  plugins: ['prettier', 'react', 'react-hooks', 'jsx-a11y', 'flowtype'],
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
    },
    sourceType: 'module',
  },
  rules: {
    'flowtype/generic-spacing': 0,
    'import/extensions': ['error', 'always', { ignorePackages: true }],
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'prettier/prettier': ['error', prettierOptions],
    'react/jsx-filename-extension': 0,
    'react/require-default-props': 0,
    'jsx-a11y/click-events-have-key-events': 0,
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: './webpack/config.prod.js',
      },
    },
  },
};
