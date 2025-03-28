import React from 'react'

type Props = {
    label: string,
    url: string,
}

const TagButton = ({ label}: Props) => {
  return (
    <button className="rounded-xl border-black text-sm border-2 px-3">{label}</button>

  )
}

export default TagButton