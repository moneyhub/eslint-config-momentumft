const { fixupPluginRules } = require("@eslint/compat")
const fp = require("eslint-plugin-fp")

module.exports = [
  {
    plugins: {
      fp: fixupPluginRules(fp)
    },
    rules: {
      "fp/no-arguments": "error",
      "fp/no-class": "warn",
      "fp/no-delete": "error",
      "fp/no-events": "error",
      "fp/no-get-set": "error",
      "fp/no-let": "error",
      "fp/no-loops": "error",
      "fp/no-mutating-assign": "error",
      "fp/no-mutating-methods": "error",
      "fp/no-mutation": ["error", {commonjs:true}],
      "fp/no-nil": "error",
      "fp/no-proxy": "error",
      "fp/no-rest-parameters": "warn",
      "fp/no-this": "warn",
      "fp/no-throw": "warn",
      "fp/no-unused-expression": "warn",
      "fp/no-valueof-field": "error",
      "no-new-object": "warn",
      "no-magic-numbers": ["error", {  "ignore": [0,1] }],
      "no-unused-expressions": "error", // disallow usage of expressions in statement position
      "no-lonely-if": "error", // disallow if as the only statement in an else block
      "sort-keys": ["warn", "asc", {"caseSensitive": true, "natural": false}],
    }
  },
];
