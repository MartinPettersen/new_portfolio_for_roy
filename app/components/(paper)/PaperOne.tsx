"use client"
import React, { useEffect, useState } from 'react'

type Props = {
    active: boolean;
    timer: number
}

const PaperOne = ({active, timer}: Props) => {

    const [position, setPosition] = useState("front")
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
    <div className={`bg-[#B0956B] ${position === "front" ? "ml-[80vh] mt-[-1vh] z-[41]": "ml-[88vh] mt-[0vh] z-[40]" } 
    absolute  transition-all duration-1000
    ${animating? "rotate-0": position === "front" ? "-rotate-12" : "-rotate-10"}
    w-[50vw] h-[50vh] `}>PaperOne</div>
  )
}

export default PaperOne