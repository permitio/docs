import React from "react";

const Hr = ({ title, color }) => {
  return (
    <div className="relative flex items-center w-full my-6">
      <span
        className="px-4  text-pm-text-muted font-semibold text-lg tracking-wide uppercase"
        style={{ color }}
      >
        {title}
      </span>
      <div className="flex-1 bg-pm-border h-px"></div>
    </div>
  );
};

export default Hr;
