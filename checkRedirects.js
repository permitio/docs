const config = require("./docusaurus.config");
const fs = require("fs").promises;
const path = require("path");
const folderPath = "./docs";

const files = [];

// Recursively search for links in files
async function searchLinksInFolder(folderPath, links) {
  const entries = await fs.readdir(folderPath, { withFileTypes: true });
  for (const entry of entries) {
    const entryPath = path.join(folderPath, entry.name);
    if (entry.isDirectory()) {
      await searchLinksInFolder(entryPath, links); // Recurse into directories
    } else {
      await searchLinksInFile(entryPath, links);
    }
  }
}

// Check if the file contains any of the links
async function searchLinksInFile(filePath, links) {
  const content = await fs.readFile(filePath, "utf8");
  links.forEach((link) => {
    if (content.includes(`(${link}`)) {
      files.push(`Found link "${link}" in file: ${filePath}`);
    }
  });
  if (content.includes("https://docs.permit.io/")) {
    files.push(`Found link "https://docs.permit.io/" in file: ${filePath}`);
  }
}

// Main function to run the script
async function run() {
  try {
    const links = config.plugins
      .find(([plugin]) => plugin === "@docusaurus/plugin-client-redirects")[1]
      .redirects.map(({ from }) => from)
      .flat();
    await searchLinksInFolder(folderPath, links);
    if (files.length > 0) {
      console.log("The following files contain links to pages that have been redirected:");
      console.log("--------------------------------------------------------------");
      console.log(files.join("\n"));
      console.log("--------------------------------------------------------------");
      console.log("Please update the links in the files above to the new URLs.");
      process.exit(2);
    }
    console.log("No redirect issues found!");
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

run();
