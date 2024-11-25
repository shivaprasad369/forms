import React from 'react'
import Container from '../Home/Container'
import Certificate from './Certificates'
import Equipment from './Equipment'

export default function Certi() {
  return (
    <Container >
        <div id='certificates' className='flex w-[100%] flex-col gap-5 items-center justify-center'>
        <h1 className='text-4xl font-bold uppercase text-[#3fb4e2]'>Certificates</h1>
        <div className='flex flex-col gap-10 mt-10   '>
            <Certificate id={1}/>
            <Equipment  id={2}     />
            <Certificate id={3}/>
            <Equipment id={4}/>
            
        </div>
        </div>
      
    </Container>
  )
}
