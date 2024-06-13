import React from 'react'
export default function Footer() {
  return (
    <div className='bg-black  py-3 w-[100vw] overflow-hidden'>
      <div className='flex md:gap-5 max-md:gap-3 text-white font-bold capitalize justify-center items-center'>
      <h1><a href='https://learnersitacademy.com/'>Home</a></h1>
        <h1><a href='terms' className='max-md:text-sm'>Terms And Condition</a></h1>
        <h1><a href={'privacy'} className='max-md:text-sm'>Privacy Policy</a></h1>
        <h1><a href='refund' className='max-md:text-sm'>Refund Policy</a></h1>
      </div>
    </div>
  )
}
