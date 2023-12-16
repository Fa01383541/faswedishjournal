/* eslint-disable no-unused-vars */
import React from "react";
import YouTube from 'react-youtube';
import './Video.css'

function Video(){
    return (
    <>
    <div className="allw">
        <h2 className='title'>Video</h2>
        <div className="largevidw">
        <h3 className="largevidtitle">Videos Largos</h3>
        <LongVideos />
        </div>
        <div className="shortvidw">
            <h3 className="shortvidtitle">Videos Cortos</h3>
            <ShortVideos />
        </div>
    </div>
    </>
    );
}

function LongVideos(){
    const videoIds = ['R_YNKPKblG4'];
   return (
    <div>
      {videoIds.map(id => (
        <YouTube key={id}videoId={id} className="longvideos"/>
      ))}
    </div>
  );
}

function ShortVideos() {
  const videoIds = ['L2INejsCW3w'];

  return (
    <div>
      {videoIds.map(id => (
        <YouTube key={id}videoId={id} className="shortvideos"/>
      ))}
    </div>
  );
}

export default Video;