import React, { useState } from 'react'
import Container from './Container'
import { FaMinus, FaPlus } from 'react-icons/fa'
import Faq from '../Ui/Faq'
import { motion } from 'framer-motion'
export default function Why() {

  return (
    <Container>
      <div className='w-[100%] text-[#3f3f3f] bg3 flex flex-col gap-5 items-center px-[5%] mt-[-4.5rem] py-[5rem] pt-[5rem] '>
        <h1 className="text-[#3fb4e2] text-4xl font-bold tracking-wider">
       
        {'See Why Customers Love Our Products'.split('').map((data,index)=><motion.span key={index} initial={{opacity:0}}
           whileInView={{opacity:1,transition:{
            delay:index*0.1,
            duration:0.5,
            ease:'easeInOut'
           }}}
           >
            {data}
           </motion.span>)}
        </h1>
        <span className="text-lg tracking-[0.3em]">
          {" "}
          DESIGNED TO PROTECT
        </span>
        <div className='w-[100%]  flex mt-10 '>
            <div className='w-[50%]'></div>
            <div className='w-[50%] flex justify-end flex-col gap-10'>
                <Faq name='Innovative Design'
                p={'Diam donec adipiscing tristique risus nec feugiat in. Ligula ullamcorper malesuada proin libero nunc consequat interdum. Consectetur a erat nam at lectus urna duis. Velit dignissim sodales ut eu sem integer vitae justo. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Tellus elementum sagittis vitae et leo duis. Nisl purus in mollis nunc sed id semper. Placerat vestibulum lectus mauris ultricesultricies'}
                />
                <Faq name='Certified Products'
                p={'Risus nullam eget felis eget nunc lobortis mattis aliquam. Sit amet facilisis magna etiam. Consequat id porta nibh venenatis cras sed felis. Purus semper eget duis at tellus at urna condimentum. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Sagittis purus sit amet volutpat. Nibh praesent tristique magna sit amet purus gravida quis.'}
                />
                <Faq name="High-Quality Devices"
                p={'Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Nibh sit amet commodo nulla facilisi nullam. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum. Faucibus nisl tincidunt eget nullam non nisi. At lectus urna duis convallis convallis tellus id interdum. Lectus mauris ultrices eros in cursus turpis.'}
                />
                <Faq 
                name='Advanced Technology'
                p={'Scelerisque eleifend donec pretium vulputate sapien nec sagittis. Aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod. Id faucibus nisl tincidunt eget nullam. Enim diam vulputate ut pharetra sit amet. Fringilla urna porttitor rhoncus dolor purus non enim praesent elementum. Nec ultrices dui sapien eget mi proin sed.'}
                />
               
            </div>
        </div>
      </div>
    </Container>
  )
}
