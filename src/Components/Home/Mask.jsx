import React from "react";
import Container from "./Container";
import { motion } from "framer-motion";

export default function Mask() {
  return (
    <Container>
      <div className="w-[100%] h-[100%] pb-[4rem] items-center justify-center">
        <div className="w-[100%] flex flex-col gap-3 items-center justify-center">
          <h1 className="text-[#3fb4e2] md:text-4xl  max-md:text-3xl font-bold tracking-wider">
         {'OUR PRIME PRODUCT'.split('').map((data,index)=><motion.span key={index} initial={{opacity:0}}
           whileInView={{opacity:1,transition:{
            delay:index*0.1,
            duration:0.5,
            ease:'easeInOut'
           }}}
           >
            {data}
           </motion.span>)}
          </h1>
          <p className="text-[#4C4C4C] text-lg tracking-[0.3em]">
            DURABLE FACE MASKS
          </p>
          <div className="w-[100%] mt-5 grid md:grid-cols-3 max-md:grid-cols-1 px-[3rem] items-center justify-center gap-5">
          <div className="w-[100%] flex flex-col gap-4">
                <motion.div
                initial={{
                  opacity:0,
                  scale:0.95
                }}
                whileInView={{
                  opacity:1,
                  scale:1,
                  transition: { duration: 1,delay:0.3 },
                }}
                className="flex flex-col gap-3 w-[100%] items-center justify-center">
                    <img src={require('../../Assets/icon-2.webp')} className="w-[8rem]" alt="" />
                    <h1 className="text-xl font-bold text-blue-500 uppercase text-center">Precision and Reliability</h1>
                    <p className="text-center w-[80%]">
                    High-quality syringes designed for accurate and safe medication administration.  


</p>
                </motion.div>
                <motion.div
                initial={{
                  opacity:0,
                  scale:0.95
                }}
                whileInView={{
                  opacity:1,
                  scale:1,
                  transition: { duration: 1,delay:0.5 },
                }} className="flex flex-col gap-3 w-[100%] items-center justify-center">
                    <img src={require('../../Assets/icon-4.webp')} className="w-[8rem]" alt="" />
                    <h1 className="text-xl font-bold uppercase text-blue-500 text-center">Advanced Manufacturing
                    </h1>
                    <p className="text-center w-[80%]">Crafted with state-of-the-art technology for unmatched sterility, safety, and quality.
</p>
                </motion.div>
          </div>
            <motion.img
            animate={{
              scale:[0.9,1,0.9],
           
            }}
            transition={{
              duration:0.8,
              repeat: Infinity,
              repeatType:'loop',
              ease:'easeIn',

            }}
              src={require("../../Assets/vecteezy_syringe-medical-drug_24091646.png")}
              alt="Mask 1"
              className="object-cover max-md:w-[100%]"
            />
           <div className="w-[100%] flex flex-col  gap-4">
                <motion.div
                initial={{
                  opacity:0,
                  scale:0.95
                }}
                whileInView={{
                  opacity:1,
                  scale:1,
                  transition: { duration: 1,delay:0.5 },
                }}
                className="flex flex-col gap-3 w-[100%] items-center justify-center">
                    <img src={require('../../Assets/icon-3.webp')} className="w-[8rem]" alt="" />
                    <h1 className="text-xl font-bold uppercase text-blue-500 text-center">Versitality</h1>
                    <p className="text-center w-[80%]">Perfect for diverse medical needs in hospitals, clinics, and emergency settings.
</p>
                </motion.div>
                <motion.div
                initial={{
                  opacity:0,
                  scale:0.95
                }}
                whileInView={{
                  opacity:1,
                  scale:1,
                  transition: { duration: 1,delay:0.7 },
                }}
                className="flex flex-col gap-3 w-[100%] items-center justify-center">
                    <img src={require('../../Assets/icon-1.webp')} className="w-[8rem]" alt="" />
                    <h1 className="text-xl font-bold uppercase text-blue-500 text-center">Commitment to Innovation</h1>
                    <p className="text-center w-[80%]">
                    Continuous innovation ensures syringes meet evolving healthcare demands effectively.
</p>
                </motion.div>
          </div>
           
          </div>
        </div>
      </div>
    </Container>
  );
}
