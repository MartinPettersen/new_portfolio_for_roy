import { About } from '@/types/About'
import React from 'react'
import PostItCombo from '../(postit)/PostItCombo'

type Props = {
    aboutData: About    
}

const HeaderBanner = ({aboutData}: Props) => {

  return (
    <div className='hidden md:flex  px-6 items-center justify-evenly flex-row'>
        <h3 className='w-[50%] text-3xl font-space-mono'>{aboutData.quote}</h3>
        {aboutData.portrait ? (
          <PostItCombo />
          
        ) : (
          <></>
        )}
    </div>
  )
}

export default HeaderBanner