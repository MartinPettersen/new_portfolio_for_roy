"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/types/Project";
import ProgressBar from "./ProgressBar";
import TagButton from "./TagButton";
import ProjectDisplay from "./ProjectDisplay";

type Props = {
    project: Project
}

const ProjectCard = ({project}: Props) => {
  const [toggleProjectDisplay, setToggleProjectDisplay] = useState(false);
  const { _id, title, slug, excerpt, coverimage, progress } = project;

  return (
    <div>
      {toggleProjectDisplay ? (
        <ProjectDisplay
          project={project}
          setToggleDisplay={setToggleProjectDisplay}
        />
      ) : null}

      <article
        key={_id}
        className="flex flex-row items-start justify-between  border-2"
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
            <Link
              className="hover:text-red-500 underline transition-colors"
              href={`/projects/${slug}`}
            >
              {title}
            </Link>
          </h3>
          <p className="line-clamp-3 text-sm leading-6 text-gray-600">
            {excerpt}
          </p>
        </div>
      </article>
      <div className="flex justify-evenly  mt-2">
        <TagButton label="tag #1" url="" />
        <TagButton label="tag #2" url="" />
        <TagButton label="tag #3" url="" />
        <TagButton label="tag #4" url="" />
      </div>
      <div className="mt-2 w-full">
        <ProgressBar percentageCompleted={Number(progress)} />
      </div>
    </div>
  );
};

export default ProjectCard;
