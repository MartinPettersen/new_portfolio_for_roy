import React from "react";
import { getProjects } from "@/sanity/sanity-utils";
import ProjectCard from "./ProjectCard";

/*

<Link href={`/projects/${project.slug}`} key={project._id}>
          {project.title}
          {project.coverimage && (
            <Image
              src={project.coverimage}
              alt={project.title}
              width={250}
              height={100}
            />
          )}
        </Link>*/

const ProjectField = async () => {
  const projects = await getProjects();
  console.log("projects", projects);
  return (
    <div className="flex flex-col items-center justify-center">
      {projects.map((project) => (
        <ProjectCard key={project._id} project={project} />
      ))}
    </div>
  );
};

export default ProjectField;
