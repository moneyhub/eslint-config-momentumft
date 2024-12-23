const typescriptEslint = require("typescript-eslint")
const promise = require("eslint-plugin-promise")
const securityNode = require("eslint-plugin-security-node")

const baseConfig = {
  plugins: {
    '@typescript-eslint': typescriptEslint.plugin,
    promise,
    "security-node": securityNode
  },
  languageOptions: {
    parser: typescriptEslint.parser,
    parserOptions: {
      projectService: true,
    },
    globals: {
      BufferEncoding: "readonly"
    },
  },
  "rules": {
    "no-redeclare": "off",
    "@typescript-eslint/no-redeclare": "error",
    "no-unused-vars": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-use-before-define": [
      "error",
      {
        "functions": false,
        "typedefs": false
      }
    ],
    "no-use-before-define": "off",
    "@typescript-eslint/camelcase": "off",
    "camelcase": "off",
    "@typescript-eslint/no-base-to-string": "error",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {caughtErrors: "none"}
    ],
    "@typescript-eslint/no-restricted-types": "warn",
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": "warn",
    "promise/no-return-wrap": "warn",
    "promise/always-return": "warn"
  }
}

const declarationConfig = {
  "rules": {
    "no-use-before-define": "off",
    "no-unused-vars": "off",
    "camelcase": "off",
    "no-redeclare": "off"
  }
}

module.exports.baseConfigWithFiles = typescriptEslint.config(
  {
    ...baseConfig,
    "files": ["src/**/*.ts", "test/**/*.ts"],
  },
  {
    "files": ["src/**/*.d.ts"],
    ...declarationConfig,
  },
)

module.exports.declarationConfig = declarationConfig
module.exports.baseConfig = baseConfig