"use client"

import React, { useState } from "react";
import Image from "next/image";
import DrawingBoard from "./DrawingBoard";

const HiddenImage = () => {

    const [toggleDraw, setToggleDraw] = useState(false)


    const handleToggleDraw = () => {
        setToggleDraw(!toggleDraw)
    }

  return (
    <div onClick={handleToggleDraw} className="w-[90%] custom-mouse-pointer h-[90%] md:w-[400px] md:h-[400px] z-[5] rotate-0 absolute flex items-center justify-center">
      
      {toggleDraw? 
      
    <DrawingBoard />:
    <Image
        className="w-full h-full shadow-project-image"
        src="/pinkFrog.png"
        alt="Pink frog"
        width={400}
        height={400}
      />}
    </div>
  );
};

export default HiddenImage;
