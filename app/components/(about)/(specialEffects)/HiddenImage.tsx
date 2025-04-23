"use client"

import React, { useState } from "react";
import DrawingBoard from "./DrawingBoard";
import MusicPlayer from "./MusicPlayer";
import PinkFrog from "./PinkFrog";

const HiddenImage = () => {

    const [toggleDraw, setToggleDraw] = useState(false)


    const handleToggleDraw = () => {
        setToggleDraw(!toggleDraw)
    }

  return (
    <div onClick={handleToggleDraw} className="w-[90%]  h-[90%] md:w-[400px] md:h-[400px] z-[5] rotate-0 absolute flex items-center justify-center">
      
      {toggleDraw? 
      <>
    <DrawingBoard />
    <PinkFrog />
      </>
    :
    <>
    <MusicPlayer />
    
        </>
        }
    </div>
  );
};

export default HiddenImage;
