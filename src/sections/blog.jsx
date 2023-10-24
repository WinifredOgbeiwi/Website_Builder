import React from "react";
import LinkIcon from "../components/link";
import data from "../constants/data";

const Blog = () => {
  return (
    <section className="py-[128px]">
      <h2 className="text-4xl sm:text-5xl text-center md:text-start font-semibold">
        Our blog
      </h2>

      <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 mt-16">
        {data.blog_data.map(({ id, date, title, img, summary }) => (
          <div key={id} className="md:w-1/3">
            <img src={img} alt="" width="100%" />
            <p className=" font-medium mt-10">{date}</p>
            <h4 className=" font-medium text-2xl  my-4">{title}</h4>
            <p className="mb-8">{summary}</p>
            <LinkIcon text="Read More" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
