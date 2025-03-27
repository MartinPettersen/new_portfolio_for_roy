import { ContentBlock } from "./ContentBlock";

export type Project = {
    _id: string;
    _createdAt: Date;
    title: string;
    slug: string;
    image: string;
    url: string;
    content: ContentBlock[];
    progress: string;
    tags: string[];
}