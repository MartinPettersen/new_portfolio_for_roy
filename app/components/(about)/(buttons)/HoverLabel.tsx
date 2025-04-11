import React from 'react'

type Props = {
    hoverLabel: string
}

const HoverLabel = ({hoverLabel}: Props) => {
  return (
    <div className="z-2 absolute hidden group-hover:flex px-2 mt-18 text-[#F7F7F7] bg-black border-[1px] border-[#F7F7F7]">
    {hoverLabel}
  </div>
  )
}

export default HoverLabel