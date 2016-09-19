module.exports = {
  "extends": "./index.js",

  "plugins": [
    "react"
  ],

  "ecmaFeatures": {
    "jsx": true
  },

  // Plugins
  // React
  "rules": {
    "react/display-name": 0, // Prevent missing displayName in a React component definition
    "react/forbid-prop-types": 0, // Forbid certain propTypes
    "react/jsx-boolean-value": 0, // Enforce boolean attributes notation in JSX (fixable)
    "react/jsx-closing-bracket-location": 0, // Validate closing bracket location in JSX
    "react/jsx-curly-spacing": [2, "never"], // Enforce or disallow spaces inside of curly braces in JSX attributes (fixable)
    "react/jsx-equals-spacing": 0, // Enforce or disallow spaces around equal signs in JSX attributes
    "react/jsx-handler-names": 0, // Enforce event handler naming conventions in JSX
    "react/jsx-indent": 0, // Validate JSX indentation
    "react/jsx-indent-props": 0, // Validate props indentation in JSX
    "react/jsx-key": 0, // Validate JSX has key prop when in array or iterator
    "react/jsx-max-props-per-line": 0, // Limit maximum of props on a single line in JSX
    "react/jsx-no-bind": 0, // Prevent usage of .bind() and arrow functions in JSX props
    "react/jsx-no-duplicate-props": 0, // Prevent duplicate props in JSX
    "react/jsx-no-literals": 0, // Prevent usage of unwrapped JSX strings
    "react/jsx-no-undef": 2, // Disallow undeclared variables in JSX
    "react/jsx-pascal-case": 0, // Enforce PascalCase for user-defined JSX components
    "react/jsx-quotes": 0, // Enforce quote style for JSX attributes
    "react/jsx-sort-prop-types": 0, // Enforce propTypes declarations alphabetical sorting
    "react/jsx-sort-props": 0, // Enforce props alphabetical sorting
    "react/jsx-space-before-closing": 0, // Validate spacing before closing bracket in JSX (fixable)
    "react/jsx-uses-react": 2, // Prevent React to be incorrectly marked as unused
    "react/jsx-uses-vars": 2, // Prevent variables used in JSX to be incorrectly marked as unused
    "react/no-danger": 0, // Prevent usage of dangerous JSX properties
    "react/no-deprecated": 0, // Prevent usage of deprecated methods
    "react/no-did-mount-set-state": 2, // Prevent usage of setState in componentDidMount
    "react/no-did-update-set-state": 2, // Prevent usage of setState in componentDidUpdate
    "react/no-direct-mutation-state": 0, // Prevent direct mutation of this.state
    "react/no-is-mounted": 0, // Prevent usage of isMounted
    "react/no-multi-comp": [2, { ignoreStateless: true }], // Prevent multiple component definition per file
    "react/no-set-state": 0, // Prevent usage of setState
    "react/no-string-refs": 0, // Prevent using string references in ref attribute.
    "react/no-unknown-property": 2, // Prevent usage of unknown DOM property (fixable)
    "react/prefer-es6-class": 0, // Enforce ES5 or ES6 class for React Components
    "react/prop-types": 2, // Prevent missing props validation in a React component definition
    "react/react-in-jsx-scope": 2, // Prevent missing React when using JSX
    "react/require-extension": 0, // Restrict file extensions that may be required
    "react/self-closing-comp": 2, // Prevent extra closing tags for components without children
    "react/sort-comp": 0, // Enforce component methods order
    "react/jsx-wrap-multilines": 2, // Prevent missing parentheses around multilines JSX (fixable)
  }
}
