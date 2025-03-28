import { About } from '@/types/About'
import React from 'react'
import { Image } from "next-sanity/image";

type Props = {
    aboutData: About    
}

const HeaderBanner = ({aboutData}: Props) => {

  return (
    <div className=' flex  px-6 items-center justify-evenly flex-row'>
        <h3 className='w-[50%]'>Ah, you found my website! That means either my UX skills are flawless or your cat walked across the keyboard. Either way, welcome! I design digital experiences so smooth, you’ll wonder if I buttered your screen. And if you don’t like my work—well, I have an identical twin who takes all my complaints.</h3>
        {aboutData.portrait ? (
          <Image
            className="w-[150px] p-2 h-auto"
            src={aboutData.portrait}
            alt={aboutData.fullName || "Portrait Image"}
            width={150}
            height={150}
          />
        ) : (
          <></>
        )}
    </div>
  )
}

export default HeaderBanner