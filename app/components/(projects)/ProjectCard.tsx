"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Project } from "@/types/Project";
import TagButton from "./TagButton";
import ProjectDisplay from "./ProjectDisplay";
import { createPortal } from "react-dom";

type Props = {
    project: Project
}

const ProjectCard = ({project}: Props) => {
  const [toggleProjectDisplay, setToggleProjectDisplay] = useState(false);
  const { _id, title, excerpt, coverimage } = project;

  return (
    <div>
      {toggleProjectDisplay ? createPortal(
        <ProjectDisplay
          project={project}
          setToggleDisplay={setToggleProjectDisplay}
        />,
        document.body
      ) : null}

      <article
        key={_id}
        className="flex flex-row items-start bg-[#D9D9D9] justify-between border-2 shadow-custom"
        onClick={() => setToggleProjectDisplay(true)}
      >
        {project.coverimage && (
          <Image
            src={coverimage}
            alt={title}
            width={100}
            height={100}
            className="w-[100px] h-[100px] "
          />
        )}
        <div className="w-[80%] px-2 ">
          <h3 className=" text-lg font-semibold">
              {title}
          </h3>
          <p className="line-clamp-3 text-sm leading-6 text-gray-600">
            {excerpt}
          </p>
        </div>
        <TagButton label="tag #1" url="" />
      </article>

    </div>
  );
};

export default ProjectCard;
