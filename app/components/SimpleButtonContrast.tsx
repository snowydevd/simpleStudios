import React from 'react'
import '../globals.css'

interface Props{
  children: any
}


export default function SimpleButtonContrast({children}: Props) {
  return (

    <button className='simpleButtonContrast text-xl lg:text-3xl'>
      <strong>{children}</strong>
    </button>
  )
}
