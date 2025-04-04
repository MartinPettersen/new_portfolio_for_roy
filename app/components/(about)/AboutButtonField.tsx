import React from 'react'
import ClipBoardButton from './ClipBoardButton'
import DownloadButton from './DownloadButton'
import { About } from '@/types/About'

type Props = {
    aboutData: About
}

const AboutButtonField = ({aboutData}: Props) => {

    
  return (
    <div className="w-full flex items-center justify-evenly">
    {aboutData.tlf ? (
      <ClipBoardButton text={aboutData.tlf} label={"tlf"} />
    ) : null}
    {aboutData.mail ? (
      <ClipBoardButton text={aboutData.mail} label={"mail"} />
    ) : null}

    {aboutData.linkedin ? (
      <ClipBoardButton text={aboutData.linkedin} label={"linkedin"} />
    ) : null}

    {aboutData.cv ? <DownloadButton label="cv" cv={aboutData.cv as unknown as string} /> : null}
  </div>
  )
}

export default AboutButtonField