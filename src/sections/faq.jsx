import React, { useState } from 'react'
import data from '../constants/data'

import FaqPortion from '../components/faqPortion'

const Faq = () => {

  return (
    <section className='py-20 md:py-[130px]'>
      <div className='flex flex-col md:flex-row md:space-x-28 items-center md:items-start '>
        <div className='text-center md:text-start'>
          <h3 className='text-2xl sm:text-[38px] font-semibold mb-4'>Frequently asked questions</h3>
          <p className=' text-purple '>Contact us for more info</p>
        </div>

        <div className='w-full'>{data.faq_data.map((item) => <FaqPortion {...item} />)}</div>

      </div>

    </section>
  )
}

export default Faq
