"use client";
import React, { useState } from "react";
import { Project } from "@/types/Project";
import Loading from "../(loading)/Loading";
import ProjectInfoCard from "./(projectinfocard)/ProjectInfoCard";

type Props = {
  project: Project;
  setToggleDisplay: (value: boolean) => void;
};

const ProjectInfo = ({ project, setToggleDisplay }: Props) => {
  const [projectIndex, setProjectIndex] = useState(0);

  if (!project || !project.content) return <Loading />;

  const totalSlides = project.content.length;

  const getCircleIndex = (currentIndex: number) => {
    if (totalSlides <= 7) {
      return currentIndex;
    }

    if (currentIndex < 6) {
      return currentIndex;
    } else if (currentIndex === totalSlides - 1) {
      return 6;
    } else {
      return 5;
    }
  };

  const goback = () => {
    if (projectIndex > 0) {
      setProjectIndex(projectIndex - 1);
    }
  };

  const nextProject = () => {

    if (projectIndex < totalSlides - 1) {
      setProjectIndex(projectIndex + 1);
    }
  };

  const goTothisIndex = (index: number) => {
    setProjectIndex(index);
  };

  const circleIndex = getCircleIndex(projectIndex);

  return (
    <div className="fixed inset-0 z-[10000] flex flex-col w-screen h-screen items-center justify-center">
      <div
        className="w-screen h-screen bg-[#D9D9D92B] backdrop-blur-sm absolute z-[9999]"
        onClick={() => setToggleDisplay(false)}
      ></div>
      <ProjectInfoCard goTothisIndex={goTothisIndex} nextProject={nextProject} circleIndex={circleIndex} project={project} goback={goback} projectIndex={projectIndex}/>
    </div>
  );
};

export default ProjectInfo;
