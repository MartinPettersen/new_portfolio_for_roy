import { About } from "@/types/About";
import React from "react";

import { Hobby } from "@/types/Hobby";
import HobbyCard from "./HobbyCard";
import { getSiteData } from "@/sanity/sanity-utils";
import QuoteCard from "./QuoteCard";
import { SiteData } from "@/types/SiteData";

type Props = {
  aboutData: About;
};

const AboutHobbyField = async ({ aboutData }: Props) => {

    const siteData: SiteData = await getSiteData()

  return (
    <div className="border-t-2 w-[90%] p-8 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 place-items-center justify-center">
        <QuoteCard label={siteData.openinghobbyquote} />
      {aboutData.hobby
        ? aboutData.hobby.map((hobby: Hobby, i: number) => (
            <HobbyCard hobby={hobby} key={i} />
          ))
        : null}
        <QuoteCard label={siteData.closinghobbyquote} />

    </div>
  );
};

export default AboutHobbyField;
