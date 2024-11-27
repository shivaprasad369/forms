import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { motion } from "framer-motion";
import { useState } from "react";

const Banner1 = () => {
  const slides = [
    {
      title: "What drives us",
      description: "Revolutionizing Healthcare with Precision-Engineered Syringes",
      image: "https://d1svk58pjf7hyt.cloudfront.net/wp-content/uploads/sites/6/2024/08/19154220/intravenous-fluids.jpg_s1024x1024wisk20cbk2OGdkMj18sim2N1D7Yt1AdKkSzCg0GB816VE-kuP4.jpg",
    },
    {
      title: "What drives us",
      description: "Pioneering the Future of Medical Syringe Manufacturing",
      image: "https://omnisurge.co.za/wp-content/uploads/2019/03/needles-and-syringes.png",
    },
    {
      title: "What drives us",
      description: "Delivering Excellence in Medical Devices for a Safer Tomorrow ",
      image: "https://facemedstore.com/wp-content/uploads/2023/05/hypodermic-needle-manufacturers-featured-768x432.webp",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative overflow-hidden h-screen bg-gray-100">
      <Swiper
         modules={[Autoplay]}
         autoplay={{ delay: 5000 }}
         loop={true}
         speed={800}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="h-full"
      >
        
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full flex items-center justify-center">
              {/* Background Image */}
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30" />

              {/* Text Content */}
              {activeIndex === index && (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.8 }}
                  className="absolute overflow-hidden left-[5%] lg:w-[50%] z-10 text-left text-white p-8  bg-opacity-50 rounded-lg shadow-lg"
                >
                   <motion.p
                    className="mt-4 overflow-hidden text-xl"
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                  >
                    {slide.title}
                  </motion.p>
                  <motion.h1
                    className="text-[2.6rem] overflow-hidden leading-[3.1rem] font-[400]"
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                  >
                    {slide.description}
                  </motion.h1>
                 
                  
                  <div className="border-[1px] mt-10 text-sm  border-white px-4 py-2 hover:bg-blue-400 duration-300 hover:border-blue-400 w-fit hover:text-white">
                      <a href="/about">
                        Learn More
                      </a>
                  </div>
                </motion.div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination */}
      <div className="absolute z-30 max-md:w-[50%] md:w-[50rem] max-md:h-[4rem] md:h-[8rem] rounded-tr-[10.41667vw] bg-white left-0 bottom-[-2rem] transform -translate-x-1/2 flex gap-4"/>
      <div className="absolute z-30 bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`transition-all duration-1000 cursor-pointer ${
              activeIndex === index
                ? "w-[10rem] bg-red-500"
                : "w-[4rem] bg-gray-300"
            } h-[2px] rounded-full`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Banner1;
