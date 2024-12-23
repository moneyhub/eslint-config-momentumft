const mochaPlugin = require("eslint-plugin-mocha")
const promise = require("eslint-plugin-promise")
const json = require("eslint-plugin-json")
const jsdoc = require("eslint-plugin-jsdoc")
const securityNode = require("eslint-plugin-security-node")
const {browser, mocha, node, es2024} = require("globals")

module.exports.base = [
  jsdoc.configs['flat/recommended'],
  {
    plugins: {
      mocha: mochaPlugin,
      promise,
      json,
      jsdoc,
      "security-node": securityNode
    },
    languageOptions: {
      ecmaVersion: 2022,
      globals: {
        ...browser,
        ...mocha,
        ...node,
        ...es2024,
      }
    },
    rules: {
      // Rules should be sorted alphabetically inside each section.
      "strict": "off",

      // Possible Errors
      "comma-dangle": ["error", "always-multiline"], // disallow or enforce trailing commas
      "no-cond-assign": "error", // disallow assignment in conditional expressions
      "no-console": "error", // disallow use of console in the node environment
      "no-constant-condition": "error", // disallow use of constant expressions in conditions
      "no-control-regex": "error", // disallow control characters in regular expressions
      "no-debugger": "warn", // disallow use of debugger
      "no-dupe-args": "error", // disallow duplicate arguments in functions
      "no-dupe-keys": "error", // disallow duplicate keys when creating object literals
      "no-duplicate-case": "error", // disallow a duplicate case label
      "no-empty": "error", // disallow empty statements
      "no-empty-character-class": "off", // disallow the use of empty character classes in regular expressions
      "no-ex-assign": "error", // disallow assigning to the exception in a catch block
      "no-extra-boolean-cast": "error", // disallow double-negation boolean casts in a boolean context
      "no-extra-parens": ["error", "functions"], // disallow unnecessary parentheses
      "no-extra-semi": "error", // disallow unnecessary semicolons
      "no-func-assign": "error", // disallow overwriting functions written as function declarations
      "no-inner-declarations": ["error", "functions"], // disallow function or variable declarations in nested blocks
      "no-invalid-regexp": "off", // disallow invalid regular expression strings in the RegExp constructor
      "no-irregular-whitespace": "off", // disallow irregular whitespace outside of strings and comments
      "no-negated-in-lhs": "off", // disallow negation of the left operand of an in expression
      "no-obj-calls": "error", // disallow the use of object properties of the global object (Math and JSON) as functions
      "no-regex-spaces": "off", // disallow multiple spaces in a regular expression literal
      "no-sparse-arrays": "warn", // disallow sparse arrays
      "no-undef": "error", // disallow use of undeclared variables unless mentioned in a /*global */ block
      "no-unexpected-multiline": "error", // avoid code that looks like two expressions but is actually one
      "no-unreachable": "error", // disallow unreachable statements after a return, throw, continue, or break statement
      "no-unused-vars": [
        "error",
        {caughtErrors: "none"}
      ], // disallow declaration of variables that are not used in the code
      "no-use-before-define": ["error", "nofunc"], // disallow use of variables before they are defined
      "use-isnan": "error", // disallow comparisons with the value NaN
      "valid-typeof": "error", // Ensure that the results of typeof are compared against a valid string

      // Best Practices
      "accessor-pairs": "error", // Enforces getter/setter pairs in objects
      "block-scoped-var": "off", // treat var statements as if they were block scoped
      "complexity": ["error", 10], // specify the maximum cyclomatic complexity allowed in a program
      "consistent-return": "error", // require return statements to either always or never specify values
      "curly": "off", // specify curly brace conventions for all control statements
      "default-case": "error", // require default case in switch statements
      "dot-location": "off", // enforces consistent newlines before or after dots
      "dot-notation": "error", // encourages use of dot notation whenever possible
      "eqeqeq": ["error", "smart"], // require the use of === and !==
      "guard-for-in": "off", // make sure for-in loops have an if statement
      "no-alert": "warn", // disallow the use of alert, confirm, and prompt
      "no-caller": "warn", // disallow use of arguments.caller or arguments.callee
      "no-case-declarations": "off", // disallow lexical declarations in case clauses
      "no-div-regex": "off", // disallow division operators explicitly at beginning of regular expression
      "no-else-return": "error", // disallow else after a return in an if
      "no-empty-label": "off", // disallow use of labels for anything other than loops and switches
      "no-empty-pattern": "off", // disallow use of empty destructuring patterns
      "no-eq-null": "off", // disallow comparisons to null without a type-checking operator
      "no-eval": "error", // disallow use of eval()
      "no-extend-native": "error", // disallow adding to native types
      "no-extra-bind": "error", // disallow unnecessary function binding
      "no-fallthrough": "error", // disallow fallthrough of case statements
      "no-floating-decimal": "off", // disallow the use of leading or trailing decimal points in numeric literals
      "no-implicit-coercion": "off", // disallow the type conversions with shorter notations
      "no-implied-eval": "error", // disallow use of eval()-like methods
      "no-invalid-this": "off", // disallow this keywords outside of classes or class-like objects
      "no-iterator": "warn", // disallow usage of __iterator__ property
      "no-labels": "off", // disallow use of labeled statements
      "no-lone-blocks": "error", // disallow unnecessary nested blocks
      "no-loop-func": "error", // disallow creation of functions within loops
      "no-magic-numbers": "off", // isallow the use of magic numbers
      "no-multi-spaces": "off", // disallow use of multiple spaces
      "no-multi-str": "off", // disallow use of multiline strings
      "no-native-reassign": "error", // disallow reassignments of native objects
      "no-new": "warn", // disallow use of the new operator when not part of an assignment or comparison
      "no-new-func": "warn", // disallow use of new operator for Function object
      "no-new-wrappers": "warn", // disallows creating new instances of String,Number, and Boolean
      "no-octal": "off", // disallow use of octal literals
      "no-octal-escape": "off", // disallow use of octal escape sequences in string literals, such as var foo = "Copyright \251";
      "no-param-reassign": "warn", // disallow reassignment of function parameters
      "no-process-env": "off", // disallow use of process.env
      "no-proto": "error", // disallow usage of __proto__ property
      "no-redeclare": "error", // disallow declaring the same variable more than once
      "no-return-assign": "off", // disallow use of assignment in return statement
      "no-script-url": "off", // disallow use of javascript: urls.
      "no-self-compare": "error", // disallow comparisons where both sides are exactly the same
      "no-sequences": "error", // disallow use of the comma operator
      "no-throw-literal": "error", // restrict what can be thrown as an exception
      "no-useless-call": "error", // disallow unnecessary .call() and .apply()
      "no-useless-concat": "warn", // disallow unnecessary concatenation of literals or template literals
      "no-void": "warn", // disallow use of the void operator
      "no-warning-comments": "off", // disallow usage of configurable warning terms in comments - e.g. TODO or FIXME
      "no-with": "error", // disallow use of the with statement
      "radix": "error", // require use of the second argument for parseInt()
      "vars-on-top": "off", // require declaration of all vars at the top of their containing scope
      "wrap-iife": "off", // require immediate function invocation to be wrapped in parentheses
      "yoda": "off", // require or disallow Yoda conditions

      // Stylistic Issues
      "array-bracket-spacing": ["error", "never"], // enforce spacing inside array brackets
      "block-spacing": "off", // disallow or enforce spaces inside of single line blocks
      "brace-style": ["error", "1tbs"], // enforce one true brace style
      "camelcase": "error", // require camel case names
      "comma-spacing": "error", // enforce spacing before and after comma
      "comma-style": "error", // enforce one true comma style
      "computed-property-spacing": "off", // require or disallow padding inside computed properties
      "consistent-this": "off", // enforce consistent naming when capturing the current execution context
      "eol-last": "error", // enforce newline at the end of file, with no multiple empty lines
      "func-names": "off", // require function expressions to have a name
      "func-style": ["error", "declaration",  {"allowArrowFunctions": true}], // enforce use of function declarations or expressions
      "id-length": "off", // this option enforces minimum and maximum identifier lengths (variable names, property names etc.)
      "id-match": "off", // require identifiers to match the provided regular expression
      "indent": ["error", 2], // specify tab or space width for your code
      "jsx-quotes": ["error", "prefer-double"], // specify whether double or single quotes should be used in JSX attributes
      "key-spacing": "error", // enforce spacing between keys and values in object literal properties
      "keyword-spacing": "error", // require a space after certain keywords
      "linebreak-style": ["error", "unix"], // disallow mixed 'LF' and 'CRLF' as linebreaks
      "lines-around-comment": "error", // enforce empty lines around comments
      "max-depth": "off", // specify the maximum depth that blocks can be nested
      "max-len": "off", // specify the maximum length of a line in your program
      "max-nested-callbacks": ["error", 3], // specify the maximum depth callbacks can be nested
      "max-params": ["warn", {max:5}], // limits the number of parameters that can be used in the function declaration.
      "max-statements": ["warn", {max:15}], // specify the maximum number of statement allowed in a function
      "new-cap": ["error", { "capIsNew": false }], // require a capital letter for constructors
      "new-parens": "error", // disallow the omission of parentheses when invoking a constructor with no arguments
      "newline-after-var": "off", // require or disallow an empty newline after variable declarations
      "no-array-constructor": "warn", // disallow use of the Array constructor
      "no-bitwise": "off", // disallow use of bitwise operators
      "no-continue": "off", // disallow use of the continue statement
      "no-inline-comments": "off", // disallow comments inline after code
      "no-lonely-if": "off", // disallow if as the only statement in an else block
      "no-mixed-spaces-and-tabs": "error", // disallow mixed spaces and tabs for indentation
      "no-multiple-empty-lines": ["warn", { "max": 3 }], // disallow multiple empty lines
      "no-negated-condition": "off", // disallow negated conditions
      "no-nested-ternary": "error", // disallow nested ternary expressions
      "no-new-object": "warn", // disallow the use of the Object constructor
      "no-plusplus": "warn", // disallow use of unary operators, ++ and --
      "no-restricted-syntax": "off", // disallow use of certain syntax in code
      "no-spaced-func": "off", // disallow space between function identifier and application
      "no-ternary": "off", // disallow the use of ternary operators
      "no-trailing-spaces": "error", // disallow trailing whitespace at the end of lines
      "no-underscore-dangle": "off", // disallow dangling underscores in identifiers
      "no-unneeded-ternary": "error", // disallow the use of ternary operators when a simpler alternative exists
      "no-useless-escape": "off",
      "object-curly-spacing": ["error", "never"], // require or disallow padding inside curly braces
      "one-var": "off", // require or disallow one variable declaration per function
      "operator-assignment": "off", // require assignment operator shorthand where possible or prohibit it entirely
      "operator-linebreak": "off", // enforce operators to be placed before or after line breaks
      "padded-blocks": "off", // enforce padding within blocks
      "quote-props": "off", // require quotes around object literal property names
      "quotes": ["error", "double"], // specify whether backticks, double or single quotes should be used
      "semi": ["error", "never"], // require or disallow use of semicolons instead of ASI
      "semi-spacing": "off", // enforce spacing before and after semicolons
      "sort-vars": "error", // sort variables within the same declaration block
      "sort-keys": ["off", "asc", {"caseSensitive": true, "natural": false}],
      "space-before-blocks": "error", // space-before-blocks
      "space-before-function-paren": [
        "error",
        {
          "anonymous": "never",
          "named": "never",
          "asyncArrow": "always"
        }
      ], // require or disallow a space before function opening parenthesis
      "space-before-keywords": "off", // require a space before certain keywords
      "space-in-parens": ["error", "never"], // require or disallow spaces inside parentheses
      "space-infix-ops": "error", // require spaces around operators
      "space-return-throw-case": "off", // require a space after return, throw, and case
      "space-unary-ops": "off", // require or disallow spaces before/after unary operators
      "spaced-comment": "error", // require or disallow a space immediately following the // or /* in a comment
      "wrap-regex": "off", // require regex literals to be wrapped in parentheses

      // ECMAScript 6
      "arrow-body-style": "off", // require braces in arrow function body
      "arrow-parens": "off", // require parens in arrow function arguments
      "arrow-spacing": "off", // require space before/after arrow function's arrow
      "constructor-super": "error", // verify calls of super() in constructors
      "generator-star-spacing": "off", // enforce spacing around the * in generator functions
      "no-arrow-condition": "off", // disallow arrow functions where a condition is expected
      "no-class-assign": "off", // disallow modifying variables of class declarations
      "no-const-assign": "error", // disallow modifying variables that are declared using const
      "no-dupe-class-members": "off", // disallow duplicate name in class members
      "no-this-before-super": "error", // disallow use of this/super before calling super() in constructors.
      "no-var": "error", // require let or const instead of var
      "object-shorthand": "error", // require method and property shorthand syntax for object literals
      "prefer-arrow-callback": "off", // suggest using arrow functions as callbacks
      "prefer-const": "error", // uggest using const declaration for variables that are never modified after declared
      "prefer-reflect": "off", // suggest using Reflect methods where applicable
      "prefer-spread": "off", // suggest using the spread operator instead of .apply().
      "prefer-template": "off", // suggest using template literals instead of strings concatenation
      "require-yield": "off", // disallow generator functions that do not have yield

      // Variables
      "no-delete-var": "error", // disallow deleting variables
      "no-label-var": "error", // disallow labels that share a name with a variable
      "no-global-assign": "error", // Disallow assignment to native objects or read-only global variables
      "no-restricted-globals": ["error", "event", "fdescribe"], // disallow specified global variables
      "no-shadow": "error", //	disallow variable declarations from shadowing variables declared in the outer scope
      "no-shadow-restricted-names": "error", // disallow identifiers from shadowing restricted names
      "no-undef": "error", // disallow the use of undeclared variables unless mentioned in `/*global */` comments
      "no-undef-init": "error", // disallow initializing variables to `undefined`

      // Promise
      "promise/no-nesting": "off",

      // JSDocs
      "jsdoc/require-jsdoc": "off",
      "jsdoc/require-param-description": "off",
    }
  },
]

