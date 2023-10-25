import React from 'react'
import { Heading3 } from '../../components/headings'
import assets from '../../constants/assets'

export const WhoWeAre = () => {
    return (
        <section className='bg-[#F4F5F5] py-20 md:py-[128px] text-center md:text-start'>
            <p className=''>Who we are</p>
            <div className=' space-x-3 flex flex-col md:flex-row justify-center items-center md:items-start md:justify-between md:gap-x-10 '>
                <div>
                    <Heading3 text="Goal Focused" />
                    <p className='mt-4  mb-10 md:mb-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>

                <div>
                    <Heading3 text="Continuous improvement" />
                    <p className='mt-4 mb-5 md:mb-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
            <img src={assets.about_2} alt="" />
        </section>
    )
}
