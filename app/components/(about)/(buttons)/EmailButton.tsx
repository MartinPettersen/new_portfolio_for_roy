"use client"
import React from 'react'
import HoverLabel from './HoverLabel'

type Props = {
    email: string,
    label: string
}

const EmailButton = ({email, label}: Props) => {

  const handleEmailClick = () => {
    const mailToLink = `mailto:${email}`
    window.location.href = mailToLink
  }

  return (
    <div className="group py-2 px-4 font-space-mono text-2xl inline-flex items-center justify-center custom-mouse-pointer bg-[#F3E9D6]  hover:bg-[#9E9178] hover:font-bold hover:text-white inner-shadow-button" onClick={handleEmailClick}>{label}
      <HoverLabel hoverLabel={"Open Email"}/>
      </div>

  )
}

export default EmailButton