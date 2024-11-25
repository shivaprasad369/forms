import React, { useState, useEffect } from 'react';
import { FaFacebook, FaYoutube } from 'react-icons/fa';
import { FaSquareInstagram, FaXTwitter } from 'react-icons/fa6';
import { MdOutlineMailOutline, MdOutlinePhonePaused } from 'react-icons/md';
import { TiMessages } from "react-icons/ti";

export default function BannerAbove() {
  const [scrolling, setScrolling] = useState(false);

  // Handle the scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {  // Change background color after 50px scroll
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup on unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`w-[100vw] fixed top-0 z-50 flex items-center justify-center overflow-hidden transition-all ${
        scrolling ? 'bg-[#3fb4e2]' : 'bg-transparent'
      }`}
    >
      <div className="w-[100%] max-w-[1400px] px-[7%] py-3">
        <div className='flex items-center justify-between w-[100%]'>
          <div className='flex items-center gap-5 text-md text-[white] font-semibold'>
            <div className='flex items-center gap-1'>
              <MdOutlineMailOutline className='text-[#3fb4e2] text-2xl' />
              <h1>info.example@gmail.com</h1>
            </div>
            <div className='flex items-center gap-1'>
              <MdOutlinePhonePaused className='text-[#3fb4e2] text-2xl' />
              <h1>+2 123 654 7898</h1>
            </div>
            <div className='flex items-center gap-1'>
              <TiMessages className='text-[#39d4e9] text-2xl' />
              <h1>Need Help?</h1>
            </div>
          </div>
          <div className='flex gap-3 text-[white] items-center'>
            <h1 className='font-bold'>Follow Us:</h1>
            <FaFacebook />
            <FaSquareInstagram />
            <FaXTwitter />
            <FaYoutube />
          </div>
        </div>
      </div>
    </header>
  );
}
