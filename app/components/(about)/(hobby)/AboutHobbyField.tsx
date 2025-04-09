import { About } from "@/types/About";
import React from "react";

import { Hobby } from "@/types/Hobby";
import HobbyCard from "./HobbyCard";
import { getSiteData } from "@/sanity/sanity-utils";
import QuoteCard from "./QuoteCard";
import { SiteData } from "@/types/SiteData";
import Loading from "../../(loading)/Loading";

type Props = {
  aboutData: About;
};

const AboutHobbyField = async ({ aboutData }: Props) => {

    const siteData: SiteData = await getSiteData()

    if (!siteData) {
      return <Loading />
    }

  return (
    <div className="border-t-2 w-[90%] p-8 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 place-items-center justify-center">
      {aboutData.hobby
        ? aboutData.hobby.map((hobby: Hobby, i: number) => (
            <>
            {!hobby.image? 
            <HobbyCard hobby={hobby} key={i} />
          :
            <QuoteCard hobby={hobby} />
          }
            </>
          ))
        : null}

    </div>
  );
};

export default AboutHobbyField;
