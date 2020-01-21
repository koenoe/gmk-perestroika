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
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
    },
    sourceType: 'module',
  },
  rules: {
    // 'prettier/prettier': ['error', prettierOptions],
    // 'flowtype/generic-spacing': 0,
    // 'import/extensions': ['error', 'always', { ignorePackages: true }],
    // 'import/no-extraneous-dependencies': 0,
    // 'import/prefer-default-export': 0,
    // 'jsx-a11y/click-events-have-key-events': 0,
    // 'react/jsx-filename-extension': 0,
    // 'react/require-default-props': 0,
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: './webpack/config.prod.js',
      },
    },
  },
};
