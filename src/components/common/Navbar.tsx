"use client";
import AppContext from "@/contexts/AppContext";
import Link from "next/link";
import { createContext, useContext, useEffect, useState } from "react";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const [searchText, setSearchText] = useState("");

  const { setSearchQuery } = useContext(AppContext)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSearch = () => {
    setSearchQuery(search);
  };

  useEffect(()=>{
   if(search.length) return;
   setSearchQuery('');
  },[search])

  return (
      <div className=" flex flex-col sm:flex-row gap-4  justify-between bg-inherit px-4 sm:px-20 border-b-[0.5px] sticky top-0 z-[10000] border-[#d0cece] py-4">
        <div className="flex items-center gap-2">
          <div className="p-5 bg-black rounded-full"></div>
          <Link href={'/'} className="font-bold text-4xl">Blog</Link>
        </div>
        <div className="flex gap-2">
          <input
            className="!bg-background p-3 rounded-lg w-full border-none outline-none focus:outline-none focus:ring-0 text-sm "
            type="search"
            name="search"
            onChange={handleInputChange}
            placeholder="Type something..."
          />
          <button onClick={handleSearch} className="px-4 py-2 bg-black rounded-lg text-white">
            Search
          </button>
        </div>
      </div>
  );
};

export default Navbar;
