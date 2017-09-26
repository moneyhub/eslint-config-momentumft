module.exports = {
  "extends": [
    "./index.js",
  ],

  plugins: ["fp"],

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
    "no-magic-numbers": [2, {  "ignore": [0,1] }],
    "no-unused-expressions": 2, // disallow usage of expressions in statement position   
    "no-lonely-if": 2, // disallow if as the only statement in an else block    
    "sort-keys": [1, "asc", {"caseSensitive": true, "natural": false}],    
  },
}
