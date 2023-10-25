import React from 'react'
import { Heading2, Heading3, Heading5 } from '../../components/headings'
import { List, Listgrey } from '../../components/list'
import Faq from '../home/faq'
import { Link } from 'react-router-dom'
export const Plans = () => {
    return (
        <section className="py-32 md:py-[128px] flex flex-wrap justify-center gap-5 ">
            <div className='flex justify-center items-center flex-col'>
                <Heading2 text="Our Pricing Plans" />
                <p className='text-center mt-5 md:w-8/12'>When you’re ready to go beyond prototyping in Figma, Webflow is ready to help you bring your designs to life — without coding them.</p>
            </div>
            <div className='bg-[#F4F6FC] w-fit px-12 py-16 rounded-lg  '>
                <div className='flex items-center gap-3'>
                    <Heading3 text="$299" />
                    <p className=' text-purple'>Per Design</p>
                </div>
                <Heading5 text="Landing Page" />
                <p className=' w-72 mb-10 md:mb-20'>When you’re ready to go beyond prototyping in Figma, </p>
                <ul className='list_img flex flex-col gap-y-5'>
                    <List text="All limited links" />
                    <List text="Own analytics platform" />
                    <List text="Chat Support" />
                    <Listgrey text="Optimize hashtags" />
                    <Listgrey text="Unlimited users" />
                </ul>
                <button className='bg-black text-white py-6  w-64 rounded-[41px] mt-20'> Get started</button>
            </div>

            <div className='bg-[#1C1E53] w-fit px-12 py-16 rounded-lg text-white '>
                <div className='flex items-center gap-3'>
                    <Heading3 text="$399" />
                    <p className=' text-yell'>Multi Design</p>
                </div>
                <Heading5 text="Website Page" />
                <p className=' w-72 mb-10 md:mb-20'>When you’re ready to go beyond prototyping in Figma, Webflow’s ready to help. </p>
                <ul className='list_img flex flex-col gap-y-5'>
                    <List text="All limited links" />
                    <List text="Own analytics platform" />
                    <List text="Chat Support" />
                    <List text="Optimize hashtags" />
                    <List text="Unlimited users" />
                </ul>
                <button className='bg-yell py-6 text-black w-64 rounded-[41px] mt-20'> Get started</button>
            </div>

            <div className='bg-[#F4F6FC] w-fit px-12 py-16 rounded-lg  '>
                <div className='flex items-center gap-3'>
                    <Heading3 text="$499 +" />
                    <p className=' text-purple'>Per Design</p>
                </div>
                <Heading5 text="Complex Project" />
                <p className=' w-72 mb-10 md:mb-20'>When you’re ready to go beyond prototyping in Figma, </p>
                <ul className='list_img flex flex-col gap-y-5'>
                    <List text="All limited links" />
                    <List text="Own analytics platform" />
                    <List text="Chat Support" />
                    <List text="Optimize hashtags" />
                    <List text="Unlimited users" />
                    <List text="Assist and Help" />
                </ul>
                <button className='bg-black text-white py-6  w-64 rounded-[41px] mt-20'> <Link to="/contact">Get started</Link></button>
            </div>
            <Faq/>
        </section>
    )
}
