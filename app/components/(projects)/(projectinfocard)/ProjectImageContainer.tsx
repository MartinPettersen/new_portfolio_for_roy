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
      <div className="flex md:mr-12 md:mt-4 w-[96%] md:w-[80%]  h-[80%] bg-[#f3e9d6] items-center justify-center inner-shadow-image-card">
        <div className=" w-full m-4 h-full">
          {project.content &&
            project.content.length > 0 &&
            project.content[projectIndex].image && (
              <Image
                className="shadow-project-image h-full w-full object-cover"
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
