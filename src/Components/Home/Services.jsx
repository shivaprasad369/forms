import React, { useState } from "react";
import Container from "./Container";
import { motion } from "framer-motion";
import Gallary from "../Ui/Gallary";
export default function Services() {
  const [card, setCard] = useState(false);
  return (
    <Container>
      <div className="w-[100%]  pt-[-4rem] flex items-center justify-between">
        <div className="w-[100%] flex items-center">
          <div className="w-[50%] flex items-center">
            <div className="w-[50%] flex flex-col">
              <Gallary
                name={"Face Mask & Face Shield"}
                title={
                  <span className="text-5xl font-bold text-white">
                    Protect <br /> Yourself
                  </span>
                }
              />
              <Gallary
                name={"Clinical Tube"}
                title={
                  <span className="text-5xl font-bold text-white">
                    Tiger-Top
                    <br />
                    Tube
                  </span>
                }
              />
            </div>
            <div className="w-[50%] flex flex-col">
              <Gallary
                name={"Blood Collection Tube"}
                title={
                  <span className="text-5xl font-bold text-white">
                    Test Tubes
                  </span>
                }
              />
              <Gallary
                name={"Microscopic Examination"}
                title={
                  <span className="text-5xl font-bold text-white">
                    Analyze <br /> Viruses
                  </span>
                }
              />
            </div>
          </div>
          <div className="w-[50%] h-[50rem] overflow-hidden">
            <div
              onMouseEnter={() => setCard(true)}
              onMouseLeave={() => setCard(false)}
              className="relative h-[100%]"
            >
              <motion.div
                animate={{
                  width: card ? "100%" : 0,
                  display: card ? "flex " : "none",
                  height: card ? "100%" : 0,
                  opacity: card ? 1 : 0,
                }}
                transition={{
                  duration: 0.3,
                }}
                style={{ zIndex: 99 }}
                className="absolute bg-[#080808b9] z-99 bottom-0 w-[100%] flex flex-col gap-5 h-[100%] items-start p-[2rem] justify-end"
              >
                <h1 className="text-2xl text-white font-bold">Disposable</h1>
                <span className="text-5xl font-bold text-white">
                  Surgical Masks
                </span>
              </motion.div>
              <motion.img
                animate={{
                  scale: card ? 1.2 : 1,
                }}
                transition={{
                  duration: 0.5,
                }}
                src={require("../../Assets/gallery-1.webp")}
                alt="galary"
                className="w-[100%] -z-10 object-cover h-[100%]"
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
