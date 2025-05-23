import React from "react";
import HoverLabel from "./HoverLabel";

type Props = {
  url: string;
  label: string;
};

const LinkButton = ({ url, label }: Props) => {
  return (
    <a target="_blank" href={url} rel="noopener noreferrer" className="group">
      <div
        className={`py-2 px-4 font-space-mono
          text-[12px] md:text-2xl flex md:inline-flex items-center justify-center custom-mouse-pointer bg-[#F3E9D6]  hover:bg-[#9E9178] hover:font-bold hover:text-white inner-shadow-button`}
          >
        {label}
      <HoverLabel hoverLabel={"Open Linkedin"}/>
      </div>

    </a>
  );
};

export default LinkButton;
