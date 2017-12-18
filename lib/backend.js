module.exports = {
  env: {
    node: true
  },
  extends: "eslint-config-whatchado/lib/common",
  rules: {
    "no-await-in-loop": "off",
    "no-mixed-operators": "off",
    "no-underscore-dangle": ["error", { allow: ["_source"] }],
    "no-use-before-define": "off",
    "comma-dangle": ["error", "only-multiline"]
  }
};
