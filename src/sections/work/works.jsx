import React, { useState } from 'react'
import data from '../../constants/data'
import { Heading3 } from '../../components/headings';
import LinkIcon from '../../components/link';

const Works = () => {

    const [selectedOption, setSelectedOption] = useState('All')

    const filteredData = data.work_templates_data.filter(
        (item) => selectedOption === 'All' || item.type === selectedOption
    );

    return (
        <section className="pt-32 md:pt-[128px] flex flex-wrap justify-center gap-5 ">

            <ul className='flex max-[350px]:flex-col  max-[350px]:gap-5 gap-16 justify-center items-center'>
                {data.work_headings_data.map(({ id, text }) => (
                    <li key={id}
                        onClick={() => setSelectedOption(text)}
                        className={`${selectedOption === text ? 'text-purple' : "text-black"} cursor-pointer max-[600px]:text-sm `}>{text}</li>
                ))}
            </ul>
            <div className='grid grid-cols-2 max-[600px]:grid-cols-1  max-[350px]:py-5 py-12 gap-6 max-[600px]:text-center'>

                <>
                    {filteredData.map(({ id, paragraph, img, heading }) => (
                        <div key={id} className='mb-8 flex flex-col max-[600px]:items-center'>
                            <img src={img} alt="" className='mb-6' />
                            <Heading3 text={heading} />
                            <p className='max-[600px]:mb-3 mb-6 mt-3'>{paragraph}</p>
                            <LinkIcon text="View Portfolio" />
                        </div>
                    ))}
                </>



            </div>
        </section>
    )
}

export default Works