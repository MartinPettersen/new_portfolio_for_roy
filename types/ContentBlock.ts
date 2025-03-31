import { PortableTextBlock } from "sanity"


export type ContentBlock = {
    content?: PortableTextBlock[];
    image?: {
        asset: string;
        alt?: string;
    }
}