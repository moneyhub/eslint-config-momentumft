const typescriptEslint = require("typescript-eslint")
const outboundUrlSelectors = require("./rules/outbound-url-selectors")

const outboundUrlConfig = {
  files: ["**/*.{js,ts,jsx,tsx}"],
  languageOptions: {
    parser: typescriptEslint.parser,
    parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
  },
  rules: {
    "no-restricted-syntax": ["error", ...outboundUrlSelectors],
  },
}

module.exports = [outboundUrlConfig]
module.exports.selectors = outboundUrlSelectors
