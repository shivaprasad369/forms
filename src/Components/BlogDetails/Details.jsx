import React, { useEffect, useState } from 'react'
import Container from '../Home/Container'
import { FaRegUserCircle, FaTag } from 'react-icons/fa'
import { CiCalendarDate } from 'react-icons/ci'
import data from '../Constant/Blg'
import { useParams } from 'react-router-dom'
export default function Details() {
    const [datas,setDatas]=useState([])
    const [loading,setLoading]=useState(true)


    const { id}=useParams()
    useEffect(()=>{
        const blog=data.filter((data)=>data.id === Number(id) )
        setDatas(blog[0])
        setLoading(false)
        console.log(datas)
    },[id])
  return (
    <Container>
      <div className='w-[100%] flex flex-col items-center max-lg:px-[5%] justify-center gap-10'>
        {!loading &&<div className='lg:w-[70%] flex flex-col gap-5'>
            <div className="w-[100%] lg:h-[35rem] rounded-2xl overflow-hidden">
                <img src={require('../../Assets/blog-8.webp')} className='w-[100%] rounded-2xl' alt="" />
            </div>
            <div className='mt-5 flex flex-col gap-3'>
                <h1 className="text-3xl uppercase tracking-wider font-bold text-blue-400">
                {datas?.name}
                </h1>
                <div className='flex flex-wrap w-[100%] gap-6 items-center '>
            <div className='flex items-center gap-2 text-lg'>
            <FaRegUserCircle className='text-blue-400' /> <h1>
            {datas?.author}
            </h1>
            </div>
            <div className='flex items-center gap-2 text-lg'>
            <CiCalendarDate  className='text-blue-400' /> <h1>
            {datas?.date}
            </h1>
            </div>
            <div className='flex font-bold items-center gap-2 text-lg'>
            <FaTag  className='text-blue-400' /> <h1>
           {datas.tag}
            </h1>
            </div>
        </div>
       {datas.p.map((data,index)=> <p key={index} className='py-2'>
           {data?.content}
        </p>)}
        <div className='text-center py-3 text-lg bg-blue-400 rounded-md text-white font-bold w-[100%]'>
                <a href="/blog">
                {'<'} Back To Blog
                </a>
        </div>
            </div>
        </div>}
      </div>
    </Container>
  )
}
