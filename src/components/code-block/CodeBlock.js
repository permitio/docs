import React, { useState } from "react";
import PropTypes from "prop-types";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./CodeBlock.css";
import codeFiles from "../../codeFiles.json"; // Import pre-generated JSON

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

  // Filter files based on the folderPath prop and depth
  const filteredFiles = codeFiles.filter((file) => {
    const isInFolder = file.name.startsWith(folderPath.replace(/^\//, ""));
    const isWithinDepth = file.depth <= maxDepth;
    return isInFolder && isWithinDepth;
  });

  const [selectedFile, setSelectedFile] = useState(filteredFiles[0]);

  const handleTabClick = (file) => {
    setSelectedFile(file);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(selectedFile.content).then(
      () => {},
      (err) => {
        console.error("Failed to copy code: ", err);
      }
    );
  };

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
        <button onClick={handleCopyCode} className={"copyButtonInline"}>
          Copy Code
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
