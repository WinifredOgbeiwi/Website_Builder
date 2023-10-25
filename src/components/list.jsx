import React from 'react'
import assets from '../constants/assets'

export const List = ({text}) => {
  return (
    <div className='flex items-center gap-2'>
      <img src={assets.pointer} alt="pointer" />
<li>{text}</li>
    </div>
 
  )
}


export const Listgrey = ({ text }) => {
  return (
    <div className='flex items-center gap-2'>
      <img src={assets.pointer_grey} alt="pointer" />
      <li>{text}</li>
    </div>

  )
}