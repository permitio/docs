import React from "react";
import ReactPlayer from "react-player";
import { useRef } from "react";

export const PlayerWithControlls = () => {
  let player = useRef(null);
  return(
    <>
      <ReactPlayer
        controls
        ref={(p) => {
          player = p;
        }}
        url="/video/Mcdonalds-onboarding.mp4"
      />
      {/* <a onClick={() => player.seekTo(12.7)}>Seek to 12.7</a> */}
    </>
  );
};
