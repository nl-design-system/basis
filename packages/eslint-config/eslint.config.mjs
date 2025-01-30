import js from '@eslint/js';
import json from '@eslint/json';
import eslintConfigPrettier from 'eslint-config-prettier';
import perfectionist from 'eslint-plugin-perfectionist';
import react from 'eslint-plugin-react';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    name: 'nl-design-system/global-ignores',
    ignores: ['**/dist/', '**/build/', '**/coverage/'],
  },
  {
    name: 'nl-design-system/plugins-settings',
    plugins: { perfectionist, react },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    name: '@eslint/js/recommended',
    files: ['**/*.js', '**/*.cjs', '**/*.mjs', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    ...js.configs.recommended,
  },
  {
    name: 'typescript-eslint/configs/strict',
    extends: [...tseslint.configs.strict],
    files: ['**/*.ts', '**/*.mts', '**/*.tsx'],
  },
  {
    name: 'eslint-plugin-perfectionist/recommended-natural',
    ...perfectionist['recommended-natural'],
  },
  {
    name: 'eslint-plugin-react/recommended',
    files: ['**/*.jsx', '**/*.tsx'],
    ...react.configs.flat.recommended,
  },
  {
    name: 'eslint-plugin-react/jsx-runtime',
    files: ['**/*.jsx', '**/*.tsx'],
    ...react.configs.flat['jsx-runtime'],
  },
  {
    // Source code that ends up in a browser
    name: 'nl-design-system/browser',
    files: ['**/src/*.ts', '**/src/*.tsx'],
    languageOptions: {
      globals: { ...globals.browser },
    },
  },
  {
    // Node.js based scripts and tooling configuration
    name: 'nl-design-system/node',
    files: ['**/*.js', '**/*.cjs', '**/*.mjs'],
    languageOptions: {
      globals: { ...globals.node },
    },
  },
  {
    // JSON
    name: '@eslint/json/recommended',
    files: ['**/*.json'],
    ignores: ['**/package.json'],
    language: 'json/json',
    ...json.configs.recommended,
  },
  {
    name: 'nl-design-system/all',
    files: ['**/*.js', '**/*.cjs', '**/*.cjs', '**/*.ts', '**/*.jsx', '**/*.tsx'],
    rules: {
      'array-callback-return': ['error', { checkForEach: false }],
      'block-scoped-var': 'error',
      'consistent-return': 'error',
      eqeqeq: 'error',
      'no-alert': 'error',
      'no-caller': 'error',
      'no-constructor-return': 'error',
      'no-eval': 'error',
      'no-implicit-globals': 'error',
      'no-implied-eval': 'error',
      'no-inner-declarations': 'error',
      'no-invalid-this': 'error',
      'no-lone-blocks': 'error',
      'no-loop-func': 'error',
      'no-multi-str': 'error',
      'no-new-func': 'error',
      'no-new-wrappers': 'error',
      'no-octal-escape': 'error',
      'no-param-reassign': 'error',
      'no-return-assign': 'error',
      'no-self-compare': 'error',
      'no-sequences': 'error',
      'no-throw-literal': 'error',
      'no-unmodified-loop-condition': 'error',
      'no-unused-expressions': 'error',
      'no-useless-call': 'error',
      'no-useless-concat': 'error',
      'no-useless-return': 'error',
      'no-void': 'error',
      'perfectionist/sort-imports': [
        'error',
        {
          ignoreCase: false,
          newlinesBetween: 'never',
        },
      ],
      'perfectionist/sort-objects': [
        'error',
        {
          customGroups: {
            first: ['id', 'name'],
            last: ['overrides'],
          },
          groups: ['first', 'unknown', 'last'],
        },
      ],
      'prefer-regex-literals': 'error',
      radix: 'error',
      yoda: 'error',
    },
  },
  {
    name: 'eslint-config-prettier',
    ...eslintConfigPrettier,
  },
);
