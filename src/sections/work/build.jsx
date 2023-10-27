import React from 'react'
import { Heading2 } from '../../components/headings'
import { Link } from 'react-router-dom'

const Build = () => {
  return (
    
      <section className="max-[600px]:pt-4 py-32 md:py-[128px] flex flex-col items-center justify-center gap-5 text-center leading-snug">
          <div className='w-8/12'>
              <Heading2 text={"Let's build something great together"}/>
        <p className='mt-5 max-[400px]:text-xs'>Nullam vitae purus at tortor mattis dapibus. Morbi purus est, ultricies nec dolor sit amet, scelerisque cursus purus.</p>
        <button className='bg-yell text-black py-6 w-full sm:w-64 max-[400px]:text-xs rounded-[41px] mt-10'><Link to="/contact">Contact Us</Link></button>
          </div>
        </section>
  )
}

export default Build