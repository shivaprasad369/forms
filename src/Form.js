import { Button, TextField, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import Professional from "./Professional";
import Basic from "./Basic";
import Prof from "./prof";
import Last from "./Last";
import image from "./banners.jpg"
export default function Form() {
    const [errors,setErrors]=useState({
        name:'',
        number:"",
        email:"",
        interest:"",
        course:'',
        campus:""
    })
    const [data,setData]=useState({
        name:'',
        number:"",
        email:"",
        interest:"",
        course:'',
        campus:""
    })
    const [progress, setProgress]=useState({
        basic:false,
        professional:false,
        program:false
    })
    const [Prof,setProf]=useState({
        name:'',
        dPass:'',
        dPercentage:'',
        pgName:'',
        specialization:"",
        college:'',
        pgPass:'',
        pgPercentage:''
      })
      const handleReset=()=>{
        setProgress({
            basic:false,
            professional:false,
            program:false
        })
      }
  return (
    <div className="md:flex justify-between gap-6 overflow-x-hidden">
    <div className="flex flex-col flex-wrap gap-3 border-2 m-3  max-md:mr-3 ">
   
    <nav className="flex w-full m-0 border-b-2  bg-white backdrop-blur-md">
        <div className={`flex rounded-r-full border-r-2 p-2 ${progress.basic ? 'bg-gray-400' :""} gap-3` }>
       {progress.basic ?
       ( <svg xmlns="http://www.w3.org/2000/svg" width={'20'} viewBox="0 0 512 512"><path fill="#008000" d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"/></svg>):<svg xmlns="http://www.w3.org/2000/svg" width={25} viewBox="0 0 512 512"><path d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"/></svg>} 
            <div>
                <h2 className={`${progress.basic ? ' text-pink-700' :""} max-md:text-sm font-bold`}>Basic Information</h2>
                <h2  className="  text-sm">Help us know you better</h2>
            </div>
        </div>
        <div className={`flex rounded-r-full border-r-2 p-2 gap-3 ${progress.professional ? 'bg-gray-400' :""}`} >
        {progress.professional ?( <svg xmlns="http://www.w3.org/2000/svg" width={'20'} viewBox="0 0 512 512"><path fill="#008000" d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"/></svg>):<svg xmlns="http://www.w3.org/2000/svg" width={25} viewBox="0 0 512 512"><path d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"/></svg>} 
            <div>
                <h2 className={`${progress.professional ? ' text-pink-700' :""} max-md:text-sm font-bold`}>Professional Info</h2>
                <h2 className=" text-sm">Help us know you better</h2>
            </div>
        </div>
        <div className={`flex gap-3 rounded-r-full p-2  ${progress.program ? 'bg-gray-400' :""}`}>
        {progress.professional ?( <svg xmlns="http://www.w3.org/2000/svg" width={'25'} viewBox="0 0 512 512"><path fill="#008000" d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"/></svg>):<svg xmlns="http://www.w3.org/2000/svg" width={25} viewBox="0 0 512 512"><path d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"/></svg>} 
            <div>
                <h2 className={`${progress.program ? ' text-pink-700' :""} max-md:text-sm font-bold`}>Any Question?.</h2>
                <h2 className=" text-[0.7rem]">Help us know you better</h2>
            </div>
        </div>
    </nav>

      {!progress.basic && (<><Basic setData={setData} setErrors={setErrors} data={data} errors={errors} progress={progress} setProgress={setProgress}/></>)} 
     {progress.basic && <Professional setData={setProf} data={Prof} setProgress={setProgress} progress={progress}/>}
     {progress.professional && <Last  Basic={data} setProgress={setProgress}  prof={Prof}/>}
    {progress.basic && progress.professional && progress.program && 

    (<div onClick={handleReset} className="absolute backdrop-blur-xl items-center justify-center md:ml-[30%] mt-[10rem] ">
        <div className="flex flex-col justify-center items-center border-2 w-[30rem] h-[10rem] bg-white shadow-md">
        <svg xmlns="http://www.w3.org/2000/svg" width={'50'} viewBox="0 0 512 512"><path fill="#008000" d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"/></svg>
        <h1>Registered Successfully</h1>
        </div>
     </div>)}
    </div>
    <img src={image} className="w-[80%] h-full  p-3"/>
    </div>
  );
}
