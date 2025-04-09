"use client";
import React, { useEffect, useState } from "react";
import OrangeNote from "./(postitnotes)/OrangeNote";
import PurpleNote from "./(postitnotes)/PurpleNote";
import GreenNote from "./(postitnotes)/GreenNote";
import PinkNote from "./(postitnotes)/PinkNote";

type Props = {
  index: number;
};

const PostOrganizer = ({ index }: Props) => {
  const quotes = [
    "This is a quote",
    "this is a different quote",
    "wohoooo",
    "Auch",
  ];

  const [randomNumber, setRandomNumber] = useState(-1);
  const [label, setLabel] = useState("");

  useEffect(() => {
    setRandomNumber(Math.floor(Math.random() * 4) + 1);
    setLabel(quotes[Math.floor(Math.random() * quotes.length) + 0]);
  }, []);

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
