import React from "react";

type Props = {
  label: string;
  index: number;
};

const NoteOne = ({ label, index }: Props) => {
  return (
    <div className="w-[468px] h-[451px] relative flex items-center justify-center">
      
      <svg 
      className="absolute"
      style={{
        zIndex: index,
      }}
      width="384" height="373" viewBox="0 0 384 373" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.370136 0C0.370136 134.38 -3.78254 290.948 15.7311 362.534L363.656 339.091C344.973 263.319 365.317 116.547 363.656 0H0.370136Z" fill="#2F2F2F" fillOpacity="0.16"/>
<path d="M0.370136 0C0.370136 134.38 12.4105 301.414 31.9242 373L384 344.114C365.317 268.342 365.317 116.547 363.656 0H0.370136Z" fill="#FFAA75"/>

<foreignObject x="0" y="0" width="374" height="373">
        <div className="text-center w-full text-[64px] h-full overflow-hidden break-all  font-permanent-marker flex items-center justify-center">{label}</div>

        </foreignObject>
</svg>

    </div>
  );
};

export default NoteOne;
