import React from "react";
import Container from "./Container";
import img1 from '../../Assets/images.jpg'
import img2 from '../../Assets/protect.jpg'
import img3 from '../../Assets/bacteria.jpg'
import AboutCard from "../Ui/About";
import { motion } from "framer-motion";
export default function About3() {

  return (
    <Container>
      <div className="w-[100%] flex flex-col gap-3 items-center justify-center">
        <h1 className="capitalize text-[#3bb4d3] text-4xl font-bold tracking-wider">
        {'What we Stand For?'.split('').map((data,index)=>
        <motion.span key={index} initial={{opacity:0}}
        whileInView={{opacity:1,transition:{
         delay:index*0.1,
         duration:0.5,
         ease:'easeInOut'
        }}}
        >
         {data}
        </motion.span>)}
        </h1>
        <span className="text-2xl tracking-[0.2em]">
          {" "}
          HIGH <span className="font-bold ">PERFORMANCE</span> AND <span className="font-bold ">SAFETY</span>
        </span>

        <div className="w-[100%] mt-10 mb-[3rem] grid grid-cols-3 gap-6">
          <AboutCard name='Accuracy' ind={1}   img={img1}/>
          <AboutCard name='Complete Protection' ind={2} img={img2} />

          <AboutCard name="Prevents Bacteria 
" ind={3}  img={img3}/>

        </div>
      </div>
    </Container>
  );
}
