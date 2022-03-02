
import React from 'react'

interface CardProps {
  width: string,
  height: string,
  children?: React.ReactChild | React.ReactNode
}

export const Card = (props: CardProps) => {
  const {width, height, children} = props
  return (
    <div className='Card' style={{width, height, backgroundColor: 'red'}}>
      {children}
    </div>
  )
}