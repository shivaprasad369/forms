import React from 'react'
import { TbTruckDelivery } from 'react-icons/tb'
import exper from '../../Assets/experience.svg'
import { FaCircleCheck } from 'react-icons/fa6'
import { motion } from "framer-motion";
import { FaArrowRight } from 'react-icons/fa'
export default function About1() {
  return (
    <section className='w-[100vw] flex items-center justify-center overflow-hidden'>
      <div className="max-w-[1400px] w-[100%] flex items-center px-[7%] py-[4rem]">
        <div className='w-[100%] flex gap-10 items-center'>
            <div className='w-[50%] relative  flex items-center overflow-hidden'>
            <div className="absolute right-[20%] z-10 top-[10%] flex items-center gap-3 bg-white w-fit p-3 rounded-full">
              <div className="w-[4rem] h-[4rem] bg-[#3fb4e2] flex items-center justify-center rounded-full">
              <img src={exper} alt="" className='w-[3rem]' />
              </div>
              <h1 className="text-lg leading-[1.4rem] font-bold text-[#3fb4e2]">30 Years Of
               <br />Experience</h1>

            </div>
                <div className='w-[100%] flex gap-6'>
                    <motion.div
                    initial={{
                      scale:0.8,
                      opacity:0
                    }}
                    whileInView={{
                      scale:1,
                      opacity:1,
                      transition:{
                     
                        duration:0.5,
                        ease:'easeInOut'
                      }
                    }}
                    className='w-[66%] h-[30rem] rounded-[60px] overflow-hidden '>
                        <img src={require('../../Assets/01 (1).jpg')} className='h-[100%] w-[100%] object-cover' alt="" />

                    </motion.div>
                    <div className='w-[50%] flex flex-col relative items-center justify-center h-[30rem]  '>
                        <div className="absolute top-0 -z-10 w-[73%]">
                            <img src={require('../../Assets/01.png')} alt="" />
                        </div>
                      <div className="w-[100%] h-[7rem]" />
                        <motion.div
                        initial={{
                          scale:0.8,
                          opacity:0
                        }}
                        whileInView={{
                          scale:1,
                          opacity:1,
                          transition:{
                         delay:0.3,
                            duration:0.5,
                            ease:'easeInOut'
                          }
                        }}
                        className='rounded-full overflow-hidden w-[100%] h-[22rem]'>

                        <img src={require('../../Assets/02.jpg')} className='h-[100%] w-[100%] object-cover' alt="" />
                        </motion.div>
                    </div>

                </div>
            </div>
            <motion.div
            initial={{
              y:50,
              opacity:0
            }}
            whileInView={{
              y:0,
              opacity:1,
              transition:{
             
                duration:0.5,
                ease:'easeInOut'
              }
            }}
            className="w-[50%] flex flex-col gap-5">
                <h1 className='uppercase text-xl tracking-wider font-bold text-[#3fb4e2]'>About Us</h1>
                <h2 class="site-title text-[#252525] text-[34px] font-bold tracking-wider leading-[2.5rem]">
                True partner. <span className='text-[#3fb4e2]'>Smart solutions. </span>Set standards.
                                </h2>
                                <p className='text-[#252525] leading-[1.7rem]'>
                                As one of the world’s leading medical technology companies, Rakshaum aims to protect and improve the health of people around the world. For more than 180 years, we have shaped health care with our pioneering spirit and groundbreaking contributions.
                                </p>
                                <p className='text-[#252525] leading-[1.7rem]'>
                                Sustainability is one of Rakshaum corporate values and has been an essential part of our corporate strategy for decades. That‘s why we have embedded responsibility for sustainable growth for our employees, our society and the environment in our business processes.
                               </p>
                                <div className="flex flex-col gap-5 text-[#1a0b36]">
                                    <div className='flex items-center gap-3 '>
                                    <FaCircleCheck className='text-3xl ' />
                                    <h1 className='font-bold tracking-wider'>
                                    
                                    Sustainability
                                    </h1>
                                    </div>
                                    <div className='flex items-center gap-3 '>
                                    <FaCircleCheck className='text-3xl ' />
                                    <h1 className='font-bold tracking-wider'>
                                   
Diversity
                                    </h1>
                                    </div>
                                    <div className='flex items-center gap-3 '>
                                    <FaCircleCheck className='text-3xl ' />
                                    <h1 className='font-bold tracking-wider'>
                                   
Compliance

                                    </h1>
                                    </div>
                                    <div className='flex items-center gap-3 '>
                                    <FaCircleCheck className='text-3xl ' />
                                    <h1 className='font-bold tracking-wider'>
                                    
Access to health care
                                    </h1>
                                    </div>
                                  
                                </div>
                                <div
                   
                   className="flex theme-btn relative overflow-hidden gap-3  hover:bg-[#fd6a6a] duration-200 justify-center   items-center w-fit"
                 > 
                   
                   
                   <h1>Discover More</h1><FaArrowRight />
                 </div>
                 
            </motion.div>
        </div>
      </div>
    </section>
  )
}
