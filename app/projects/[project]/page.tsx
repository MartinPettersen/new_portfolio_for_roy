import { getProject } from '@/sanity/sanity-utils'
import React from 'react'
import { PortableText } from '@portabletext/react'


type Params = Promise<{ project: string }>

const page = async ({ params }: { params: Params }) => {

    const {project}  =  await params
    const projectData = await getProject(project)
  return (
    <div>
        {projectData.title}
        <div>
          {projectData.content.map((content,i) => (
            content.content && <PortableText key={i} value={content.content}/>
            
          ))}
        </div>
        </div>
  )
}

export default page