import React from 'react'

type Props = {
    label: string
}

const QuoteCard = ({label}: Props) => {
  return (
    <div className='flex w-[384px] text-5xl font-permanent-marker h-[388px] items-center justify-center'>{label}</div>
  )
}

export default QuoteCard