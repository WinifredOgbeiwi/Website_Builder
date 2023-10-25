import React from 'react'
import { Heading1 } from '../../components/headings'
import assets from '../../constants/assets'
export const Hero = () => {
    return (
        <main className=" py-20 md:py-40 flex flex-col-reverse md:flex-row md:justify-between items-center gap-16">
            <div className="md:w-1/2 ">
                <p className=' text-xl mb-2 font-medium text-center md:text-start'>About us</p>
                <Heading1 text="Our designs solve problems" color="text-main" />
                <p className='mt-8 text-center md:text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </div>

            <div>
                <img src={assets.about_1} alt="" />
            </div>
        </main>
    )
}
