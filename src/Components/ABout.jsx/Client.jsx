import React from 'react'
import Container from '../Home/Container'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules'
export default function Client() {
  return (
    <Container>
      <div className='w-[100%] flex pb-[4rem] pt-[1rem] flex-col gap-10  px-[5%] items-center justify-center'>
        <h1 className='text-4xl font-bold tracking-wider text-center text-[#3fb4e2] '>
          Our Team
        </h1>
      <Swiper
            spaceBetween={0}
            slidesPerView={4}
          loop={true}
          modules={[Navigation]}
          className="w-[100%] items-center  justify-center flex overflow-hidden"
        >
          <SwiperSlide>
            <div className='w-[100%] flex items-center justify-center'>

            <div className='  w-fit h-fit my-[2rem]  flex items-center justify-center hover:shadow-2xl transition-all duration-500'>
                <img src={require('../../Assets/client-5.webp')} className='w-[9rem] ' alt="client" />
            </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='w-[100%] flex items-center justify-center'>

            <div className='  w-fit h-fit my-[2rem]  flex items-center justify-center hover:shadow-2xl transition-all duration-500'>
                <img src={require('../../Assets/client-5.webp')} className='w-[9rem] ' alt="client" />
            </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='w-[100%] flex items-center justify-center'>

            <div className='  w-fit h-fit my-[2rem]  flex items-center justify-center hover:shadow-2xl transition-all duration-500'>
                <img src={require('../../Assets/client-5.webp')} className='w-[9rem] ' alt="client" />
            </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='w-[100%] flex items-center justify-center'>

            <div className='  w-fit h-fit my-[2rem]  flex items-center justify-center hover:shadow-2xl transition-all duration-500'>
                <img src={require('../../Assets/client-5.webp')} className='w-[9rem] ' alt="client" />
            </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='w-[100%] flex items-center justify-center'>

            <div className='  w-fit h-fit my-[2rem]  flex items-center justify-center hover:shadow-2xl transition-all duration-500'>
                <img src={require('../../Assets/client-5.webp')} className='w-[9rem] ' alt="client" />
            </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='w-[100%] flex items-center justify-center'>

            <div className='  w-fit h-fit my-[2rem]  flex items-center justify-center hover:shadow-2xl transition-all duration-500'>
                <img src={require('../../Assets/client-5.webp')} className='w-[9rem] ' alt="client" />
            </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='w-[100%] flex items-center justify-center'>

            <div className='  w-fit h-fit my-[2rem]  flex items-center justify-center hover:shadow-2xl transition-all duration-500'>
                <img src={require('../../Assets/client-5.webp')} className='w-[9rem] ' alt="client" />
            </div>
            </div>
            </SwiperSlide>

            </Swiper>
      </div>
    </Container>
  )
}
