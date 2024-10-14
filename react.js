const reactPlugin = require("eslint-plugin-react")
const reactHooksPlugin = require("eslint-plugin-react-hooks")
module.exports = [
  {
    // files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    ...reactPlugin.configs.flat.recommended,
  },
  {
    // files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
    },
    rules: {
      "react/display-name": "off", // Prevent missing displayName in a React component definition
      "react/forbid-prop-types": "off", // Forbid certain propTypes
      "react/jsx-boolean-value": "off", // Enforce boolean attributes notation in JSX (fixable)
      "react/jsx-closing-bracket-location": "off", // Validate closing bracket location in JSX
      "react/jsx-curly-spacing": ["error", "never"], // Enforce or disallow spaces inside of curly braces in JSX attributes (fixable)
      "react/jsx-equals-spacing": "off", // Enforce or disallow spaces around equal signs in JSX attributes
      "react/jsx-handler-names": "off", // Enforce event handler naming conventions in JSX
      "react/jsx-indent": "off", // Validate JSX indentation
      "react/jsx-indent-props": "off", // Validate props indentation in JSX
      "react/jsx-key": "off", // Validate JSX has key prop when in array or iterator
      "react/jsx-max-props-per-line": "off", // Limit maximum of props on a single line in JSX
      "react/jsx-no-bind": "off", // Prevent usage of .bind() and arrow functions in JSX props
      "react/jsx-no-duplicate-props": "off", // Prevent duplicate props in JSX
      "react/jsx-no-literals": "off", // Prevent usage of unwrapped JSX strings
      "react/jsx-no-undef": "error", // Disallow undeclared variables in JSX
      "react/jsx-pascal-case": "off", // Enforce PascalCase for user-defined JSX components
      "react/jsx-quotes": "off", // Enforce quote style for JSX attributes
      "react/jsx-sort-prop-types": "off", // Enforce propTypes declarations alphabetical sorting
      "react/jsx-sort-props": "off", // Enforce props alphabetical sorting
      "react/jsx-space-before-closing": "off", // Validate spacing before closing bracket in JSX (fixable)
      "react/jsx-uses-react": "error", // Prevent React to be incorrectly marked as unused
      "react/jsx-uses-vars": "error", // Prevent variables used in JSX to be incorrectly marked as unused
      "react/no-danger": "off", // Prevent usage of dangerous JSX properties
      "react/no-deprecated": "off", // Prevent usage of deprecated methods
      "react/no-did-mount-set-state": "error", // Prevent usage of setState in componentDidMount
      "react/no-did-update-set-state": "error", // Prevent usage of setState in componentDidUpdate
      "react/no-direct-mutation-state": "off", // Prevent direct mutation of this.state
      "react/no-is-mounted": "off", // Prevent usage of isMounted
      "react/no-multi-comp": ["error", { ignoreStateless: true }], // Prevent multiple component definition per file
      "react/no-set-state": "off", // Prevent usage of setState
      "react/no-string-refs": "off", // Prevent using string references in ref attribute.
      "react/no-unknown-property": "error", // Prevent usage of unknown DOM property (fixable)
      "react/prefer-es6-class": "off", // Enforce ES5 or ES6 class for React Components
      "react/prop-types": "error", // Prevent missing props validation in a React component definition
      "react/react-in-jsx-scope": "error", // Prevent missing React when using JSX
      "react/require-extension": "off", // Restrict file extensions that may be required
      "react/self-closing-comp": "error", // Prevent extra closing tags for components without children
      "react/sort-comp": "off", // Enforce component methods order
      "react/jsx-wrap-multilines": "error", // Prevent missing parentheses around multilines JSX (fixable)
      "react/no-children-prop": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn"
    }
  }
]