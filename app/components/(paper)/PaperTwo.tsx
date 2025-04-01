"use client"
import React, { useEffect, useState } from 'react'

type Props = {
  active: boolean;
  timer: number;
}

const PaperTwo = ({active, timer}: Props) => {



    const [position, setPosition] = useState("back")
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
    <div className={`bg-[#CFCC68] ${position === "front" ? "ml-[80vh] mt-[-1vh] z-[41]": "ml-[88vh] mt-[0vh] z-[40]" } w-[50vw] h-[50vh] absolute transition-all duration-1000 
    ${animating? "rotate-0": position === "front" ? "-rotate-12" : "-rotate-10"}
    `}>PaperOne</div>
  )
}

export default PaperTwo