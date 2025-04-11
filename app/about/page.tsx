import React from "react";
import { getAbout } from "@/sanity/sanity-utils";
import AboutLeftSection from "../components/(about)/AboutLeftSection";
import AboutHobbyField from "../components/(about)/(hobby)/AboutHobbyField";
import AboutRightSection from "../components/(about)/AboutRightSection";
import Loading from "../components/(loading)/Loading";
import Arrow from "../components/(about)/Arrow";
import CertifiedHuman from "../components/(about)/CertifiedHuman";

const page = async () => {
  const aboutData = await getAbout();

  console.log("aboutData", aboutData);
  if (!aboutData)
    return (
      <div className="w-screen h-screen flex items-center justify-center bg-orange-400">
        <Loading />
      </div>
    );

  return (
    <div className="flex flex-col pt-8 rounded-t-[18px] rounded-br-[18px] rounded-bl-[18px] shadow-nav z-[12] relative bg-[#E8D5B0] items-center justify-center">
      <div className="w-full p-4  flex items-start justify-evenly">
        <AboutLeftSection aboutData={aboutData} />
        <div className="z-10 hidden absolute pr-[140px] pt-2">
          <Arrow />
        </div>
        <AboutRightSection aboutData={aboutData} />
      </div>
      <CertifiedHuman />

      <AboutHobbyField aboutData={aboutData} />
    </div>
  );
};

export default page;
