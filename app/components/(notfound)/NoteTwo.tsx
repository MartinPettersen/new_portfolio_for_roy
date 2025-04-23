import React from "react";

type Props = {
  label: string;
  index: number;
};

const NoteTwo = ({ label, index }: Props) => {
  return (
    <div className="w-[468px] h-[451px] relative flex items-center justify-center">
      <svg
        className="absolute"
        style={{
          zIndex: index,
        }}
        width="408"
        height="393"
        viewBox="0 0 408 393"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.393269 0C0.393269 141.586 -4.01895 306.549 16.7143 381.973L386.384 357.273C366.533 277.438 388.149 122.796 386.384 0H0.393269Z"
          fill="#2F2F2F"
          fillOpacity="0.16"
        />
        <path
          d="M0.393269 0C0.393269 141.586 13.1862 317.576 33.9194 393L408 362.566C388.149 282.731 388.149 122.796 386.384 0H0.393269Z"
          fill="#F05D7E"
        />
        <foreignObject x="10" y="0" width="380" height="393">
        <div className="text-center w-full text-[28px] h-full overflow-hidden break-after-auto  font-permanent-marker flex items-center justify-center">{label}</div>

        </foreignObject>
      </svg>
    </div>
  );
};

export default NoteTwo;
