import { motion } from 'framer-motion'
import React, { useState } from 'react'
export default function Gallary({name,title}) {
    const [card,setCard]=useState(false)
  return (
    <div onMouseEnter={()=>setCard(true)} onMouseLeave={()=>setCard(false)} className='relative overflow-hidden h-[25rem]'>
    <motion.div 
    animate={{
        width:card ? '100%':0,
        display: card ? 'flex ' :'none',
        height: card ? '100%' :0,
        opacity: card ? 1 :0,
      
    }}
    transition={{
        duration: 0.3
    }}
    style={{zIndex:99}}
    className='absolute bg-[#0e0d0db9] z-99 bottom-0 w-[100%] flex flex-col gap-5 h-[100%] items-center justify-center'>
        <h1 className='text-2xl text-white font-bold'>
       {name}
        </h1>
        {title}
    </motion.div>
    <motion.img 
    animate={{
        scale:card ? 1.2 :1 
    }}
    transition={{
        duration:0.5
    }}
    src={require('../../Assets/gallery-1.webp')} alt="galary" className='w-[100%] -z-10 object-cover h-[100%]' />
</div>
  )
}
