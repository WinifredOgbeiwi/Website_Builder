import React from 'react'
import assets from '../constants/assets'

export const Logos = () => {
  return (
      <div className="flex flex-wrap w-full items-center gap-x-4 sm:gap-x-14 gap-y-2 mt-5">
          <img src={assets.logo_1} alt="logo" className='w-2/12'/>
          <img src={assets.logo_2} alt="logo" className='w-2/12' />
          <img src={assets.logo_3} alt="logo" className='w-2/12' />
          <img src={assets.logo_4} alt="logo" className='w-2/12' />
          <img src={assets.logo_5} alt="logo" className='w-2/12' />
      </div>
  )
}
