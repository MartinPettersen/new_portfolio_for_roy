"use client";
import React from "react";
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

/*
{project.content.map(
                  (content, i) =>
                    content.content && (
                      <PortableText key={i} value={content.content} />

                    )
                )}

                */

const ProjectInfo = ({ project, setToggleDisplay }: Props) => {
  if (!project) return <p className="text-white">Laster Prosjekt...</p>;
  return (
    <div className="flex flex-col w-screen h-screen items-center justify-center">
      <div
        className="w-screen left-0 top-0 h-screen bg-slate-800/80 z-[100] fixed"
        onClick={() => setToggleDisplay(false)}
      ></div>
      <article className="bg-[url('/postcard_texture.jfif')] z-[200] w-[63%] h-[65%] flex flex-col items-center justify-center">
        <div className="flex items-center justify-evenly w-full h-[80%] ">
          <div className="w-[50%]">
          {project.content &&
                  project.content.length > 0 &&
                  project.content[0].image && (
                    <Image
                    className=" pl-4"
                    src={project.content[0].image.asset}
                    alt={project.content[0].image.alt || project.title}
                    width={400}
                    height={400}
                  />
              )}
          </div>

          <div className="h-full border-l-2"></div>
          <div className="flex flex-col w-[40%] h-full">
            <h2 className="border-b-2 font-bold text-xl border-black">
              {project.title}
            </h2>

            {project.content?.length && (
              <div className="mt-8 underline w-full">
                {project.content &&
                  project.content.length > 0 &&
                  project.content[0].content && (
                    <PortableText value={project.content[0].content} />
                  )}
              </div>
            )}
          </div>
        </div>
      </article>
      <div className="text-white mt-8 w-[63%] flex z-[200] h-[10%] items-center justify-evenly">
        <ProjectButtonLeft />
        {project.content?.length && (
          <>
            {project.content.map(
              (content, i) =>
                content.content && (
                  <ProjectCircle key={i} index={i} projectIndex={2} />
                )
            )}
          </>
        )}

        <ProjectButtonRight />
      </div>
    </div>
  );
};

export default ProjectInfo;
