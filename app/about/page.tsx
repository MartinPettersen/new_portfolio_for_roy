import React from "react";
import { Image } from "next-sanity/image";
import DownloadButton from "../components/(about)/DownloadButton";
import ClipBoardButton from "../components/(about)/ClipBoardButton";
import { getAbout } from "@/sanity/sanity-utils";
import { Hobby } from "@/types/Hobby";
import { PortableText, PortableTextBlock } from "@portabletext/react";

const page = async () => {
  const aboutData = await getAbout();

  console.log("aboutData",aboutData)
  if (!aboutData) return (<div className="w-screen h-screen flex items-center justify-center bg-orange-400">
    <p>Loading...</p>
    </div>)

  return (
    <div className="flex flex-col rounded-tr-2xl rounded-br-xl rounded-bl-xl shadow-custom z-[52] relative bg-[#E4D9C4] items-center justify-center"
    >
      
      <div className="w-full p-4  flex items-center justify-evenly">
        {aboutData.portrait ? (
          <Image
            className="w-[50%] h-auto"
            src={aboutData.portrait}
            alt={aboutData.fullName || "Portrait Image"}
            width={2000}
            height={1000}
          />
        ) : (
          <></>
        )}
        <div className="w-[50%] m-4">
          <h3 className="font-bold text-xl">About {aboutData.fullName}</h3>
        </div>
      </div>
      <div className="w-full flex items-center justify-evenly">
        {aboutData.tlf ? (
          <ClipBoardButton text={aboutData.tlf} label={"tlf"} />
        ) : null}
        {aboutData.mail ? (
          <ClipBoardButton text={aboutData.mail} label={"mail"} />
        ) : null}

        {aboutData.linkedin ? (
          <ClipBoardButton text={aboutData.linkedin} label={"linkedin"} />
        ) : null}

        {aboutData.cv ? <DownloadButton label="cv" cv={aboutData.cv} /> : null}
      </div>
      <div className="m-4">
        {aboutData.about.map(
          (content: PortableTextBlock, i: number) =>
            content && <PortableText key={i} value={content} />
        )}
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
                    <p>
                      {hobby.description.map(
                        (content, i) =>
                          content && (
                            <PortableText key={i} value={content} />
                          )
                      )}
                    </p>
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
