import React from 'react'
import LinkIcon from '../components/link'

const Projects = () => {
  return (
      <section className=' pt-[128px]'>
          <div className=' flex justify-between items-center'>
              <h2 className='text-5xl font-semibold'>View our projects</h2>
              <LinkIcon link="/project" text={"View More"}/>
              </div>
              </section>
  )
}

export default Projects
