import React from 'react'

type Props = {
    hoverLabel: string
}

const HoverLabel = ({hoverLabel}: Props) => {
  return (
    <div className="z-2 absolute hidden group-hover:flex px-2 bg-[#F3E9D6] border-[1px]">
    {hoverLabel}
  </div>
  )
}

export default HoverLabel