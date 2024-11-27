import React, { useEffect, useState } from "react";
// import ScrollMagic from "scrollmagic";

import shape from "../../Assets/s4-bg@web.png";
import { motion } from "framer-motion";
import zIndex from "@mui/material/styles/zIndex";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';

// import required modules
import { EffectFade,Autoplay } from 'swiper/modules';

const About = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <section
   
      className="w-[100vw] flex items-center my-[3rem] justify-between relative overflow-hidden "
    >
      <motion.div className="absolute h-[25rem] overflow-hidden -z-10 w-[68%] lg:top-[2rem] max-lg:top-[38%] right-[2rem] ">
        <img src={shape} className="w-[100%]" alt="" />
        <motion.div
          initial={{
            width: "100%",
          }}
          whileInView={{
            width: 0,

            transition: {
              duration: 1,
            },
          }}
          className="w-full h-full top-0 left-0 bg-white absolute"
        ></motion.div>
      </motion.div>
      {/* <div className="w-[40%] left-[3rem] overflow-hidden flex  items-center  z-20 h-[10rem]  border-[1px] rounded-tl-[100px]  absolute bottom-[2rem]">
       <div className="h-[100%] w-[30%] px-[2rem] bg-[#1cebfae1]"/>
       <div className={`${isHover? 'text-white bg-white':'bg-white  text-black'} relative duration-500 w-[70%] font-semibold text-md justify-center px-[2rem] py-[1rem] gap-3 h-[100%] flex flex-col`}>
      <motion.div
      animate={{
        width:isHover?'100%':0,
        transition: {
          duration: 0.5,
        },
      }}
      className="w-[100%] bg-[#14d8e6] absolute left-0 top-0 z-[-0] h-[100%]"/>
      
        <span className="text-sm z-20 ">

News ｜ 2024-11-15
        </span>
<p className="z-20">

Re volutionizing Laboratory Efficiency: The Impact of Mindray's CAL 6000 and MC-80 at the Neuberg Dr. Ajay Shah Laboratory
</p>
       </div>
      </div> */}
      <div className="w-[100%] max-w-[1400px] max-md:px-[5%] md:px-[5%] pt-[8rem] max-md:py-[3rem]">
        <div className="w-[100%] lg:flex max-lg:flex max-lg:flex-col max-lg:gap-5 ">
        <div className="lg:w-[40%] relative mt-[-5rem] flex flex-col gap-3">
          <div className="absolute right-0 max-lg:hidden  bottom-[-2rem]">
            <img src={'https://www.icumed.com/media/gvvpvwko/ivconsumablesbanner_mobile.png?format=webp'} alt="" />
          </div>
            <div className="w-[4rem] bg-blue-400 p-1 " />
            <motion.h1 
            initial={{
              y: 50,
              opacity:0
            }}
            whileInView={{
              y:0,
              opacity:1,
              transition: {
                duration: 0.5,
                delay:0.6
              },
            }}
            className="text-[2.5rem] uppercase font-[700] text-[#3fb4e2]">
            About Us
            </motion.h1>
            <motion.p
             initial={{
              y: 50,
              opacity:0
            }}
            whileInView={{
              y:0,
              opacity:1,
              transition: {
                duration: 0.5,
                delay:0.6
              },
            }}
            className="md:w-[80%] text-sm  leading-[1.5rem]">
We, at Rakshaum Medical Devices Private Limited, are on the edge of transforming healthcare through the meticulous design and production of world-class medical syringes. As we prepare to launch full-scale manufacturing operations, our focus remains on pioneering high-performance, precision-engineered medical devices that meet the ever-evolving needs of healthcare professionals and institutions.
            </motion.p>
            <motion.a
            href="/about"
             initial={{
              y: 50,
              opacity:0
            }}
            whileInView={{
              y:0,
              opacity:1,
              transition: {
                duration: 0.5,
                delay:0.6
              },
            }} className="px-4 py-2 text-xs w-fit font-bold hover:bg-blue-400 hover:text-white hover:border-blue-500 text-blue-500 border-[2px] border-blue-400">
              Explore more

            </motion.a>
     
        </div>
          <div
             onMouseEnter={() => setIsHover(true)}
             onMouseLeave={() => setIsHover(false)}
          className="lg:w-[70%] mt-[3rem] relative max-md:h-[20rem] md:h-[30rem] ">
            <div className="absolute bottom-[-0.2rem] left-[-0.2rem] w-[50%] h-[5rem] rounded-tr-full bg-white z-20" />
            <Swiper
        spaceBetween={30}
        effect={'fade'}
       loop={true}
       autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
        modules={[EffectFade,Autoplay]}
        className="w-[100%] h-[100%] flex"
      >
        <SwiperSlide>
            <motion.div
            
            className=" w-[100%] h-[100%] overflow-hidden">

            <motion.img
            initial={{
              y:100,
           opacity:0,
            }}
            whileInView={{
              y:0,
              opacity:1,
              transition: {
                duration: 0.5,
                delay:0.3
              },
            }}
            whileHover={{
              scale:1.03,
              transition: {
                duration: 0.5,
              },
            }}
              src={'https://cdn.prod.website-files.com/64c8b8901ad20c3518e174ff/66c5f4b3147319f1b1180396_Blog%20Header%20(10).png'}
              className="w-[100%] h-[100%] object-cover"
              alt=""
            />
            </motion.div>
            </SwiperSlide>
            <SwiperSlide>
            <motion.div
            
            className=" w-[100%] h-[100%] overflow-hidden">

            <motion.img
            initial={{
              y:100,
           opacity:0,
            }}
            whileInView={{
              y:0,
              opacity:1,
              transition: {
                duration: 0.5,
                delay:0.3
              },
            }}
            whileHover={{
              scale:1.03,
              transition: {
                duration: 0.5,
              },
            }}
              src={'https://media.post.rvohealth.io/wp-content/uploads/2019/01/IV_bag-732x549-thumbnail.jpg'}
              className="w-[100%] h-[100%] object-cover"
              alt=""
            />
            </motion.div>
            </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
