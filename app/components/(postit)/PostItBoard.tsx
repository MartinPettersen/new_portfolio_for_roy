"use client";
import React, { useEffect, useState } from "react";
import PostOrganizer from "./PostOrganizer";
import TrashBucket from "./TrashBucket";
import { SiteData } from "@/types/SiteData";

type Props = {
  toggled: boolean;
  togglePostIt: () => void;
  siteData: SiteData;
};

const PostItBoard = ({ toggled, togglePostIt, siteData }: Props) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0, lifeTimer: 1 });
  const [isDeleteing, setIsDeleting] = useState(false)
  const [trashCanPosition, setTrashCanPosition] = useState({ x: 0, y: 0})
  const [postIts, setPostIts] = useState<{ x: number; y: number, lifeTimer: number }[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
        //167 161
      const num = Math.floor(Math.random() * 1000) + 1;

      setCursorPosition({ x: (e.clientX - (167 / 2)) , y: (e.clientY - (161 / 2)), lifeTimer: num });
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
    console.log("postIts", postIts);
  };

  const deletePostIts = () => {
    setIsDeleting(true)
    const TrashBucketElement = document.querySelector('.trash-bucket')

    if (TrashBucketElement) {
      const temp = TrashBucketElement.getBoundingClientRect()
      setTrashCanPosition({ x: temp.left + temp.width/12, y: temp.top - temp.height/3 })
    }

    setTimeout(() => {
      setPostIts([])
      setIsDeleting(false)
      togglePostIt();

    }, 1000)

  };

  if (toggled) {
    return (
      <div className=" w-screen h-screen z-[9999] fixed top-0 left-0">
        <div className="z-[9999] absolute top-8 left-26">
          <TrashBucket deletePostIts={deletePostIts} />
        </div>
        <div
          className=" z-[900] absolute top-0 left-0 w-screen h-screen"
          onClick={() => addPostIt()}
        ></div>
        {postIts.length > 0 ? (
          postIts.map((postIt, i) => (
            <div
              key={i}
              className={` absolute transition-all  ease-in-out ${isDeleteing ? 'opacity-100' : ''}`}
              style={{
                left: isDeleteing ? `${trashCanPosition.x}px` : `${postIt.x}px`,
                top: isDeleteing ? `${trashCanPosition.y}px` : `${postIt.y}px`,
                transform: isDeleteing ? 'scale(0.1)' : 'scale(1)',
                transitionDuration: `${postIt.lifeTimer}ms`,
              }}
            >
              <PostOrganizer index={postIts.length} siteData={siteData} />
            </div>
          ))
        ) : (
          <></>
        )}
      </div>
    );
  }
};

export default PostItBoard;
