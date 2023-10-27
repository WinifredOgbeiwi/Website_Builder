import React from "react";
import LinkIcon from "../../components/link";
import data from "../../constants/data";
import { Heading2, Heading5 } from "../../components/headings";

const Blog = () => {
  const blogs = data.blog_data.slice(0,3)
  return (
    <section className="py-[128px]">
      <Heading2 text="  Our blog"/>

      <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 mt-16">
        {blogs.map(({ id, date, title, img, summary }) => (
          <div key={id} className="md:w-1/3">
            <img src={img} alt="" width="100%" />
            <p className=" font-medium mt-10">{date}</p>
            <Heading5 text={title}/>
            <p className="mb-8">{summary}</p>
            <LinkIcon text="Read More" link={`/blog/${id}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
