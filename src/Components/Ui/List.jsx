import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
export default function List({ data, index, grids }) {
  const [card, setCard] = useState(false);
  return (
    <div
      onMouseEnter={() => setCard(true)}
      onMouseLeave={() => setCard(false)}
      className={`w-[100%] bg-white relative rounded-xl py-4 px-4  flex flex-col  gap-3`}
    >
      <div className="absolute w-[2.5rem] h-[2.5rem] flex items-center rounded-full bottom-[1rem] right-[1rem] justify-center text-white bg-[#3fb4e2]">
        <IoCartOutline />
      </div>
      <motion.div
        animate={{
          scale: card ? 1.1 : 1,
          transition: { duration: 0.3 },
        }}
        className={`w-[100%] h-[20rem] flex items-center justify-center `}
      >
        <img src={data.image} alt="" className="w-[100%] h-[100%] object-cover" />
      </motion.div>
      <h1 className="text-xl font-bold text-[#252525]">{data.name}</h1>
      <div className="flex items-center text-[#f7e929] text-md gap-1">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
      <p className="text-gray-400 text-sm">{data.desc}</p>
      {/* <h1 className="text-red-600 font-semibold">{data.price}</h1> */}
    </div>
  );
}
