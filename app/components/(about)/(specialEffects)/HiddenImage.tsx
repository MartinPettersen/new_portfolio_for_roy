import React from "react";
import Image from "next/image";

const HiddenImage = () => {
  return (
    <div className="w-[90%] h-[90%] md:w-[400px] md:h-[400px] z-[5] rotate-3 absolute flex items-center justify-center">
      <Image
        className="w-full h-full shadow-project-image"
        src="/pinkFrog.png"
        alt="Pink frog"
        width={400}
        height={400}
      />
    </div>
  );
};

export default HiddenImage;
