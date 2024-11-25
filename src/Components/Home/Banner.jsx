import React, { useState } from "react";
import Container from "./Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// Import Swiper styles
import "swiper/css";
import banner from '../../Assets/banner.mp4'
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { motion } from "framer-motion";
export default function Banner() {
  const [arrow, setArrow] = useState(false);
  console.log(arrow);
  return (
    <Container>
      <div
        onMouseEnter={() => setArrow(() => true)}
        onMouseLeave={() => setArrow(() => false)}
        className="w-[100%] relative h-[40rem] flex items-center justify-center "
      >
        <div
          style={{ zIndex: 9 }}
          className="absolute  w-[100%] px-[2rem]  flex justify-between items-center "
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
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          loop={true}
          modules={[Navigation]}
          className="w-[100%] flex overflow-hidden"
        >
          {/* <SwiperSlide>
            <div className="w-[100%] h-[100%] bg-[#ffffff5b] relative overflow-hidden items-center flex ">
              <img
                src={require("../../Assets/slider1.jpg")}
                alt=""
                className="h-[100%] w-[100%] object-cover"
              />
              <div className="w-[70%] flex justify-center items-center absolute flex-col gap-10">
                <h1 className="text-[#4BC2F2] text-3xl uppercase font-semibold tracking-wider">
                  QUALITY FIRST
                </h1>
                <h1 className="text-8xl text-center font-bold text-[#555555]">
                  Medical safety <br /> gears
                </h1>
                <div className="flex justify-center items-center gap-5 bg-[#4BC2F2] text-white capitalize text-lg font-bold px-5 py-3">
                  shop now
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[100%] h-[100%] bg-[#ffffff5b] relative overflow-hidden items-center flex ">
              <img
                src={require("../../Assets/slider1.jpg")}
                alt=""
                className="h-[100%] w-[100%] object-cover"
              />
              <div className="w-[70%] flex justify-center items-center absolute flex-col gap-10">
                <h1 className="text-[#4BC2F2] text-3xl uppercase font-semibold tracking-wider">
                  QUALITY FIRST
                </h1>
                <h1 className="text-8xl text-center font-bold text-[#555555]">
                  Medical safety <br /> gears
                </h1>
                <div className="flex justify-center items-center gap-5 bg-[#4BC2F2] text-white capitalize text-lg font-bold px-5 py-3">
                  shop now
                </div>
              </div>
            </div>
          </SwiperSlide> */}
          <SwiperSlide>
            <div className="w-[100%] h-[100vh] flex items-center">
              <video autoPlay  muted  poster={require('../../Assets/poster.png')} className="w-[100%] h-[100%]">
                <source src={banner} type="video/mp4" />
              </video>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[100%] h-[100vh] flex items-center">
              <video autoPlay  muted  poster={require('../../Assets/poster.png')} className="w-[100%] h-[100%]">
                <source src={banner} type="video/mp4" />
              </video>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[100%] h-[100vh] flex items-center">
              <video autoPlay  muted  poster={require('../../Assets/poster.png')} className="w-[100%] h-[100%]">
                <source src={banner} type="video/mp4" />
              </video>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </Container>
  );
}
