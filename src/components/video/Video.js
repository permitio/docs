import React from "react";

const VideoPlayer = ({
  src,
  autoPlay = true,
  loop = true,
  controls = true,
  className = "w-full h-full block",
  ...props
}) => {
  const isYouTubeLink = (url) => {
    try {
      const parsedUrl = new URL(url);
      return parsedUrl.hostname.includes("youtube.com") || parsedUrl.hostname.includes("youtu.be");
    } catch (e) {
      return false;
    }
  };

  if (isYouTubeLink(src)) {
    const embedUrl = src.includes("youtube.com")
      ? src.replace("watch?v=", "embed/")
      : src.replace("youtu.be/", "youtube.com/embed/");

    return (
      <div className={`relative ${className}`} style={{ paddingTop: "56.25%" }}>
        <iframe
          src={embedUrl}
          title="YouTube video"
          className="absolute top-0 left-0 w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          {...props}
        ></iframe>
      </div>
    );
  }

  return (
    <video controls={controls} autoPlay={autoPlay} loop={loop} className={className} {...props}>
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoPlayer;
