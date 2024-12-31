import React from "react";

const TimelineWrapper = ({ children }) => {
  // Count the number of children and pass the index + 1 as a prop to each TimelineStep
  const steps = React.Children.map(children, (child, index) =>
    React.cloneElement(child, { stepNumber: index + 1 })
  );

  return (
    <div
      className="ml-4 border-purple-500" // border-l-2 not working
      style={{
        borderLeft: "2px solid #A666F4",
      }}
    >
      {steps}
    </div>
  );
};

export default TimelineWrapper;
