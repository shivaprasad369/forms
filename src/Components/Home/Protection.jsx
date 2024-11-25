import React, { useState } from 'react'
import Container from './Container'

export default function Protection() {
   const [card,setCard]= useState(false)
  return (
    <Container>
      <div className='h-[100%] w-[100%] flex py-[4rem] pt-[-4rem]  flex-col gap-4 items-center justify-center'>
        <h1 className='text-4xl font-bold  text-center justify-center text-[#2ec4ff]'>
        95%+ Bacteria Protection
        </h1>
        <span className='tracking-[0.3em]'>TESTED AND APPROVED</span>
        <div onMouseEnter={()=>setCard(true)} onMouseLeave={()=>setCard(false)} className='w-[100%] px-[5%] flex'>
            <div className='w-[50%] relative'>
                <div className='w-[100%] flex flex-col gap-5 p-[3rem]  bg-blue-100'>
                    <h1 className='text-4xl font-bold tracking-wider text-[#2ec4ff]'>
                    World-Class Medical Equipments
                    </h1>
                    <p className='tracking-wider text-gray-500  leading-[1.8rem]'>
                    Gorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui official. The zip-off cover is made with an upholstery-grade hybrid knit that’s designed to stand up to years of use. Plus, the rich charcoal color hides spills or splotches. Hello, breakfast in bed
                    </p>
                </div>
            </div>
            <div className='w-[50%] relative'>
            <div className={`absolute w-[100%] transition-all duration-500 h-[100%] bg-gradient-to-b to-[#25252573] from-[#35343428] ${!card && 'hidden'} transition-all duration-300`}/>

                <img src={require('../../Assets/img-7.webp')} alt="" className='h-[100%] w-[100%] object-cover ' />
            </div>
        </div>
      </div>
    </Container>
  )
}
