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
    jest: true,
    browser: true,
  },

  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },

  // 在这里定义你的规则风格，定义规则时请为其提供注释说明
  rules: {},
};
