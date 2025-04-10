"use client"
import React, { useState } from 'react'
import ParallaxHeaderBanner from './ParallaxHeaderBanner'
import HeaderBanner from './HeaderBanner'
import { SiteData } from '@/types/SiteData';

type Props = {
  siteData: SiteData;
};

const ComboBanner = ({siteData}: Props) => {

  const [toggled, setToggled] = useState(false);


  return (
    <>
    {!toggled? <ParallaxHeaderBanner siteData={siteData} toggled={toggled} setToggled={setToggled}/> : <HeaderBanner siteData={siteData} toggled={toggled} setToggled={setToggled}/>}
    </>
  )
}

export default ComboBanner