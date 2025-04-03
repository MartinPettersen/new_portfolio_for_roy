"use client";
import React, { useState } from "react";
import PostItButton from "./PostItButton";
import PostItBoard from "./PostItBoard";

const PostItCombo = () => {
  const [toggled, setToggled] = useState(false);

  const togglePostIt = () => {
    setToggled(!toggled);
  };

  return (
    <>
      <PostItButton togglePostIt={togglePostIt} />
      <PostItBoard toggled={toggled} togglePostIt={togglePostIt} />
    </>
  );
};

export default PostItCombo;
