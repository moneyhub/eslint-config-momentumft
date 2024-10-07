# eslint-config-momentumft
Our ESLint configuration

To use this version, ensure you have `eslint` version 9 or above installed. This will install all the plugins required for you. To make use of it, define an `eslint.config.js` file in your repository with the following contents:

```js
const {base, testsWithFiles} = require("@mft/eslint-config-momentumft")

module.exports = [
  ...base,
  ...testsWithFiles,
]
```

The example above is a good starting point for JavaScript based configurations with tests defined in `src/**/__tests__` and `test/` directories.

If you have tests in different directories you can define the config as follows:

```js
const {base, tests} = require("@mft/eslint-config-momentumft")

module.exports = [
  ...base,
  {
    files: ["unit-tests/**/*.js"],
    ...tests
  }
]
```

This library is to help get you setup with ESLint config without having to manipulate the rules yourself manually. Keeping ESLint config files on your services small.

Below are examples when using our other helper configurations.

## React
```js
const {base, testsWithFiles} = require("@mft/eslint-config-momentumft")
const reactConfig = require("@mft/eslint-config-momentumft/react")

module.exports = [
  ...base,
  ...testsWithFiles,
  ...reactConfig
]
```

## JSON
```js
const {base, testsWithFiles} = require("@mft/eslint-config-momentumft")
const jsonConfig = require("@mft/eslint-config-momentumft/json")

module.exports = [
  ...base,
  ...testsWithFiles,
  ...jsonConfig
]
```

## TypeScript *(New)*
We now hav introduced a common TypeScript configuration which allows you to get started quicker than before. Simply define the config below and you are on your way:
```js
const typescript = require("@mft/eslint-config-momentumft/typescript")
const {base, testsWithFiles} = require("@mft/eslint-config-momentumft")

module.exports = [
  ...base,
  ...typescript,
  testsWithFiles,
]
```


## Functional Programming
**NB:** The main plugin we use for this config hasn't been updated to use the new ESLint configuration, therefore the certainty of it being correct is unknown. This plugin only seems to be used by one service so may not be an issue for most.
```js
const {base, testsWithFiles} = require("@mft/eslint-config-momentumft")
const fpConfig = require("@mft/eslint-config-momentumft/fp")

module.exports = [
  ...base,
  ...testsWithFiles,
  ...fpConfig
]
```