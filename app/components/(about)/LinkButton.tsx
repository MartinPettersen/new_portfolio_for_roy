import React from 'react'

type Props = {
    url: string,
    label: string
}

const LinkButton = ({url, label}: Props) => {
  return (
    <a target="_blank" href={url} rel="noopener noreferrer">
    <div className={`p-2 text-2xl flex items-center justify-center hover:cursor-pointer bg-[#F3E9D6]  hover:bg-[#9E9178] hover:font-bold hover:text-white inner-shadow-button`} >
        {label}
    </div>
    </a>
  )
}

export default LinkButton