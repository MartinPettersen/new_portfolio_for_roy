import React from "react";
import ProjectNavigation from "../(project pagination)/ProjectNavigation";
import { Project } from "@/types/Project";
import { PortableText } from "@portabletext/react";
import ProjectImageContainer from "./ProjectImageContainer";

type Props = {
  project: Project;
  projectIndex: number;
  goback: () => void;
  nextProject: () => void;
  goTothisIndex: (index: number) => void;
  circleIndex: number;
};
const ProjectInfoCard = ({
  project,
  projectIndex,
  goback,
  nextProject,
  goTothisIndex,
  circleIndex,
}: Props) => {
  return (
    <article className="bg-[#E8D5B0]   md:h-[80vh] rounded-2xl border-[1px] overflow-scroll shadow-project-card relative z-[10000] w-[100%] md:w-[70%] p-0 flex flex-col items-center justify-center">
      <div className="flex items-center  justify-evenly w-[100%] md:h-[90%] ">
        <div className="hidden md:block w-[53%] ">
          <ProjectImageContainer
            project={project}
            projectIndex={projectIndex}
          />
        </div>

        <div className="flex items-center py-4 md:items-start justify-center md:h-[84%] overflow-scroll flex-col w-full md:w-[45%] ">
          <h2 className=" font-rubik text-4xl text-center ">
            {project.content[projectIndex].slidetitle
              ? project.content[projectIndex].slidetitle
              : null}
          </h2>
          <div className="md:hidden w-[90%]">
            <ProjectImageContainer
              project={project}
              projectIndex={projectIndex}
            />
          </div>
          <div className="flex flex-col items-center justify-center w-[90%] ">
            <div className="w-full flex  md:hidden items-center justify-center">
              <ProjectNavigation
                project={project}
                nextProject={nextProject}
                goTothisIndex={goTothisIndex}
                goback={goback}
                projectIndex={circleIndex}
              />
            </div>
            {project.content?.length && (
              <div className="md:mt-8 w-full text-sm md:text-2xl paragraph font-work-sans text-stone-800/90">
                {project.content &&
                  project.content.length > 0 &&
                  project.content[projectIndex]?.content && (
                    <>
                      <PortableText
                        value={project.content[projectIndex].content}
                      />
                      {project.content[projectIndex].url ? (
                        <a
                          href={project.content[projectIndex].url}
                          className="font-space-mono underline italic font-rubik "
                        >
                          {project.content[projectIndex].url}
                        </a>
                      ) : null}
                    </>
                  )}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="text-white my-0 w-[63%] flex z-[10000] h-[10%] items-center justify-evenly"></div>
      <div className="hidden md:w-full md:flex items-center justify-center">
        <ProjectNavigation
          project={project}
          nextProject={nextProject}
          goTothisIndex={goTothisIndex}
          goback={goback}
          projectIndex={circleIndex}
        />
      </div>
    </article>
  );
};

export default ProjectInfoCard;
