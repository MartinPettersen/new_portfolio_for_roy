import React from 'react'

type Props = {
    stageCompleted: number
}

const ProgressBar = ({stageCompleted}: Props) => {
  return (
    <div className='w-full flex flex-row h-2'>
      {stageCompleted === 1 ? 
        <div style={{ width: `${33}%` }} className="bg-[#F05D7E]"></div>
      : null}
      {stageCompleted === 2 ? 
        <div style={{ width: `${66}%` }} className="bg-[#FFAA75]"></div>
      : null}
      {stageCompleted === 3 ? 
        <div style={{ width: `${100}%` }} className="bg-[#6A894B]"></div>
      : null}
    </div>
  )
}

export default ProgressBar