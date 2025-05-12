import React from 'react'

type Props = {
    label: string,
    url: string,
}

const TagButton = ({ label}: Props) => {
  return (
    <button className="rounded-[1px] lowercase bg-[#F3E9D6] border-[1px] font-space-mono text-[#181818] border-[#181818] px-[6px] text-sm"
    
    >{label}</button>

  )
}

export default TagButton