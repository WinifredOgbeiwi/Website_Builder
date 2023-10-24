import React from 'react'
import LinkIcon from './link'

const HoverTexts = ({heading, paragraph, width, bottom}) => {
  return (
      <div className={`linear h-full ${width} absolute `}>
          <div className='flex flex-col h-full justify-end mx-2 xs:mx-10 md:pb-10 text-white '>
              <h3 className=' text-[10px] lg:text-2xl font-semibold mb-2 md:mb-4'>{heading}</h3>
              <p className={`text-[5px] xs:text-xs md:text-base font-medium xs:${bottom}`}>{paragraph} </p>
              <LinkIcon link="/project" text="View Project" color="text-[#FCD980]" />
          </div>
      </div>
  )
}

export default HoverTexts
