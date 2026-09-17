// Prism light theme for code blocks. Same token groups and hues as dark.js
// (the www.permit.io palette), each darkened in HSL lightness until it clears
// 5:1 on both the light code surface (--pm-code-bg = --pm-surface-2, #f9ede7)
// and a highlighted line (brand purple #8132d7 at 10% over it = #eddae5).
// Change both files together.
//
// WCAG 2.x contrast, text on   code bg #f9ede7   highlighted line #eddae5
//   plain        #1a1a1f            15.10              13.04   (--pm-text)
//   comment      #755547             5.81               5.02   (from #b08c7d)
//   punctuation  #755547             5.81               5.02
//   property     #7327c8             6.41               5.54   (from #c89aff; primary-darker)
//   string       #05665d             5.97               5.15   (from #0ac5b3)
//   operator     #80503e             5.84               5.04   (from #cba393)
//   keyword      #9c3e00             5.90               5.09   (from #ff8b3e)
//   function     #b20a6c             5.80               5.01   (from #f65cb6)
//   variable     #805300             5.80               5.01   (from #ee9900)
//
// Comments are not italic (no IBM Plex Mono italic face is shipped).

/** @type {import('prism-react-renderer').PrismTheme} */
module.exports = {
  plain: {
    color: "#1a1a1f",
    backgroundColor: "var(--pm-code-bg)",
  },
  styles: [
    {
      types: ["comment", "prolog", "doctype", "cdata", "punctuation"],
      style: { color: "#755547" },
    },
    {
      types: ["property", "tag", "boolean", "number", "constant", "symbol", "deleted"],
      style: { color: "#7327c8" },
    },
    {
      types: ["selector", "attr-name", "string", "char", "builtin", "inserted"],
      style: { color: "#05665d" },
    },
    {
      types: ["operator", "entity", "url"],
      style: { color: "#80503e" },
    },
    {
      types: ["atrule", "attr-value", "keyword"],
      style: { color: "#9c3e00" },
    },
    {
      types: ["function"],
      style: { color: "#b20a6c" },
    },
    {
      types: ["regex", "important", "variable"],
      style: { color: "#805300" },
    },
    {
      types: ["important", "bold"],
      style: { fontWeight: "500" },
    },
  ],
};
