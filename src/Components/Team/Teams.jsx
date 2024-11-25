import React from 'react'
import Container from '../Home/Container'
import Tema from '../Ui/Tema'

export default function Teams() {
  return (
    <Container>
      <div className='w-[100%] flex items-center justify-center px-[8%] py-[4rem]'>
            <div className='grid w-[100%] grid-cols-2 gap-20'>
                
                <Tema  name="Team Member Name"/>
                <Tema name="Team Member Name"/>
                <Tema name="Team Member Name"/>
                <Tema name="Team Member Name"/>
                
            </div>
      </div>
    </Container>
  )
}
