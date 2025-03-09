import cheerio from "cheerio";
import fs from "fs";

function extractSitemapPathnames(sitemapPath) {
  const sitemap = fs.readFileSync(sitemapPath).toString();
  const $ = cheerio.load(sitemap, { xmlMode: true });
  const urls = [];
  $("loc").each(function handleLoc() {
    urls.push($(this).text());
  });
  return urls.map((url) => new URL(url).pathname);
}

// Converts a pathname to a decent screenshot name
function pathnameToArgosName(pathname) {
  return pathname.replace(/^\/|\/$/g, "") || "index";
}

export { extractSitemapPathnames, pathnameToArgosName };
