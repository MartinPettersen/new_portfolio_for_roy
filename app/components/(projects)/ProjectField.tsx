import React from "react";
import { getProjects } from "@/sanity/sanity-utils";
import ProjectCard from "./ProjectCard";
import Loading from "../(loading)/Loading";


const ProjectField = async () => {
  const projects = await getProjects();

  if (!projects || projects.length === 0) {
    return <Loading />
  }


  return (
    <div className="grid grid-cols-1 py-24 grid-cols-between xl:grid-cols-3 gap-2 md:gap-10 items-center justify-evenly">
      {projects.map((project) => (
        <ProjectCard key={project._id} project={project} />
      ))}
    </div>
  );
};

export default ProjectField;
