import React from 'react'

export const Logos = ({text}) => {
  return (
      <div className="grid grid-cols-3 xl:grid-cols-6 items-center gap-x-4 sm:gap-x-14 gap-y-6 mt-12">
          <div>
              <h6 className="font-semibold text-lg md:text-2xl">100.000+</h6>
              <p className=" p-0 m-0 text-xs md:text-lg">{text}</p>
          </div>
          <img src={assets.logo_1} alt="logo" />
          <img src={assets.logo_2} alt="logo" />
          <img src={assets.logo_3} alt="logo" />
          <img src={assets.logo_4} alt="logo" />
          <img src={assets.logo_5} alt="logo" />
      </div>
  )
}
