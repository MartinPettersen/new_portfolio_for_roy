"use client";
import Image from "next/image";
import React from "react";

const BigRedButton = () => {
  return (
    <div className="group custom-mouse-pointer relative w-[140px] h-[140px] md:w-[220px] md:h-[220px] xl:w-[400px] xl:h-[400px]">
      <div className=" z-[10]">
      <Image src={"/WarningButton.png"} className=" red-button-shadow" alt="red warning button" fill={true} />
      </div>
      <div className="group-hover:hidden z-[20] " >
        <Image src={"/DoNotPressButton.png"} className="" alt="red do not press button" fill={true} />

      </div>
    </div>
  );
};

export default BigRedButton;
