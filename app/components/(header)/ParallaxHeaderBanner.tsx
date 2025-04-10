"use client";
import React, { useEffect, useState, useRef } from "react";
import PostItCombo from "../(postit)/PostItCombo";
import { SiteData } from "@/types/SiteData";
import Loading from "../(loading)/Loading";

type Props = {
  siteData: SiteData;
  setToggled: React.Dispatch<React.SetStateAction<boolean>>;
  toggled: boolean;
};

const ParallaxHeaderBanner = ({ siteData, setToggled, toggled }: Props) => {
  const [scrollY, setScrollY] = useState(0);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!siteData.bannerquote) {
    return <Loading />;
  }

  return (
    <>
      <div
        ref={headerRef}
        className="hidden  md:flex py-2 px-6 items-center justify-between flex-row fixed top-0 left-0 right-0 z-0 "
      >
        <div>
          <PostItCombo
            siteData={siteData}
            toggled={toggled}
            setToggled={setToggled}
          />
        </div>

        <h3 className="w-[80%] text-3xl font-space-mono">
          {siteData.bannerquote}
        </h3>
      </div>
      <div className="hidden md:block h-[220px]"></div>
      <div className="relative z-10"></div>
    </>
  );
};

export default ParallaxHeaderBanner;
