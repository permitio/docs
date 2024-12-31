import React from "react";

const TimelineStep = ({ stepNumber, children }) => (
  <div
    style={{
      marginBottom: "50px",
      position: "relative",
    }}
  >
    <div
      style={{
        width: "30px",
        height: "30px",
        borderRadius: "50%",
        backgroundColor: "#FA934E",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontWeight: "bold",
        position: "absolute",
        left: "0",
        marginLeft: "-16px",
      }}
    >
      {stepNumber}
    </div>
    <div style={{ marginLeft: "40px" }}>{children}</div>
  </div>
);

export default TimelineStep;
