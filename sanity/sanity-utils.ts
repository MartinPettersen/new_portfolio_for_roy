import { createClient, groq } from "next-sanity";
import { Project } from '@/types/Project'
import clientConfig from "./config/client-config";

export async function getProjects(): Promise<Project[]> {

    return createClient(clientConfig).fetch(
        groq`*[_type == "project"]{
        _id,
        _createdAt,
        title,
        "slug": slug.current,
        "coverimage": coverimage.asset->url,
        url,
        content[]{
          _type == 'contentBlock' => {
            content,
            image{
              "asset": asset->url, // Fetch the URL here
              alt
            }
          },
          _type != 'contentBlock' => @ // Keep other block types as they are
        },
        excerpt,
        progress,
        tags
        }`
    )
}

export async function getProject(slug: string): Promise<Project> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "project" && slug.current == $slug][0]{
        _id,
        _createdAt,
        title,
        "slug": slug.current,
        "coverimage": coverimage.asset->url,
        url,
        content[]{
          _type == 'contentBlock' => {
            content,
            image{
              "asset": asset->url, // Fetch the URL here
              alt
            }
          },
          _type != 'contentBlock' => @ // Keep other block types as they are
        },
        excerpt,
        progress,
        tags
        }`,
        { slug }
    )
}

export async function getAbout() {
    const data = await createClient(clientConfig).fetch(
        groq`*[_type == "about"]{
        _id,
        _createdAt,
        fullName,
        "portrait": portrait.asset->url,
        tlf,
        mail,
        linkedin,
        "cv": cv.asset->url,
        about,
        hobby[]{
        description,
        "image": image.asset->url,
        "alt": image.alt
      }
        }`
    )
    return data[0] || null;
}

export async function getSiteData() {
  const data = await createClient(clientConfig).fetch(
      groq`*[_type == "sitedata"]{
      _id,
      _createdAt,
      quotes,
      bannerquote
      }`
  )
  return data[0] || null;
}