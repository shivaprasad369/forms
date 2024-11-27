import React from 'react'
import Container from './Container'
import { FaLinkedinIn, FaPhoneAlt, FaYoutube } from 'react-icons/fa'
import { MdOutlineMail } from 'react-icons/md'
import { SlSocialInstagram } from "react-icons/sl";
import { IoMdTime } from 'react-icons/io';
import img1 from '../../Assets/pngwing.com.png'
import { FaXTwitter } from 'react-icons/fa6';
export default function Footer1() {
  return (
    <Container>

      <div className="w-[100%] z-30  relative flex flex-col text-white  items-center justify-center bg7">
        <div className="absolute top-0 left-0 -z-10 w-[100%] h-[100%] bg-gradient-to-r from-[#40faea94] to-[#0dc7ff98]"></div>
            <div className='w-[100%] px-[7%] z-30  lg:flex max-lg:flex max-lg:flex-col justify-between  py-[4rem] '>
                <div className='lg:w-[35%] flex flex-col gap-3'>
                    <img src={require('../../Assets/logo.png')} className='w-[80%]' alt="" />
                    <p className=' text-md font-semibold tracking-wider leading-[1.7rem]'>
                    We are trusted provider of innovative and reliable medical solutions, committed to enhancing healthcare with cutting-edge technology and exceptional service.
                    </p>
                    
                    <div className=' flex flex-col gap-3'>
                        <div className='flex items-center gap-3'>
                            <div className='text-white bg-[#1cb2f8] rounded-full w-[2.5rem] h-[2.5rem] flex items-center justify-center'>

                        <FaPhoneAlt className='text-[20px] ' />
                            </div>
                        <span className='text-lg font-semobold hover:text-blue-400 transition-all'>
                            <a href="tel:123-456-7890 font-bold">123-456-7890</a>
                        </span>

                        </div>
                        <div className='flex items-center gap-3'>
                            <div className='text-white bg-[#1cb2f8] rounded-full w-[2.5rem] h-[2.5rem] flex items-center justify-center'>

                        <MdOutlineMail className='text-[20px] ' />
                            </div>
                        <span className='text-lg font-semobold hover:text-blue-400 transition-all'>
                            <a href="tel:123-456-7890 font-bold">info@yourmail.com</a>
                        </span>

                        </div>
                        <div className='flex items-center gap-3'>
                            <div className='text-white bg-[#1cb2f8] rounded-full w-[2.5rem] h-[2.5rem] flex items-center justify-center'>

                        <IoMdTime  className='text-[20px] ' />
                            </div>
                        <span className='text-lg font-semobold hover:text-blue-400 transition-all'>
                            <a href="tel:123-456-7890 font-bold">Mon-Fri (9.00AM - 8.00PM)</a>
                        </span>

                        </div>
                        
                    </div>
                    
                    {/* <div className=' flex items-center gap-5'>
                        <div className='w-[4rem] h-[4rem] rounded-full bg-white flex items-center justify-center'>
                        <FaLinkedinIn className='text-[25px] text-black' />                      
                         </div>
                         <div className='w-[4rem] h-[4rem] rounded-full bg-white flex items-center justify-center'>
                        <SlSocialInstagram  className='text-[25px] text-black' />                      
                         </div>
                    </div> */}
                    
                </div>
                <div className='lg:flex lg:w-[40%] justify-between max-lg:flex max-lg:flex-col gap-5 '>

                <div className='flex flex-col gap-3 w-fit max-lg:mt-[2rem]'>
<h1 className='md:text-xl max-md:text-2xl font-bold pb-[1rem] border-b-[1px] border-gray-400 w-fit'>Quick Links</h1>
<div className='flex flex-col gap-3'>
    <a href="/about" className='text-lg font-semibold hover:text-blue-400 transition-all'>About Us</a>
    <a href="/products" className='text-lg font-semibold hover:text-blue-400 transition-all'>Products</a>
    <a href="/contact" className='text-lg font-semibold hover:text-blue-400 transition-all'>Contact Us</a>
    <a href="/career" className='text-lg font-semibold hover:text-blue-400 transition-all'>Careers</a>
    <a href="#" className='text-lg font-semibold hover:text-blue-400 transition-all'>Privacy Policy</a>
    <a href="#" className='text-lg font-semibold hover:text-blue-400 transition-all'>Terms & Conditions</a>

</div>

                    </div>
                    <div className='flex flex-col gap-3 max-lg:pt-[2rem]'>
<h1 className='md:text-xl max-md:text-2xl font-bold pb-[1rem] border-b-[1px] border-gray-400 w-fit'>Browse Category</h1>
<div className='flex flex-col gap-3'>
    <a href="/products/1/1/Hypodermic Syringse" className='text-lg font-semibold hover:text-blue-400 transition-all'>Hypodermic Syringes</a>
    <a href="/products/2/1/IV%20Set" className='text-lg font-semibold hover:text-blue-400 transition-all'>IV Set</a>
    <a href="/products/3/1/Hypodermic%20Needels" className='text-lg font-semibold hover:text-blue-400 transition-all'>Hypodermic Needles </a>
    <a href="/products/5/1/IV%20Fluidss" className='text-lg font-semibold hover:text-blue-400 transition-all'>IV Fluids</a>
    <a href="/products/6/1/Cannula" className='text-lg font-semibold hover:text-blue-400 transition-all'>Cannula</a>
    <a href="/products/4/1/Drip%20Set" className='text-lg font-semibold hover:text-blue-400 transition-all'>Drip Set</a>

</div>

                    </div>
                </div>
                  
                    
                
            </div>   
            <div className='pt-2 border-t-[1px] border-gray-400 w-[100%] md:flex max-md:flex max-md:flex-col  justify-center items-center  px-[7%] py-8 '>
                <div className='w-[100%] md:flex max-md:flex max-md:flex-col  max-md:gap-5 justify-between items-center pt-4 '>
                        <h1 className='font-bold text-center'>© Copyright 2024 <span className='text-[#25fcfc]'>UNITECHNo</span> All Rights Reserved.</h1>
                        <div className="flex items-center gap-4">
                            <h1 className='text-lg font-bold'>Follow Us: </h1>
                             <div className=' flex items-center gap-5'>
                        <div className='md:w-[2.5rem] max-md:w-[2rem] max-md:h-[2rem] md:h-[2.5rem] rounded-full text-white bg-[#3fb4e2] flex items-center justify-center'>
                        <FaLinkedinIn className='text-xl' />                      
                         </div>
                         <div className='md:w-[2.5rem] max-md:w-[2rem] max-md:h-[2rem] md:h-[2.5rem]  rounded-full text-white bg-[#3fb4e2] flex items-center justify-center'>
                        <SlSocialInstagram  className='text-xl ' />                      
                         </div>
                         <div className='md:w-[2.5rem] max-md:w-[2rem] max-md:h-[2rem] md:h-[2.5rem]  rounded-full text-white bg-[#3fb4e2] flex items-center justify-center'>
                        <FaYoutube   className='text-xl ' />                      
                         </div>
                         <div className='md:w-[2.5rem] max-md:w-[2rem] max-md:h-[2rem] md:h-[2.5rem]  rounded-full text-white bg-[#3fb4e2] flex items-center justify-center'>
                        <FaXTwitter   className='text-xl ' />                      
                         </div>
                    </div>
                        </div>
                </div>

            </div>
      </div>
    </Container>
  )
}
