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
>>>>>>> a3fa717 (Removed yarn lock file)
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
>>>>>>> a3fa717 (Removed yarn lock file)
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
>>>>>>> a3fa717 (Removed yarn lock file)
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
>>>>>>> a3fa717 (Removed yarn lock file)
        ],
      },
    ],
    "prettier/prettier": [
<<<<<<< HEAD
      "error",
=======
      "off",
>>>>>>> a3fa717 (Removed yarn lock file)
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
