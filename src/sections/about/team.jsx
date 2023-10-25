import React from 'react'
import data from '../../constants/data'
import { Heading2, Heading5 } from '../../components/headings'


export const Team = () => {
    return (
        <section className=" py-[128px] bg-[#F4F6FC] text-center">
            <Heading2 text="Meet Our Team"/>
            <div className='flex gap-10 mt-12'>
                {data.Team_data.map(({ img, position, name }) => (
                    <div className=' shadow-lg bg-white text-center w-fit px-11 py-9'>
                        <div className='w-40 h-40 rounded-full overflow-hidden'>
                            <img src={img} alt="" className=' object-fill' />
                        </div>

                        <Heading5 text={name} />
                        <p>{position}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
