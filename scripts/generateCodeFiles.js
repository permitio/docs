const fs = require("fs");
const path = require("path");
const glob = require("glob");

const folderPath = path.resolve(__dirname, "../src/sdks");
const outputFile = path.resolve(__dirname, "../src/codeFiles.json");

const files = glob
  .sync(`${folderPath}/**/*.{js,ts,py,java,cpp,go,cs,rb,php,kt,erl,rs}`)
  .map((filePath) => {
    const content = fs.readFileSync(filePath, "utf-8");
    const relativePath = path.relative(folderPath, filePath);
    const depth = relativePath.split(path.sep).length - 1; // Determine depth
    return { name: relativePath, content, depth };
  });

fs.writeFileSync(outputFile, JSON.stringify(files, null, 2));
console.log("The code files were successfully generated at path: ", outputFile);
