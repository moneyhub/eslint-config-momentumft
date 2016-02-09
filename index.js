module.exports = {
  "parser": "babel-eslint",

  "env": {
    "browser": true,
    "mocha": true,
    "node": true
  },

  "plugins": [
    "babel"
  ],

  "rules": {

    // Separate the rules into blocks based on what plugin they come from.
    // Default rules are split up based on sections found on the eslint rules page.
    // Rules should be sorted alphabetically inside each section.

    "strict": 0,

    // Possible Errors
    "comma-dangle": [2, "always-multiline"], // disallow or enforce trailing commas
    "no-cond-assign": 2, // disallow assignment in conditional expressions
    "no-constant-condition": 2, // disallow use of constant expressions in conditions
    "no-dupe-args": 2, // disallow duplicate arguments in functions
    "no-dupe-keys": 2, // disallow duplicate keys when creating object literals
    "no-duplicate-case": 2, // disallow a duplicate case label
    "no-empty": 2, // disallow empty statements
    "no-ex-assign": 2, // disallow assigning to the exception in a catch block
    "no-extra-boolean-cast": 2, // disallow double-negation boolean casts in a boolean context
    "no-extra-parens": [2, "functions"], // disallow unnecessary parentheses
    "no-func-assign": 2, // disallow overwriting functions written as function declarations
    "no-inner-declarations": [2, "functions"], // disallow function or variable declarations in nested blocks
    "no-obj-calls": 2, // disallow the use of object properties of the global object (Math and JSON) as functions 
    "no-undef": 2, // disallow use of undeclared variables unless mentioned in a /*global */ block
    "no-unexpected-multiline": 2, // avoid code that looks like two expressions but is actually one
    "no-unreachable": 2, // disallow unreachable statements after a return, throw, continue, or break statement
    "no-unused-vars": 2, // disallow declaration of variables that are not used in the code
    "no-use-before-define": [2, "nofunc"], // disallow use of variables before they are defined
    "use-isnan": 2, // disallow comparisons with the value NaN
    "valid-typeof": 2, // Ensure that the results of typeof are compared against a valid string

    // Best Practices
    "accessor-pairs": 2, // Enforces getter/setter pairs in objects
    "consistent-return": 2, // require return statements to either always or never specify values
    "complexity": [2,
      7
    ], // specify the maximum cyclomatic complexity allowed in a program
    "dot-notation": 2, // encourages use of dot notation whenever possible
    "eqeqeq": [2, "smart"], // require the use of === and !==
    "no-else-return": 2, // disallow else after a return in an if
    "no-extra-bind": 2, // disallow unnecessary function binding
    "no-lone-blocks": 2, // disallow unnecessary nested blocks

    // Stylistic Issues
    "array-bracket-spacing": [2, "never"], // enforce spacing inside array brackets
    "brace-style": [2, "1tbs"], // enforce one true brace style
    "camelcase": 2, // require camel case names
    "comma-spacing": 2, // enforce spacing before and after comma
    "comma-style": 2, // enforce one true comma style
    "eol-last": 2, // enforce newline at the end of file, with no multiple empty lines
    "func-style": [2, "declaration",  {
        "allowArrowFunctions": true
      }
    ], // enforce use of function declarations or expressions
    "indent": [2, 2], // specify tab or space width for your code
    "jsx-quotes": [2, "prefer-double"], // specify whether double or single quotes should be used in JSX attributes
    "key-spacing": 2, // enforce spacing between keys and values in object literal properties
    "linebreak-style": [2, "unix"], // disallow mixed 'LF' and 'CRLF' as linebreaks
    "lines-around-comment": 2, // enforce empty lines around comments
    "max-nested-callbacks": [2, 3], // specify the maximum depth callbacks can be nested
    "new-cap": [2, { "capIsNew": false }], // require a capital letter for constructors
    "new-parens": 2, // disallow the omission of parentheses when invoking a constructor with no arguments
    "no-multiple-empty-lines": [1, { "max": 3 }], // disallow multiple empty lines
    "no-nested-ternary": 2, // disallow nested ternary expressions
    "no-underscore-dangle": 0, // disallow dangling underscores in identifiers
    "no-unneeded-ternary": 2, // disallow the use of ternary operators when a simpler alternative exists
    "quotes": [2, "double"], // specify whether backticks, double or single quotes should be used 
    "semi": [2, "never"], // require or disallow use of semicolons instead of ASI
    "sort-vars": 2, // sort variables within the same declaration block
    "space-after-keywords": 2, // require a space after certain keywords
    "space-before-blocks": 2, // space-before-blocks
    "space-before-function-paren": [2, "never"], // require or disallow a space before function opening parenthesis
    "space-in-parens": [2, "never"], // require or disallow spaces inside parentheses
    "space-infix-ops": 2, // require spaces around operators
    "spaced-comment": 2, // require or disallow a space immediately following the // or /* in a comment

    // ECMAScript 6
    "constructor-super": 2, // verify calls of super() in constructors
    "no-this-before-super": 2, // disallow use of this/super before calling super() in constructors.
    "no-var": 2, // require let or const instead of var
    "prefer-const": 2, // uggest using const declaration for variables that are never modified after declared

    // Plugins
    // Babel
    "babel/object-shorthand": 2, // enforce concise object methods and properties
  }
}
