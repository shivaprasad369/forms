import React from "react";
import Container from "./Container";
import { motion } from "framer-motion";
export default function Basic() {
  return (
    <Container>
      <div className="bg1">
        <div className="w-[100%] flex relative z-99 flex-col gap-5 pb-[10rem] max-md:pt-[17rem] md:pt-[10rem] mt-[-4.5rem]  items-center justify-center">
          <motion.div 
          initial={{
            opacity: 0,
            x: -100,
            rotate:20
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            rotate:0,
            transition: {
              duration: 0.5,
              ease: "easeInOut",
              delay:0.7
            },

          }}
          style={{zIndex:90}} className="bg-[#3fb4e2] z-99 md:p-[3rem] max-md:p-[1rem]  mr-[20%] flex flex-col gap-4 md:w-[40%] rounded-xl">
            <h1 className="text-4xl font-semibold tracking-wider  text-white">
              Your time to join us
            </h1>
            <p className="text-md tracking-wider font-bold text-white ">
              Discover your job opportunities and become an important part of
              our future.
            </p>
            <div className="px-4 py-3 text-lg font-bold w-fit rounded-full text-blue-400 bg-white hover:bg-blue-600 hover:border-blue-300 hover:text-white border-[2px]">
              <a href="/career">

              Apply now
              </a>
            </div>
          </motion.div>
          <motion.div
          initial={{
            opacity: 0,
            scale:0.9,
          
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
        
            transition: {
              duration: 0.5,
              ease: "easeInOut",
              delay:0.2
            },

          }}
          className=" absolute md:right-[15%] top-[3rem] z-10 md:h-[30rem] max-md:w-[80%]  md:w-[25rem] rounded-sm overflow-hidden">
            <img src={require('../../Assets/vision-values-career-11.jpeg')} alt="" className="w-[100%] h-[100%] object-cover" />
          </motion.div>
        </div>
      </div>
    </Container>
  );
}
