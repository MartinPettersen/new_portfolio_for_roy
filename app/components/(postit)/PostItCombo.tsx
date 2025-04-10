"use client";
import React from "react";
import PostItButton from "./PostItButton";
import PostItBoard from "./PostItBoard";
import { SiteData } from "@/types/SiteData";

type Props = {
  siteData: SiteData;
  setToggled: React.Dispatch<React.SetStateAction<boolean>>;
  toggled: boolean
};

const PostItCombo = ({siteData, toggled, setToggled}: Props) => {

  const togglePostIt = () => {
    setToggled(!toggled);
  };

  return (
    <>
      <PostItButton togglePostIt={togglePostIt} />
      <PostItBoard toggled={toggled} togglePostIt={togglePostIt} siteData={siteData} />
    </>
  );
};

export default PostItCombo;
