import React from 'react'
import { Logos } from '../../components/logos'
import data from '../../constants/data'
import { Heading2, Heading3 } from '../../components/headings'
import assets from '../../constants/assets'

export const Benefit = () => {
  return (
      <section className="py-16 md:py-[128px] text-center flex flex-col items-center ">
          <Heading2
              text="The benefits of working with us"
              width="md:w-2/3 lg:w-1/3"
          />
          <Logos />
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 mt-14 ">
              {data.benefit_box_data.map(({ id, img, heading, paragraph }) => (
                  <div key={id} className=" shadow-md bg-[#F4F6FC] max-[768px]:flex max-[768px]:flex-col max-[768px]:justify-center max-[768px]:items-center py-14 px-7 w-full">
                      <img src={img} alt="" />
                      <h5 className="mt-6 mb-3 sm:text-2xl font-medium">{heading}</h5>
                      <p className="text-sm sm:text-base text-grey2">{paragraph}</p>
                  </div>
              ))}
          </div>
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-x-20 xl:space-x-40 mt-20" >
              <div className="text-center md:text-start w-full md:w-1/2">
                  <p className='mb-2'>Use Client-first</p>
                  <Heading3 text="Top agencies and freelancers around the world use Client-first " />
                  <p className='mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
              </div>
              <div className='w-full md:w-1/2'>
                <img src={assets.feature_1} alt=""/>
                </div>
          </div>
      </section>
  )
}
