module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "plugin:prettier/recommended"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "spellcheck"],
  rules: {
    "react/prop-types": "off",
<<<<<<< HEAD
    "no-unused-vars": ["warn", { vars: "all", args: "after-used", ignoreRestSiblings: false }],
=======
    "no-unused-vars": ["error", { vars: "all", args: "after-used", ignoreRestSiblings: false }],
<<<<<<< HEAD
>>>>>>> a3fa717 (Removed yarn lock file)
=======
>>>>>>> 6daa436 (Added eslint, prettier, husky packages. Installed eslint plugins)
>>>>>>> 7895135 (Added eslint, prettier, husky packages. Installed eslint plugins)
    "spellcheck/spell-checker": [
      "error",
      {
        comments: true,
        strings: true,
        identifiers: true,
        templates: true,
        lang: "en_US",
        skipWords: [
<<<<<<< HEAD
          // lang or framework or cs specific words
          "nodejs",
          "axios",
          "dotnet",
          "golang",
          "erlang",
          "kotlin",
          "cpp",
          "csharp",
          "algolia",
          "ecma",
          "lang",
          "dracula",
          "hotjar",
          "netlify",

=======
          "nodejs",
<<<<<<< HEAD
>>>>>>> a3fa717 (Removed yarn lock file)
=======
>>>>>>> 6daa436 (Added eslint, prettier, husky packages. Installed eslint plugins)
>>>>>>> 7895135 (Added eslint, prettier, husky packages. Installed eslint plugins)
          "faq",
          "sdk",
          "unassign",
          "quickstart",
          "Frontend",
          "onboarding",
          "Workspace",
<<<<<<< HEAD
=======
          "axios",
          "dotnet",
          "golang",
          "erlang",
          "kotlin",
          "cpp",
<<<<<<< HEAD
>>>>>>> a3fa717 (Removed yarn lock file)
=======
>>>>>>> 6daa436 (Added eslint, prettier, husky packages. Installed eslint plugins)
>>>>>>> 7895135 (Added eslint, prettier, husky packages. Installed eslint plugins)
          "pho",
          "integrations",
          "href",
          "dropdown",
<<<<<<< HEAD
          "docusaurus",
          "Fullstack",
          "autocompletion",
          "renderer",
          "io",
          "tagline",
          "favicon",
          "permitio",
          "repo",
          "multitenancy",
          "tailwindcss",
          "Prefixer",
          "io",
          "Closeable",
=======
          "csharp",
          "docusaurus",
          "Fullstack",
          "algolia",
          "ecma",
          "lang",
<<<<<<< HEAD
>>>>>>> a3fa717 (Removed yarn lock file)
=======
>>>>>>> 6daa436 (Added eslint, prettier, husky packages. Installed eslint plugins)
>>>>>>> 7895135 (Added eslint, prettier, husky packages. Installed eslint plugins)
        ],
      },
    ],
    "prettier/prettier": [
<<<<<<< HEAD
      "error",
=======
      "off",
<<<<<<< HEAD
>>>>>>> a3fa717 (Removed yarn lock file)
=======
>>>>>>> 6daa436 (Added eslint, prettier, husky packages. Installed eslint plugins)
>>>>>>> 7895135 (Added eslint, prettier, husky packages. Installed eslint plugins)
      {
        endOfLine: "auto",
      },
    ],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
