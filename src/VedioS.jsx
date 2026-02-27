import React from "react";
import "./VedioS.css";
import sampleVideo from "./images/01. What is React_.mp4";

function VideoComponent() {
  return (
    <section className="video-section">
      <div className="video-container">
        <video 
          src={sampleVideo} controls
          autoPlay
          loop
          muted
          className="video-player"
        />
      </div>
    </section>
  );
}

export default VideoComponent;