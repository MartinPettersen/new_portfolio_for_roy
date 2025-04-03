"use client";
import React, { useEffect, useState } from "react";
import OrangeNote from "./(postitnotes)/OrangeNote";
import PurpleNote from "./(postitnotes)/PurpleNote";
import GreenNote from "./(postitnotes)/GreenNote";



const PostOrganizer = () => {

        const quotes = ["This is a quote", "this is a different quote", "wohoooo", "Auch"];
    
  const [randomNumber, setRandomNumber] = useState(-1);
    const [label, setLabel] = useState("")

    useEffect(() => {
        setRandomNumber(Math.floor(Math.random() * 3) + 1);
        setLabel(quotes[(Math.floor(Math.random() * quotes.length) + 0)])
    },[])

  return (
    <>
      {randomNumber === 1 ? <OrangeNote label={label} /> : <></>}
      {randomNumber === 2 ? <PurpleNote label={label} /> : <></>}
      {randomNumber === 3 ? <GreenNote label={label} /> : <></>}
    </>
  );
};

export default PostOrganizer;
