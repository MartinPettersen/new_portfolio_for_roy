import React from "react";
import PostItCombo from "../(postit)/PostItCombo";
import { SiteData } from "@/types/SiteData";
import Loading from "../(loading)/Loading";

type Props = {
  siteData: SiteData;
  setToggled: React.Dispatch<React.SetStateAction<boolean>>;
  toggled: boolean
};

const HeaderBanner = ({ siteData, setToggled, toggled }: Props) => {
  if (!siteData.bannerquote) {
    return <Loading />
  }

  return (
    <div className="hidden md:flex  py-2 px-6 items-center justify-between flex-row">
      <PostItCombo siteData={siteData} toggled={toggled} setToggled={setToggled}/>
      <h4 className="w-[80%] text-[32px] font-bold text-black font-space-mono">
        {siteData.bannerquote}
      </h4>
    </div>
  );
};

export default HeaderBanner;
