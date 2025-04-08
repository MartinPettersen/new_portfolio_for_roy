import React from "react";
import { getAbout } from "@/sanity/sanity-utils";
import AboutLeftSection from "../components/(about)/AboutLeftSection";
import AboutHobbyField from "../components/(about)/(hobby)/AboutHobbyField";
import AboutRightSection from "../components/(about)/AboutRightSection";

const page = async () => {
  const aboutData = await getAbout();

  console.log("aboutData", aboutData);
  if (!aboutData)
    return (
      <div className="w-screen h-screen flex items-center justify-center bg-orange-400">
        <p>Loading...</p>
      </div>
    );

  return (
    <div className="flex flex-col pt-8 rounded-t-[18px] rounded-br-[18px] rounded-bl-[18px] shadow-nav z-[12] relative bg-[#E8D5B0] items-center justify-center">
      <div className="w-full p-4  flex items-start justify-evenly">
        
          <AboutLeftSection aboutData={aboutData} />
        
        <AboutRightSection aboutData={aboutData}/>
      </div>

     
      <AboutHobbyField aboutData={aboutData} />
    </div>
  );
};

export default page;
