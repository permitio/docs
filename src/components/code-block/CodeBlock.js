// import "./CodeDropdown.scss";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { foundation } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./CodeBlock.css";
import codeFiles from "../../codeFiles.json"; // Import pre-generated JSON

function CodeBlock({ folderPath }) {
  // Filter files based on the folderPath prop
  const filteredFiles = codeFiles.filter((file) =>
    file.name.startsWith(folderPath.replace(/^\//, ""))
  );

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
          return (
            <button
              key={file.name}
              onClick={() => handleTabClick(file)}
              className={`${"tabButton smallTabButton"} ${
                file.name === selectedFile.name ? "activeTab" : ""
              }`}
            >
              {fileExtension.toUpperCase()}
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
          style={foundation}
          wrapLongLines
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
};

export default CodeBlock;
