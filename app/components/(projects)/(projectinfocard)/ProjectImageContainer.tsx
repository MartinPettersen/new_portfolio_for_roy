import { Project } from "@/types/Project";
import React from "react";
import { Image } from "next-sanity/image";

type Props = {
  project: Project;
  projectIndex: number;
};

const ProjectImageContainer = ({ project, projectIndex }: Props) => {
  return (
    <div className=" pt-4 flex items-center">
      <div className="flex ml-4 mt-4   w-[80%]  h-[80%] bg-[#F3E9D6] items-center justify-center inner-shadow-image-card">
        {project.content &&
          project.content.length > 0 &&
          project.content[projectIndex].image && (
            <Image
              className="shadow-project-image  w-[90%]  h-[90%] object-scale-down"
              src={project.content[projectIndex].image.asset}
              alt={project.content[projectIndex].image.alt || project.title}
              width={450}
              height={450}
              
            />
          )}
      </div>
    </div>
  );
};

export default ProjectImageContainer;
