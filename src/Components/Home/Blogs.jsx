import React from 'react'
import Container from '../Home/Container'
import { FaRegUserCircle, FaTag } from 'react-icons/fa'
import { CiCalendarDate } from 'react-icons/ci'
import Blog from '../Ui/Blog'
import data from '../Constant/Blg'
export default function Blogs() {
  return (
    <section className='w-[100vw] h-[100%] bg-transparent flex items-center justify-center overflow-hidden'>
      <div className="w-[100%] max-w-[1400px] flex px-[2%] py-[3rem] ">

      <div className='w-[100%] pb-[4rem] items-center justify-center'>
        <div className='w-[100%] flex'>
       
            <div className='w-[100%] grid xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-5'>
                 {data?.slice(0,3).map((data,index)=>
                 <div className="bg-white">

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
