import React from 'react'

type Props = {
  action: () => void
}

const ProjectButtonRight = ({action}: Props) => {
  return (
    <div onClick={() => action()} className='bg-[#FF5757]'>Right</div>
  )
}

export default ProjectButtonRight