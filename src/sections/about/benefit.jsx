import React from 'react'
import { Heading2, Heading3 } from '../../components/headings'
import data from '../../constants/data'
import assets from '../../constants/assets'

export const Benefit = () => {
    return (
        <section className="py-20 md:py-[128px] text-center flex flex-col items-center ">
            <Heading2 text="The benefits of working with us" width="md:w-2/3 lg:w-1/3" />
            <div className='grid md:grid-cols-3 gap-10 mt-14 '>
                {data.benefit_box_data.map(({ id, img, heading, paragraph }) => (
                    <div key={id} className=' shadow-md bg-[#F4F6FC] py-14 px-7 w-full'>
                        <img src={img} alt="" />
                        <h5 className='mt-6 mb-3 sm:text-2xl font-medium'>{heading}</h5>
                        <p className='text-sm sm:text-base text-grey2'>{paragraph}</p>
                    </div>
                ))}
            </div>
            <div className='grid grid-cols-3 xl:grid-cols-6 items-center gap-x-4 sm:gap-x-14 gap-y-6 mt-12'>
                <div>
                    <h6 className='font-semibold text-lg md:text-2xl'>100.000+</h6>
                    <p className=' p-0 m-0 text-xs md:text-lg'>Finsweet Users</p>
                </div>
                <img src={assets.logo_1} alt="" />
                <img src={assets.logo_2} alt=""  />
                <img src={assets.logo_3} alt="" />
                <img src={assets.logo_4} alt="" />
                <img src={assets.logo_5} alt="" />
            </div>

        </section>
    )
}
