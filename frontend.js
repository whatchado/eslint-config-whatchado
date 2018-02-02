module.exports = {
  extends: [
    "eslint-config-whatchado/base",
    "plugin:react/recommended",
    "prettier"
  ],
  plugins: ["react"],
  rules: {
    // react rules
    "react/prop-types": 1,
    "react/jsx-forbid-prop-types": ["off"],
    "react/jsx-indent": ["error", "tab"],
    "react/jsx-indent-props": ["error", "tab"],
    "react/prefer-stateless-function": ["off"],
    "react/jsx-max-props-per-line": ["warn", { when: "multiline" }],
    "react/jsx-first-prop-new-line": ["warn", "multiline-multiprop"],
    "react/jsx-closing-bracket-location": [
      "warn",
      {
        nonEmpty: "after-props",
        selfClosing: "after-props"
      }
    ],
    "react/jsx-tag-spacing": [
      "warn",
      {
        closingSlash: "never",
        beforeSelfClosing: "never",
        afterOpening: "never"
      }
    ]
  }
};
