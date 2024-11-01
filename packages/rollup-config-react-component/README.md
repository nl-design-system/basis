# `@nl-design-system/rollup-config-react-component`

A shareable [Rollup](https://rollupjs.org) configuration for React components.

## Installation

Using npm:

```shell
npm install --save-dev @nl-design-system/rollup-config-react-component rollup
```

Using yarn:

```shell
yarn add --save-dev @nl-design-system/rollup-config-react-component rollup
```

Using pnpm:

```shell
pnpm add --save-dev @nl-design-system/rollup-config-react-component rollup
```

## Usage

In your `rollup.config.mjs`, you only need to extend `@nl-design-system/rollup-config-react-component` with entry points as follows:

```js
import { config } from '@nl-design-system/rollup-config-react-component';
import { defineConfig } from 'rollup';

export default defineConfig({
  input: ['path/to/file', /* more entry points */],
  ...config;
});
```

To build a React component, the option `"composite"` in a `tsconfig.json`'s `"compilerOptions"` has to be `false`. Therefore this configuration explicitly uses a `tsconfig.build.json`:

```jsonc
{
  "extends": ["./tsconfig.json"],
  "compilerOptions": {
    "composite": false,
    // other build options
  },
  "exclude": ["**/*.test.ts", "**/*.test.tsx"],
}
```
