import React from "react";
import LinearProgress from "@mui/material/LinearProgress"; // Import the Material UI progress bar
import PropTypes from "prop-types";
import "./WhatsNext.css";

function WhatsNext({ progress, customText }) {
  return (
    <div className={"container"}>
      <LinearProgress variant="determinate" value={progress} className={"progressBar"} />
      <p className={"progressText"}>{customText}</p>
    </div>
  );
}

WhatsNext.propTypes = {
  progress: PropTypes.number.isRequired, // Progress percentage
  customText: PropTypes.string, // Optional custom text
};

WhatsNext.defaultProps = {
  customText: "Keep going! You’re doing great!",
};

export default WhatsNext;
