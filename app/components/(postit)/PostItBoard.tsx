"use client";
import React, { useEffect, useState } from "react";
import OrangeNote from "./(postitnotes)/OrangeNote";

type Props = {
  toggled: boolean;
  togglePostIt: () => void;
};

const PostItBoard = ({ toggled }: Props) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const [postIts, setPostIts] = useState<{ x: number; y: number }[]>([])

    const quotes = ["This is a quote", "this is a different quote"];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    if (toggled) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [toggled]);

  const addPostIt = () => {
    setPostIts([...postIts, cursorPosition]);
    console.log("postIts",postIts)
  };

  if (toggled) {
    return (
      <div
        onClick={() => addPostIt()}
        className="bg-pink-400/25 w-screen h-screen z-[9999] fixed top-0 left-0"
      >
        {cursorPosition.x}
        {cursorPosition.y}
        {postIts.length > 0 ? (
          postIts.map((postIt, i) => 
          <div key={i} className={` absolute `}
          style={{
            left: `${postIt.x}px`,
            top: `${postIt.y}px`,
          }}>
            <OrangeNote label={quotes[0]}/>
          </div>)
        ) : (
          <></>
        )}
      </div>
    );
  }
};

export default PostItBoard;
