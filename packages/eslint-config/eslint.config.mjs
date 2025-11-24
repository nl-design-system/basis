import js from '@eslint/js';
import json from '@eslint/json';
import eslintConfigPrettier from 'eslint-config-prettier';
import nlDesignSystemConfig from './configs/nl-design-system.config.mjs';
import perfectionist from 'eslint-plugin-perfectionist';
import react from 'eslint-plugin-react';
import { globalIgnores } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

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
    name: 'eslint-config-prettier',
    ...eslintConfigPrettier,
  },
);
