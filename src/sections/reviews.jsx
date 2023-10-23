import React, { useState } from 'react'
import data from '../constants/data';
import { MdArrowBackIos, MdArrowForwardIos }from 'react-icons/md'
const Reviews = () => {

    const details = data.review_data

    const [current, setCurrent] = useState(0)

    const handleNext = () => {
        setCurrent((prev) => (prev + 1) % details.length)
    }
    const handleprev = () => {
        setCurrent((prev) => (prev - 1 + details.length) % details.length);
    }

    return (
        <section className='py-[130px] bg-[#F4F6FC]'>
            <div className='flex space-x-10 '>
                <div>
                    <h3 className='text-[38px] font-semibold mb-4'>What our clients say about us</h3>
                    <p className=' text-grey2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
                </div>
                <div className=' w-[100%]'>
                    <h3 className='text-3xl font-semibold'>{details[current].quote}</h3>
                    <div className='flex justify-between items-center mt-12'>

                        <div key={details[current].id} className='flex gap-3 mt-12'>
                            <div className='border w-14 h-14 rounded-full overflow-hidden'>
                                <img src={ details[current].img} alt="" className=' object-cover w-full'/>
                            </div>
                            <div>
                                <h6 className='text-xl font-medium'>{details[current].name}</h6>
                                <p className='text-xs font-medium'>{details[current].title}</p>
                            </div>
                        </div>
                        <div className='flex gap-6 items-center'>
                            <div onClick={handleprev} className='active:bg-[#5239FA] hover:cursor-pointer rounded-full p-2 text-[#282938] active:text-white'>
                                <MdArrowBackIos />
                            </div>

                        
                            <div onClick={handleNext} className='bg-[#5239FA] hover:cursor-pointer  rounded-full p-2 text-white'>
                                  <MdArrowForwardIos/>
                            </div>
                    
                            </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Reviews
