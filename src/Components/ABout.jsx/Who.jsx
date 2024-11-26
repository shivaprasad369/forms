import React from 'react'
import Container from '../Home/Container'
import { FaCheck } from 'react-icons/fa'
import { motion } from 'framer-motion'
export default function Who() {
  return (
    <Container>
      <div className='w-[100%] text-[#3fb4e2] px-[5%]  pb-[4rem] flex items-center justify-between gap-5'>
        <div className='w-[50%] flex flex-col gap-5'>
            <h1 className='text-5xl font-bold  '>
            Who We Are
            </h1>
            <p className='text-xl font-bold '>
            We create advance technology health and social care products
            </p>
            <div className='mt-5 flex flex-col gap-8'>
                <div className='w-[100%] flex gap-8 '>
                    <div className='w-[30%]  h-[50px] font-bold flex rounded-md bg-gray-300 items-center justify-center '>
                    <FaCheck />
                    </div>
                    <p className='text-black text-lg'>
                    Innovators in Medical Devices: At Rakshaum Medical Devices, we are committed to transforming healthcare through the design and production of high-quality, precision-engineered medical syringes and devices that meet the evolving needs of healthcare professionals and institutions worldwide.
                    </p>
                </div>
                <div className='w-[100%] flex gap-8 '>
                    <div className='w-[30%]  h-[50px] font-bold flex rounded-md bg-gray-300 items-center justify-center '>
                    <FaCheck />
                    </div>
                    <p className='text-black text-lg'>
                    State-of-the-Art Manufacturing: Our modern manufacturing facility, spanning 4 acres, is equipped with advanced technology and systems, ensuring that every product meets the highest standards of safety, precision, and sterility.
                    </p>
                </div>
                <div className='w-[100%] flex gap-8 '>
                    <div className='w-[30%]  h-[50px] font-bold flex rounded-md bg-gray-300 items-center justify-center '>
                    <FaCheck />
                    </div>
                    <p className='text-black text-lg'>
                    Quality-Driven and Compliance-Focused: We adhere to stringent ISO 13485 certification requirements, ensuring that all of our products undergo rigorous quality control processes to meet international healthcare standards.
                    </p>
                </div>
                <div className='w-[100%] flex gap-8 '>
                    <div className='w-[30%]  h-[50px] font-bold flex rounded-md bg-gray-300 items-center justify-center '>
                    <FaCheck />
                    </div>
                    <p className='text-black text-lg'>
                    Mission-Driven: Our mission is to empower healthcare professionals with innovative, reliable, and safe medical devices, while continually investing in research and development to anticipate future healthcare needs and improve patient outcomes globally.
                    </p>
                </div>
               
            </div>

        </div>
            <motion.div
            initial={{
                opacity: 0,
                x: 100,
                rotate:-20
            }}
            whileInView={{
                rotate:0,
                opacity: 1,
                x: 0,
                transition: {
                    duration: 0.5,
                    ease: 'easeInOut'
                }
            }}
            className='w-[50%] h-[100%] relative'>
                
            <img src={require('../../Assets/abo-01.webp')} alt="about"
            className='w-[100%] h-[100%] object-cover'
            />
            </motion.div>
      </div>
    </Container>
  )
}
