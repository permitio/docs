import React from "react";
import "./TimelineTile.css";

const TimelineTile = ({ id, children, stepNumber, isSubStep }) => {
  return (
    <div
      className={`timeline-step scroll-margin-padded ${isSubStep ? "timeline-sub-step" : ""}`}
      id={id}
      // style={{ marginLeft: "-40px" }}
    >
      <a className="timeline-anchor" tabIndex="-1" href={`#${id}`}>
        <span className="timeline-anchor-icon">
          <span>{stepNumber}</span>
        </span>
      </a>
      <div className="timeline-tile-content">{children}</div>
    </div>
  );
};

export default TimelineTile;
