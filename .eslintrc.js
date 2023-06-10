module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
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
    'react/react-in-jsx-scope': 0,
    'space-before-function-paren': 0,
    semi: [2, 'always'],
    'no-unused-vars': 1,
    indent: [2, 2]
  }
};
