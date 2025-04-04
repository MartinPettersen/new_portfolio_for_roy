import React from "react";

type Props = {
  label: string;
  index: number;
};

const OrangeNote = ({ label, index }: Props) => {
  return (
    <div className="w-[463px] h-[446px] relative flex items-center justify-center">
      <svg
        className="absolute"
        style={{
          zIndex: index,
        }}
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
          fill="#FFAA75"
        />

        <foreignObject x="50" y="150" width="363" height="146">
          <div className="text-center  font-permanent-marker">{label}</div>
        </foreignObject>
      </svg>
    </div>
  );
};

export default OrangeNote;
