"use client"
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
    <button onClick={() => downloadCV()} className=" p-2 hover:cursor-pointer bg-[#F3E9D6] shadow-custom">{label}</button>

  )
}

export default DownloadButton