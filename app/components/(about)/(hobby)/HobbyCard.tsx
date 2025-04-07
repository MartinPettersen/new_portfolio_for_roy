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
    let num = Math.floor(Math.random() * 7) + 1;
    num *= Math.round(Math.random()) ? 1 : -1
    setRandomNumber(num);
  }, []);

  return (
    <div className="flex w-[384px]  h-[388px] bg-[#F3E9D6] items-center justify-center">
      {hobby.image && (randomNumber > -100) ? (
        <Image
          className={`svg-shadow`}
          style={{ transform: `rotate(${randomNumber}deg)` }}
          src={hobby.image}
          alt="hobby image"
          width={315}
          height={315}
        />
      ) : null}
      {randomNumber}
    </div>
  );
};

export default HobbyCard;
