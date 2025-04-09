import { PortableTextBlock } from "sanity"


export type ContentBlock = {
    content?: PortableTextBlock[];
    slidetitle?: string;
    image?: {
        asset: string;
        alt?: string;
    }
}