import React from "react";

type Props = {
  action: () => void;
};

const ProjectButtonRight = ({ action }: Props) => {
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
        d="M100 58.5L0.249995 116.091L0.25 0.909305L100 58.5Z"
        fill="#FF5757"
      />
    </svg>
  );
};

export default ProjectButtonRight;
