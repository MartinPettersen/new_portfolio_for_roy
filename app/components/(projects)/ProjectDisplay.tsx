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
      <div
        className="w-screen left-0 top-0 h-screen bg-opacity-20 bg-slate-800 z-[100] fixed"
        onClick={() => setToggleDisplay(false)}
      ></div>
      <div className="z-[200] fixed left-0 top-[30vh] w-screen h-[50%]">
        <ProjectInfo project={project} setToggleDisplay={setToggleDisplay}/>
      </div>
    </div>
  );
};

export default ProjectDisplay;
