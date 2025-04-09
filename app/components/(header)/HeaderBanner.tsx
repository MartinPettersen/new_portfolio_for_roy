import React from "react";
import PostItCombo from "../(postit)/PostItCombo";
import { SiteData } from "@/types/SiteData";
import Loading from "../(loading)/Loading";

type Props = {
  siteData: SiteData;
};

const HeaderBanner = ({ siteData }: Props) => {
  if (!siteData.bannerquote) {
    return <Loading />
  }

  return (
    <div className="hidden md:flex  py-2 px-6 items-center justify-between flex-row">
      <PostItCombo siteData={siteData}/>
      <h3 className="w-[80%] text-3xl font-space-mono">
        {siteData.bannerquote}
      </h3>
    </div>
  );
};

export default HeaderBanner;
