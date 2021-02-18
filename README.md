# Eslint Config of WorkPlusFE

### Install

```bash
// npm
npm i eslint prettier @w6s/eslint-config -D

// yarn
yarn add eslint prettier @w6s/eslint-config --dev
```

### Usage

```js
{
  "extends": ["@w6s"]
}
```

### Rules

```js
{
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
}
```