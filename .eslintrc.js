/* Use the variable to enable more strict checking */
const isStrictCheck = process.env.ESLINT_STRICT === '1';

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: { jsx: true },
    project: './tsconfig.json',
  },

  extends: ['@react-native-community'],
  rules: {
    // 'linebreak-style': 'off',
    'prettier/prettier': isStrictCheck ? 'error' : 'off',
  },
};
