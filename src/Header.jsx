import React from 'react'

export default function Header() {
  return (
    <div className='bg-gray-800'>
      <div className='flex justify-between items-center px-[3%] py-4'>
        <img src={require('./logo full white (1).png')} alt='logos' className=' h-[2rem] object-cover'/>
        <div className='flex flex-col'>
            <h6 className='text-white font-bold text-xs'>powered by</h6>
            <img src={require('./Untitled-1.png')} alt="" className='md:h-[2rem] max-md:w-[7rem] '/>
        </div>
      </div>
    </div>
  )
}
