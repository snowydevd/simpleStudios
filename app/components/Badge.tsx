import React from 'react'

interface Props{
    children: any
}

export default function Badge({children}: Props) {
  return (
    <div className='p-2 bg-violet-900 rounded-lg m-3 text-white w-fit text-xs'>{children}</div>
  )
}
