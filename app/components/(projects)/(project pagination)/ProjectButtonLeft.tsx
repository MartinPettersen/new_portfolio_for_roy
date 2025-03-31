import React from 'react'

type Props = {
    action: () => void
}

const ProjectButtonLeft = ({action}: Props) => {
  return (
    <div onClick={() => action()} className='bg-red-600'>Left</div>
  )
}

export default ProjectButtonLeft