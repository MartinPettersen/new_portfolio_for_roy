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
    <button onClick={() => downloadCV()} className="group font-space-mono py-2 px-4 text-2xl custom-mouse-pointer bg-[#F3E9D6] hover:bg-[#9E9178] hover:font-bold hover:text-white inner-shadow-button inline-flex items-center justify-center gap-2">{label}
    <svg className=" group-hover:brightness-0 group-hover:invert" width="25" height="30" viewBox="0 0 35 39" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M33 29.45V37.2H2V29.45" stroke="#181818" strokeWidth="3" strokeLinecap="square" strokeLinejoin="round"/>
<path d="M12.3333 0L12.3333 17.5726C12.3333 17.5726 7.68333 15.0622 2 18.9738C2 18.9738 13.8211 28.5431 17.655 34.1C21.4038 28.5431 33 18.9738 33 18.9738C27.3167 15.0622 22.6667 17.5726 22.6667 17.5726V0H12.3333Z" fill="#181818"/>
</svg>

    </button>

  )
}

export default DownloadButton