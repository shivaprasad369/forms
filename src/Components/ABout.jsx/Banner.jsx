import React from 'react'
import Container from '../Home/Container'
import banner from '../../Assets/banner.mp4'
export default function Banner({title,description}) {
  return (
    <Container>
      <div className="w-[100%] bg6 z-99 py-[10rem] gap-5 flex relative flex-col items-center overflow-hidden justify-center">
      <div className="w-[100%] h-[100vh] flex absolute top-[-2rem] items-center">
              <video autoPlay  muted  poster={require('../../Assets/poster.png')} className="w-[100%] h-[100%]">
                <source src={banner} type="video/mp4" />
              </video>
            </div>
        <div  className='absolute top-0 bg-[#2525255d]  w-[100%] h-[100%]'/>
        <h1 style={{zIndex:99}} className='text-5xl z-99 font-bold text-white'>{title ? title :'About us'}</h1>
        <div  style={{zIndex:99}} className='flex items-center gap-3 text-xl tracking-wider text-white'>
       <span className='hover:text-blue-400 transition-all duration-500'>
        <a href="/">
       Home
        </a>
       </span>
         / {description ? description : 'About us'}
        </div>
      </div>
    </Container>
  )
}
