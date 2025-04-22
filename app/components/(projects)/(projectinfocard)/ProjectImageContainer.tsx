import { Project } from "@/types/Project";
import React from "react";
import { Image } from "next-sanity/image";

type Props = {
  project: Project;
  projectIndex: number;
};

const ProjectImageContainer = ({ project, projectIndex }: Props) => {
  return (
    <div className=" md:pt-4 flex items-center justify-center">
      <div className="flex md:mr-12 md:mt-4 w-[96%] md:w-[80%]  h-[80%] bg-[#F3E9D6] items-center justify-center inner-shadow-image-card">
        <div className=" w-[90%] m-8 h-[60%]">

        {project.content &&
          project.content.length > 0 &&
          project.content[projectIndex].image && (
            <Image
            className="shadow-project-image  object-scale-down"
              src={project.content[projectIndex].image.asset}
              alt={project.content[projectIndex].image.alt || project.title}
              width={450}
              height={450}
              
              />
            )}
            </div>
      </div>
    </div>
  );
};

export default ProjectImageContainer;
