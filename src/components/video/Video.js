import React from "react";

const VideoPlayer = ({
  src,
  autoPlay = true,
  loop = true,
  controls = true,
  className = "w-full h-auto block",
  ...props
}) => {
  return (
    <video controls={controls} autoPlay={autoPlay} loop={loop} className={className} {...props}>
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoPlayer;
