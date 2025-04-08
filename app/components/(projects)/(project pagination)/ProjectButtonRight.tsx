import React from "react";

type Props = {
  action: () => void;
};

const ProjectButtonRight = ({ action }: Props) => {
  return <div className="group inline-block">
    <svg className={" svg-shadow hover:cursor-pointer transition-colors group-hover:scale-120"} onClick={() => action()} width="72" height="81" viewBox="0 0 72 81" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M69 35.3038C73 37.6133 73 43.3867 69 45.6961L9.74998 79.9041C5.74998 82.2135 0.749988 79.3268 0.749989 74.708L0.749992 6.29198C0.749992 1.67318 5.74999 -1.21356 9.74999 1.09584L69 35.3038Z" 
className="transition-colors fill-[#8E9FB6] group-hover:fill-[#264773]"/>
</svg>

  </div>
};

export default ProjectButtonRight;
