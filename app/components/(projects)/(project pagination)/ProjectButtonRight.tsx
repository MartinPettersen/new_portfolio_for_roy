import React from "react";

type Props = {
  action: () => void;
};

const ProjectButtonRight = ({ action }: Props) => {
  return <svg className={" rotate-180 svg-shadow "} onClick={() => action()}  width="72" height="81" viewBox="0 0 72 81" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M2.99999 45.6962C-1.00001 43.3867 -1 37.6133 3 35.3039L62.25 1.09585C66.25 -1.21355 71.25 1.6732 71.25 6.292L71.25 74.708C71.25 79.3268 66.25 82.2136 62.25 79.9042L2.99999 45.6962Z" fill="#8E9FB6"/>
  </svg>
};

export default ProjectButtonRight;
