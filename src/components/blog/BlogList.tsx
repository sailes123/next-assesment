"use client";
import { getBlogs } from "@/api/blog-api-services";
import { useContext, useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import AppContext from "@/contexts/AppContext";

const BlogList = () => {
  const [blogList, setBlogList] = useState<any>([]);
  const [searchResult, setSearchResult] = useState<any>([]);
  const { searchQuery } = useContext(AppContext);

  useEffect(() => {
    getBlogs(setBlogList);
  }, []);

  useEffect(() => {
    if (!searchQuery || !searchQuery.length || !searchQuery.trim().length)
      return;

    const searchFilter = blogList.filter((item: any) => {
      return (
         item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
         item.author.toLowerCase().includes(searchQuery.toLowerCase())
       );
    });
    setSearchResult(searchFilter)
  }, [searchQuery]); 

  return (
    <div className="flex flex-col gap-2 min-w-[340px]">
      {!searchQuery.length ? (blogList.length > 0 &&
        blogList.map((item: any) => {
          return <BlogCard key={item.id} item={item} />;
        })) : 
        (
         searchResult.map((item: any) => {
           return <BlogCard key={item.id} item={item} />;
         }))
        }
    </div>
  );
};

export default BlogList;
