"use client"
import React, { useEffect, useState } from 'react'

type Props = {
  active: boolean;
  timer: number;
}

const PaperTwo = ({active, timer}: Props) => {



    const [position, setPosition] = useState(active ? "front" : "back")
    const [animating, setAnimating] = useState(false)

    useEffect(() => {
        if (active) {
            setPosition("front")
        } else {
            startAnimation()
        }
    },[active])

    const startAnimation = () => {
        setAnimating(true)

        setTimeout(() => {
            setPosition("back")

            setTimeout(() => {
                setAnimating(false)
            }, timer)
        }, timer)
    }


  return (
    <div className={`bg-[#264773] ${position === "front" ? "ml-[10vh] md:ml-[30vh] mt-[-1vh] z-[1]": "ml-[18vh] md:ml-[38vh] mt-[0vh] z-[0]" } w-[50vw] h-[20vh] absolute transition-all duration-300 
    ${animating? "rotate-5 mt-[4vh] ": position === "front" ? "-rotate-12 shadow-weak" : "-rotate-10 shadow-weak"}
    `}>PaperOne</div>
  )
}

export default PaperTwo