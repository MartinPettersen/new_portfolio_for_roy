import { About } from '@/types/About'
import React from 'react'
import { PortableText, PortableTextBlock } from "@portabletext/react";

type Props = {
    aboutData: About
}

const AboutRightSection = ({aboutData}: Props) => {
  return (
<div className="w-[50%] flex flex-col items-start p-8 h-full justify-center m-4">
          <h3 className="font-bold flex w-full items-center justify-center text-3xl p-b8 font-libre-baskerville">
            {aboutData.fullName}
          </h3>
          <div className="m-4">
            {aboutData.about.map(
              (content: PortableTextBlock, i: number) =>
                content && <PortableText key={i} value={content} />
            )}
          </div>
        </div>
  )
}

export default AboutRightSection