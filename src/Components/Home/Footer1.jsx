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
            <div className='w-[100%] px-[7%]z-30  flex justify-around  py-[4rem] '>
                <div className='w-[30%] flex flex-col gap-5'>
                    <img src={require('../../Assets/logos.jpg')} className='w-[80%]' alt="" />
                    <p className=' text-md font-semibold tracking-wider leading-[1.7rem]'>
                    We are many variations of the passages available but the majoro have suffered alteration injected.
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
                <div className='flex flex-col gap-3'>
<h1 className='text-xl font-bold pb-[1rem] border-b-[1px] border-gray-400 w-fit'>Quick Links</h1>
<div className='flex flex-col gap-3'>
    <a href="#" className='text-lg font-semibold hover:text-blue-400 transition-all'>About Us</a>
    <a href="#" className='text-lg font-semibold hover:text-blue-400 transition-all'>Services</a>
    <a href="#" className='text-lg font-semibold hover:text-blue-400 transition-all'>Contact Us</a>
    <a href="#" className='text-lg font-semibold hover:text-blue-400 transition-all'>Careers</a>
    <a href="#" className='text-lg font-semibold hover:text-blue-400 transition-all'>Privacy Policy</a>
    <a href="#" className='text-lg font-semibold hover:text-blue-400 transition-all'>Terms & Conditions</a>

</div>

                    </div>
                    <div className='flex flex-col gap-3'>
<h1 className='text-xl font-bold pb-[1rem] border-b-[1px] border-gray-400 w-fit'>Browse Category</h1>
<div className='flex flex-col gap-3'>
    <a href="#" className='text-lg font-semibold hover:text-blue-400 transition-all'>Lorem ipsum dolor</a>
    <a href="#" className='text-lg font-semibold hover:text-blue-400 transition-all'>Lorem  dolor</a>
    <a href="#" className='text-lg font-semibold hover:text-blue-400 transition-all'>Lorem </a>
    <a href="#" className='text-lg font-semibold hover:text-blue-400 transition-all'>Lorem ipsum </a>
    <a href="#" className='text-lg font-semibold hover:text-blue-400 transition-all'>Lorem ipsum dolor</a>
    <a href="#" className='text-lg font-semibold hover:text-blue-400 transition-all'>Lorem ipsum dolor</a>

</div>

                    </div>
                    <div className='flex flex-col gap-3'>
<h1 className='text-xl font-bold pb-[1rem] border-b-[1px] border-gray-400 w-fit'>Support Center</h1>
<div className='flex flex-col gap-3'>
    <a href="#" className='text-lg font-semibold hover:text-blue-400 transition-all'>Lorem ipsum dolor</a>
    <a href="#" className='text-lg font-semibold hover:text-blue-400 transition-all'>Lorem  dolor</a>
    <a href="#" className='text-lg font-semibold hover:text-blue-400 transition-all'>Lorem </a>
    <a href="#" className='text-lg font-semibold hover:text-blue-400 transition-all'>Lorem ipsum </a>
    <a href="#" className='text-lg font-semibold hover:text-blue-400 transition-all'>Lorem ipsum dolor</a>
    <a href="#" className='text-lg font-semibold hover:text-blue-400 transition-all'>Lorem ipsum dolor</a>

</div>

                    </div>
                    
                
            </div>   
            <div className='pt-2 border-t-[1px] border-gray-400 w-[100%] flex justify-center items-center  px-[7%] py-8 '>
                <div className='w-[100%] flex justify-between items-center pt-4 '>
                        <h1 className='font-bold'>© Copyright 2024 <span className='text-[#25fcfc]'>UNITECHNo</span> All Rights Reserved.</h1>
                        <div className="flex items-center gap-4">
                            <h1 className='text-lg font-bold'>Follow Us: </h1>
                             <div className=' flex items-center gap-5'>
                        <div className='w-[2.5rem] h-[2.5rem] rounded-full text-white bg-[#3fb4e2] flex items-center justify-center'>
                        <FaLinkedinIn className='text-xl' />                      
                         </div>
                         <div className='w-[2.5rem] h-[2.5rem] rounded-full text-white bg-[#3fb4e2] flex items-center justify-center'>
                        <SlSocialInstagram  className='text-xl ' />                      
                         </div>
                         <div className='w-[2.5rem] h-[2.5rem] rounded-full text-white bg-[#3fb4e2] flex items-center justify-center'>
                        <FaYoutube   className='text-xl ' />                      
                         </div>
                         <div className='w-[2.5rem] h-[2.5rem] rounded-full text-white bg-[#3fb4e2] flex items-center justify-center'>
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
