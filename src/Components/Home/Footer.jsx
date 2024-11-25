import React from "react";
import Container from "./Container";

import { IoIosArrowForward } from "react-icons/io";
export default function Footer() {
  return (
    <Container>
      <div className="w-[100%] flex flex-col text-white gap-5 items-center justify-center  py-[4rem] bg5"></div>
      <div className="w-[100%] flex flex-col text-white gap-5 items-center justify-center  py-[4rem] bg5">
        <span className="text-lg tracking-[0.3em]">SUBSCRIBE NOW</span>
        <h1 className="text-[#2ec4ff] text-4xl font-bold tracking-wider">
          Get our updates always fast
        </h1>
        <span className="text-lg tracking-[0.3em]">
          YOUR PERSONAL DATA WILL BE ALWAYS KEEP SAFE
        </span>
        <div className="w-[100%] flex items-center flex-col justify-center">
          <form className="w-[40%] flex gap-2 items-center my-10 h-[3.5rem] bg-white rounded-full ">
            <input
              type="text"
              placeholder="Email"
              className="outline-none h-[100%] w-[89%] rounded-full px-3 text-black"
            />
            <button className="w-[2.9rem] h-[2.9rem]  text-center justify-center  flex items-center rounded-full bg-gray-500 font-bold text-2xl text-blue-200">
              <IoIosArrowForward />
            </button>
          </form>
          <div className="w-[100%] mt-5 flex items-center text-gray-500 gap-5 justify-center">
            <div className="w-[80%] uppercase text-lg justify-center tracking-wider flex items-center gap-5">
                <h1>
                    About us
                </h1>
                <span> |</span>
                <h1>
                    Privacy Policy
                </h1>
                <span>|</span>
                <h1>
                    faq
                </h1>
                <span>|</span>
                <h1>
                    Terms and conditions
                </h1>
                <span>|</span>
                <h1>
                    Contact us
                </h1>
                
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white px-[10%] text-gray-600 py-5 text-lg font-bold ">
<h1>All Right Reserved © 2024, UNITECHNO</h1>
      </div>
    </Container>
  );
}
