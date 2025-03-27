import { createClient, groq } from "next-sanity";
import { Project } from '@/types/Project'

export async function getProjects(): Promise<Project[]> {
    const client = createClient({
        projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
        dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
        apiVersion: "2025-03-04",
    }) 

    return client.fetch(
        groq`*[_type == "project"]{
        _id,
        _createdAt,
        title,
        "slug": slug.current,
        "coverimage": coverimage.asset->url,
        url,
        content,
        excerpt,
        progress,
        tags
        }`
    )
}

export async function getProject(slug: string): Promise<Project> {
    const client = createClient({
        projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
        dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
        apiVersion: "2025-03-04",
    }) 

    return client.fetch(
        groq`*[_type == "project" && slug.current == $slug][0]{
        _id,
        _createdAt,
        title,
        "slug": slug.current,
        "coverimage": coverimage.asset->url,
        url,
        content,
        excerpt,
        progress,
        tags
        }`,
        {slug}
    )
}

export async function getAbout() {
    const client = createClient({
        projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
        dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
        apiVersion: "2025-03-04",
    }) 

    client.fetch(
        groq`*[_type == "about"]{
        
        }`
    )
}