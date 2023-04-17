import React from "react";
import drone from "../../img/drone.mp4";

const video = () => {
  return (
    <div>
      <video className="video" src={drone} autoPlay loop muted></video>
    </div>
  );
};

export default video;
