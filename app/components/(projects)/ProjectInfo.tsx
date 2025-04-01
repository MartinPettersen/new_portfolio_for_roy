"use client";
import React, { useState } from "react";
import { Image } from "next-sanity/image";
import { Project } from "@/types/Project";
import { PortableText } from "@portabletext/react";
import ProjectCircle from "./(project pagination)/ProjectCircle";
import ProjectButtonLeft from "./(project pagination)/ProjectButtonLeft";
import ProjectButtonRight from "./(project pagination)/ProjectButtonRight";

type Props = {
  project: Project;
  setToggleDisplay: (value: boolean) => void;
};

const ProjectInfo = ({ project, setToggleDisplay }: Props) => {
  const [projectIndex, setProjectIndex] = useState(0);

  if (!project) return <p className="text-white">Laster Prosjekt...</p>;

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
        className="w-screen h-screen bg-slate-800/80 absolute z-[9999]"
        onClick={() => setToggleDisplay(false)}
      ></div>
      <article className="bg-[url('/postcard_texture.jfif')] relative z-[10000] w-[63%] h-[65%] flex flex-col items-center justify-center">
        <div className="flex items-center justify-evenly w-[94%] h-[80%]">
          <div className="w-[50%]">
            {project.content &&
              project.content.length > 0 &&
              project.content[projectIndex].image && (
                <Image
                  className="pl-4"
                  src={project.content[projectIndex].image.asset}
                  alt={project.content[projectIndex].image.alt || project.title}
                  width={400}
                  height={400}
                />
              )}
          </div>

          <div className="h-full border-l-2 border-stone-600/70"></div>
          <div className="flex flex-col w-[40%] h-full">
            <h2 className="border-b-2 font-bold text-xl border-stone-600/70">
              {project.title}
            </h2>

            {project.content?.length && (
              <div className="mt-8 w-full text-with-underline text-stone-800/90">
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
      </article>
      <div className="text-white mt-8 w-[63%] flex z-[10000] h-[10%] items-center justify-evenly">
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
    </div>
  );
};

export default ProjectInfo;