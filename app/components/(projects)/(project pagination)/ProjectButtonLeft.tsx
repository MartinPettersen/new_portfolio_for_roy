import React from "react";

type Props = {
  action: () => void;
};

const ProjectButtonLeft = ({ action }: Props) => {
  return (
    <svg
      onClick={() => action()}
      width="100"
      height="117"
      viewBox="0 0 100 117"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.93005e-07 58.5L99.75 0.909311L99.75 116.091L7.93005e-07 58.5Z"
        fill="#FF5757"
      />
    </svg>
  );
};

export default ProjectButtonLeft;
