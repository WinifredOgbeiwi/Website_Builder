import React from 'react'
import { Heading2 } from '../components/headings'

const Contact = () => {
    return (
        <section className="py-32 max-[600px]:px-2 md:py-[128px] flex flex-col items-center justify-center gap-5">
            <div className='text-center md:w-8/12 '>
                <Heading2 text="Contact Us" />
                <p className='mt-4 mb-4 md:mb-16'> Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut labore.</p>
            </div>

            <div className='bg-[#F4F6FC] md:w-10/12 max-[639px]:px-9 max-[810px]:px-5 lg:px-[77px] py-[55px] rounded-xl'>
                <form action="" className='w-full'>
                    <div className='w-full grid  sm:grid-cols-2 gap-8'>
                        <div>
                            <label htmlFor="name" className=' text-[18px] font-medium'>Name</label>
                            <input type="text" id='name' placeholder='Enter your name' className='border-1 border-[#0000001f] mt-2  rounded-lg' required />
                        </div>
                        <div>
                            <label htmlFor="name" className=' text-[18px] font-medium'>Email</label>
                            <input type="email" id='name' placeholder='Enter your email' className='border-1 border-[#0000001f] mt-2  rounded-lg' required />
                        </div>
                        <div>
                            <label htmlFor="name" className=' text-[18px] font-medium'>Title</label>
                            <input type="text" id='name' placeholder='Title of message' className='border-1 border-[#0000001f] mt-2  rounded-lg ' />
                        </div>
                        <div>
                            <label htmlFor="name" className=' text-[18px] font-medium'>Subject</label>
                            <input type="text" id='name' placeholder='Message subject' className='border-1 border-[#0000001f] mt-2  rounded-lg ' />
                        </div>

                    </div>
                    <div className='text-start mt-8'>
                        <label htmlFor="" className=' text-[18px]'>Message</label>
                        <textarea name="" id="" cols="30" rows="5" placeholder='Write your  question here' className='w-full bg-transparent border-2 rounded-lg py-[18px] px-8 border-[#0000001f]' required></textarea>
                    </div>
                    <button className='bg-black text-white py-6  w-full md:w-64 rounded-[41px] mt-8'>Send Messege</button>

                </form>
            </div>

        </section>
    )
}

export default Contact
