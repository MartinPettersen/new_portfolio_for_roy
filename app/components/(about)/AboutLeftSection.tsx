import React from "react";
import ImageContainer from "./ImageContainer";
import AboutButtonField from "./AboutButtonField";
import { About } from "@/types/About";

type Props = {
    aboutData: About
}

const AboutLeftSection = ({aboutData}: Props) => {
  return (
    <div className="w-[50%] flex flex-col items-center justify-center">
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
