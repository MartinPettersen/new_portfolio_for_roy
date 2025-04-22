"use client";
import { Hobby } from "@/types/Hobby";
import React, { useEffect, useState } from "react";
import { Image } from "next-sanity/image";

type Props = {
  hobby: Hobby;
};

const HobbyCard = ({ hobby }: Props) => {
  const [randomNumber, setRandomNumber] = useState(-100);

  useEffect(() => {
    let num = Math.floor(Math.random() * 2) + 1;
    num *= Math.round(Math.random()) ? 1 : -1;
    setRandomNumber(num);
  }, []);

  return (
    <div className="flex w-[163px]  h-[165px] md:w-[384px]  md:h-[388px] bg-[#F3E9D6] items-center justify-center inner-shadow-image-card">
      {hobby.image && randomNumber > -100 ? (
        <div className="flex items-center relative justify-center w-[94%] h-[94%]">
          <Image
            className={`shadow-project-image  object-contain `}
            style={{ transform: `rotate(${randomNumber}deg)` }}
            fill={true}
            src={hobby.image}
            alt="hobby image"
            sizes=""
          />
        </div>
      ) : null}
    </div>
  );
};

export default HobbyCard;
