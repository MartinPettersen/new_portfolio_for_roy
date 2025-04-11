import { About } from "@/types/About";
import React from "react";

import { Hobby } from "@/types/Hobby";
import HobbyCard from "./HobbyCard";
import QuoteCard from "./QuoteCard";
import Loading from "../../(loading)/Loading";

type Props = {
  aboutData: About;
};

const AboutHobbyField = async ({ aboutData }: Props) => {

    if (!aboutData.hobby) {
      return <Loading />
    }

  return (
    <div className="border-t-2 border-[#181818]/20 w-[90%] p-8 mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 place-items-center justify-center">
      {aboutData.hobby
        ? aboutData.hobby.map((hobby: Hobby, i: number) => (
            hobby.image? 
            <HobbyCard hobby={hobby} key={i + "image"} />
          :
            <QuoteCard hobby={hobby} key={i + "quote"} />
          
          ))
        : null}

    </div>
  );
};

export default AboutHobbyField;
