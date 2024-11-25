import { motion } from "framer-motion";
import React, { useState } from "react";
export default function AboutCard({ name,ind,img }) {
  const [first, setFirst] = useState(false);
  return (
    <motion.div
    initial={{opacity:0,scale:0.8}}
    whileInView={{
      opacity:1,
      scale:1,
      transition:{
        duration: 0.5,
        ease: "easeInOut",
        delay:0.2*ind
      }
    }}
      onMouseEnter={() => setFirst(() => true)}
      onMouseLeave={() => setFirst(() => false)}
      className="w-[100%] flex flex-col gap-3 items-center justify-center"
    >
      <div
        className={`border-[1rem] transition-all duration-500 h-[15rem] ${
          first ? "border-[#3fb4e2]" : "border-gray-300"
        } w-[15rem]  rounded-full  overflow-hidden`}
      >
        <img
          src={img}
          className="w-[100%] h-[100%]"
          alt="medical devices"
        />
      </div>
      <h1 className="text-3xl font-bold text-[#636566]">{name}</h1>
      <p className="w-[80%] text-center text-gray-500">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos delectus iste impedit
      </p>
    </motion.div>
  );
}
