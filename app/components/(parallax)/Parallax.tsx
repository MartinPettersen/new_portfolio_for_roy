import React from 'react'
import Header from '../(header)/Header';

type Props = {
    children: React.ReactNode;
}

const Parallax = ({children}: Props) => {
  return (
    <div>
        <Header />
        <div>
            {children}
        </div>
        <div>
        <Header />
        </div>
    </div>
  )
}

export default Parallax