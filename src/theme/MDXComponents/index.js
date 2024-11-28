import React, { useState, useContext, useEffect } from "react";
import TimelineTile from "../../components/timeline/TimelineTile";
import { useDoc } from "@docusaurus/theme-common/internal";

// Context for holding front matter and active step
const TimelineContext = React.createContext({ timeline: false });
const ActiveStepContext = React.createContext();

const TimelineProvider = ({ children }) => {
  const { frontMatter } = useDoc();
  return (
    <TimelineContext.Provider value={frontMatter || { timeline: false }}>
      <ActiveStepContext.Provider value={useState(1)}>{children}</ActiveStepContext.Provider>
    </TimelineContext.Provider>
  );
};

const MDXComponents = {
  wrapper: (props) => <TimelineProvider>{props.children}</TimelineProvider>,
  h2: (props) => {
    const frontMatter = useContext(TimelineContext);
    const [stepNumber, setStepNumber] = useContext(ActiveStepContext);

    // Detect if the current h2 is a "timeline-start"
    const childrenText = React.Children.toArray(props.children).join("");
    useEffect(() => {
      if (frontMatter?.timeline && childrenText.toLowerCase().includes("timeline-start")) {
        setStepNumber(1);
      }
    }, [frontMatter, childrenText, setStepNumber]);

    if (frontMatter?.timeline && !childrenText.toLowerCase().includes("timeline-start")) {
      const id = `timeline-step-${stepNumber}`;
      return (
        <TimelineTile id={id} stepNumber={stepNumber} isSubStep={false}>
          <h3>{props.children}</h3>
        </TimelineTile>
      );
    }

    return <h2 {...props} />;
  },
  h3: (props) => {
    const frontMatter = useContext(TimelineContext);
    const [stepNumber, setStepNumber] = useContext(ActiveStepContext);

    useEffect(() => {
      if (frontMatter?.timeline) {
        setStepNumber((prev) => prev + 1);
      }
    }, [frontMatter, setStepNumber]);

    if (frontMatter?.timeline) {
      const id = `timeline-substep-${stepNumber}`;
      return (
        <TimelineTile id={id} stepNumber={stepNumber} isSubStep={true}>
          <h3>{props.children}</h3>
        </TimelineTile>
      );
    }

    return <h3 {...props} />;
  },
  p: (props) => {
    const frontMatter = useContext(TimelineContext);

    if (frontMatter?.timeline) {
      return <div className="timeline-paragraph">{props.children}</div>;
    }

    return <p {...props} />;
  },
};

export default MDXComponents;
