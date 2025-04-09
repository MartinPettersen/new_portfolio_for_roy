import { Project } from "@/types/Project";
import React from "react";
import { Image } from "next-sanity/image";

type Props = {
  project: Project;
  projectIndex: number;
};

const ProjectImageContainer = ({ project, projectIndex }: Props) => {
  return (
    <>
      {project.content &&
        project.content.length > 0 &&
        project.content[projectIndex].image && (
          <Image
            className="pl-4 "
            src={project.content[projectIndex].image.asset}
            alt={project.content[projectIndex].image.alt || project.title}
            width={588}
            height={493}
          />
        )}
    </>
  );
};

export default ProjectImageContainer;
