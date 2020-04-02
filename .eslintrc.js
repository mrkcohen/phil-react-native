module.exports = {
  root: true,
  plugins: ['prettier'],
  extends: [
      'eslint:recommended',
      '@react-native-community',
      'prettier'
  ],
  rules: {
      'prettier/prettier': 'error',
      'no-extra-semi': 'off',
      'semi': 0
  },
  env: {
      'es6': true,

  }
};
