import { About } from "@/types/About";
import React from "react";
import { PortableText } from "@portabletext/react";

type Props = {
  aboutData: About;
};

const AboutRightSection = ({ aboutData }: Props) => {
  return (
    <div className="w-full md:w-[50%] flex flex-col items-center md:items-start pr-6 md:pr-0 md:px-8 h-full justify-center m-4">
      <h1 className="font-bold hidden md:flex w-full items-center justify-start text-6xl pb-8 font-libre-baskerville">
        {aboutData.fullName}
      </h1>
      <div className="font-extralight border-t-2 border-[#181818]/20 md:border-0 w-[94vw] md:w-full paragraph">
        {aboutData.about.map(
          (content, i: number) =>
            content && <PortableText key={i} value={content} />
        )}
      </div>
    </div>
  );
};

export default AboutRightSection;
