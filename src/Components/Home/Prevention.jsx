import React, { useState } from 'react'
import Container from './Container'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
export default function Prevention() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <Container>
      <div className='w-[100%] flex  flex-col gap-4 items-center pb-[4rem] justify-center'>
      <h1 className="text-[#2ec4ff] text-4xl font-bold tracking-wider">
      Prevent The Spread Of Germs
        </h1>
        <span className="text-lg tracking-[0.3em]">
          {" "}
          EXPLORE AND FIND RIGHT ONE
        </span>
        <div className='w-[100%] relative justify-center flex items-center'>
        <div style={{zIndex:9}}  className="absolute  w-[100%] px-[2rem]  flex justify-between items-center ">
              <motion.div
             
                transition={{ duration: 0.3}}
                className="  px-[0.7rem] w-fit bg-[#2ec4ff] py-[0.7rem] rounded-md"
              >
                <FaChevronLeft className="text-[1.5rem] custom-prev text-white" />
              </motion.div>
              <motion.div
                 
                     transition={{ duration: 0.3}}
                     className="  px-[0.7rem] w-fit bg-[#2ec4ff] py-[0.7rem] rounded-md"
              >
                <FaChevronRight className="text-[1.5rem] custom-next text-white" />
              </motion.div>
            </div>
        <Swiper
           style={{
            '--swiper-navigation-color': '#fff',
           
            '--swiper-pagination-color': '#fff',
          }}
          onSwiper={setThumbsSwiper}
        spaceBetween={0}
        slidesPerView={3}
        loop={true}
        
        navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper1 w-[100%] flex items-center"
      >
        <SwiperSlide>
            <img src={require('../../Assets/prev1.webp')} className='h-[30rem] object-cover' alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={require('../../Assets/prev1.webp')} className='h-[30rem] object-cover' alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={require('../../Assets/prev1.webp')} className='h-[30rem] object-cover' alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={require('../../Assets/prev1.webp')} className='h-[30rem] object-cover' alt="" />
        </SwiperSlide>
    </Swiper>
        </div>
      </div>
    </Container>
  )
}
