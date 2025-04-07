import { About } from "@/types/About";
import React from "react";
import { Image } from "next-sanity/image";
import { PortableText } from "@portabletext/react";
import { Hobby } from "@/types/Hobby";

type Props = {
  aboutData: About;
};

const AboutHobbyField = ({ aboutData }: Props) => {
  return (
      <div className="border-t-2 w-full ">
        {aboutData.hobby
          ? aboutData.hobby.map((hobby: Hobby, i: number) => (
              <div key={i} className="w-full flex ">
                {hobby.image ? (
                  <Image
                    className=" "
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
  );
};

export default AboutHobbyField;
