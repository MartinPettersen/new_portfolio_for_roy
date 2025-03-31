import React from "react";

type Props = {
  projectIndex: number;
  index: number;
};

const ProjectCircle = ({ projectIndex, index }: Props) => {
  return projectIndex != index ? (
    <div className="w-16 h-16 bg-white rounded-full"></div>
  ) : (
    <div className="w-16 h-16 bg-red-600 rounded-full"></div>
  );
};

export default ProjectCircle;
