# `@cewald/nuxt-boilerplate` Nuxt module

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

... wip

- [✨ &nbsp;Release Notes](/CHANGELOG.md)

## Features

<!-- Highlight some of the features your module provide here -->
- ⛰ &nbsp;Foo
- 🚠 &nbsp;Bar
- 🌲 &nbsp;Baz

## Quick Setup

Install the module to your Nuxt application with:

```bash
npx nuxi module add @cewald/nuxt-boilerplate
```

## Contribution

### Development

```bash
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Run ESLint
npm run lint

# Run Vitest
npm run test
npm run test:watch

# Release new version
npm run release
```

### Mount folder into a devcontainer and install package during development

To test this module during development in another project, you can mount the project folder into the target devcontainer.

1. Add the module-folder as bind-mount in your target `.devcontainer/devcontainer.json` like:
   ```json
   {
     "mounts": [
       "source=/Users/your-name/nuxt-boilerblate-module,target=/workspaces/nuxt-boilerblate-module,type=bind"
     ]
   }
   ```
1. Pack the module using `npm run build` or `npm run dev` during development.
1. Now you can install the package in your target like:
   ```shell
   npm i -D /workspaces/nuxt-boilerblate-module
   ```

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@cewald/nuxt-boilerplate/latest.svg?style=flat&colorA=020420&colorB=00DC82
[npm-version-href]: https://npmjs.com/package/@cewald/nuxt-boilerplate

[npm-downloads-src]: https://img.shields.io/npm/dm/@cewald/nuxt-boilerplate.svg?style=flat&colorA=020420&colorB=00DC82
[npm-downloads-href]: https://npm.chart.dev/@cewald/nuxt-boilerplate

[license-src]: https://img.shields.io/npm/l/@cewald/nuxt-boilerplate.svg?style=flat&colorA=020420&colorB=00DC82
[license-href]: https://npmjs.com/package/@cewald/nuxt-boilerplate

[nuxt-src]: https://img.shields.io/badge/Nuxt-020420?logo=nuxt.js
[nuxt-href]: https://nuxt.com

## License

This project is licensed under the [GNU General Public License v3.0](LICENSE).