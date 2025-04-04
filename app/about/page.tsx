import React from "react";
import { Image } from "next-sanity/image";

import { getAbout } from "@/sanity/sanity-utils";
import { Hobby } from "@/types/Hobby";
import { PortableText, PortableTextBlock } from "@portabletext/react";
import ImageContainer from "../components/(about)/ImageContainer";
import AboutButtonField from "../components/(about)/AboutButtonField";
import CertifiedHuman from "../components/(about)/CertifiedHuman";

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
          <CertifiedHuman />
        </div>

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

      <h2 className="font-bold">Hobby og andre verk</h2>
      <div>
        {aboutData.hobby
          ? aboutData.hobby.map((hobby: Hobby, i: number) => (
              <div key={i} className="w-full flex ">
                {hobby.image ? (
                  <Image
                    className="w-full h-auto "
                    src={hobby.image}
                    alt="hobby image"
                    width={200}
                    height={200}
                  />
                ) : null}
                <div className="flex flex-col m-4 gap-4">
                  {hobby.description?.length && (
                    <>
                      {hobby.description.map(
                        (content, i) =>
                          content && <PortableText key={i} value={content} />
                      )}
                    </>
                  )}
                </div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default page;
