import React from "react";

// One step on a <TimelineWrapper> rail. Styles: src/css/components/_timeline.scss.
const TimelineStep = ({ stepNumber, children }) => (
  <div className="pm-timeline__step">
    <div className="pm-timeline__marker">{stepNumber}</div>
    <div className="pm-timeline__body">{children}</div>
  </div>
);

export default TimelineStep;
