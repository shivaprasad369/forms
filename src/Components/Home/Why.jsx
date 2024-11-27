import React, { useState } from 'react'
import Container from './Container'
import { FaMinus, FaPlus } from 'react-icons/fa'
import Faq from '../Ui/Faq'
import { motion } from 'framer-motion'
export default function Why() {

  return (
    <Container>
      <div className='w-[100%] text-[#3f3f3f] bg3 flex flex-col gap-5 items-center px-[5%] mt-[-4.5rem] py-[5rem] pt-[5rem] '>
        <h1 className="text-[#3fb4e2] text-4xl text-center font-bold tracking-wider">
       
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
        <span className="text-lg text-center tracking-[0.3em]">
          {" "}
          DESIGNED TO PROTECT
        </span>
        <div className='w-[100%]  flex mt-10 '>
            <div className='lg:w-[50%] max-md:hidden'></div>
            <div className='lg:w-[50%] flex justify-end flex-col gap-10'>
                <Faq name='What types of syringes does Rakshaum Medical Devices manufacture?'
                p={'We manufacture a wide range of medical syringes, including hypodermic syringes, insulin syringes, and auto-disable syringes. Our products are designed for various medical applications, from general injections to specialized procedures.'}
                />
                <Faq name='Are your syringes compliant with international standards?'
                p={'Yes, our syringes are manufactured to meet the highest international standards for medical devices, including ISO 13485 certification. We adhere to strict quality control measures to ensure safety, sterility, and reliability in every product.'}
                />
                <Faq name="How do I ensure proper disposal of used syringes?"
                p={'Used syringes should always be disposed of in approved sharps containers to prevent needle-stick injuries and environmental contamination. Follow local regulations and healthcare facility guidelines for the safe disposal of medical waste.'}
                />
                <Faq 
                name=' What materials are used in your syringes?'
                p={'Our syringes are made from medical-grade plastic (such as polypropylene or polyethylene) and other materials that meet regulatory standards for sterility, safety, and durability. The needles are made of stainless steel to ensure smooth and precise injections.'}
                />
               
            </div>
        </div>
      </div>
    </Container>
  )
}
