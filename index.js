module.exports = {
  extends: [
    'airbnb-base',
    'plugin:vue/essential',
    'plugin:@typescript-eslint/recommended',
    'prettier/vue',
    'prettier/@typescript-eslint',
  ],

  env: {
    es6: true,
    node: true,
    browser: true,
  },

  parser: 'vue-eslint-parser',

  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-alert': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-restricted-syntax': 'off',
    'import/no-cycle': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'class-methods-use-this': 'off',
    'object-curly-newline': 'off',
    'no-param-reassign': 'off',
    'implicit-arrow-linebreak': 'off',
    'consistent-return': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-var-requires': 'off',
  },
};
