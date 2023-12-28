"use client";
import { getBlogs } from "@/api/blog-api-services";
import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";

const BlogList = () => {
  const [blogList, setBlogList] = useState<any>([]);

  useEffect(() => {
    getBlogs(setBlogList);
  }, []);

  return (
    <div className="flex flex-col gap-2 min-w-[340px]">
      {blogList.length > 0 &&
        blogList.map((item: any) => {
          return <BlogCard key={item.id} item={item} />;
        })}
    </div>
  );
};

export default BlogList;
