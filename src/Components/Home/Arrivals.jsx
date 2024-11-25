import React, { useState } from "react";
import Container from "./Container";
import Arrival from "../Ui/Arrivals";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import data from "../Constant/Arrivals";
export default function Arrivals() {
  const [arrow, setArrow] = useState(false);
  return (
    <Container>
      <div id="arrivals" className="w-[100%] flex flex-col gap-5 py-[5rem] pt-[-4rem] items-center justify-center  ">
        <h1 className="text-[#2ec4ff] text-4xl font-bold tracking-wider">
          New Arrivals
        </h1>
        <span className="text-lg tracking-[0.3em]">
          {" "}
          FIND THE PERFECT PHONE FOR YOU
        </span>
        <div
          onMouseEnter={() => setArrow(() => true)}
          onMouseLeave={() => setArrow(() => false)}
          className="w-[100%] relative px-[5%] flex items-center justify-center gap-10"
        >
          <div
            style={{ zIndex: 9 }}
            className="absolute  w-[100%] px-[1rem]  flex justify-between items-center "
          >
            <motion.div
              animate={{
                opacity: arrow ? 1 : 0,
                x: arrow ? 0 : -10,
              }}
              transition={{ duration: 0.3 }}
              className="  px-[0.7rem] w-fit bg-[#2ec4ff] py-[0.7rem] rounded-md"
            >
              <FaChevronLeft className="text-[1.5rem] custom-prev text-white" />
            </motion.div>
            <motion.div
              animate={{
                opacity: arrow ? 1 : 0,
                x: arrow ? 0 : 10,
              }}
              transition={{ duration: 0.3 }}
              className="  px-[0.7rem] w-fit bg-[#2ec4ff] py-[0.7rem] rounded-md"
            >
              <FaChevronRight className="text-[1.5rem] custom-next text-white" />
            </motion.div>
          </div>
          <Swiper
            slidesPerView={3}
            spaceBetween={40}
            loop={true}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            modules={[Navigation]}
            className="w-[100%] flex overflow-hidden"
          >
         {data && data.map((data,index)=>
         <SwiperSlide key={data.id}>
          <a href="/products">
              <Arrival data={data}/>
          </a>
            </SwiperSlide>
            )   
          }
           
          </Swiper>
        </div>
      </div>
    </Container>
  );
}
