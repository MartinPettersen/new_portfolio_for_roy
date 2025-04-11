import { PortableTextBlock } from "sanity"


export type ContentBlock = {
    content?: PortableTextBlock[];
    slidetitle?: string;
    url: string;
    urllabel: string;
    image?: {
        asset: string;
        alt?: string;
    }
}