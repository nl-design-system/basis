# `@nl-design-system/tsconfig`

Shared TypeScript configurations for NL Design System projects that use TypeScript.

## Getting started

Start with the following `tsconfig.json` to build a TypeScript project for a browser script. The `outDir` and `include` are configured for building your `src/` directory and storing the ECMAScript in `dist/`.

```json
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "compilerOptions": {
    "outDir": "./dist/",
    "lib": ["dom"],
    "module": "Preserve",
    "moduleResolution": "bundler"
  },
  "extends": "@nl-design-system/tsconfig",
  "include": ["./src/"]
}
```

Install TypeScript and this configuration in `devDependencies`:

```shell
pnpm add -D @nl-design-system/tsconfig typescript
```

Build your project by including the following section in your `package.json`.

```json
{
  "scripts": {
    "build": "tsc"
  }
}
```

Then run the following script:

```shell
pnpm run build
```
