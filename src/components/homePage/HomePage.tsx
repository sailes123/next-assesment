import React from "react";
import BlogList from "../blog/BlogList";
import BarChart from "../chart/BarChart";

const HomePage = () => {
  return (
    <div className="flex-col lg:flex-row w-full justify-between gap-6">
      <BlogList />
      <div className="min-w-[350px] border-black rounded-lg mt-20 border-[1px] h-fit">
        <BarChart />
        <h1 className="mb-10 text-center text-[20px] font-bold">Blog Written by Author</h1>
      </div>
    </div>
  );
};

export default HomePage;
