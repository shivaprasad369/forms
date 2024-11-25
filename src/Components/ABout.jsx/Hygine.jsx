import React, { useState } from 'react'
import Container from '../Home/Container'
import { FaUserDoctor } from "react-icons/fa6";
export default function Hygine() {
   const [card,setCard]=useState(false)
  return (
    <Container>
      <div onMouseEnter={()=>setCard(true)} onMouseLeave={()=>setCard(false)} 
      className='w-[100%] text-[#3fb4e2] px-[10%] gap-14 py-[5rem] flex items-center justify-center '>
            <div className='w-[50%] flex items-center relative justify-center'>
                <img src={require('../../Assets/abo-03.webp')}
                className='w-[100%] z-10'
                alt="" />
                 <img src={require('../../Assets/abo-03.webp')}
                className='w-[100%] absolute top-[-5%] -z-0 left-[-5%]'
                alt="" />
                <div className={`${card && 'bg-[#f5f5f586]' } transition-all duration-500 w-[100%] h-[100%] top-[-5%] -z-0 left-[-5%] absolute`}/>
            </div>
            <div className='w-[50%] flex flex-col gap-8'>
                <h1 className='flex items-center gap-3'>
                <FaUserDoctor className='text-[4rem]'/>
                </h1>
                <h1 className='text-2xl font-bold'>
                    
Personal Care and Hygiene Products
                </h1>
                <p className='text-[#5a5a5a] leading-[1.7rem]'>
                Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante.Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.
                </p>
            </div>
      </div>
    </Container>
  )
}
