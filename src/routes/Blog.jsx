import React from 'react'
import data from '../constants/data'
import { Heading2, Heading5 } from '../components/headings'
import LinkIcon from '../components/link'

const Blog = () => {
  return (
    <section className="py-[128px]">
      <Heading2 text="  Our blog" />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-16">
        {data.blog_data.map(({ id, date, title, img, summary }) => (
          <div key={id} className="mb-5">
            <img src={img} alt="" width="100%" />
            <p className=" font-medium mt-10">{date}</p>
            <Heading5 text={title} />
            <p className="mb-8">{summary}</p>
            <LinkIcon text="Read More" link={`/blog/${id}`} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Blog