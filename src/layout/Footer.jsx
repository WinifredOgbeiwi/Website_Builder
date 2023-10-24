import React from 'react'
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className='bg-main pt-28 pb-7 sm:pl-10 md:pl-40 text-white'>
      <div className='flex space-x-7 sm:space-x-40 px-5 sm:pl-0'>
        <div className=' w-full sm:w-1/3'>
          <h1 className=' font-medium text-xl sm:text-3xl md:text-5xl'>LOGO</h1>
          <p className='font-medium mt-6 text-xs sm:text-base'>We are always open to discuss your project and improve your online presence.</p>
        </div>

        <div className=' w-full sm:w-1/3'>
          <h2 className=' font-medium text-xl sm:text-3xl md:text-5xl'>Lets Talk!</h2>
          <p className='text-xs sm:text-base text-[#F4F6FC] mt-4 '>We are always open to discuss your project, improve your online presence and help with your UX/UI design challenges.</p>
          <div className='flex space-x-2 sm:space-x-7 mt-7'>
            <BsFacebook/>
            <BsTwitter/>
            <BsInstagram/>
            <BsLinkedin/>
          </div>
        </div>
      </div>
      <div className=' sm:w-fit w-full bg-yell mt-4 py-2 px-10 flex flex-row items-center justify-between sm:justify-start sm:space-x-20 text-[#282938]'>
        <div>
          <h6 className=' font-medium sm:text-xl'>Email me at</h6>
          <p className='text-xs sm:text-base'>imadeogbeiwigmail.com</p>
        </div>
        <div>
          <h6 className=' font-medium sm:text-xl'>Call Us</h6>
          <p className='text-xs sm:text-base'>07031651096</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
