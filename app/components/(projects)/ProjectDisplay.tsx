"use client";
import React from "react";
import { Project } from "@/types/Project";
import ProjectInfo from "./ProjectInfo";

type Props = {
  setToggleDisplay: (value: boolean) => void;
  project: Project;
};

const ProjectDisplay = ({ setToggleDisplay, project }: Props) => {
    return (
    <div className="">
      
      <div className="z-[200] flex items-center justify-center fixed left-0 top-0 w-screen h-screen ">
        <ProjectInfo project={project} setToggleDisplay={setToggleDisplay}/>
      </div>
    </div>
  );
};

export default ProjectDisplay;
