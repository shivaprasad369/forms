import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import { CiMenuBurger } from 'react-icons/ci';
import { MdArrowDropDown } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";

export default function Header() {
  const [menu, setMenu] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [bgColor, setBgColor] = useState('transparent');
  const [textColor, setTextColor] = useState('white');

  // Handle the scroll event to change background color and text color
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // Change 50 to any value that suits your needs
        setBgColor('white'); // Set the background color to white
        setTextColor('black'); // Set text color to black after scroll
      } else {
        setBgColor('transparent'); // Keep it transparent when at the top
        setTextColor('white'); // Keep text color white at the top
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close the dropdown menu when clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      // if (!e.target.closest('.dropdown')) {
      //   setP(false);
      // }
    };
    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, []);
console.log(menu)
  return (
    <header
      style={{ zIndex: 999, backgroundColor: bgColor }}
      className={`w-[100vw] shadow-md fixed top-0 border-t-[1px] h-fit border-t-[#4BC2F2] transition-all duration-300 ease-in-out bg-${bgColor} items-center justify-center`}
    >
      <div className='w-[100%] max-w-[1500px] px-[7%] py-5'>
        <div className='w-[100%] flex items-center justify-between'>
          {/* Logo */}
          <img src={require('../../Assets/logo.png')} alt='Logo' className='w-[10rem] object-contain' />

          {/* Menu Section */}
            <CiMenuBurger className={`text-2xl text-${textColor}  lg:hidden`} onClick={() => setMenuOpen(!menuOpen)} />
          <div className={`uppercase flex items-center gap-5 text-${textColor} max-lg:hidden text-xl`}>
            <h1 className="text-sm font-bold tracking-wider hover:text-blue-400 transition-all">
              <a href="/">Home</a>
            </h1>
            <h1 className="text-sm font-bold tracking-wider hover:text-blue-400 transition-all">
              <a href="/about">About</a>
            </h1>

            {/* Dropdown Menu */}
            <div className="relative text-sm font-bold tracking-wider flex items-center justify-center cursor-pointer">
              <h1 onClick={() => setMenu(()=>!menu)} className="flex items-center gap-1 hover:text-blue-400">
                Products <MdArrowDropDown />
              </h1>
              <motion.div
                animate={{ opacity: menu ? 1 : 0 ,
                  transition:{
                    duration:0.5
                  }
                }}
             
                className={`absolute shadow-xl z-30 flex flex-col text-black items-center py-[2rem] text-sm rounded-b-xl uppercase tracking-wider gap-3 top-[3.3rem] w-[250%] bg-white`}
              >
                <h2 className='hover:text-blue-400 cursor-pointer transition-all'>
                  <a href="/products/1/1/Hypodermic Syringse">Hypodermic Syrings</a>
                </h2>
                <h2 className='hover:text-blue-400 cursor-pointer transition-all'>
                  <a href="/products/2/1/IV Set">IV Set</a>
                </h2>
                <h2 className='hover:text-blue-400 cursor-pointer transition-all'>
                  <a href="/products/3/1/Hypodermic Needels">Hypodermic Needels</a>
                </h2>
                <h2 className='hover:text-blue-400 cursor-pointer transition-all'>
                  <a href="/products/4/1/Drip Set">Drip Set</a>
                </h2>
                <h2 className='hover:text-blue-400 cursor-pointer transition-all'>
                  <a href="/products/5/1/IV Fluidss">IV Fluids</a>
                </h2>
                <h2 className='hover:text-blue-400 cursor-pointer transition-all'>
                  <a href="/products/6/1/Cannula">Cannula</a>
                </h2>
              </motion.div>
            </div>

            {/* Other Menu Items */}
            <h1 className="text-sm font-bold tracking-wider hover:text-blue-400 transition-all">
              <a href="/blog">Blogs</a>
            </h1>
            <h1 className="text-sm font-bold tracking-wider hover:text-blue-400 transition-all">
              <a href="/career">Career</a>
            </h1>
            <h1 className="text-sm font-bold tracking-wider hover:text-blue-400 transition-all">
              <a href="/about/#certificates">Certificate</a>
            </h1>
            <h1 className="text-sm font-bold tracking-wider hover:text-blue-400 transition-all">
              <a href="/contact">Contact Us</a>
            </h1>
          </div>
        </div>

        {/* Mobile Menu (if needed) */}
        {menuOpen && (
          <div className="lg:hidden fixed top-[5rem] flex flex-col gap-5 left-0 right-0 bg-gray-800 p-5 text-white">
            {/* <h1 className="text-lg font-bold hover:text-blue-400"><a href="/">Home</a></h1> */}
            <h1 className="text-lg font-bold tracking-wider hover:text-blue-400 transition-all">
              <a href="/">Home</a>
            </h1>
            <h1 className="text-lg font-bold tracking-wider hover:text-blue-400 transition-all">
              <a href="/about">About</a>
            </h1>

            {/* Dropdown Menu */}
            <div className="relative text-lg font-bold duration-500 tracking-wider flex flex-col   cursor-pointer">
              <h1 onClick={() => setMenu(()=>!menu)} className="flex items-center gap-1 hover:text-blue-400">
                Products <MdArrowDropDown />
              </h1>
              <motion.div
                animate={{ height: menu ? '100%' : '0' ,
                  opacity:menu? 1:0,
                  transition:{
                    duration:0.5
                  }
                }}
             
                className={`${!menu  && 'hidden'} text-[16px] duration-1000 py-[1rem] pl-[2rem] flex flex-col gap-4`}
              >
                <h2 className='hover:text-blue-400 cursor-pointer transition-all'>
                  <a href="/products/1/1/Hypodermic Syringse">Hypodermic Syrings</a>
                </h2>
                <h2 className='hover:text-blue-400 cursor-pointer transition-all'>
                  <a href="/products/2/1/IV Set">IV Set</a>
                </h2>
                <h2 className='hover:text-blue-400 cursor-pointer transition-all'>
                  <a href="/products/3/1/Hypodermic Needels">Hypodermic Needels</a>
                </h2>
                <h2 className='hover:text-blue-400 cursor-pointer transition-all'>
                  <a href="/products/4/1/Drip Set">Drip Set</a>
                </h2>
                <h2 className='hover:text-blue-400 cursor-pointer transition-all'>
                  <a href="/products/5/1/IV Fluidss">IV Fluids</a>
                </h2>
                <h2 className='hover:text-blue-400 cursor-pointer transition-all'>
                  <a href="/products/6/1/Cannula">Cannula</a>
                </h2>
              </motion.div>
            </div>

            {/* Other Menu Items */}
            <h1 className="text-lg font-bold tracking-wider hover:text-blue-400 transition-all">
              <a href="/blog">Blogs</a>
            </h1>
            <h1 className="text-lg font-bold tracking-wider hover:text-blue-400 transition-all">
              <a href="/career">Career</a>
            </h1>
            <h1 className="text-lg font-bold tracking-wider hover:text-blue-400 transition-all">
              <a href="/about/#certificates">Certificate</a>
            </h1>
            <h1 className="text-lg font-bold tracking-wider hover:text-blue-400 transition-all">
              <a href="/contact">Contact Us</a>
            </h1>
          </div>
        )}
      </div>
    </header>
  );
}
