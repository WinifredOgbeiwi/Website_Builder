import React from 'react'
import { useParams } from 'react-router-dom'
import data from '../constants/data'

const BlogPage = () => {

    const { id } = useParams()

    const blogDetails = data.blog_data.find((blog) => blog.id === Number(id))


    if (!blogDetails) {
        return null
    };

    return (
        <section className='py-[128px] flex flex-col justify-center items-center'>
            <h1 className=' text-center text-3xl font-bold md:text-6xl mb-3'>{blogDetails.title}</h1>
            <img src={blogDetails.img} alt="" width="100%" />
            <p className='text-lg md:text-2xl text-main text-justify my-10'>{blogDetails.details1}</p>
            <p className='text-lg md:text-2xl italic text-main w-10/12 md:w-1/2 my-10'>  {blogDetails.summary}</p>
            <p className='text-lg md:text-2xl text-main text-justify my-10'>{blogDetails.details1}</p>
        </section>
    )
}

export default BlogPage