import React from 'react'
import Container from '../Home/Container'
import { FaRegUserCircle, FaTag } from 'react-icons/fa'
import { CiCalendarDate } from 'react-icons/ci'
import Blog from '../Ui/Blog'
import data from '../Constant/Blg'
export default function Blogs() {
  return (
    <Container>
      <div className='w-[100%] px-[3%] pb-[4rem] items-center justify-center'>
        <div className='w-[100%] flex gap-10'>
            <div className='w-[30%] max-lg:hidden flex flex-col gap-5'>
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
            <div className='lg:w-[70%] grid max-lg:grid-cols-1 lg:grid-cols-2 gap-14'>
                 {data?.map((data,index)=>
                 
                 <Blog key={data.id} data={data} />
                )
                    
                     } 
            </div>
        </div>
      </div>
    </Container>
  )
}
