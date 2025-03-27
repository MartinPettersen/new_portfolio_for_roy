import { getProject } from '@/sanity/sanity-utils'
import { Metadata } from 'next'
import { PortableText } from '@portabletext/react'

type Params = {
    params: {
        project: string
    }
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
    const project = await getProject(params.project)
    return {
        title: project.title,
    }
}

export default async function Page({ params }: Params) {
    const project = await getProject(params.project)
    
    return (
        <div>
            <h1>{project.title}</h1>
            <div>
                {project.content?.map((content, i) => (
                    content.content && (
                        <div key={i}>
                            <PortableText value={content.content}/>
                        </div>
                    )
                ))}
            </div>
        </div>
    )
}

// This is important for Next.js dynamic routes
export const dynamicParams = true
export const revalidate = 60 // optional: revalidate every 60 seconds