"use client";
import React from "react";
import { Image } from "next-sanity/image";
import { Project } from "@/types/Project";
import { PortableText } from "@portabletext/react";

type Props = {
  project: Project;
  setToggleDisplay: (value: boolean) => void;
};

const ProjectInfo = ({ project, setToggleDisplay }: Props) => {
  if (!project) return <p className="text-white">Laster Prosjekt...</p>;

  return (
    <article className="bg-black h-full flex flex-col items-center justify-center">
      <div className="text-white font-bold text-xl flex w-[90%] h-[20%] items-center justify-between">
        <h2 className="">{project.title}</h2>
        <button onClick={() => setToggleDisplay(false)}>X</button>
      </div>
      <div className="bg-white h-[70%] overflow-auto">
        <div className="">
          {project.coverimage ? (
            <Image
              className="w-full h-auto "
              src={project.coverimage}
              alt={project.title}
              width={2000}
              height={1000}
            />
          ) : null}
        </div>

        {project.content?.length && (
          <div>
            {project.content.map(
              (content, i) =>
                content.content && (
                  <PortableText key={i} value={content.content} />
                )
            )}
          </div>
        )}
      </div>
      <div className="text-white flex w-full h-[10%] items-center justify-evenly">
        <div className="w-4 h-4 bg-white rounded-full"></div>
        <div className="w-4 h-4 bg-white rounded-full"></div>
        <div className="w-4 h-4 bg-white rounded-full"></div>
        <div className="w-4 h-4 bg-white rounded-full"></div>
      </div>
    </article>
  );
};

export default ProjectInfo;
