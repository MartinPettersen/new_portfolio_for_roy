import React from "react";
import PostItLabel from "./PostItLabel";

type Props = {
  label: string;
  index: number;
};

const PinkNote = ({ label, index }: Props) => {
  return (
    <div className="w-[167px] h-[161px] relative flex items-center justify-center">
      <svg
        className="absolute"
        style={{
          zIndex: index,
        }}
        width="167"
        height="161"
        viewBox="0 0 167 161"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.160971 0C0.160971 58.0034 -1.64501 125.584 6.84139 156.483L158.152 146.364C150.027 113.658 158.875 50.3057 158.152 0H0.160971Z"
          fill="#2F2F2F"
          fillOpacity="0.16"
        />
        <path
          d="M0.160971 0C0.160971 58.0034 5.39729 130.101 13.8837 161L167 148.532C158.875 115.826 158.875 50.3057 158.152 0H0.160971Z"
          fill="#F05D7E"
        />
        <foreignObject x="0" y="0" width="160" height="161">
          <PostItLabel label={label} />
        </foreignObject>
      </svg>
    </div>
  );
};

export default PinkNote;
