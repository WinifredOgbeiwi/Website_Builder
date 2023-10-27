import React from "react";
import LinkIcon from "../../components/link";
import data from "../../constants/data";
import { Heading2, Heading5 } from "../../components/headings";

const Blog = () => {
  const blogs = data.blog_data.slice(0,3)
  return (
    <section className="py-20 md:py-[128px]">
      <Heading2 text="  Our blog"/>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-16">
        {blogs.map(({ id, date, title, img, summary }) => (
          <div key={id} className="mb-5">
            <img src={img} alt="" width="100%" />
            <p className=" font-medium mt-8">{date}</p>
            <Heading5 text={title}/>
            <p className="md:mb-8">{summary}</p>
            <LinkIcon text="Read More" link={`/blog/${id}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
