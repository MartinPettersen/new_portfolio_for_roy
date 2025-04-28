"use client"

import React, { useState } from "react";
import DrawingBoard from "./DrawingBoard";
import MusicPlayer from "./MusicPlayer";
import PinkFrog from "./PinkFrog";

type Props = {
 hasPlayed:boolean;
 setHasPlayed: React.Dispatch<React.SetStateAction<boolean>> 
}

const HiddenImage = ({hasPlayed, setHasPlayed}: Props) => {

    const [toggleDraw, setToggleDraw] = useState(false)


    const handleToggleDraw = () => {
        setToggleDraw(!toggleDraw)
        setHasPlayed(true)
    }

  return (
    <div onClick={handleToggleDraw} className="w-[90%]  h-[90%] md:w-[400px] md:h-[400px] z-[5] rotate-0 absolute flex items-center justify-center">
      
      {toggleDraw ? 
      <>
    <DrawingBoard />
    <PinkFrog />
      </>
    :
    <>
    <MusicPlayer hasPlayed={hasPlayed} />
    
        </>
        }
    </div>
  );
};

export default HiddenImage;
