import React from "react";
import ImageContainer from "./ImageContainer";
import AboutButtonField from "./AboutButtonField";
import { About } from "@/types/About";

type Props = {
  aboutData: About;
};

const AboutLeftSection = ({ aboutData }: Props) => {
  return (
    <>
    <h1 className="font-bold flex md:hidden w-full items-center justify-start text-3xl px-2 font-libre-baskerville">
        {aboutData.fullName}
      </h1>
    <div className="w-full md:w-[50%] flex flex-row md:flex-col items-center justify-evenly md:justify-center">
      
      {aboutData.portrait ? (
        <ImageContainer
        portrait={aboutData.portrait}
        fullName={aboutData.fullName}
        />
      ) : (
        <></>
      )}
      <AboutButtonField aboutData={aboutData} />
    </div>
      </>
  );
};

export default AboutLeftSection;
