import { motion } from 'framer-motion';
import React, { useState } from 'react'
import { FaUserDoctor } from "react-icons/fa6";
export default function Certificate({id}) {
   const [card,setCard]=useState(false)
  return (
    <>
       
            
     
      <motion.div 
      initial={{
        opacity:0,
        x:-100,

      }}
      whileInView={{
        opacity:1,
        x:0,
        transition:{
            duration: 0.5,
            delay:0.3*id
        },
      }}
      onMouseEnter={()=>setCard(true)} onMouseLeave={()=>setCard(false)} 
      className='w-[100%] text-[#3fb4e2] px-[10%] gap-14  flex items-center justify-center '>
            <div className='w-[20%] flex items-center relative justify-center'>
                <img src={require('../../Assets/CE-Certificate.jpg')}
                className='w-[100%] z-10'
                alt="" />
                 <img src={require('../../Assets/abo-03.webp')}
                className='w-[100%] absolute top-[-5%] -z-0 left-[-5%]'
                alt="" />
                <div className={`${card && 'bg-[#f5f5f586]' } transition-all duration-500 w-[100%] h-[100%] top-[-5%] -z-0 left-[-5%] absolute`}/>
            </div>
            <div className='w-[50%] flex flex-col gap-5'>
                <h1 className='flex items-center gap-3'>
                <FaUserDoctor className='text-[3rem]'/>
                </h1>
                <h1 className='text-xl font-bold'>
                    
                    Personal Care and Hygiene Products
                </h1>
                <p className='text-[#5a5a5a] leading-[1.7rem]'>
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum optio, perferendis architecto consequuntur id laboriosam eius. Quas eaque officiis veritatis quos ratione ipsam, dolor vel a placeat? Nulla, adipisci dolores.
                </p>
            </div>
      </motion.div>
    
    </>
  )
}
