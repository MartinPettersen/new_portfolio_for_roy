"use client";
import React, { useEffect, useState } from "react";
import OrangeNote from "./(postitnotes)/OrangeNote";
import PurpleNote from "./(postitnotes)/PurpleNote";
import GreenNote from "./(postitnotes)/GreenNote";
import PinkNote from "./(postitnotes)/PinkNote";
import { SiteData } from "@/types/SiteData";
import Loading from "../(loading)/Loading";

type Props = {
  index: number;
  siteData: SiteData
};

const PostOrganizer = ({ index, siteData }: Props) => {

  const [randomNumber, setRandomNumber] = useState(-1);
  const [label, setLabel] = useState("");



  useEffect(() => {
    setRandomNumber(Math.floor(Math.random() * 4) + 1);
    console.log("sitedata", siteData)
    if (siteData.quotes) {
      setLabel(siteData.quotes[Math.floor(Math.random() * siteData.quotes.length) + 0]);
    }
  }, []);

  if (!siteData) {
    return <Loading />
  }

  return (
    <>
      {randomNumber === 1 ? <OrangeNote label={label} index={index} /> : <></>}
      {randomNumber === 2 ? <PurpleNote label={label} index={index} /> : <></>}
      {randomNumber === 3 ? <GreenNote label={label} index={index} /> : <></>}
      {randomNumber === 4 ? <PinkNote label={label} index={index} /> : <></>}
    </>
  );
};

export default PostOrganizer;
