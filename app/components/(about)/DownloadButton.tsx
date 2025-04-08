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
    <button onClick={() => downloadCV()} className=" p-2 text-2xl hover:cursor-pointer bg-[#F3E9D6] shadow-custom flex items-center justify-center gap-2">{label} <Image src="/DownloadIcon.svg" alt="Download" width={30} height={30} /></button>

  )
}

export default DownloadButton