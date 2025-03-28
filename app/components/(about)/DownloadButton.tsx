"use client"
import { File } from '@/types/File'
import React from 'react'

type Props = {
    cv: File,
    label: string
}

const DownloadButton = ({label, cv}: Props) => {

    
  const downloadCV = () => {
    if (cv?.asset?.url) {
        window.open(cv.asset.url, '_blank');
      }
  }
  return (
    <button onClick={() => downloadCV()} className="border-2 px-2">{label}</button>

  )
}

export default DownloadButton