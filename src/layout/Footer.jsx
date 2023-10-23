import React from 'react'
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className='bg-main pt-28 pb-7 pl-40 text-white'>
      <div className='flex space-x-40'>
        <div className='w-1/3'>
          <h1 className=' font-medium text-5xl'>LOGO</h1>
          <p className='font-medium mt-6'>We are always open to discuss your project and improve your online presence.</p>
        </div>

        <div className='w-1/3'>
          <h2 className=' font-medium text-5xl'>Lets Talk!</h2>
          <p className='text-[#F4F6FC] mt-4 '>We are always open to discuss your project, improve your online presence and help with your UX/UI design challenges.</p>
          <div className='flex space-x-7 mt-7'>
            <BsFacebook/>
            <BsTwitter/>
            <BsInstagram/>
            <BsLinkedin/>
          </div>
        </div>
      </div>
      <div className=' w-5/12 bg-yell mt-4 py-5 pl-10 flex space-x-20 text-[#282938]'>
        <div>
          <h6 className=' font-medium text-xl'>Email me at</h6>
          <p>imadeogbeiwigmail.com</p>
        </div>
        <div>
          <h6 className=' font-medium text-xl'>Call Us</h6>
          <p>07031651096</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
