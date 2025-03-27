import { getProject } from '@/sanity/sanity-utils'
import React from 'react'
import { PortableText } from '@portabletext/react'


type Props = {
  params: Promise<{ project: string }>;
};

const page = async (props: Props) => {

    const slug = await props.params
    const project = await getProject(slug.project)
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