import { getProject } from '@/sanity/sanity-utils'
import React from 'react'
import { PortableText } from '@portabletext/react'


type PageProps = {
  params: { 
      project: string 
  }
}

const page = async ({ params }: PageProps) => {

    const slug = params.project
    const project = await getProject(slug)
    console.log("single project", project)
  return (
    <div>
        {project.title}
        <div>
          {project.content.map((content,i) => (
            content.content && <PortableText key={i} value={content.content}/>
            
          ))}
        </div>
        </div>
  )
}

export default page