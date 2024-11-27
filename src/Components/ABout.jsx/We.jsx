import React from 'react'
import Container from '../Home/Container'
import { motion } from 'framer-motion'
export default function We() {
  return (
    <Container>
      <div className='w-[100%] h-[100%] bg-black text-white flex flex-col gap-4 items-center justify-center py-[5rem]'>
      <h1 className='md:text-5xl max-md:text-3xl text-[#3fb4e2] text-center font-bold'>
      What We Do
        </h1>
        <p className='text-lg text-center tracking-[0.3em]'>MANUFACTURER & SUPPLY MEDICAL EQUIPMENT'S</p>
        <div className='mt-10 px-[5%] w-[1005] grid max-lg:grid-cols-1 lg:grid-cols-3 gap-10  items-center'>
            <div className='w-[100%] flex flex-col gap-5'>
                <h1 className='text-2xl font-bold text-[#3fb4e2] tracking-wide'>What do we stand for?</h1>
                <p className='leading-[1.7rem] tracking-wider'>
                At Rakshaum Medical Devices, we specialize in the design, manufacture, and supply of high-quality medical equipment, with a focus on syringes, cannulas, and other critical healthcare devices. Our commitment to precision, safety, and innovation drives us to produce medical products that meet the highest international standards. We serve healthcare providers worldwide, offering products that improve patient care, streamline procedures, and enhance medical outcomes.
                </p>
                <p className='leading-[1.7rem] tracking-wider'>
                At Rakshaum Medical Devices, we are dedicated to producing high-performance medical equipment that ensures safety, precision, and reliability in every use. With our advanced manufacturing capabilities and adherence to international standards, we provide healthcare professionals with the tools they need to deliver optimal patient care.
                </p>
               
            </div>
            <motion.div
            animate={{
              scale:[0.9,1,0.9],
              transition:{
                duration:1,
                repeat:Infinity,
                repeatType:'loop'
              }
            }}
            className='w-[100%] flex items-center justify-center'>
                <img src={require('../../Assets/vecteezy_syringe-medical-drug_24091646.png')} className='w-[100%]' alt="" />

            </motion.div>
            <div className='w-[100%] flex flex-col gap-7'>
              {['Precision Syringes',
                'Innovative Equipment',
                'Reliable Devices',
                'Safe Solutions',
                'Medical Excellence',
                'Advanced Technology',
                'Quality Manufacturing',
                'Sterile Products',
                'Global Supply',
                'Healthcare Innovation'
              ].map((data,index)=>  <motion.div
              initial={{scale:0}}
              viewport={{once:true}}
              whileInView={{
                scale:1,
                transition:{
                  duration:0.5,
                  delay:index*0.3
                }
              }}
              key={index} className='flex gap-3 w-[100%] items-center'>
                    <div className='w-[1.3rem] h-[1.3rem] rounded-full bg-[#3fb4e2] flex items-center justify-center'>
                        <span className='w-[0.7rem] h-[0.7rem] rounded-full border-[2px] border-black'/>
                    </div>
                <h1 className='text-lg text-gray-400 tracking-wider '>{data}
                </h1>
                </motion.div>)}

            </div>
        </div>
      </div>
    </Container>
  )
}
