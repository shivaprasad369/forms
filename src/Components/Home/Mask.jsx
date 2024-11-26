import React from "react";
import Container from "./Container";
import { motion } from "framer-motion";

export default function Mask() {
  return (
    <Container>
      <div className="w-[100%] h-[100%] pb-[4rem] items-center justify-center">
        <div className="w-[100%] flex flex-col gap-3 items-center justify-center">
          <h1 className="text-[#3fb4e2] text-4xl  font-bold tracking-wider">
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
          <div className="w-[100%] mt-5 grid grid-cols-3 px-[3rem] items-center justify-center gap-5">
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
                    <h1 className="text-xl font-bold text-center">Precision and Reliability</h1>
                    <p className="text-center w-[80%]">Our high-quality medical syringes are meticulously engineered for accurate and consistent performance, ensuring safe and effective administration of medications.

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
                    <h1 className="text-xl font-bold text-center">Advanced Manufacturing
                    </h1>
                    <p className="text-center w-[80%]">Produced using state-of-the-art technology, our syringes are crafted to meet the highest industry standards of quality, sterility, and safety.
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
              className="object-cover"
            />
           <div className="w-[100%] flex flex-col gap-4">
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
                    <h1 className="text-xl font-bold text-center">Versatility</h1>
                    <p className="text-center w-[80%]">Designed for a wide range of medical applications, our syringes are ideal for use in hospitals, clinics, and emergency care settings, offering ease of use for healthcare professionals.

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
                    <h1 className="text-xl font-bold text-center">Commitment to Innovation</h1>
                    <p className="text-center w-[80%]">At Rakshaum Medical Devices, we are dedicated to continuous innovation, ensuring that our syringes meet evolving healthcare needs while maintaining excellence in both design and function.

</p>
                </motion.div>
          </div>
           
          </div>
        </div>
      </div>
    </Container>
  );
}
