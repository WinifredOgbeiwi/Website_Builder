import React from 'react'

import data from '../../constants/data';
import { Heading2 } from '../../components/headings';

const Features = () => {
    return (
        <section className=' bg-[#F4F6FC] py-[128px]'>
            <div className='flex flex-col justify-center items-center text-center mb-12 '>
                <h5 className='text-xs sm:text-base font-medium mb-3'>Features</h5>
                <Heading2 text="Design that solves problems, one product at a time" align="text-center" />
            </div>
            <div className='grid md:grid-cols-3 gap-10 '>
                {data.feature_box_data.map(({ id, img, heading, paragraph }) => (
                    <div key={id} className=' shadow-lg bg-white py-14 px-7 w-full'>
                        <img src={img} alt="" />
                        <h5 className='mt-6 mb-3 sm:text-2xl font-medium'>{heading}</h5>
                        <p className='text-sm sm:text-base text-grey2'>{paragraph}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Features
