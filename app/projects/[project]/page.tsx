import { getProject } from '@/sanity/sanity-utils'
import React from 'react'

type Props = {
    params: { project: string }
}

const page = async ({ params }: Props) => {

    const slug = params.project
    const project = await getProject(slug)
    console.log("single project", project)
  return (
    <div>{project.title}</div>
  )
}

export default page