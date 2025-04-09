"use client";
import React, { useState } from "react";
import { Image } from "next-sanity/image";
import { Project } from "@/types/Project";
import { PortableText } from "@portabletext/react";
import ProjectCircle from "./(project pagination)/ProjectCircle";
import ProjectButtonLeft from "./(project pagination)/ProjectButtonLeft";
import ProjectButtonRight from "./(project pagination)/ProjectButtonRight";
import Loading from "../(loading)/Loading";

type Props = {
  project: Project;
  setToggleDisplay: (value: boolean) => void;
};

const ProjectInfo = ({ project, setToggleDisplay }: Props) => {
  const [projectIndex, setProjectIndex] = useState(0);
  console.log(project)


  if (!project || !project.content) return <Loading />;

  const goback = () => {
    if (projectIndex > 0) {
      setProjectIndex(projectIndex - 1);
    } else {
      setProjectIndex(0);
    }
  };

  const nextProject = () => {
    if (projectIndex < project.content.length - 1) {
      setProjectIndex(projectIndex + 1);
    }
  };

  const goTothisIndex = (index: number) => {
    setProjectIndex(index);
  };


  return (
    <div className="fixed inset-0 z-[10000] flex flex-col w-screen h-screen items-center justify-center">
      <div
        className="w-screen h-screen bg-[#D9D9D92B] backdrop-blur-sm absolute z-[9999]"
        onClick={() => setToggleDisplay(false)}
      ></div>
      <article className="bg-[#E8D5B0] min-h-[400px] rounded-2xl border-[1px] shadow-project-card relative z-[10000] w-[393px] p-2 flex flex-col items-center justify-center">
        <div className="flex items-center justify-evenly w-[100%] h-[80%] ">
          <div className="hidden md:block w-[50%]">
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
          </div>

          <div className="flex items-center justify-center  md:h-[84%]  flex-col w-full md:w-[40%] ">
            <h2 className="font-bold font-rubik text-xl border-stone-600/70">
              {project.content[projectIndex].slidetitle? 
                project.content[projectIndex].slidetitle : null
              }
            </h2>
            <div className="md:hidden w-full">
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
          </div>
            {project.content?.length && (
              <div className="mt-8 w-full font-work-sans text-stone-800/90">
                {project.content &&
                  project.content.length > 0 &&
                  project.content[projectIndex]?.content && (
                    <PortableText
                      value={project.content[projectIndex].content}
                    />
                  )}
              </div>
            )}
          </div>
        </div>
      <div className="text-white my-2 w-[63%] flex z-[10000] h-[10%] items-center justify-evenly">
        <ProjectButtonLeft action={goback} />
        {project.content?.length && (
          <>
            {project.content.map(
              (content, i) =>
                content.content && (
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
      </article>

    </div>
  );
};

export default ProjectInfo;