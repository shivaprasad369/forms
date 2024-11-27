import React from 'react'
import Container from '../Home/Container'
import { FaRegUserCircle, FaTag } from 'react-icons/fa'
import { CiCalendarDate } from 'react-icons/ci'
import Blog from '../Ui/Blog'
import data from '../Constant/Blg'
import { motion } from 'framer-motion'
export default function Blogs() {
  return (
    <section className='w-[100vw] h-[100%] bg-transparent flex items-center justify-center overflow-hidden'>
      <div className="w-[100%] max-w-[1400px] flex px-[2%] py-[3rem] ">

      <div className='w-[100%] pb-[4rem] flex flex-col gap-10 items-center justify-center'>
      <h1 className="text-[#3fb4e2] md:text-4xl uppercase max-md:text-3xl font-bold tracking-wider">
         {'blogs'.split('').map((data,index)=><motion.span key={index} initial={{opacity:0}}
           whileInView={{opacity:1,transition:{
            delay:index*0.1,
            duration:0.5,
            ease:'easeInOut'
           }}}
           >
            {data}
           </motion.span>)}
          </h1>
        <div className='w-[100%] flex'>
       
            <div className='w-[100%] grid lg:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-5'>
                 {data?.slice(0,3).map((data,index)=>
                 <div className="bg-slate-100 relative">

                   <Blog key={data.id} data={data} index={index} />
                 </div>
                 
                )
                    
                     } 
            </div>
        </div>
      </div>
      </div>
    </section>
  )
}
