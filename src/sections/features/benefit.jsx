import React from 'react'
import { Logos } from '../../components/logos'
import data from '../../constants/data'
import { Heading2 } from '../../components/headings'

export const Benefit = () => {
  return (
      <section className="py-16 md:py-[128px] text-center flex flex-col items-center ">
          <Heading2
              text="The benefits of working with us"
              width="md:w-2/3 lg:w-1/3"
          />
          <Logos text="Figma Users" />
          <div className="grid md:grid-cols-3 gap-10 mt-14 ">
              {data.benefit_box_data.map(({ id, img, heading, paragraph }) => (
                  <div key={id} className=" shadow-md bg-[#F4F6FC] py-14 px-7 w-full">
                      <img src={img} alt="" />
                      <h5 className="mt-6 mb-3 sm:text-2xl font-medium">{heading}</h5>
                      <p className="text-sm sm:text-base text-grey2">{paragraph}</p>
                  </div>
              ))}
          </div>
       
      </section>
  )
}
