import React from 'react'

const Navbar = () => {
  return (
    <div className=' flex justify-between px-20 border-b-[0.5px] border-[#d0cece] py-4'>
        <div className='flex items-center gap-2'>
             <div className='p-5 bg-black rounded-full'></div>
             <p className='font-bold text-4xl'>Blog</p>
        </div>
    </div>
  )
}

export default Navbar