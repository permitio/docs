// Prism dark theme for code blocks, from the www.permit.io code palette
// (next-website/styles/prism-theme.css). The website draws these colours on a
// warm #2a211f; here they sit on the dark code surface (--pm-code-bg =
// --pm-surface-1, #0a0f22) and on a highlighted line (brand purple #875cff at
// 16% over that surface = #1e1b45). Change both files together.
//
// WCAG 2.x contrast, text on   code bg #0a0f22   highlighted line #1e1b45
//   plain        #f9ede7            16.57              14.05
//   comment      #b08c7d             6.24               5.30
//   punctuation  #b08c7d             6.24               5.30
//   property     #c89aff             8.62               7.31
//   string       #0ac5b3             8.74               7.41
//   operator     #cba393             8.33               7.07
//   keyword      #ff8b3e             8.16               6.92
//   function     #f65cb6             6.45               5.47
//   variable     #ee9900             8.32               7.06
//
// Comments are not italic: IBM Plex Mono is self-hosted without an italic face
// (see src/css/base/_fonts.scss), so an italic style would be synthesised.
// Backgrounds are CSS variables so the token surface stays the single source.

/** @type {import('prism-react-renderer').PrismTheme} */
module.exports = {
  plain: {
    color: "#f9ede7",
    backgroundColor: "var(--pm-code-bg)",
  },
  styles: [
    {
      types: ["comment", "prolog", "doctype", "cdata", "punctuation"],
      style: { color: "#b08c7d" },
    },
    {
      types: ["property", "tag", "boolean", "number", "constant", "symbol", "deleted"],
      style: { color: "#c89aff" },
    },
    {
      types: ["selector", "attr-name", "string", "char", "builtin", "inserted"],
      style: { color: "#0ac5b3" },
    },
    {
      types: ["operator", "entity", "url"],
      style: { color: "#cba393" },
    },
    {
      types: ["atrule", "attr-value", "keyword"],
      style: { color: "#ff8b3e" },
    },
    {
      types: ["function"],
      style: { color: "#f65cb6" },
    },
    {
      types: ["regex", "important", "variable"],
      style: { color: "#ee9900" },
    },
    {
      types: ["important", "bold"],
      style: { fontWeight: "500" },
    },
  ],
};
