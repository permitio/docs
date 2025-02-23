import React from "react";

const Hr = ({ title, color }) => {
  return (
    <div className="relative flex items-center w-full my-6">
      <span
        className="px-4  text-[#6B4F4B] font-semibold text-lg tracking-wide uppercase"
        style={{ color }}
      >
        {title}
      </span>
      <div className="flex-1 bg-[#D1B9B0] h-px"></div>
    </div>
  );
};

export default Hr;
