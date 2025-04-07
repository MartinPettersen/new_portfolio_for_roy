import React from 'react'
import PostItCombo from '../(postit)/PostItCombo'
import { SiteData } from '@/types/SiteData'

type Props = {
    siteData: SiteData   
}

const HeaderBanner = ({siteData}: Props) => {

  return (
    <div className='hidden md:flex  px-6 items-center justify-evenly flex-row'>
        <h3 className='w-[50%] text-3xl font-space-mono'>{siteData.bannerquote}</h3>
        <PostItCombo />
        
    </div>
  )
}

export default HeaderBanner