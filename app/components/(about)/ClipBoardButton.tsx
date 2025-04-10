"use client"
import React from 'react'

type Props = {
    text: string,
    label: string
}

const ClipBoardButton = ({text, label}: Props) => {
  return (
    <div className='group flex items-center justify-end'>

    <p className="p-2 z-1 w-full text-2xl flex items-center justify-center hover:cursor-pointer bg-[#F3E9D6]  hover:bg-[#9E9178] hover:font-bold hover:text-white inner-shadow-button" onClick={() => {navigator.clipboard.writeText(text)}}>{label}</p>
    <div className='z-2 absolute hidden group-hover:flex px-2 bg-[#F3E9D6] border-[1px]'>
      Copy
    </div>
    </div>

  )
}

export default ClipBoardButton