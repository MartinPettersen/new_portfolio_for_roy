"use client";
import React, { useEffect, useState } from "react";
import PostOrganizer from "./PostOrganizer";
import TrashBucket from "./TrashBucket";

type Props = {
  toggled: boolean;
  togglePostIt: () => void;
};

const PostItBoard = ({ toggled, togglePostIt }: Props) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const [postIts, setPostIts] = useState<{ x: number; y: number }[]>([])


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

  const deletePostIts = () => {
    setPostIts([])
    togglePostIt()
  }

  if (toggled) {
    return (
      <div
        className=" w-screen h-screen z-[9999] fixed top-0 left-0"
      >
        <div className="z-[9999] absolute top-8 right-16">
        <TrashBucket deletePostIts={deletePostIts}/>
        </div>
        <div 
          className=" z-[900] absolute top-0 left-0 w-screen h-screen" 
          onClick={() => addPostIt()}
        ></div>
        {postIts.length > 0 ? (
          postIts.map((postIt, i) => 
          <div key={i} className={` absolute `}
          style={{
            left: `${postIt.x}px`,
            top: `${postIt.y}px`,
          }}>
            <PostOrganizer index={postIts.length}/>
          </div>)
        ) : (
          <></>
        )}
      </div>
    );
  }
};

export default PostItBoard;
