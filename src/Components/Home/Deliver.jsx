import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { MdOutlineNavigateNext } from "react-icons/md";
// import './Slider.css'; // Optional custom styles
import { GrFormPrevious } from "react-icons/gr";import { motion } from "framer-motion";

const CustomSwiper = () => {
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward
  const swiperRef = useRef(null);
  const [card1,setCard1]=useState(false)
  const [card2,setCard2]=useState(false)
  const [card3,setCard3]=useState(false)
  const [card4,setCard4]=useState(false)
  const [card5,setCard5]=useState(false)
  const [card6,setCard6]=useState(false)


  const slides = ["Slide 1", "Slide 2", "Slide 3", "Slide 4"];

  const handleNavigation = () => {
    if (!swiperRef.current) return;

    const swiperInstance = swiperRef.current.swiper;

    if (direction === 1) {
      swiperInstance.slideNext();
    } else {
      swiperInstance.slidePrev();
    }

    // Update button behavior
    if (swiperInstance.isEnd) {
      setDirection(-1); // Switch to backward
    } else if (swiperInstance.isBeginning) {
      setDirection(1); // Switch to forward
    }
  };

  return (
    <div className="w-[100vw] flex items-center justify-center overflow-hidden">
      <div className="w-[100%] flex gap-5  max-w-[1400px] pl-[5%] ">
        <div className="w-[20%] gap-5 flex flex-col">
          <div  className="w-[4rem] py-2 rounded-full bg-blue-400 "/>
          <h1 className="text-[2.5rem]  font-bold leading-[2.7rem] text-[#252525]">Products</h1>
          <p className="text-sm text-[#252525] leading-[1.7rem] tracking-wide">
          Find the product you are looking for. Visit the Rakshaum product catalog with our complete portfolio. 
          </p>
          <div className="px-5 py-3 mt-10 border-[1px] border-blue-400 text-black text-sm font-bold hover:text-white w-fit hover:bg-blue-400">
            Explore More
          </div>
                  </div>
        <div className="w-[80%] items-center justify-center relative flex overflow-hidden">
          <Swiper
            ref={swiperRef}
           
            slidesPerView={1.2}
            speed={800}
            onSlideChange={(swiper) => {
              if (swiper.isEnd) setDirection(-1);
              if (swiper.isBeginning) setDirection(1);
            }}
          >
            <SwiperSlide>
              <div  className="flex  w-[100%] ">
                <div className="w-[100%] flex">
                  <div className="w-[67%] flex flex-col  ">
                    <div onMouseEnter={()=>setCard1(true)} onMouseLeave={()=>setCard1(false)} className="w-[100%] flex justify-between">
                      <div className="w-[67%] h-[18rem] overflow-hidden flex items-center justify-center">
                        <motion.img
                        animate={{
                          scale: card1? 1.1 : 1,
                         transition:{
                          duration: 1
                         }
                        }}
                          src={'https://3.imimg.com/data3/JA/UN/MY-14388331/sterile-hypodermic-single-use-syringes.jpg'}
                          className="object-cover w-[100%] h-[100%] "
                          alt=""
                        />
                      </div>
                      <div className={`${card1?'text-white':'text-black'} duration-500 w-[33%] relative  flex flex-col gap-5  p-[1.5rem]`}>
                        <motion.div animate={{width:card1?'100%':0,transition:{duration:0.5}}} className="w-[100%] h-[100%] absolute top-0 left-0 bg-blue-400" />
                        <h1 className="text-xl z-20 font-bold">Hypodermic Syrings</h1>
                        <span className="tracking-wider z-20 text-[0.95rem] h-fit leading-[1.4rem]">
                        The 30ml syringe is favored by many professional due to the clear easy to read marking for liquid withdrawal & injection.
                        </span>
                      </div>
                    </div>
                    <div onMouseEnter={()=>setCard2(true)} onMouseLeave={()=>setCard2(false)}  className="w-[100%] flex flex-row-reverse justify-between">
                      <div className="w-[70%] h-[18rem] overflow-hidden flex items-center ">
                      <motion.img
                        animate={{
                          scale: card2? 1.1 : 1,
                         transition:{
                          duration: 1
                         }
                        }}
                          src={'https://www.visioneng.us/wp-content/uploads/2020/12/Hypodermic-needle-pic.jpg'}
                          className=" w-[100%] h-[100%] object-cover"
                          alt=""
                        />
                      </div>
                      <div className={`${card2?'text-white':'text-black'} 
                      duration-500 w-[30%] relative  flex flex-col gap-5  p-[1rem]`}>
                        <motion.div animate={{width:card2?'100%':0,transition:{duration:0.5}}} className="w-[100%] h-[100%] absolute top-0 left-0 bg-blue-400" />
                        <h1 className="text-xl z-20 font-bold">Hypodermic Needels</h1>
                        <span className="tracking-wider z-20 text-[0.95rem] h-fit leading-[1.4rem]">
                        The 25ml syringe is favored by many professional due to the clear easy to read marking for liquid withdrawal & injection.
                        </span>
                      </div>
                    </div>
                  </div>
                  <div  onMouseEnter={()=>setCard3(true)} onMouseLeave={()=>setCard3(false)}  className="w-[35%] flex flex-col">
                    <div className="flex  overflow-hidden w-[100%] h-[15rem]">
                    <motion.img
                        animate={{
                          scale: card3? 1.1 : 1,
                         transition:{
                          duration: 1
                         }
                        }}
                        src={'https://magicmed.in/wp-content/uploads/2023/09/b-braun-b-braun-intrafix-safeset-iv-administration-set-i147-47-15819643519075.jpg'}

                        className="w-[100%] h-fit "
                        alt=""
                      />
                    </div>
                    <div className={`${card3?'text-white':'text-black'}
                     duration-500 w-[100%] relative  flex flex-col gap-5  p-[1rem]`}>
                        <motion.div animate={{width:card3?'100%':0,transition:{duration:0.5}}} className="w-[100%] h-[100%] absolute top-0 left-0 bg-blue-400" />
                        <h1 className="text-xl z-20 font-bold">IV Set</h1>
                        <span className="tracking-wider z-20 text-[0.95rem] h-fit leading-[1.4rem]">
                        The 60ml syringe is favored by many professional due to the clear easy to read marking for liquid withdrawal & injection.
                        </span>
                      </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div  className="flex  w-[100%] ">
                <div className="w-[100%] flex">
                  <div className="w-[65%] flex flex-col  ">
                    <div onMouseEnter={()=>setCard4(true)} onMouseLeave={()=>setCard4(false)} className="w-[100%]  flex-row-reverse flex justify-between">
                      <div className="w-[70%] h-[18rem] overflow-hidden flex items-center justify-center">
                        <motion.img
                        animate={{
                          scale: card4? 1.1 : 1,
                         transition:{
                          duration: 1
                         }
                        }}
                        src={'https://5.imimg.com/data5/SELLER/Default/2022/2/AO/WY/KF/101241860/romsons-pedia-drip-paediatric-measured-volume-iv-set.jpg'}

                          className="object-cover h-[100%] w-[100%] "
                          alt=""
                        />
                      </div>
                      <div className={`${card4?'text-white':'text-black'} duration-500 w-[30%]
                       relative  flex flex-col gap-5  p-[1rem]`}>
                        <motion.div animate={{width:card4?'100%':0,transition:{duration:0.5}}} className="w-[100%] h-[100%] absolute top-0 left-0 bg-blue-400" />
                        <h1 className="text-md z-20 font-bold">Drip Set</h1>
                        <span className="tracking-wider z-20 text-[0.95rem] h-fit leading-[1.4rem]">
                        The 60ml syringe is favored by many professional due to the clear easy to read marking for liquid withdrawal & injection.
                        </span>
                      </div>
                    </div>
                    <div onMouseEnter={()=>setCard5(true)} onMouseLeave={()=>setCard5(false)}  className="w-[100%] flex  justify-between">
                      <div className="w-[70%] h-[18rem] overflow-hidden flex items-center ">
                      <motion.img
                        animate={{
                          scale: card5? 1.1 : 1,
                         transition:{
                          duration: 1
                         }
                        }}
                        src={'https://manhattanivtherapy.com/wp-content/uploads/2023/12/IV-Fluids-for-Dehydration-Blog-v2.webp'}

                          className=" w-[100%] h-[100%] object-cover"
                          alt=""
                        />
                      </div>
                      <div className={`${card5?'text-white':'text-black'} duration-500 w-[30%] relative
                        flex flex-col gap-5  p-[1rem]`}>
                        <motion.div animate={{width:card5?'100%':0,transition:{duration:0.5}}} className="w-[100%] h-[100%] absolute top-0 left-0 bg-blue-400" />
                        <h1 className="text-xl z-20 font-bold">IV Fluids</h1>
                        <span className="tracking-wider z-20 text-[0.95rem] h-fit leading-[1.4rem]">
                        The 5ml syringe is favored by many professional due to the clear easy to read marking for liquid withdrawal & injection.
                        </span>
                      </div>
                    </div>
                  </div>
                  <div  onMouseEnter={()=>setCard6(true)} onMouseLeave={()=>setCard6(false)}  className="w-[35%] flex flex-col">
                    <div className="flex  overflow-hidden w-[100%] h-[15rem]">
                    <motion.img
                        animate={{
                          scale: card6? 1.1 : 1,
                         transition:{
                          duration: 1
                         }
                        }}
                        src={'https://www.polymedicure.com/wp-content/uploads/2019/05/polyflex.jpg'}

                        className="w-[100%] h-[100%] "
                        alt=""
                      />
                    </div>
                    <div className={`${card6?'text-white':'text-black'} duration-500 w-[100%] relative  flex flex-col gap-5  p-[1rem]`}>
                        <motion.div animate={{width:card6?'100%':0,transition:{duration:0.5}}} className="w-[100%] h-[100%] absolute top-0 left-0 bg-blue-400" />
                        <h1 className="text-xl z-20 font-bold">Cannula</h1>
                        <span className="tracking-wider z-20 text-[0.95rem] h-fit leading-[1.4rem]">
                        The 15ml syringe is favored by many professional due to the clear easy to read marking for liquid withdrawal & injection.
                        </span>
                      </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        <button
          onClick={handleNavigation}
          className="navButton absolute z-30 right-[5%] duration-500 w-[2.5rem] h-[2.5rem]  bg-blue-400 flex items-center justify-center text-white"
        >
          {direction === 1 ? (
            <MdOutlineNavigateNext className="text-4xl" />
          ) : (
            <GrFormPrevious className="text-4xl" />
          )}
        </button>
        </div>
      </div>
    </div>
  );
};

export default CustomSwiper;
