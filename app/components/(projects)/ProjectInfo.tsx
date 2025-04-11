"use client";
import React, { useState } from "react";
import { Project } from "@/types/Project";
import { PortableText } from "@portabletext/react";
import Loading from "../(loading)/Loading";
import ProjectNavigation from "./(project pagination)/ProjectNavigation";
import ProjectImageContainer from "./(projectinfocard)/ProjectImageContainer";

type Props = {
  project: Project;
  setToggleDisplay: (value: boolean) => void;
};

const ProjectInfo = ({ project, setToggleDisplay }: Props) => {
  const [projectIndex, setProjectIndex] = useState(0);
  console.log(project);

  if (!project || !project.content) return <Loading />;

  const totalSlides = project.content.length;

  const getCircleIndex = (currentIndex: number) => {
    if (totalSlides <= 7) {
      return currentIndex;
    }

    if (currentIndex < 6) {
      return currentIndex;
    } else if (currentIndex === totalSlides - 1) {
      return 6;
    } else {
      return 5;
    }
  };

  const goback = () => {
    if (projectIndex > 0) {
      setProjectIndex(projectIndex - 1);
    }
  };

  const nextProject = () => {
    console.log("projectIndex", projectIndex + 1);
    console.log("project.content.length", project.content.length);

    if (projectIndex < totalSlides - 1) {
      setProjectIndex(projectIndex + 1);
    }
  };

  const goTothisIndex = (index: number) => {
    setProjectIndex(index);
  };

  const circleIndex = getCircleIndex(projectIndex);

  return (
    <div className="fixed inset-0 z-[10000] flex flex-col w-screen h-screen items-center justify-center">
      <div
        className="w-screen h-screen bg-[#D9D9D92B] backdrop-blur-sm absolute z-[9999]"
        onClick={() => setToggleDisplay(false)}
      ></div>
      <article className="bg-[#E8D5B0] h-[80%] rounded-2xl border-[1px] shadow-project-card relative z-[10000] w-[393px] md:w-[70%] p-0 flex flex-col items-center justify-center">
        <div className="flex items-center  justify-evenly w-[100%] h-[90%] ">
          <div className="hidden md:block w-[53%] ">
            <ProjectImageContainer
              project={project}
              projectIndex={projectIndex}
            />
          </div>

          <div className="flex items-start justify-center md:h-[84%]  flex-col w-full md:w-[45%] ">
            <h2 className=" font-rubik text-4xl">
              {project.content[projectIndex].slidetitle
                ? project.content[projectIndex].slidetitle
                : null}
            </h2>
            <div className="md:hidden w-full">
              <ProjectImageContainer
                project={project}
                projectIndex={projectIndex}
              />
            </div>
            <div className="flex items-center justify-center w-[90%] ">
              {project.content?.length && (
                <div className="mt-8 w-full font-work-sans text-stone-800/90">
                  {project.content &&
                    project.content.length > 0 &&
                    project.content[projectIndex]?.content && (
                      <>
                        <PortableText
                          value={project.content[projectIndex].content}
                        />
                          {project.content[projectIndex].url
                            ? 
                        <a href={project.content[projectIndex].url} className="font-space-mono underline italic font-rubik ">
                            {project.content[projectIndex].url}
                        </a>
                            : null}
                      </>
                    )}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="text-white my-0 w-[63%] flex z-[10000] h-[10%] items-center justify-evenly"></div>
        <ProjectNavigation
          project={project}
          nextProject={nextProject}
          goTothisIndex={goTothisIndex}
          goback={goback}
          projectIndex={circleIndex}
        />
      </article>
    </div>
  );
};

export default ProjectInfo;
