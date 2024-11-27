import React from 'react'
import Container from '../Home/Container'
import { FaLocationArrow, FaPhoneAlt } from 'react-icons/fa'
import { MdEmail } from "react-icons/md";
export default function ContactPage() {
  return (
    <Container>
      <div className='w-[100%] lg:flex max-lg:flex max-lg:flex-col  px-[5%] gap-10'>
        <div className="lg:w-[30%] flex flex-col gap-10">
            <div className='w-[100%] p-[2rem] rounded-xl border-[1px] border-gray-200 hover:border-blue-300 transition-all duration-500'>
                <div className='w-[100%] flex items-center gap-5'>
                    <div className="w-[3rem] h-[3rem] rounded-md bg-[#3fb4e2] flex items-center justify-center text-white text-2xl">
                    <FaPhoneAlt />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-xl font-bold text-[#3fb4e2]'> 
                        Phone
                        </h1>
                        <div className='flex text-gray-500 flex-col gap-2'>
                            <p>
                            Toll-Free: 0000 - 123 - 456789
                            </p>

                            <p>
                            Fax: 0000 - 123 - 456789
                            </p>

                        </div>

                    </div>
                </div>
            </div>
            <div className='w-[100%] p-[2rem] rounded-xl border-[1px] border-gray-200 hover:border-[#3fb4e2] transition-all duration-500'>
                <div className='w-[100%] flex items-center gap-5'>
                    <div className="w-[3rem] h-[3rem] rounded-md bg-[#3fb4e2] flex items-center justify-center text-white text-2xl">
                    <MdEmail  />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-xl font-bold text-[#3fb4e2]'> 
                        Email
                        </h1>
                        <div className='flex text-gray-500 flex-col gap-2'>
                            <p>
                            mail@example.com
                            </p>

                            <p>
                            support@example.com
                            </p>

                        </div>

                    </div>
                </div>
            </div>
            <div className='w-[100%] p-[2rem] rounded-xl border-[1px] border-gray-200 hover:border-blue-300 transition-all duration-500'>
                <div className='w-[100%] flex items-center gap-5'>
                    <div className="w-[3rem] h-[3rem] rounded-md bg-[#3fb4e2] flex items-center justify-center text-white text-2xl">
                    <FaLocationArrow  />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-xl font-bold text-[#3fb4e2]'> 
                        Address
                        </h1>
                        <div className='flex text-gray-500 flex-col gap-2'>
                            <p>
                            No: 58 A, East Madison Street, <br />
Baltimore, MD, USA 4508
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div className='lg:w-[70%] flex flex-col gap-5'>
            <h1 className='text-3xl  font-bold text-[#3fb4e2] uppercase'>Contact form</h1>
            <form className='w-[100%] flex flex-col gap-8'>
                <input type="text" placeholder='"Name' name='name'
                className='outline-none border-[1px] border-gray-300 rounded-sm px-3 py-4 w-[100%]' required/>
                 
                 <input type="email" placeholder='"Email' name='email'
                className='outline-none border-[1px] border-gray-300 rounded-sm px-3 py-4 w-[100%]' required/>
                     <input type="number" placeholder='Phone' name='Phone'
                className='outline-none border-[1px] border-gray-300 rounded-sm px-3 py-4 w-[100%]' required/>
                <textarea rows={5} placeholder='"Message' name='message'
                className='outline-none border-[1px] border-gray-300 rounded-sm px-3 py-4 w-[100%]' required/>
                <button className='px-16 uppercase py-3 w-fit bg-[#3fb4e2] text-white font-bold tracking-wider  text-center '>
                    send
                </button>
            </form>

        </div>
      </div>
    </Container>
  )
}
