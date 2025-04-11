"use client"
import React from 'react'

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
    <p className="py-2 px-4 font-space-mono text-2xl inline-flex items-center justify-center hover:cursor-pointer bg-[#F3E9D6]  hover:bg-[#9E9178] hover:font-bold hover:text-white inner-shadow-button" onClick={handleEmailClick}>{label}</p>

  )
}

export default EmailButton