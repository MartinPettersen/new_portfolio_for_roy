import React from 'react'

type Props = {
    label: string,
    url: string,
}

const TagButton = ({ label}: Props) => {
  return (
    <button className="rounded-lg border-2 border-black border-opacity-50 bg-[#8E9FB6] text-sm px-3">{label}</button>

  )
}

export default TagButton