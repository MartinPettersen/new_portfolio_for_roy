import React from "react";
import ProjectNavigation from "../(project pagination)/ProjectNavigation";
import { Project } from "@/types/Project";
import { PortableText } from "@portabletext/react";
import ProjectImageContainer from "./ProjectImageContainer";
import ProjectImageContainerMobile from "./ProjectImageContainerMobile";
import ExitButton from "./ExitButton";

type Props = {
  project: Project;
  projectIndex: number;
  goback: () => void;
  nextProject: () => void;
  setToggleDisplay: (value: boolean) => void;
  goTothisIndex: (index: number) => void;
  circleIndex: number;
};
const ProjectInfoCard = ({
  project,
  projectIndex,
  goback,
  nextProject,
  goTothisIndex,
  setToggleDisplay,
  circleIndex,
}: Props) => {
  return (
    <article className="bg-[#E8D5B0] bg-svg-pattern-stain bg-center bg-no-repeat bg-contain  md:min-h-[70vh] rounded-2xl border-[1px] overflow-scroll lg:overflow-visible shadow-project-card relative z-[10000] w-[100%] md:w-[70%] p-0 flex flex-col items-center justify-start">
      <div className="z-[100] absolute w-full flex flex-none items-center justify-end p-4">
        <ExitButton setToggleDisplay={setToggleDisplay} />
      </div>
      <div className="flex items-start  w-[100%] md:h-[85%] ">
        <div className="hidden md:flex flex-none h-[100%]  items-center justify-center w-[50%] ">
          <ProjectImageContainer
            project={project}
            projectIndex={projectIndex}
          />
        </div>

        <div className="flex  items-center  py-4 md:items-start justify-center md:h-[100%] overflow-scroll lg:overflow-visible flex-col w-full md:w-[50%] ">
          <h2 className=" font-rubik text-4xl w-[80%]">
            {project.content[projectIndex].slidetitle
              ? project.content[projectIndex].slidetitle
              : null}
          </h2>
          <div className="md:hidden w-[90%] flex items-center justify-center">
            <ProjectImageContainerMobile
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
                          {project.content[projectIndex].urllabel}
                        </a>
                      ) : null}
                    </>
                  )}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="hidden md:w-full md:flex items-center justify-center md:h-[10%] ">
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
