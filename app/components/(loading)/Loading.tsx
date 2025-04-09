"use client";
import React from "react";

import { Typewriter } from "react-simple-typewriter";


const Loading = () => {
  return (
    <div className="w-[167px] h-[161px] p-4 m-4 flex items-center justify-center">
      <svg
        className=" "
        width="167"
        height="161"
        viewBox="0 0 167 161"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.44575 0C0.44575 160.5 -4.55526 347.5 18.9447 433L437.946 405C415.446 314.5 439.946 139.2 437.946 0H0.44575Z"
          fill="#2F2F2F"
          fillOpacity="0.16"
        />
        <path
          d="M0.44575 0C0.44575 160.5 14.9458 360 38.4458 445.5L462.446 411C439.946 320.5 439.946 139.2 437.946 0H0.44575Z"
          fill="#5A4B89"
        />
        <foreignObject x="0" y="70" width="167" height="161">
          <div className="text-center  font-permanent-marker">
            <span>Loading&nbsp;</span>
            <span className="min-w-4 inline-block text-left">
              <Typewriter
                words={["..."]}
                loop={true}
                cursor
                cursorStyle=""
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </div>
        </foreignObject>
      </svg>
    </div>
  );
};

export default Loading;
