import React from 'react'
import { Image } from "next-sanity/image";
import PushPin from './PushPin';

type Props = {
    portrait: string,
    fullName: string
}

const ImageContainer = ({portrait, fullName}: Props) => {
  return (
    <div className='w-[600px] flex relative items-center justify-center h-[600px] bg-[#F3E9D6] inner-shadow-image-card'>
        <div className='top-[-20] left-[65%] z-[20] absolute'>
          <PushPin />
        </div>
        <Image
            className="w-[500px] h-[500px] z-[10] absolute rotate-3 shadow-project-image"
            src={portrait}
            alt={fullName || "Portrait Image"}
            width={500}
            height={500}
          />
    </div>
  )
}

export default ImageContainer