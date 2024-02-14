import { Typography } from '@mui/material';
import React, { useRef } from 'react'

export default function Basic({setData,data,setErrors,errors,progress,setProgress}) {
    const name= useRef();
    const number= useRef();
    const email= useRef();
    const interest= useRef();
    const campus= useRef();
    const course=useRef()
    const handleSubmit=(event)=>{
        event.preventDefault();
        console.log(number.current.value.length)
        if(name.current.value.length<3){
        setErrors({...errors,name:"Name must be at least 3 characters long"})
        }
       
        if(!email.current.value.includes("@")){
           setErrors({...errors,email:"Email must include @"})
        return
       }
       
       if(number.current.value.length!==10){
           setErrors({...errors,number:"Number must be 10 digits long"})
           return
       }
       
       if(!interest.current.value){
           setErrors({...errors,interest:"Please select your interest"})
           return
       }
       if(!course.current.value){
        setErrors({...errors,course:"Please select your course"})
        return
    }
       if(!campus.current.value){
           setErrors({...errors,campus:"Please select your campus"})
           return
       }
       setErrors("")
        console.log(data, errors)
        setProgress({...progress,basic:true})
       }
  return (
    <div>
      <div className="flex flex-col gap-4 text-left justify-start p-3 mt-[1rem] flex-wrap">
        <h1 className="text-3xl text-blue-500 font-bold">Basic Information</h1>
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
          className="w-[80%] max-[566px]:w-[20rem] max-[348px]:w-[15rem] h-[2.4rem] border-black border-2"
          required
          onChange={(e)=>setData({...data,name:e.target.value})}
        />
        <p>{errors.name}</p>
        <Typography className="pt-4">You mobile number</Typography>
        <div className="border-2 w-fit h-fit max-[348px]:w-[15rem]    border-black">
          <select className="pt-4 h-[100%] border-r-2 border-black  py-2 ">
            <option value="+91">+91</option>
            <option value="+92">+92</option>
            <option value="+93">+93</option>
          </select>
          <input
          ref={number}
            type="number"
            placeholder="Enter your number"
            className="p-2 w-[16.6rem] max-[348px]:w-[11.7rem] h-[3.2rem]"
            required
            onChange={(e)=>setData({...data,number:e.target.value})}
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
          className="w-[80%] max-[348px]:w-[15rem] max-[566px]:w-[20rem] p-2 h-[2.4rem] border-black border-2"
          onChange={(e)=>setData({...data,email:e.target.value})}
          required
        />
  <div>
            <Typography>Choose Courses</Typography>
            <select className="w-[80%] max-[348px]:w-[15rem] max-[566px]:w-[20rem]  p-2 h-[2.4rem] border-black border-2" ref={course} onChange={(e)=>setData({...data,course:e.target.value})}>
              <option value="" selected="" disabled="">
                Select courses
              </option>
              <option value={"Bangalore"}>Java Full stack</option>
              <option value="pune">Frontend developer</option>
              <option value={"hubli"}>PHP</option>
            </select>
            <p>{errors.course}</p>
          </div>
        <div className="md:flex max-[996px]:flex-col gap-4 pt-4">
          <div>
            <Typography>I'm interested in</Typography>
            <select  className="w-[20rem] max-[348px]:w-[15rem] p-2 h-[2.4rem] border-black border-2" ref={interest} onChange={(e)=>setData({...data,interest:e.target.value})}>
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
          <div>
            <Typography>Preferred Campus</Typography>
            <select className="w-[20rem] max-[348px]:w-[15rem] p-2 h-[2.4rem] border-black border-2" ref={campus} onChange={(e)=>setData({...data,campus:e.target.value})}>
              <option value="" selected="" disabled="">
                Select campus
              </option>
              <option value={"Bangalore"}>Bangalore</option>
              <option value="pune">Pune</option>
              <option value={"hubli"}>Hubli</option>
            </select>
            <p>{errors.campus}</p>
          </div>
        </div>
       
        <div className="border-b-2 pt-[3rem]" />
        <p className="py-3">
          By submitting the form, you agree to our Terms and Conditions and our
          Privacy Policy.{" "}
        </p>
        <div className="md:ml-[85%]">
         
          <button className='border-2 bg-blue-400 px-5 py-2 text-white font-bold'>Next</button>
        </div>
      </form>
    </div>
  )
}
