import React from 'react'
import LinkIcon from './link'

const HoverTexts = ({heading, paragraph, width}) => {
  return (
      <div className={`linear h-full ${width} absolute`}>
          <div className=' absolute bottom-16 mx-10 text-white'>
              <h3 className=' text-2xl font-semibold mb-4'>{heading}</h3>
              <p className=' font-medium mb-10'>{paragraph} </p>
              <LinkIcon link="/project" text="View Project" color="text-[#FCD980]" />
          </div>
      </div>
  )
}

export default HoverTexts