const testConfig = {
  plugins: {
    mocha: mochaPlugin,
    promise,
    json,
    jsdoc,
    "security-node": securityNode
  },
  languageOptions: {
    ecmaVersion: 2022,
    globals: {
      ...browser,
      ...mocha,
      ...node,
      ...es2024,
    }
  },
  rules: {
    "mocha/no-top-level-hooks": "off",
    "mocha/no-exclusive-tests": "error",
    "security-node/detect-crlf": "off",
    "no-shadow": "off",
    "mocha/no-mocha-arrows": "off",
    "mocha/no-hooks-for-single-case": "off",
    "mocha/no-setup-in-describe": "off",
    "mocha/no-identical-title": "warn",
    "mocha/no-async-describe": "warn",
    "mocha/max-top-level-suites": "warn",
    "promise/always-return": "off",
    "comma-dangle": "warn",
    "no-use-before-define": "warn",
    "mocha/no-global-tests": "off",
    "mocha/no-sibling-hooks": "warn",
    "security-node/detect-crlf": "off",
    "promise/no-nesting": "off",
    "no-console": "off"
  }
}

module.exports.testsWithFiles = {
  files: ["src/**/__tests__/**/*.{js,ts}", "test/**/*.{js,ts}"],
  ...testConfig
}

module.exports.tests = testConfig