import { motion } from 'framer-motion';
import React, { useState } from 'react'
import { CiMenuBurger } from 'react-icons/ci'
import { MdArrowDropDown } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
export default function Header1() {
  const [p,setP]= useState(false)
  return (
    <header style={{zIndex:999}} className='w-[100vw] shadow-md border-b-[1px] flex fixed bg-white border-b-[#4BC2F2]   h-fit bg-transparent items-center justify-center '>
      <div className='w-[100%] max-[100%] px-[7%] max-w-[1500px] py-5'>
        <div className='w-[100%] flex items-center justify-between'>
            <img src={require('../../Assets/logo.jpg')} alt='Logo' className=' w-[10rem] object-contain' />
            <div className=' uppercase flex items-center text-[#6d6c6c] gap-5 text-xl'>
            <CiMenuBurger className='text-2xl lg:hidden'/>
            <h1 className="text-sm font-bold tracking-wider hover:text-blue-400 transition-all">
              <a href="/">
              Home
              </a>
              </h1>
              <h1 className="text-sm font-bold tracking-wider hover:text-blue-400 transition-all">
              <a href="/about">
              About
              </a>
              </h1>
              <div  className="text-sm font-bold tracking-wider flex items-center justify-center relative  transition-all">
              <h1 onClick={()=>setP(()=>!p)} className='flex cursor-pointer items-center hover:text-blue-400 gap-5'>
             Products <MdArrowDropDown />
              </h1>
                <motion.div
                animate={{
                  opacity:p?1:0,
                  
                }}
                transition={{duration:0.5}}
                className='absolute  flex flex-col items-center py-[2rem] text-sm rounded-b-xl uppercase tracking-wider justify-center gap-3  top-[2rem] w-[150%] h-fit bg-white'>
                  <h2 className='hover:text-blue-400 cursor-pointer transition-all'>
                    <a href="/products">
                    Product-1
                    </a>
                    </h2>
                  <h2 className='hover:text-blue-400 cursor-pointer transition-all'>
                  <a href="/products">
                    Product-2
                    </a>
                    </h2>
                  <h2 className='hover:text-blue-400 cursor-pointer transition-all'>
                  <a href="/#arrivals">
                    New Arrivals
                    </a>
                    </h2>
                 </motion.div>
              </div>
              <h1 className="text-sm font-bold tracking-wider hover:text-blue-400 transition-all">
              <a href="/blog">
              Blogs
              </a>
              </h1>
              <h1 className="text-sm font-bold tracking-wider hover:text-blue-400 transition-all">
              <a href="/career">
              Career
              </a>
              </h1>
              <h1 className="text-sm font-bold tracking-wider hover:text-blue-400 transition-all">
              <a href="/about/#certificates">
              Certificate
              </a>
              </h1>
              <h1 className="text-sm font-bold tracking-wider hover:text-blue-400 transition-all">
              <a href="/contact">
                Contact us
              </a>
              </h1>
              {/* <div className='w-[15rem]'>
                  <form action="" className='shadow-md px-2 text-sm flex gap-0 items-center rounded-full'>
                    <button><IoIosSearch  className='text-[1.5rem]'/></button>
                    <input type="text" placeholder='Search' className='w-full  outline-none py-3 px-3 '/>
                  </form>
              </div> */}
            </div>
           
           
            


        </div>
      </div>
    </header>
  )
}
