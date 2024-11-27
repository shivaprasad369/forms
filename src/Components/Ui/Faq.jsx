import React, { useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'

export default function Faq({name,p}) {
    const [faq,setFaq]= useState(false)
  return (
    <div className=' w-[100%] flex cursor-pointer flex-col gap-5'>
                    <div onClick={()=>setFaq(()=>!faq)} className='w-[100%]
                    border-b-[1px] border-[#bbbaba] pb-[2rem]
                    flex md:text-2xl font-bold tracking-wider justify-between items-center '>
                        <h1>{name}</h1>
                        {faq && <FaMinus  className='text-[1.5rem] ' />}
                        {!faq && <FaPlus  className='text-[1.5rem] '/>}
                        </div>
                        <p className={`${faq ? 'flex':'hidden'} 
                        transition-all duration-500 mt-5
                        leading-[1.8rem]`}>{p}</p> 
                     
                </div>
  )
}
