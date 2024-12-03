import React, { useContext, useRef } from "react";
import TimelineTile from "../../components/timeline/TimelineTile";
import { useDoc } from "@docusaurus/theme-common/internal";

// Context for holding front matter and active step
const TimelineContext = React.createContext({ timeline: false });
const ActiveStepContext = React.createContext();

const injectWrapperForTimeline = ({ children }) => {
  const childrenArray = React.Children.toArray(children); // Flatten children

  let startIndex = -1;
  let stopIndex = -1;

  // Identify the start and stop indices
  childrenArray.forEach((child, index) => {
    if (React.isValidElement(child)) {
      if (child.props.id === "timeline-start") {
        startIndex = index;
      }
      if (child.props.id === "timeline-stop") {
        stopIndex = index;
      }
    }
  });

  if (startIndex !== -1 && stopIndex !== -1 && startIndex < stopIndex) {
    // Split children into before, timelineSteps, and after
    const before = childrenArray.slice(0, startIndex + 1);
    const timelineSteps = childrenArray.slice(startIndex + 1, stopIndex);
    const after = childrenArray.slice(stopIndex);

    // Wrap the timeline steps in a container
    const wrappedTimeline = <div className="timeline-container">{timelineSteps}</div>;

    return [...before, wrappedTimeline, ...after];
  }

  return childrenArray; // Return unmodified children if no valid indices found
};

const TimelineProvider = ({ children }) => {
  // Inject the wrapper for the timeline
  const wrappedChildren = injectWrapperForTimeline({ children });

  const { frontMatter } = useDoc();
  const stepNumberRef = useRef(0); // Track step numbers
  return (
    <TimelineContext.Provider value={frontMatter || { timeline: false }}>
      <ActiveStepContext.Provider value={stepNumberRef}>
        {wrappedChildren}
      </ActiveStepContext.Provider>
    </TimelineContext.Provider>
  );
};

// Invisible component to handle directives without rendering them
const TimelineDirective = ({ command }) => {
  const stepNumberRef = useContext(ActiveStepContext);

  if (command === "start") {
    stepNumberRef.current = 1;
  } else if (command === "stop") {
    stepNumberRef.current = 0;
  }

  return null;
};

const MDXComponents = {
  wrapper: (props) => {
    const frontMatter = useContext(TimelineContext);

    return (
      <TimelineProvider>
        <div
          style={
            {
              // paddingLeft: frontMatter.timeline ? "0" : "24px",
              // marginLeft: frontMatter.timeline ? "0" : "-40px",
              // borderLeft: "2px dashed rgba(0, 0, 0, 0.2)",
              // backgroundColor: "purple",
            }
          }
        >
          {props.children}
        </div>
      </TimelineProvider>
    );
  },
  h2: (props) => {
    const frontMatter = useContext(TimelineContext);
    const stepNumberRef = useContext(ActiveStepContext);

    const childrenText = React.Children.toArray(props.children).join("").toLowerCase();

    // Handle timeline directives, without rendering them visibly
    if (childrenText.includes("timeline-start")) {
      return <TimelineDirective command="start" />;
    }
    if (childrenText.includes("timeline-stop")) {
      return <TimelineDirective command="stop" />;
    }

    // Render as a timeline tile if timeline is active
    if (frontMatter?.timeline && stepNumberRef.current > 0) {
      const currentStepNumber = stepNumberRef.current;
      stepNumberRef.current += 1;

      const id = `timeline-step-${currentStepNumber}`;
      return (
        <div>
          <TimelineTile id={id} stepNumber={currentStepNumber} isSubStep={false}>
            <h2>{props.children}</h2>
          </TimelineTile>
        </div>
      );
    }

    // Render a normal h2 if the timeline is not active
    return <h2 {...props} />;
  },
};

export default MDXComponents;
