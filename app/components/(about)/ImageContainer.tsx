import React from 'react'
import { Image } from "next-sanity/image";

type Props = {
    portrait: string,
    fullName: string
}

const ImageContainer = ({portrait, fullName}: Props) => {
  return (
    <div className='w-[600px] flex items-center justify-center h-[600px] bg-[#F3E9D6]'>
        <Image
            className="w-[548px] h-[521px] rotate-3"
            src={portrait}
            alt={fullName || "Portrait Image"}
            width={2000}
            height={1000}
          />
    </div>
  )
}

export default ImageContainer