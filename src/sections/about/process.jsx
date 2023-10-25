import React from 'react'
import { Heading2, Heading5 } from '../../components/headings'
import data from '../../constants/data'

export const Process = () => {
    return (
        <section className='py-20 md:py-[128px] '>
            <Heading2 text="The process we follow" align="text-center" />
            <div className='grid max-[400px]:grid-cols-1 grid-cols-2 gap-y-10 lg:grid-cols-4 justify-between mt-12'>
                {data.process_data.map(({ id, heading, paragraph }) => (
                    <div key={id}>
                        <div className='w-6 h-6 rounded-full bg-purple mb-5'></div>
                        <Heading5 text={heading} />
                        <p>{paragraph}</p>
                    </div>
                ))}

            </div>

        </section>
    )
}
