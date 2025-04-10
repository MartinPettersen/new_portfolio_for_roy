"use client";
import React, { useEffect, useState, useRef } from "react";
import PostItCombo from "../(postit)/PostItCombo";
import { SiteData } from "@/types/SiteData";
import Loading from "../(loading)/Loading";

type Props = {
  siteData: SiteData;
};

const ParallaxHeaderBanner = ({ siteData }: Props) => {
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

  const postItYOffset = scrollY * 0.7;
  const quoteYOffset = scrollY * 0.7;

  return (
    <div
      ref={headerRef}
      className="hidden md:flex py-2 px-6 items-center justify-between flex-row relative "
    >
      <div
        style={{
          transform: `translateY(${postItYOffset}px)`,
          willChange: "transform",
        }}
      >
        <PostItCombo siteData={siteData} />
      </div>

      <h3
        className="w-[80%] text-3xl font-space-mono"
        style={{
          transform: `translateY(${quoteYOffset}px)`,
          willChange: "transform",
        }}
      >
        {siteData.bannerquote}
      </h3>
    </div>
  );
};

export default ParallaxHeaderBanner;
