import React from 'react'

export default function Container({children}) {
  return (
    <section className='w-[100vw] h-fit pt-[4.3rem] relative bg-[#FFFFFF] flex items-center justify-center overflow-x-hidden'>
      <div className='w-full max-w-[1500px] '>
        {children}
      </div>
    </section>
  )
}
