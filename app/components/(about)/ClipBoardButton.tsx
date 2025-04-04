"use client"
import React from 'react'

type Props = {
    text: string,
    label: string
}

const ClipBoardButton = ({text, label}: Props) => {
  return (
    <p className="border-2 px-2 hover:cursor-pointer" onClick={() => {navigator.clipboard.writeText(text)}}>{label}</p>

  )
}

export default ClipBoardButton