import React from "react";
import PropTypes from "prop-types";
import "./WhatsNext.css";

function WhatsNext({ progress, customText = "Keep going! You’re doing great!", children }) {
  return (
    <div className={"container-whats-next"}>
      <div className={"mdxContent"}>{children}</div>
      <div
        className={"progressBar"}
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div className={"progressBarFill"} style={{ width: `${progress}%` }} />
      </div>
      <p className={"progressText"}>{customText}</p>
    </div>
  );
}

WhatsNext.propTypes = {
  progress: PropTypes.number.isRequired, // Progress percentage
  customText: PropTypes.string, // Optional custom text
  children: PropTypes.node, // MDX or other React elements to render
};

export default WhatsNext;
