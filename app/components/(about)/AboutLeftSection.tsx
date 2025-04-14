import React from "react";
import ImageContainer from "./ImageContainer";
import AboutButtonField from "./AboutButtonField";
import { About } from "@/types/About";

type Props = {
  aboutData: About;
};

const AboutLeftSection = ({ aboutData }: Props) => {
  return (
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
  );
};

export default AboutLeftSection;
