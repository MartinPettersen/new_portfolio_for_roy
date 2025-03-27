import { PortableTextBlock } from "sanity"


export type ContentBlock = {
    content?: PortableTextBlock[];
    image?: {
        asset: {
            _ref: string;
            _type: "reference"
        };
        alt?: string;
    }
}