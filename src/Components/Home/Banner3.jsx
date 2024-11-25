import React, {useState,useEffect} from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { TbTruckDelivery } from "react-icons/tb";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import BannerAbove from "./BannerAbove";
export default function Banner3() {
  const config = { offsetX: 100, offsetY: 100, speed: 0.1 };
  const [style, setStyle] = useState({});

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      const distanceX = x - config.offsetX;
      const distanceY = y - config.offsetY;
      const translateX = distanceX * config.speed * 0.2; // Reduce sensitivity
      const translateY = distanceY * config.speed * 0.2;
      setStyle({
        transform: `translate(${translateX}px, ${translateY}px)`,
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [config]);
  return (
    <section className="w-[100vw] overflow-hidden bg5 flex-col  flex items-center justify-center ">
   
      <div className="max-w-[1400px] relative  w-[100%] h-[100%] px-[4%] pt-[2rem] pb-[3rem] ">
      <div style={style} className="absolute w-[50%] right-[0] bottom-0">
              <div className="w-[73%] flex items-center justify-center">
                    <img src={require('../../Assets/hero-1.png')} alt="" />
              </div>
            </div>
            <div className="absolute right-[10%] top-[40%] flex items-center gap-3 bg-white w-fit p-3 rounded-full">
              <div className="w-[4rem] h-[4rem] bg-[#3fb4e2] flex items-center justify-center rounded-full">
              <TbTruckDelivery  className='text-white text-4xl'/>
              </div>
              <h1 className="text-lg leading-[1.4rem] font-bold text-[#3fb4e2]">Delivery within <br /> 30 minutes</h1>

            </div>
        <div className="w-[100%] flex  items-center overflow-hidden justify-center relative rounded-lg px-[3rem] py-[5rem]">
          
          <div className="flex w-[100%] gap-20 items-center justify-around">
            <div className="w-[50%] flex flex-col gap-5">
              <motion.div
                initial={{
                  y: -30,
                }}
                whileInView={{
                  y: 0,
                  transition: {
                    duration: 0.5,
                    ease: "easeIn",
                    type: "tween",
                  },
                }}
                className="sub-title font-bold text-xl tracking-widest uppercase w-fit"
              >
              What drives us
              </motion.div>
              <motion.div
                initial={{
                  x: 50,
                }}
                whileInView={{
                  x: 0,
                  transition: {
                    duration: 0.5,
                    ease: "easeIn",
                    type: "tween",
                  },
                }}
                className="flex flex-col "
              >
                <span className="text-[2.6rem] leading-[3.1rem] uppercase items-center font-bold tracking-wider">
                We protect and improve the health of people around the world.
                 
                </span>
                <br />
                <p className="text-gray-700 text-lg tracking-wider">
                As one of the world’s leading medical technology companies, Rakshaum aims to protect and improve the health of people around the world. For more than 180 years, we have shaped health care with our pioneering spirit and groundbreaking contributions.
                </p>
                <br />
                <div className="flex w-[100%] gap-3 relative items-center">
                  <div
                   
                    className="flex theme-btn relative overflow-hidden gap-3  hover:bg-[#fd6a6a] duration-200 justify-center   items-center w-fit"
                  > 
                    
                    
                    <h1>Shop now</h1><FaArrowRight />
                  </div>
                  
                </div>
              </motion.div>
            </div>
            <div className="w-[45%]">

            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
