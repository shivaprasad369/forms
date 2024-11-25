import React from 'react'
import Content from '../Collection/Content'
import { motion } from 'framer-motion'
export default function Featured() {
  return (
    <div className='w-[100vw] bg-slate-100 pt-[4rem] flex flex-col gap-0 mt-5'>
        <h1 className='text-4xl text-center font-bold uppercase text-[#4BC2F2]'>
           {'Featured Products'.split('').map((data,index)=><motion.span key={index} initial={{opacity:0}}
           whileInView={{opacity:1,transition:{
            delay:index*0.1,
            duration:0.5,
            ease:'easeInOut'
           }}}
           >
            {data}
           </motion.span>)}
        </h1>
        <Content/>
    </div>
  )
}
