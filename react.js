module.exports = {
  "extends": "./index.js",

  "plugins": [
    "react"
  ],

  "ecmaFeatures": {
    "jsx": true
  },

  "rules": {
    "react/jsx-curly-spacing": [2, "never"],
    "react/jsx-no-undef": 2,
    "react/jsx-uses-react": 2,
    "react/no-did-mount-set-state": 2,
    "react/no-did-update-set-state": 2,
    "react/no-multi-comp": 2,
    "react/no-unknown-property": 2,
    "react/prop-types": 2,
    "react/react-in-jsx-scope": 2,
    "react/self-closing-comp": 2,
    "react/wrap-multilines": 2
  }
}
