module.exports = {
  "parser": "babel-eslint",

  "env": {
    "browser": true,
    "mocha": true,
    "node": true
  },

  "rules": {

    // Separate the rules into blocks based on what plugin they come from.
    // Default rules are split up based on sections found on the eslint rules page.
    // Rules should be sorted alphabetically inside each section.

    "strict": 0,

    // Possible Errors
    "comma-dangle": [2, "always-multiline"],
    "no-cond-assign": 2,
    "no-constant-condition": 2,
    "no-dupe-args": 2,
    "no-dupe-keys": 2,
    "no-duplicate-case": 2,
    "no-empty": 2,
    "no-ex-assign": 2,
    "no-extra-boolean-cast": 2,
    "no-extra-parens": [2, "functions"],
    "no-func-assign": 2,
    "no-inner-declarations": [2, "functions"],
    "no-obj-calls": 2,
    "no-undef": 2,
    "no-unexpected-multiline": 2,
    "no-unreachable": 2,
    "no-use-before-define": [2, "nofunc"],
    "no-unused-vars": 2,
    "use-isnan": 2,
    "valid-typeof": 2,

    // Best Practices
    "accessor-pairs": 2,
    "consistent-return": 2,
    "dot-notation": 2,
    "complexity": [2,
      7
    ],
    "eqeqeq": [2, "smart"],
    "no-else-return": 2,
    "no-extra-bind": 2,
    "no-lone-blocks": 2,

    // Stylistic Issues
    "array-bracket-spacing": [2, "never"],
    "brace-style": [2, "1tbs"],
    "camelcase": 2,
    "comma-spacing": 2,
    "comma-style": 2,
    "eol-last": 2,
    "func-style": [2, "declaration",  {
        "allowArrowFunctions": true
      }
    ],
    "indent": [2, 2],
    "jsx-quotes": [2, "prefer-double"],
    "key-spacing": 2,
    "linebreak-style": [2, "unix"],
    "lines-around-comment": 2,
    "max-nested-callbacks": [2, 3],
    "new-cap": [2, { "capIsNew": false }],
    "new-parens": 2,
    "no-multiple-empty-lines": [1, { "max": 3 }],
    "no-nested-ternary": 2,
    "no-unneeded-ternary": 2,
    "no-underscore-dangle": 0,
    "quotes": [2, "double"],
    "semi": [2, "never"],
    "sort-vars": 2,
    "space-after-keywords": 2,
    "space-before-blocks": 2,
    "space-before-function-paren": [2, "never"],
    "space-in-parens": [2, "never"],
    "space-infix-ops": 2,
    "spaced-comment": 2,

    // ECMAScript 6
    "constructor-super": 2,
    "generator-star-spacing": 2,
    "no-this-before-super": 2,
    "no-var": 2,
    "object-shorthand": 2,
    "prefer-const": 2

  }
}
