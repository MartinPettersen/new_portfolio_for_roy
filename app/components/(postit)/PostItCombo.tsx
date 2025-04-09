"use client";
import React, { useState } from "react";
import PostItButton from "./PostItButton";
import PostItBoard from "./PostItBoard";
import { SiteData } from "@/types/SiteData";

type Props = {
  siteData: SiteData;
};

const PostItCombo = ({siteData}: Props) => {
  const [toggled, setToggled] = useState(false);

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
