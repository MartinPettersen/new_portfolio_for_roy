import { PortableTextBlock } from "sanity"
import { Hobby } from "./Hobby";
import { File } from "./File";

export type About = {
    fullName: string;
    quote: string;
    portrait: string;
    tlf: string;
    mail: string;
    linkedin: string;
    cv: File;
    about: PortableTextBlock[];
    hobby: Hobby;
}