import React from "react";
import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

const ProjectField = async () => {
  const projects = await getProjects();
  console.log("projects", projects);
  return (
    <div>
      {projects.map((project) => (
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
        </Link>
      ))}
    </div>
  );
};

export default ProjectField;
