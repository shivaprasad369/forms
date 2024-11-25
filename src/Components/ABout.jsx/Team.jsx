import React from 'react'
import Container from '../Home/Container'
import { motion } from 'framer-motion'

export default function Team() {
  return (
    <Container>
      <div className='w-[100%] flex  pt-[1rem] flex-col gap-10  px-[5%] items-center justify-center'>
        <h1 className='text-4xl font-bold tracking-wider text-center text-[#3fb4e2] '>
          Our Team
        </h1>
        <div className='w-[100%] grid grid-cols-4 gap-5 px-[3%] py-[3rem]'>
            <motion.div 
            initial={{scale:0.9,opacity:0}}
            whileInView={{scale:1,opacity:1,transition:{duration:0.5,delay:0.2}}}
            className='w-[100%] flex flex-col items-center justify-center  bg-slate-100 p-4  rounded-md'>
                <div className="w-[100%] h-[15rem] rounded-sm overflow-hidden ">
                    <img src={require('../../Assets/team.jpg')} alt="team" className='w-[100%]'/>
                </div>
                <h1 className='text-xl font-bold tracking-wider  text-center mt-5'>
                    Team Name
                </h1>
                <span className='text-sm font-semibold text-blue-400 text-center  w-[100%]'>CEO</span> 
                <div className='w-fit px-3 mt-3 py-2 text-sm text-white font-bold bg-blue-400 rounded-sm'>
                    Know More
                </div>

            </motion.div>
            <motion.div 
             initial={{scale:0.9,opacity:0}}
             whileInView={{scale:1,opacity:1,transition:{duration:0.5,delay:0.4}}}
            className='w-[100%] flex flex-col items-center justify-center  bg-slate-100 p-4  rounded-md'>
                <div className="w-[100%] h-[15rem] rounded-sm overflow-hidden ">
                    <img src={require('../../Assets/team.jpg')} alt="team" className='w-[100%]'/>
                </div>
                <h1 className='text-xl font-bold tracking-wider  text-center mt-5'>
                <a href="/team">
                    Know More
                    </a>
                </h1>
                <span className='text-sm font-semibold text-blue-400 text-center  w-[100%]'>Possiton</span> 
                <div className='w-fit px-3 mt-3 py-2 text-sm text-white font-bold bg-blue-400 rounded-sm'>
                <a href="/team">
                    Know More
                    </a>
                </div>

            </motion.div>
            <motion.div
             initial={{scale:0.9,opacity:0}}
             whileInView={{scale:1,opacity:1,transition:{duration:0.5,delay:0.6}}}
              className='w-[100%] flex flex-col items-center justify-center  bg-slate-100 p-4  rounded-md'>
                <div className="w-[100%] h-[15rem] rounded-sm overflow-hidden ">
                    <img src={require('../../Assets/team.jpg')} alt="team" className='w-[100%]'/>
                </div>
                <h1 className='text-xl font-bold tracking-wider  text-center mt-5'>
                    Team Name
                </h1>
                <span className='text-sm font-semibold text-blue-400 text-center  w-[100%]'>
                    Possition
                    
                    </span> 
                <div className='w-fit px-3 mt-3 py-2 text-sm text-white font-bold bg-blue-400 rounded-sm'>
                <a href="/team">
                    Know More
                    </a>
                </div>

            </motion.div>
            <motion.div
             initial={{scale:0.9,opacity:0}}
             whileInView={{scale:1,opacity:1,transition:{duration:0.5,delay:0.9}}}
            className='w-[100%] flex flex-col items-center justify-center  bg-slate-100 p-4  rounded-md'>
                <div className="w-[100%] h-[15rem] rounded-sm overflow-hidden ">
                    <img src={require('../../Assets/team.jpg')} alt="team" className='w-[100%]'/>
                </div>
                <h1 className='text-xl font-bold tracking-wider  text-center mt-5'>
                    Team Name
                </h1>
                <span className='text-sm font-semibold text-blue-400 text-center  w-[100%]'>Possition</span> 
                <div className='w-fit px-3 mt-3 py-2 text-sm text-white font-bold bg-blue-400 rounded-sm'>
                    <a href="/team">
                    Know More
                    </a>
                </div>

            </motion.div>
        </div>

    </div>
    </Container>
  )
}
