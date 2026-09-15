import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ThemeCodeBlock from "@theme/CodeBlock";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

const context = require.context("!raw-loader!../../sdks", true);

const filesTree = context
  .keys()
  .map((path) => path.substring(1))
  .filter((path) => path.indexOf(".") !== -1)
  .reduce((acc, path) => {
    const arr = path.split("/");
    const file = arr.pop();
    const folder = arr.join("/");
    if (!acc[folder]) {
      acc[folder] = [];
    }
    acc[folder].push(file);
    return acc;
  }, {});

// File-extension -> Prism language id. Most extensions already match a
// Prism/Docusaurus language id (or a recognized alias) directly; the two
// package-manager "languages" below aren't real grammars, so they're mapped
// onto `bash` for highlighting instead of rendering unstyled.
const PRISM_LANGUAGE_OVERRIDES = {
  npm: "bash",
  yarn: "bash",
};

function CodeTabItem({ file }) {
  const language = file.name.split(".").pop();
  const prismLanguage = PRISM_LANGUAGE_OVERRIDES[language] || language;
  const showLineNumbers = !["npm", "yarn"].includes(language);

  return (
    <ThemeCodeBlock language={prismLanguage} showLineNumbers={showLineNumbers}>
      {file.content}
    </ThemeCodeBlock>
  );
}

function CodeBlock({ folderPath }) {
  const languageNames = {
    js: "Node.js",
    ts: "TypeScript",
    py: "Python",
    java: "Java",
    cpp: "C++",
    go: "Go",
    cs: ".NET",
    rb: "Ruby on Rails",
    php: "PHP",
    kt: "Kotlin",
    erl: "Erlang",
    rs: "Rust",
    yarn: "yarn",
    npm: "npm",
    bash: "cURL",
  };

  const [filteredFiles, setFilteredFiles] = useState([]);

  useEffect(() => {
    const fetchFiles = async () => {
      const files = await Promise.all(
        filesTree[folderPath].map((key) => import(`!raw-loader!../../sdks${folderPath}/${key}`))
      );
      setFilteredFiles(
        files.map((file, index) => ({
          name: filesTree[folderPath][index],
          content: file.default,
        }))
      );
    };
    fetchFiles();
  }, [folderPath]);

  if (filteredFiles.length === 0) {
    return <div>No files found in the specified folder path.</div>;
  }

  return (
    // Tab bar styling: .pm-code-tabs in src/css/components/_code.scss.
    <Tabs
      className="pm-code-tabs"
      groupId="code-snippets"
      defaultValue={filteredFiles[0].name}
      values={filteredFiles.map((file) => {
        const fileExtension = file.name.split(".").pop();
        const language = languageNames[fileExtension] || fileExtension.toUpperCase();
        return {
          label: language,
          value: file.name,
          attributes: { className: "pm-code-tabs__item" },
        };
      })}
    >
      {filteredFiles.map((file) => (
        <TabItem key={file.name} value={file.name}>
          <CodeTabItem file={file} />
        </TabItem>
      ))}
    </Tabs>
  );
}

CodeBlock.propTypes = {
  folderPath: PropTypes.string.isRequired,
};

export default CodeBlock;
