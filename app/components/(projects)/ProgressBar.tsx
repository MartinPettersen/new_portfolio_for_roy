import React from 'react'

type Props = {
    percentageCompleted: number
}

const ProgressBar = ({percentageCompleted}: Props) => {
  return (
    <div className='w-full flex flex-row h-2'>
        <div style={{ width: `${percentageCompleted}%` }} className="bg-blue-500"></div>
        <div style={{ width: `${100 - percentageCompleted}%` }} className="bg-slate-200"></div>
    </div>
  )
}

export default ProgressBar