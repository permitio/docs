import React from "react";
import "./TimelineTile.css";

const TimelineTile = ({ id, children, stepNumber, isSubStep }) => {
  return (
    <div className={`fern-step scroll-mt-content-padded ${isSubStep ? "sub-step" : ""}`} id={id}>
      <a className="fern-anchor" tabIndex="-1" href={`#${id}`}>
        <span className="fern-anchor-icon">
          <span>{stepNumber}</span>
        </span>
      </a>
      <div className="timeline-tile-content">{children}</div>
    </div>
  );
};

export default TimelineTile;
