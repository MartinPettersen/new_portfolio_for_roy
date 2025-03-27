import React from 'react'
import { getProjects } from '@/sanity/sanity-utils'

const ProjectField = async () => {

    const projects = await getProjects()
  console.log("projects",projects)
  return (
    <div>

    {projects.map((project) => (
        <div key={project._id}>
            {project.title}
            
            </div>
    ))}

    </div>
  )
}

export default ProjectField