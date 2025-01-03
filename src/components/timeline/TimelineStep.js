import React from "react";

const TimelineStep = ({ stepNumber, children }) => (
  <div className="mb-12 relative">
    <div className="w-8 h-8 rounded-full bg-orange-500 flex justify-center items-center text-white font-bold absolute left-0 -ml-4">
      {stepNumber}
    </div>
    <div className="ml-10">{children}</div>
  </div>
);

export default TimelineStep;
