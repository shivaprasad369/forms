import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
export default function Arrival({data,index}) {
  const [card, setCard] = useState(false);
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{
      opacity: 1,
      transition: {
     duration:0.5,
     delay:0.2*index
      }
    }}
      onMouseEnter={() => setCard(true)}
      onMouseLeave={() => setCard(false)}
      className="w-[100%] flex flex-col items-center justify-center border-[1px] border-[#dad8d8]"
    >
      <div className="w-[100%] overflow-hidden flex flex-col items-center justify-center">
        <div
          style={{ zIndex: 9 }}
          className={`w-[100%] relative flex items-center justify-center`}
        >
          <div
            className={`absolute w-[100%] transition-all z-10 duration-500 h-[100%] ${
              card && "bg-[#29282852]"
            } top-0`}
          />
          <img
            style={{ zIndex: -0 }}
            src={data.image}
            alt="mask"
            className="h-[22rem] -z-0 object-cover "
          />
          <div
            className={`${
              !card && "hidden"
            } transition-all duration-700 absolute w-[100%] bottom-0 z-30 bg-[#3fb4e2] text-white`}
          >
            <h1
              style={{ zIndex: 99 }}
              className="text-white font-bold capitalize text-center py-3 z-30"
            >
              Quick View
            </h1>
          </div>
        </div>
        <div className="bg-[#e7f2f0] w-[100%] text-[#3fb4e2] p-[0.5rem] items-center justify-center  flex flex-col gap-0  ">
          <h1
            className={`${
              !card && "text-black"
            } text-md transition-all uppercase duration-500 font-semibold `}
          >
           {data.name}
          </h1>
          <p className="text-gray-400 text-sm">{data.desc}</p>
          {/* <h1 className="text-xl mt-2 font-bold ">{data.price}</h1> */}
          {/* <div className="flex w-[100%] mt-5 text-[#eaf825] items-center justify-center gap-2">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div> */}
        </div>
      </div>
    </motion.div>
  );
}
