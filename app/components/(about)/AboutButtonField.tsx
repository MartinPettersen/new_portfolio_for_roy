import React from "react";
import ClipBoardButton from "./(buttons)/ClipBoardButton";
import DownloadButton from "./(buttons)/DownloadButton";
import { About } from "@/types/About";
import LinkButton from "./(buttons)/LinkButton";
import EmailButton from "./(buttons)/EmailButton";

type Props = {
  aboutData: About;
};

const AboutButtonField = ({ aboutData }: Props) => {
  return (
    <div className="w-[85%] flex flex-col justify-center gap-4">
      <h3 className=" font-rubik font-bold text-2xl">Contact</h3>
      <div className="flex gap-4 ">
        {aboutData.tlf ? (
          <ClipBoardButton text={aboutData.tlf} label={aboutData.tlf} />
        ) : null}
        {aboutData.mail ? (
          <EmailButton email={aboutData.mail} label={aboutData.mail} />
        ) : null}
      </div>
      <div className="flex gap-4 ">
        {aboutData.linkedin ? (
          <LinkButton url={aboutData.linkedin} label={"linkedin"} />
        ) : null}

        {aboutData.cv ? (
          <DownloadButton label="cv" cv={aboutData.cv as unknown as string} />
        ) : null}
      </div>
    </div>
  );
};

export default AboutButtonField;
