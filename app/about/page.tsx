import React from "react";
import { getAbout } from "@/sanity/sanity-utils";
import { PortableText, PortableTextBlock } from "@portabletext/react";
import AboutLeftSection from "../components/(about)/AboutLeftSection";
import AboutHobbyField from "../components/(about)/(hobby)/AboutHobbyField";

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
    <div className="flex flex-col rounded-t-2xl rounded-br-2xl rounded-bl-2xl shadow-custom z-[12] relative bg-[#E8D5B0] items-center justify-center">
      <div className="w-full p-4  flex items-center justify-evenly">
        
          <AboutLeftSection aboutData={aboutData} />
        <div className="w-[50%] flex flex-col items-start p-8 h-full justify-center m-4">
          <h3 className="font-bold flex w-full items-center justify-center text-3xl p-b8 font-libre-baskerville">
            {aboutData.fullName}
          </h3>
          <div className="m-4">
            {aboutData.about.map(
              (content: PortableTextBlock, i: number) =>
                content && <PortableText key={i} value={content} />
            )}
          </div>
        </div>
      </div>

     
      <AboutHobbyField aboutData={aboutData} />
    </div>
  );
};

export default page;
