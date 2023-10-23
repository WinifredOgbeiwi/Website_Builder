import React from 'react'
import LinkIcon from '../components/link'
import assets from '../constants/assets'
import data from '../constants/data'

const Blog = () => {
  return (
   <section className='py-[128px]'>
          <h2 className='text-5xl font-semibold'>Our blog</h2>

          <div className='flex space-x-6 mt-16'>
{data.blog_data.map(({id,date,title,img,summary})=>(
     <div key={id} className='w-1/3'>
                <img src={img} alt="" />
                <p className=' font-medium mt-10'>{date}</p>
                  <h4 className=' font-medium text-2xl  my-4'>{title}</h4>
                  <p className='mb-8'>{summary}</p>
                  <LinkIcon text="Read More"/>
            </div>
))}
           

          </div>
   </section>
  )
}

export default Blog
