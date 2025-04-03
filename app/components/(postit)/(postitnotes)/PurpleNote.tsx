import React from "react";

type Props = {
  label: string;
};

const PurpleNote = ({ label }: Props) => {
  return (
    <div className="w-[463px] h-[446px] flex items-center justify-center">
      <div className="relative z-20 font-permanent-marker">{label}</div>
      <svg
        className="fixed z-10"
        width="463"
        height="446"
        viewBox="0 0 463 446"
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
      </svg>
    </div>
  );
};

export default PurpleNote;
