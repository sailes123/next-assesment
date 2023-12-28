"use client";
import { getBlogById } from '@/api/blog-api-services';
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react';

type BlogProps = {
  params: {
    blogs: string
  }
}

const Blogs = ({params}: BlogProps) => {

  const [blogDetail,setBlogDetail] = useState<any>();

  console.log(params)

  useEffect(()=>{
   if(!params || !params.blogs) return;

   getBlogById(params.blogs,setBlogDetail);
  },[params])
  
  return (
    <div className='p-4 sm:p-10 w-full '>
      <h1 className='text-center mb-6 text-[30px] font-bold'>{blogDetail?.title??''}</h1>
      <p className='mb-10'>
          {blogDetail?.description??''}
      </p>
      <p className='text-right'><strong>author: </strong>{blogDetail?.author??''}</p>
    </div>
  )
}

export default Blogs