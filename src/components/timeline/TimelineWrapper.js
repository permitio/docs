import React from "react";

// Vertical step rail for long how-to guides. Styles: src/css/components/_timeline.scss.
const TimelineWrapper = ({ children }) => {
  // Count the number of children and pass the index + 1 as a prop to each TimelineStep
  const steps = React.Children.toArray(children).map((child, index) => {
    return React.isValidElement(child)
      ? { ...child, props: { ...child.props, stepNumber: index + 1 } }
      : child;
  });

  return <div className="pm-timeline">{steps}</div>;
};

export default TimelineWrapper;
