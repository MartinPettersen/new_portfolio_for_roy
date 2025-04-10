import React from "react";

type Props = {
  projectIndex: number;
  index: number;
  action: (index: number) => void;
};

const ProjectCircle = ({ projectIndex, index, action }: Props) => {
  return (
    <button
      className="w-14 h-14 bg-[#F3E9D6] inner-shadow flex items-center justify-center rounded-full scale-50"
      onClick={() => action(index)}
    >
      {projectIndex != index ? (
        <></>
      ) : (
        <div className="w-6 h-6 bg-[#8E9FB6] rounded-full"></div>
      )}
    </button>
  );
};

export default ProjectCircle;
