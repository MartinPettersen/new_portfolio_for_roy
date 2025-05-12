"use client";
import React, { useEffect, useState } from "react";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(true);

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
    <div className="fixed bottom-3 right-3 z-[9900] ">
      {isVisible && (
        <button className="" type="button" onClick={goBackToTop}>
          <svg
            className="custom-mouse-pointer"
            width="72"
            height="81"
            viewBox="0 0 72 81"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 45.6962C-1.00001 43.3868 -0.999994 37.6133 3.00001 35.3039L62.25 1.09587C66.25 -1.21353 71.25 1.67323 71.25 6.29203L71.25 74.708C71.25 79.3268 66.25 82.2136 62.25 79.9042L3 45.6962Z"
              fill="#8E9FB6"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default BackToTop;
