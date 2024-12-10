import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

import "./CodeBlock.css";

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

function CodeTabItem({ file }) {
  const [copyStatus, setCopyStatus] = useState("Copy Code");

  const handleCopyCode = () => {
    navigator.clipboard
      .writeText(file.content)
      .then(() => {
        setCopyStatus("Woof!");
        // Reset the text to "Copy Code" after 3 seconds
        setTimeout(() => setCopyStatus("Copy Code"), 3000);
      })
      .catch((err) => {
        console.error("Failed to copy code: ", err);
      });
  };

  return (
    <div className={"tabContent"}>
      <button
        onClick={handleCopyCode}
        className={`copyButtonInline ${copyStatus === "Woof!" ? "copiedAnimation" : ""}`}
      >
        {copyStatus}
      </button>
      <div className={"codeContent noHorizontalScroll"}>
        <SyntaxHighlighter language={file.name.split(".").pop()} style={dracula} showLineNumbers>
          {file.content}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}

function CodeBlock({ folderPath }) {
  // Map extensions to full language names
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
    <div className={"codeBlock"}>
      <Tabs
        className="customTabs"
        groupId="code-snippets"
        defaultValue={filteredFiles[0].name}
        values={filteredFiles.map((file) => {
          const fileExtension = file.name.split(".").pop();
          const language = languageNames[fileExtension] || fileExtension.toUpperCase();
          return { label: language, value: file.name };
        })}
      >
        {filteredFiles.map((file) => (
          <TabItem key={file.name} value={file.name}>
            <CodeTabItem file={file} />
          </TabItem>
        ))}
      </Tabs>
    </div>
  );
}

CodeBlock.propTypes = {
  folderPath: PropTypes.string.isRequired,
};

export default CodeBlock;
