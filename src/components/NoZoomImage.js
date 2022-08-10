import React from "react";

const NoZoomImage = ({ linkUrl, imageUrl, heightPX }) => (
    <a href={linkUrl}>
        <div style={{backgroundImage: "url('" + imageUrl + "')", backgroundSize: "contain", backgroundRepeat: "no-repeat", height: "" + heightPX + ""}}></div>
    </a>
);

export default NoZoomImage;