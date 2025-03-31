"use client";
import React from "react";
import { Image } from "next-sanity/image";
import { Project } from "@/types/Project";
import { PortableText } from "@portabletext/react";
import ProjectCircle from "./ProjectCircle";

type Props = {
  project: Project;
  setToggleDisplay: (value: boolean) => void;
};

const ProjectInfo = ({ project, setToggleDisplay }: Props) => {
  if (!project) return <p className="text-white">Laster Prosjekt...</p>;
  console.log("project in projecinfo", project);
  return (
    <div className="flex flex-col w-screen h-screen items-center justify-center">
      <div
        className="w-screen left-0 top-0 h-screen bg-slate-800/80 z-[100] fixed"
        onClick={() => setToggleDisplay(false)}
      ></div>
      <article className="bg-[url('/postcard_texture.jfif')] z-[200] w-[63%] h-[65%] flex flex-col items-center justify-center">
        <div className="flex items-center justify-evenly w-full h-[70%] ">
          <div className="w-[50%]">
            {project.coverimage ? (
              <Image
                className="border-r-2 m-2 border-black pr-2"
                src={project.coverimage}
                alt={project.title}
                width={400}
                height={400}
              />
            ) : null}
          </div>

          <div className="flex flex-col w-[40%] h-full">
            <h2 className="border-b-2 font-bold text-xl border-black">
              {project.title}
            </h2>

            {project.content?.length && (
              <div className="mt-8 underline w-full">
                {project.content.map(
                  (content, i) =>
                    content.content && (
                      <PortableText key={i} value={content.content} />
                    )
                )}
              </div>
            )}
          </div>
        </div>
      </article>
      <div className="text-white mt-8 w-[63%] flex z-[200] h-[10%] items-center justify-evenly">
        <ProjectCircle index={1} projectIndex={2} />
        <ProjectCircle index={2} projectIndex={2} />
        <ProjectCircle index={3} projectIndex={2} />
        <ProjectCircle index={4} projectIndex={2} />
        <ProjectCircle index={5} projectIndex={2} />
        <ProjectCircle index={6} projectIndex={2} />
        <ProjectCircle index={7} projectIndex={2} />
        <ProjectCircle index={8} projectIndex={2} />
        <ProjectCircle index={9} projectIndex={2} />

      </div>
    </div>
  );
};

export default ProjectInfo;
