import React, { useState } from 'react'
import data from '../../constants/data';
import { MdArrowBackIos, MdArrowForwardIos }from 'react-icons/md'
import { Heading3 } from '../../components/headings';
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
        <section className=' py-6 sm:py-[128px] bg-[#F4F6FC]'>
            <div className='flex flex-col md:flex-row sm:space-x-10 '>
                <div>
                    <Heading3 text="What our clients say about us"/>
                    <p className='text-sm lg:text-base text-grey2 text-center md:text-start mb-10 md:mb-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
                </div>
                <div className='w-11/12'>
                    <h4 className='text-xl lg:text-3xl font-medium text-center md:text-start'>{details[current].quote}</h4>
                    <div className='flex justify-between items-center mt-7 md:mt-12 w-10/12 md:w-full '>
                        <div key={details[current].id} className='flex gap-3 md:mt-5'>
                            <div className='border w-14 h-14 rounded-full overflow-hidden'>
                                <img src={ details[current].img} alt="" className=' object-cover w-full'/>
                            </div>
                            <div>
                                <h6 className='text:md sm:text-xl font-medium'>{details[current].name}</h6>
                                <p className='text-xs font-medium'>{details[current].title}</p>
                            </div>
                        </div>
                        <div className='flex gap-6 items-center'>
                            <div onClick={handleprev} className='active:bg-[#5239FA] hover:cursor-pointer rounded-full p-2 text-[#282938] active:text-white w-fit'>
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
