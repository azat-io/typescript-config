# TypeScript Config

<img
  src="https://raw.githubusercontent.com/azat-io/typescript-config/main/assets/logo.svg"
  alt="TypeScript Config Logo"
  align="right"
  width="160"
  height="160"
/>

[![Version](https://img.shields.io/npm/v/@azat-io/typescript-config.svg?color=fff&labelColor=007acc)](https://npmjs.com/package/@azat-io/typescript-config)
[![GitHub License](https://img.shields.io/badge/license-MIT-232428.svg?color=fff&labelColor=007acc)](https://github.com/azat-io/typescript-config/blob/main/license.md)

A comprehensive and strict TypeScript configuration that enforces modern,
type-safe development practices. Seamlessly implement robust typing standards
across projects by utilizing cutting-edge TypeScript features and safety checks.

This config delivers a future-ready TypeScript setup through a single, optimized
configuration, ensuring maximum type safety and compatibility with modern
JavaScript runtimes including Node.js native TypeScript support.

## Installation

1. Install package:

```sh
pnpm add --save-dev typescript @azat-io/typescript-config
```

2. Create TypeScript configuration file `tsconfig.json` in the root of your
   project:

```json
{
  "extends": "@azat-io/typescript-config"
}
```

3. Add script for package.json:

```js
{
  "scripts": {
    "test:types": "tsc --noEmit --pretty"
  }
}
```

## See also

- [@azat-io/eslint-config](https://github.com/azat-io/eslint-config)
- [@azat-io/prettier-config](https://github.com/azat-io/prettier-config)
- [@azat-io/stylelint-config](https://github.com/azat-io/stylelint-config)

## License

MIT &copy; [Azat S.](https://azat.io)
