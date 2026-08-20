const react = require("eslint-plugin-react");
const prettierRecommended = require("eslint-plugin-prettier/recommended");

// Flat config for ESLint 9+/10. Mirrors the previous .eslintrc.js:
// react/recommended + prettier/recommended, JS/JSX only. The spellcheck plugin
// was dropped (unmaintained, no flat-config support); cspell.json covers spelling.
module.exports = [
  {
    ignores: ["build/**", ".docusaurus/**", ".cache-loader/**", "node_modules/**", "static/**"],
  },
  {
    ...react.configs.flat.recommended,
    files: ["**/*.{js,jsx,mjs,cjs}"],
  },
  {
    // React 17+ automatic JSX runtime — disables react-in-jsx-scope / jsx-uses-react.
    ...react.configs.flat["jsx-runtime"],
    files: ["**/*.{js,jsx,mjs,cjs}"],
  },
  prettierRecommended,
  {
    files: ["**/*.{js,jsx,mjs,cjs}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    settings: {
      // Pinned (not "detect") because eslint-plugin-react@7's version-detection
      // path calls the context.getFilename() API removed in ESLint 10.
      react: { version: "19.2.7" },
    },
    rules: {
      "react/prop-types": "off",
      "no-unused-vars": ["warn", { vars: "all", args: "after-used", ignoreRestSiblings: false }],
      "prettier/prettier": ["error", { endOfLine: "auto" }],
    },
  },
];
