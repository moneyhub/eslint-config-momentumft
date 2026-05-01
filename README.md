# eslint-config-momentumft

Moneyhub shared ESLint configuration and tooling.

## Requirements

- **ESLint** `^9.0.0 || ^10.0.0` as a **peer** dependency in consuming repositories (install it alongside this package).
- This package also **depends on ESLint 10** so the bundled CLI (`mh-lint`) always runs a known engine. ESLint 10 expects a recent **Node** release; see the [ESLint Node support policy](https://eslint.org/docs/latest/use/getting-started) if installs warn about `EBADENGINE`.

## Installation

```bash
npm install --save-dev @mft/eslint-config-momentumft eslint
```

Most rule plugins are **dependencies** of this package, so you do not need to install them individually unless you want explicit control over versions.

## Lint CLI (`mh-lint`)

The package exposes two binaries that delegate to ESLint:

| Command | Effect |
| -------- | ------ |
| `mh-lint` | Same as `eslint` (all arguments are forwarded). |
| `mh-lint:fix` | Runs ESLint with `--fix` prepended. |

From a repo that lists `@mft/eslint-config-momentumft` as a dev dependency:

```bash
npx mh-lint
npx "mh-lint:fix"
```

Without adding the package to `package.json`, you can run a one-off install:

```bash
npx --package=@mft/eslint-config-momentumft mh-lint
```

On **Windows**, a colon in the binary name can be awkward; if `mh-lint:fix` causes trouble, call `eslint --fix` or add an npm script that wraps it.

## Flat config and entry points

Configure ESLint with **`eslint.config.js`** (ESM) or **`eslint.config.cjs`** (CommonJS). The examples below use CommonJS; if your app uses `"type": "module"`, either use **`eslint.config.cjs`** or load this package via `createRequire` from `node:module`.

Published **subpath exports** (see `package.json`):

| Subpath | Purpose |
| -------- | ------- |
| `@mft/eslint-config-momentumft` | Base config (`base`, `tests`, `testsWithFiles`, …). |
| `@mft/eslint-config-momentumft/plugins` | Bundled plugins and shareable configs (see next section). |
| `@mft/eslint-config-momentumft/react` | React + hooks rules. |
| `@mft/eslint-config-momentumft/json` | JSON linting. |
| `@mft/eslint-config-momentumft/typescript` | TypeScript-aware blocks. |
| `@mft/eslint-config-momentumft/fp` | Functional programming rules. |

## Bundled plugins and configs (`/plugins`)

Importing repos can reuse the same plugin instances and configs this package ships, keeping `eslint.config` small:

```js
const { plugins, configs } = require("@mft/eslint-config-momentumft/plugins")

module.exports = [
  {
    files: ["**/*.test.js"],
    plugins: { jest: plugins.jest },
    rules: { "jest/no-disabled-tests": "warn" },
  },
  configs.prettierFlat,
]
```

### `plugins`

Object keys match typical **flat config** plugin names (values are the resolved plugin modules):

`chai-friendly`, `cypress`, `flowtype`, `fp`, `import`, `jest`, `json`, `jsx-a11y`, `jsdoc`, `mocha`, `n`, `no-only-tests`, `node`, `playwright`, `prettier`, `promise`, `react`, `react-hooks`, `security-node`.

- **`n`** is included because **`eslint-config-standard`** (below) expects the `n/` rules namespace, which comes from `eslint-plugin-n`, not `eslint-plugin-node`.
- **`eslint-plugin-mocha` v11** is ESM-only; when this package is loaded from CommonJS you may see Node’s experimental `require()` of ESM warning until callers migrate to ESM config or Node stabilises that path.

### `configs`

| Property | Use |
| -------- | ----- |
| `prettierFlat` | Flat config fragment from `eslint-config-prettier/flat` — append to your flat config array. |
| `standard` | Legacy shareable config from `eslint-config-standard` (ESLintRC shape). For flat configs, translate with `@eslint/eslintrc` **`FlatCompat`** (not bundled here). |
| `prettier` | Root `eslint-config-prettier` export (rule metadata / tooling); prefer **`prettierFlat`** in flat setups. |

## Base JavaScript

Define `eslint.config.cjs` (or equivalent) with:

```js
const { base, testsWithFiles } = require("@mft/eslint-config-momentumft")

module.exports = [
  ...base,
  testsWithFiles,
]
```

That setup suits JavaScript projects with tests under `src/**/__tests__/**` and `test/**`.

If tests live elsewhere:

```js
const { base, tests } = require("@mft/eslint-config-momentumft")

module.exports = [
  ...base,
  {
    files: ["unit-tests/**/*.js"],
    ...tests,
  },
]
```

## React

```js
const { base, testsWithFiles } = require("@mft/eslint-config-momentumft")
const reactConfig = require("@mft/eslint-config-momentumft/react")

module.exports = [
  ...base,
  ...testsWithFiles,
  ...reactConfig,
]
```

## JSON

```js
const { base, testsWithFiles } = require("@mft/eslint-config-momentumft")
const jsonConfig = require("@mft/eslint-config-momentumft/json")

module.exports = [
  ...base,
  ...testsWithFiles,
  ...jsonConfig,
]
```

## TypeScript

We have introduced a shared TypeScript configuration so you can start quickly:

```js
const { baseConfigWithFiles } = require("@mft/eslint-config-momentumft/typescript")
const { base, testsWithFiles } = require("@mft/eslint-config-momentumft")

module.exports = [
  ...base,
  ...baseConfigWithFiles,
  testsWithFiles,
]
```

For TypeScript outside `src`, use `baseConfig` and `declarationConfig` from the same module and scope them with `files`:

```js
const { base } = require("@mft/eslint-config-momentumft")
const react = require("@mft/eslint-config-momentumft/react")
const { baseConfig, declarationConfig } = require("@mft/eslint-config-momentumft/typescript")

module.exports = [
  ...base,
  ...react,
  {
    files: ["modules/**/*.{ts,tsx}"],
    ...baseConfig,
  },
  {
    files: ["modules/**/*.d.ts"],
    ...declarationConfig,
  },
  {
    rules: {
      "react/react-in-jsx-scope": "off",
    },
  },
]
```

## Functional programming

**NB:** The main plugin used for this config has not been fully validated on flat config; certainty of behaviour is unknown. It appears to be used by only one service, so most teams can ignore it.

```js
const { base, testsWithFiles } = require("@mft/eslint-config-momentumft")
const fpConfig = require("@mft/eslint-config-momentumft/fp")

module.exports = [
  ...base,
  ...testsWithFiles,
  ...fpConfig,
]
```

## Developing this repository

This package ships an **`.npmrc`** with `legacy-peer-deps=true` so `npm install` succeeds while upstream plugins’ peer ranges catch up with **ESLint 10**. That file applies when installing **in this repo**; it is not a substitute for aligning peer dependencies in application projects.
