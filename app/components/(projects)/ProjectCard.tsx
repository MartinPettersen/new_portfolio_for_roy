"use client";
import React, { useState } from "react";
import { Project } from "@/types/Project";
import TagButton from "./TagButton";
import ProjectDisplay from "./ProjectDisplay";
import { createPortal } from "react-dom";

type Props = {
  project: Project;
};

const ProjectCard = ({ project }: Props) => {
  const [toggleProjectDisplay, setToggleProjectDisplay] = useState(false);
  const { _id, title, excerpt, coverimage } = project;

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

      <article
        key={_id}
        className="flex flex-col items-center w-[356px] h-[220px] md:w-[410px] md:h-[252px] justify-between shadow-custom bg-fixed bg-center bg-no-repeat bg-cover"
        onClick={() => setToggleProjectDisplay(true)}
        style={{
          backgroundImage: `url(${coverimage})`,
        }}
      >
        
        <div className="w-[80%] flex flex-col items-center h-[80%] justify-center px-2 ">
          <h3 className=" text-3xl font-semibold">{title}</h3>
          <p className="line-clamp-3 text-sm leading-6 text-gray-600">
            {excerpt}
          </p>
        </div>
        <div className="flex items-start w-full h-[20%] p-4">

        <TagButton label="tag #1" url="" />
        </div>
      </article>
    </div>
  );
};

export default ProjectCard;
