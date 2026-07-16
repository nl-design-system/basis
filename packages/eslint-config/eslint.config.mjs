import js from '@eslint/js';
import json from '@eslint/json';
import eslintConfigPrettier from 'eslint-config-prettier';
import nlDesignSystemConfig from './configs/nl-design-system.config.mjs';
import perfectionist from 'eslint-plugin-perfectionist';
import react from 'eslint-plugin-react';
import { globalIgnores } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import sonarjs from 'eslint-plugin-sonarjs';
import regexpPlugin from 'eslint-plugin-regexp';

export default tseslint.config(
  globalIgnores(['**/dist/', '**/build/', '**/coverage/', '**/tmp/']),
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
    ...sonarjs.configs.recommended,
    name: 'eslint-plugin-sonarjs/recommended',
    files: ['**/*.js', '**/*.cjs', '**/*.mjs', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    rules: {
      ...sonarjs.configs.recommended.rules,
      'sonarjs/no-empty-test-file': 0,
      'sonarjs/todo-tag': 0,
    },
  },
  {
    ...eslintPluginUnicorn.configs.recommended,
    name: 'eslint-plugin-unicorn/recommended',
    files: ['**/*.js', '**/*.cjs', '**/*.mjs', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    rules: {
      ...eslintPluginUnicorn.configs.recommended.rules,
      'unicorn/filename-case': 'off',
      'unicorn/import-style': 'off',
      'unicorn/logical-assignment-operators': 'off',
      // splits identifiers into words and matches each against a fixed dictionary
      // (props -> properties, ref -> reference, ...), so it renames every `XProps`
      // component prop interface - the library's public API surface
      'unicorn/name-replacements': 'off',
      'unicorn/no-array-reduce': 'off',
      'unicorn/no-array-sort': 'off',
      'unicorn/no-null': 'off',
      'unicorn/prefer-export-from': 'off',
      'unicorn/prefer-module': 'off',
      'unicorn/prevent-abbreviations': 'off',
    },
  },
  {
    ...regexpPlugin.configs.recommended,
    name: 'eslint-plugin-regexp/recommended',
    files: ['**/*.js', '**/*.cjs', '**/*.mjs', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    plugins: { regexp: regexpPlugin },
  },
  {
    ...stylistic.configs.recommended,
    name: '@stylistic/eslint-plugin/recommended',
    files: ['**/*.js', '**/*.cjs', '**/*.mjs', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      ...stylistic.configs.recommended.rules,
      'comma-dangle': ['error', 'always-multiline'],
      'no-trailing-spaces': ['error'],
      quotes: ['error', 'single', { avoidEscape: true }],
      'eol-last': ['error', 'always'],
      'max-statements-per-line': ['error'],
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
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
    },
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
    files: ['**/*.{js,cjs,mjs,jsx,ts,tsx}'],
    extends: [nlDesignSystemConfig],
  },
  {
    // Must stay after '@stylistic/eslint-plugin/recommended' — this turns
    // quotes/comma-dangle/no-trailing-spaces/eol-last/max-statements-per-line
    // back off for all files (re-enabled for tests below).
    name: 'eslint-config-prettier',
    ...eslintConfigPrettier,
  },
  {
    name: 'nl-design-system/test-files',
    files: ['**/*.test.{js,ts,jsx,tsx}', '**/*.spec.{js,ts,jsx,tsx}'],
    rules: {
      quotes: [
        'error',
        'single',
        {
          allowTemplateLiterals: false,
          avoidEscape: true,
        },
      ],
      // parameterized test generation (`variants.forEach(v => it(...))`) doesn't
      // need for...of's break/continue or async-await correctness
      'unicorn/no-for-each': 'off',
    },
  },
);
