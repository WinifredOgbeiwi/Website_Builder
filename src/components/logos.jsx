import React from 'react'
import assets from '../constants/assets'

export const Logos = ({text}) => {
  return (
      <div className="flex flex-wrap w-full items-center gap-x-4 sm:gap-x-14 gap-y-2 mt-5">
          <div>
              <h6 className="font-semibold text-xs md:text-2xl">100.000+</h6>
              <p className=" p-0 m-0 text-[5px] md:text-lg">{text}</p>
          </div>
          <img src={assets.logo_1} alt="logo" className='w-2/12'/>
          <img src={assets.logo_2} alt="logo" className='w-2/12' />
          <img src={assets.logo_3} alt="logo" className='w-2/12' />
          <img src={assets.logo_4} alt="logo" className='w-2/12' />
          <img src={assets.logo_5} alt="logo" className='w-2/12' />
      </div>
  )
}
