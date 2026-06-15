import React, { useRef } from "react";
import ReactPlayer from "react-player";

export const PlayerWithControlls = () => {
  const player = useRef(null);
  return <ReactPlayer ref={player} controls src="/video/Mcdonalds-onboarding.mp4" />;
};
