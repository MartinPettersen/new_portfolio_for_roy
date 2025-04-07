import React from 'react'

type Props = {
    label: string,
    url: string,
}

const TagButton = ({ label}: Props) => {
  return (
    <button className="rounded-xs border-2 font-space-mono text-[#181818] border-[#181818] border-opacity-50  text-sm px-3">{label}</button>

  )
}

export default TagButton