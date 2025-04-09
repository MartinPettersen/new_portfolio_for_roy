import React from 'react'

type Props = {
    stageCompleted: number
}

const ProgressBar = ({stageCompleted}: Props) => {
  return (
    <div className='w-full pb-4 hidden sm:flex flex-row  '>
      {stageCompleted === 1 ? 
        <svg width={"10%"} height="20" viewBox="0 0 92 20" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.660645 19.9286V0H91.1696L84.5267 3.32143L87.0178 10.7946L82.866 13.2857L87.0178 19.9286H0.660645Z" fill="#F05D7E"/>
        </svg>
        
      : null}
      {stageCompleted === 2 ? 
        <svg width={"50%"} height="20" viewBox="0 0 342 20" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.660645 20.4642V0.535645H341.146L334.442 3.85707L336.956 11.3303L332.766 13.8214L336.956 20.4642H0.660645Z" fill="#FFAA75"/>
        </svg>
        
      : null}
      {stageCompleted === 3 ? 
        <svg width={"100%"} height="20" viewBox="0 0 643 20" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 19.9286V0H642.696L640.205 3.32143V9.96429L641.866 15.7768L639.375 19.9286H0Z" fill="#6A894B"/>
        </svg>
        
      : null}
    </div>
  )
}

export default ProgressBar