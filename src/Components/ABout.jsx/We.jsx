import React from 'react'
import Container from '../Home/Container'
import { motion } from 'framer-motion'
export default function We() {
  return (
    <Container>
      <div className='w-[100%] h-[100%] bg-black text-white flex flex-col gap-4 items-center justify-center py-[5rem]'>
      <h1 className='text-5xl text-[#3fb4e2] text-center font-bold'>
      What We Do
        </h1>
        <p className='text-lg tracking-[0.3em]'>MANUFACTURER & SUPPLY MEDICAL EQUIPMENT'S</p>
        <div className='mt-10 px-[5%] w-[1005] grid grid-cols-3 gap-10  items-center'>
            <div className='w-[100%] flex flex-col gap-5'>
                <h1 className='text-2xl font-bold text-[#3fb4e2] tracking-wide'>What do we stand for?</h1>
                <p className='leading-[1.7rem] tracking-wider'>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat inventore minus repellat suscipit, soluta necessitatibus adipisci amet sapiente ullam consequatur, vero fugit. Cumque consequatur fugit sapiente cupiditate, corrupti mollitia autem.
                </p>
                <p className='leading-[1.7rem] tracking-wider'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat inventore minus repellat suscipit, soluta necessitatibus adipisci amet sapiente ullam consequatur, vero fugit. C
                </p>
                <p className='leading-[1.7rem] tracking-wider'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat inventore minus repellat suscipit, soluta necessitatibus adipisci amet sapiente 
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
              {['High-visibility clothing',
                'Respiratory equipment',
                'Disposable PPE kits',
                'Single-use coveralls',
                'Personal protective equipment',
                'Medical devices & instruments',
                'Personal hygiene products',
                'Prevents Tiny Droplets',
                'Prevent The Spread Of Germs',
                'Essential Medical Equipment'
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
