/* eslint-disable spellcheck/spell-checker */
import React from "react";

const Container = ({ children, isGrid = false }) => {
  return (
    <div className={`w-full max-w-6xl mx-auto p-0 ${isGrid ? "flex flex-col gap-y-9" : ""}`}>
      {children}
    </div>
  );
};

export default Container;
