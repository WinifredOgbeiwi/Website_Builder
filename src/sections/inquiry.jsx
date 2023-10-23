import React from 'react'
import assets from '../constants/assets'
import LinkIcon from '../components/link'

const Inquiry = () => {
    return (
        <section className='flex'>
            <div className='h-100 w-1/2 text-white '
                style={{
                    backgroundImage: `url(${assets.woman_writing})`,
                    backgroundRepeat: "no-repeat"
                }}>

                <div className='h-full w-full px-24 pt-24 pb-[48px]' style={{
                    backgroundColor: 'rgba(28, 30, 83, 0.50)',
                }}>
                    <h2 className=' text-5xl font-semibold leading-snug'>Building stellar websites for early startups</h2>
                    <p className='mt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
                </div>
            </div>

            <div className='bg-[#1C1E53] px-24 pt-24 pb-[48px] text-white w-1/2'>
                <h3 className='text-3xl font-medium'>Send inquiry</h3>
                <p className='font-medium mt-4 mb-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                <form action="">
                    <input type="text" placeholder='Name' required />
                    <input type="email" placeholder='Email' required />
                    <input type="url" placeholder='Paste your Figma design URL' />
                    <button className='bg-yell text-black rounded-2xl w-full py-3 mt-[39px]'>Send an Inquiry</button>
                </form>
                <div className='flex justify-center mt-[28px]'>
                    <LinkIcon link="/contact" text={"Get in touch with us"} />
                </div>
            </div>
        </section>
    )
}

export default Inquiry
