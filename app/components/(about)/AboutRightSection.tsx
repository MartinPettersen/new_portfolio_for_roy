import { About } from "@/types/About";
import React from "react";
import { PortableText } from "@portabletext/react";

type Props = {
  aboutData: About;
};

const AboutRightSection = ({ aboutData }: Props) => {
  return (
    <div className="w-[50%] flex flex-col items-start  px-8 h-full justify-center m-4">
      <h1 className="font-bold flex w-full items-center justify-start text-3xl pb-8 font-libre-baskerville">
        {aboutData.fullName}
      </h1>
      <div className="">
        {aboutData.about.map(
          (content, i: number) =>
            content && <PortableText key={i} value={content} />
        )}
      </div>
    </div>
  );
};

export default AboutRightSection;
