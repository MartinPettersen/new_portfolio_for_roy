import React from 'react'
import Image from 'next/image'

type Props = {
    stageCompleted: number
}

const ProgressBar = ({stageCompleted}: Props) => {
  return (
    <div className='w-full flex flex-row h-2'>
      {stageCompleted === 1 ? 
        <div style={{ width: `${33}%` }} className="">
          <Image className="w-full h-full object-fill" src="/ProgressRed.svg" alt="progressbar" width={100} 
            height={20} 
            style={{ height: '100%', width: 'auto' }} />
        </div>
      : null}
      {stageCompleted === 2 ? 
        <div style={{ width: `${66}%` }} className="">
        <Image className="w-full h-full object-fill" src="/ProgressOrange.svg" alt="progressbar" width={100} 
            height={20} 
            style={{ height: '100%', width: 'auto' }}/>
      </div>
      : null}
      {stageCompleted === 3 ? 
        <div style={{ width: `${100}%` }}>
        <Image className="w-full h-full object-fill" src="/ProgressGreen.svg" alt="progressbar" width={100} 
            height={20} 
            style={{ height: '100%', width: 'auto' }}/>
          
        </div>
      : null}
    </div>
  )
}

export default ProgressBar