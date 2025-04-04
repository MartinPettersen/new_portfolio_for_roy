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
    <button onClick={() => downloadCV()} className="border-2 px-2 hover:cursor-pointer">{label}</button>

  )
}

export default DownloadButton