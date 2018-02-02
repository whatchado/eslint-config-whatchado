module.exports = {
  extends: ["airbnb-base"],
  rules: {
    // general rules
    requireSemicolons: "off",
    "no-tabs": "off",
    indent: [
      "error",
      "tab",
      {
        SwitchCase: 1,
        VariableDeclarator: 1
      }
    ],
    "padded-blocks": ["error", { classes: "always" }],
    "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
    "no-console": ["warn", { allow: ["error"] }],
    "no-param-reassign": [2, { props: false }],
    "func-names": ["error", "never"],
    semi: ["error", "never"],
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
