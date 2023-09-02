module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    // 'alanlee',
    'standard',
    'plugin:react/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    'react/no-unknown-property': 1,
    'react/react-in-jsx-scope': 0,
    'space-before-function-paren': 0,
    semi: [2, 'always'],
    'no-unused-vars': 1,
    indent: [2, 2],
    'react/prop-types': 0,
    'no-undef': 1
  }
};
