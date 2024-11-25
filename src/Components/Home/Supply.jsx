import React from 'react'
import Container from './Container'
import Supplys from '../Ui/Supplys'
import Blogs from './Blogs'
export default function Supply() {
  return (
    <Container>
      <div className='w-[100%] bg2 py-[5rem] mt-[3rem] pt-[4rem] px-[5%] flex items-center justify-center'> 
        <div className='flex flex-col w-[100%] gap-4 items-center justify-center'>
            <h1 className='text-4xl font-bold text-[#2ec4ff]'>Our Latest News</h1>
            <span className='tracking-[0.3em]'>SPEND LESS ENJOY MOR</span>
            <div className=' w-[100%] flex items-center'>
               {/* <Supplys no={'1'} name='Instruments'/>
               <Supplys no={'2'} name={'Devices'} />
               <Supplys no={'3' } name={'Medical Kits'}/> */}
               <Blogs/>
            </div>
        </div>
      </div>
    </Container>
  )
}
