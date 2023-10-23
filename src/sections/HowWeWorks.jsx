import React from 'react'
import LinkIcon from '../components/link'
import data from '../constants/data';

const HowWeWorks = () => {
    return (
        <>
            <section className='bg-[#F4F6FC] py-[128px] flex flex-col md:flex-row justify-center items-center md:items-start md:justify-between gap-10 text-center md:text-start'>
                <div className=' max-w-sm flex flex-col items-center md:items-start'>
                    <h2 className='text-4xl md:text-5xl font-semibold'>How We Work</h2>
                    <p className='text-greyy my-4 text-sm md:text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    <LinkIcon link={"/contact"} text={"Get in touch with us"} color="text-purple" />

                </div>


                <div className='grid md:grid-cols-2 space-x-5 gap-y-10'>
                    {data.how_we_work_data.map((item) => {
                        return (
                            <div id={item.id} className=' max-w-xs text-[#282938] flex flex-col items-center md:items-start mb-5'>
                                <div >
                                    <img src={item.img} alt="" />
                                    </div>
                                <h3 className=' text-3xl my-4'>{item.heading}</h3>
                                <p>{item.text}</p>
                            </div>
                        )
                    })}



                </div>
            </section>
        </>
    )
}

export default HowWeWorks
