import React from 'react'
import Container from '../Home/Container'
import { FaRegUserCircle, FaTag } from 'react-icons/fa'
import { CiCalendarDate } from 'react-icons/ci'
import Blog from '../Ui/Blog'
import data from '../Constant/Blg'
import { motion } from 'framer-motion'
export default function Blogs() {
  return (
    <Container>
      <div className='w-[100%] px-[3%] pb-[4rem] items-center justify-center'>
        <div className='w-[100%] flex flex-col gap-10'>
        <h1 className="text-[#3fb4e2] uppercase text-center md:text-4xl  max-md:text-3xl font-bold tracking-wider">
         {'BLogs'.split('').map((data,index)=><motion.span key={index} initial={{opacity:0}}
           whileInView={{opacity:1,transition:{
            delay:index*0.1,
            duration:0.5,
            ease:'easeInOut'
           }}}
           >
            {data}
           </motion.span>)}
          </h1>
            <div className='w-[30%] hidden  flex-col gap-5'>
                <div className='px-5 py-3 text-black bg-gray-300 border-[3px] border-l-blue-400'>
                    <h1 className='text-xl font-bold'>Categories</h1>
                </div>
                <div className='flex flex-col gap-3 text-lg font-semibold'>
                    {[
                        { id: 1, name: 'Hygine',href:'#' },
                        { id: 2, name: 'PPE Kit',href:'#' },
                        { id: 3, name: 'PPE Gowns',href:'#' },
                        { id: 4, name: 'Medtech',href:'#' },
                        { id: 5, name: 'Hexalin',href:'#' },
                        { id: 6, name: 'Flatline',href:'#' },
                    ].map((data,index)=><h1 key={data.id}>
                        <a href={data.href} className='hover:text-blue-300'> 

                        {data.name}
                        </a>
                    </h1>)}
                </div>
            </div>
            <div className='w-[100%] grid max-lg:grid-cols-1 lg:grid-cols-3 gap-5'>
                 {data?.map((data,index)=>
                 <div className="bg-slate-100 relative">

                   <Blog key={data.id} data={data} />
                 </div>
                )
                    
                     } 
            </div>
        </div>
      </div>
    </Container>
  )
}
