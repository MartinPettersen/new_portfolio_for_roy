"use client"
import React from 'react'

type Props = {
    text: string,
    label: string
}

const ClipBoardButton = ({text, label}: Props) => {
  return (
    <p className="p-2 flex items-center justify-center hover:cursor-pointer bg-[#F3E9D6] shadow-custom" onClick={() => {navigator.clipboard.writeText(text)}}>{label}</p>

  )
}

export default ClipBoardButton