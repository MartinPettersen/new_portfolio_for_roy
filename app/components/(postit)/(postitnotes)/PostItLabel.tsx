import React from 'react'

type Props = {
    label: string,
}

const PostItLabel = ({label}: Props) => {
  return (
    <div className="text-center w-full h-full overflow-hidden font-permanent-marker flex items-center justify-center">{label}</div>

  )
}

export default PostItLabel