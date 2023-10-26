import React from 'react'
import { Heading2 } from '../../components/headings'
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'

const Hero = () => {
  return (
    <section className="py-32 md:py-[128px] flex flex-wrap justify-center gap-5 bg-[#F4F6FC] ">
          <div className='flex justify-center items-center flex-col'>
              <p>What we created</p>
              <Heading2 text="Our Work Portfolio" />
              <p className='text-center mt-5 md:w-8/12'>We help teams create great digital products by providing them with tools and technology to make the design-to-code process universally accessible..</p>
        <div className='flex space-x-2 sm:space-x-7 mt-7'>
          <BsFacebook />
          <BsTwitter />
          <BsInstagram />
          <BsLinkedin />
        </div>
          </div>
          </section>
  )
}

export default Hero