import React from 'react'

type Props = {
  action: () => void
}

const ProjectButtonRight = ({action}: Props) => {
  return (
    <div onClick={() => action()} className='bg-red-600'>Right</div>
  )
}

export default ProjectButtonRight