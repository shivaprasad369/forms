import { Typography } from '@mui/material';
import axios from 'axios';
import React, { useRef, useState } from 'react'

export default function Basic({errors}) {
   const [datas,setDatas]=useState({
    Name:'',
   Phone:'',
    Email:'',
    Interst:'',
    Course:'',
  
   })
    const name= useRef();
    const number= useRef();
    const email= useRef();
    const interest= useRef();

    const course=useRef()
    const handleSubmit=(event)=>{
        event.preventDefault();
       axios.post('https://formpanel.onrender.com/api/v1/post',datas).then((data)=>alert('Thank you so much')).catch((error)=>alert(error))
       }

  return (
    <div>
      <div className="flex flex-col gap-4 text-left justify-start p-3 mt-[1rem] flex-wrap">
        <h1 className="text-3xl text-[#ac337e] font-bold">Basic Information</h1>
        <p className="text-gray-500 flex-wrap ">
          We value your privacy. We’ll never share your information with anyone
          else.
        </p>
      </div>
      <form className=" gap-3 pag-y-10 p-3" onSubmit={handleSubmit}>
        <Typography>Your Name</Typography>
        <input
        ref={name}
          type="text"
          placeholder="Enter your name"
          className="w-[80%] max-[566px]:w-[20rem] outline-none bg-slate-100 px-3  max-[348px]:w-[15rem] h-[3rem] rounded-md border-gray-300 border-0"
          required
          onChange={(e)=>setDatas({...datas,Name:e.target.value})}
        />
        <p>{errors.name}</p>
        <Typography className="pt-4">You mobile number</Typography>
        <div className="border-0 w-fit h-fit max-[348px]:w-[15rem]  rounded-md border-gray-300">
          <select className="pt-4 h-[100%] bg-slate-100  outline-none   py-2 " required>
            <option value="+91">+91</option>
            <option value="+92">+92</option>
            <option value="+93">+93</option>
          </select>
          <input
          ref={number}
            type="number"
            placeholder="Enter your number"
            className="p-2 md:w-[16.6rem] border-l-2 rounded-md bg-slate-100 border-gray-300 outline-none max-md:w-[11.7rem] h-[3.2rem]"
            required
            onChange={(e)=>setDatas({...datas,Phone:e.target.value})}
          />
        </div>
          <p>{errors.number}</p>
        <p className="text-gray-500">
          We'll call you on this number to take your application forward.
        </p>

        <Typography className="pt-4">Your Email</Typography>
        <input
        ref={email}
          type="email"
          placeholder="Enter your email"
          className="w-[80%] max-[348px]:w-[15rem] bg-slate-100 outline-none max-[566px]:w-[20rem] p-2 h-[3rem] rounded-md border-gray-300 border-0"
          onChange={(e)=>setDatas({...datas,Email:e.target.value})}
          required
        />
  <div className=' mt-[1rem] hidden'>
            <Typography>Choose Courses</Typography>
            <select className="w-[80%] max-[348px]:w-[15rem] max-[566px]:w-[20rem]  p-2 h-[2.4rem] rounded-md border-gray-300 border-2" ref={course} onChange={(e)=>setDatas({...datas,Course:e.target.value})}> required
              <option value="" selected="" disabled="">
                Select courses
              </option>
              <option value={"Java Full Stack"}>Java Full stack</option>
              <option value="Front End development">Frontend development</option>
              <option value={"PHP"}>PHP</option>
              <option value={"Laravel"}>Laravel</option>

              <option value={"Android"}>Android</option>

              <option value={"tally"}>Tally</option>
              <option value={"Mern"}>Mern Stack</option>
              <option value={"UI/UX"}>UI/UX designing</option>
              <option value={"HR"}>HR</option>
              <option value={"Digital marketing"}>Digital Marketing</option>
              <option value={"Backend"}>Backend development</option>
              <option value={"basic computer"}>Basic computer</option>


            </select>
            <p>{errors.course}</p>
          </div>
      
          <div className=' mt-[1rem] hidden'>
            <Typography>I'm interested in</Typography>
            <select  className="w-[80%]  outline-none max-[348px]:w-[15rem] max-[566px]:w-[20rem]  p-2 h-[2.4rem] rounded-md border-gray-300 border-2" ref={interest} onChange={(e)=>setDatas({...datas,Interst:e.target.value})} required>
              <option value="" selected="" disabled="">
                I'm interested in
              </option>
              <option value={"Online"}>
                Online
              </option>
              <option value="Offline">
               Offline
              </option>
            </select>
            <p>{errors.interest}</p>
          </div>
          

       
        <div className="border-b-2 pt-[3rem]" />
        <p className="py-3">
          By submitting the form, you agree to our Terms and Conditions and our
          Privacy Policy.{" "}
        </p>
        <div className='flex justify-between'>

        <button type='button' className='border-0 bg-gradient-to-r rounded-lg from-[#0c0b0b] to-[#424242] px-5 py-2 text-white font-bold'><a href='https://learnersitacademy.com/'>Back</a></button>
        <div className="">
         
          <button className='border-0 bg-gradient-to-r rounded-lg from-[#c04071] to-[#eb7ea7] px-5 py-2 text-white font-bold'>Next</button>
        </div>
        </div>
      </form>
    </div>
  )
}
