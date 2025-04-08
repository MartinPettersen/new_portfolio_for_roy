import React from 'react'

type Props = {
    label: string,
    url: string,
}

const TagButton = ({ label}: Props) => {
  return (
    <button className="rounded-[1px] bg-[#F3E9D6] border-[1px] font-space-mono text-[#181818] border-[#181818]  text-sm">{label}</button>

  )
}

export default TagButton