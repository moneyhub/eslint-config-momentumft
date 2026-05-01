"use strict";

/**
 * Re-exports ESLint plugins and shareable configs shipped with this package.
 * Use in flat config, for example:
 *
 *   const { plugins, configs } = require("@mft/eslint-config-momentumft/plugins")
 *   export default [{ plugins: { jest: plugins.jest }, rules: { ... } }, configs.prettierFlat]
 */

module.exports.plugins = {
  "chai-friendly": require("eslint-plugin-chai-friendly"),
  cypress: require("eslint-plugin-cypress"),
  flowtype: require("eslint-plugin-flowtype"),
  fp: require("eslint-plugin-fp"),
  import: require("eslint-plugin-import"),
  jest: require("eslint-plugin-jest"),
  json: require("eslint-plugin-json"),
  "jsx-a11y": require("eslint-plugin-jsx-a11y"),
  jsdoc: require("eslint-plugin-jsdoc"),
  mocha: require("eslint-plugin-mocha"),
  n: require("eslint-plugin-n"),
  "no-only-tests": require("eslint-plugin-no-only-tests"),
  node: require("eslint-plugin-node"),
  playwright: require("eslint-plugin-playwright"),
  prettier: require("eslint-plugin-prettier"),
  promise: require("eslint-plugin-promise"),
  react: require("eslint-plugin-react"),
  "react-hooks": require("eslint-plugin-react-hooks"),
  "security-node": require("eslint-plugin-security-node"),
};

module.exports.configs = {
  /** Flat config object; spread into your `eslint.config.js` array. */
  prettierFlat: require("eslint-config-prettier/flat"),
  /** `eslint-config-prettier` rule metadata (for tooling); prefer `prettierFlat` in flat configs. */
  prettier: require("eslint-config-prettier"),
};
