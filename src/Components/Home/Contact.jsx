import React from "react";
import Container from "./Container";
import { FiPhoneCall } from "react-icons/fi";
import { FaRocketchat } from "react-icons/fa";
import { motion } from "framer-motion";
export default function Contact() {
  return (
    <Container>
      <div className="w-[100%] items-center justify-center flex flex-col gap-5 px-[5%] py-[4rem]">
        <h1 className="text-[#3fb4e2] max-md:text-3xl max-lg:text-center md:text-4xl font-bold tracking-wider">
        
        {`Welcome To Our Support. We're Here To Help.`.split('').map((data,index)=><motion.span key={index} initial={{opacity:0}}
           whileInView={{opacity:1,transition:{
            delay:index*0.1,
            duration:0.5,
            ease:'easeInOut'
           }}}
           >
            {data}
           </motion.span>)}
        </h1>
        <span className="md:text-lg max-md:text-center tracking-[0.3em]">
          {" "}
          ALWAYS ON YOUR SIDE WHEN YOU NEED HELP
        </span>
        <div className="w-[100%] items-center md:flex max-md:flex max-md:flex-col justify-center  mt-10 gap-10">
          <motion.div
          animate={{
            scale:0.8,
            opacity:0
          }}
        
              whileInView={{
               scale:1,
               opacity:1,
               transition:{
                duration:0.5
               }

              }}
       
          className="border-[1px] relative md:flex max-md:flex max-md:flex-col gap-5 md:w-[50%] rounded-xl transition-all duration-500 hover:border-[#8cc3e7] p-[3rem]">
            <div className="bg-[#3fb4e2] px-5 py-3  text-md rounded-md h-fit tracking-wider right-[10%] absolute bottom-[-1.5rem] text-white font-bold">
                <h1>
                  <a href="/contact">
                  Know More {'>'}
                  </a>
                  </h1>
            </div>
            <div className="w-[100%] flex flex-col gap-5">
              <FiPhoneCall className="text-[4rem]" />
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="text-lg tracking-[0.3em] uppercase">Contact Us</h1>
              <p className="text-[35px] font-bold ">Have Any Doubts?</p>
              <span className="tex-xs mt-5 text-gray-600">
                This Number is Toll Free <br />
                0000 - 1234 - 56789
              </span>
            </div>
          </motion.div>
          <motion.div 
          animate={{
            scale:0.8,
            opacity:0
          }}
        
              whileInView={{
               scale:1,
               opacity:1,
               transition:{
                duration:0.5,
                delay:0.3
               }

              }}
          className="border-[1px] relative md:flex gap-5 max-md:flex max-md:flex-col md:w-[50%] rounded-xl transition-all duration-500 hover:border-[#8cc3e7] p-[3rem]">
            <div className="bg-[#3fb4e2] px-5 py-3  text-md rounded-md h-fit tracking-wider left-[23%] absolute bottom-[-1.5rem] text-white font-bold">
                <h1>Contact {'>'}</h1>
            </div>
            <div className="w-100%] flex flex-col gap-5">
              <FaRocketchat  className="text-[4rem]" />
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="text-lg tracking-[0.3em] uppercase">Online Chat</h1>
              <p className="text-[35px] font-bold ">Live Chat Now</p>
              <span className="tex-xs mt-5 text-gray-600">
              Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.Lorem ipsum dolor
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </Container>
  );
}
