import React from "react";
import LinearProgress from "@mui/material/LinearProgress/index.js"; // Import the Material UI progress bar
import PropTypes from "prop-types";
import "./WhatsNext.css";

function WhatsNext({ progress, customText, children }) {
  return (
    <div className={"container-whats-next"}>
      <div className={"mdxContent"}>{children}</div>
      <LinearProgress variant="determinate" value={progress} className={"progressBar"} />
      <p className={"progressText"}>{customText}</p>
    </div>
  );
}

WhatsNext.propTypes = {
  progress: PropTypes.number.isRequired, // Progress percentage
  customText: PropTypes.string, // Optional custom text
  children: PropTypes.node, // MDX or other React elements to render
};

WhatsNext.defaultProps = {
  customText: "Keep going! You’re doing great!",
};

export default WhatsNext;
