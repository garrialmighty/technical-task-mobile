module.exports = {
  extends: "airbnb",
  parser: "babel-eslint",
  env: {
    jest: true
  },
  rules: {
    "no-use-before-define": "off",
    "react/jsx-filename-extension": "off",
    "react/prop-types": "off",
    "react/prefer-stateless-function": [0],
    "react/no-array-index-key": "off",
    "comma-dangle": "off",
    "object-curly-newline": [
      "error",
      {
        ObjectExpression: "always",
        ObjectPattern: { multiline: true }
      }
    ]
  },
  globals: {
    fetch: false
  }
};
