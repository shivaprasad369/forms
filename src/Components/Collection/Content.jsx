import React, { useEffect, useState } from "react";
import Container from "../Home/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import data from "../Constant/Arrivals";
import Arrival from "../Ui/Arrivals";
import Productdata from "../Constant/Products";
import { BsFillGridFill } from "react-icons/bs";
import { IoIosList } from "react-icons/io";
import List from "../Ui/List";
export default function Content() {
  const [arrow, setArrow] = useState(false);
  const [products,setProducts]=useState([])
  const [loading,setLoading]=useState(false)
  const [grids,setGrids]=useState(true)
  
  useEffect(()=>{
   const p= Productdata.filter((data,index)=> Number(data.typeId)===1)
   setProducts(p)
    setLoading(true)
  },[])
  const findDeviceHandle=(id)=>{
    const p= Productdata.filter((data,index)=> Number(data.id)===id)
    setProducts(p)
  }
  return (
    <Container>
      <div className="w-[100%] bg-slate-100  mt-[-4.4rem] pt-[4.4rem] flex items-center justify-center px-[5%] pb-[4rem]">
        <div className="w-[100%] flex gap-10  ">
          <div className="w-[25%] max-md:hidden flex flex-col gap-5">
            <div className="w-[100%] flex flex-col gap-5">
              <div className="px-5 py-3 text-black bg-gray-300 border-[3px] border-l-blue-400">
                <h1 className="text-xl font-bold">Products</h1>
              </div>
              <div className="flex flex-col gap-3 text-lg font-semibold">
                {[
                  { id: 1, name: "Hypodermic Syrings"},
                  { id: 2, name: "IV Set" },
                  { id: 3, name: "Hypodermic Needels"},
                  { id: 4, name: "Drip Set" },
                  {
                    id: 5,name:'IV Fluids'
                  },
                  { id: 6, name:'Cannula'}
                ].map((data, index) => (
                  <motion.h1
                  initial={{opacity:0}}
                  whileInView={{
                    opacity:1,
                    transition:{
                      duration:0.5,
                      delay:index*0.2
                    }
                  }}
                  key={data.id} onClick={()=>findDeviceHandle(data.id)}>
                    <a href={data.href} className="hover:text-blue-300 cursor-pointer">
                      {data.name}
                    </a>
                  </motion.h1>
                ))}
              </div>
            </div>
            <div className="w-[100%] flex flex-col gap-5">
              <div className="px-5 py-3 text-black bg-gray-300 border-[3px] border-l-blue-400">
                <h1 className="text-xl font-bold">Best Sallers</h1>
              </div>
              <div className="w-[100%] flex overflow-hidden">
                <motion.div

                  onMouseEnter={() => setArrow(() => true)}
                  onMouseLeave={() => setArrow(() => false)}
                  className="w-[100%] relative px-[5%] flex items-center justify-center gap-10"
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
                      className="  px-[0.7rem] w-fit bg-[#3fb4e2] py-[0.7rem] rounded-md"
                    >
                      <FaChevronLeft className="text-[1.5rem] custom-prev text-white" />
                    </motion.div>
                    <motion.div
                      animate={{
                        opacity: arrow ? 1 : 0,
                        x: arrow ? 0 : 10,
                      }}
                      transition={{ duration: 0.3 }}
                      className="  px-[0.7rem] w-fit bg-[#3fb4e2] py-[0.7rem] rounded-md"
                    >
                      <FaChevronRight className="text-[1.5rem] custom-next text-white" />
                    </motion.div>
                  </div>
                  <Swiper
                    slidesPerView={1}
                    spaceBetween={5}
                    loop={true}
                    navigation={{
                      nextEl: ".custom-next",
                      prevEl: ".custom-prev",
                    }}
                    modules={[Navigation]}
                    className="w-[100%] flex overflow-hidden"
                  >
                    {data &&
                      data.map((data, index) => (
                        <SwiperSlide key={data.id}>
                          <Arrival data={data} />
                        </SwiperSlide>
                      ))}
                  </Swiper>
                </motion.div>
              </div>
            </div>
          </div>
          <div className="md:w-[75%] flex flex-col gap-5">
            <div className="w-[100%] px-3 py-4  bg-gray-300 rounded-md text-gray-100 font-bold ">
                <div className="w-[100%] flex justify-between ">
                    <div className=" items-centerrounded-xl w-fit  px-5 p-2">
                       <h1 className="text-2xl font-bold uppercase text-blue-500">Our Products</h1>
                        </div>
                        {/* <div className="flex items-center gap-2 ">
                          <div onClick={()=>setGrids(true)}className={`w-[2.5rem] h-[2.5rem]  rounded-full ${!grids?'bg-white text-black':'bg-[#166c72] text-white'} flex items-center justify-center`}>
                          <BsFillGridFill />
                          </div>
                          <div onClick={()=>setGrids(false)} className={`w-[2.5rem] h-[2.5rem]  rounded-full ${grids?'bg-white text-black':'bg-[#166c72] text-white'} flex items-center justify-center`}>
                          <IoIosList />
                          </div>

                    </div> */}
                </div>

            </div>
            <div className="w-[100%] mt-3 grid grid-cols-3 gap-3">
          
            </div>
            <div className={`w-[100%] mt-3 grid max-lg:grid-cols-1 lg:grid-cols-3 gap-3`}>
                {
                    loading? products.map((product, index) => (
                        <div key={product.id} className="w-[100%] bg-white rounded-md">
                          <a href={`/products/${product.id}/${product.typeId}/${product.name}`}>
                          <List data={product} index={index} grids={grids} />
                            
                          </a>
                        </div>
                    )) : "Loading..."
                }

            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
