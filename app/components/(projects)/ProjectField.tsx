import React from "react";
import { getProjects } from "@/sanity/sanity-utils";
import ProjectCard from "./ProjectCard";


const ProjectField = async () => {
  const projects = await getProjects();
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center justify-center">
      {projects.map((project) => (
        <ProjectCard key={project._id} project={project} />
      ))}
    </div>
  );
};

export default ProjectField;
