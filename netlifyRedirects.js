const config = require("./docusaurus.config");

const redirects = config.plugins
  .find(([plugin]) => plugin === "@docusaurus/plugin-client-redirects")[1]
  .redirects.map(({ from, to }) => {
    if (typeof from === "string") {
      return { from, to };
    }
    return from.map((f) => ({ from: f, to }));
  })
  .flat()
  .map(({ from, to }) => [from, to].join(" "))
  .join("\n");

console.log("/2.0.0/*  /:splat");
console.log(redirects);
