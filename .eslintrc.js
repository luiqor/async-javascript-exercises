module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    "comma-dangle": ["error", "always-multiline"],
    indent: ["error", 2],
    semi: ["error", "always"],
  },
};
