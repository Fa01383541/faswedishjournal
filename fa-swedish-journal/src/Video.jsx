/* eslint-disable no-unused-vars */
import React ,{useState}from "react";
import YouTube from 'react-youtube';
import './Video.css'

function Video(){
    const[activeCategory,setActiveCategory]=useState(null)
    return (
    <>
        <h2 className='title'>Videos</h2>
    <div className="allw">
        <div className="vid-categ">
        <h3 className="largevidtitle" onClick={()=>setActiveCategory('long')}>Videos Largos</h3>
        <h3 className="shortvidtitle" onClick={()=>setActiveCategory('short')}>Videos Cortos</h3>
        </div>
        <div className="videogrid">
        {activeCategory === 'long' && <LongVideos/>}
        {activeCategory === 'short' && <ShortVideos/>}
        </div>
    </div>
    </>
    );
}

function LongVideos(){
    const videoIds = ['R_YNKPKblG4','mt_72rArhao','vanqII4l3lo','N5he-mxIsEI'];
   return (
    <div className="videogrid">
      {videoIds.map(id => (
        <YouTube key={id}videoId={id} className="longvideos"/>
      ))}
    </div>
  );
}

function ShortVideos() {
  const videoIds = ['L2INejsCW3w'];

  return (
    <div className="videogrid">
      {videoIds.map(id => (
        <YouTube key={id}videoId={id} className="shortvideos"/>
      ))}
    </div>
  );
}

export default Video;