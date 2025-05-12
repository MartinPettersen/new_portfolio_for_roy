"use client";
import React, { useEffect, useState } from "react";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const goBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleVisibility = () => {
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-3 w-screen flex justify-center items-center z-[9900] ">
      {isVisible && (
        <button className="group" type="button" onClick={goBackToTop}>
          <svg
            className={
              "svg-shadow custom-mouse-pointer transition-colors scale-50 group-hover:scale-60"
            }
            width="55"
            height="58"
            viewBox="0 0 55 58"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="transition-colors fill-[#90CCC5] group-hover:fill-[#1D6B62]"
              d="M23.9469 2.4421C25.5261 -0.81404 29.4739 -0.814031 31.0531 2.44211L54.4442 50.6737C56.0234 53.9298 54.0494 58 50.8911 58L4.10886 58C0.950565 58 -1.02336 53.9298 0.555786 50.6737L23.9469 2.4421Z"
              fill="#90CCC5"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default BackToTop;
