import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
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

function CodeBlock({ folderPath, maxDepth = 2 }) {
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
  const [selectedFile, setSelectedFile] = useState({ name: "", content: "" });
  const [copyStatus, setCopyStatus] = useState("Copy Code");

  const handleTabClick = (file) => {
    setSelectedFile(file);
  };

  const handleCopyCode = () => {
    navigator.clipboard
      .writeText(selectedFile.content)
      .then(() => {
        setCopyStatus("Woof!");
        // Reset the text to "Copy Code" after 3 seconds
        setTimeout(() => setCopyStatus("Copy Code"), 3000);
      })
      .catch((err) => {
        console.error("Failed to copy code: ", err);
      });
  };

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
      setSelectedFile({
        name: filesTree[folderPath][0],
        content: files[0].default,
      });
    };
    fetchFiles();
  }, []);

  if (filteredFiles.length === 0) {
    return <div>No files found in the specified folder path.</div>;
  }

  return (
    <div className={"codeBlock"}>
      <div className={"tabBar leftAlignTabs"}>
        {filteredFiles.map((file) => {
          const fileExtension = file.name.split(".").pop();
          const language = languageNames[fileExtension] || fileExtension.toUpperCase();
          return (
            <button
              key={file.name}
              onClick={() => handleTabClick(file)}
              className={`${"tabButton smallTabButton"} ${
                file.name === selectedFile.name ? "activeTab" : ""
              }`}
            >
              {language}
            </button>
          );
        })}
        <button
          onClick={handleCopyCode}
          className={`copyButtonInline ${copyStatus === "Woof!" ? "copiedAnimation" : ""}`}
        >
          {copyStatus}
        </button>
      </div>
      <div className={"codeContent noHorizontalScroll"}>
        <SyntaxHighlighter
          language={selectedFile.name.split(".").pop()}
          style={dracula}
          showLineNumbers
        >
          {selectedFile.content}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}

CodeBlock.propTypes = {
  folderPath: PropTypes.string.isRequired,
  maxDepth: PropTypes.number, // Optional, default to 1
};

export default CodeBlock;
