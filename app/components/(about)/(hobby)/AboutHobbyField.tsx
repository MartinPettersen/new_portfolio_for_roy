import { About } from "@/types/About";
import React from "react";

import { Hobby } from "@/types/Hobby";
import HobbyCard from "./HobbyCard";

type Props = {
  aboutData: About;
};

const AboutHobbyField = ({ aboutData }: Props) => {
  

  return (
    <div className="border-t-2 w-full p-8 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 place-items-center justify-center">
      {aboutData.hobby
        ? aboutData.hobby.map((hobby: Hobby, i: number) => (
            <HobbyCard hobby={hobby} key={i} />
          ))
        : null}
    </div>
  );
};

export default AboutHobbyField;
