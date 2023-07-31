import React from 'react'
import '../globals.css'

interface Props{
  children: any
}

export default function SimpleButton({children}: Props) {
  return (

    <button className='simpleButtonGradient text-xl lg:text-3xl'>
      <strong>{children}</strong>
    </button>
  )
}
