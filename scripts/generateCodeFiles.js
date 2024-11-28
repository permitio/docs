const fs = require("fs");
const path = require("path");
const glob = require("glob");

const folderPath = path.resolve(__dirname, "../src/sdks");
const outputFile = path.resolve(__dirname, "../src/codeFiles.json");

const files = glob.sync(`${folderPath}/**/*.{js,ts,py,java,cpp}`).map((filePath) => {
  const content = fs.readFileSync(filePath, "utf-8");
  const name = path.relative(folderPath, filePath); // Keep file names relative
  return { name, content };
});

fs.writeFileSync(outputFile, JSON.stringify(files, null, 2));
console.log("The code files were successfully generated at path: ", outputFile);
