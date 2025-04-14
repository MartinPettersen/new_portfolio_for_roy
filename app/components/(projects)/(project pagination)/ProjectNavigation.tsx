import React from "react";
import ProjectButtonLeft from "./ProjectButtonLeft";
import ProjectCircle from "./ProjectCircle";
import ProjectButtonRight from "./ProjectButtonRight";
import { Project } from "@/types/Project";

type Props = {
  projectIndex: number;
  project: Project;
  goback: () => void;
  nextProject: () => void;
  goTothisIndex: (index: number) => void;
};

const ProjectNavigation = ({
  projectIndex,
  project,
  goback,
  nextProject,
  goTothisIndex,
}: Props) => {
  return (
    <div className="text-white md:my-3 md:py-3 w-[100%] md:w-[43%] flex z-[10000] md:h-[10%] items-center justify-evenly">
      <ProjectButtonLeft action={goback} />
      {project.content?.length && (
        <>
          {Array.from({ length: Math.min(project.content.length, 7) }).map(
            (_, i) => (
              <ProjectCircle
                action={goTothisIndex}
                key={i}
                index={i}
                projectIndex={projectIndex}
              />
            )
          )}
        </>
      )}
      <ProjectButtonRight action={nextProject} />
    </div>
  );
};

export default ProjectNavigation;
