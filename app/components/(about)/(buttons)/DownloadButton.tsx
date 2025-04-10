"use client"
import Image from 'next/image'
import React from 'react'

type Props = {
    cv: string,
    label: string
}

const DownloadButton = ({label, cv}: Props) => {

    
  const downloadCV = () => {
    if (cv) {
        window.open(cv, '_blank');
      }
  }
  return (
    <button onClick={() => downloadCV()} className="group p-2 text-2xl hover:cursor-pointer bg-[#F3E9D6] hover:bg-[#9E9178] hover:font-bold hover:text-white inner-shadow-button flex items-center justify-center gap-2">{label} <Image className=" group-hover:brightness-0 group-hover:invert" src="/DownloadIcon.svg" alt="Download" width={30} height={30} /></button>

  )
}

export default DownloadButton