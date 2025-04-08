"use client";
import React, { useState } from "react";
import { Project } from "@/types/Project";
import TagButton from "./TagButton";
import ProjectDisplay from "./ProjectDisplay";
import { createPortal } from "react-dom";
import ProgressBar from "./ProgressBar";

type Props = {
  project: Project;
};

const ProjectCard = ({ project }: Props) => {
  const [toggleProjectDisplay, setToggleProjectDisplay] = useState(false);
  const { _id, title, excerpt, coverimage, progress, tags } = project;

  return (
    <div>
      {toggleProjectDisplay
        ? createPortal(
            <ProjectDisplay
              project={project}
              setToggleDisplay={setToggleProjectDisplay}
            />,
            document.body
          )
        : null}
      <div className="z-[-2] bg-[#F3E9D6] absolute w-[356px] h-[220px] md:w-[410px] md:h-[252px]"></div>
      <div className="z-[-1] absolute w-[356px] h-[220px] md:w-[410px] md:h-[252px] flex items-center justify-center overflow-hidden">
        <div
          className=" w-[356px] h-[220px] md:w-[810px] md:h-[552px] rotate-[5deg] bg-cover"
          style={{
            backgroundImage: `url(${coverimage})`,
            opacity: 0.1,
          }}
        ></div>
      </div>

      <article
        key={_id}
        className="flex  py-2 cursor-pointer px-1 flex-col items-center w-[356px] h-[220px] md:w-[410px] md:h-[252px] justify-between bg-opacity-20 inner-shadow-image-card bg-fixed bg-center bg-no-repeat bg-cover"
        onClick={() => setToggleProjectDisplay(true)}
      >
        <div className="w-[80%] flex flex-col items-center h-[80%] justify-center px-2 ">
          <h3 className=" text-3xl font-semibold">{title}</h3>
          <p className="line-clamp-3 text-sm leading-6 text-gray-600">
            {excerpt}
          </p>
        </div>
        <div className="flex items-start w-full gap-2 p-0">
          {tags.map((tag, i) => (
            <TagButton key={i} label={tag} url="" />
          ))}
        </div>
        <ProgressBar stageCompleted={Number(progress)} />
      </article>
    </div>
  );
};

export default ProjectCard;
