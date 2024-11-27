import React, { useState } from "react";
import Container from "../Home/Container";
import { FaUserDoctor } from "react-icons/fa6";
import { FaMedkit } from "react-icons/fa";
import { motion } from "framer-motion";
export default function Equipment({id}) {
    const [card,setCard]=useState(false)
  return (
    <Container>
      <motion.div
      viewport={{
        once:true
      }}
      initial={{
        opacity:0,
        x:100,

      }}
      whileInView={{
        opacity:1,
        x:0,
        transition:{
            duration: 0.5,
            delay:0.3*id
        },
      }}
        onMouseEnter={() => setCard(true)}
        onMouseLeave={() => setCard(false)}
        className="w-[100%] text-[#3fb4e2] md:px-[10%] max-md:px-[5%] gap-14 pb-[5rem] lg:flex max-lg:flex max-lg:flex-col lg:flex-row-reverse items-center justify-center "
      >
        <div className="lg:w-[20%] max-lg:w-[80%] flex items-center relative justify-center">
          <img
            src={require("../../Assets/CE-Certificate.jpg")}
            className="w-[100%] z-10"
            alt=""
          />
          <img
            src={require("../../Assets/abo-03.webp")}
            className="w-[100%] absolute top-[-6%] -z-0 right-[-6%]"
            alt=""
          />
          <div
            className={`${
              card && "bg-[#f5f5f586]"
            } transition-all duration-500 w-[100%] h-[100%] top-[-6%] -z-0 right-[-6%] absolute`}
          />
        </div>
        <div className="lg:w-[50%] flex flex-col gap-8">
          <h1 className="flex lg:justify-end lg:text-right w-[100%] gap-3">
            <FaMedkit  className="text-[4rem]" />
          </h1>
          <h1 className="text-2xl justify-end flex font-bold">   
          CE Certification (Conformité Européenne)
          </h1>
          <p className="text-[#5a5a5a] lg:text-justify text-left flex lg:justify-end  leading-[1.7rem]">
          The CE mark indicates that our medical devices conform to European Union health, safety, and environmental protection standards. This certification allows us to sell our products within the European Economic Area (EEA), ensuring they meet stringent safety and performance requirements.
          </p>
        </div>
      </motion.div>
    </Container>
  );
}
