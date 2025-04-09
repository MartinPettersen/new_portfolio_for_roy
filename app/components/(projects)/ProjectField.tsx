import React from "react";
import { getProjects } from "@/sanity/sanity-utils";
import ProjectCard from "./ProjectCard";
import Loading from "../(loading)/Loading";


const ProjectField = async () => {
  const projects = await getProjects();

  if (projects.length === 0) {
    return <Loading />
  }

  return (
    <div className="grid grid-cols-1 py-24 md:grid-cols-3 gap-2 md:gap-12 items-center  justify-evenly">
      {projects.map((project) => (
        <ProjectCard key={project._id} project={project} />
      ))}
    </div>
  );
};

export default ProjectField;
