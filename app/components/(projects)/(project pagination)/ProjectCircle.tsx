import React from "react";

type Props = {
  projectIndex: number;
  index: number;
  action: (index: number) => void;
};

const ProjectCircle = ({ projectIndex, index, action }: Props) => {
  return (
    <button
      className="aspect-square w-14 max-w-full bg-[#F3E9D6] inner-shadow flex items-center justify-center rounded-full scale-50"
      onClick={() => action(index)}
    >
      {projectIndex != index ? (
        <></>
      ) : (
        <div className=" aspect-square w-6 bg-[#8E9FB6] rounded-full"></div>
      )}
    </button>
  );
};

export default ProjectCircle;
