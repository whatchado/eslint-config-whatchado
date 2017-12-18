module.exports = {
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 7,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    es6: true,
    jest: true
  },
  extends: ["airbnb", "plugin:import/errors", "plugin:import/warnings"],
  plugins: ["import"],
  rules: {
    "import/no-extraneous-dependencies": ["off"],
    "import/no-unresolved": ["warn"],
    requireSemicolons: "off",
    indent: [
      "error",
      "tab",
      {
        SwitchCase: 1,
        VariableDeclarator: 1
      }
    ],
    "padded-blocks": ["error", { classes: "always" }],
    "no-tabs": "off",
    "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
    "no-console": ["warn", { allow: ["error"] }],
    "no-param-reassign": [2, { props: false }],
    semi: ["error", "never"],
    "func-names": ["error", "never"],
    "comma-dangle": [
      "error",
      {
        arrays: "never",
        objects: "always",
        imports: "never",
        exports: "never",
        functions: "ignore"
      }
    ]
  }
};
