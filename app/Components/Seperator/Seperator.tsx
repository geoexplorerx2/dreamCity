import React, { FC, useEffect, useState } from 'react'


interface SeperatorProps {
    color?: string,
    className?: string
}


const Seperator: FC<SeperatorProps> = ({color= 'red', className }) => {
  
  const variants = {
    red: 'bg-[radial-gradient(50%_50.00%_at_50%_50.00%,_#D33535_0%,_rgba(211,_53,_53,_0.00)_100%)]',
    black: 'bg-[radial-gradient(50%_50.00%_at_50%_50.00%,_#0A111F_0%,_rgba(10,_17,_31,_0.00)_100%)]'
  }
  // 3c1212
  
  

  return (
    // @ts-ignore
    <div className={` w-full h-[2px] ${variants[color]} ${className}`}></div>
  )
}

export default Seperator