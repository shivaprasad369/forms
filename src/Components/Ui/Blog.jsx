import React, { useState } from 'react'
import { FaRegUserCircle, FaTag } from 'react-icons/fa'
import { CiCalendarDate } from 'react-icons/ci'
import { motion } from 'framer-motion'
export default function Blog({data,index}) {
   const [card,setCard]= useState(false)
  return (
    <motion.div
    viewport={{once:true}}
    initial={{opacity:0,scale:0.9,rotate:10}}
    whileInView={{
      opacity:1,
      scale:1,
      rotate:0,
      transition:{
        duration:1,
        delay:0.5*index
      }
    }}
    onMouseEnter={()=>setCard(true)} onMouseLeave={()=>setCard(false)} className='w-[100%]  flex flex-col gap-3'>
    <div className='w-[100%]  overflow-hidden relative'>
        <div className={`${card && 'bg-[#1dbce454]'} w-[100%] h-[100%] absolute top-0 transition-all duration-500`}/>
        <img src={require('../../Assets/blog-8.webp')} alt="blog" className="w-[100%]" />
    </div>
    <div className='w-[100%] flex flex-col gap-3 p-[1rem]'>

        <div className='flex flex-wrap w-[100%] gap-3 items-center '>
            <div className='flex items-center gap-2 text-lg'>
            <FaRegUserCircle className='text-[#3fb4e2]' /> <h1>
            {data?.author} |
            </h1>
            </div>
            <div className='flex items-center gap-2 text-lg'>
            <CiCalendarDate  className='text-[#3fb4e2]' /> <h1>
            {data?.date} |
            </h1>
            </div>
            <div className='flex items-center font-bold gap-2 text-lg'>
            <FaTag  className='text-[#3fb4e2]' /> <h1>
           {data.tag}
            </h1>
            </div>
        </div>
        <h1 className='text-xl inline-flex uppercase  text-[#3fb4e2] font-bold'>
       {data.name}
        </h1>
        <p className='mt-5 leading-[1.8rem]'>
       {data.content.slice(0,100)+ '...'}

        </p>
        <div className='w-fit mt-2  h-[2rem] bottom-0 left-[1rem]'>
         
        </div>
        <div className='w-fit mt-2 absolute bottom-3 left-[1rem] hover:bg-blue-500 transition-all duration-300 bg-[#3fb4e2] px-8 py-4 rounded-md text-white font-semibold'>
          <a href={'/blog/'+data.id}>
            Read More
          </a>
        </div>
    </div>
</motion.div>
  )
}
