"use client";
import React from "react";
import PaperOne from "./PaperOne";
import PaperTwo from "./PaperTwo";
import { usePathname } from "next/navigation";

const Papers = () => {
  const pathname = usePathname();
  const timer = 150;

  return (
    <div className="flex w-screen justify-center">
      <PaperOne active={pathname === "/" } timer={timer} />
      <PaperTwo active={pathname === "/about"} timer={timer} />
    </div>
  );
};

export default Papers;
