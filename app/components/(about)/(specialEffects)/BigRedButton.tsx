"use client";
import React from "react";

const BigRedButton = () => {
  return (
    <div className="group custom-mouse-pointer">
      <div className="hidden group-hover:block">BigRedButton</div>
      <div className="group-hover:hidden" >BigBlueButton</div>
    </div>
  );
};

export default BigRedButton;
