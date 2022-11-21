module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'prettier',
    'plugin:react/jsx-runtime',
    'plugin:react/recommended'
  ],

  overrides: [],

  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    // 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-prototype-builtins': 'off',
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'error',
    quotes: [1, 'single', { avoidEscape: true }],
    // no-unused-vars conflicts with @typescript-eslint/no-unused-vars
    'no-unused-vars': 'warn',
    'no-useless-escape': 'warn',
    'no-var': 'error',
    'prefer-const': 'warn',
    'no-redeclare': 'warn',
    'react/no-unescaped-entities': 'off'
    // 'react/react-in-jsx-scope': 'off'
  }
}
