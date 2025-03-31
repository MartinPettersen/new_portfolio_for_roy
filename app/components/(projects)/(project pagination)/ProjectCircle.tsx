import React from "react";

type Props = {
  projectIndex: number;
  index: number;
  action: (index: number) => void

};

const ProjectCircle = ({ projectIndex, index, action }: Props) => {
  return projectIndex != index ? (
    <div className="w-16 h-16 bg-white rounded-full" onClick={() => action(index)}></div>
  ) : (
    <div className="w-16 h-16 bg-[#FF5757] rounded-full"></div>
  );
};

export default ProjectCircle;
