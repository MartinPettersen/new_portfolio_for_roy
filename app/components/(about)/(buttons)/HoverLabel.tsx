"use client"
import React, { useEffect, useState } from "react";

type Props = {
  hoverLabel: string;
};

const HoverLabel = ({ hoverLabel }: Props) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      setCursorPosition({ x: e.clientX - 167, y: e.clientY + scrollY - 161 });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className={`z-2 text-sm font-space-mono font-normal absolute hidden group-hover:flex px-2  text-[#F7F7F7] bg-black border-[1px] border-[#F7F7F7]`}
      style={{
        left: `${cursorPosition.x + 170}px`, 
        top: `${cursorPosition.y  - 120}px`,
      }}
    >
      {hoverLabel}
    </div>
  );
};

export default HoverLabel;
