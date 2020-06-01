module.exports = {
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',

    '@vue/prettier',
    '@vue/prettier/@typescript-eslint',
  ],

  parserOptions: {
    ecmaVersion: 2020,
  },

  env: {
    es6: true,
    node: true,
    jest: true,
    browser: true
  },

  globals: {
    window: false,
    document: false,
    navigator: false
  },

  overrides: [
    {
      files: ['shims-tsx.d.ts'],
      rules: {
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unused-vars': 'off'
      }
    }
  ],

  rules: {
    'no-new': 0,
    'no-shadow': 0,
    'camelcase': 1,
    'no-bitwise': 0,
    'func-names': 0,
    'no-console': 0,
    'no-plusplus': 0,
    'arrow-parens': 0,
    'comma-dangle': 0,
    'default-case': 0,
    'prefer-template': 0,
    'consistent-return': 0,
    'no-param-reassign': 0,
    'no-nested-ternary': 0,
    'operator-linebreak': 0,
    'object-curly-newline': 0,
    'no-underscore-dangle': 1,
    'no-unused-expressions': 0,
    'no-restricted-globals': 0,
    'function-paren-newline': 0,
    'class-methods-use-this': 0,
    'implicit-arrow-linebreak': 0,
    'space-before-function-paren': 0,
    'max-len': ['error', { code: 150 }],
    'prefer-destructuring': ['error', { object: true, array: false }],
    'import/order': 0,
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': 0,
    'vue/no-v-html': 0,
    'vue/attributes-order': 0,
    'vue/require-v-for-key': 0,
    'vue/require-default-prop': 0,
    'vue/no-unused-components': 0,
    'vue/max-attributes-per-line': 0,
    'vue/singleline-html-element-content-newline': 0,
    'vue/name-property-casing': ['error', 'kebab-case'],
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    'vue/html-closing-bracket-newline': 2,
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        'js': 'never',
        'jsx': 'never',
        'ts': 'never',
        'tsx': 'never'
      }
   ],
   '@typescript-eslint/no-var-requires': 0,
   '@typescript-eslint/no-unused-vars': ['error'],
   '@typescript-eslint/no-explicit-any': 0
  }
};
