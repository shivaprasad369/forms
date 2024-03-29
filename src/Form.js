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
    <div className="flex max-md:flex-col justify-center gap-6 overflow-x-hidden">
    <div className={`flex flex-col flex-wrap gap-2 border-2 m-2  max-md:mr-2  `}>
   
    <nav className={`flex w-full justify-betwwen m-0 border-2 h-fit  bg-white backdrop-blur-md ${progress.program ? 'bg-gray-400' :""}`}>
        <div className={`flex rounded-r-full w-[70%] border-r-2 p-2 gap-3 ${progress.professional ? 'bg-gray-400' :""}`}>
        <div className={`flex rounded-r-full w-[200%] flex-col border-r-2 p-1 ${progress.basic ? 'bg-gray-400' :""} gap-3` }>
       {progress.basic ?
       ( <svg xmlns="http://www.w3.org/2000/svg" width={'20'} viewBox="0 0 512 512"><path fill="#008000" d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"/></svg>):<svg xmlns="http://www.w3.org/2000/svg" width={25} viewBox="0 0 512 512"><path d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"/></svg>} 
            <div>
                <h2 className={`${progress.basic ? ' text-pink-700' :""} max-md:text-sm font-bold`}>Basic Information</h2>
                <h2  className="  text-sm ">Help us know you better</h2>
            </div>
        </div>
        <div  className="w-[200%] p-1">
        {progress.professional ?( <svg xmlns="http://www.w3.org/2000/svg" width={'20'} viewBox="0 0 512 512"><path fill="#008000" d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"/></svg>):<svg xmlns="http://www.w3.org/2000/svg" width={25} viewBox="0 0 512 512"><path d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"/></svg>} 
            <div>
                <h2 className={`${progress.professional ? ' text-pink-700' :"" } pt-2 max-md:text-sm font-bold`}>Professional Info</h2>
                <h2 className=" text-sm ">Help us know you better</h2>
            </div>
        </div>
        </div>
        <div className="p-2">
        {progress.professional ?( <svg xmlns="http://www.w3.org/2000/svg" width={'25'} viewBox="0 0 512 512"><path fill="#008000" d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"/></svg>):<svg xmlns="http://www.w3.org/2000/svg" width={25} viewBox="0 0 512 512"><path d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"/></svg>} 
            <div>
                <h2 className={`${progress.program ? ' text-pink-700' :""} pt-2 max-md:text-sm font-bold`}>Any Question?.</h2>
                <h2 className=" text-[0.7rem]">Help us know you better</h2>
            </div>
        </div>
    </nav>

      {!progress.basic && (<><Basic setData={setData} setErrors={setErrors} data={data} errors={errors} progress={progress} setProgress={setProgress}/></>)} 
     {progress.basic && <Professional setData={setProf} data={Prof} setProgress={setProgress} progress={progress}/>}
     {progress.professional && <Last  Basic={data} setProgress={setProgress}  prof={Prof}/>}
 
    </div>
    <img src={image} className=" md:w-[80%] h-[100%] p-3"/>
    </div>
  );
}
