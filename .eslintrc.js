/* Use the variable to enable more strict checking */
const isStrictCheck = process.env.ESLINT_STRICT === '1';

module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    // 'linebreak-style': 'off',
    'prettier/prettier': isStrictCheck ? 'error' : 'off',
  },
};
